import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Alert,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      // <View style={{flex: 1}}>
      //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      // </View>
      <View style={styles.container}>
        <Text style={styles.red}>sb chouchou, Open up App.js to start working on your app!</Text>
        <Text style={[styles.bigblue, styles.red]}>Changes you make will automatically reload.</Text>
        <Text style={[styles.red, styles.bigblue]}>Shake your phone to open the developer menu.</Text>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />

        <Image source={pic} style={{width: 193, height: 110}}/>
        <Blink text='I love to blink' />
        
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />

        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>

        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />

        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText}
      })
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
