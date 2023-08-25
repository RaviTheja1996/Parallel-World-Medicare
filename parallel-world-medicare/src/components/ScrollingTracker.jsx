import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollTrackerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #ccc;
  z-index: 9999;
`;

const ScrollTrackerThumb = styled.div`
  width: ${(props) => props.scrollPercentage}%;
  height: 100%;
  background-color: orange;
`;

const ScrollTracker = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScrollPercentage = () => {
    const scrollY = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / totalHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPercentage);
    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
    };
  }, []);

  return (
    <ScrollTrackerContainer>
      <ScrollTrackerThumb scrollPercentage={scrollPercentage} />
    </ScrollTrackerContainer>
  );
};

export default ScrollTracker;
