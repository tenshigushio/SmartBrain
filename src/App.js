/*
    Project: Smart Brain Project of 
    the Complete Web Developer Course:
    Zero to Mastery
    Author: Maria Angelica Gucio
    Github: @tenshigushio

*/

import './App.css';
import './bootstrap.css';
import 'animate.css';
//import Clarifai from 'clarifai';
import Signin from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from "react-tsparticles";

/*const app = new Clarifai.App({
  apiKey: '4db4fb5cab064c43a8d3918ef46de526'
 });*/

//Particles Background
function particlesInit(main) {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
}

const particlesLoaded = (container) => {
  console.log(container);
};


const particleOptions = {
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 60,
          duration: 6,
          opacity: 1,
          size: 30,
        },
        push: {
          quantity: 100,
        },
        repulse: {
          distance: 300,
          duration: 1,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 1000,
        },
        value: 500,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 2,
      },
    },
    detectRetina: true,
}


class App extends Component {
  constructor (){
    super();
    this.state = {
      input: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    /*this.setState({imageUrl: this.state.input});
    app.models.predict('6dc7e46bc9124c5c8824be4822abe105', this.state.input)
    .then(response => {
      console.log('nice!', response)
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })

      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));*/
    
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render (){
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
      <Particles className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home'
          ? <div>
              
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              
            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
  
}

export default App;
