import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import SearchComponent from '../../components/search';
import * as searchActions from './search.actions';

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevText: '',
      params: {
        result_type: props.result_type || 'popular',
        q: '',
      },
    };

    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(value) {
    const { params } = this.state;
    params.q = value;
    if (value && value.length > 4 && value !== this.state.prevText) {
      this.setState({
        prevText: value,
        params: {
          ...this.state.params,
          q: value,
        },
      });
      this.props.isSearching();
      this.props.triggerSearch(params);
    }
  }

  render() {
    return (
      <SearchComponent
        inputChanged={this.inputChanged}
        fieldDirty={this.props.isDirty}
        isSearchInProgress={this.props.isBusySearching}
      />
    );
  }
}

SearchContainer.propTypes = {
  result_type: PropTypes.string,
  isSearching: PropTypes.func.isRequired,
  isDirty: PropTypes.func.isRequired,
  isBusySearching: PropTypes.bool.isRequired,
  triggerSearch: PropTypes.func.isRequired,
};

SearchContainer.defaultProps = {
  result_type: 'popular',
};

function mapStateToProps(state) {
  return {
    ...state.search,
  };
}

function mapDispatchToProps(dispatch) {
  const bound = bindActionCreators(searchActions, dispatch);

  return bound;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
