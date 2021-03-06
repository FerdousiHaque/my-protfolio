import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
     
        <Grid>
          <Cell col={6}>
            <h2>Ferdousi Haque</h2>
             <h6 style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             I am a dreamer and believer. I eagerly wait to learn new things. I can speak well both in English and Bangla. Another quality
             I like to take challenge and overcome the challenge by investing time and effort. I find it difficult to refuse people when it’s about helping them.
             </h6>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +8801712404421
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    +8801915936420
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ferdousi1628@cseku.ac.bd
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    https://join.skype.com/invite/BrzQYHAGaOE7
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      
    )
  }
}

export default Contact;
