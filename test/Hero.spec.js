import { mount, shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Hero from '@/components/Hero.vue'
import BootstrapVue from 'bootstrap-vue'
import VueParticles from 'vue-particles'

/*
  This component uses BootstrapVue components, which are registered globally.
  In order to avoid console errors for unknown components, we must register
  BootstrapVue components in the local Vue instance for testing.
*/
const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueParticles);

describe('Hero', () => {
  test('is a Vue instance', () => {

    //here, we mount the hero with the registered local vue instance, which includes BootstrapVue
    const wrapper = mount(Hero, { localVue, stubs: {
      NuxtLink: RouterLinkStub,
    }});
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
