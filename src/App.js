import React, { Component } from 'react';

import { Link, Element, scroller } from 'react-scroll';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import CardCom from './component/CardCom.jsx';
import CardSkill from './component/CardSkill.jsx';
import './App.css';
import reim from './assets/img/react-cover.png';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: true,
      clname: "collapse navbar-collapse"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  scrollToLanding = elem => {
    scroller.scrollTo(elem, {
      duration: 800,
      delay: 100,
      smooth: true,
    })
  }

  async handleClick() {
    await this.setState({
      activeTab: !this.state.activeTab
    });

    console.log(this.state.activeTab, "VALLLLLLLLLL")

    this.setCLLL();
  }

  setCLLL = val => {

    //console.log(this.state.activeTab ,"VALLLLLLLLLL")
    if (this.state.activeTab == true) {
      this.setState({
        clname: "collapse navbar-collapse"
      })
    }
    else {
      this.setState({
        clname: "collapse navbar-collapse show"
      })
    }

  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "#70A1D7"}} id="sideNav">
          <a className="navbar-brand js-scroll-trigger" onClick= {() => this.scrollToLanding('about')}>
            <span style={{color:"white"}} className="d-block d-lg-none">Nanpipat Klinpratoom</span>
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={ require('./assets/img/avatar.jpg') } alt="" />
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.handleClick} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={this.state.clname} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="about" spy={true} smooth={true} duration={500} >About</Link>

              </li>
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="experience" spy={true} smooth={true} duration={500} >Experience</Link>

              </li>
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="education" spy={true} smooth={true} duration={500} >Education</Link>

              </li>
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>

              </li>
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="interests" spy={true} smooth={true} duration={500} >Interests</Link>

              </li>
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="awards" spy={true} smooth={true} duration={500} >Portfolio</Link>

              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid p-0">

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
              <h1 className="mb-0">Nanpipat
              <span className="text-primary">  </span>
                <span style={{color:"#70A1D7"}}>Klinpratoom</span>
              </h1>
              <div className="subheading mb-5">Samutprakarn · Thailand · (085) 845-5652 · 
            <a href="mailto:nanpipat.k@gmail.com"> nanpipat.k@gmail.com</a>
              </div>
              <p className="lead mb-5">Please call me "TOP". I'm a funny guy and love to do activity , got a leadership , serious when worker. I like to think of something new because it's unique. I always enjoy with problem and never give up until I can fix it.</p>
              <div className="social-icons">
              <a href="https://facebook.com/top18969" target="_blank">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a href="https://github.com/top18969" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="mailto:nanpipat.k@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
                
              </div>
            </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
              <h2 className="mb-5">Experience</h2>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Senior Web Developer</h3>
                  <div className="subheading mb-3">Intelitec Solutions</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{color:"#70A1D7"}}>March 2013 - Present</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Web Developer</h3>
                  <div className="subheading mb-3">Intelitec Solutions</div>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{color:"#70A1D7"}}>December 2011 - March 2013</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Junior Web Designer</h3>
                  <div className="subheading mb-3">Shout! Media Productions</div>
                  <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{color:"#70A1D7"}}>July 2010 - December 2011</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div className="resume-content">
                  <h3 className="mb-0">Web Design Intern</h3>
                  <div className="subheading mb-3">Shout! Media Productions</div>
                  <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{color:"#70A1D7"}}>September 2008 - June 2010</span>
                </div>
              </div>

            </div>

          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
              <h2 className="mb-5">Education</h2>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Srinakarinwirot University</h3>
                  <div className="subheading mb-3">College of social communication innovation</div>
                  <div>Computer For Communication</div>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{color:"#70A1D7"}}>August 2014 - May 2018</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div className="resume-content">
                  <h3 className="mb-0">Debsirin Samutprakarn</h3>
                  <div className="subheading mb-3">Eng - Math Program</div>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{color:"#70A1D7"}}>May 2008 - Feb 2013</span>
                </div>
              </div>

            </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
              <h2 className="mb-5">Skills</h2>

              <div className="subheading mb-3">Programming Languages &amp; Tools</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/cs.png') } alt="" />
                 
                </li>
                <li className="list-inline-item">
                <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/ra.png') } alt="" />
                 
                </li>
                <li className="list-inline-item">
                  <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/al.png') } alt="" />
               
                </li>
                <li className="list-inline-item">
                <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/js.png') } alt="" />
                  
                </li>
                <li className="list-inline-item">
                  <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/sql.png') } alt="" />
                  
                </li>
              </ul>

              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Mobile-First, Responsive Design</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Cross Browser Testing &amp; Debugging</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Cross Functional Teams</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Agile Development &amp; Scrum</li>
              </ul>
              <br />
              <br />
              <CardSkill />
            </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div className="w-100">
              <h2 className="mb-5">Interests</h2>
              <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
              <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
            </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
            <div className="w-100">
              <h2 className="mb-5">Portfolio</h2>
              <div className="row">
                <CardColumns>
                  <CardCom
                    imgurl= {reim}
                    title="Card title"
                    subtitle=" "
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.  natural lead-in to additional content. This content is a little bit longer."
                  />
                  <CardCom
                    imgurl= {reim} 
                    title="Card title2"
                    subtitle=" "
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                  />
                  <CardCom
                    imgurl= {reim}
                    title="Card title3"
                    subtitle=" "
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first"
                  />
                  <CardCom
                    imgurl= {reim}
                    title="Card title3"
                    subtitle=" "
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the firstThis is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first"
                  />
                </CardColumns>
              </div>
            </div>
          </section>

          <hr className="m-0" />

        </div>

      </div>
    );
  }
}

export default App;
