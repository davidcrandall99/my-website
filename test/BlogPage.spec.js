import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Blogpage from '@/pages/blog/index.vue'

const localVue = createLocalVue();

describe('Blog Page', () => {
  test('is a Vue instance', () => {

    //here, we mount the hero with the registered local vue instance
    const wrapper = shallowMount(Blogpage, { localVue ,  stubs: {
      NuxtLink: RouterLinkStub
    }});
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
