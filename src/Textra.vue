<template>
  <div class="textra">
    <div class="mainTextra" v-html="currentWord" :style="mainStyleComputed"></div>
  </div>
</template>

<script>
export default {
  name: "Textra",
  props: {
    data: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      default: "simple"
    },
    timer: {
      type: Number,
      default: 2
    },
    infinite: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultStyle: "transition: all 0.5s;",
      currentWord: this.data[0],
      liStl: null,
      dataCounter: 0,
      animationID: null,
      filters: {
        simple: ["opacity:0", "opacity:1"],
        "bottom-top": [
          "transform:translateY(10px);opacity:0;",
          "transform:translateY(0px);opacity:1;"
        ],
        "top-bottom": [
          "transform:translateY(-10px);opacity:0;",
          "transform:translateY(0px);opacity:1;"
        ],
        "right-left": [
          "transform:translateX(10px);opacity:0;",
          "transform:translateX(0px);opacity:1;"
        ],
        "left-right": [
          "transform:translateX(-10px);opacity:0;",
          "transform:translateX(0px);opacity:1;"
        ],
        press: ["letter-spacing: 4px;opacity:0;", "opacity:1;"],
        scale: ["transform:scaleY(1.4);opacity:0;", "opacity:1;"],
        flash: [
          "transform:skewX(-70deg);opacity:0;",
          "transform:skewX(0deg);opacity:1;"
        ],
        flip: [
          "transform:rotateX(-180deg);opacity:0;",
          "transform:rotate(0deg);opacity:1;"
        ]
      }
    };
  },
  computed: {
    mainStyleComputed() {
      return this.defaultStyle + this.liStl;
    }
  },
  created() {
    let previousTime = 0;
    const that = this;
    function run(currentTime) {
      if (previousTime + (this.timer*1000) < currentTime) {
        //hiding
        this.liStl = this.filters[this.filter][0]
      }
      if (previousTime + (this.timer*1000) + 1000 < currentTime) {
        //showing
        previousTime = currentTime;
        this.currentWord = this.data[++this.dataCounter];
        this.liStl = this.filters[this.filter][1]
        if (this.dataCounter === this.data.length) {
          if (this.infinite) {
            this.dataCounter = 0;
            this.currentWord = this.data[this.dataCounter];
          } else {
            // stopping animation
            return;
          }
        }
      }
      this.animationID = window.requestAnimationFrame(run.bind(that));
    }
    this.animationID = window.requestAnimationFrame(run.bind(that));
  },
  beforeDestroy(){
    window.cancelAnimationFrame(this.animationID);
	}
};
</script>

<style scoped>
.textra {
  height: auto;
  width: auto;
  display: block;
}
</style>



