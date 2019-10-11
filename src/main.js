import TextraPlugin from "./Textra.vue";

const Textra = {
  install(Vue) {
    Vue.component("textra", TextraPlugin);
  }
};

export default Textra;
