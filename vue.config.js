const { defineConfig } = require('@vue/cli-service')
const axios = require("axios");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static",  // 빌드 타겟 디렉토리
  devServer: {
    proxy: {
      '/member': {
        // '/api' 로 들어오면 포트 8081(스프링 서버)로 보낸다
        //20221022
        target: 'http://localhost:8081',
        changeOrigin: true // cross origin 허용
      }
    }
  },
  lintOnSave : false,
})