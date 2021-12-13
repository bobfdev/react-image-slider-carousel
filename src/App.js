import ImageSlider from './components/ImageSlider';
import SliderData from './components/SliderData';
import './App.css';

function App() {
  return (
    <div>
      <ImageSlider slideItems={SliderData} />;
    </div>
  );
}

export default App;
