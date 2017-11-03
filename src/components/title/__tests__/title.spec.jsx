import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Title from '../title';

import { Main, Text } from '../title.styled';

describe('Title', () => {
  let wrapper;

  afterEach(() => wrapper && wrapper.unmount());

  describe('rendering', () => {
    it('should not render null', () => {
      // Assert
      expect((wrapper = shallow(<Title>Hello</Title>)).exists()).toBeTruthy();
    });

    it('should render Main', () => {
      // Assert
      expect(
        (wrapper = shallow(<Title>Hello</Title>)).find(Main).exists()
      ).toBeTruthy();
    });

    it('should render Text', () => {
      // Assert
      expect(
        (wrapper = shallow(<Title>Hello</Title>)).find(Text).exists()
      ).toBeTruthy();
    });

    it('should add the prop secondary to Main', () => {
      // Assert
      expect(
        (wrapper = shallow(<Title secondary>Hello</Title>))
          .find(Main)
          .prop('secondary')
      ).toBeTruthy();
    });
  });

  describe('snapshots', () => {
    it('should match the title snapshot', () => {
      // Assert
      expect(renderer.create(<Title>Hello</Title>).toJSON()).toMatchSnapshot();
    });

    it('should match the sub title snapshot', () => {
      // Assert
      expect(
        renderer.create(<Title secondary>Hello</Title>).toJSON()
      ).toMatchSnapshot();
    });
  });
});
