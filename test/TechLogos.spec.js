import { mount, shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import TechLogos from '@/components/TechLogos.vue'

const localVue = createLocalVue();

describe('TechLogos', () => {
  test('is a Vue instance', () => {

    //here, we mount the component with the registered local vue instance
    const wrapper = mount(TechLogos, { localVue, stubs: {
      NuxtLink: RouterLinkStub,
    }});
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
