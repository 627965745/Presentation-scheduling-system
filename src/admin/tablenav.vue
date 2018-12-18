<template>
    <v-layout row wrap>
      <p>Select table: &emsp;</p>
      <router-link to="/admin/stu" keep-alive> Student </router-link>&emsp;
      <router-link to="/admin/mark" keep-alive> Marker </router-link>&emsp;
      <router-link to="/admin/room" keep-alive> Room </router-link>
    </v-layout>
</template>

<script>

  export default {
    data: () => ({

    })
  }
</script>
