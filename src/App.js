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
      console.log('objlst')
      console.log(objlst)
      this.setState({data: objlst})




      // แต่ละประเทศ --> groupby make_country --> country key object
      const groupbyCountry = this.groupby(objlst,'make_country')
      console.log(groupbyCountry)

      
      const numIdCountry = _.mapValues(groupbyCountry,(arr)=>{
        return _.map(arr,(ob)=>{return ob.make_id}).length
      })
      console.log(numIdCountry)  // a. จำนวนยี่ห้อรถแต่ละประเทศ
      const makeIdEachCountry = _.mapValues(groupbyCountry,(arr)=>{
        return _.map(arr,(ob)=>{return ob.make_id})
      })
      console.log(makeIdEachCountry)  // b. แต่ละยี่ห้อที่แต่ละประเทศผลิค


      var usa = groupbyCountry.USA
      var usaId = _.map(usa, (value)=>{return value.make_id}) //c. ยี่ห้อรถแต่ละยี่ห้อที่ผลิตใน USA
      console.log(usaId.length)  //c. จำนวนยี่ห้อที่ USA ผลิต
      console.log(usaId)         //c. แต่ละยี่ห้อที่ USA ผลิต
      
      var europe = ["Italy","Germany","France","Romania","Netherlands","Sweden","Switzerland","Spain","Czech Republic","Austria","Serbia","Ukraine","Denmark"]
      var filter = objlst.filter((itm)=>{return europe.includes(itm.make_country) })
      // console.log(filter)
      var europeId = _.map(filter, (value)=>{return value.make_id}) //d. ยี่ห้อรถแต่ละยี่ห้อที่ผลิตใน Europe
      console.log(europeId.length)  //d. จำนวนยี่ห้อที่ Europe ผลิต
      console.log(europeId)         //d. แต่ละยี่ห้อที่ Europe ผลิต
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
