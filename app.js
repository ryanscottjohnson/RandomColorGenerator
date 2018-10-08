import React, { Component } from 'react';
import { StyleSheet, View, Button} from 'react-native';

export default class ColorGenerator extends Component {
  constructor() {
    super();
    this.state = {
      ColorHolder : '#00BCD4'
    }
  }

  ChangeColorFunction = () => {
    let ColorCode = 'rgb'( + Math.floor(Math.randon() * 256)) + ',' + ( + Math.floor(Math.randon() * 256)) + ',' + ( + Math.floor(Math.randon() * 256));
    this.setState({
      ColorHolder : ColorCode
    })
  }

  render() {
    return (
      <View style={[styles.MainContainer, { backgroundColor: this.state.ColorHolder }]}>
        <Button title="Change Background Color" onPress={this.ChangeColorFunction} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
