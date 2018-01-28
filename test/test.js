import { mount } from 'avoriaz';
import test from 'ava';
import Textra from '../src/Textra.vue';

// tests are paused due to Unexpected token < error

test('renders an h1', (t) => {
    const wrapper = mount(Textra);
    const numberOfH1 = wrapper.find('.textra').length;
    t.is(numberOfH1, 1);
  });