import styled from 'styled-components/native';

import { colors, font } from '../../utils';

export const Main = styled.View``;

export const Text = styled.Text`
  color: ${colors.text};
  font-size: ${props =>
    props.secondary ? font.title.base : font.title.base * 2}px;
`;
