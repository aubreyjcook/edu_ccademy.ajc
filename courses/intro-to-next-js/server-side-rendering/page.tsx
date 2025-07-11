import React from 'react';
const fetchCurrentTime = (): string => {
  return new Date().toLocaleString();
};
export default function TimePage() {
  const currentTime: string = fetchCurrentTime();
  return (
    <div>
      <h1>Current Time</h1>
      <p>The current time is: {currentTime}</p>
    </div>
  );
};