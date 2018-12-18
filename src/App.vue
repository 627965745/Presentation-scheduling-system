<template>
    <v-app>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card dark color="purple">
              <v-card-title>
                <div>
                  <h1>COMP110 PRESENTATION</h1>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
        <v-container grid-list-md>
          <router-view name="header-top"></router-view>
          <router-view></router-view>
          <router-view name="header-bottom"></router-view>
        </v-container>
      </v-container>
    </v-app>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons';
</style>

