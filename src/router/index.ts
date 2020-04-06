import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Tags from '@/views/Tags.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditTag from '@/views/EditTag.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect:'/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/Tags',
    component: Tags
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/Tags/edit/:id',
    component: EditTag
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
