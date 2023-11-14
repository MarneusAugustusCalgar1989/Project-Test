import React from 'react';
import { useSelector } from 'react-redux';
import TestPage from './TestPage';

const TestArray = () => {
  const currentState = useSelector(state => state[1]);
  console.log(currentState);

  return (
    <>
      {currentState.map(el => {
        return <TestPage el={el} />;
      })}
    </>
  );
};

export default TestArray;
