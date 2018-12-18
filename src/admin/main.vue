<template>
  <v-content>
    <admin-status></admin-status>
    <admin-table></admin-table>
  </v-content>
</template>

<script>
  import status from './status.vue';
  import table from './table.vue';
  export default {
    components:{
      'admin-status': status,
      'admin-table': table
    }
  }
</script>
