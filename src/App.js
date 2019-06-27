import React from 'react';
// import logo from '/logo.svg'
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
// import Cards from './Cards';
// import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return(
  <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
      {/* <Route path="/cards" component={Cards}/> */}
      </Switch>
      </div>
      </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
// import React from 'react';
// import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'

// function App(){
//   return(
//     <div>
//       <CardGroup>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Lexus</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>BMW</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Dodge</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
// </CardGroup>
// <CardGroup>
// <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Toyota</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Honda</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>RAM</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
// </CardGroup>
//     </div>
//   )
// };

// export default App;