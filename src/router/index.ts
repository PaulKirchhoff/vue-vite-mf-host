// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HostView from "../views/HostView.vue";
import HostInfoView from "../views/HostInfoView.vue";
import RemoteAppView from "../views/RemoteAppView.vue";

const routes = [
  { path: '/', component: HostView },
  { path: '/remote-app', component: RemoteAppView },
  { path: '/host-info', component: HostInfoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

async function loadRemoteRoutes() {
  const {default: remoteRouter} = await import('remote_app/router');
  remoteRouter.getRoutes().forEach((route: any) => {
    console.log("Route", route)
    router.addRoute(route);
  });
  console.log("routes", router.getRoutes())

}

loadRemoteRoutes();
export default router
