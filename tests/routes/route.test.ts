import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import {createRouter, createWebHistory} from 'vue-router';
import AppComponent from '@/pages/index.vue';
import AboutComponent from '@/pages/about.vue';

describe("navigating", () => {
  test("should navigate to /about", async () => {
    const router = createRouter({
        history: createWebHistory(),
        routes: [
          {
            path: "/",
            name: "Home",
            component: () => import("@/pages/index.vue")
          },
          {
            path: "/about",
            name: "About",
            component: () => import("@/pages/about.vue")
          }
        ]
        })
      await router.push('/about')
      await router.isReady()
      const wrapper = mount(AppComponent, {
          global: {
              plugins: [router]
          }
      })
      // console.log(router.currentRoute.value)

      expect(router.currentRoute.value.name).toBe('About')
      //console.log(await wrapper.findComponent(AboutComponent))
      // expect(wrapper.findComponent(AboutComponent).exists()).toBe(true)
  })
})

