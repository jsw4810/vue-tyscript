<template>
  <div>
    <li>
      <span class="item" :class="todoItemClass" @click="toggleItem">{{
        todoItem.title
      }}</span>
      <button @click="removeTodoList">삭제</button>
    </li>
  </div>
</template>

<script lang="ts">
import { Todo } from '@/App.vue';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number
  },
  computed: {
    todoItemClass(): string | null {
      return this.todoItem.done ? 'complete' : null;
    }
  },
  methods: {
    toggleItem() {
      this.$emit('toggle', this.todoItem, this.index);
    },
    removeTodoList() {
      this.$emit('removeTodoList', this.index);
    }
  }
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
