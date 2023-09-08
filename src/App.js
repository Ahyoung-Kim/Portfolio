import { useEffect } from "react";
import { GlobalStyle } from "./styles";
import { Route, Routes } from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";

// Pages
import MainPage from "./components/page/MainPage";
import Navigation from "./components/organism/navigation/Navigation";
import Footer from "./components/organism/footer/Footer";
import ProjectPage from "./components/page/ProjectPage";
import Test from "./test/Test";
import MainPage2 from "./components/page/old_MainPage";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <GlobalStyle />

      <RootLayout>
        {/* <Navigation /> */}

        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="test" element={<Test />} />
          <Route path="/main" element={<MainPage2 />} />
        </Routes>

        {/* <Footer /> */}
      </RootLayout>
    </>
  );
}

export default App;
