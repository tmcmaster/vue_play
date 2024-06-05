<script>
export default {
  name: 'Checkbox',
  props: {
    onChange: {
      type: Function,
      required: true
    },
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <main>
    <div>
      <input type="checkbox" v-model="todo.done" @change="onChange"/>
    </div>
  </main>
</template>

<style scoped>

main {
  border: 1px solid #aaa;
  border-radius: 1px;
  padding: 0 0 2px 2px;
  margin: 2px;
}

div {
  position: relative;
  top: -2px;
  left: 0;
  padding: 0;
  margin: 0;
  width: 15px;
  height: 15px;
  box-sizing: border-box;
}

input[type="checkbox"] {

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 13px;
  height: 13px;
  outline: none;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: hsla(160, 100%, 37%, 1); /* Change background color when checked */
  border-color: hsla(160, 100%, 37%, 1); /* Change border color when checked */
  padding-bottom: 2px;
}
</style>