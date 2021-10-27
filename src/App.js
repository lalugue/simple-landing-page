import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa risus, varius sed hendrerit nec, vestibulum eget odio. Vestibulum non sem gravida, malesuada dui eu, dapibus ligula. Duis efficitur lacinia nisl quis auctor. Nullam et nisi vitae tortor pellentesque faucibus. Aliquam pulvinar tristique tortor sit amet varius. Pellentesque porta tristique dolor, et malesuada arcu luctus vel. Duis sem nulla, tempor quis ornare non, dignissim in mi.";

  return (
    <div className="App">
      <Header text="Hello World!" subtext="lorem ipsum" />
      <Card text="Lorem" subtext={text} classProp="LightCard" />
      <Card text="Ipsum" subtext={text} classProp="DarkCard" />
      <Card text="Dolor" subtext={text} classProp="LightCard" />
      <Footer />
    </div>
  );
}

export default App;
