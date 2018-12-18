<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex>
        <h2>Login</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        {{ this.$route.params.info }}{{ error }}
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs5></v-flex>
      <v-flex>
        <v-radio-group v-model="user.type" row :mandatory="false">
          <v-radio label="student" value="student"></v-radio>
          <v-radio label="mark" value="mark"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs5></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4></v-flex>
      <v-flex>
        <v-form v-model="valid" ref="form" lazy-validation @keyup.native.enter="submit">
          <template v-if=" user.type === 'student'">
            <v-text-field
              label="Student ID"
              v-model="user.username"
              :rules="stuRules"
              name = "username"
              :counter="9"
              required
            ></v-text-field>
          </template>
          <template v-if=" user.type === 'mark'">
            <v-text-field
              label="User ID"
              v-model="user.username"
              name = "username"
              :rules="markRules"
              required
            ></v-text-field>
          </template>
          <v-text-field
            label="Password"
            v-model="user.password"
            :rules="passRules"
            type="password"
            required
          ></v-text-field>
          <v-btn
            @click="submit"
            :disabled="!valid"
          >
            submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-flex>
      <v-flex xs4></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
        user: {
          type: 'student',
          username: '',
          password: null
        },
      valid: true,
      stuRules: [
        (v) => !!v || 'ID is required',
        (v) => v && v.length <= 9 || 'ID must be 9 integers',
        (v) => /^\d+$/.test(v) || 'ID must be 9 integers'
      ],
      markRules: [
        (v) => !!v || 'User ID is required',
      ],
      passRules: [
        (v) => !!v || 'Password is required',
      ],
      error: '',
      response: ''
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          axios.get('/php/auth.php', {
            params: {
              type: this.user.type,
              username: this.user.username,
              password: this.user.password
            }
          }).then(response => {
            this.response = response.data;
            console.log(this.response);
            if(this.response == "200"){
              this.$router.push({name : 'stumain'})
            } else {
              this.error = "Username or Password is invalid"
            }
          })
            .catch(error => {
              this.error = error;
            })
        }
      },clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
