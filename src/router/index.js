import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contract from "../views/Contract";
import ContractInstance from "../views/ContractInstance";
import DataSource from "../views/DataSource";
import MetaModel from "../views/MetaModel";
import KGImpl from "../views/KGImpl";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contract',
    component: Contract
  },
  {
    path: '/contract/:id',
    component: ContractInstance
  },
  {
    path: '/data-source',
    component: DataSource
  },
  {
    path: '/meta-model',
    component: MetaModel
  },
  {
    path: '/kg-impl',
    component: KGImpl
  },
];

const router = new VueRouter({
  routes
});

export default router
