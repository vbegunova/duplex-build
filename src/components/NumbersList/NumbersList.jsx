import React, { useEffect, useState } from 'react';
import { Container, List, Number, Description } from './NumbersList.styled';

const NumbersList = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('numbers-list');
      const rect = element.getBoundingClientRect();
      const viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      const isVisible = !(rect.bottom < 0 || rect.top - viewHeight >= 0);

      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateNumber(20, 'first-num');
      animateNumber(400, 'second-num');
      animateNumber(1400, 'third-num');
      animateNumber(55, 'fourth-num');
    }
  }, [isVisible]);

  function animateNumber(
    finalNumber,
    elementId,
    duration = 2000,
    startNumber = 0
  ) {
    const element = document.getElementById(elementId);

    let started = false;

    function startAnimation() {
      if (started) return;
      if (isElementVisible(element)) {
        let startTime = null;

        function animation(currentTime) {
          if (!startTime) startTime = currentTime;
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);

          element.innerText = Math.floor(
            progress * (finalNumber - startNumber) + startNumber
          );

          if (progress < 1) {
            requestAnimationFrame(animation);
          }
        }

        started = true;
        requestAnimationFrame(animation);
      }
    }

    window.addEventListener('scroll', startAnimation);
    startAnimation();
  }

  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  return (
    <Container>
      <List id="numbers-list">
        <li>
          <Number>
            <span id="first-num">20</span>+
          </Number>
          <Description>Lorem ipsum dolor sit</Description>
        </li>
        <li>
          <Number>
            $<span id="second-num">400</span>+
          </Number>
          <Description>Lorem ipsum dolor sit</Description>
        </li>
        <li>
          <Number>
            <span id="third-num">1400</span>+
          </Number>
          <Description>Lorem ipsum dolor sit</Description>
        </li>
        <li>
          <Number>
            <span id="fourth-num">55</span>+
          </Number>
          <Description>Lorem ipsum dolor sit</Description>
        </li>
      </List>
    </Container>
  );
};

export default NumbersList;
