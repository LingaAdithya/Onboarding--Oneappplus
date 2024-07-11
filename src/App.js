import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import OnboardingPage1 from "./pages/OnboardingPage1";
import React, { useState, useEffect } from 'react';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const handleVerticalChange = (vertical) => {
    setSelectedVertical(vertical);
    setSelectedCategory('');
    setCategories([]);
  };  

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  
  useEffect(() => {
    let title = "";
    let metaDescription = "";
  
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-page-2":
        title = "";
        metaDescription = "";
        break;
    }
  
    if (title) {
      document.title = title;
    }
  
    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/onboarding-page-2" element={<OnboardingPage1 />} />
    </Routes>
  );
  
}

export default App;
