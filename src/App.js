import React, { useState } from 'react';
import './App.css';
import Signin from './components/Signin/Signin.js'
import ParticlesBg from 'particles-bg';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Register from './components/Register/Register.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';


export default function App() {
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [route, setRoute] = useState('signin');
  const [input, setInput] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [box, setBox] = useState({});
  const [signInData, setSignInData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
});
  const [currentUser, setCurrentUser] = useState({
    id: '', 
    name: '',
    email: '',
    entries: 0,
    joined: ''
  });

  const loadUser = (user) => {
  setCurrentUser({
    id: user.id,
    name: user.name,
    email: user.email,
    entries: user.entries,
    joined: user.joined
  })
}

  const handleChange = (event) => {
    setSignInData(prevData => {
        return {
            ...prevData,
            [event.target.name]: event.target.value
        }
    })
}

  const handleSignIn = () => {
    setLoading(true);
    fetch('https://face-recognition-api-02mo.onrender.com/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: signInData.email,
            password: signInData.password
        })
    })
    .then(response => response.json())
    .then(user => {
        if (user.id) {
            loadUser(user);
            handleRouteChange('home');
        } 
    })
    setSignInData({
      email: '',
      password: ''
    })
}

  const handleRegister = () => {
    const obj = Object.values(signInData);
      for (let key in obj) {
        if (obj[key].length === 0) {
          alert('You have not filled out all necessary fields') 
          return
        }
      } 
      if(signInData.password !== signInData.confirmPassword) {
        alert('Passwords do not match!')
      } else {
        fetch('https://face-recognition-api-02mo.onrender.com/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          name: signInData.name,
          email: signInData.email,
          password: signInData.password
        })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
          loadUser(user)
          console.log('Registered!');
          handleRouteChange('home');
          setSignInData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
      } 
    })
  }
 }
  
  const handleInputChange = (event) => {
      console.log('event: ', event.target.value);
      setInput(event.target.value)
    }

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace)
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(height, width)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
    setBox(box);
  }

  const handlePictureSubmit = () => {
    setImageURL(input);
    fetch('https://face-recognition-api-02mo.onrender.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response != 'unable to work with API') {
          fetch('https://face-recognition-api-02mo.onrender.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: currentUser.id
            })
          })
            .then(response => response.json())
            .then(count => {
              setCurrentUser(user => {
                return {
                  ...user,
                  entries: count
                }
              })
            })
            .catch(console.log)

        }
        displayFaceBox(calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }
  
  const clearStateForSignout= () => {
    setLoading(false);
    setImageURL('');
    setInput('');
    setBox({});
    setIsSignedIn(false);
    setCurrentUser({
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    })
  }

  const handleRouteChange = (route) => {
    if (route === 'signin') {
      clearStateForSignout(); 
      
    } else if (route === 'home') {
      setIsSignedIn(true)
    }
    setRoute(route);
  }
  
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation
        isSignedIn = {isSignedIn} 
        handleRouteChange = {handleRouteChange}
      />
      {route === 'home' ?
      <>
      <Logo />
      <Rank 
        name={currentUser.name}
        entries={currentUser.entries}
      />
      <ImageLinkForm 
              handlePictureSubmit={handlePictureSubmit}
              handleInputChange={handleInputChange}  
      />
      <FaceRecognition 
        box = {box}
        imageURL = {imageURL}
      />
      </> :
      (
        route === 'signin' ?
        <Signin
          handleChange = {handleChange}
          handleSignin = {handleSignIn}
          handleRouteChange = {handleRouteChange}
          loading = {loading}
      /> :
        <Register 
          handleChange = {handleChange}
          handleRouteChange = {handleRouteChange}
          handleRegister = {handleRegister}
        />
      )
    }
  </div>
  );
}



