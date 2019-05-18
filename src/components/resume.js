import React from 'react'

var bgColors = { "title": "#4e4d4d",
                    "download": "#454444",
                    "desc": "#3c3c3c",
                    "descbutton": "#373737",
                    "home":"#13BD9B",
                    "resume":"#1599DE",
                    "portfolio":"#B057BB",
                    "contacts":"#FF7F0C",
                    "feedback":"#FF4C3A",
                    "blog":"#EAA915",
                    "personalinfo":"#EFEFEF",
};

class Resume extends React.Component {
    
    render(){
        let { image } = this.props
        return (
            <div className="container">
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="d-flex ">
            <img src={image} className="img-fluid"/>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column bg-secondary fill-height-or-more" >
              <div className="pl-4 d-flex flex-row buttonn " style={{backgroundColor: bgColors.title}} >
                <div className="mr-auto aligner " ><h2>SAMUEL ANDERSON</h2></div>
                {/* <div className="pl-5 pr-5 aligner icon1" style={{backgroundColor: bgColors.download}} ><i class="fa fa-download" ></i></div> */}
                <div className="pl-5 pr-5  aligner icon1" style={{backgroundColor: bgColors.download}} ><i className="fa fa-download"></i></div>
              </div>
   
              <div className="pl-4 d-flex flex-row buttonn" style={{backgroundColor: bgColors.desc}}>
                <div className="mr-auto aligner"><h2>THE EXPERIENCED UI/UX DESIGNER</h2></div>
                <div className="pl-5 pr-5  aligner " style={{backgroundColor: bgColors.descbutton}} ><i className="fab fa-behance"></i></div>
              </div>
              <div className="d-flex flex-row  bg-primary row3 flex-wrap ">
                <div className="d-flex  flex-column  " style={{backgroundColor: bgColors.home}} ><i className="far fa-flag "></i><span className=""><h6>HOME</h6></span></div>
                <div className="d-flex  flex-column  " style={{backgroundColor: bgColors.resume}}><i className="fas fa-user-graduate" ></i><h6>RESUME</h6></div>
                <div className="d-flex  flex-column " style={{backgroundColor: bgColors.portfolio}}><i className="fas fa-archive" ></i><span><h6>PORFOLIO</h6></span></div>
                <div className="d-flex  flex-column " style={{backgroundColor: bgColors.contacts}}><i className="fas fa-map-marker-alt" ></i><h6>CONTRACTS</h6></div>
                <div className="d-flex  flex-column " style={{backgroundColor: bgColors.feedback}}><i className="fas fa-headphones" ></i><h6>FEEDBACK</h6></div>
                <div className="d-flex  flex-column " style={{backgroundColor: bgColors.blog}}><i className="fas fa-pen-nib" ></i><h6>BLOG</h6></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="row no-gutters">
                <div className="d-flex flex-fill flex-column  bd-highlight padding-around ">
                <div className="row no-gutters">
                    <div className="col-md-12">
                      <h3 className="">GRIDUS RESUME HTML TEMPLATE</h3>
                      <h6 className="redh6">PERFECT FOR CV/RESUME OR PORTFOLIO WEBSITE</h6>
                    </div>
                </div>
                <br/>                   
                <div className="row no-gutters">
                    {/* <div className="d-flex flex-fill  padding-around bg-success"> */}

                      <div className="col-md-4 1">
                        <div className="row">
                          <div className="col-md-3 "><i className="far fa-clock icon2"></i></div>
                          <div className="col-md-9">
                            <h4>MODERN</h4>
                            <p>Lorem ipsum dolor sit amet, usu veniam feugiat ea, ea ius dicat choro quodsi, quidam semper viderer mei no. Utamur ornatus mel ei, vim an reque cetero aperiri, cu ubique graeci definitionem has.  </p></div>
                          </div>
                      </div>
                      <div className="col-md-4 2">
                        <div className="row">
                          <div className="col-md-3 "><i className="fas fa-chart-pie icon2"></i></div>
                          <div className="col-md-9">
                            <h4>SIMPLE CV</h4>
                            <p>Lorem ipsum dolor sit amet, usu veniam feugiat ea, ea ius dicat choro quodsi, quidam semper viderer mei no. Utamur ornatus mel ei, vim an reque cetero aperiri, cu ubique graeci definitionem has.  </p></div>
                          </div>
                      </div>
                      <div className="col-md-4 3">
                        <div className="row">
                          <div className="col-md-3 "><i className="fas fa-cogs icon2"></i></div>
                          <div className="col-md-9">
                            <h4>RESPONSIBILITY</h4>
                            <p>Lorem ipsum dolor sit amet, usu veniam feugiat ea, ea ius dicat choro quodsi, quidam semper viderer mei no. Utamur ornatus mel ei, vim an reque cetero aperiri, cu ubique graeci definitionem has.  </p></div>
                          </div>
                      </div>
                
                </div>
                </div>
            </div>
            
          
          </div>
          <div className="col-md-4 " style={{backgroundColor: bgColors.personalinfo}}>          
            
            <div className="row no-gutters">
                <div className="col-md-12 ">
                  <div className="d-flex padding-around flex-column " >
                    <h3 >PERSONAL INFO</h3>
                    <div className="d-flex justify-content-between"><span>NAME:</span><p>Samuel Anderson</p></div>
                    <div className="d-flex justify-content-between"><span>BIRTH DATE:</span><p>09/05/1996</p></div>
                    <div className="d-flex justify-content-between"><span>ADDRESS:</span><p> Hogwarts Castle, Highlands, Scotland, Great Britain</p></div>
                    <div className="d-flex justify-content-between"><span>PHONE:</span><p>+66875014275</p></div>
                    <div className="d-flex justify-content-between"><span>EMAIL:</span><p>bsrisompong@gmail.com</p></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default Resume