<script setup lang="ts">
</script>
<template>
  <div class="pabout">
    <div class="ptitle">PRODUCTS</div>
    <div class="ptheme">

      <div class="titleLeft" style="width: 20%; float:left;">

        <p @click="clickOverview(0)"><a>Overview</a></p>
        <p @click="clickOverview(1)"><a>Overview</a></p>
        <p @click="clickOverview(2)"><a>Overview</a></p>
        <p @click="clickOverview(3)"><a>Overview</a></p>
        <p @click="clickOverview(4)"><a>Overview</a></p>
        <p @click="clickOverview(5)"><a>Overview</a></p>
        <p @click="clickOverview(6)"><a>Overview</a></p>
        <p @click="clickOverview(7)"><a>Overview</a></p>
      

      </div>
      <el-carousel arrow="always" ref="test" trigger="click" autoplay="false" style="width: 70%;float: right; height: 500px;">
        <el-carousel-item v-for="item in pageUrlArr" :key="item" style="height: 500px;">
          <div style="float: left; width:30%;">
            <p>{{ item.content }}</p>
          </div>
          <div style="float: right; width:40%; margin-right: 10%;">
            <img :src="item.imgUrl" />
          </div>
        </el-carousel-item>
      </el-carousel>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageUrlArr: [{
        content: '123123123',
        imgUrl: '/src/assets/rlist/rlist1.png'
      }, {
        content: '123123',
        imgUrl: '/src/assets/rlist/rlist2.png'
      }, {
        content: '312312312',
        imgUrl: '/src/assets/rlist/rlist3.png'
      }, {
        content: '312312312',
        imgUrl: '/src/assets/rlist/rlist4.png'
      }, {
        content: '312312312',
        imgUrl: '/src/assets/rlist/rlist5.png'
      }, {
        content: '312312312',
        imgUrl: '/src/assets/rlist/rlist6.png'
      }, {
        content: '312312312',
        imgUrl: '/src/assets/rlist/rlist7.png'
      }, {
        content: '312312312',
        imgUrl: '/src/assets/rlist/rlist8.png'
      }


      ]
    }
  },
  methods: {
    clickOverview(index) {
      this.$refs.test.setActiveItem(index)

    }
  }
}


</script>
<style>
.pabout {
  margin: 20px 10%;
  min-height: 800px;
  display: block;
  align-items: center;
  background-color: aliceblue;
}

.ptitle {
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

.ptheme {
  width: 100%;

  margin-top: 30px;
  height: 50px;
  font-family: Lato Black;
  font-size: 36px;
}

.titleLeft {
  margin-left: 40px;
}

.titleLeft p a {
  display: inline-block;

}
.el-carousel__container{
  height: 500px;
}
</style>
