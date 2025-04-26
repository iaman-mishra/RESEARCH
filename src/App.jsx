import React from 'react'
import { Route, Routes } from "react-router-dom";
import Issues from './Pages/Issues';
import View from './Pages/View';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Issues/>} />
        <Route path="/volume-13" element={<Issues />} />
        <Route path="/volume-13/issue-4-april-2025" element={<Issues />} />
        <Route path="/volume-13/issue-4-april-2025/how-facial-recognition-systems-are-used-for-identification-of-missing-person" element={<View />} />
      </Routes>
      {/* <View/> */}
    </div>
  )
}

export default App