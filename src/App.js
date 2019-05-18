import React, {Component} from 'react';
import './App.css';
import Resume from './components/resume'
import axios from 'axios';
import request from './utils/request'



class App extends Component {
  state = {
    data: [],
    xhr: null,
  } 
  
  
  
  
  componentDidMount() {
    // this.fetchData()
    // axios.get('npm')  
    // .then(response => {
    //   console.log(response.data);
    // })
    // .catch(error=>{
    //   console.log(error);
    // });


    
  }
  
  fetchData = async () => {
    // const instance = axios.create({
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    //   baseURL: 'https://www.carqueryapi.com/api/0.3'
    // });  
    // const res = await instance.get('/?callback=?&cmd=getMakes')
    // this.setState({
    //   data: res,
    // })

        axios.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
    .then(response => {
      const data = response.data.map(item=>{
        return {
        }
          })
      console.log(response.data);
      this.setState({
        data,
      })
    })
    .catch(error => {
      console.log(error);
    });

    // var request = require('request');
    // request('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    // });

    // fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes', {'mode': 'no-cors'})
    //   .then(data => data.json())
    //   .then((data) => { this.setState({ data: data }) });
     
    // fetch("https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes")
    //   .then(data => data.json())
    //   .then((data) => { this.setState({ data}) });
      

  }

  
  render(){
    let image = 'https://via.placeholder.com/300x300.png';
    return (
      <Resume image={image}/>
    );
  }
}

export default App;
