<template>
  <div class="services">
    <h2>Our Services</h2>
    <div class="services-grid">
      <div class="service-card">
        <h3>Service 1</h3>
        <p>Comprehensive business consulting solutions</p>
        <button class="learn-more">Learn More</button>
      </div>
      <div class="service-card">
        <h3>Service 2</h3>
        <p>Strategic planning and implementation</p>
        <button class="learn-more">Learn More</button>
      </div>
      <div class="service-card">
        <h3>Service 3</h3>
        <p>Digital transformation services</p>
        <button class="learn-more">Learn More</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services {
  padding: 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.learn-more {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>
