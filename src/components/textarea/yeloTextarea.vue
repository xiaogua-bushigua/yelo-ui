<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  cols: {
    type: Number,
    default: 20
  },
  rows: {
    type: Number,
    default: 5
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  maxLen: {
    type: Number,
    default: null
  },
  resize: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['handleInputEmit', 'handleBlurEmit', 'handleFocusEmit'])
const handleInputEmit = () => {
  emit('handleInputEmit', event?.target)
}
const handleBlurEmit = () => {
  emit('handleBlurEmit', event?.target)
}
const handleFocusEmit = () => {
  emit('handleFocusEmit', event?.target)
}

const disabledClass = computed(() => {
  if (props.disabled) return 'Disabled'
  else return ''
})
const resizeClass = computed(() => {
  if (!props.resize) return 'Resize'
  else return ''
})
</script>

<template>
  <div class="textWrap">
    <textarea :cols="cols" :rows="rows" :value="props.text" @input="handleInputEmit" @focus="handleFocusEmit"
      @blur="handleBlurEmit" :disabled="props.disabled" :class="[disabledClass, resizeClass]" :readonly="props.readonly"
      :placeholder="props.placeholder" :maxlength="props.maxLen ? props.maxLen : 140"></textarea>
    <div class="tip" v-show="props.maxLen">{{ props.text.length + '/' + props.maxLen }}</div>
  </div>
</template>

<style scoped lang="scss">
$textarea-font-size: 14px;
$textarea-font-color: rgb(20, 20, 20);
$textarea-font-placeholder-color: rgb(114, 114, 114);
$textarea-border-radius: 5px;
$textarea-border-color: rgb(180, 180, 180);
$textarea-border-focus-color: rgb(79, 116, 185);
$textarea-tip-font-size: 12px;
$textarea-tip-font-color: rgb(126, 126, 126);

.textWrap {
  display: inline-block;
  position: relative;
}

textarea {
  box-sizing: border-box;
  outline: none;
  padding: 8px;
  border-radius: $textarea-border-radius;
  font-size: $textarea-font-size;
  font-family: auto;
  color: $textarea-font-color;
  border: 1px solid $textarea-border-color;

  &:focus {
    border: 1px solid $textarea-border-focus-color;
  }

  &::placeholder {
    color: $textarea-font-placeholder-color;
  }
}

.tip {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: $textarea-tip-font-size;
  color: $textarea-tip-font-color;
}

.Disabled {
  user-select: none;

  &:hover {
    cursor: no-drop;
  }
}

.Resize {
  resize: none;
}
</style>