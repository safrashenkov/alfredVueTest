import Vue from 'vue';
import App from './App.vue';
import FullCalendar from 'vue-full-calendar';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import tvCalendar from 'tvCalendar';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';

Vue.use(VueMaterial);
//Vue.use(FullCalendar);
Vue.use(VueRouter);

const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};

const routes = [
  {path: '/tv', component: tvCalendar},
  {path: '/tv2', component: Foo},
  {path: '/tv3', component: Foo},
  {path: '/other', component: Bar},
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

export default {
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/');
    },
  }
};