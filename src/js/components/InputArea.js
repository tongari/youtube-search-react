import React from 'react';
import Style from '../../css/inputArea.css';

const InputArea = props => {
  const {
    inputTextValue,
    onChange
    // onGetApiData
  } = props;

  return (
    <div className={ Style.box }>
      <label>
        <input className={Style.textBox} type="text" placeholder="search word" defaultValue={inputTextValue} onChange = {onChange} />
      </label>
      {/*<button onClick={ onGetApiData }>Search video</button>*/}
    </div>
  );
};

InputArea.propTypes = {
  inputTextValue: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
  // onGetApiData: React.PropTypes.func.isRequired
};

export default InputArea;
