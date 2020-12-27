import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Particles from "react-particles-js";

//Particle Module
const particlesParams = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
      },
      value_area: 800
    }
  }
}

const initialState = {
  route: "signin",
  isSignedIn: false,
  input: "",
  imgUrl: "",
  box: {},
  user: {
    id: null,
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  signOut = () => {
    this.setState(initialState);
  }

  loadUser = (userData) => {
    this.setState(prevState => {
      return {
        ...prevState,
        user: {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          entries: userData.entries,
          joined: userData.joined
        }
      }
    })
  }

  //Route Change from signin form
  onRouteChange = (routeName) => {
    if (routeName !== "home") {
      this.setState({
        ...initialState,
        route: routeName
      });
    } else if (routeName === "home") {
      this.setState(prevState => {
        return {
          ...prevState,
          isSignedIn: true,
          route: routeName
        }
      });
    }
  }

  onInputChange = (event) => {
    const { value } = event.target;
    this.setState(prevState => {
      return {
        ...prevState,
        input: value,
        imgUrl: value,
        box: []
      }
    });
  }

  calculateFaceLocation = (data) => {
    //check image size
    const image = document.getElementById("imageInput");
    const width = Number(image.width);
    const height = Number(image.height);

    //get face regions bounding box
    const faceRegions = data.outputs[0].data.regions;
    const clarifaiFace = faceRegions.map(region => {
      return region.region_info.bounding_box;
    })
    return clarifaiFace.map((face, index) => {
      return {
        id: index,
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
      }
    })
  }

  displayFaceBox = (box) => {
    this.setState(prevState => {
      return {
        ...prevState,
        box: box
      }
    });
  }

  onDetect = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        imgUrl: this.state.input
      }
    });
    fetch("https://zildev-smartbrain-api.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.imgUrl
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("https://zildev-smartbrain-api.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              //using spread operator
              // this.setState(prevState => {
              //   return {
              //     ...prevState,
              //     user: {
              //       ...prevState.user,
              //       entries: count
              //     }
              //   }
              // }) 
              this.setState(Object.assign(this.state.user, { entries: count })) //using object assign
            })
            .catch(err => console.log(err));
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  render() {
    const { route, isSignedIn, input, imgUrl, box } = this.state;
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesParams}
        />
        <Navigation isSignedIn={isSignedIn} signOut={this.signOut} onRouteChange={this.onRouteChange} />
        {route === "register" && <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />}
        {(route === "signin" || route === "signout") && <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />}
        {route === "home" &&
          <div>
            <Logo />
            <Rank userName={this.state.user.name} userEntries={this.state.user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} inputValue={input} onDetect={this.onDetect} />
            <FaceRecognition box={box} imgUrl={imgUrl} />
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default App;
