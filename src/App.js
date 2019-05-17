import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';



class App extends React.Component {
  // state = {
  //   data: []
  // } 
  
  // componentDidMount() {
  //   axios.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
  //   .then(response => {
  //     const data = response.data.map(item=>{
  //       return {
          
  //       }
  //         })
  //     console.log(response.data);
  //     this.setState({
  //       data,
  //     })
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }


  
  render(){
    let image = 'https://via.placeholder.com/300x200.png';
    return (
      <div className="container">
        <div className="d-flex">
          <div className="bg-info">
           
          <img src={image} className="" />
          </div>
          <div className="bg-warning flex-fill  flex-row  t comtext-white justify-items-stretch">
              <div className="d-flex p-3 bg-dark flex-fill">
                SAMUEL ANDERSON
                <div className="d-flex justify-content-end">...</div>
              </div>
              <div className="d-flex p-3 bg-secondary flex-fill">
                THE EXPERIENCED UI/UX DESIGNER
                <div className="d-flex justify-content-end">...</div>
              </div>
              <div className="d-flex  bg-light flex-wrap flex-fill ">
                  <div className="d-flex bg-success flex-fill pt-4 pb-4"><i class="fa fa-home"/><p>HOME</p></div>
                  <div className="d-flex bg-info flex-fill"><i class="fa fa-home"/>RESUME</div>
                  <div className="d-flex  flex-fill" style={{backgroundColor: 'purple'}}><i class="fa fa-home"/>PROTFOLIO</div>
                  <div className="d-flex  flex-fill" style={{backgroundColor: 'orange'}}><i class="fa fa-home"/>CONTACTS</div>
                  <div className="d-flex  flex-fill" style={{backgroundColor: 'red'}}><i class="fa fa-home"/>FEEDBACKS</div>
                  <div className="d-flex  bg-warning flex-fill" style={{backgroundColor: 'yellow'}}><i class="fa fa-home"/>BLOG</div>
              </div>
          </div>
        </div>
        <div className="d-flex ">
          <div className="p-2 flex-fill bg-light">
           <h6>
           GRIDUS RESUME HTML TEMPLATE
           </h6>
           <p>
           PERFECT FOR CV/RESUME OR PROTFOLIO WEBSITE
           </p>
           <div className="d-flex"></div>
           <div className="d-flex"></div>
           <div className="d-flex"></div>

          </div>
          <div className="p-2  bg-secondary">
          <h6>
           PERSONAL INFO
           </h6>
           <p></p>
           <p></p>
           <p></p>
           
           <p></p>
           <p></p>
          </div>
  
        </div>
      </div>
    );
  }
}

export default App;
