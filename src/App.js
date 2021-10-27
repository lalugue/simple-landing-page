import './App.css';
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header text="Hello World!" subtext="lorem ipsum"/>
      <Card text="Lorem" subtext="Dolor sit amet, consectetur adipiscing"/>
      <Card text="Ipsum" subtext="Ipsum dolor sit amet, consectetur adipiscing elit"/>
      <Card text="Dolor" subtext="Dolor sit amet, consectetur adipiscing elit sed"/>
      <Footer/>
    </div>
  );
}

export default App;
