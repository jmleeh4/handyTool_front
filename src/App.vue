<template>
  <v-app id="app">
    <v-main>
      <v-container
          style="position: relative; top: 20%; margin: auto"
          class="text-xs-center"
      >
        <v-layout row wrap class="text-xs-center">
          <v-col>
            <v-card  class="mx-auto" max-width="800">
              <v-row style="margin-top: 60px">
                <v-col style="margin: auto">
                  <v-form style="width: 400px; height: 400px; margin: auto" >
                    <div class="mx-3">

                      <div class="mx-1" style="text-align: left; margin-bottom: 5px">
                        <v-icon color="black" size="30px">mdi-account</v-icon>
                        로그인
                      </div>
                      <div class="mx-1">
                        <v-text-field
                            placeholder="userId"
                            v-model="userId"
                            required
                        ></v-text-field>
                      </div>
                    </div>
                    <div class="mx-3">
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
                          size="x-large"
                          block
                          @click="loginSubmit"
                      >Login</v-btn
                      >
                    </v-card-actions>
                    <div style="color: red"></div>
                    <v-card-actions>
                        <v-breadcrumbs :items="items" style="margin: auto">
                          <template v-slot:prepend>

                          </template>
                        </v-breadcrumbs>
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
      items: [
        {
          title: '아이디 찾기',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          title: '비밀번호 찾기',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
      ],
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
