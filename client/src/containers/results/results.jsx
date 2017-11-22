import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import moment from 'moment';

import TweetResult from '../../components/tweet-result';

const MessagingBar = styled(Paper)`
 padding: 5px 15px;
 margin: 0 auto;
 width: 65%;
 &&{
   background-color: #e3f2fd;
  }
`;

class ResultContainer extends Component {
  displayTweetsMessaging() {
    return (
      this.props.results.length === 0 ?
        <MessagingBar elevation={0}>
          No tweets found
        </MessagingBar> :
        ''
    );
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          {
            this.props.isDirty
            ?
            this.displayTweetsMessaging()
            :
            <MessagingBar elevation={0}>
              Search for some tweet
            </MessagingBar>
          }
        </Grid>
        {
          this.props.results.map(result => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={result.id_str}>
              <TweetResult
                text={result.text}
                user={result.user}
                created_at={moment.utc(result.created_at).format('MMM DD, YYYY')}
              />
            </Grid>
          ))
        }

      </Grid>
    );
  }
}


ResultContainer.propTypes = {
  // isBusySearching: PropTypes.bool.isRequired,
  isDirty: PropTypes.bool,
  results: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  })),
};

ResultContainer.defaultProps = {
  results: [],
  isDirty: false,
};

function mapStateToProps(state) {
  return {
    ...state.results,
  };
}

// function mapDispatchToProps(dispatch) {
//   const bound = bindActionCreators(searchActions, dispatch);

//   return bound;
// }

export default connect(mapStateToProps)(ResultContainer);
