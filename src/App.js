import { GlobalStyle } from "./styles";
import { Route, Routes } from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";

// Pages
import MainPage from "./components/page/MainPage";
import Navigation from "./components/organism/navigation/Navigation";
import Footer from "./components/organism/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />

      <RootLayout>
        <Navigation />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<>world</>} />
        </Routes>

        <Footer />
      </RootLayout>
    </>
  );
}

export default App;
