import Textra from "./Textra.vue";

const TextraPlugin = {
  install(Vue) {
    Vue.component("textra", Textra);
  }
};

export default TextraPlugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(TextraPlugin);
}