import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Blogpage from '@/pages/blog/index.vue'
import BootstrapVue from 'bootstrap-vue'
/*
  This component uses BootstrapVue components, which are registered globally.
  In order to avoid console errors for unknown components, we must register
  BootstrapVue components in the local Vue instance for testing.
*/
const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Blog Page', () => {
  test('is a Vue instance', () => {

    //here, we mount the hero with the registered local vue instance, which includes BootstrapVue
    const wrapper = shallowMount(Blogpage, { localVue ,  stubs: {
      NuxtLink: RouterLinkStub
    }});
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
