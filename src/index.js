import "./style.scss";
import TodoList from './components/TodoList.vue';
import Vue from 'vue';

new Vue({
  el: '#app',
  components: { 'todo-list': TodoList },
});
