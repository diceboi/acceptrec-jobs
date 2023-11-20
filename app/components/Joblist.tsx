"use client"

import { useEffect, useState } from 'react';

interface Job {
    id: string;
    title: string;
    description: string;
    salarymin: string;
    salarymax: string;
    // Add other properties as needed
  }

const JobList = () => {
  const [jobsData, setJobsData] = useState<Job[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api'); // Assuming your API route is properly set up
        if (!res.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await res.json();
        setJobsData(data.jobsData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {jobsData.map((job) => (
        <div key={job.id} id={`job-${job.id}`} className='my-20'>
          <h1>{job.title}</h1>
          <h2>Description</h2>
          <p>{job.description}</p>
          <p>Salary: {job.salarymin} - {job.salarymax}</p>
          {/* Add more job details here as needed */}
        </div>
      ))}
    </div>
  );
};

export default JobList;