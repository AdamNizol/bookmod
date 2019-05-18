<template>
  <div :class="$style['bookContainer']">
    <link href="https://fonts.googleapis.com/css?family=Kalam:700&display=swap" rel="stylesheet">
    <div :class="$style['book']">

      <div :class="$style['backCoverInner']" ref="backCoverInner">
        <div :class="$style['topMenu']">
          <div></div>
          <div :class="$style['pageCounter']">
            <p>{{currentPage+1}}/{{pages.length+1}}</p>
          </div>
          <img src="https://i.imgur.com/YdhV0NU.png" :class="$style['turnPgLeft']" @click="turnPage('left')">
        </div>
      </div>

      <div :class="$style['frontCoverInner']" ref="coverInner">
        <div>
          <div :class="$style['topMenu']">
            <img src="https://i.imgur.com/9X5NVWj.png" :class="$style['turnPgRight']" @click="turnPage('right')">
          </div>
        </div>
      </div>

      <!--<div :class="$style['innerSpine']"></div>-->


      <div :class="$style['pages']">
        <template v-for="(page, pageInd) in pages.slice().reverse()">
          <div :class="$style['page']" ref="pageRef" :style="'z-index: '+(pageInd)+';'">
            <div :class="$style['pageFront']" :style="'z-index: '+(pages.length+1)+';'"  >
              <p >{{page.front}}</p>
            </div>
            <div :class="$style['pageBack']" :style="'z-index: '+(pages.length-(pageInd+1))+';'" >
              <p >{{page.back}}</p>
            </div>
          </div>
        </template>
      </div>

      <div :class="$style['frontCoverOuter']" @click="openCover" ref="coverOuter">
        <div></div>
        <div>
          <h2>Official Release Date</h2>
          <h2>S&Box</h2>
        </div>
        <p>Click To Open</p>
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
        ,
        "Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you"
        ,
        "Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you"
        ,
        "(Ooh, give you up)\n(Ooh, give you up)\nNever gonna give, never gonna give\n(Give you up)\nNever gonna give, never gonna give\n(Give you up)"
        ,
        "We've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nI just wanna tell you how I'm feeling\nGotta make you understand"
        ,
        "Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you"
        ,
        "Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you"
        ,
        "Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you"
      ]
      let pageList = [];
      if(foo.length%2 != 0){
        foo.push("");
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
      openCover(){
        let a = (this.$refs.coverOuter)
        let b = (this.$refs.coverInner)


        Velocity(a,{rotateY: "-180deg"}, 800);
        Velocity(b,{rotateY: "-180deg"}, 800);
      },
      boop(a="boop"){
        console.log(a)
      },
      turnPage(direction = 'left'){
        //console.log("turning the page "+direction);
        let ps = this.$refs.pageRef.slice().reverse();
        switch (direction){
          case "left":
            if(this.currentPage < this.pages.length){
              let p = ps[this.currentPage];

              if(this.currentPage > 0){
                let prev = ps[this.currentPage-1];
                prev.style.zIndex = this.currentPage;
                Velocity(prev,"finish");
              }



              Velocity(p,"stop");
              Velocity(p,{rotateY: "-180deg"}, 800);
              this.currentPage++;

              p.style.zIndex = (this.pages.length);
            }

            break;
          case "right":
            if(this.currentPage > 0){
              let p = ps[this.currentPage-1];

              if(this.currentPage < this.pages.length){
                let next = ps[this.currentPage];
                Velocity(next,"finish");
              }

              Velocity(p,"stop");
              Velocity(p,{rotateY: "0deg"}, 800);
              this.currentPage--;

              p.style.zIndex = (this.pages.length);
            }else{
              let a = (this.$refs.coverOuter)
              let b = (this.$refs.coverInner)

              Velocity(a,{rotateY: "0deg"}, 900);
              Velocity(b,{rotateY: "0deg"}, 900);
            }

            break;
        }

      }
    },
    mounted() {

    }

  }
</script>

<style module lang="less">
  .frontCoverOuter, .frontCoverInner, .backCoverInner{
    width: 50%;
    height: 100%;
    position: absolute;
    left:50%;
    background-image: url(https://i.imgur.com/H7aFal2.png);
    transform: rotateY(-0deg);

    transform-origin: 0% 50%;
    perspective-origin: 0% 0%;
    border-radius: 0 13px 13px 0;
    box-shadow: inset 0px 0px 20px rgba(0,0,0,1);
  }
  .frontCoverOuter{
    backface-visibility: hidden;
    color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    >p{
      bottom: 0;
    }
  }
  .frontCoverInner{
    >div{
      width: 100%;
      height: 100%;
      transform: rotateY(180deg);
    }
  }

  .innerSpine{
    position: absolute;
    width: 5%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
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
    //background-color: #2d1300;
    //background-image: url(https://i.imgur.com/H7aFal2.png);
    border-radius: 13px;
    width: 820px;
    height: 510px;
    //border: 3px solid #0d0700;
    //box-shadow: inset 0px 0px 20px rgba(0,0,0,1);
    perspective: 2000px;
  }
  .pages{
    position: absolute;
    left: 50%;
    width: 47.5%;
    height: 91%;
    top: 5.5%;
    perspective: 3000px;
    perspective-origin: 0% 50%;
  }
  .page{
    box-sizing: border-box;
    position: absolute;
    width: 100%;

    height: 100%;
    transform: rotateY(-0deg);
    transform-origin: 0% 50%;
    //box-shadow: inset 8px 0px 10px rgba(0,0,0,0.25);
    transform-style: preserve-3d;
    //border-radius: 5px 3px 3px 5px;
    >.pageBack,>.pageFront{
      //background-color: #fdffe8;
      background-image: url(https://i.imgur.com/4B7eqOV.png);
      text-align: left;
      width: 100%;
      height: 100%;
      position: absolute;
      margin: 0;
      top:0;
      >p{
        padding: 0 18px 0 18px;
        position: absolute;
        font-size: 1.1em;
        font-weight: bold;
        white-space: pre-wrap;
        color: rgba(0,0,0,0.65);
        user-select: none;
        font-family: 'Kalam', cursive;
      }
    }
    >.pageBack{
      transform: rotateY(180deg);
      box-shadow: inset -8px 0px 10px rgba(0,0,0,0.25);
      border-radius: 0px 7px 7px 0px;
      //z-index: 1;
    }
    >.pageFront{
      box-shadow: inset 8px 0px 10px rgba(0,0,0,0.25);
      border-radius: 7px 0px 0px 7px;
      //z-index: 2;
    }
  }
  .topMenu{
    box-sizing: border-box;
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 5px 0px 5px;
    >img{
      margin: 0;
      height: 20px;
      user-select: none;
    }
    >img:hover{
      cursor: pointer;
    }
    >.pageCounter{
      color: white;
      >p{
        margin: 0;
        margin-top: 4px;
        font-weight: bold;
      }
    }
  }
</style>
