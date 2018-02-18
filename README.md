
# Textra  [![Build Status](https://travis-ci.org/hosein2398/Textra.svg?branch=master)](https://travis-ci.org/hosein2398/Textra)

> A Vue.js add-on to slide your text.

## Installing
```
npm i -D vue-textra  
```
Then inside you project, start using it :
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
## Usage
Inside any of your components:
```html
 <textra :data='words' :timer="1.1" filter="flash" />
```
And in your instance data:
```js
//...
  data () {
    return {
      words: ["My text to show","palnet","fail","sample text"]
    }
  }
//...
```

Another example :
```html
 <textra :data='words' :timer="1.1" :infinite='true' filter="left-right" />
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
Default : `1` 

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
