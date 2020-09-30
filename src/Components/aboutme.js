import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <Grid>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(../assets/images/location.png)'}} >
            Location Searching</CardTitle>
            <CardText>
            where user can search different location and user can see the location details with image. I deploy this web app in Docker.
            Programming Languages: python-flask, html, css, mysql
            </CardText>
            <CardActions border>
              <Button colored href=" https://github.com/FerdousiHaque/search-flask-docker">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn.24.co.za/files/Cms/General/d/5728/4911bc72466a46809894c4fa94e50b63.jpg) center / cover'}} >Weather Application</CardTitle>
            <CardText>
            It is a single page weather application. The webpage will show some basic weather information based on user’s current location. I use an api to get the data
            Programming Languages: javaScript, html, css</CardText>
            <CardActions border>
              <Button colored href="https://github.com/FerdousiHaque/local-weather-api">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.todayifoundout.com/wp-content/uploads/2010/02/gold-dollar-sign.jpg) center / cover'}} >Income-Expanse Tracker</CardTitle>
            <CardText>
            It can add/delete your daily expenditure/income like food, credit card bill, salary etc. Other properties of this application I use vue.js for interactivity and local storage for data saving and storage is persists even if user leave the website.
            Programming Languages: html, vue.js
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/FerdousiHaque/income-expence-vue.js">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </Grid>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <Grid>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#21618c', height: '176px', background: 'url(https://static.toiimg.com/photo/msid-51767839/51767839.jpg?resizemode=4&width=400) center / cover'}} >Call Doctor APP</CardTitle>
            <CardText>
            where user has an account whether he is patient or doctor and they can update their account information. Patient can search and contract with doctor by calling and see doctor’s qualification, location in google map. 
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/FerdousiHaque/KU_CSE_APL__2017_callDoctor">GitHub</Button>
              <Button colored href="https://www.youtube.com/watch?v=XoV4xnJrJn4#action=share">YouTube</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#21618c', height: '176px', background: 'url(https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-list-store-marketing-commerce-online-shop-43466.png) center / cover'}} >Shopping Tracker APP</CardTitle>
            <CardText>
            where user has an account. User can add their daily shopping items and the app can calculate total. User can also update and delete there shopping list. It works both online and offline properly. User can also use any languages.
            Programming Languages: Java using FireBase
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/FerdousiHaque/shop_app">GitHub</Button>
              <Button colored href="https://www.youtube.com/watch?v=YXjNN5fS0p0#action=share">YouTube</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#21618c', height: '176px', background: 'url(https://icon-library.com/images/list-icon-png/list-icon-png-27.jpg) center / cover'}} >Add Task APP</CardTitle>
            <CardText>
            where user has an account. . User can add their daily task. User can also update and delete there task when it is done. It works both online and offline properly. User can also use any languages.
            Programming Languages: Java using FireBase  
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/FerdousiHaque/task_app">GitHub</Button>
              <Button colored href="https://www.youtube.com/watch?v=E7rG2DcUY_s#action=share">YouTube</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </Grid>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <Grid>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C4E0BAQGt72dvhq4yRA/company-logo_200_200/0?e=1609372800&v=beta&t=2C4W4PihK0jjhENeIfaMBxYqZjRXBecu6bwoQSZ48do) center / cover'}} >Java Programming</CardTitle>
            <CardText>
            Java Programming: Solving Problems withSoftwarean online non-credit course authorized by Duke University
            </CardText>
            <CardActions border>
              <Button colored href="https://www.coursera.org/account/accomplishments/certificate/EQKBJNA466LV">Credential URL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" href="https://www.coursera.org/account/accomplishments/certificate/EQKBJNA466LV"/>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C4E0BAQGt72dvhq4yRA/company-logo_200_200/0?e=1609372800&v=beta&t=2C4W4PihK0jjhENeIfaMBxYqZjRXBecu6bwoQSZ48do) center / cover'}} >Python for Data Science</CardTitle>
            <CardText>
            Python for Data Science and AI an online non-credit course authorized by IBM
            </CardText>
            <CardActions border>
              <Button colored href="https://www.coursera.org/account/accomplishments/certificate/NABEQDA3ZX97">Credential URL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" href="https://www.coursera.org/account/accomplishments/certificate/NABEQDA3ZX97"/>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C4E0BAQGt72dvhq4yRA/company-logo_200_200/0?e=1609372800&v=beta&t=2C4W4PihK0jjhENeIfaMBxYqZjRXBecu6bwoQSZ48do) center / cover'}} >Git and GitHub</CardTitle>
            <CardText>
            Introduction to Git and GitHub an online non-credit course authorized by Google</CardText>
            <CardActions border>
              <Button colored href="https://www.coursera.org/account/accomplishments/certificate/2G34GBMRAYH6">Credential URL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" href="https://www.coursera.org/account/accomplishments/certificate/2G34GBMRAYH6"/>
            </CardMenu>
          </Card>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C4E0BAQGt72dvhq4yRA/company-logo_200_200/0?e=1609372800&v=beta&t=2C4W4PihK0jjhENeIfaMBxYqZjRXBecu6bwoQSZ48do) center / cover'}} >Databases and SQL</CardTitle>
            <CardText>
            Databases and SQL for Data Science an online non-credit course authorized by IBM and offered through Coursera
            </CardText>
            <CardActions border>
              <Button colored href="https://www.coursera.org/account/accomplishments/certificate/P4ADMJXLJT4S">Credential URL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" href="https://www.coursera.org/account/accomplishments/certificate/P4ADMJXLJT4S"/>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C4E0BAQGt72dvhq4yRA/company-logo_200_200/0?e=1609372800&v=beta&t=2C4W4PihK0jjhENeIfaMBxYqZjRXBecu6bwoQSZ48do) center / cover'}} >Responsive Design</CardTitle>
            <CardText>
            Advanced Styling with Responsive Designan online non-credit course authorized by University of Michigan
            </CardText>
            <CardActions border>
              <Button colored href="https://www.coursera.org/account/accomplishments/certificate/ZSZ86V6DPCGZ">Credential URL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" href="https://www.coursera.org/account/accomplishments/certificate/ZSZ86V6DPCGZ"/>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C4E0BAQGt72dvhq4yRA/company-logo_200_200/0?e=1609372800&v=beta&t=2C4W4PihK0jjhENeIfaMBxYqZjRXBecu6bwoQSZ48do) center / cover'}} >Speaking English</CardTitle>
            <CardText>
            Speak English Professionally: In Person, Online and On the Phone an online non-credit course authorized by Georgia Institute of Technology
            </CardText>
            <CardActions border>
              <Button colored href="https://www.coursera.org/account/accomplishments/certificate/7SP396TSA8N8">Credential URL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" href="https://www.coursera.org/account/accomplishments/certificate/7SP396TSA8N8"/>
            </CardMenu>
          </Card>
        </Grid>
        
      )
    } else if(this.state.activeTab === 3) {
      return (
        <Grid>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C560BAQHli6etYJTCrA/company-logo_200_200/0?e=1609372800&v=beta&t=GUMrOdY3o-QaWs681vFRBFqH5y6wlsxfVavpseF99gs) center / cover'}} >Python (Basic)</CardTitle>
            <CardText>
            Covers topics topics of Python language such as Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes.
            </CardText>
            <CardActions border>
              <Button colored href="https://www.hackerrank.com/certificates/59da45bbdbf7">Credential URL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" href="https://www.hackerrank.com/certificates/59da45bbdbf7"/>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C560BAQHli6etYJTCrA/company-logo_200_200/0?e=1609372800&v=beta&t=GUMrOdY3o-QaWs681vFRBFqH5y6wlsxfVavpseF99gs) center / cover'}} >Java (Basic)</CardTitle>
            <CardText>
            Cover basic topics of Java language such as classes, data structures, inheritance, exception handling, etc.
            </CardText>
            <CardActions border>
              <Button colored href="https://www.hackerrank.com/certificates/1f27c6ceb7c3">Credential URL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" href="https://www.hackerrank.com/certificates/1f27c6ceb7c3"/>
            </CardMenu>
          </Card>
        </Grid>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web Development</Tab>
          <Tab>Android</Tab>
          <Tab>E-Learning</Tab>
          <Tab>HackRank</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default About;
