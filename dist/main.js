'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));
var __vue_create_injector__ = _interopDefault(require('vue-runtime-helpers/dist/inject-style/browser.js'));

//
//
//
//
//
//
var script = {
  name: 'Textra',
  props: {
    data: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      "default": 'simple'
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
      defaultStyle: 'transition: 1s;',
      currentWord: this.data[0],
      liStl: null,
      dataCounter: 0,
      displayState: "shown",
      filters: {
        'simple': ["opacity:0", "opacity:1"],
        'bottom-top': ["transform:translateY(10px);opacity:0;", "transform:translateY(0px);opacity:1;"],
        'top-bottom': ["transform:translateY(-10px);opacity:0;", "transform:translateY(0px);opacity:1;"],
        'right-left': ["transform:translateX(10px);opacity:0;", "transform:translateX(0px);opacity:1;"],
        'left-right': ["transform:translateX(-10px);opacity:0;", "transform:translateX(0px);opacity:1;"],
        'press': ["letter-spacing: 4px;opacity:0;", "opacity:1;"],
        'scale': ["transform:scaleY(1.4);opacity:0;", "opacity:1;"],
        'flash': ["transform:skewX(-70deg);opacity:0;", "transform:skewX(0deg);opacity:1;"],
        'flip': ["transform:rotateX(-180deg);opacity:0;", "transform:rotate(0deg);opacity:1;"]
      }
    };
  },
  computed: {
    mainStyleComputed: function mainStyleComputed() {
      return this.defaultStyle + this.liStl;
    }
  },
  created: function created() {
    var _this = this;

    var theInterval = setInterval(function () {
      _this.liStl = _this.filters[_this.filter][0]; //fixing #5

      setTimeout(function () {
        _this.liStl = _this.filters[_this.filter][1];
        if (_this.dataCounter !== _this.data.length) _this.dataCounter++;
        _this.currentWord = _this.data[_this.dataCounter];

        if (_this.dataCounter === _this.data.length) {
          if (_this.infinite) {
            // Changing 0 to -1 for temporary bug fix of #2
            _this.dataCounter = 0;
            _this.currentWord = _this.data[_this.dataCounter];
          } else {
            clearInterval(theInterval);
          }
        }
      }, 1000);
    }, +this.timer * 1000);
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
  inject("data-v-2c23657e_0", {
    source: ".textra[data-v-2c23657e]{height:auto;width:auto;display:block}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-2c23657e";
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

module.exports = Textra;
