import './App.css';
import './bootstrap.css';
import 'animate.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


function App() {
  
  return (
    <div className="App">
      <Particles className="particles"
        params={{
          polygon: {
              enable: true,
              type: 'inside',
              move: {
                  radius: 40
              },
              url: 'path/to/svg.svg'
          }
        }}
      />
      <Navigation />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
