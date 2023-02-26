<template>
  <v-main>
    <v-container
        style="position: relative; margin: auto;"
        class="text-xs-center h-100"
    >
      <v-layout row wrap class="text-xs-center h-100">
        <v-col>
          <v-card  class="mx-auto h-100" max-width="800">
            <v-row style="margin-top: 60px;">
              <v-col style="margin: auto;">
                <v-form style="width: 400px; height: 500px; margin: auto; margin-top: 20px" >
                  <div class="mx-3">
                    <div class="mx-3 font-weight-black text-h4" style="text-align: center; margin-bottom: 70px; color: cornflowerblue">
                      <v-icon icon="mdi-home" style="margin-right: -10px"/>
                      registration
                    </div>
                    <div class="mx-1">
                      <v-text-field
                          v-model   ="userId"
                          :counter  ="15"
                          :rules    ="idRule"
                          label     ="Name"
                          maxLength = 15
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="mx-3">
                    <div class="mx-1">
                      <v-text-field
                          type="password"
                          v-model="password"
                          :rules="pwRule"
                          :counter  = 20
                          maxLength = 20
                          label="Password"
                          required
                      ></v-text-field>
                    </div>
                  </div>

                  <v-card-actions>
<!--                    <v-btn
                        color="#2c4f91"
                        size="x-large"
                        block
                        @click="loginSubmit"
                    >Login</v-btn
                    >-->
                  </v-card-actions>
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

import axios from 'axios'

export default {
  name: "Registration",
  data(){
    return {
      idRule : [
          value => !!value || '아이디를 입력해주세요.',
          value => {
            const trimValue = value.replace(/(\s*)/g, '');
            // const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
            return trimValue.length > 7 || '아이디는 7자리 이상입니다';
          },
          value => {
            axios.get(`/member/idCheck`,{
                  params : {
                    userId : value
                  }
                }
            ).then( response => {
              return response.data > 0 || '이미 존재하는 아이디입니다';
            }).catch( error => {
              console.log(error);
            })
          },
      ],
      pwRule : [
        value => !!value || '비밀번호를 입력하세요',
        value => {
          const trimValue = value.replace(/(\s*)/g, '');
          return trimValue.length > 10 || '비밀번호는 10자리 이상입니다';
        },
      ],

      userId    : "",
      password  : "",

    }
  },
  created() {

  },
  methods : {

  }
}
</script>

<style scoped>

</style>