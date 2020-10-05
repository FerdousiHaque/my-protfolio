import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mypic from '../assets/images/me.jpg';
import Ripple from './index';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <Ripple>
            <img
              src={mypic}
              alt="avatar"
              className="avatar-img"
              />
            </Ripple>
            <div className="banner-text">
              <Ripple>
              <h1>Learner of Web & Android</h1>
            <hr/>
          <p>HTML | CSS | Bootstrap | JavaScript | React | Android | FireBase | Python | MySQL</p>
          </Ripple>
        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ferdousi-haque-153493137/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/FerdousiHaque" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://join.skype.com/invite/BrzQYHAGaOE7" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-skype" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://www.youtube.com/channel/UCjhJSg6pAhpMf7XTtXhzjMg?view_as=subscriber" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
