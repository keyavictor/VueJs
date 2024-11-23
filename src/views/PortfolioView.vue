<template>
  <div class="portfolio">
    <h2>Our Portfolio</h2>
    <div class="portfolio-grid">
      <div class="portfolio-item" v-for="i in 6" :key="i">
        <img src="@/assets/placeholder.jpg" alt="Project">
        <div class="portfolio-info">
          <h3>Project {{ i }}</h3>
          <p>Description of project {{ i }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio {
  padding: 2rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.portfolio-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.portfolio-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.portfolio-info {
  padding: 1rem;
  background: white;
}
</style>
