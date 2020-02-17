import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>BS in Information Technology  <span>2013-2017</span></h2>
                        <p>I received my BS in information Technology in 2017 with a focus in Networking. While enrolled i learned valuable industry standards such as:
                        analyze a problem and identify and define the computing requirements appropriate to its solution
design, implement, and evaluate a computer-based system, process, component, or program
identify and analyze user needs and take them into account in the selection, creation, evaluation, and administration of computer-based systems
integrate IT-based solutions into the user environment
understand best practices/standards and their application
create effective project plans  </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Masters in Information Systems <span>2017-2019</span></h2>
                        <p>During my pursuit of my MS in Computer Information Systems I was able to receive world class training that provided me with Advanced knowledge in the analysis and documentation of requirements for architecture, design, and implementation of computer applications systems.
Proficiency in software and computing skills as they pertain to the design and implementation of database systems, data communications, systems analysis, and design.
Competence sufficient to identify current and emerging information technologies that may have strategic value for enterprise; assess where those technologies have value; and manage the implementation of those technologies in the enterprise .</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>General Assembly <span> Dec-2019</span></h2>
                        <p>General Assembly empowered me to follow my dream of expanding knowledge in technology by teaching me toBuild rich, interactive, full-stack apps with key programming languages and dive into algorithms, data structures, design patterns, APIs, and more. I received hands-on with leading front-end web development and back-end web development languages: HTML, CSS, JavaScript, Python, Django,  React, Angular, and SQL. I was abel to learn the skills to discuss and use data structures and algorithms to solve real-world problems </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
