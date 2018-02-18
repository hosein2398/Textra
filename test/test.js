import {
  mount
} from 'avoriaz';
import test from 'ava';
import Textra from '../src/Textra.vue';
import {
  setTimeout
} from 'timers';

const wrapper = mount(Textra);
wrapper.setProps({
  data: ['first', 'sec', 'third']
});



test('There should be tag with class of textra', (t) => {
  t.plan(2);
  const tagClass = wrapper.find('.textra').length;
  t.is(tagClass, 1);
  t.not(tagClass, 2);
});

test('There should be tag with class of mainTextra', (t) => {
  t.plan(2);
  const tagClass = wrapper.find('.mainTextra').length;
  t.is(tagClass, 1);
  t.not(tagClass, 2);
});

test('Checks if mainStyleComputed exists', (t) => {
  const meth = typeof wrapper.computed().mainStyleComputed;
  t.is(meth, 'function');
});

/*
Test below is paused due to a bug in avoriaz
**/

// test('Checks existence some of datas', (t) => {
//   t.plan(2);
//   const datas =  wrapper.data();
//   console.log(datas)
//   t.is(datas.dataCounter , 0);
//   t.is(datas.displayState , 'shown');
// });



/*

unfortunately since AVA does not support tests with settimeout and setinterval,
we can not test this functionality of plugin.


**/