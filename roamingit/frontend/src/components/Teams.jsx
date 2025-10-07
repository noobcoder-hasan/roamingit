import React from 'react';
import './Teams.css';
import teamMember1 from '../assets/team-member-1.svg';
import teamMember2 from '../assets/team-member-2.svg';
import teamMember3 from '../assets/team-member-3.svg';
import teamMember4 from '../assets/team-member-4.svg';

const teamsData = [
  {
    id: 1,
    name: 'M S Kamran',
    role: 'Lead Developer',
    specialization: 'Full-Stack Development',
    image: teamMember1,
    skills: ['React', 'Node.js', 'Python', 'AWS'],
    experience: '5+ years',
    description: 'Passionate about creating scalable web applications and leading development teams.'
  },
  {
    id: 2,
    name: 'K M Abrar Ahsan',
    role: 'Junior something',
    specialization: 'Product Design',
    image: teamMember2,
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    experience: '4+ years',
    description: 'Focused on creating intuitive and beautiful user experiences that drive engagement.'
  },
  {
    id: 3,
    name: 'Hasan Sarwar Zami',
    role: 'Intern',
    specialization: 'Cloud Infrastructure',
    image: teamMember3,
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    experience: '6+ years',
    description: 'Expert in building robust, scalable infrastructure and automating deployment processes.'
  }
  // {
  //   id: 4,
  //   name: 'Emily Davis',
  //   role: 'Mobile Developer',
  //   specialization: 'Cross-Platform Apps',
  //   image: teamMember4,
  //   skills: ['React Native', 'Flutter', 'iOS', 'Android'],
  //   experience: '3+ years',
  //   description: 'Specialized in creating high-performance mobile applications for iOS and Android.'
  // }
];

const Teams = () => {
  return (
    <section id="teams" className="teams-section">
      <div className="teams-container">
        <div className="teams-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Talented professionals dedicated to delivering exceptional IT solutions
          </p>
        </div>
        
        <div className="teams-grid">
          {teamsData.map((member, index) => (
            <div key={member.id} className="team-card" data-member-id={member.id}>
              <div className="team-card-inner">
                <div className="team-image-container">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="team-image"
                  />
                  <div className="team-image-overlay">
                  </div>
                </div>
                
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-specialization">{member.specialization}</p>
                  <p className="team-experience">{member.experience} experience</p>
                  <p className="team-description">{member.description}</p>
                  
                  <div className="team-skills-full">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
     
    </section>
  );
};

export default Teams;