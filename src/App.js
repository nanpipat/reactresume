import React, { Component } from 'react';

import { Link, Element, scroller } from 'react-scroll';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import CardCom from './component/CardCom.jsx';
import './App.css';


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
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Clarence Taylor</span>
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
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="awards" spy={true} smooth={true} duration={500} >Awards</Link>

              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid p-0">

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
              <h1 className="mb-0">Clarence
            <span className="text-primary">Taylor</span>
              </h1>
              <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
            <a href="mailto:name@email.com">name@email.com</a>
              </div>
              <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fa fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook-f"></i>
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
                  <span className="text-primary">March 2013 - Present</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Web Developer</h3>
                  <div className="subheading mb-3">Intelitec Solutions</div>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">December 2011 - March 2013</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Junior Web Designer</h3>
                  <div className="subheading mb-3">Shout! Media Productions</div>
                  <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">July 2010 - December 2011</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div className="resume-content">
                  <h3 className="mb-0">Web Design Intern</h3>
                  <div className="subheading mb-3">Shout! Media Productions</div>
                  <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">September 2008 - June 2010</span>
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
                  <h3 className="mb-0">University of Colorado Boulder</h3>
                  <div className="subheading mb-3">Bachelor of Science</div>
                  <div>Computer Science - Web Development Track</div>
                  <p>GPA: 3.23</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">August 2006 - May 2010</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div className="resume-content">
                  <h3 className="mb-0">James Buchanan High School</h3>
                  <div className="subheading mb-3">Technology Magnet Program</div>
                  <p>GPA: 3.56</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">August 2002 - May 2006</span>
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
                  <i className="fa fa-html5"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-css3-alt"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-js-square"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-angular"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-react"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-node-js"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-sass"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-less"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-wordpress"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-gulp"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-grunt"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-npm"></i>
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
              <h2 className="mb-5">Awards &amp; Certifications</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  Google Analytics Certified Developer</li>
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  Mobile Web Specialist - Google Certification</li>
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  1<sup>st</sup>
                  Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  1<sup>st</sup>
                  Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  2<sup>nd</sup>
                  Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  1<sup>st</sup>
                  Place - James Buchanan High School - Hackathon 2006</li>
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  3<sup>rd</sup>
                  Place - James Buchanan High School - Hackathon 2005</li>
              </ul>
            </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="fa fa-linkedin-in"></i>
                    </div>
                    <h3 style={{textAlign: "center"}}>Fully Responsive</h3>
                    <p style={{textAlign: "center"}} className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                    <p style={{marginTop:"40px", textAlign: "center", color:"red"}} className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                    <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                    <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                    <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-layers m-auto text-primary"></i>
                    </div>
                    <h3>Bootstrap 4 Ready</h3>
                    <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-check m-auto text-primary"></i>
                    </div>
                    <h3>Easy to Use</h3>
                    <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <CardColumns>
                  <CardCom
                    imgurl=""
                    title="Card title"
                    subtitle="Card subtitle"
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                  />
                  <CardCom
                    imgurl=""
                    title="Card title2"
                    subtitle="Card subtitle2"
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                  />
                  <CardCom
                    imgurl=""
                    title="Card title3"
                    subtitle="Card subtitle3"
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first"
                  />
                  <CardCom
                    imgurl=""
                    title="Card title3"
                    subtitle="Card subtitle3"
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the firstThis is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first"
                  />
                </CardColumns>
                {/* <CardColumns>
                  <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                  </Card>
                  <Card>
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                  </Card>
                  <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                  <Card body inverse color="primary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="secondary">Button</Button>
                  </Card>
                </CardColumns> */}
              </div>
            </div>

          </section>

        </div>

      </div>
    );
  }
}

export default App;
