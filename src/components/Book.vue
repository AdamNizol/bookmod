<template>
  <div :class="$style['bookContainer']">
    <div :class="$style['book']">
      <div :class="$style['innerSpine']"></div>
      <div :class="$style['topMenu']">
        <img src="https://i.imgur.com/6lD73vx.png" :class="$style['turnPgRight']" @click="turnPage('right')">
        <img src="https://i.imgur.com/43ePFH7.png" :class="$style['turnPgLeft']" @click="turnPage('left')">
      </div>
      <div :class="$style['pages']">
        <template v-for="(page, pageInd) in pages.slice().reverse()">
          <div :class="$style['page']" ref="pageRef">
            <div :class="$style['pageFront']">
              <p>{{page.front}}</p>
            </div>
            <div :class="$style['pageBack']">
              <p>{{page.back}}</p>
            </div>
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
      let foo = [
        "We're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\n\nI just wanna tell you how I'm feeling\nGotta make you understand"
        ,
        "Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you"
        ,
        "We've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nAnd if you ask me how I'm feeling\nDon't tell me you're too blind to see"
      ]
      let pageList = [];
      if(foo.length%2 != 0){
        foo.push("empty page");
      }
      for(let i=0; i<foo.length/2; i++){
        pageList.push({front: foo[2*i], back: foo[2*i+1]})
      }
      return {
        pages: pageList,
        currentPage: 0
      }
    },

    methods: {
      turnPage(direction = 'left'){
        //console.log("turning the page "+direction);
        let ps = this.$refs.pageRef.slice().reverse();
        let p = ps[0];
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
  .innerSpine{
    position: absolute;
    width: 5%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    top:0;
    left: 50%;
    transform: translateX(-50%);
  }
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
    border-radius: 13px;
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
    background-color: #fdffe8;
    height: 100%;
    transform: rotateY(-0deg);
    transform-origin: 0% 50%;
    border-left: 6px solid rgba(0,0,0,0.3);
    transform-style: preserve-3d;
    >.pageBack,>.pageFront{
      text-align: left;
      width: 100%;
      height: 100%;
      position: absolute;
      margin: 0;
      top:0;
      >p{
        padding: 0 10px 0 10px;
        position: absolute;
        font-size: 1.1em;
        white-space: pre-wrap;
      }
    }
    >.pageBack{
      transform: rotateY(180deg);
      z-index: 1;
    }
    >.pageFront{
      z-index: 2;
    }
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
