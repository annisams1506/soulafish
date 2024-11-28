import React from 'react';

const Wave = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-[10px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#6FCF97"
          fillOpacity="1"
          d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,197.3C840,181,960,139,1080,117.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
