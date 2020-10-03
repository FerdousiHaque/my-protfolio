import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://fersousikucse16.files.wordpress.com/2020/06/02.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ferdousi Haque</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I was born in Khulna, Bangladesh. I’ve spent most of my life in Khulna. I recently completed internship from W3 Engineers Ltd. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>2 No. Police Line, Khulna</p>
            <h5>Phone</h5>
            <p>+8801712404421</p>
            <h5>Email</h5>
            <p>ferdousi1628@cseku.ac.bd</p>
            <h5>Web</h5>
            <p>https://fersousikucse16.wordpress.com/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2013}
              schoolName="Khulna Govt. Girls'  Collage, Khulna"
              schoolDescription="I completed my HSC from this reputed collage. "
               />

               <Education
                 startYear={2016}
                 endYear={2020}
                 schoolName="Khulna University"
                 schoolDescription="I completed my BSc. Engineering in Computer Science and Engineering from Khulna University. "
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Intern Engineer"
              jobDescription="I completed 5 months internship from W3 Engineers Ltd. I also worked from home during my internship."
              />
            
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="Python"
                    progress={65}
                    />
                    <Skills
                      skill="JS"
                      progress={40}
                      />
                      <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
