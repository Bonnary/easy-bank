import Header from "./Components/Header";
import { useState } from "react";
import MenuCard from "./Components/MenuCard";
import HeroSection from "./Components/HeroSection";
import Description from "./Components/Description";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
function App() {
  const [Click, setClick] = useState(false);
  return (
    <div>
      <Header Click={Click} setClick={setClick} />
      {Click && <MenuCard />}
      <HeroSection />
      <Description />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
