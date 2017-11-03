import styled from 'styled-components/native';

import { colors, font } from '../../utils';

export const Main = styled.View``;

export const Text = styled.Text`
  color: ${colors.text};
  font-family: ${font.family.bold};
  font-size: ${props =>
    props.secondary ? font.title.base : font.title.base * 1.5}px;
`;
