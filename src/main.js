import TextraPlugin from "./Textra.vue";

export const Textra = {
  install(Vue) {
    Vue.component("textra", TextraPlugin);
  }
};
