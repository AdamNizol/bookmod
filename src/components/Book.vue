<template>
  <div :class="$style['bookContainer']">
    <div :class="$style['book']">
      <div :class="$style['topMenu']">
        <img src="https://i.imgur.com/6lD73vx.png" :class="$style['turnPgRight']" @click="turnPage('right')">
        <img src="https://i.imgur.com/43ePFH7.png" :class="$style['turnPgLeft']" @click="turnPage('left')">
      </div>
      <div :class="$style['pages']">
        <template v-for="(page, pageInd) in pages">
          <div :class="$style['page']" ref="pageRef">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  //const Velocity = require('velocity-animate').default;
  export default {
    components: {

    },

    data() {
      let pageList = [1, 2, 3]
      return {
        pages: pageList
      }
    },

    methods: {
      turnPage(direction = 'left'){
        console.log("turning the page "+direction);
        let p = this.$refs.pageRef[0];
        switch (direction){
          case "left":
            Velocity(p,"stop");
            Velocity(p,{rotateY: "-180deg"}, 500);
            break;
          case "right":
            Velocity(p,"stop");
            Velocity(p,{rotateY: "0deg"}, 500);
            break;
        }

      }
    },
    mounted() {

    }

  }
</script>

<style module lang="less">
  .bookContainer{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .book{
    position: absolute;
    background-color: #2d1300;
    border-radius: 7px;
    width: 800px;
    height: 500px;
    border: 3px solid #0d0700;
  }
  .pages{
    position: absolute;
    left: 50%;
    width: 48%;
    height: 92%;
    top: 5%;
    perspective: 1500px;
  }
  .page{
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    background-color: white;
    height: 100%;
    transform: rotateY(-0deg);
    transform-origin: 0% 50%;
    border-left: 6px solid rgba(0,0,0,0.3);
  }
  .topMenu{
    box-sizing: border-box;
    display: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 5px 0px 5px;
    >img{
      margin: 0;
      height: 20px;
    }
    >img:hover{
      cursor: pointer;
    }
  }
</style>
