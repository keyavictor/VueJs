<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="business-app">


    <main class="content">
      <RouterView />
    </main>

    <footer class="business-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@yourbusiness.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Twitter</a>
            <a href="#" target="_blank">Facebook</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        © {{ new Date().getFullYear() }} Your Business Name. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style scoped>
.business-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.business-header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.company-name {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.business-nav {
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 1rem 0;
}

.business-nav a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.business-nav a:hover {
  background-color: #f5f5f5;
  color: #007bff;
}

.business-nav a.router-link-active {
  color: #007bff;
  background-color: #f8f9fa;
}

.content {
  margin-top: 120px;
  flex: 1;
  padding: 2rem;
}

.business-footer {
  background-color: #333;
  color: white;
  padding: 2rem;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  padding: 1rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  color: #fff;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: white;
  text-decoration: none;
}

.social-links a:hover {
  color: #007bff;
}

.copyright {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #555;
}

@media (max-width: 768px) {
  .business-header {
    padding: 1rem;
  }

  .business-nav {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
