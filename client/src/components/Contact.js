import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #000000;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #c9d1d9;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div``;

const SectionTitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff8c00;
  margin-bottom: 1rem;
  &::before { content: '# '; }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1rem;
  color: #7d8590;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff8c00;
    transform: translateX(10px);
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #ff8c00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 1.1rem;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.div`
  font-weight: 600;
  color: #c9d1d9;
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.div`
  color: #7d8590;
`;

const ContactForm = styled(motion.form)`
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(16,16,16,0.8);
  border: 1px solid rgba(255,255,255,0.1);
  color: #c9d1d9;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff8c00;
  }

  &::placeholder {
    color: #7d8590;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background: rgba(16,16,16,0.8);
  border: 1px solid rgba(255,255,255,0.1);
  color: #c9d1d9;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff8c00;
  }

  &::placeholder {
    color: #7d8590;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: #ff8c00;
  color: #000000;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #ff9f33;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: #dcfce7;
  color: #166534;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  border: 1px solid #bbf7d0;
`;

const ErrorMessage = styled(motion.div)`
  background: #fee2e2;
  color: #991b1b;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  border: 1px solid #fecaca;
`;

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // JS submission removed; using pure HTML form submit

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'cl.kofisena@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+233 (559) 326-589'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Ghana, West Africa'
    }
  ];

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactInfo>
          <SectionTitle
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            get in touch
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always interested in hearing about new projects and opportunities. 
            Let's discuss how we can work together to bring your ideas to life.
          </SectionSubtitle>

          {contactInfo.map((item, index) => (
            <ContactItem
              key={item.label}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ContactIcon>
                {item.icon}
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>{item.label}</ContactLabel>
                <ContactValue>{item.value}</ContactValue>
              </ContactDetails>
            </ContactItem>
          ))}
        </ContactInfo>

        <ContactForm
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          ref={formRef}
          action="https://formspree.io/f/xeolpldq"
          method="POST"
          target="_self"
        >
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          <input type="hidden" name="_subject" value="Portfolio Contact" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaPaperPlane size={16} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>

          {showSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Thank you! Your message has been sent successfully.
            </SuccessMessage>
          )}
          {errorMessage && (
            <ErrorMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {errorMessage}
            </ErrorMessage>
          )}
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
