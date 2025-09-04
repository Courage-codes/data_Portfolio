import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  background: #000000;
  color: #c9d1d9;
  padding: 2rem;
  font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Droid Sans Mono', 'Source Code Pro', monospace;
  line-height: 1.6;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TimeLocation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #7d8590;
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #ff8c00;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #7d8590;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #ff8c00;
  }
`;

const Name = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  color: #ff8c00;
  margin: 2rem 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Typewriter = styled.span`
  position: relative;
  &::after {
    content: '_';
    color: #ff8c00;
    animation: blink 1s infinite;
    margin-left: 4px;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #7d8590;
  margin-bottom: 2rem;
`;

const CompanyInfo = styled(motion.p)`
  margin-bottom: 3rem;
  
  a {
    color: #ff8c00;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: #ff8c00;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  
  &::before {
    content: '# ';
  }
`;

const AboutContainer = styled.div`
  border-left: 3px solid #ff8c00;
  padding-left: 1rem;
  margin-left: 0.5rem;
  position: relative;
`;



const AboutText = styled.p`
  margin: 0 0 1rem 0;
  color: #c9d1d9;
`;

const EmploymentItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.2);
  
  &:hover {
    border-color: #ff8c00;
    transition: border-color 0.2s ease;
  }
`;

const EmploymentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const CompanyName = styled.h3`
  color: #c9d1d9;
  font-size: 1.1rem;
  margin: 0;
  
  &::before {
    content: '> ';
    color: #ff8c00;
  }
`;

const JobTitle = styled.div`
  color: #7d8590;
  font-size: 0.9rem;
`;



const EmploymentDescription = styled.p`
  color: #c9d1d9;
  margin-bottom: 1rem;
`;

const TechTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  color: #6b7280;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
`;

const ProjectItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.2);
  
  &:hover {
    border-color: #ff8c00;
    transition: border-color 0.2s ease;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProjectName = styled.h3`
  color: #c9d1d9;
  font-size: 1.1rem;
  margin: 0;
  
  &::before {
    content: '> ';
    color: #ff8c00;
  }
`;

const ExternalLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.7;
  
  &:hover {
    color: #ff8c00;
    opacity: 1;
  }
`;

const ArsenalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ArsenalItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  
  &:hover {
    border-color: #ff8c00;
    transition: border-color 0.2s ease;
  }
`;

const ArsenalTitle = styled.h3`
  color: #ff8c00;
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  
  &::before {
    content: '$ ';
  }
`;

const ArsenalDescription = styled.p`
  color: #7d8590;
  font-size: 0.9rem;
  margin: 0;
`;



const ContactText = styled.p`
  color: #c9d1d9;
  margin-bottom: 2rem;
`;

const Hero = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [typewriterText, setTypewriterText] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Ghana is GMT+0, so we use UTC time
      const ghanaTime = new Date(now.getTime() + (0 * 60 * 60 * 1000));
      const timeString = ghanaTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'UTC'
      });
      setCurrentTime(timeString.toLowerCase());
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const words = ['sena', 'data analyst', 'data engineer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setTypewriterText(currentWord.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, 1200);
          return;
        }
      } else {
        setTypewriterText(currentWord.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeoutId = setTimeout(tick, isDeleting ? 60 : 100);
    };

    tick();
    return () => timeoutId && clearTimeout(timeoutId);
  }, []);

  return (
    <HeroSection>
      <Container>
        <TimeLocation>
          <div>
            <StatusDot />
            {currentTime} | ghana (gmt+0)
          </div>
          <SocialIcons>
            <SocialLink href="https://github.com/Courage-codes" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/courage-sena-logotse-6b22a1278" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </SocialLink>
            <SocialLink href="#contact" onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el) { el.scrollIntoView({ behavior: 'smooth' }); } }}>
              <FaEnvelope size={20} />
            </SocialLink>
          </SocialIcons>
        </TimeLocation>

        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typewriter>{typewriterText}</Typewriter>
        </Name>

        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        Data is the new oil, i build the refinery.
        </Description>

        <CompanyInfo
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          data engineer @ <a href="https://amalitech.com" target="_blank" rel="noopener noreferrer">amalitech.com</a>.
        </CompanyInfo>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <SectionTitle>about</SectionTitle>
          <AboutContainer>
            
              
            
            <AboutText>
            Experienced Data Engineer specializing in scalable data architecture and analytics solutions that transform raw data into strategic business value. I design and build enterprise-grade ETL workflows, real-time ingestion systems, and executive dashboards that empower data-driven decision making across organizations.
            </AboutText>
            
          </AboutContainer>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <SectionTitle>employment</SectionTitle>
          
          <EmploymentItem>
            <EmploymentHeader>
              <div>
                <CompanyName>Amalitech</CompanyName>
                <JobTitle>data engineer • 2025 - present</JobTitle>
              </div>
              <ExternalLink href="https://datatech.com" target="_blank" rel="noopener noreferrer">
                ↗
              </ExternalLink>
            </EmploymentHeader>
            <EmploymentDescription>
              building large-scale data pipelines and real-time streaming platforms. architecting data lakes and warehouses that process terabytes of data daily for machine learning and analytics workloads.
            </EmploymentDescription>
            <TechTags>
              <TechTag>python</TechTag>
              <TechTag>spark</TechTag>
              <TechTag>kafka</TechTag>
              <TechTag>airflow</TechTag>
            </TechTags>
          </EmploymentItem>

          <EmploymentItem>
            <EmploymentHeader>
              <div>
                <CompanyName>NiPMA</CompanyName>
                <JobTitle>data analyst • 2023 - 2024</JobTitle>
              </div>
              <ExternalLink href="https://bigdata.io" target="_blank" rel="noopener noreferrer">
                ↗
              </ExternalLink>
            </EmploymentHeader>
            <EmploymentDescription>
              Conducted a comprehensive analysis of 50,000+ municipal records using Python (pandas, numpy) and SQL to identify data-driven insights supporting policy decisions across Health, Education, and Infrastructure departments. Redesigned data collection methods.
            </EmploymentDescription>
            <TechTags>
              <TechTag>python</TechTag>
              <TechTag>sql</TechTag>
              <TechTag>pandas</TechTag>
              <TechTag>postgresql</TechTag>
            </TechTags>
          </EmploymentItem>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <SectionTitle>projects</SectionTitle>
          
          <ProjectItem>
            <ProjectHeader>
              <ProjectName>Lakehouse Architecture (E‑Commerce)</ProjectName>
              <ExternalLink href="https://github.com/Courage-codes/Lakehouse_Architecture" target="_blank" rel="noopener noreferrer">
                ↗
              </ExternalLink>
            </ProjectHeader>
            <EmploymentDescription>
              end-to-end medallion lakehouse (bronze/silver/gold) for e-commerce transactions with batch and streaming ingestion, governance, and bi-ready models.
            </EmploymentDescription>
            <TechTags>
              <TechTag>aws s3</TechTag>
              <TechTag>spark</TechTag>
              <TechTag>delta lake</TechTag>
              <TechTag>airflow</TechTag>
              <TechTag>glue</TechTag>
            </TechTags>
          </ProjectItem>

          <ProjectItem>
            <ProjectHeader>
              <ProjectName>Ride‑Hailing Data Ingestion (Bolt, Kinesis)</ProjectName>
              <ExternalLink href="https://github.com/Courage-codes/BoLT_RiDe_daTa_InGesTiOn" target="_blank" rel="noopener noreferrer">
                ↗
              </ExternalLink>
            </ProjectHeader>
            <EmploymentDescription>
              real-time, serverless ingestion for a ride‑hailing platform (bolt): kinesis → lambda → dynamodb with event validation, trip matching, kpi aggregation, and observability.
            </EmploymentDescription>
            <TechTags>
              <TechTag>kinesis</TechTag>
              <TechTag>lambda</TechTag>
              <TechTag>dynamodb</TechTag>
              <TechTag>s3</TechTag>
              <TechTag>cloudwatch</TechTag>
            </TechTags>
          </ProjectItem>

          <ProjectItem>
            <ProjectHeader>
              <ProjectName>Airflow + AWS Glue ELT</ProjectName>
              <ExternalLink href="https://github.com/Courage-codes/DATA_PIPELINE_WITH_AIRFLOW_-_AWS_GLUE" target="_blank" rel="noopener noreferrer">
                ↗
              </ExternalLink>
            </ProjectHeader>
            <EmploymentDescription>
              airflow orchestrates glue jobs to transform raw data into curated datasets with schema evolution and backfills.
            </EmploymentDescription>
            <TechTags>
              <TechTag>airflow</TechTag>
              <TechTag>aws glue</TechTag>
              <TechTag>athena</TechTag>
              <TechTag>s3</TechTag>
            </TechTags>
          </ProjectItem>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <SectionTitle>arsenal</SectionTitle>
          <ArsenalGrid>
            <ArsenalItem>
              <ArsenalTitle>python</ArsenalTitle>
              <ArsenalDescription>my primary language for data processing, etl pipelines, and analytics.</ArsenalDescription>
            </ArsenalItem>
            <ArsenalItem>
              <ArsenalTitle>spark</ArsenalTitle>
              <ArsenalDescription>distributed computing engine for large-scale data processing and transformation.</ArsenalDescription>
            </ArsenalItem>
            <ArsenalItem>
              <ArsenalTitle>kafka</ArsenalTitle>
              <ArsenalDescription>real-time streaming platform for building event-driven data architectures.</ArsenalDescription>
            </ArsenalItem>
            <ArsenalItem>
              <ArsenalTitle>airflow</ArsenalTitle>
              <ArsenalDescription>workflow orchestration tool for scheduling and monitoring data pipelines.</ArsenalDescription>
            </ArsenalItem>
            <ArsenalItem>
              <ArsenalTitle>sql</ArsenalTitle>
              <ArsenalDescription>database querying and data manipulation across various relational systems.</ArsenalDescription>
            </ArsenalItem>
          </ArsenalGrid>
        </Section>



        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <SectionTitle>contact</SectionTitle>
          <ContactText>
            i'm always open to new opportunities and collaborations. feel free to reach out via email or social media above!
          </ContactText>
        </Section>
      </Container>
    </HeroSection>
  );
};

export default Hero;
