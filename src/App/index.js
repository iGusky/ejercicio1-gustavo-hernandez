import React, { Component, useState } from 'react'
import Input from '../Input/index'
import logo from '../resources/logo512.png'

const App = () => {

  const [inputValue, setInputValue] = useState('')

  const onChangeInputValue = (value) =>
    setInputValue(value)

  return (
    <>
      <div>
        <Input
        inputValue={inputValue}
        onChangeInputValue={this.onChangeInputValue}
        />
      </div>
      <img src={logo} alt={'logo'} />
    </>
  )

}

export default App;