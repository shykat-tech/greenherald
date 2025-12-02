<template>
  <div class="gap-between-sections dashboard-comp-wrapper">
    <ComponentTitle
      compTitle="Profile details"
      @edit-clicked="handleEditClick()"
    />

    <div class="profile-detail-content-wrapper">
      <div class="tab-btn-container">
        <div class="tab-buttons-scrollable">
          <button
            v-for="tab in tabs"
            :key="tab.name"
            :class="{ active: activeTab === tab.name }"
            @click="handleTabClick(tab)"
          >
            {{ tab.label }}
            <span class="tab-indicator"></span>
          </button>
        </div>
      </div>

      <div class="tab-content-panel">
        <Transition name="tab-fade" mode="out-in">
          <div
            v-if="activeTab === 'overview'"
            key="overview"
            class="tab-comp-container"
          >
            <!-- Personal Details Content -->

            <div class="row">
              <div class="info-card">
                <div class="icon-wrapper">
                  <img src="../../assets/icons/dashboard/phone.svg" alt="" />
                </div>

                <div class="info-card-details">
                  <h3>Phone</h3>
                  <p>+1 234 567 8901</p>
                </div>
              </div>

              <div class="info-card">
                <div class="icon-wrapper">
                  <img src="../../assets/icons/dashboard/email.svg" alt="" />
                </div>

                <div class="info-card-details">
                  <h3>Email</h3>
                  <p>shova@co.design</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="info-card">
                <div class="icon-wrapper">
                  <img src="../../assets/icons/dashboard/gender.svg" alt="" />
                </div>

                <div class="info-card-details">
                  <h3>Gender</h3>
                  <p>Female</p>
                </div>
              </div>
              <div class="info-card">
                <div class="icon-wrapper">
                  <img
                    src="../../assets/icons/dashboard/blood-group.svg"
                    alt=""
                  />
                </div>

                <div class="info-card-details">
                  <h3>Blood group</h3>
                  <p>O+</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="info-card">
                <div class="icon-wrapper">
                  <img
                    src="../../assets/icons/dashboard/users-avatar.svg"
                    alt=""
                  />
                </div>

                <div class="info-card-details">
                  <h3>Father's Name</h3>
                  <p>--</p>
                </div>
              </div>

              <div class="info-card">
                <div class="icon-wrapper">
                  <img
                    src="../../assets/icons/dashboard/users-avatar.svg"
                    alt=""
                  />
                </div>

                <div class="info-card-details">
                  <h3>Mothers 's Name</h3>
                  <p>--</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="info-card">
                <div class="icon-wrapper">
                  <img
                    src="../../assets/icons/dashboard/profession.svg"
                    alt=""
                  />
                </div>

                <div class="info-card-details">
                  <h3>Profession</h3>
                  <p>Software Engineer</p>
                </div>
              </div>

              <div class="info-card">
                <div class="icon-wrapper">
                  <img src="../../assets/icons/dashboard/company.svg" alt="" />
                </div>

                <div class="info-card-details">
                  <h3>Current Company</h3>
                  <p>ABC Corp</p>
                </div>
              </div>
            </div>
          </div>

          <div
            v-else-if="activeTab === 'personal-details'"
            key="personal-details"
            class="tab-comp-container"
          >
            <!-- Personal Details Content -->

            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Gender</h3>
                  <p>Female</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Blood group</h3>
                  <p>O+</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Certificates Obtained From</h3>
                  <p>ABC Institute</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Certificates Obtained From</h3>
                  <p>XYZ Institute</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Father's Name</h3>
                  <p>--</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card-details">
                  <h3>Mothers 's Name</h3>
                  <p>--</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Profession</h3>
                  <p>Software Engineer</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card-details">
                  <h3>Current Company</h3>
                  <p>ABC Corp</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Marital Status</h3>
                  <p>Software Engineer</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card-details">
                  <h3>Spouse Name</h3>
                  <p>Jane Doe</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Children 1</h3>
                  <p>Software Engineer</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card-details">
                  <h3>Children 2</h3>
                  <p>Jane Doe</p>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else-if="activeTab === 'contact-info'"
            key="contact-info"
            class="tab-comp-container"
          >
            <!-- Contact Info Content -->
            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Phone</h3>
                  <p>+1 234 567 890</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Email</h3>
                  <p>jane.doe@example.com</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Emergency contact</h3>
                  <p>+1 234 567 890</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Emergency contact relationship</h3>
                  <p>Spouse</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Facebook</h3>
                  <p>facebook.com/jane.doe</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card-details">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/jane-doe</p>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else-if="activeTab === 'documents'"
            key="documents"
            class="tab-comp-container"
          >
            <!-- Documents Content -->
            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Facebook</h3>
                  <p>facebook.com/jane.doe</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card-details">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/jane-doe</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Facebook</h3>
                  <p>facebook.com/jane.doe</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card-details">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/jane-doe</p>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else-if="activeTab === 'likes-contributions'"
            key="likes-contributions"
            class="tab-comp-container"
          >
            <!-- Likes & Contributions Content -->
            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Facebook</h3>
                  <p>facebook.com/jane.doe</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card-details">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/jane-doe</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="info-card">
                <div class="info-card-details">
                  <h3>Facebook</h3>
                  <p>facebook.com/jane.doe</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card-details">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/jane-doe</p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref("overview");

const globalStore = useGlobalStore();

const tabs = [
  { name: "overview", label: "Overview" },
  { name: "personal-details", label: "Personal Details" },
  { name: "contact-info", label: "Contact Info" },
  { name: "documents", label: "Documents" },
  { name: "likes-contributions", label: "Likes & Contributions" },
];

const handleTabClick = (tab) => {
  // Logic to handle tab click can be added here
  activeTab.value = tab.name;
};

const handleEditClick = () => {
  // Logic to handle edit click can be added here
  globalStore.openModal("personalDetail");
};
</script>

<style lang="scss" scoped>
.profile-detail-content-wrapper {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  .tab-btn-container {
    margin-bottom: 20px;
    .tab-buttons-scrollable {
      @include clamp-property("gap", 1.25, 2.5);
      display: flex;
      width: 100%;
      overflow-x: auto;

      border-bottom: 1px solid $green-50;

      button {
        @include clamp-property("font-size", 0.9375, 1.125);
        @include clamp-property("padding-bottom", 0.75, 1);

        border: none;
        background: transparent;
        cursor: pointer;
        white-space: nowrap;

        color: $neutral-gray-800;
        text-align: center;

        /* Btn 18 */
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 550;
        line-height: 110%; /* 1.2375rem */

        // border-bottom: 1px solid transparent;
        transition: all 0.3s ease-in-out;

        position: relative;

        .tab-indicator {
          position: absolute;
          display: block;

          height: 4px;
          background-color: $golden-700;
          bottom: 0;
          width: 0%;

          transition: width 0.3s ease-in-out;
          transform-origin: center center;
        }

        &.active {
          color: $golden-700;
          .tab-indicator {
            width: 100%;
          }
        }
      }
    }
  }

  .tab-content-panel {
    padding: 20px;
    width: 100%;
    overflow-x: auto;

    .tab-comp-container {
      @include clamp-property("gap", 0.75, 1);
      display: flex;
      flex-direction: column;
    }

    .row {
      @include clamp-property("gap", 0.75, 1);

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      @include mediaSm {
        grid-template-columns: 1fr;
      }

      .info-card {
        @include clamp-property("padding", 0.5, 1);
        @include clamp-property("gap", 0.5, 1);

        display: flex;
        align-items: center;

        background-color: $neutral-white;

        .icon-wrapper {
          @include clamp-property("padding", 0.62, 0.75);
          display: flex;
          align-items: center;
          gap: 0.625rem;
          border-radius: 2.5rem;
          border: 1px solid $green-50;
          background: $green-80;

          img {
            @include clamp-property("width", 1.25, 1.5);
            @include clamp-property("height", 1.25, 1.5);
          }
        }

        .info-card-details {
          h3 {
            @include clamp-property("font-size", 1, 1);

            font-family: $font-manrope;
            color: $neutral-gray-800;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 1.1rem */
          }
          p {
            @include clamp-property("margin-top", 0.38, 0.5);
            @include clamp-property("font-size", 0.9375, 1.125);

            color: $green-900;
            font-family: $font-manrope;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 1.2375rem */
          }
        }
      }
    }
  }
}

// Tab transition styles
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.tab-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.tab-fade-enter-to,
.tab-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
