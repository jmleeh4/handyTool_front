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
                      Registration
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
                  <div class="mx-3">
                    <div class="mx-1">
                      <v-text-field
                          type="password"
                          :rules="confPw"
                          :counter  = 20
                          maxLength = 20
                          label="ConfirmPassword"
                          required
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="mx-3">
                    <div class="mx-1">
                      <v-text-field
                          type="text"
                          v-model="userName"
                          :rules="nameRule"
                          :counter  = 4
                          maxLength = 4
                          label="Name"
                          required
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="mx-3">
                    <div class="mx-1">
                      <v-text-field
                          type="email"
                          v-model="email"
                          :rules="emailRule"
                          :counter  = 30
                          maxLength = 30
                          label="Email Address"
                          required
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="mx-3">
                    <div class="mx-1">

                      <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          :return-value.sync="birthday"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                              v-model="birthday"
                              label="생년월일"
                              readonly
                              v-on="on"
                              :rules="dobRules"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="birthday"
                            no-title
                            scrollable
                            @input="$refs.menu.save(birthday)"
                        ></v-date-picker>
                      </v-menu>

                    </div>
                  </div>
                </v-form>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script src="../account/js/Registration_min.js">


</script>

<style scoped>

</style>