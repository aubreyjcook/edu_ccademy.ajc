import React from 'react'
const fetchCurrentTime = (): string => {
  return new Date().toLocaleString();
};

export default function TimePage() {
  const currentTime = fetchCurrentTime();
  
  return (
    <>
      <p>
      </p>
    </>
  );
};