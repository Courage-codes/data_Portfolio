import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1e293b;
  color: white;
  padding: 3rem 2rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e2e8f0;
`;

const FooterText = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
  display: block;
  margin-bottom: 0.5rem;

  &:hover {
    color: #60a5fa;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  background: #334155;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #334155;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: #94a3b8;
  font-size: 0.9rem;
`;

const MadeWith = styled.div`
  color: #94a3b8;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeartIcon = styled(motion.div)`
  color: #ef4444;
  display: inline-block;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterTitle>About Me</FooterTitle>
            <FooterText>
              A passionate full-stack developer dedicated to creating innovative 
              web solutions and delivering exceptional user experiences.
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Services</FooterTitle>
            <FooterLink href="#projects">Web Development</FooterLink>
            <FooterLink href="#projects">Mobile Apps</FooterLink>
            <FooterLink href="#projects">API Development</FooterLink>
            <FooterLink href="#projects">Consulting</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact Info</FooterTitle>
            <FooterText>contact@example.com</FooterText>
            <FooterText>+1 (555) 123-4567</FooterText>
            <FooterText>San Francisco, CA</FooterText>
          </FooterSection>
        </FooterTop>

        <SocialLinks>
          <SocialLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={20} />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/courage-sena-logotse-6b22a1278"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={20} />
          </SocialLink>
          
          <SocialLink
            href="mailto:contact@example.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={20} />
          </SocialLink>
        </SocialLinks>

        <FooterBottom>
          <Copyright>
            © {currentYear} Portfolio. All rights reserved.
          </Copyright>
          <MadeWith>
            Made with 
            <HeartIcon
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart size={16} />
            </HeartIcon>
            by a passionate developer
          </MadeWith>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
