import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormStatus({
      submitted: false,
      success: false,
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1><i className="fas fa-envelope"></i> Contact Me</h1>
        <p>Let's get in touch! Feel free to reach out with any questions or opportunities.</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-card-content">
              <h3>Location</h3>
              <p>Zamboanga City, Philippines</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-card-content">
              <h3>Email</h3>
              <p>hassandaud470@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-card-content">
              <h3>Phone</h3>
              <p>0992-573-5012</p>
            </div>
          </div>
          
          <div className="social-links-container">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="https://github.com/Potchiiii" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/daud-hassan-63452830a/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/this_is_daud/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          {formStatus.submitted ? (
            <div className="form-success">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Message Sent!</h3>
              <p>{formStatus.message}</p>
              <button className="btn" onClick={resetForm}>
                <i className="fas fa-paper-plane"></i> Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2><i className="fas fa-paper-plane"></i> Send Me a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className={`form-group ${formErrors.name ? 'error' : ''}`}>
                    <label htmlFor="name">
                      <i className="fas fa-user"></i> Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </div>
                  
                  <div className={`form-group ${formErrors.email ? 'error' : ''}`}>
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">
                    <i className="fas fa-heading"></i> Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                  />
                </div>
                
                <div className={`form-group ${formErrors.message ? 'error' : ''}`}>
                  <label htmlFor="message">
                    <i className="fas fa-comment-alt"></i> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>
                
                <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="btn-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Send Message
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
