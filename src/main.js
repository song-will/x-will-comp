import '../public-path'
import App from '@/view/App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(VueRouter)
Vue.use(ElementUI)

let router = null;
let instance = null;

function render({ container, superRouter } = {}) {

  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/comp1' : '/',
    mode: 'history',
    routes,
  });
  window.$superRouter = superRouter
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}
console.log('window.__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__)
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}



