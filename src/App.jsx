import React from "react";
import { Route, Routes } from "react-router-dom";
import Issues from "./Pages/Issues";
import View from "./Pages/View";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Issues />} />
        <Route path="/volume-13" element={<Issues />} />
        <Route path="/volume-13/issue-4-april-2025" element={<Issues />} />
        <Route
          path="/volume-13/issue-4-april-2025/how-facial-recognition-systems-are-used-for-identification-of-missing-person"
          element={<View />}
        />
      </Routes>
      {/* <View/> */}
    </div>
  );
};

export default App;
