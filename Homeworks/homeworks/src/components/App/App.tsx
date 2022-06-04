import React from 'react';
import './App.css';
import Button from '../Button/Button';
import User from '../User/User';

const App = () => {
  const onClickHandler = () => console.log('click');
  const onClickHey = () => console.log('Hello');

  return (
    <div className="App">
      <Button
        title="UserName"
        disabled={false}
        onClickHandler={onClickHandler}
      />
      <Button title="Baraban" disabled={true} onClickHandler={onClickHandler} />
      <Button title="BassGitara" disabled={false} onClickHandler={onClickHey} />
    </div>
  );
};

export default App;
