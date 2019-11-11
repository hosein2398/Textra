
# Textra  [![Build Status](https://travis-ci.org/hosein2398/Textra.svg?branch=master)](https://travis-ci.org/hosein2398/Textra)

> A Vue.js add-on to slide your text. [demo](https://hosein2398.github.io/textra/)

## Installing
```
npm i -D vue-textra
```
Then inside your project, start using it:
```js
import Vue from 'vue'
import App from './App.vue'
import Textra from 'vue-textra'

Vue.use(Textra);
new Vue({
  el: '#app',
  render: h => h(App)
})
```
To use inside browser:
```html
<script src='https://cdn.jsdelivr.net/npm/vue-textra@latest/dist/textra.min.js'></script>
```
Then:
```js
Vue.use(Textra);
```
## Usage
Inside any of your components:
```html
 <textra :data='words' :timer="4" filter="flash" />
```
And in your instance data:
```js
//...
  data () {
    return {
      words: ["My text to show", "Great news here!", "Vue is great", "Sample Text"]
    }
  }
//...
```

Another example :
```html
 <textra :data='words' :timer="3.1" :infinite='true' filter="left-right" />
```
This one will loop around for ever.
## Props
#### `data`
Type : Array
Description : Should be array of things you want to slide.

---

#### `timer`
Type : Number
Description : Defines gap between each slide as second.
Default : `2`

---

#### `filter`
Type : String
Description : Defines type of filter you want to use when sliding.
Default : `simple`

---

#### `infinite`
Type : Boolean
Description : Defines whether your slider should keep looping or not.
Default : `false`


## Filters
There are 9 types of filters available for now:
+ `simple`
+ `bottom-top`
+ `top-bottom`
+ `right-left`
+ `left-right`
+ `press`
+ `scale`
+ `flash`
+ `flip`
