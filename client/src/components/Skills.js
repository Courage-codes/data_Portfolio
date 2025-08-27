import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaPython, FaJava, FaPhp
} from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SkillCategory = styled.div``;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 2rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: #374151;
`;

const SkillPercentage = styled.span`
  font-weight: 600;
  color: #2563eb;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  border-radius: 4px;
`;

const TechnologiesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const TechCard = styled(motion.div)`
  background: #f8fafc;
  padding: 2rem 1rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: white;
    border-color: #2563eb;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.1);
  }
`;

const TechIcon = styled.div`
  font-size: 3rem;
  color: #2563eb;
  margin-bottom: 1rem;
`;

const TechName = styled.div`
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
`;

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3', percentage: 90 },
    { name: 'JavaScript', percentage: 88 },
    { name: 'React', percentage: 85 },
    { name: 'TypeScript', percentage: 80 }
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'Java', percentage: 75 },
    { name: 'PHP', percentage: 70 },
    { name: 'Database Design', percentage: 85 }
  ];

  const technologies = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaDatabase />, name: 'MongoDB' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaPhp />, name: 'PHP' }
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical skills and proficiency levels
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          <SkillCategory>
            <CategoryTitle
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Frontend Development
            </CategoryTitle>
            {frontendSkills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <SkillPercentage>{skill.percentage}%</SkillPercentage>
                </SkillHeader>
                <SkillBar>
                  <SkillProgress
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </SkillBar>
              </SkillItem>
            ))}
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Backend Development
            </CategoryTitle>
            {backendSkills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <SkillPercentage>{skill.percentage}%</SkillPercentage>
                </SkillHeader>
                <SkillBar>
                  <SkillProgress
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </SkillBar>
              </SkillItem>
            ))}
          </SkillCategory>
        </SkillsGrid>

        <TechnologiesGrid
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TechIcon>{tech.icon}</TechIcon>
              <TechName>{tech.name}</TechName>
            </TechCard>
          ))}
        </TechnologiesGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
