import React, { Component } from 'react'
import { ScrollView, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { text_input_typing } from '../Reducers/JestReducer'

class JestTestScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputLocalState: ''
    }
  }

  componentDidMount() {
    console.log('componentDidMount ===>'); // is fired
  }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate ====> '); // is not fired
  // }

  componentDidUpdate() {
    console.log('componentDidUpdate ====> '); // is not fired
    console.log('this.props.jest ==> ', this.props.jest);
  }

  render() {
    return (
      <ScrollView>
        <TextInput
          style={{ marginTop: 100, borderWidth: 1, borderColor: 'black', borderRadius: 6, marginBottom: 15, width: 130, paddingLeft: 10, height: 50 }}
          value={this.props.jest.inputValue}
          //value={this.state.inputLocalState}
          placeholder={'text input placeholder'}
          onChangeText={(text) => {
            console.log('HERE ONCHANGE!!! ==> ', text);
            this.props.text_input_typing(text)

            // this.setState({
            //   inputLocalState: text
            // })
          }} />

        <Text>
          {this.props.jest.inputValue}
          {/** {this.state.inputLocalState} */}
        </Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    jest: state.jest
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  text_input_typing
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(JestTestScreen)
