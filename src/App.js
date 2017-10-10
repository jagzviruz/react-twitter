import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Import Application Layouts */
import DefaultLayout from './layouts/default';

/* Import Page containers */
import Home from './containers/home';
import About from './containers/about';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <DefaultLayout><Home /></DefaultLayout>} />
        <Route exact path="/about" render={() => <DefaultLayout><About /></DefaultLayout>} />
      </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
