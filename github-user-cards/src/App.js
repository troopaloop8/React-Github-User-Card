import React from 'react';
import './App.css';
import axios from "axios";
// import GitCard from './components/GitCard';
import CardList from './components/CardList';

class App extends React.Component {

  state = {
    userData: [],
    followData: [],
    myuserName: "troopaloop8"
  }

  componentDidMount() {
    this.getUser();
    this.getFollowing();
  }

  getUser = () => {
    axios.get(`https://api.github.com/users/${this.state.myuserName}`)
    .then(res => {
      console.log("jt App.js: getUser: res.data",res.data)
      this.setState({
        userData: res.data
      })
    })
    .catch(err => {
      console.log("jt App.js: getUser: error", err)
    })
  }

  getFollowing = () => {
    axios.get(`https://api.github.com/users/${this.state.myuserName}/following`)
    .then(res => {
      console.log("jt App.js: getFollowing: res.data", res.data);
      let followData = res.data;
      followData.forEach(i => {
        let followingUserName = i.login;
        axios.get(`https://api.github.com/users/${followingUserName}`)
        .then(res => {
          let userData = res.data;
          this.setState({
            followData: [ ...this.state.followData, userData]
          })
          console.log(this.state.followData)
        })
        .catch(err => console.log("jt App.js getFollowing: followData: error", err))
      })
    })
    .catch(err => console.log("jt App.js: getFollowing: error", err))
  }




  render() {
    return (
      <div className="container">
       
       <div>
         <CardList 
         userData={this.state.userData}
         followData={this.state.followData}/>
       </div>
      </div>
    );
  }
  
}

export default App;
