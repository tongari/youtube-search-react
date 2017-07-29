import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputArea from '../components/InputArea';
import ResultArea from '../components/ResultArea';
import {getYoutubeData} from '../domain/youtubeConnector';
import * as actions from '../actions/index';

class App extends React.Component {

  doLoading() {
    return (this.props.store.youtubeData.isFetching) ? <p>Loading</p> : null;
  }

  showError() {
    return (this.props.store.youtubeData.isError) ? <p>Error!!</p> : null;
  }

  componentDidMount() {
    // this.getApiAction(this.props.store.inputTextValue);
  }

  render() {
    const {store, bActions} = this.props;

    return (
      <div>
        <InputArea
          inputTextValue={ store.inputTextValue }
          // onChange={ e => this.getApiAction(e.target.value) }
          onChange={ (e) => bActions.onChangeValue(e.target.value) }
          onFetchYoutubeData={bActions.parallelFetchYoutubeData}
        />
        {this.doLoading()}
        {this.showError()}
        <ResultArea
          {...store.youtubeData.data }
        />

      </div>
    )
  }
}

App.propTypes = {
  store: React.PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({
  bActions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
