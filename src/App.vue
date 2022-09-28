<template>
  <div class="main">
    <Textra :data="words" :timer="3.1" :infinite="true" filter="right-left" />
  </div>
</template>

<script setup>
  import Textra from './Textra.vue'

  const words = [
    '春天的事物都太浅薄 我不要春天 不要玫瑰 不要你眼里的泪光',
    '我只要你 我只要你一个完整的朝夕',
    '今晚美丽的月色照耀着我 如百千个平凡的日子一样。',
    '我望着月亮 却只看见你',
    '在我荒瘠的土地上 你是最后的玫瑰',
    '有人问我春天是什么 于是我想起了第一次遇见你',
    '婚姻是一座围城 城外的人想进去 城里的人想出来',
  ];
</script>

<style scoped>
  .main {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 500px;
    align-items: center;
  }
</style>
