import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import TwitterIcon from 'mdi-react/TwitterIcon';
import styled, { injectGlobal } from 'styled-components';
import { darken } from 'polished';
import ReactIcon from '../../react-icon';

const theme = createMuiTheme();

// Global style
// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 75px 0 0;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    min-height: calc(100vh - 3em);
    flex-direction: column;
}
`;

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #fafafa;
    padding: 5px;
  }
`;

const CenterAlignedSiteName = styled(Typography)`
  && {
    text-align: center;
    font-size: 2.5em;
    line-height: 1.2em;
    font-weight: 700;
    color: #424242;
  }
`;

const StickyFooter = styled.footer`
position: fixed;
bottom: 0;
left: 0;
right: 0;
background-color: #eee;
padding: 1em 4em;
text-align: center;
color: ${darken(0.3, '#eee')};
font-family: 'Roboto Condensed', sans-serif;
`;

const DefaultLayout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <StyledAppBar>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <CenterAlignedSiteName><TwitterIcon /> + <ReactIcon /></CenterAlignedSiteName>
          </Grid>
        </Grid>
      </StyledAppBar>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          {children}
        </Grid>
        <StickyFooter>
          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              &copy; 2017 Copyright Text
            </Grid>
          </Grid>
        </StickyFooter>
      </Grid>
    </div>
  </MuiThemeProvider>
);

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

DefaultLayout.defaultProps = {
  children: '<h4>Default Layout</h4>',
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
