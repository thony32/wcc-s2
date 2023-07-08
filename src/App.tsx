import Footer from "./components/Footer";
import GameOne from "./components/GameOne";
import GameThree from "./components/GameThree";
import GameTwo from "./components/GameTwo";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="space-y-10">
      <Navbar />
      <Welcome />
      <Presentation />
      <GameOne />
      <GameTwo />
      <GameThree />
      <Footer />
    </div>
  );
}

export default App;
