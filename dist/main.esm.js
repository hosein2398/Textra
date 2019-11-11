import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';
import __vue_create_injector__ from 'vue-runtime-helpers/dist/inject-style/browser.js';

//
//
//
//
//
//
var script = {
  name: "Textra",
  props: {
    data: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      "default": "simple"
    },
    timer: {
      type: Number,
      "default": 2
    },
    infinite: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      defaultStyle: "transition: all 0.5s;",
      currentWord: this.data[0],
      liStl: null,
      dataCounter: 0,
      animationID: null,
      filters: {
        simple: ["opacity:0", "opacity:1"],
        "bottom-top": ["transform:translateY(10px);opacity:0;", "transform:translateY(0px);opacity:1;"],
        "top-bottom": ["transform:translateY(-10px);opacity:0;", "transform:translateY(0px);opacity:1;"],
        "right-left": ["transform:translateX(10px);opacity:0;", "transform:translateX(0px);opacity:1;"],
        "left-right": ["transform:translateX(-10px);opacity:0;", "transform:translateX(0px);opacity:1;"],
        press: ["letter-spacing: 4px;opacity:0;", "opacity:1;"],
        scale: ["transform:scaleY(1.4);opacity:0;", "opacity:1;"],
        flash: ["transform:skewX(-70deg);opacity:0;", "transform:skewX(0deg);opacity:1;"],
        flip: ["transform:rotateX(-180deg);opacity:0;", "transform:rotate(0deg);opacity:1;"]
      }
    };
  },
  computed: {
    mainStyleComputed: function mainStyleComputed() {
      return this.defaultStyle + this.liStl;
    }
  },
  created: function created() {
    var previousTime = 0;
    var that = this;

    function run(currentTime) {
      if (previousTime + this.timer * 1000 < currentTime) {
        //hiding
        this.liStl = this.filters[this.filter][0];
      }

      if (previousTime + this.timer * 1000 + 1000 < currentTime) {
        //showing
        previousTime = currentTime;
        this.currentWord = this.data[++this.dataCounter];
        this.liStl = this.filters[this.filter][1];

        if (this.dataCounter === this.data.length) {
          if (this.infinite) {
            this.dataCounter = 0;
            this.currentWord = this.data[this.dataCounter];
          } else {
            window.cancelAnimationFrame(this.animationID);
            return;
          }
        }
      }

      this.animationID = window.requestAnimationFrame(run.bind(that));
    }

    this.animationID = window.requestAnimationFrame(run.bind(that));
  },
  beforeDestroy: function beforeDestroy() {
    window.cancelAnimationFrame(this.animationID);
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "textra"
  }, [_c('div', {
    staticClass: "mainTextra",
    style: _vm.mainStyleComputed,
    domProps: {
      "innerHTML": _vm._s(_vm.currentWord)
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-d9d0826c_0", {
    source: ".textra[data-v-d9d0826c]{height:auto;width:auto;display:block}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-d9d0826c";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var TextraPlugin = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

var Textra = {
  install: function install(Vue) {
    Vue.component("textra", TextraPlugin);
  }
};

export default Textra;
