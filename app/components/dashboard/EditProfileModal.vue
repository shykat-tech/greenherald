<template>
  <h3 class="form-title">Edit Profile</h3>


  <form @submit.prevent="handleEditSubmit" class="form">
    <div class="profile-detail-content-wrapper">
      <div class="tab-btn-container">
        <div class="tab-buttons-scrollable">
          <button v-for="tab in tabs" :key="tab.name" :class="{ active: activeTab === tab.name }"
            @click="handleTabClick(tab)" type="button">
            {{ tab.label }}
            <span class="tab-indicator"></span></button>.
        </div>
      </div>

      <div class="tab-content-panel">
        <!-- Success/Error Messages -->
        <div v-if="dashboardStore.submitSuccess" class="success-message">
          Profile updated successfully!
        </div>
        <div v-if="dashboardStore.submitError" class="error-message">
          {{ dashboardStore.submitError }}
        </div>

        <Transition name="tab-fade" mode="out-in">
          <div v-if="activeTab === 'personalDetail'" key="personalDetail" class="tab-comp-container">
            <!-- Personal Details Content -->

            <!-- Full Name Field -->
            <div class="form-group">
              <label>Full Name</label>
              <input v-model="fullName" type="text" class="input" :disabled="dashboardStore.isLoading" />
              <p v-if="errors.fullName" class="error-text">
                {{ errors.fullName }}
              </p>
            </div>

            <div class="edu-row-wrapper">
              <div class="row" v-for="(education, index) in educations" :key="index">
                <div class="form-group"
                  :style="{ 'grid-column': educations?.length === 1 && education.batch === '' ? 'span 5' : 'span 4' }">
                  <label>Education Level {{ index + 1 }}</label>
                  <select v-model="educations[index].level" class="input" :disabled="dashboardStore.isLoading">
                    <option value=""></option>
                    <option value="high-school">High School</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                  <p v-if="errors[`educations[${index}].level`]" class="error-text">
                    {{ errors[`educations[${index}].level`] }}
                  </p>
                </div>

                <div class="form-group"
                  :style="{ 'grid-column': educations?.length === 1 && education.batch === '' ? 'span 5' : 'span 4' }">
                  <label>Batch</label>
                  <select v-model="educations[index].batch" class="input" :disabled="dashboardStore.isLoading">
                    <option value=""></option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </select>

                  <p v-if="errors[`educations[${index}].batch`]" class="error-text">{{
                    errors[`educations[${index}].batch`] }}</p>
                </div>

                <div class="form-group" v-if="educations.length > 1">
                  <button type="button" @click="removeEducation(index)" class="remove-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="#dc3545" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="add-new-btn-wrapper">
                <button class="add-new-btn" role="button" @click="addNewEduRow" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19.002" stroke="#7E6B47" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M19.002 12.0039H5" stroke="#7E6B47" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>
                    Add new education
                  </span>
                </button>
              </div>
            </div>





            <!-- radio button to select gender -->
            <div class="form-group">
              <label>Gender</label>
              <div class="radio-group">
                <label>
                  <input v-model="gender" type="radio" value="male" :disabled="dashboardStore.isLoading" />
                  Male
                </label>
                <label>
                  <input v-model="gender" type="radio" value="female" :disabled="dashboardStore.isLoading" />
                  Female
                </label>
                <label>
                  <input v-model="gender" type="radio" value="other" :disabled="dashboardStore.isLoading" />
                  Other
                </label>
              </div>
              <p v-if="errors.gender" class="error-text">{{ errors.gender }}</p>
            </div>




            <!-- radio button for blood group -->
            <div class="form-group">
              <label>Blood Group</label>
              <div class="radio-group">
                <label>
                  <input v-model="bloodGroup" type="radio" value="A+" :disabled="dashboardStore.isLoading" />
                  A+
                </label>
                <label>
                  <input v-model="bloodGroup" type="radio" value="B+" :disabled="dashboardStore.isLoading" />
                  B+
                </label>
                <label>
                  <input v-model="bloodGroup" type="radio" value="O+" :disabled="dashboardStore.isLoading" />
                  O+
                </label>
                <label>
                  <input v-model="bloodGroup" type="radio" value="AB+" :disabled="dashboardStore.isLoading" />
                  AB+
                </label>
                <label>
                  <input v-model="bloodGroup" type="radio" value="A-" :disabled="dashboardStore.isLoading" />
                  A-
                </label>
                <label>
                  <input v-model="bloodGroup" type="radio" value="B-" :disabled="dashboardStore.isLoading" />
                  B-
                </label>
                <label>
                  <input v-model="bloodGroup" type="radio" value="O-" :disabled="dashboardStore.isLoading" />
                  O-
                </label>
                <label>
                  <input v-model="bloodGroup" type="radio" value="AB-" :disabled="dashboardStore.isLoading" />
                  AB-
                </label>
              </div>
              <p v-if="errors.bloodGroup" class="error-text">
                {{ errors.bloodGroup }}
              </p>
            </div>

            <!-- fathers name -->
            <div class="form-group">
              <label>Father's Name</label>
              <input v-model="fatherName" type="text" class="input"
                :disabled="dashboardStore.isLoading" />
              <p v-if="errors.fatherName" class="error-text">
                {{ errors.fatherName }}
              </p>
            </div>

            <!-- mothers name -->
            <div class="form-group">
              <label>Mother's Name</label>
              <input v-model="motherName" type="text" class="input" :disabled="dashboardStore.isLoading" />
              <p v-if="errors.motherName" class="error-text">
                {{ errors.motherName }}
              </p>
            </div>

            <!-- professional details -->


            <div class="form-group">
              <label>Profession</label>
              <select v-model="professionalDetails" class="input" :disabled="dashboardStore.isLoading">
                <option value="">Select your profession</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
                <option value="Engineer">Engineer</option>
                <option value="Other">Other</option>
              </select>
              <p v-if="errors.professionalDetails" class="error-text">
                {{ errors.professionalDetails }}
              </p>
            </div>

            <!-- Current company -->
            <div class="form-group">
              <label>Current Company</label>
              <input v-model="currentCompany" type="text" class="input" :disabled="dashboardStore.isLoading" />
              <p v-if="errors.currentCompany" class="error-text">
                {{ errors.currentCompany }}
              </p>
            </div>

            <div class="row">
              <!-- select button for marital status -->
              <div class="form-group" :style="{ 'grid-column': 'span 5' }">
                <label>Marital Status</label>
                <select v-model="maritalStatus" class="input" :disabled="dashboardStore.isLoading">
                  <option value="">Select your marital status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
                <p v-if="errors.maritalStatus" class="error-text">
                  {{ errors.maritalStatus }}
                </p>
              </div>

              <!-- spouse Name -->
              <div class="form-group" :style="{ 'grid-column': 'span 5' }">
                <label>Spouse Name</label>
                <input v-model="spouseName" type="text" class="input" :disabled="dashboardStore.isLoading" />
                <p v-if="errors.spouseName" class="error-text">
                  {{ errors.spouseName }}
                </p>
              </div>
            </div>

            <!-- a checkbox if have children   -->
            <div class="form-group">
              <label class="checkbox-label">
                <input v-model="hasChildren" type="checkbox" :disabled="dashboardStore.isLoading" />
                I have children
              </label>
            </div>

            <div v-if="hasChildren" class="children-wrapper">
              <div class="row" v-for="(child, index) in children" :key="index">
                <div class="form-group"
                  :style="{ 'grid-column': children?.length === 1 && child.age === '' ? 'span 5' : 'span 4' }">
                  <label>Child Name {{ index + 1 }} </label>
                  <input v-model="children[index].name" type="text" class="input"
                    :disabled="dashboardStore.isLoading" />
                  <p v-if="errors[`children[${index}].name`]" class="error-text">
                    {{ errors[`children[${index}].name`] }}
                  </p>
                </div>

                <div class="form-group"
                  :style="{ 'grid-column': children?.length === 1 && child.age === '' ? 'span 5' : 'span 4' }">
                  <label>Age</label>
                  <select v-model="children[index].age" class="input" :disabled="dashboardStore.isLoading">
                    <option value=""></option>
                    <option value="0-5">0-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-15">11-15</option>
                    <option value="16-18">16-18</option>
                    <option value="19+">19+</option>
                  </select>
                  <p v-if="errors[`children[${index}].age`]" class="error-text">{{ errors[`children[${index}].age`] }}
                  </p>
                </div>

                <div class="form-group" v-if="children.length > 1">
                  <button type="button" @click="removeChild(index)" class="remove-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="#dc3545" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="add-new-btn-wrapper">
                <button class="add-new-btn" role="button" @click="addNewChildRow" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19.002" stroke="#7E6B47" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M19.002 12.0039H5" stroke="#7E6B47" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>
                    Add Child
                  </span>
                </button>
              </div>
            </div>


            <div class="button-wrapper">
              <button @click="cancelEdit">Cancel</button>

              <button type="button" @click="directSubmit" :disabled="dashboardStore.isLoading" class="submit-btn">
                <span v-if="dashboardStore.isLoading">Updating...</span>
                <span v-else>Update Profile</span>
              </button>
            </div>
          </div>

          <div v-else-if="activeTab === 'contactInfo'" key="contactInfo" class="tab-comp-container">


            <!-- email -->
            <!-- Contact Info Content -->
            <div class="form-group">
              <label>Email</label>
              <input v-model="email" type="email" class="input" :disabled="dashboardStore.isLoading" />
              <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
            </div>

            <!-- Emergency Contact Phone -->


            <div class="form-group ">
              <label>Phone Number</label>


              <VueTelInput v-model="emergencyContactPhone" :inputOptions="{
                required: true,
                class: 'tel-input',
              }" mode="international" :preferred-countries="['bd', 'us', 'gb', 'ca']" :auto-format="true" />
              <p v-if="errors.emergencyContactPhone" class="error-text">
                {{ errors.emergencyContactPhone }}
              </p>
            </div>

            <div class="row">

              <div class="form-group " :style="{ 'grid-column': 'span 5' }">
                <label>Emergency Contact</label>

                <VueTelInput v-model="emergencyContactPhone" :inputOptions="{
                  required: true,
                  class: 'tel-input',
                }" mode="international" :preferred-countries="['bd', 'us', 'gb', 'ca']"
                  :auto-format="true" />
                <p v-if="errors.emergencyContactPhone" class="error-text">
                  {{ errors.emergencyContactPhone }}
                </p>
              </div>

              <!-- Emergency Contact Relation -->
              <div class="form-group" :style="{ 'grid-column': 'span 5' }">
                <label>Relation</label>
                <select v-model="emergencyContactRelation" class="input" :disabled="dashboardStore.isLoading">
                  <option value=""></option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Sibling</option>
                  <option value="spouse">Spouse</option>
                  <option value="friend">Friend</option>
                  <option value="other">Other</option>
                </select>
                <p v-if="errors.emergencyContactRelation" class="error-text">
                  {{ errors.emergencyContactRelation }}
                </p>
              </div>

            </div>


            <!-- checkbox for add social media account  -->
            <div class="form-group">
              <label class="checkbox-label">
                <input v-model="addSocialMedia" type="checkbox" :disabled="dashboardStore.isLoading" />
                Add Social Media Account
              </label>

            </div>

            <!-- select to plartform -->

            <div class="row" v-for="(account, index) in socialMediaAccounts" :key="index">
              <div v-if="addSocialMedia" class="form-group"
                :style="{ 'grid-column': socialMediaAccounts?.length === 1 && account.platform === '' ? 'span 5' : 'span 4' }">
                <label>Preferred Platform</label>
                <select v-model="preferredPlatform" class="input" :disabled="dashboardStore.isLoading">
                  <option value=""></option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                  <option value="instagram">Instagram</option>
                  <option value="linkedin">LinkedIn</option>
                </select>
              </div>

              <!-- link -->
              <div v-if="addSocialMedia" class="form-group"
                :style="{ 'grid-column': socialMediaAccounts?.length === 1 && account.platform === '' ? 'span 5' : 'span 4' }">
                <label>Profile Link</label>
                <input v-model="socialMediaLink" type="url" class="input"
                  :disabled="dashboardStore.isLoading" />
                <p v-if="errors.socialMediaLink" class="error-text">
                  {{ errors.socialMediaLink }}
                </p>
              </div>

              <div class="form-group" v-if="socialMediaAccounts.length > 1">
                <button type="button" @click="removeSocialMediaAccount(index)" class="remove-btn" v-if="addSocialMedia">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="#dc3545" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>

            </div>

            <div class="add-new-btn-wrapper" v-if="addSocialMedia">
              <button class="add-new-btn" role="button" @click="addNewSocialMediaAccount" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19.002" stroke="#7E6B47" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M19.002 12.0039H5" stroke="#7E6B47" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <span>
                  Add new account
                </span>
              </button>
            </div>


            <div class="button-wrapper">
              <button @click="cancelEdit">Cancel</button>


              <button type="button" @click="directSubmit" :disabled="dashboardStore.isLoading" class="submit-btn">
                <span v-if="dashboardStore.isLoading">Updating...</span>
                <span v-else>Update Contact Info</span>
              </button>
            </div>
          </div>

          <div v-else-if="activeTab === 'documents'" key="documents" class="tab-comp-container">
            <!-- Documents Content -->
            <!-- an text input field for nid number -->
            <div class="form-group">
              <label>NID Number</label>
              <input v-model="nidNumber" type="text" class="input"
                :disabled="dashboardStore.isLoading" />
              <p v-if="errors.nidNumber" class="error-text">{{ errors.nidNumber }}</p>
            </div>


            <div class="file-input-wrapper">
              <input @change="handleNidCopyChange" type="file" accept=".pdf, image/*"
                :disabled="dashboardStore.isLoading" id="nid-copy" class="file-input-hidden" />

              <label for="nid-copy" class="file-input-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_951_32967)">
                    <path d="M12 13.5V3" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M20.25 13.5V19.5H3.75V13.5" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M8.25 6.75L12 3L15.75 6.75" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_951_32967">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span class="file-name">
                  {{ nidCopy?.name || 'Upload NID Copy' }}
                </span>
              </label>


            </div>

                        <div class="form-group">
              <label class="checkbox-label">
                <input v-model="hasAlevelCertificate" type="checkbox" :disabled="dashboardStore.isLoading" />
                I have an O-Level Certificate
              </label>
            </div>

            <div class="file-input-wrapper">
              <input @change="handleNidCopyChange" type="file" accept=".pdf, image/*"
                :disabled="dashboardStore.isLoading" id="nid-copy" class="file-input-hidden" />

              <label for="nid-copy" class="file-input-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_951_32967)">
                    <path d="M12 13.5V3" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M20.25 13.5V19.5H3.75V13.5" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M8.25 6.75L12 3L15.75 6.75" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_951_32967">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span class="file-name">
                  {{ nidCopy?.name || 'Upload Certificate' }}
                </span>
              </label>


            </div>





            <!-- pdf file upload field for o-level certificate  upload -->
<!-- 
            <div class="form-group">
              <label for="olevel-certificate">O-Level Certificate</label>

              <input @change="handleOlevelCertificateChange" type="file" accept=".pdf, image/*" class="input"
                :disabled="dashboardStore.isLoading" id="olevel-certificate" />
              <p v-if="errors.olevelCertificate" class="error-text">
                {{ errors.olevelCertificate }}
              </p>
            </div> -->

            <!-- checkbox if A-level certificate is available -->
            <div class="form-group">
              <label class="checkbox-label">
                <input v-model="hasAlevelCertificate" type="checkbox" :disabled="dashboardStore.isLoading" />
                I have an A-Level Certificate
              </label>
            </div>

            <!-- A-level certificate upload -->
            <div class="file-input-wrapper" v-if="hasAlevelCertificate">
              <input @change="handleNidCopyChange" type="file" accept=".pdf, image/*"
                :disabled="dashboardStore.isLoading" id="nid-copy" class="file-input-hidden" />

              <label for="nid-copy" class="file-input-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_951_32967)">
                    <path d="M12 13.5V3" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M20.25 13.5V19.5H3.75V13.5" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M8.25 6.75L12 3L15.75 6.75" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_951_32967">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span class="file-name">
                  {{ nidCopy?.name || 'Upload O-Level Certificate Copy' }}
                </span>
              </label>


            </div>

            <div class="button-wrapper">
              <button @click="cancelEdit">Cancel</button>


              <button type="button" @click="directSubmit" :disabled="dashboardStore.isLoading" class="submit-btn">
                <span v-if="dashboardStore.isLoading">Updating...</span>
                <span v-else>Update Documents</span>
              </button>
            </div>
          </div>

          <div v-else-if="activeTab === 'likesContributions'" key="likesContributions" class="tab-comp-container">
            <!-- Likes & Contributions Content -->

            <!-- Favourite Movie -->
            <div class="form-group">
              <label>Favorite Movie</label>
              <input v-model="favoriteMovie"  class="input"
                :disabled="dashboardStore.isLoading"></input>
              <p v-if="errors.favoriteMovie" class="error-text">
                {{ errors.favoriteMovie }}
              </p>
            </div>

            <div class="form-group">
              <label>Favorite Music</label>
              <input v-model="favoriteMusic"  class="input"
                :disabled="dashboardStore.isLoading"></input>
              <p v-if="errors.favoriteMusic" class="error-text">
                {{ errors.favoriteMusic }}
              </p>
            </div>

            <!-- radio buttons for food preferences -->

            <div class="form-group">
              <label>Food Preferences</label>
              <div class="radio-group">
                <label>
                  <input v-model="foodPreferences" type="radio" value="vegetarian"
                    :disabled="dashboardStore.isLoading" />
                  Vegetarian
                </label>
                <label>
                  <input v-model="foodPreferences" type="radio" value="vegan" :disabled="dashboardStore.isLoading" />
                  Vegan
                </label>
                <label>
                  <input v-model="foodPreferences" type="radio" value="non-vegetarian"
                    :disabled="dashboardStore.isLoading" />
                  Non-Vegetarian
                </label>
              </div>
              <p v-if="errors.foodPreferences" class="error-text">
                {{ errors.foodPreferences }}
              </p>
            </div>

            <!-- radio button for t shirt -->

            <div class="form-group">
              <label>T-Shirt Size</label>
              <div class="radio-group">
                <label>
                  <input v-model="tshirtSize" type="radio" value="S" :disabled="dashboardStore.isLoading" />
                  Small
                </label>
                <label>
                  <input v-model="tshirtSize" type="radio" value="M" :disabled="dashboardStore.isLoading" />
                  Medium
                </label>
                <label>
                  <input v-model="tshirtSize" type="radio" value="L" :disabled="dashboardStore.isLoading" />
                  Large
                </label>
                <label>
                  <input v-model="tshirtSize" type="radio" value="XL" :disabled="dashboardStore.isLoading" />
                  Extra Large
                </label>
              </div>
              <p v-if="errors.tshirtSize" class="error-text">
                {{ errors.tshirtSize }}
              </p>
            </div>

            <!-- a text field for favorite quote -->

            <div class="form-group">
              <label>Favorite Quote</label>
              <input v-model="favoriteQuote" type="text" class="input"
                :disabled="dashboardStore.isLoading" />
              <p v-if="errors.favoriteQuote" class="error-text">
                {{ errors.favoriteQuote }}
              </p>
            </div>

            <!-- Contributions -->
            <div class="form-group">
              <label>How would you like to contribute?</label>
              <textarea v-model="contributions"  class="input"
                :disabled="dashboardStore.isLoading" rows="4"></textarea>
              <p v-if="errors.contributions" class="error-text">
                {{ errors.contributions }}
              </p>
            </div>


            <div class="button-wrapper">
              <button @click="cancelEdit">Cancel</button>

              <button type="button" @click="directSubmit" :disabled="dashboardStore.isLoading" class="submit-btn">
                <span v-if="dashboardStore.isLoading">Updating...</span>
                <span v-else>Update Contributions</span>
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { VueTelInput } from "vue-tel-input";


const globalStore = useGlobalStore();
const dashboardStore = useDashboardStore();
const authStore = useAuthStore();

// Handle tabs
const activeTab = ref("personalDetail");

const tabs = [
  { name: "personalDetail", label: "Personal Details" },
  { name: "contactInfo", label: "Contact Info" },
  { name: "documents", label: "Documents" },
  { name: "likesContributions", label: "Likes & Contributions" },
];

const handleTabClick = (tab) => {
  activeTab.value = tab.name;
};


// Arrays for dynamic form data
const educations = ref([{ level: '', batch: '' }]);
const children = ref([{ name: '', age: '' }]);
const socialMediaAccounts = ref([{ platform: '', link: '' }]);

const addNewEduRow = () => {
  educations.value.push({ level: '', batch: '' });
};

const addNewChildRow = () => {
  children.value.push({ name: '', age: '' });
};

const addNewSocialMediaAccount = () => {
  socialMediaAccounts.value.push({ platform: '', link: '' });
};

const removeEducation = (index) => {
  if (educations.value.length > 1) {
    educations.value.splice(index, 1);
  }
};

const removeChild = (index) => {
  if (children.value.length > 1) {
    children.value.splice(index, 1);
  }
};

const removeSocialMediaAccount = (index) => {
  if (socialMediaAccounts.value.length > 1) {
    socialMediaAccounts.value.splice(index, 1);
  }
};

// Comprehensive validation schema
const validationSchema = yup.object({
  // Personal Details - Made optional for testing
  fullName: yup.string(),
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email("Invalid email"),
  phone: yup.string(),
  dateOfBirth: yup.date().nullable(),
  address: yup.string(),
  city: yup.string(),
  country: yup.string(),
  zipCode: yup.string(),
  educations: yup.array().of(
    yup.object({
      level: yup.string(),
      batch: yup.string(),
    })
  ),
  children: yup.array().of(
    yup.object({
      name: yup.string(),
      age: yup.string(),
    })
  ),

  gender: yup.string(),
  bloodGroup: yup.string(),
  fatherName: yup.string(),
  motherName: yup.string(),
  professionalDetails: yup.string(),
  currentCompany: yup.string(),
  maritalStatus: yup.string(),
  spouseName: yup.string().when("maritalStatus", {
    is: "married",
    then: (schema) =>
      schema.required("Spouse name is required for married status"),
    otherwise: (schema) => schema.notRequired(),
  }),
  hasChildren: yup.boolean(),

  // Contact Info
  emergencyContactName: yup.string(),
  emergencyContactPhone: yup.string(),
  emergencyContactRelation: yup.string(),
  addSocialMedia: yup.boolean(),
  preferredPlatform: yup.string(),
  socialMediaLink: yup.string().url("Invalid URL").when("addSocialMedia", {
    is: true,
    then: (schema) => schema.required("Social media link is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  // Documents
  nidNumber: yup.string(),

  // Likes & Contributions
  favoriteMovie: yup.string(),
  favoriteMusic: yup.string(),
  foodPreferences: yup.string(),
  tshirtSize: yup.string(),
  favoriteQuote: yup.string(),
  contributions: yup.string(),
  linkedinUrl: yup.string().url("Invalid URL"),
  facebookUrl: yup.string().url("Invalid URL"),
  twitterUrl: yup.string().url("Invalid URL"),
  githubUrl: yup.string().url("Invalid URL"),
});

// Form setup
const { handleSubmit, errors, setFieldValue } = useForm({
  validationSchema,
});

// Form fields - Personal Details
const { value: fullName } = useField("fullName");
const { value: firstName } = useField("firstName");
const { value: lastName } = useField("lastName");
const { value: email } = useField("email");
const { value: phone } = useField("phone");
const { value: dateOfBirth } = useField("dateOfBirth");
const { value: address } = useField("address");
const { value: city } = useField("city");
const { value: country } = useField("country");
const { value: zipCode } = useField("zipCode");

// Contact Info fields
const { value: emergencyContactName } = useField("emergencyContactName");
const { value: emergencyContactPhone } = useField("emergencyContactPhone");
const { value: emergencyContactRelation } = useField(
  "emergencyContactRelation"
);

// Education and Children fields - now handled as arrays
const { value: gender } = useField("gender");
const { value: bloodGroup } = useField("bloodGroup");
const { value: fatherName } = useField("fatherName");
const { value: motherName } = useField("motherName");
const { value: professionalDetails } = useField("professionalDetails");
const { value: currentCompany } = useField("currentCompany");
const { value: maritalStatus } = useField("maritalStatus");
const { value: spouseName } = useField("spouseName");
const { value: hasChildren } = useField("hasChildren");

// Likes & Contributions fields
const { value: contributions } = useField("contributions");
const { value: linkedinUrl } = useField("linkedinUrl");
const { value: facebookUrl } = useField("facebookUrl");
const { value: twitterUrl } = useField("twitterUrl");
const { value: githubUrl } = useField("githubUrl");
const { value: favoriteMovie } = useField("favoriteMovie");
const { value: favoriteMusic } = useField("favoriteMusic");
const { value: foodPreferences } = useField("foodPreferences");
const { value: tshirtSize } = useField("tshirtSize");
const { value: favoriteQuote } = useField("favoriteQuote");

// Contact Info additional fields
const { value: addSocialMedia } = useField("addSocialMedia");
const { value: preferredPlatform } = useField("preferredPlatform");
const { value: socialMediaLink } = useField("socialMediaLink");

// Document fields
const { value: nidNumber } = useField("nidNumber");

// Watch for hasChildren change to reset children array
watch(hasChildren, (newValue) => {
  if (!newValue) {
    children.value = [{ name: '', age: '' }];
  }
});

const nidCopy = ref(null);
const olevelCertificate = ref(null);
const hasAlevelCertificate = ref(false);
const alevelCertificate = ref(null);

// File upload handlers
const handleNidCopyChange = (event) => {
  nidCopy.value = event.target.files[0];
};

const handleOlevelCertificateChange = (event) => {
  olevelCertificate.value = event.target.files[0];
};

const handleAlevelCertificateChange = (event) => {
  alevelCertificate.value = event.target.files[0];
};

// Form submission handler
const handleEditSubmit = handleSubmit(async (values) => {
  try {
    // Clear any previous success/error states
    dashboardStore.setSubmitSuccess(false);
    dashboardStore.setSubmitError(null);

    // Update store with form values
    Object.keys(values).forEach((key) => {
      dashboardStore.updateProfileField(key, values[key]);
    });

    // Handle social links specifically
    dashboardStore.updateProfileField(
      "socialLinks.linkedin",
      linkedinUrl.value || ""
    );
    dashboardStore.updateProfileField(
      "socialLinks.facebook",
      facebookUrl.value || ""
    );
    dashboardStore.updateProfileField(
      "socialLinks.twitter",
      twitterUrl.value || ""
    );
    dashboardStore.updateProfileField(
      "socialLinks.github",
      githubUrl.value || ""
    );

    // Handle file uploads
    if (nidCopy.value) {
      dashboardStore.updateProfileField("nidCopy", nidCopy.value);
    }
    if (olevelCertificate.value) {
      dashboardStore.updateProfileField("olevelCertificate", olevelCertificate.value);
    }
    if (hasAlevelCertificate.value && alevelCertificate.value) {
      dashboardStore.updateProfileField("alevelCertificate", alevelCertificate.value);
    }

    // Submit form through dashboard store
    const result = await dashboardStore.submitProfileUpdate();

    if (result.success) {
      // Close the modal after successful submission
      setTimeout(() => {
        globalStore.closeModal();
        dashboardStore.setSubmitSuccess(false);
      }, 2000);
    }
  } catch (error) {
    dashboardStore.setSubmitError(
      "An unexpected error occurred. Please try again."
    );
  }
});

// Initialize form with existing user data
const initializeForm = () => {
  if (authStore.user) {
    // Initialize dashboard store with user data
    dashboardStore.initializeProfileForm(authStore.user);

    // Set form field values
    const userData = dashboardStore.profileForm;

    // Initialize arrays with existing data or default values
    if (userData.educations && userData.educations.length > 0) {
      educations.value = userData.educations;
    }

    if (userData.children && userData.children.length > 0) {
      children.value = userData.children;
    }

    Object.keys(userData).forEach((key) => {
      if (key === "socialLinks") {
        setFieldValue("linkedinUrl", userData[key].linkedin || "");
        setFieldValue("facebookUrl", userData[key].facebook || "");
        setFieldValue("twitterUrl", userData[key].twitter || "");
        setFieldValue("githubUrl", userData[key].github || "");
      } else if (key !== "favoriteMovie" && key !== "favoriteMusic") {
        setFieldValue(key, userData[key] || "");
      }
    });

    // Set specific field values that might be nested or need special handling
    setFieldValue("fullName", userData.fullName || "");
    setFieldValue("favoriteMovie", userData.favoriteMovie || "");
    setFieldValue("favoriteMusic", userData.favoriteMusic || "");
    setFieldValue("foodPreferences", userData.foodPreferences || "");
    setFieldValue("tshirtSize", userData.tshirtSize || "");
    setFieldValue("favoriteQuote", userData.favoriteQuote || "");
    setFieldValue("addSocialMedia", userData.addSocialMedia || false);
    setFieldValue("preferredPlatform", userData.preferredPlatform || "");
    setFieldValue("socialMediaLink", userData.socialMediaLink || "");
    setFieldValue("nidNumber", userData.nidNumber || "");

    // Set file upload states
    hasAlevelCertificate.value = userData.hasAlevelCertificate || false;
  }
};


const cancelEdit = () => {
  globalStore.closeModal();
};

// Direct submit function
const directSubmit = async () => {
  try {
    // Clear any previous success/error states
    dashboardStore.setSubmitSuccess(false);
    dashboardStore.setSubmitError(null);

    // Collect form data directly from reactive variables
    const formData = {
      // Personal Details
      fullName: fullName.value || "",
      firstName: firstName.value || "",
      lastName: lastName.value || "",
      email: email.value || "",
      phone: phone.value || "",
      dateOfBirth: dateOfBirth.value || "",
      address: address.value || "",
      city: city.value || "",
      country: country.value || "",
      zipCode: zipCode.value || "",
      educations: educations.value.filter(edu => edu.level || edu.batch),
      children: hasChildren.value ? children.value.filter(child => child.name || child.age) : [],
      gender: gender.value || "",
      bloodGroup: bloodGroup.value || "",
      fatherName: fatherName.value || "",
      motherName: motherName.value || "",
      professionalDetails: professionalDetails.value || "",
      currentCompany: currentCompany.value || "",
      maritalStatus: maritalStatus.value || "",
      spouseName: spouseName.value || "",
      hasChildren: hasChildren.value || false,

      // Contact Info
      emergencyContactName: emergencyContactName.value || "",
      emergencyContactPhone: emergencyContactPhone.value || "",
      emergencyContactRelation: emergencyContactRelation.value || "",
      addSocialMedia: addSocialMedia.value || false,
      preferredPlatform: preferredPlatform.value || "",
      socialMediaLink: socialMediaLink.value || "",

      // Documents
      nidNumber: nidNumber.value || "",

      // Likes & Contributions
      favoriteMovie: favoriteMovie.value || "",
      favoriteMusic: favoriteMusic.value || "",
      foodPreferences: foodPreferences.value || "",
      tshirtSize: tshirtSize.value || "",
      favoriteQuote: favoriteQuote.value || "",
      contributions: contributions.value || "",
    };

    // Update store with form values
    Object.keys(formData).forEach((key) => {
      dashboardStore.updateProfileField(key, formData[key]);
    });

    // Handle social links specifically
    dashboardStore.updateProfileField(
      "socialLinks.linkedin",
      linkedinUrl.value || ""
    );
    dashboardStore.updateProfileField(
      "socialLinks.facebook",
      facebookUrl.value || ""
    );
    dashboardStore.updateProfileField(
      "socialLinks.twitter",
      twitterUrl.value || ""
    );
    dashboardStore.updateProfileField(
      "socialLinks.github",
      githubUrl.value || ""
    );

    // Handle file uploads
    if (nidCopy.value) {
      dashboardStore.updateProfileField("nidCopy", nidCopy.value);
    }
    if (olevelCertificate.value) {
      dashboardStore.updateProfileField("olevelCertificate", olevelCertificate.value);
    }
    if (hasAlevelCertificate.value && alevelCertificate.value) {
      dashboardStore.updateProfileField("alevelCertificate", alevelCertificate.value);
    }

    // Submit form through dashboard store
    const result = await dashboardStore.submitProfileUpdate();

    if (result.success) {
      // Close the modal after successful submission
      setTimeout(() => {
        globalStore.closeModal();
        dashboardStore.setSubmitSuccess(false);
      }, 2000);
    }
  } catch (error) {
    dashboardStore.setSubmitError(
      "An unexpected error occurred. Please try again."
    );
  }
};

// Watch for store form changes and sync to form fields
watch(
  () => dashboardStore.profileForm,
  (newForm) => {
    Object.keys(newForm).forEach((key) => {
      if (key === "socialLinks") {
        setFieldValue("linkedinUrl", newForm[key].linkedin || "");
        setFieldValue("facebookUrl", newForm[key].facebook || "");
        setFieldValue("twitterUrl", newForm[key].twitter || "");
        setFieldValue("githubUrl", newForm[key].github || "");
      } else {
        setFieldValue(key, newForm[key] || "");
      }
    });

    // Handle special fields
    hasAlevelCertificate.value = newForm.hasAlevelCertificate || false;
  },
  { deep: true }
);

onMounted(() => {
  activeTab.value = globalStore.openModalType !== 'edit' ? globalStore.openModalType : "personalDetail";

  // Initialize form
  initializeForm();
});

// Clean up on unmount
onUnmounted(() => {
  dashboardStore.setSubmitSuccess(false);
  dashboardStore.setSubmitError(null);
});
</script>

<style lang="scss" scoped>
.form-title {
  @include clamp-property("margin-bottom", 1.5, 2.5);
  @include clamp-property("font-size", 2, 2.5);

  color: $green-900;
  font-family: $font-manrope;

  font-style: normal;
  font-weight: 600;
  line-height: 110%;
}

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
        line-height: 110%;
        /* 1.2375rem */

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
  }
}

.success-message {
  padding: 12px 16px;
  margin-bottom: 20px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 6px;
  font-weight: 500;
}

.error-message {
  padding: 12px 16px;
  margin-bottom: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
  font-weight: 500;
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


.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    @include clamp-property("font-size", 1, 1.125);
    @include clamp-property("margin-bottom", 0.5, 0.75);

    color: $green-900;
    font-family: $font-manrope;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .input {
    @include clamp-property("padding", 0.875, 1.25);
    @include clamp-property("font-size", 0.875, 1);
    @include clamp-property("border-radius", 0.625, 0.75);

    display: flex;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;
    transition: all 0.2s ease-in-out;
    border-radius: 0.75rem;
    border: 1px solid $neutral-gray-600;
    color: $green-100;


    /* Body */
    font-family: $font-manrope;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    opacity: 0.9;
    /* 1.5rem */


    &:focus {
      opacity: 1;
      outline: none;
      border-color: $golden-700;
    }

    &:disabled {
      background-color: $green-50;
      cursor: not-allowed;
      opacity: 0.7;
    }

    &::placeholder {
      color: #999;
    }
  }

  select.input {
    padding-top: clamp(0.875rem, -0.378rem + 3.256vw, 1.25rem) !important;
    padding-bottom: clamp(0.875rem, -0.378rem + 3.256vw, 1.25rem) !important;
    padding-left: clamp(0.875rem, -0.378rem + 3.256vw, 1.25rem) !important;
    padding-right: 2.5rem !important;
    background-position: right 0.5rem center !important;
    background-repeat: no-repeat !important;
    background-size: 1.5rem !important;
    appearance: none !important;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e") !important;
  }

  textarea.input {
    resize: vertical;
    min-height: 80px;
  }

  .error-text {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    font-weight: 500;
  }
}

// Radio group styles
.radio-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;

  label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;

    display: flex;
    padding: 1rem 1.5rem 1rem 0.75rem;
    align-items: center;
    gap: 0.5rem;
    flex: 1 0 0;

    border-radius: 0.75rem;
    border: 1px solid $green-50;

    input[type="radio"] {
      margin: 0;
      width: 16px;
      height: 16px;
      accent-color: $golden-700;
    }


    input[type="radio"]:checked+& {
      background-color: $green-800;
      border-color: $golden-700;
    }
  }
}

.radio-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;

  label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;

    display: flex;
    padding: 1rem 1.5rem 1rem 0.75rem;
    align-items: center;
    gap: 0.5rem;
    flex: 1 0 0;

    border-radius: 0.75rem;
    border: 1px solid $green-50;

    @include clamp-property("font-size", 0.875, 1);

    color: $green-900;
    font-family: $font-manrope;

    text-align: center;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* 1.5rem */

    transition: all 0.2s ease-in-out;

    input[type="radio"] {
      outline: none;
      margin: 0;
      width: 16px;
      height: 16px;
      accent-color: $golden-700;
      margin-top: 0.25rem;
    }

    &:has(input[type="radio"]:checked) {
      border-color: $golden-700;
      background-color: $golden-50;
    }
  }


}


.checkbox-label {
  display: flex !important;
  align-items: center;
  gap: 0.75rem;
  font-weight: normal !important;
  cursor: pointer;

  input[type="checkbox"] {
    margin: 0;
    width: 18px;
    height: 18px;
    accent-color: $golden-700;
  }
}


// Vue Tel Input specific styling
:deep(.vue-tel-input) {
  outline: none;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    border-color: $yellow-600;
  }

  .vti__dropdown {
    background: rgba(255, 255, 255, 0.06);
    border: none;
    border-radius: 0.75rem;


    border: 1px solid $gray-600;

    margin-right: 1rem;



    .vti__selection {
      @include clamp-property("font-size", 0.935, 1);
      color: #fff;
      padding: 0 0.5rem;


    }

    .vti__dropdown-arrow {
      color: #fff;
    }
  }

  .vti__input {
    @include clamp-property("font-size", 0.935, 1);
    @include clamp-property("padding", 1, 1.25);
    @include clamp-property("height", 3.5, 4);
    @include clamp-property("border-radius", 0.6, 0.75);


    background: transparent;
    border: none;
    color: #fff;
    border: 1px solid $gray-600;

    outline: none;

    &::placeholder {
      @include clamp-property("font-size", 0.935, 1);
      color: rgba(255, 255, 255, 0.6);
      font-family: $font-manrope;
      font-weight: 400;
      font-style: normal;
      line-height: normal;
      opacity: 0;
    }
  }
}

// Vue Tel Input dropdown styling
:deep(.vti__dropdown-list) {
  @include clamp-property("border-radius", 0.6, 0.75);

  background: #2a2a2a;
  border: 1px solid rgba(255, 255, 255, 0.1);

  max-height: 200px;
  overflow-y: auto;

  .vti__dropdown-item {
    color: #fff;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &:hover,
    &.highlighted {
      background: rgba(255, 255, 255, 0.1);
    }

    .vti__flag {
      margin-right: 0.5rem;
    }
  }
}





.row {
  @include clamp-property("gap", 0.75, 1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  grid-template-columns: repeat(10, 1fr);
  align-items: end;
  justify-content: center;




  .form-group:nth-child(1) {
    // grid-column: span 4; // Education level
  }

  .form-group:nth-child(2) {
    // grid-column: span 4; // Batch
  }

  .form-group:nth-child(3) {
    // grid-column: span 2; // Remove button
    padding-block: 1em;
  }

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
        line-height: 110%;
        /* 1.1rem */
      }

      p {
        @include clamp-property("margin-top", 0.38, 0.5);
        @include clamp-property("font-size", 0.9375, 1.125);

        color: $green-900;
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        /* 1.2375rem */
      }
    }
  }
}

.add-new-btn-wrapper {
  margin-bottom: 1rem;

  .add-new-btn {
    border: none;
    background: transparent;
    color: $golden-700;
    cursor: pointer;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;


    svg {
      width: 1.5rem;
      height: 1.5rem;
      aspect-ratio: 1/1;
    }

    span {
      @include clamp-property("font-size", 1, 1.125);

      color: #7E6B47;
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 550;
      line-height: 110%;
    }
  }
}

.remove-btn {
  @include clamp-property("font-size", 1, 1.125);

  border: none;
  background: transparent;
  color: #dc3545;
  cursor: pointer;
  border: 1px solid #dc3545;
  border-radius: 50%;
  width: 2.5em;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke: #dc3545;
  }


  &:hover {
    background-color: #dfa1a7;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
}

@include mediaSm {
  .profile-detail-content-wrapper {
    .tab-content-panel {
      padding: 15px;
    }
  }

  .radio-group {
    flex-direction: column;
    gap: 0.5rem;
  }

  .submit-btn {
    width: 100%;
  }

}

.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    @include clamp-property("padding-inline", 1.375, 1.5);
    @include clamp-property("padding-block", 1, 1.375);
    @include clamp-property("font-size", 1, 1.125);

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    border: none;

    border-radius: 5rem;
    background: transparent;
    color: $neutral-white;

    /* Btn 18 */
    font-family: $font-manrope;

    font-style: normal;
    font-weight: 550;
    line-height: 110%;
    /* 1.2375rem */


    cursor: pointer;
    transition: all 0.3s ease-in-out;

    border: 1px solid transparent;





    &:first-child {
      background: transparent;
      border-radius: 5rem;
      border: 1px solid $neutral-gray-800;
      color: $neutral-gray-800;
      /* Btn 18 */
      font-family: $font-manrope;

      font-style: normal;
      font-weight: 550;
      line-height: 110%;
      /* 1.2375rem */

      &:hover {}
    }

    &:last-child {
      background: $golden-700;
      color: $neutral-white;

      &:hover {}
    }
  }


  @include mediaSm {
    flex-direction: column;
  }
}


.file-input-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

}

.file-input-hidden {
  display: none;
}

.file-input-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid $neutral-gray-600;
  background-color: $neutral-white;

  color: $green-900;
  font-family: $font-manrope;
  font-weight: 500;
  font-size: 0.95rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: $golden-700;
    background-color: $golden-50;
    color: $golden-700;
  }

  &:focus-visible {
    outline: none;
    border-color: $golden-700;
  }
}

.file-name {
  font-size: 0.875rem;
  color: $neutral-gray-800;
  font-family: $font-manrope;
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Disabled state */
.file-input-hidden:disabled+.file-input-label {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Mobile */
@include mediaSm {
  .file-input-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .file-name {
    max-width: 100%;
  }
}
</style>
