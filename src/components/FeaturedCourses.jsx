import React from 'react';
import '../styles/FeaturedCourses.css';

const courses = [
  {
    title: 'Science Explorers',
    grade: 'Grade 1',
    description: 'Discover simple scientific concepts through fun activities.',
  },
  {
    title: 'Multiplication and Division',
    grade: 'Grade 3',
    description: 'Learn the basics of multiplication and division tables.',
  },
  {
    title: 'Introduction to Coding',
    grade: 'Grade 5',
    description: 'Get started with basic computer programming and logic.',
  },
  {
    title: 'Physics Fundamentals',
    grade: 'Grade 7',
    description: 'Learn basic physics concepts such as force, motion, and energy.',
  },
  {
    title: 'Environmental Science',
    grade: 'Grade 4',
    description: 'Explore ecosystems, climate, and sustainable practices.',
  },
  {
    title: 'Creative Writing',
    grade: 'Grade 6',
    description: 'Develop storytelling skills and creative expression.',
  },
  {
    title: 'Algebra Basics',
    grade: 'Grade 8',
    description: 'Introduce fundamental algebraic concepts and problem-solving.',
  },
  {
    title: 'World History',
    grade: 'Grade 5',
    description: 'Journey through major historical events and civilizations.',
  },
  {
    title: 'Art and Design',
    grade: 'Grade 2',
    description: 'Explore creativity through various artistic techniques.',
  },
  {
    title: 'Basic Chemistry',
    grade: 'Grade 6',
    description: 'Discover the fascinating world of chemical reactions.',
  }
];

const FeaturedCourses = () => {
  return (
    <div className="featured-courses-container">
      <h2 className="section-title">Our Featured Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-header">
              <span className="course-grade">{course.grade}</span>
            </div>
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;