<script setup lang="ts">
</script>
<template>
  <div class="eabout">
    <div class="stitle">DETAILS</div>
    <div class="etheme">How does it work</div>
    <div class="einfo"> <img src="@/assets/einfo.png" alt=""></div>
  </div>
</template>

<style>
    .eabout {
      margin: 20px 10%;
      min-height: 800px;
      display: block;
      align-items: center;
      background-color: aliceblue;
    }
    .stitle {
      width: 150px;
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
    .etheme {
      width: 100%;
      display: inline-block;
      margin-left: 40px;
      height: 50px;
      font-family: Lato Black;
      font-size: 36px;
    }
    .einfo {
      width: 100%;
      height: 90%;
      float: left;
      margin-top: 100px;
    }
    .einfo img{
      width: 100%;
      height: 90%;
    }
</style>
