import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaRocket, FaHeart } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #f8fafc;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div``;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`;

const AboutImage = styled(motion.div)`
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const ImageContent = styled.div`
  text-align: center;
  color: white;
  z-index: 2;
`;

const ImageIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const ImageText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.9;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <SectionTitle
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Passionate Full Stack Developer with expertise in modern web technologies
          </SectionSubtitle>
          
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm a dedicated developer who loves turning complex problems into simple, 
            beautiful, and intuitive solutions. With over 5 years of experience in 
            web development, I've worked on a variety of projects from small business 
            websites to complex enterprise applications.
          </AboutText>
          
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            My approach combines technical expertise with creative problem-solving, 
            ensuring that every project not only meets but exceeds expectations. 
            I believe in writing clean, maintainable code and staying up-to-date 
            with the latest industry trends and best practices.
          </AboutText>

          <StatsGrid
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </AboutContent>

        <AboutImage
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElements>
            <FloatingElement
              style={{ top: '20%', left: '10%' }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaCode />
            </FloatingElement>
            <FloatingElement
              style={{ top: '60%', right: '15%' }}
              animate={{
                y: [0, 20, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaRocket />
            </FloatingElement>
            <FloatingElement
              style={{ bottom: '20%', left: '20%' }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaHeart />
            </FloatingElement>
          </FloatingElements>
          
          <ImageContent>
            <ImageIcon>
              <FaUser />
            </ImageIcon>
            <ImageText>Full Stack Developer</ImageText>
          </ImageContent>
        </AboutImage>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
