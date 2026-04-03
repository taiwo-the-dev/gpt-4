import React, { useEffect } from 'react';
import './App.css';

import {Header, Attributes, Possibility, WhatGPT, Blog, Footer} from './containers';
import {Navbar, Brand, CTA} from './components';

const App = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    revealElements.forEach((element) => {
      const delay = Number(element.getAttribute('data-delay') || 0);
      element.style.transitionDelay = `${delay}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <div className="reveal" data-reveal data-delay="20"><Brand /></div>
      <div className="reveal" data-reveal data-delay="40"><WhatGPT /></div>
      <div className="reveal" data-reveal data-delay="60"><Attributes /></div>
      <div className="reveal" data-reveal data-delay="80"><Possibility /></div>
      <div className="reveal" data-reveal data-delay="100"><CTA /></div>
      <div className="reveal" data-reveal data-delay="120"><Blog /></div>
      <div className="reveal" data-reveal data-delay="140"><Footer /></div>
    </div>
  )
}

export default App;
