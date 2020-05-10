import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import RecentPosts from '@/components/RecentPosts.vue'
import BootstrapVue from 'bootstrap-vue'

/*
  This component uses BootstrapVue components, which are registered globally.
  In order to avoid console errors for unknown components, we must register
  BootstrapVue components in the local Vue instance for testing.
*/
const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Recent Posts Component', () => {
  test('is a Vue instance', () => {

    //here, we mount the hero with the registered local vue instance, which includes BootstrapVue
    const wrapper = shallowMount(RecentPosts, { localVue, stubs: {
      NuxtLink: RouterLinkStub,
      RecentPosts: RecentPosts
    } });
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
