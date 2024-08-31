import React from 'react';

const Projects = () => {
  return (
    <section>
      <h1>My Work</h1>
      <h2>Computer and Data Science Projects</h2>
      <div className="secs">
        <p>Description of project 1.</p>
      </div>
      <h2>Case and Consulting Studies</h2>
      <div className="secs">

          <div className='unit'>
            <h3> Directed Study: The Shift in Security Perception Post-9/11</h3>
            <div className="paper-preview">
              <iframe
                src="/papers/directed_study.pdf"
                title="Directed Study Preview"
                width="100%"
                height="300px"
                style={{border: '1px solid #ccc'}}
              />
            </div>
            <div>
              <a href="/papers/directed_study.pdf" download className="downloads">
                Download Paper
              </a>
              <p> May-June 2024</p>
              <p>Conducted under the guidance and help of Professor Andrew David, a Political Science professor at Boston University. Utilized
                multiple research techniques such as process tracing and case studies, gathering my data through several archived documents and survey data.
              </p>
              <p>
                "The Shift in Security Perception Post-9/11" discusses the profound impact of the 9/11 attacks on U.S. national security strategies. 
                It explores how the traumatic events led to significant changes in the perception and implementation of security measures, highlighting a shift 
                from the pre-9/11 ideal of complete security to a more realistic approach focused on managing risks and responding to threats. The paper also 
                critiques certain post-9/11 security measures as being more about providing psychological comfort to the public than effectively preventing future attacks.   
              </p>
            </div>
          </div>

          <div className='unit'>
            <h3> Capstone: Fixing the T</h3>
            <div className="paper-preview">
              <iframe
                src="/papers/capstone.pdf"
                title="Capstone Preview"
                width="100%"
                height="300px"
                style={{border: '1px solid #ccc'}}
              />
            </div>
            <div>
              <a href="/papers/capstone.pdf" download className="downloads">
                Download Paper
              </a>
              <p> Jan-May 2024</p>
              <p>Runner-up in College of General Studies Boston Universiy 2024 Capstone with 6 other members. Acted as team coordinator for this team of 7. Utilized
                 case studies, comparative studies, survey research, and experimental empirical research. 
              </p>
              <p>
                 "Transforming the T" by our team, the Transit Policy Reform Group (TPRG), focuses on addressing the systemic issues faced by the Massachusetts Bay Transportation Authority (MBTA), known as the "T." The paper identifies key challenges such as mismanagement, operational inefficiencies, and financial instability, and proposes comprehensive reforms including restructuring the MBTA's governance, implementing new HR management systems, and revising financial strategies to improve service delivery and long-term sustainability. The recommendations are designed to modernize the MBTA and enhance its ability to serve the residents of Greater Boston effectively.  
              </p>
            </div>
          </div>

          <div className='unit'>
            <h3> Case Study: Amazon RxPass</h3>
            <div className="paper-preview">
              <iframe
                src="/papers/rxpass.pdf"
                title="RxPass Preview"
                width="100%"
                height="300px"
                style={{border: '1px solid #ccc'}}
              />
            </div>
            <div>
              <a href="/papers/rxpass.pdf" download className="downloads">
                Download Paper
              </a>
              <p> Jan-May 2023</p>
              <p>Runner-up in Boston University Consulting Group's Casing Competition Spring 2023. Worked with 4 other members to present our recommendation.
              </p>
              <p>
              In our recommendation for Market Entry to Amazon's RxPass, we propose they should partner with Eli Lilly to offer insulin through a tiered subscription service to capture market share in the growing online pharmaceutical industry. Our recommendation emphasizes creating an exclusive partnership with Eli Lilly to provide affordable insulin as part of a $25/month RxPremium subscription, targeting Millennials and Gen X who are underserved by recent legislation. We outline a five-year implementation strategy, including market analysis, partnership development, and risk mitigation to position Amazon as a leader in the online pharmacy market.
              </p>
            </div>
          </div>
      </div>
      <p> <i>Scroll for more projects </i></p>
      <br></br>

    </section>
  );
};

export default Projects;
