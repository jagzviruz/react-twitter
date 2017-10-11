import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import SearchContainer from '../search';
import ResultContainer from '../results';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <SearchContainer />
        </Grid>
        <Grid item>
          <ResultContainer />
        </Grid>
      </Grid>
    );
  }
}

// export default connect({})(Home);
export default Home;
