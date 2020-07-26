import "./style.scss";
import ListsContainer from "./components/ListsContainer.vue";
import Vue from "vue";

new Vue({
  el: "#app",
  components: { "lists-container": ListsContainer }
});
