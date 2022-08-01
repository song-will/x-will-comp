import VueRouter from 'vue-router'
import routes from '@/router'
import Vue from 'vue'
import App from '@/view/App.vue';

export function render({ container, superRouter, initUrl } = {}) {
  let router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/comp1' : '/',
    mode: initUrl ? 'abstract' : 'history',
    routes,
  });
  window.$superRouter = superRouter
  const instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
  initUrl && router.push(initUrl)
  return instance
}


export async function lifeStyleProvider() {
  let instance = null

  return {
    async bootstrap() {
      console.log('vue app bootstraped');
    },

    async mount(props) {
      console.log('props from main framework', props);
      instance = render(props);
    },

    async unmount() {
      instance.$destroy();
      instance.$el.innerHTML = "";
      instance = null;
    }
  }
}


