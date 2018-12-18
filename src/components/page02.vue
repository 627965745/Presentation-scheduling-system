<template>
  <div class="container">
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="input-group">
          <input type="text" class="form-control" v-model="input">
          <button v-on:click="request()" class="btn btn-default"> Submit</button>
        </div>
      </div>
    </div>
    <p>{{input}}</p>
    <p>{{ajax}}</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        input: '',
        ajax: null
      }
    },
    methods: {
      request(){
        axios.get('/php/auth.php', {
            params: {
              id: this.input
            }
          })
          .then(response => {
            this.ajax = response.data;
          })
          .catch(error => {
            this.ajax = error;
          })
      }
    },
    components: {}
  }
</script>
