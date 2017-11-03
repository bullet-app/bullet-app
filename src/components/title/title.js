import React from 'react';

import PropTypes from 'prop-types';

import { Main, Text } from './title.styled';

const Title = ({ secondary, children }) => (
  <Main>
    <Text secondary={secondary}>{children}</Text>
  </Main>
);

Title.propTypes = { secondary: PropTypes.bool };

export default Title;
