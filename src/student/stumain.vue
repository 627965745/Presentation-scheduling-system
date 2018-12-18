<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs8 >
        <h2 class="text-lg-left">Presentation Period: From {{ starttime }} to {{ finishtime }}</h2>
      </v-flex>
      <v-flex xs4>
      <h3 class="text-lg-right">Welcome! &emsp; {{ username }} <v-btn outline v-on:click="logout()">Logout</v-btn></h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <h2 class="text-lg-left">Today's date: {{today}}</h2>
      </v-flex>
    </v-layout>
    <br/><br/>
    <template v-if="enterpref">
      <v-card color="white">
        <v-card-title class="title">Enter your time preference</v-card-title>
        <br/>
        <v-layout row wrap>
          <h3>&emsp;&emsp;First preference&emsp;</h3>
          <date-picker
            v-model="pref1"
            type="datetime"
            format="dd-MM-yyyy HH:mm"
            :not-before = "starttime"
            :not-after = "finishtime"
            :time-picker-options="{start: '09:00',step: '00:15',end: '17:00'}"
            lang="en"
          ></date-picker>
        </v-layout>
        <br/>
        <v-layout row wrap>
          <h3>&emsp;&emsp;Second preference&emsp;</h3><br>
          <date-picker
            v-model="pref2"
            type="datetime"
            format="dd-MM-yyyy HH:mm"
            :time-picker-options="{start: '09:00',step: '00:15',end: '17:00'}"
            lang="en"
          ></date-picker>
        </v-layout>
        <br/>
        <v-layout row wrap>
          <h3>&emsp;&emsp;Third preference&emsp;</h3><br>
          <date-picker
            v-model="pref3"
            @input = "checkavail(pref3)"
            type="datetime"
            format="dd-MM-yyyy HH:mm"
            :time-picker-options="{start: '09:00',step: '00:15',end: '17:00'}"
            lang="en">
          </date-picker>
        </v-layout>
        <v-btn v-on:click="sendpref()" color="info">Save</v-btn>
      </v-card>
    </template>

  </v-container>
</template>
<script>
  import DatePicker from 'vue2-datepicker'
  export default {
    data () {
      return {
        username: '',
        error: '',
        info: '',
        starttime: '',
        finishtime: '',
        today: '',
        enterpref: true,
        pref1: '',
        pref2: '',
        pref3: ''
      }
    },
    methods: {
      checklogin(){
        axios.get('/php/session.php')
          .then(response => {
            //console.log(response.data);
            this.username = response.data;
            if(this.username == "403"){
              console.log(response.data);
              this.$router.push({name : 'login', params: {info : 'You need to login first.'}})
            }
          })
          .catch(error => {
            this.error = error;
          })
      },
      logout(){
        axios.get('/php/logout.php')
          .then(response => {
            this.info = response.data;
            if(this.info == "205"){
              this.$router.push({name : 'login', params: {info : 'Successfully logged out.'}})
            }
          })
          .catch(error => {
            this.error = error;
          })
      },
      getperiod(){
        axios.get('/php/stu/getperiod.php')
          .then(response => {
            this.starttime = response.data.starttime;
            this.finishtime = response.data.finishtime;
            this.today = response.data.today;
          })
          .catch(error => {
            this.error = error;
          })
      },
      sendpref(){

      },
      checkavail(time){
        time = new Date(time);
        if(time.getHours() != 0){
          console.log("checking")
        }
      }
    },
    created () {
      this.checklogin()
    },
    mounted () {
      this.getperiod()
    },
    components: {
      'date-picker': DatePicker
    }
  }
</script>
