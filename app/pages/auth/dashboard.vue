<template>
  <div class="dashboard">
    <h1>Welcome, {{ user?.name || user?.email }}!</h1>
    
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Projects</h3>
        <p class="stat-value">{{ stats.projects }}</p>
      </div>
      <div class="stat-card">
        <h3>Active Tasks</h3>
        <p class="stat-value">{{ stats.tasks }}</p>
      </div>
      <div class="stat-card">
        <h3>Team Members</h3>
        <p class="stat-value">{{ stats.members }}</p>
      </div>
    </div>
    
    <button @click="refreshData" class="btn-refresh">
      Refresh Data
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

const { user } = useAuth()
const api = useApi()

const stats = ref({
  projects: 0,
  tasks: 0,
  members: 0
})

// Fetch dashboard data
const fetchDashboardData = async () => {
  const { data, error } = await api.get('/dashboard/stats')
  
  if (data) {
    stats.value = data
  }
}

// Refresh data
const refreshData = async () => {
  await fetchDashboardData()
}

// Fetch on mount
onMounted(() => {
  fetchDashboardData()
})
</script>

<style scoped>
.dashboard {
  padding: 2rem 0;
}

h1 {
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}

.btn-refresh {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-refresh:hover {
  background: #059669;
}
</style>