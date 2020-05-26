import Vue from 'vue';
import Router from 'vue-router';
import ContactForm from '@/components/ContactForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContactForm',
      component: ContactForm
    }
  ]
});
