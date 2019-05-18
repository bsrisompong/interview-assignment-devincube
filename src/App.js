import React, {Component} from 'react';
import './App.css';
import Resume from './components/resume'
import axios from 'axios';
import _ from 'lodash';

// import request from './utils/request'

// https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes

var request = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    baseURL: 'https://www.carqueryapi.com/api/0.3' 
});
  

  


class App extends Component {
  state = {
    data: [
      // {"make_id":"alvis","make_display":"Alvis","make_is_common":"0","make_country":"UK"},
      // {"make_id":"amc","make_display":"AMC","make_is_common":"0","make_country":"USA"},
    ],
    xhr: null,
  } 
  
  componentDidMount() {
    this.fetchData()
    this.groupby(this.data,'make_country')
  }
  
  fetchData = async () => {
    // request.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
    //   .then(response => {
    //     console.log(response.data)
    //     this.setState({data: response.data})
    //   })
    //   .catch(console.log("reject"))

      const resp = await request.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
      const data = resp.data
      // const data = JSON.parse(resp.data)
      console.log(data)
      const scanner = data.split(/[()]+/).filter(e=>e);
      console.log(scanner)
      const objlst = JSON.parse(scanner[1]).Makes
      console.log(objlst)
      this.setState({data: objlst})
      const groupbyCountry = await this.groupby(objlst,'make_country')
      // const groupedd = await () => {_.groupBy(resp.data,'make_country')}
      console.log(groupbyCountry)

  }
  
  groupby = (data,id) => {
      const list = data
      return _.groupBy(list,id)
  }
  

 
  
  render(){
    let image = 'https://via.placeholder.com/300x300.png';
    return (
      <Resume image={image}/>
    );
  }
}

export default App;
