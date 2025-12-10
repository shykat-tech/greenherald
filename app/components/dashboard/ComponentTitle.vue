<template>
  <div class="component-top-title">
    <h2>{{ compTitle }}</h2>

    <button @click="handleEditClick">
      <img src="../../assets/icons/pencil-edit.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
defineProps({
  compTitle: {
    type: String,
    required: true,
  },
});

const emit = defineEmits([]);

const handleEditClick = () => {
  // Emit an event when the edit button is clicked
  emit("edit-clicked");
};
</script>

<style lang="scss" scoped>
.component-top-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    @include clamp-property("font-size", 1.25, 1.5);

    font-family: $font-manrope;
    color: $green-900;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 1.65rem */
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 1rem;
      height: 1rem;
      object-fit: contain;
    }
  }
}
</style>
