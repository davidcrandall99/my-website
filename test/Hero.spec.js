import { mount, shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Hero from '@/components/Hero.vue'

const localVue = createLocalVue();

describe('Hero', () => {
  test('is a Vue instance', () => {

    //here, we mount the hero with the registered local vue instance
    const wrapper = mount(Hero, { localVue, stubs: {
      NuxtLink: RouterLinkStub,
    }});
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
