<template>
  <div>
    <label for=""></label>
    오늘할일<input
      id="todo-input"
      type="text"
      :value="item"
      @input="handleInput"
    />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    item: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput(event: InputEvent) {
      const eventTarget = event.target as HTMLInputElement;
      this.$emit('input', eventTarget.value);
    },
    addTodo() {
      this.$emit('add');
    }
  }
});
</script>

<style scoped></style>
