<template>
    <button class="btn">
        <slot />
    </button>
  
</template>

<script setup>

</script>

<style lang="scss" scoped>
.btn {
    background-color: $green-500;
    color: #FFF;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
</style>