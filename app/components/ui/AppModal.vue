<template>
  <div
    class="modal-wrapper"
    @click.self="globalStore.closeModal"
    @wheel.prevent
  >
    <div class="modal-content" ref="modalContent" @wheel.stop>
      <component :is="compLookup[globalStore.openModalType]" />
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";

const globalStore = useGlobalStore();
const modalContent = ref(null);

const compLookup = {
  membership: "MembershipModalInfo",
  alumniConfirmation: "AlumniConfirmation",
  edit: "EditProfileModal",
  personalDetail: "EditProfileModal",
  contactInfo: "EditProfileModal",
  documents: "EditProfileModal",
  likesContributions: "EditProfileModal",
  profilePhoto: "ProfilePhotoModal",
};

// Handle body scroll lock and wheel events
onMounted(() => {
  if (process.client) {
    // Lock body scroll when modal opens
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Stop Lenis smooth scrolling if available
    const { $lenis } = useNuxtApp();
    if ($lenis) {
      $lenis.stop();
    }

    // Prevent wheel events on the document but allow them inside modal content
    const preventBodyScroll = (e) => {
      if (!modalContent.value?.contains(e.target)) {
        e.preventDefault();
      }
    };

    // Add wheel event listener to document
    document.addEventListener("wheel", preventBodyScroll, { passive: false });

    // Store the function for cleanup
    modalContent.value.__preventBodyScroll = preventBodyScroll;
  }

  //if user's route changes, close the modal
  const router = useRouter();
  router.beforeEach((to, from, next) => {
    globalStore.closeModal();
    next();
  });
});

onUnmounted(() => {
  if (process.client) {
    // Restore body scroll when modal closes
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    // Resume Lenis smooth scrolling if available
    const { $lenis } = useNuxtApp();
    if ($lenis) {
      $lenis.start();
    }

    // Remove wheel event listener
    if (modalContent.value?.__preventBodyScroll) {
      document.removeEventListener(
        "wheel",
        modalContent.value.__preventBodyScroll
      );
    }
  }
});
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: fadeIn 0.3s ease-out;
  overflow: hidden; // Prevent any background scrolling

  .modal-content {
    @include clamp-property("padding", 2, 3);
    border-radius: 2.5rem;
    background: #f7f5f0;
    max-height: 90vh;
    max-width: 90vw;
    overflow-y: auto;
    overflow-x: hidden;
    animation: slideInScale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

    // Improve scrolling behavior
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;

    // Ensure mouse wheel events work
    overscroll-behavior: contain;

    // Custom scrollbar styling
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    @include mediaSm {
      // max-width: 97dvw;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInScale {
  from {
    opacity: 0;
    transform: scale(1) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
