import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const TweetResultBox = styled(Card)`
  // margin: 15px;
  // padding: 15px;
`;

const TweetHeader = styled(CardHeader)`
  && {
    padding-bottom: 0;
  }
`;

const TweetResult = props => (
  <TweetResultBox elevation={4}>
    {props.user ?
      <TweetHeader
        avatar={
          <Avatar
            src={props.user.profile_image_url}
          />
        }
        title={props.user.name}
        subheader={props.created_at}
      />
      : ''}
    <CardContent>
      <Typography component="p">
        {props.text}
      </Typography>
    </CardContent>
  </TweetResultBox>
);


TweetResult.propTypes = {
  text: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default TweetResult;
