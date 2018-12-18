<template>
  <form v-on:submit.prevent="doLogin">
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Select user type</label>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" v-model="user.picked" name="optionsRadios" id="studentLogin"
                 value="studentLogin" checked>Student
        </label>
        <label class="form-check-label">
          <input type="radio" v-model="user.picked" name="optionsRadios" id="staffLogin"
                 value="staffLogin">Staff
        </label>
      </div>
    </div>
    <template v-if=" user.picked === 'studentLogin'">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Student ID</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="user.username"
                 placeholder="Student ID">
        </div>
      </div>
    </template>
    <template v-else>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Staff Username</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="user.username" placeholder="Staff ID">
        </div>
      </div>
    </template>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" v-model="user.password"
               placeholder="Enter your password">
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-10" >
        <button id="loginSubmit" v-on:click="submit()" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
    <p v-if="submitData">{{submitData|json}}</p>
  </form>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        message: 'Hello Vue!',
        input: '',
        submitData: null,
        user: {
          picked: 'studentLogin',
          username: null,
          password: null
        }
      }
    },
    methods: {
      doLogin: function () {
        this.submitData = this.user;
      },
      submit: function () {
        console.log('button clicked');
      }
    }
  }
</script>
<style src="bootstrap/dist/css/bootstrap.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

