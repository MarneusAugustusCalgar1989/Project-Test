import React from 'react'
import { useSelector } from 'react-redux'
import TestPage from './TestPage'

const TestArray = () => {
  const currentState = useSelector((state) => state[1])

  return (
    <>
      {currentState.map((el) => {
        return <TestPage el={el} key={el.id} />
      })}
    </>
  )
}

export default TestArray
