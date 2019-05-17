<template>
  <div :class="$style['bookContainer']">
    <div :class="$style['book']">
      <button :class="$style['turnPgLeft']" @click="turnPage('left')"> Turn left</button>
      <button :class="$style['turnPgRight']" @click="turnPage('right')">Turn right</button>
      <div :class="$style['pages']">
        <template>
          <div :class="$style['page']">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    components: {

    },

    data() {
      return {

      }
    },

    methods: {
      turnPage(direction = 'left'){
        console.log("turning the page "+direction)
      }
    },
    mounted() {

    }

  }
</script>

<style module lang="less">
  .bookContainer{
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .book{
    background-color: #2d1300;
    border-radius: 7px;
    width: 800px;
    height: 500px;
    border: 3px solid #0d0700;
  }
  .pages{
    position: relative;
    left: 50%;
    width: 45%;
    height: 90%;
    top: 5%;
  }
  .page{
    box-sizing: border-box;
    position: relative;
    width: 100%;
    background-color: white;
    height: 100%;
    transform: perspective(800px) rotateY(-0deg);
    transform-origin: 0% 50%;
    border-right: 2px solid rgba(0,0,0,1);
    border-left: 6px solid rgba(0,0,0,0.3);
  }
</style>
