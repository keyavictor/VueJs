<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <div class="contact-container">
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required>
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" class="submit-button">Send Message</button>
      </form>
      
      <div class="contact-info">
        <h3>Get in Touch</h3>
        <p>123 Business Street</p>
        <p>City, State 12345</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@yourbusiness.com</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 2rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input, textarea {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>
