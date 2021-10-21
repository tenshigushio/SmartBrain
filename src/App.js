import './App.css';
import './bootstrap.css';
import 'animate.css';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


function App() {
  
  return (
    <div className="App">
      <Navigation />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
