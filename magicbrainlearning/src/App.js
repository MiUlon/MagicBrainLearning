import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';

window.process = {};

const app = new Clarifai.App({
  apiKey: '82819b6c8d2d4417abbdebb80e6a3cdc'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onLinkChange = (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imaginputeUrl).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(error) {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <div>
        <ParticlesBg type="color" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onLinkChange={this.onLinkChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    )
  }
}

export default App;
