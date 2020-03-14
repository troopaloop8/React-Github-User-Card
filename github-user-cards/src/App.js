import React from 'react';
import './App.css';
import axios from "axios";
// import GitCard from './components/GitCard';
import CardList from './components/CardList';

class App extends React.Component {

  state = {
    userData: [],
    followData: [],
    myuserName: "troopaloop8",
    search: ''
  }

  componentDidMount() {
    this.getUser(this.state.myuserName);
    this.getFollowing(this.state.myuserName);
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

  handleInput = e => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      myuserName: this.state.search
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.myuserName !== this.state.myuserName) {
      this.setState({
        userData: [],
        followData: []
      })
      this.getUser(this.state.myuserName);
      this.getFollowing(this.state.myuserName);
    }
  }


  render() {
    return (
      <div className="container">
        <div className="search-bar">
          <div>
          <input 
            type="text"
            value={this.myuserName}
            name="myuserName"
            placeholder="enter github handle"
            onChange={this.handleInput} />
          </div>
          <form onSubmit={this.handleSubmit}>
            
            <button className="button" type="submit">Get Github Data</button>
          </form>
        </div>
       
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
