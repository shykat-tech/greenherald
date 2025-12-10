<template>
  <div class="action-card">
    <div class="left">
      <div class="action-logo">
        <!-- logo -->
        <div class="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            v-if="type === 'edit'"
          >
            <path
              d="M5.04241 21.7456L4 28L10.2545 26.9576C11.3406 26.7767 12.343 26.2608 13.1216 25.4821L27.2264 11.3772C28.2579 10.3456 28.2579 8.6732 27.2263 7.64168L24.3583 4.77365C23.3267 3.7421 21.6541 3.74212 20.6225 4.77369L6.51788 18.8787C5.73929 19.6572 5.22343 20.6596 5.04241 21.7456Z"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.6665 8L23.9998 13.3333"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            v-if="type === 'personal-detail'"
          >
            <path
              d="M18.6666 11.3337C18.6666 7.65177 15.6818 4.66699 12 4.66699C8.31809 4.66699 5.33331 7.65177 5.33331 11.3337C5.33331 15.0155 8.31809 18.0003 12 18.0003C15.6818 18.0003 18.6666 15.0155 18.6666 11.3337Z"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.3333 27.3333C21.3333 22.1787 17.1547 18 12 18C6.84534 18 2.66666 22.1787 2.66666 27.3333"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.9182 10.5783L28.0881 9.7481C27.5346 9.19465 26.6373 9.19465 26.0838 9.74809L21.8948 14.085C21.5346 14.4579 21.3333 14.9561 21.3333 15.4745V17.333H23.1918C23.7102 17.333 24.2084 17.1317 24.5813 16.7715L28.9182 12.5825C29.4717 12.029 29.4717 11.1317 28.9182 10.5783Z"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            v-if="type === 'contact-info'"
          >
            <path
              d="M5.33331 13.3337C5.33331 8.30534 5.33331 5.79119 6.89541 4.22909C8.45751 2.66699 10.9717 2.66699 16 2.66699H18C23.0282 2.66699 25.5425 2.66699 27.1045 4.22909C28.6666 5.79119 28.6666 8.30534 28.6666 13.3337V18.667C28.6666 23.6953 28.6666 26.2095 27.1045 27.7715C25.5425 29.3337 23.0282 29.3337 18 29.3337H16C10.9717 29.3337 8.45751 29.3337 6.89541 27.7715C5.33331 26.2095 5.33331 23.6953 5.33331 18.667V13.3337Z"
              stroke="#08110B"
              stroke-width="2"
            />
            <path
              d="M13.0666 15.9655C12.4978 14.9736 12.2231 14.1637 12.0575 13.3427C11.8126 12.1286 12.3731 10.9425 13.3016 10.1857C13.6941 9.86583 14.144 9.97511 14.376 10.3914L14.8999 11.3314C15.3152 12.0763 15.5228 12.4488 15.4816 12.8438C15.4404 13.2387 15.1604 13.5603 14.6004 14.2036L13.0666 15.9655ZM13.0666 15.9655C14.2179 17.9729 16.0247 19.7808 18.0345 20.9335M18.0345 20.9335C19.0264 21.5023 19.8363 21.7769 20.6573 21.9425C21.8715 22.1875 23.0575 21.6269 23.8143 20.6984C24.1341 20.3059 24.0249 19.856 23.6085 19.624L22.6687 19.1001C21.9236 18.6848 21.5512 18.4772 21.1563 18.5184C20.7613 18.5596 20.4397 18.8396 19.7964 19.3996L18.0345 20.9335Z"
              stroke="#08110B"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M6.66665 8H3.33331M6.66665 16H3.33331M6.66665 24H3.33331"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            v-if="type === 'documents'"
          >
            <path
              d="M27.3332 14.0003V13.3337C27.3332 8.30534 27.3332 5.79119 25.7712 4.22909C24.209 2.66699 21.6949 2.66699 16.6665 2.66699H15.3333C10.3051 2.66699 7.79093 2.66699 6.22884 4.22907C4.66675 5.79115 4.66672 8.30529 4.66668 13.3336L4.66663 19.3337C4.66659 23.7169 4.66657 25.9086 5.87713 27.3837C6.09879 27.6538 6.34644 27.9014 6.61652 28.1231C8.09165 29.3337 10.2833 29.3337 14.6665 29.3337"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 9.33301H22"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 16H18"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.3334 26.667V22.667C27.3334 20.7611 25.5426 18.667 23.3334 18.667C21.1242 18.667 19.3334 20.7611 19.3334 22.667V27.3337C19.3334 28.4382 20.2288 29.3337 21.3334 29.3337C22.4379 29.3337 23.3334 28.4382 23.3334 27.3337V22.667"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            v-if="type === 'likes-contributions'"
          >
            <path
              d="M13.8809 26.6239C10.1192 23.811 2.66663 17.3801 2.66663 11.5929C2.66663 7.76783 5.47364 4.66699 9.33329 4.66699C11.3333 4.66699 13.3333 5.33366 16 8.00033C18.6666 5.33366 20.6666 4.66699 22.6666 4.66699C26.5262 4.66699 29.3333 7.76783 29.3333 11.5929C29.3333 17.3801 21.8808 23.811 18.119 26.6239C16.8532 27.5705 15.1468 27.5705 13.8809 26.6239Z"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            v-if="type === 'profile-photo'"
          >
            <path
              d="M16.927 4.66797H15.0678C14.115 4.66797 13.6386 4.66797 13.2114 4.8173C12.9505 4.90849 12.7053 5.03969 12.4847 5.2062C12.1235 5.47885 11.8592 5.87522 11.3307 6.66797C11.0601 7.074 10.6611 7.67246 10.502 7.83958C10.108 8.25366 9.59133 8.53018 9.02821 8.62836C8.80094 8.66797 8.55696 8.66797 8.06898 8.66797C6.76221 8.66797 6.10884 8.66797 5.57458 8.8192C4.23814 9.19752 3.19361 10.242 2.81529 11.5785C2.66406 12.1127 2.66406 12.7661 2.66406 14.0729V19.3346C2.66406 23.1058 2.66406 24.9914 3.83564 26.163C5.00721 27.3346 6.89284 27.3346 10.6641 27.3346H21.3308C25.102 27.3346 26.9876 27.3346 28.1592 26.163C29.3308 24.9914 29.3308 23.1058 29.3308 19.3346V14.0729C29.3308 12.7661 29.3308 12.1127 29.1796 11.5785C28.8012 10.242 27.7566 9.19752 26.4202 8.8192C25.886 8.66797 25.2326 8.66797 23.9258 8.66797C23.4378 8.66797 23.1938 8.66797 22.9666 8.62836C22.4034 8.53018 21.8868 8.25366 21.4928 7.83958C21.3337 7.67245 20.9348 7.07398 20.6641 6.66797C20.1356 5.87522 19.8713 5.47885 19.5101 5.2062C19.2894 5.03969 19.0444 4.90849 18.7834 4.8173C18.3562 4.66797 17.8798 4.66797 16.927 4.66797Z"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.3308 17.3333C21.3308 20.2788 18.9429 22.6667 15.9974 22.6667C13.0519 22.6667 10.6641 20.2788 10.6641 17.3333C10.6641 14.3879 13.0519 12 15.9974 12C18.9429 12 21.3308 14.3879 21.3308 17.3333Z"
              stroke="#08110B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.3359 12.668V12.6817"
              stroke="#08110B"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div class="action-details">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>

    <div class="action-btn-wrapper">
      <button class="action-btn" @click="handleEditClick">Done</button>
    </div>
  </div>
</template>

<script setup>
const { type } = defineProps({
  type: {
    type: String,
    default: "edit", //edit | personal-detail | contact-info | documents | likes-contributions | profile-photo
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});

const globalStore = useGlobalStore();

const handleEditClick = () => {
  // Logic to handle edit action based on type
  switch (type) {
    case "edit":
      // Handle edit profile action
      console.log("Edit Profile clicked");
      globalStore.openModal("edit");
      break;
    case "personal-detail":
      // Handle personal details action
      console.log("Personal Details clicked");
      globalStore.openModal("personalDetail");
      break;
    case "contact-info":
      // Handle contact info action
      console.log("Contact Info clicked");
      globalStore.openModal("contactInfo");
      break;
    case "documents":
      // Handle documents action
      console.log("Documents clicked");
      globalStore.openModal("documents");
      break;
    case "likes-contributions":
      // Handle likes & contributions action
      console.log("Likes & Contributions clicked");
      globalStore.openModal("likesContributions");
      break;
    case "profile-photo":
      // Handle profile photo action
      console.log("Profile Photo clicked");
      globalStore.openModal("profilePhoto");
      break;
    default:
      console.log("Unknown action type");
  }
};
</script>

<style lang="scss" scoped>
.action-card {
  @include clamp-property("padding", 0.75, 1);
  @include clamp-property("gap", 0.62, 1);
  @include clamp-property("border-radius", 0.5, 1.125);

  display: flex;
  flex-direction: row; // Row layout for larger screens
  align-items: center;
  justify-content: space-between;

  background: #f6f6f6;

  height: 100% !important;
  width: 100% !important;

  max-width: 90svw;
  overflow: hidden;

  // Ensure row layout on medium and larger screens
  @include mediaMd {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  // Column layout only on small screens
  @include mediaSm {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .left {
    @include clamp-property("gap", 0.62, 1);

    flex: 1;
    display: flex;
    flex-direction: row; // Row layout for larger screens by default
    align-items: center;
    text-align: left;

    // Ensure row layout on medium and larger screens
    @include mediaMd {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      text-align: left;
    }

    // Column layout only on small screens
    @include mediaSm {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .icon-wrapper {
      display: flex;
      padding: 1rem;
      align-items: center;
      gap: 0.5rem;

      border-radius: 4rem;
      border: 1px solid $green-50;
      background: $neutral-white;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .action-details {
      flex: 1; // Take remaining space
      display: flex;
      flex-direction: column;
      justify-content: center;

      @include mediaSm {
        text-align: center;
        width: 100%;
      }
    }

    h3 {
      @include clamp-property("font-size", 1, 1.125);

      color: $green-900;
      font-family: $font-manrope;

      font-style: normal;
      font-weight: 550;
      line-height: 110%; /* 17.6px */
      margin: 0; // Remove default margin

      @include mediaSm {
        text-align: center;
      }
    }
    p {
      @include clamp-property("font-size", 0.8125, 0.875);
      color: $neutral-gray-900;
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 1.225rem */
      margin: 0; // Remove default margin

      @include mediaSm {
        text-align: center;
      }
    }
  }

  .action-btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0; // Prevent button from shrinking

    // Ensure proper positioning on medium and larger screens
    @include mediaMd {
      margin-top: 0;
      width: auto;
    }

    // Full width on small screens
    @include mediaSm {
      margin-top: 0.75rem;
      text-align: center;
      width: 100%;
    }

    .action-btn {
      @include clamp-property("padding-block ", 0.5, 0.62);
      @include clamp-property("padding-inline", 1.25, 1.5);
      @include clamp-property("font-size", 0.8125, 0.875);

      color: $neutral-white;
      background: $golden-700;
      font-family: $font-manrope;

      border: none;
      border-radius: 4.5rem;
      cursor: pointer;

      font-style: normal;
      font-weight: 550;
      line-height: 110%; /* 0.89375rem */
    }
  }
}
</style>
