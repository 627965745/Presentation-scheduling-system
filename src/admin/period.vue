<template>
  <v-container fluid grid-list-md>
    <v-card color="white">
      <v-card-title class="title">Presentation Starting Date</v-card-title>
      <date-picker v-model="time1" format="dd-MM-yyyy"  @input="startconfirm()" lang="en"></date-picker>
      <date-picker v-model="time2" format="dd-MM-yyyy"  @input="endconfirm()" lang="en"></date-picker>
      <v-btn v-on:click="request()" color="info">Info</v-btn>
    </v-card>
    {{ajax}}
  </v-container>
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import moment from 'moment'
  export default {
    data () {
      return {
        time1: '',
        time2: '',
        ajax: 'haha'
      }
    },
    methods: {
      startconfirm(){
        this.time1 = moment(this.time1).format("YYYY-MM-DD");
        console.log(this.time1);
      },
      endconfirm(){
        this.time2 = moment(this.time2).format("YYYY-MM-DD");
        console.log(this.time2);
      },
      request(){
        axios.get('/php/admin/preperiod.php', {
          params: {
            start: this.time1,
            end : this.time2
          }
        })
      }
    },
    components: {
      'date-picker': DatePicker
    }
  }
</script>
