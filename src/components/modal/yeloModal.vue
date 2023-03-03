<script setup lang="ts">
import hhButton from '../button/yeloButton.vue'

const props = defineProps({
  title: {
    type: String,
    default: '提示框'
  },
  display: {
    type: String,
    default: 'none'
  }
})

const emit = defineEmits(['handleYesEmit', 'handleNoEmit', 'handleBackEmit'])
const handleYesEmit = () => {
  emit('handleYesEmit')
}
const handleNoEmit = () => {
  emit('handleNoEmit')
}
const handleBackEmit = () => {
  emit('handleNoEmit')
}
</script>

<template>
  <div class="modalBack" @click.self="handleBackEmit" :style="{display: props.display}">
    <div class="modalWrap">
      <div class="modalTitle">{{ props.title }}</div>
      <div class="modalContent">
        <slot></slot>
      </div>
      <div class="modalBtns">
        <hh-button size="small" type="success" @click.stop="handleYesEmit">确认</hh-button>
        <hh-button size="small" type="default" @click.stop="handleNoEmit">取消</hh-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$modal-default-width: 400px;
$modal-default-height: 150px;
$modal-back-color: #fff;
$modal-mask-color: rgba(0, 0, 0, 0.6);
$modal-border-raidus: 5px;
$modal-title-border-bottom-color: rgb(198, 194, 194);
$modal-title-height: 40px;
$modal-title-margin: 0 20px;
$modal-title-padding: 0 0 0 10px;
$modal-content-height: 80px;
$modal-content-margin: 20px 0px;
$modal-btn-margin-bottom: 15px;

.modalBack {
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: $modal-mask-color;

  .modalWrap {
    background-color: $modal-back-color;
    width: $modal-default-width;
    min-height: $modal-default-height;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: $modal-border-raidus;

    .modalTitle {
      height: $modal-title-height;
      line-height: $modal-title-height;
      margin: $modal-title-margin;
      padding: $modal-title-padding;
      text-align: start;
      border-bottom: 1px solid $modal-title-border-bottom-color;
      user-select: none;
    }

    .modalContent {
      min-height: $modal-content-height;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: $modal-content-margin;
    }

    .modalBtns {
      float: right;
      margin-bottom: $modal-btn-margin-bottom;
    }
  }
}

button {
  margin: 0 20px;
}
</style>