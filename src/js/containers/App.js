import React from 'react';
import InputArea from '../components/InputArea';
import ResultArea from '../components/ResultArea';
import {getYoutubeData} from '../domain/youtubeConnector';
import {
  getApiDataSuccess,
  getApiDataFail,
  onChangeValue,
  onDeleteSearchItem
} from '../actions/index';

export default class App extends React.Component {

  getApiAction(val) {
    this.props.store.dispatch(onChangeValue(val));

    getYoutubeData(
      this.props.store.getState().inputTextValue,
      ()=> this.props.store.dispatch(onDeleteSearchItem()),
      data => this.props.store.dispatch(getApiDataSuccess(data)),
      ()=> this.props.store.dispatch(getApiDataFail())
    )
  }

  componentDidMount() {
    this.getApiAction(this.props.store.getState().inputTextValue);
  }

  render() {
    const {store} = this.props;

    return (
      <div>

        <InputArea
          inputTextValue={ store.getState().inputTextValue }
          onChange={ e => this.getApiAction(e.target.value) }
          // onGetApiData = {() => this.getApiAction() }
          // onChange = { e => store.dispatch( onChangeValue(e.target.value) ) }
        />
        <ResultArea
          {...store.getState().apiData }
        />

      </div>
    )
  }
}

App.propTypes = {
  store: React.PropTypes.object.isRequired
};
