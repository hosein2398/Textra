<template>
  <div class="textra">
    <div class="mainTextra" v-text="currentWord" :style="mainStyleComputed"></div>
  </div>
</template>

<script>
  export default {
    name: 'Textra',
    props: {
      data: {
        type: Array,
        required: true
      },
      filter: {
        type: String,
        default: 'simple'
      },
      timer: {
        type: Number,
        default:1,
      },
      infinite: {
        type: Boolean,
        default: false,
      },
      sequence:{
        type:Boolean,
        default:false
      }
  },
  data() {
      return {
        defaultStyle: `transition: ${this.timer}s;`,
        currentWord: this.data[0],
        liStl: null,
        dataCounter: 0,
        displayState: "shown",
        intervalId:null,
        filters: {
          'simple': ["opacity:0", "opacity:1"],
          'bottom-top': ["transform:translateY(10px);opacity:0;", "transform:translateY(0px);opacity:1;"],
          'top-bottom': ["transform:translateY(-10px);opacity:0;", "transform:translateY(0px);opacity:1;"],
          'right-left': ["transform:translateX(10px);opacity:0;", "transform:translateX(0px);opacity:1;"],
          'left-right': ["transform:translateX(-10px);opacity:0;", "transform:translateX(0px);opacity:1;"],
          'press': ["letter-spacing: 4px;opacity:0;", "opacity:1;"],
          'scale': ["transform:scaleY(1.4);opacity:0;", "opacity:1;"],
          'flash': ["transform:skewX(-70deg);opacity:0;", "transform:skewX(0deg);opacity:1;"],
          'flip': ["transform:rotateX(-180deg);opacity:0;", "transform:rotate(0deg);opacity:1;"],
        },
      }
    },
    computed: {
      mainStyleComputed() {
        return this.defaultStyle + this.liStl;
      }
    },
    created() {
      let
          index = 0,
          animations = [],
          filter = this.filters[this.filter]

      if(this.sequence){
        animations = Object.keys(this.filters)
        filter = this.filters[animations[index]]
      }
      this.intervalId = setInterval(() => {
        if (this.displayState === 'shown') {
          this.liStl = filter[0];
          this.displayState = 'hidden';

        } else {
          this.liStl = filter[1];
          this.displayState = 'shown';
          this.dataCounter++;
          this.currentWord = this.data[this.dataCounter];
        }

        if(this.sequence){
          ++index === animations.length && (index = 0)
          filter = this.filters[animations[index]]
        }

        if (this.dataCounter === this.data.length) {
          if (this.infinite) {
            // Changing 0 to -1 for temporary bug fix of #2
            this.dataCounter = -1;
          } else {
            clearInterval(this.intervalId);

          }
        }

      }, (+this.timer) * 1000);
    },
    beforeDestroy(){
      clearInterval(this.intervalId)
	  }
  }
</script>

<style scoped>
  .textra {
    height: auto;
    width: auto;
    display: block
  }
</style>
