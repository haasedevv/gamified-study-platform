<template>
  <button
    type="button"
    :class="['multiple-choice-option__container', { blocked }]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const { blocked } = defineProps<{ blocked: boolean }>();
</script>

<style lang="scss" scoped>
.multiple-choice-option__container {
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  background: #ffe500;
  border: none;
  text-align: left;
  cursor: pointer;
  color: #000;
  font-size: 16px;
  line-height: normal;

  &.blocked {
    &:hover {
      animation: none !important;
    }
  }

  &:hover {
    background: #ffe500;
    animation: taskHover 0.5s linear infinite;
  }

  @keyframes taskHover {
    100% {
      background: #ffe500;
      opacity: 0.4;
    }
  }
}
</style>
