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
          <img src="https://i.imgur.com/YdhV0NU.png" :class="$style['turnPgLeft']" @click="turnPage('left')" @mouseover="pageTurnHover('left', true)" @mouseleave="pageTurnHover('left', false)">
        </div>
      </div>

      <div :class="$style['frontCoverInner']" ref="coverInner">
        <div>
          <div :class="$style['topMenu']">
            <img src="https://i.imgur.com/9X5NVWj.png" :class="$style['turnPgRight']" @click="turnPage('right')" @mouseover="pageTurnHover('right', true)" @mouseleave="pageTurnHover('right', false)">
          </div>
        </div>
      </div>


      <div :class="$style['pages']">
        <template v-for="(page, pageInd) in pages.slice().reverse()">
          <div :class="$style['page']" ref="pageBackRef">
            <div :class="$style['pageBack']" >
              <p >{{page.back}}</p>
            </div>
          </div>
        </template>
      </div>
      <div :class="$style['pages']">
        <template v-for="(page, pageInd) in pages.slice().reverse()">
          <div :class="$style['page']" ref="pageFrontRef">
            <div :class="$style['pageFront']" >
              <p >{{page.front}}</p>
            </div>
          </div>
        </template>
      </div>

      <div :class="$style['frontCoverOuter']" @click="openCover" ref="coverOuter" @mouseover="coverTurnHover(true)" @mouseleave="coverTurnHover(false)">
        <div></div>
        <div>
          <h2>{{title}}</h2>
          <h3>{{subTitle}}</h3>
          <h4>By</h4>
          <h4>{{author}}</h4>
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
    props: ['title', 'subTitle','author','pagesList'],
    data() {
      let foo = this.pagesList;
      let pageList = [];
      if(foo.length%2 != 0){
        foo.push("");
      }
      for(let i=0; i<foo.length/2; i++){
        pageList.push({front: foo[2*i], back: foo[2*i+1]})
      }
      return {
        pages: pageList,
        currentPage: 0,
        coverOpen: false
      }
    },

    methods: {
      openCover(){
        let a = (this.$refs.coverOuter)
        let b = (this.$refs.coverInner)

        Velocity(a,"stop");
        Velocity(a,{rotateY: "-180deg"}, {duration: 800, easing: "linear"});
        Velocity(b,"stop");
        Velocity(b,{rotateY: "-180deg"}, {duration: 800, easing: "linear"});
        this.coverOpen = true;
      },
      coverTurnHover(state = false){
        let a = (this.$refs.coverOuter)
        let b = (this.$refs.coverInner)
        if(!this.coverOpen){
          if(state){
            this.rotatePage(a,b,"-15",300);
          }else{
            let a = (this.$refs.coverOuter)
            let b = (this.$refs.coverInner)
            this.rotatePage(a,b,"-0",300);
          }
        }

      },
      pageTurnHover(direction = 'left', state = false){
        let psFront = this.$refs.pageFrontRef.slice().reverse();
        let psBack = this.$refs.pageBackRef.slice();
        if(state){ //turn page a bit
          if(direction == 'left'){
            if(this.currentPage < this.pages.length){ //there is a page on the right side which we can turn
              let p = psFront[this.currentPage];
              let pBack = psBack[this.currentPage];
              this.rotatePage(p,pBack,"-21",300);
            }
          }else if(direction == 'right'){
            if(this.currentPage > 0){ //there is a page on the left side which we can turn
              let p = psFront[this.currentPage-1];
              let pBack = psBack[this.currentPage-1];
              this.rotatePage(p,pBack,"-159",300);
            }
          }
        }else{ //turn page back
          if(direction == 'left'){
            if(this.currentPage < this.pages.length){ //there is a page on the right side which we can turn
              let p = psFront[this.currentPage];
              let pBack = psBack[this.currentPage];
              this.rotatePage(p,pBack,"-0",300);
            }
          }else if(direction == 'right'){
            if(this.currentPage > 0){ //there is a page on the left side which we can turn
              let p = psFront[this.currentPage-1];
              let pBack = psBack[this.currentPage-1];
              this.rotatePage(p,pBack,"-180",300);
            }
          }
        }
      },
      boop(a="boop"){
        console.log(a)
      },
      rotatePage(pageFront, pageBack, angle, duration){
        Velocity(pageFront,"stop");
        Velocity(pageFront,{rotateY: angle+"deg"},  {duration: duration, easing: "linear"});
        Velocity(pageBack,"stop");
        Velocity(pageBack,{rotateY: angle+"deg"},  {duration: duration, easing: "linear"});
      },
      turnPage(direction = 'left'){
        let psFront = this.$refs.pageFrontRef.slice().reverse();
        let psBack = this.$refs.pageBackRef.slice();
        switch (direction){
          case "left":
            if(this.currentPage < this.pages.length){
              let p = psFront[this.currentPage];
              let pBack = psBack[this.currentPage];
              this.rotatePage(p,pBack,"-180",800);
              this.currentPage++;
            }
            break;
          case "right":
            if(this.currentPage > 0){
              let p = psFront[this.currentPage-1];
              let pBack = psBack[this.currentPage-1];
              this.rotatePage(p,pBack,"0",800);
              this.currentPage--;
            }else{
              let a = (this.$refs.coverOuter)
              let b = (this.$refs.coverInner)
              this.rotatePage(a,b,"0",900);
              this.coverOpen = false;
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
    box-sizing: border-box;
    border-left: 10px solid rgba(0,0,0,0.6);
    color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1,h2,h3,h4,p{
      user-select: none;
      margin: 10px;
    }
    h2{
      margin-bottom: 10px;
    }
    h3{
      margin-bottom: 50px;
    }
    h4{
      margin-bottom: 10px;
    }

    >p{
      bottom: 0;
      color: rgba(255,255,255,0.6);
    }
  }
  .frontCoverInner{
    >div{
      width: 100%;
      height: 100%;
      transform: rotateY(180deg);
    }
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
    border-radius: 13px;
    width: 820px;
    height: 510px;
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
    backface-visibility: hidden;
    height: 100%;
    transform: rotateY(-0deg);
    transform-origin: 0% 50%;
    transform-style: preserve-3d;
    >.pageBack,>.pageFront{
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
    }
    >.pageFront{
      box-shadow: inset 8px 0px 10px rgba(0,0,0,0.25);
      border-radius: 7px 0px 0px 7px;
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
