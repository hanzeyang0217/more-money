<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" :value="inputNotes" @input="input($event.target.value)" placeholder="在这里输入备注">
    </label>
  </div>
</template>

<script lang="js">
  export default {
    name: "Notes",
    props:['inputNotes'],
    methods:{
      input(value){
        this.$emit('update:inputNotes', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>