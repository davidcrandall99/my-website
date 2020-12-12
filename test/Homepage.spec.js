import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Homepage from '@/pages/index.vue'

const localVue = createLocalVue();


describe('Homepage', () => {
  test('is a Vue instance', () => {

    //here, we mount the hero with the registered local vue instance
    const wrapper = shallowMount(Homepage, { localVue,  stubs: {
      NuxtLink: RouterLinkStub
    } });
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
