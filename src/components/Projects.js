import React from 'react';

const Projects = () => {
  return (
    <section>
      <h1>My Work</h1>
      <h2>Computer and Data Science Projects</h2>
      <div className="secs">

        <div className='unit'>
          <h3>Credit Card Fraud Analysis</h3>
          <div>
            <img src="./images/creditcard.png" alt="creditcard"/>
          </div>
          <div>
              <a href="https://github.com/enochngan/credit_card_fraud_analysis/blob/main/Credit%20Card%20Dataset%20Analysis.ipynb" download className="downloads" target="_blank">
                Download Project
              </a>
              <p> Aug 2024</p>
              <p><b>Skills Used:</b> SQL, Python, pandas, matplotlib, seaborn, Jupyter Notebooks
              </p>
              <p>
              In this project, "Credit Card Dataset Analysis," I aim to analyze credit card fraud trends using a dataset of 568,630 
              transactions made by European cardholders in 2023. I utilize SQL for data manipulation and analysis, along with Python 
              libraries such as Seaborn and Matplotlib for visualizing the results. I focuses on identifying use cases, shortcomings, 
              and patterns in fraud detection by analyzing anonymized predictive features and transaction classes. 
              </p>
            </div>
        </div>

        <div className='unit'>
          <h3>Weather and Map Locator Website</h3>
          <div>
            <img src="./images/weather.png" alt="weather"/>
          </div>
          <div>
              <a href="https://github.com/enochngan/weather-app/blob/main/index.html" download className="downloads" target="_blank">
                Download Project
              </a>
              <p> Aug 2024</p>
              <p><b>Skills Used:</b> Front-end Development, JavaScript, HTML, CSS, Restful APIs
              </p>
              <p>
              In this project, "Weather and Map Locator," I use RESTful APIs to retrieve the weather and location of a user-entered city. This project uses JavaScript, HTML, and CSS to build the website.   
              </p>
            </div>
        </div>

        <div className='unit'>
          <h3>Degree Distributions of Busiest Airports</h3>
          <div>
            <img src="./images/airport.jpg" alt="airport"/>
          </div>
          <div>
              <a href="https://github.com/enochngan/busiest-airports-degree-distribution/blob/main/README.md" download className="downloads" target="_blank">
                Download Project
              </a>
              <p> Mar-May 2024</p>
              <p><b>Skills Used:</b> Rust, Degree Distribution
              </p>
              <p>
              In this project, I analyzed the busiest airports by using degree distribution to quantify airport connectivity based on routes. I demonstrated my ability to process large datasets, analyze network statistics, and implement graph algorithms like Breadth-First Search for finding the shortest path between airports. The project highlights my expertise in Rust and graph theory applied to real-world transportation data.
              </p>
            </div>
        </div>

        <div className='unit'>
          <h3>Predicting Heart Attacks Model</h3>
          <div>
            <img src="./images/heartattack.png" alt="heartattack"/>
          </div>
          <div>
              <a href="https://github.com/enochngan/heart-attack-predictions/blob/main/Heart%20Attack%20Predictions%20-%20DT%2C%20LR%2C%20KNN.ipynb" download className="downloads" target="_blank">
                Download Project
              </a>
              <p> Mar 2024</p>
              <p><b>Skills Used:</b> Python, pandas
              </p>
              <p>
                In this heart attack prediction project, I utilized decision trees, logistic regression, and k-nearest neighbors to develop machine learning models that predict heart attack likelihood. By handling a medical dataset, I demonstrated my skills in feature selection, model comparison, and evaluation using accuracy metrics. This project showcases my ability to apply data science techniques to real-world health data, creating valuable predictive tools.   
              </p>
            </div>
        </div>

        <div className='unit'>
          <h3>AI 8-Puzzle Solver </h3>
          <div>
            <img src="./images/puzzle.png" alt="puzzle"/>
          </div>
          <div>
              <a href="https://github.com/enochngan/eight-puzzle-artificial-intelligence-algorithm" download className="downloads" target="_blank">
                Download Project
              </a>
              <p>Aug 2023</p>
              <p><b>Skills Used:</b> Python, Breadth-First Search, Depth-First Search
              </p>
              <p>
              In this project, I developed an artificial intelligence algorithm to solve random 8-puzzle games using five different algorithms, including A* and Breadth-First Search, achieving solutions in under 0.1 seconds. I demonstrated my expertise in AI problem-solving and algorithm optimization. This project showcases my ability to apply advanced search techniques in Python to solve complex computational puzzles efficiently.
              </p>
            </div>
        </div>
      </div>
      <p> <i>Scroll left for more projects. </i></p>

      <h2>Case and Consulting Studies</h2>
      <div className="secs">
          <div className='unit'>
            <h3> Directed Study: The Shift in Security Perception Post-9/11</h3>
            <div className="paper-preview">
              <iframe
                src="./papers/directed_study.pdf"
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
                src="./papers/capstone.pdf"
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
                src="./papers/rxpass.pdf"
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
      <p> <i>Scroll left for more projects. </i></p>
      <br></br>

    </section>
  );
};

export default Projects;
