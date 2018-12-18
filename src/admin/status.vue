<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs2>
        <h2 class="text-lg-left">Current Status
          <v-btn color="white" v-on:click="getstatus()">Refresh</v-btn></h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2>
        <h2 class="text-lg-left">Set up time slots</h2>
        <v-layout row wrap class="pt-2"><v-btn color="primary">Add new slots</v-btn></v-layout>
      </v-flex>
      <v-flex xs2>
        <v-layout row wrap>
          <h2>Preference</h2>
        </v-layout>
        <v-layout row wrap>
            <h3>student: {{status.prefstu}} / {{status.totalstu}}</h3>
        </v-layout>
        <v-layout row wrap>
          <h3>marker: {{status.prefmark}} / {{status.totalmark}}</h3>
          {{status.error}}
        </v-layout>
      </v-flex>
      <v-flex xs2>
        <v-layout row wrap>
          <h2>Allocation</h2>
        </v-layout>
        <v-layout row wrap>
          <h3>student: {{status.allocstu}} / {{status.totalstu}}</h3>
        </v-layout>
        <v-layout row wrap>
          <h3>marker: {{status.allocmark}} / {{status.totalmark}}</h3>
          {{status.error}}
        </v-layout>
      </v-flex>
      <v-flex xs4 class="text-lg-centre">
        Sort students by:
        <v-btn-toggle v-model="allocMethod" class="ml-2">
          <v-btn flat value="preference">
            Preference
          </v-btn>
          <v-btn flat value="rank">
            Rank
          </v-btn>
        </v-btn-toggle>
      </v-flex>
      <v-flex xs2 class="text-lg-right">
        <v-btn color="primary" v-on:click="release()">Release</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        allocMethod: {
          value: null
        },
        status:{
          totalstu: -1,
          totalmark: -1,
          prefstu: -1,
          prefmark: -1,
          allocstu: -1,
          allocmark: -1,
          error: ''
        }
      }
    },
    mounted(){
      this.getstatus()
    },
    methods: {
      getstatus(){
        axios.get('/php/admin/status.php')
          .then(response => {
            console.log('button clicked');
            this.status.totalstu = response.data.stutotal;
            this.status.totalmark = response.data.marktotal;
            this.status.prefstu = response.data.stupref;
            this.status.prefmark = response.data.markpref;
            this.status.allocstu = response.data.stualloc;
            this.status.allocmark = response.data.markalloc;
          })
          .catch(error => {
            this.status.error = error;
          })
      },
      release(){
        console.log('button clicked');
      }
    }
  }
</script>
