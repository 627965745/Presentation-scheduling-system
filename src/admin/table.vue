<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
          <tablenav></tablenav>
        <v-layout row wrap>
          <router-view></router-view>
        </v-layout>

      </v-flex>

      <v-flex d-flex xs4 >
        <v-card color="blue lighten-2" dark v-scroll="onScroll">
          <v-card-text
            v-text="lorem.slice(0, 10)">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import nav from './tablenav.vue';
  export default {
    data () {
      return {
        lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritate.'
      }
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    },
    components:{
      'tablenav' : nav
    }
  }


</script>
