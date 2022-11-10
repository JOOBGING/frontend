import Vue from "vue";
import VueRouter from "vue-router";
import PostPreview from "../components/PostPreview.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/post",
      component: PostPreview,
    },
  ],
});
