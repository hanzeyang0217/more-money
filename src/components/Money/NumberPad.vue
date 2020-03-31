<template>
  <div class="numberPad">
    <div class="output">{{btOutput}}</div>
    <div class="buttons">
      <button @click="enterNumber(1)">1</button>
      <button @click="enterNumber(2)">2</button>
      <button @click="enterNumber(3)">3</button>
      <button @click="deleteEnter()">删除</button>
      <button @click="enterNumber(4)">4</button>
      <button @click="enterNumber(5)">5</button>
      <button @click="enterNumber(6)">6</button>
      <button @click="clearEnter()">清空</button>
      <button @click="enterNumber(7)">7</button>
      <button @click="enterNumber(8)">8</button>
      <button @click="enterNumber(9)">9</button>
      <button @click="submitEnter()" class="ok">OK</button>
      <button @click="enterNumber(0)" class="zero">0</button>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "NumberPad",
    data() {
      return {
        output: 0
      }
    },
    computed: {
      btOutput: function () {
        if (this.output.toString().length <= 3) {
          return this.output
        } else if (this.output.length <= 7) {
          return Number(this.output).toLocaleString()
        } else {
          return `not support rich`
        }
      }
    },
    methods: {
      enterNumber(number) {
        if (this.output === 0) {
          this.output = number
        } else {
          this.output = this.output.toString() + number
        }
      },
      deleteEnter() {
        if (this.output.toString().length === 1) {
          this.output = 0
        } else {
          this.output = this.output.toString().slice(0, -1)
        }
      },
      clearEnter() {
        this.output = 0
      },
      submitEnter() {
        //TODO
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
    }

    .buttons {
      @extend %clearFix;

      > button {
        cursor: pointer;
        width: 25%;
        height: 64px;
        float: left;
        background: transparent;
        border: none;

        &.ok {
          height: 64*2px;
          float: right;
        }

        &.zero {
          width: 25*3%;
        }

        $bg: #f2f2f2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }

        &:nth-child(12) {
          background: darken($bg, 4*6%);
        }
      }
    }
  }
</style>