import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseDetail = async () => {
            const response = await fetch(`https://api.example.com/courses/${id}`); // Replace with your API
            const data = await response.json();
            setCourse(data);
        };

        fetchCourseDetail();
    }, [id]);

    if (!course) return <p>Loading...</p>;

    return (
        <div className="container course-detail" style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9', transition: 'background-color 0.3s ease' }}>
            <h2 className="course-title" style={{ fontWeight: 'bold', transition: 'color 0.3s ease' }}>{course.title}</h2>
            <p className="course-description" style={{ lineHeight: '1.6', transition: 'background-color 0.3s ease' }}>{course.description}</p>
        </div>
    );
};

export default CourseDetail;
