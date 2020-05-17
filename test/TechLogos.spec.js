import { mount, shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import TechLogos from '@/components/TechLogos.vue'
import BootstrapVue from 'bootstrap-vue'

/*
  This component uses BootstrapVue components, which are registered globally.
  In order to avoid console errors for unknown components, we must register
  BootstrapVue components in the local Vue instance for testing.
*/
const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('TechLogos', () => {
  test('is a Vue instance', () => {

    //here, we mount the component with the registered local vue instance, which includes BootstrapVue
    const wrapper = mount(TechLogos, { localVue, stubs: {
      NuxtLink: RouterLinkStub,
    }});
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})