<template>
  <v-main>
    <v-container
        style="position: relative; top: 20%; margin: auto"
        class="text-xs-center"
    >
      <v-layout row wrap class="text-xs-center">
        <v-col style="height: 700px">
          <v-card  class="mx-auto" max-width="800">
            <v-row style="margin-top: 60px">
              <v-col style="margin: auto; height: 600px">
                <v-form style="width: 400px; height: 500px; margin: auto; margin-top: 20px" >
                  <div class="mx-3">
                    <div class="mx-3 font-weight-black text-h4" style="text-align: center; margin-bottom: 70px; color: cornflowerblue">
                      <v-icon icon="mdi-home" style="margin-right: -10px"/>
                      HandyTool
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
                  <div class="font-weight-medium" style="color: cornflowerblue; text-align: center">아이디가 없으십니까?  <router-link to="/registration">회원가입</router-link></div>
                </v-form>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Login",

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

<style scoped>

</style>