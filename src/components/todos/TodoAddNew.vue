<script>
export default {
  name: 'TodoAddNew',
  props: {
    onAddItem: {
      type: Function,
      required: true
    }
  },
  methods: {
    addItem() {
      // Get the value of the input field
      const inputValue = this.$refs.inputField.value;

      // Call the callback function with the input value
      this.onAddItem(inputValue);

      // Clear the input field after adding item
      this.$refs.inputField.value = '';
    }
  }
}
</script>

<template>
  <main>
    <label>New Item:</label>
    <input ref="inputField"/>
    <button @click="addItem">Add</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  width:100%;
}
label {
  width: auto;
  margin-right: 1rem;
}
button {
  width: auto;
  margin-left: 1rem;
}
input {
  flex:1;
  margin-right: 1rem;
}
</style>
