import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import RecentPosts from '@/components/RecentPosts.vue'

const localVue = createLocalVue();

describe('Recent Posts Component', () => {
  test('is a Vue instance', () => {

    //here, we mount the hero with the registered local vue instance
    const wrapper = shallowMount(RecentPosts, { localVue, stubs: {
      NuxtLink: RouterLinkStub,
      RecentPosts: RecentPosts
    } });
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
