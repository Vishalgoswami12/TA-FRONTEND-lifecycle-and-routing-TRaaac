import React from 'react';
import Aside from './Aside';
import Header from './Header';
import Home from './Home';
import Article from './Article';
import Contact from './Contact';
import Help from './Help';
import People from './People';
import SingleArticle from './SingleArticle';

import { BrowserRouter, Route } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aside: true,
    };
  }

  handleClick = () => {
    this.setState({ aside: !this.state.aside });
  };
  render() {
    return (
      <BrowserRouter>
        <Header state={this.state.aside} handleClick={this.handleClick} />
        <div className="app">
          {this.state.aside ? <Aside /> : ''}

          <RouterApp />
        </div>
      </BrowserRouter>
    );
  }
}

function RouterApp() {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/people">
        <People />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/article">
        <Article />
      </Route>
      <Route path="/post/:slug" component={SingleArticle} />
    </>
  );
}

export default Main;