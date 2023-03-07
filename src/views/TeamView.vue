<script setup lang="ts">
</script>
<template>
  <div class="tabout">
    <div class="ttitle">SUSTENTATION</div>
    <div class="ttheme">Team</div>
     <div class="tinfo">
     <div class="user">
     <div class="userp"> <img src="@/assets/team1.png" alt=""></div>
     <div class="userinfo"></div>
     </div>
     <div class="user">
     <div class="userp"> <img src="@/assets/team2.png" alt=""></div>
     <div class="userinfo"></div>
     </div>
     <div class="user">
     <div class="userp"> <img src="@/assets/team3.png" alt=""></div>
     <div class="userinfo"></div>
     </div>
     </div>
  </div>
</template>

<style>
    .tabout {
      margin: 20px 10%;
      min-height: 800px;
      display: block;
      align-items: center;
      background-color: aliceblue;
    }
    .ttitle {
      width: 220px;
      height: 40px;
      display: inline-block;
      margin-left: 40px;
      margin-top: 20px;
      font-family: Lao UI;
      font-size: 24px;
      text-align: center;
      color: aliceblue;
      border-radius: 10px;
      background-color: #29aae3;
      font-weight: bolder;
      text-decoration: underline
    }
    .ttheme {
      width: 100%;
      display: inline-block;
      margin-left: 40px;
      height: 50px;
      font-family: Lato Black;
      font-size: 36px;
    }
    .tinfo {
      width: 100%;
      height: 90%;
      float: left;
      margin-top: 10px;
      margin-left: 18%;
    }
    .user {
      width: 300px;
      height: 700px;
      float: left;
      position: relative;
      margin-right: 100px;
    }
    .userp {
      position: absolute;
      z-index: 10;
    }
    .userp img{
      display: block;
      width: 150px;
      height: 150px;
    }
    .userinfo{
      display: block;
      position: absolute;
      width: 300px;
      height: 500px;
      border-radius: 9px;
      border-style: groove;
      margin-top: 100px;
    }
</style>
