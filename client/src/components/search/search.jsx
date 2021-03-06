import React from 'react';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';
import Grid from 'material-ui/Grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

import LoaderIcon from './loader';

const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
const SearchHolder = styled(Grid)`
  &&{
    position: relative;
    width: 45%;
    flex-basis: 45%;
  }
`;

const SearchInput = styled(Input)`
  input {
    margin-right: 80px;
  }
`;

const SearchComponent = ({ inputChanged, isSearchInProgress = false, fieldDirty }) => {
  const throttledInputChanged = throttle(({ target }) => {
    const { value } = target;

    if (value) {
      inputChanged(value);
    }
  }, 1000);
  const throttleFieldDirty = throttle(({ target }) => {
    const { value } = target;

    fieldDirty(value);
  }, 1000);
  return (
    <Grid container justify="center">
      <SearchHolder item xs={8}>
        <SearchInput
          autoFocus
          fullWidth
          placeholder="Search"
          onKeyUp={(e) => { e.persist(); throttleFieldDirty(e); }}
          onChange={(e) => { e.persist(); throttledInputChanged(e); }}
          inputProps={{
            'aria-label': 'Search',
          }}
          disabled={isSearchInProgress}
        />
        <StyledIconButton>
          {isSearchInProgress ?
            <LoaderIcon />
            :
            <SearchIcon />}
        </StyledIconButton>
      </SearchHolder>
    </Grid>
  );
};

SearchComponent.propTypes = {
  fieldDirty: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  isSearchInProgress: PropTypes.bool.isRequired,
};

export default SearchComponent;
