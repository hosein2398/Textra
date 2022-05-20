<template>
  <div class="textra">
    <div class="mainTextra" v-html="state.currentWord" :style="mainStyleComputed"></div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, computed, onUnmounted, PropType } from 'vue';
  const props = defineProps({
    data: {
      type: Array as PropType<string[]>,
      required: true,
    },
    filter: {
      type: String,
      default: 'simple',
    },
    timer: {
      type: Number,
      default: 2,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
  });

  type State = {
    defaultStyle: string;
    currentWord: string;
    liStl: string | null;
    dataCounter: number;
    animationID: number | null;
    filters: any;
    words: string[];
  };

  const state: State = reactive({
    defaultStyle: 'transition: all 0.5s;',
    currentWord: props.data[0],
    liStl: null,
    dataCounter: 0,
    animationID: null,
    filters: {
      simple: ['opacity:0', 'opacity:1'],
      'bottom-top': [
        'transform:translateY(10px);opacity:0;',
        'transform:translateY(0px);opacity:1;',
      ],
      'top-bottom': [
        'transform:translateY(-10px);opacity:0;',
        'transform:translateY(0px);opacity:1;',
      ],
      'right-left': [
        'transform:translateX(10px);opacity:0;',
        'transform:translateX(0px);opacity:1;',
      ],
      'left-right': [
        'transform:translateX(-10px);opacity:0;',
        'transform:translateX(0px);opacity:1;',
      ],
      press: ['letter-spacing: 4px;opacity:0;', 'opacity:1;'],
      scale: ['transform:scaleY(1.4);opacity:0;', 'opacity:1;'],
      flash: ['transform:skewX(-70deg);opacity:0;', 'transform:skewX(0deg);opacity:1;'],
      flip: ['transform:rotateX(-180deg);opacity:0;', 'transform:rotate(0deg);opacity:1;'],
    },
    words: ['今晚美丽的月色照耀着我，如百千个平凡的日子一样。'],
  });

  const mainStyleComputed = computed(() => {
    return state.defaultStyle + state.liStl;
  });

  let previousTime = 0;

  const run = (currentTime: number) => {
    if (previousTime + props.timer * 1000 < currentTime) {
      //hiding
      state.liStl = state.filters[props.filter][0];
    }
    if (previousTime + props.timer * 1000 + 1000 < currentTime) {
      //showing
      previousTime = currentTime;
      state.currentWord = props.data[++state.dataCounter];
      state.liStl = state.filters[props.filter][1];
      if (state.dataCounter === props.data.length) {
        if (props.infinite) {
          state.dataCounter = 0;
          state.currentWord = props.data[state.dataCounter];
        } else {
          // stopping animation
          return;
        }
      }
    }
    state.animationID = window.requestAnimationFrame(run.bind(this));
  };
  state.animationID = window.requestAnimationFrame(run.bind(this));

  onUnmounted(() => {
    window.cancelAnimationFrame(state.animationID);
  });
</script>

<style scoped>
  .textra {
    height: auto;
    width: auto;
    display: block;
    font-size: 36px;
  }
</style>
