<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'middle'
  },
  prefixIcon: {
    type: String,
    default: ''
  },
  suffixIcon: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: undefined
  }
});

const btnType = computed(() => {
  return `btn-${props.type}`;
});
const isPlain = computed(() => {
  return props.plain ? 'btn-plain' : '';
});
const isRound = computed(() => {
  return props.round ? 'btn-round' : '';
});
const isDisabled = computed(() => {
  return props.disabled || props.loading ? 'btn-disabled' : '';
});
const size = computed(() => {
  switch (props.size) {
    case 'small':
      return 'btn-small';
    case 'large':
      return 'btn-large';
    default:
      return 'btn-middle';
  }
});

const prefix = computed(() => {
  return props.prefixIcon ? 'iconfont icon-' + props.prefixIcon : '';
});
const suffix = computed(() => {
  return props.suffixIcon ? 'iconfont icon-' + props.suffixIcon : '';
});

const getIconStype = (type: string) => {
  let style: any = {};
  if (type === 'prefix') style = { ['margin-right']: '6px' };
  else style = { ['margin-left']: '6px' };

  if (props.loading !== undefined && props.loading === false && type === 'prefix')
    style['display'] = 'none';
  else style['display'] = 'block';
  return style;
};
const getIconClass = (type: string, isLoading: boolean) => {
  let resClass = '';
  if (type === 'prefix') resClass = prefix.value;
  else if (type === 'suffix') resClass = suffix.value;
  if (props.loading && isLoading) resClass += ' isLoading';
  return resClass;
};
</script>

<template>
  <button @click="$emit('btnClick')" class="btn" :disabled="props.disabled"
    :class="[btnType, isPlain, isRound, isDisabled, size]">
    <i :class="getIconClass('prefix', true)" :style="getIconStype('prefix')"></i>
    <slot></slot>
    <i :class="getIconClass('suffix', false)" :style="getIconStype('suffix')"></i>
  </button>
</template>

<style scoped lang="scss">
$btn-back-color-default: #fff;
$btn-back-color-primary: #409eff;
$btn-back-color-success: #67c23a;
$btn-back-color-info: #909399;
$btn-back-color-warning: #e6a23a;
$btn-back-color-danger: #f56c6c;
$btn-back-color-default-lighter: #ecf5ff;
$btn-back-color-default-lighter1: #92c1f0;
$btn-back-color-primary-lighter: #72abf1;
$btn-back-color-primary-lighter1: #e5effb;
$btn-back-color-success-lighter: #a9e17a;
$btn-back-color-success-lighter1: #e7f6da;
$btn-back-color-info-lighter: #c9cdd5;
$btn-back-color-info-lighter1: #f4f6f8;
$btn-back-color-warning-lighter: #e8b467;
$btn-back-color-warning-lighter1: #f8f1e8;
$btn-back-color-danger-lighter: #f88989;
$btn-back-color-danger-lighter1: #f6e7e7;
/* 边框 */
$btn-border-color-default: #dce1ea;
$btn-border-radius-default: 5px;
$btn-border-radius: 16px;
/* 字体 */
$btn-font-color-default: #7d7e82;
$btn-font-size-default: 16px;
$btn-font-size-small: 14px;
$btn-font-size-large: 18px;
$btn-font-color-white: #fff;
/* 尺寸 */
$btn-small-padding: 6px 12px;
$btn-middle-padding: 8px 14px;
$btn-big-padding: 10px 16px;

.btn {
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: $btn-back-color-default;
  border-radius: $btn-border-radius-default;
  color: $btn-font-color-default;
  cursor: pointer;
  color: $btn-font-color-white;

  &-default {
    color: $btn-font-color-default;
    border: 1px solid $btn-border-color-default;

    &:not(.btn-disabled):hover {
      background-color: $btn-back-color-default-lighter;
      color: $btn-back-color-default-lighter1;
      border: 1px solid $btn-back-color-default-lighter1;
    }

    &.btn-plain {
      &:not(.btn-disabled):hover {
        background-color: $btn-back-color-default;
        color: $btn-back-color-primary;
        border: 1px solid $btn-back-color-primary;
      }
    }
  }

  &-primary {
    background-color: $btn-back-color-primary;

    &:not(.btn-disabled):hover {
      background-color: $btn-back-color-primary-lighter;
    }

    &.btn-plain {
      background-color: $btn-back-color-primary-lighter1;
      border: 1px solid $btn-back-color-primary-lighter;
      color: $btn-back-color-primary-lighter;

      &:not(.btn-disabled):hover {
        background-color: $btn-back-color-primary;
        color: $btn-font-color-white;
        border: 1px solid $btn-back-color-primary;
      }
    }
  }

  &-success {
    background-color: $btn-back-color-success;

    &:not(.btn-disabled):hover {
      background-color: $btn-back-color-success-lighter;
    }

    &.btn-plain {
      background-color: $btn-back-color-success-lighter1;
      border: 1px solid $btn-back-color-success-lighter;
      color: $btn-back-color-success-lighter;

      &:not(.btn-disabled):hover {
        background-color: $btn-back-color-success;
        color: $btn-font-color-white;
        border: 1px solid $btn-back-color-success;
      }
    }
  }

  &-info {
    background-color: $btn-back-color-info;

    &:not(.btn-disabled):hover {
      background-color: $btn-back-color-info-lighter;
    }

    &.btn-plain {
      background-color: $btn-back-color-info-lighter1;
      border: 1px solid $btn-back-color-info-lighter;
      color: $btn-back-color-info-lighter;

      &:not(.btn-disabled):hover {
        background-color: $btn-back-color-info;
        color: $btn-font-color-white;
        border: 1px solid $btn-back-color-info;
      }
    }
  }

  &-warning {
    background-color: $btn-back-color-warning;

    &:not(.btn-disabled):hover {
      background-color: $btn-back-color-warning-lighter;
    }

    &.btn-plain {
      background-color: $btn-back-color-warning-lighter1;
      border: 1px solid $btn-back-color-warning-lighter;
      color: $btn-back-color-warning-lighter;

      &:not(.btn-disabled):hover {
        background-color: $btn-back-color-warning;
        color: $btn-font-color-white;
        border: 1px solid $btn-back-color-warning;
      }
    }
  }

  &-danger {
    background-color: $btn-back-color-danger;

    &:not(.btn-disabled):hover {
      background-color: $btn-back-color-danger-lighter;
    }

    &.btn-plain {
      background-color: $btn-back-color-danger-lighter1;
      border: 1px solid $btn-back-color-danger-lighter;
      color: $btn-back-color-danger-lighter;

      &:not(.btn-disabled):hover {
        background-color: $btn-back-color-danger;
        color: $btn-font-color-white;
        border: 1px solid $btn-back-color-danger;
      }
    }
  }
}

.btn-round {
  border-radius: $btn-border-radius;
}

.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-small {
  padding: $btn-small-padding;
  font-size: $btn-font-size-small;
}

.btn-middle {
  padding: $btn-middle-padding;
  font-size: $btn-font-size-default;
}

.btn-large {
  padding: $btn-big-padding;
  font-size: $btn-font-size-large;
}

.isLoading {
  animation: loading 1s infinite linear;
}

@keyframes loading {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
