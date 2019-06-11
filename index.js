import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {

  state = {
    count: 0
  }

  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  _decrementCount = () => {
    this.setState({ count: this.state.count - 1 })
  }

  componentDidMount() {
    // setInterval(this._incrementCount,1)
  }

  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.greeting}>
          {this.state.count}
        </Text>
        <VrButton onClick={this._incrementCount} style={styles.greetingBox}>
          <Text style={{ textAlign: 'center' }}>Adicionar</Text>
        </VrButton>
        <VrButton onClick={this._decrementCount} style={styles.greetingBox}>
          <Text style={{ textAlign: 'center' }}>Remover</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 48,
    color: '#fff'
  },
  greetingBox: {
    padding: 25,
    width: 150,
    margin: 15,
    backgroundColor: '#DDD89B',
    borderColor: '#FFFFFF',
    borderWidth: 2,
  }
});

AppRegistry.registerComponent('Hello360', () => Hello360);
