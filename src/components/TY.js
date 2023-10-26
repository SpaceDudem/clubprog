import React, { useEffect } from 'react';

const ElfsightWidget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.setAttribute('data-use-service-core', '');

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  return (
    <div className="elfsight-app-516b244c-7ce4-4336-b65e-3a9c2bda49c7"></div>
  );
};

export default ElfsightWidget;
