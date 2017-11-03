import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { ApolloProvider } from 'react-apollo';
import { client } from './src/apollo.client';

import { Title } from './src/components/title';

const StyledText = styled.Text`
  color: red;
`;

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Title>(primary) Hello World</Title>
          <Title secondary>(seconday) Hello World</Title>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <StyledText>Shake your phone to open the developer menu.</StyledText>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
