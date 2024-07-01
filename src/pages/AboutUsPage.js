// AboutUsPage.js

import React, { useEffect } from 'react';
import TeamMember from './TeamMember'; // Import the TeamMember component
import './AboutUs.css'; // Import the CSS file for TeamMember styling

const AboutUsPage = () => {
  useEffect(() => {
    // Add the "animated" class to trigger the fade-in effect
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member) => member.classList.add('animated'));
  }, []);

  return (
    <div>
      {/* Section 1: About the website */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to UniProjectHub, where innovation and education converge! Our dedicated team of four is on a mission to revolutionize the academic landscape in Indian universities and colleges. We've created a centralized platform that brings together project works from diverse technical and higher educational institutes across the country.
          UniProjectHub goes beyond being a conventional knowledge-sharing platform. We are committed to upholding academic integrity through a robust plagiarism-checking feature, creating a collaborative space for peer learning, and fostering cross-functional research. Imagine a community where students can explore, learn, and collaborate seamlessly across institutions, nurturing a culture of innovation.
          Our technology-driven approach harnesses the power of the MERN stack, Python, Tailwind CSS, and cutting-edge machine learning algorithms. The platform introduces a sophisticated recommendation system, providing users with personalized project suggestions for a tailored learning experience. Additionally, our plagiarism checker ensures the originality and uniqueness of project works, promoting academic authenticity.
          Join us on this exciting journey of academic excellence and innovation at UniProjectHub. It's not just a platform; it's a vibrant community where students can share, learn, and collectively shape the future of education in India. Together, let's unlock the full potential of student projects and redefine the educational landscape.
        </p>
      </section>

      {/* Section 2: Team Members */}
      <section className="team-section">
        <h2>Our Team</h2>
        {/* Team Member 1 */}
        <TeamMember
          name="Harsh Jangra"
          role="Back-end Developer"
          profilePhoto="https://media.licdn.com/dms/image/D4D03AQFrLOpUCYeyrQ/profile-displayphoto-shrink_400_400/0/1693813520047?e=1712793600&v=beta&t=fXRVzVnETGu2_EbqKOeWMwMkP1UlnBDDOKggxh1rYjc"
          instagram="https://www.instagram.com/harsh.jangra_/#"
          linkedin="https://www.linkedin.com/in/harsh-jangra-65b7361a5/"
        />

        {/* Team Member 2 */}
        <TeamMember
          name="Naman Jain"
          role="React & ux/ui"
          profilePhoto="https://scontent.cdninstagram.com/v/t51.2885-19/324773548_1231090394428857_5564313355262183032_n.jpg?stp=dst-jpg_s120x120&_nc_cat=111&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=2NMeVSV7V0YAX8WIPJD&_nc_ht=scontent.cdninstagram.com&oh=00_AfD0dn95jJxcqV3Kxutu-eXIraIo_H3Sgbz-PDNSpjlxrQ&oe=65CA5BEC"
          instagram="https://www.instagram.com/invincible_bloke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          linkedin="https://www.linkedin.com/in/naman-jain-182541200"
        />

        {/* Team Member 3 */}
        <TeamMember
          name="Khushi Sharma"
          role="Front-end/UI-UX Developer"
          profilePhoto="https://scontent.cdninstagram.com/v/t51.2885-19/293636387_5593072594037222_5685053519636467138_n.jpg?stp=dst-jpg_s120x120&_nc_cat=104&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=SobTWg_bB6cAX-zHRzh&_nc_ht=scontent.cdninstagram.com&oh=00_AfBWWp-GyUGVxn3v7sBf-BbDTd_RMKqD18WxUhzbSO3WLg&oe=65C9B6D9"
         
          instagram="https://www.instagram.com/khushi_ssharmaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          linkedin="https://www.linkedin.com/in/khushi-sharma-655881240"
        /> 

        {/* Team Member 4 */}
        <TeamMember
          name="Harsh Gautam"
          role="Front-end Developer"
          profilePhoto="https://scontent.cdninstagram.com/v/t51.2885-19/419522179_1267369177987652_8044595254520289939_n.jpg?stp=dst-jpg_s120x120&_nc_cat=101&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=kXkqxzigtqkAX9DVs6d&_nc_ht=scontent.cdninstagram.com&oh=00_AfDYDnDtG99OEerLEgZrzo8oFSqUmNAYhzM7wHObHHOzXg&oe=65C9742D"
          instagram="https://www.instagram.com/_harsh_gautam_02?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          linkedin="https://www.linkedin.com/in/harsh-gautam-a38509258"
        /> 
      </section>
    </div>
  );
};

export default AboutUsPage;
