<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>
<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to Your Business</h1>
      <p>Delivering Excellence in Business Solutions</p>
      <button class="cta-button">Get Started</button>
    </section>
    
    <section class="features">
      <div class="feature-card">
        <h3>Innovation</h3>
        <p>Cutting-edge solutions for modern businesses</p>
      </div>
      <div class="feature-card">
        <h3>Quality</h3>
        <p>Exceptional service delivery standards</p>
      </div>
      <div class="feature-card">
        <h3>Results</h3>
        <p>Proven track record of success</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
}

.cta-button {
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
}

.feature-card {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
