import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class ResultContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div> Results. {this.props.isBusySearching ? 'busy' : 'khali'} { this.props.results.length }</div>
    );
  }
}


ResultContainer.propTypes = {
  isBusySearching: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    tweet: PropTypes.string,
    user: PropTypes.string,
  })),
};

ResultContainer.defaultProps = {
  results: [],
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
