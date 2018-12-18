<template>
  <v-container>
    <v-layout row wrap>
      <v-btn color="primary" @click.stop="addroom = true">Add a new room</v-btn>
    </v-layout>
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.roomid }}</td>
        <td class="text-xs-right">{{ props.item.roomid }}</td>
        <td class="text-xs-right">{{ props.item.roomnum }}</td>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Cannot retrieve room information</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="addroom" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <h3 class="headline">Add a new room</h3>
        </v-card-title>
        <v-card-text>
          <h4>Room location</h4>
          <v-text-field
            placeholder="e.g Ashton 2.4"
            v-model="location"
          ></v-text-field>
        </v-card-text>

        <v-layout row wrap>
          <v-btn color="primary" flat @click="addRow">Add restriction</v-btn>
        </v-layout>

        <v-layout row wrap>
          <p></p>
        </v-layout>
        <v-layout row wrap>
          <p></p>
        </v-layout>

        <v-layout row wrap v-for="(row, index) in rows" v-bind:key="row.id">
          <v-flex xs5>
            &emsp;from:&emsp;
            <date-picker
              v-model="rows[index].restrictfrom"
              type="datetime"
              format="dd-MM-yyyy HH:mm"
              :time-picker-options="{start: '09:00',step: '01:00',end: '17:00'}"
              lang="en"
            ></date-picker>
          </v-flex>
          <v-flex xs5>
            &emsp;to:&emsp;
            <date-picker
              v-model="rows[index].restrictto"
              type="datetime"
              format="dd-MM-yyyy HH:mm"
              :time-picker-options="{start: '09:00',step: '01:00',end: '17:00'}"
              lang="en"
            ></date-picker>
          </v-flex>
          <v-flex xs2>
            <v-btn color="primary" flat @click="removeRow(index)">Remove</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          {{rows}}
        </v-layout>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="addroom=false">Close</v-btn>
          <v-btn color="primary" flat @click.stop="addaroom">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import moment from 'moment'
  export default {
    data: () => ({
      addroom: false,
      headers: [
        {
          text: 'Room',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Room ID', value: 'roomid' },
        { text: 'Location', value: 'roomnum' }
      ],
      items:[],
      location:'',
      rows: [

      ],
      nextid: 1,
      dialog: false,
    }),
    mounted(){
      this.getroom()
    },
    methods: {
      addRow: function () {
        try {
          this.rows.push({id: this.nextid++});
        } catch(e)
        {
          console.log(e);
        }
      },
      removeRow: function (i) {
        this.rows.splice(i, 1);
      },
      getroom(){
        axios.get('/php/admin/getroom.php')
          .then(response => {
            this.items = response.data;
          })
          .catch(error => {
            this.dialog = true;
          })
      },
      addaroom(){
        this.addroom=false;
        /*for (var i = 0; i < this.rows.length; i++) {
          this.rows[i].restrictfrom = new Date(this.rows[0].restrictfrom);
          this.rows[i].restrictfrom.setHours(this.rows[0].restrictfrom.getHours()+2);
          console.log(this.rows[i].restrictfrom)
          this.rows[i].restrictto = new Date(this.rows[0].restrictto);
          this.rows[i].restrictto.setHours(this.rows[0].restrictto.getHours()+2)
          console.log(this.rows[i].restrictto)
        };*/
        axios.get('/php/admin/addroom.php', {
          params: {
            location: this.location,
            rows : this.rows
          }
        })
      }
    },
    components: {
      'date-picker': DatePicker
    }
  }
</script>
