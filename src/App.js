import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";


function App() {
  return (
    <AppContainer>
      <Router>
        <Header />

        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`

`
