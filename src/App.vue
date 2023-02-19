<template>
  <v-app id="app">
    <v-main>
      <v-container
          style="position: relative; top: 20%; margin-left: 20%"
          class="text-xs-center"
      >
        <v-layout row wrap class="text-xs-center">
          <v-col>
            <v-card flat class="mx-auto" max-width="800">
              <v-row style="margin-top: 60px">
                <v-col>
                  <v-form style="width: 400px; height: 300px">
                    <div class="mx-3">
                      <v-icon color="black" size="30px">person</v-icon>
                      userId
                      <div class="mx-1">
                        <v-text-field
                            placeholder="userId"
                            v-model="userId"
                            required
                        ></v-text-field>
                      </div>
                    </div>
                    <div class="mx-3">
                      <v-icon color="black" size="30px">lock</v-icon>
                      userPassword
                      <div class="mx-1">
                        <v-text-field
                            placeholder="userPassword"
                            type="password"
                            v-model="password"
                            required
                        ></v-text-field>
                      </div>
                    </div>

                    <v-card-actions>
                      <v-btn
                          color="#2c4f91"
                          dark
                          large
                          block
                          @click="loginSubmit"
                      >Login</v-btn
                      >
                    </v-card-actions>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export default {

  name: 'App',
  components: {

  },
  data(){
    return{
      userId : "",
      password : "",
    }
  },
  methods : {
    loginSubmit() {
      alert('test');
    },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
