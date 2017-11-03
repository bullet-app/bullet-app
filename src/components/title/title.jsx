import React from 'react';

import PropTypes from 'prop-types';

import { Main, Text } from './title.styled';

const Title = ({ secondary, children }) => (
  <Main secondary={secondary}>
    <Text>{children}</Text>
  </Main>
);

Title.propTypes = { secondary: PropTypes.bool };

export default Title;
