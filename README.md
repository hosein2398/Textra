
# Textra

> A Vue.js add-on to slide your text.

## Installing
```
npm i -D Textra  
```
Then inside you project, start using it :
```js
import Vue from 'vue'
import Textra from 'textra'

Vue.use(Textra);
new Vue({
  el: '#app',
  render: h => h(App)
})
```
## Usage
Inside any of you components:
```html
 <textra :data='words' timer="1.1" filter="flash" />
```
And in your instance data:
```js
  data () {
    return {
      words: ["My text to show","palnet","fail",sample text"]
    }
  }
```

## Props
`data`  
Type : Array
Description : Should be array of things you want to slide.

`timer`
Type : Number
Description : Defines gap between each slide as second.

`filter`
Type : String
Description : Defines type of filter you want to use when sliding.
Default : `simple`

`interval`
Type : Number
Description : -----

## Filters
There are 9 types of filters available for now:
`simple`
`bottom-top`
`top-bottom`
`right-left`
`left-right`
`press`
`scale`
`flash`
`flip`