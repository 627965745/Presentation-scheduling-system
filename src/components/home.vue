<template>
  <div>
    <br>
    <form v-on:submit.prevent="doLogin">
      <h4>Login</h4>
      <br>
      <div class="form-group row">
        <label class="col-sm-4 col-form-label">Select user type</label>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input type="radio" v-model="user.picked" v-on:change="checkUser()" name="optionsRadios" id="studentLogin"
                   value="studentLogin" checked>Student
          </label>
          <label class="form-check-label">
            <input type="radio" v-model="user.picked" v-on:change="checkUser()" name="optionsRadios" id="staffLogin"
                   value="staffLogin">Staff
          </label>
        </div>
      </div>
      <template v-if=" user.picked === 'studentLogin'">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Student ID</label>
          <div class="col-sm-8">
            <input type="number" class="form-control" v-model.trim="user.username" v-on:keyup="checkUser()"
                   placeholder="Student ID">
          </div>
        </div>
      </template>
      <template v-else>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Staff Username</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" v-model.trim="user.username" v-on:keyup="checkUser()"
                   placeholder="Staff ID">
          </div>
        </div>
      </template>
      <div class="form-group row">
        <label class="col-sm-4 col-form-label">Password</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" v-model.trim="user.password"
                 placeholder="Enter your password">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-md-4">
        </div>
        <div class="col-md-6">
          <button id="loginSubmit" v-on:click="submit()" type="submit" :disabled="valid ? false : true"
                  class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
      <p v-if="submitData">{{submitData}}</p>
      <p v-if="!valid" style="color:#ff0000;"> {{warn}}</p>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        valid: false,
        message: 'Hello Vue!',
        input: '',
        warn: null,
        submitData: null,
        user: {
          picked: 'studentLogin',
          username: '',
          password: null
        }
      }
    },
    methods: {
      doLogin() {
        this.submitData = this.user;
        JSON.stringify(this.submitData);
      },
      submit() {
        console.log('button clicked');
      },
      checkUser() {
        if (this.user.picked === 'studentLogin') {
          if (this.user.username.length === 9) {
            this.valid = true
          } else {
            this.warn = 'Invalid Student ID!';
            this.valid = false;
          }
        } else if (this.user.picked === 'staffLogin') {
          if (3 < this.user.username.length && this.user.username.length < 7) {
            this.valid = true
          } else {
            this.warn = 'Invalid Username!';
            this.valid = false;
          }
        } else {
          this.valid = false;
        }
      }
    }
  }
</script>


