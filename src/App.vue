<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

<template>
    <div class="wrapper" style="background-color:aliceblue">
      <nav>
        <RouterLink to="/" style="margin-right:20%; padding-left: 32px;"><img alt="Vue logo" class="logo" src="@/assets/log.svg" width="127" height="23" /></RouterLink>
        <RouterLink to="/products">PRODUCTS</RouterLink>
        <RouterLink to="/explain">HOW DOES IT WORK</RouterLink>
        <RouterLink to="/reviews">REVIEWS</RouterLink>
        <RouterLink to="/team">TEAM</RouterLink>
        <!-- <RouterLink to="/news">NEWS</RouterLink> -->
        <RouterLink to="/publications">PUBLICATIONS</RouterLink>
        <button type="button" src="@/assets/title.png" ><strong>ORDER　NOW</strong></button>
      </nav>
    </div>
  <RouterView />
  <div class="appbottom"></div>
</template>

<style scoped>
header {
  display: block;
  line-height: 1.5;
  width: 100%;
  /* height: 10%; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 0;  */
}

appbottom{
  width: 100%;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  height: 23px;
}
nav button{
  font-family: Lao UI;
  font-size: 18px;
  text-align: center;
  color: aliceblue;
  border-radius: 10px;
  background-color: #29aae3;
  font-weight: bolder;
  background-image: url(./assets/title.png);
  background-size: 100%;
  /* background-color: rgb(0, 201, 201); */
  margin-left: 20%;
  width: 150px;
  height: 37px;
  /* border-radius: 10px; */
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: block;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    /* margin-top: 1rem; */
  }
}
</style>
