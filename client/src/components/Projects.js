import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: #f8fafc;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const ProjectsContainer = styled.div`
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

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid #e5e7eb;
  background: white;
  color: #374151;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
  }

  &:hover {
    border-color: #2563eb;
    color: #2563eb;
    
    &.active {
      color: white;
    }
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
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

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f8fafc;
  color: #374151;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    color: white;
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, product management, and payment integration.',
      image: <FaGlobe />,
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with React and Firebase. Real-time updates, user collaboration, and responsive design.',
      image: <FaMobile />,
      category: 'mobile',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'API Gateway Service',
      description: 'A microservices API gateway built with Node.js and Express. Handles authentication, rate limiting, and request routing.',
      image: <FaCode />,
      category: 'backend',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and styled-components. Features smooth animations and modern design.',
      image: <FaGlobe />,
      category: 'web',
      technologies: ['React', 'Styled-Components', 'Framer-Motion'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data. Built with React and OpenWeatherMap API.',
      image: <FaMobile />,
      category: 'mobile',
      technologies: ['React', 'OpenWeatherMap API', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Blog CMS',
      description: 'A content management system for blogs with admin panel, user management, and SEO optimization features.',
      image: <FaCode />,
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'backend', label: 'Backend Services' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work and technical expertise
          </SectionSubtitle>
        </SectionHeader>

        <FilterButtons
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              className={activeFilter === filter.id ? 'active' : ''}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>

        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={activeFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage>
                  {project.image}
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTech>
                    {project.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </ProjectTech>
                  <ProjectLinks>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={16} />
                      Code
                    </ProjectLink>
                    <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={16} />
                      Live Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
