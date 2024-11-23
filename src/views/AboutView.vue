<template>
  <div class="about">
    <h2>About Us</h2>
    <div class="about-content">
      <div class="about-text">
        <h3>Our Story</h3>
        <p>Your company history and mission statement goes here.</p>
        
        <h3>Our Vision</h3>
        <p>Your company vision and values go here.</p>
      </div>
      
      <div class="team-section">
        <h3>Our Team</h3>
        <div class="team-grid">
          <div class="team-member" v-for="i in 4" :key="i">
            <img src="@/assets/logo.svg" alt="Team member">
            <h4>Team Member {{ i }}</h4>
            <p>Position</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  text-align: center;
}

.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
