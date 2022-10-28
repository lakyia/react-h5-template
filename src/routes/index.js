export default {
  routes: [
    { path: "/login", component: "login" },
    {
      path: "/",
      component: "@/layouts/index",
      routes: [
        { path: "/home", component: "home" },
        { path: "/my", component: "my" },
        { path: "/about", component: "about" },
      ],
    },
  ],
};
