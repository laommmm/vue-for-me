export default [
  {
    path: "/home",
    name: "home",
    component: () => import(`@/templates/home/Home.vue`)
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/templates/home/About.vue")
  }
];
