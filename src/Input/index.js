import React, { useState, useEffect, useMemo } from 'react'
import { getFakeData1, getFakeData2 } from '../fakeRequest'

const Input = ({inputValue,onChangeInputValue}) => {
  
  const [data, setData] = useState({});

  const loadData = useMemo(async() => {
    const firstNameWithId = await getFakeData1()
    const lastNameWithId = await getFakeData2()
    console.log({firstNameWithId, lastNameWithId});
    setData({firstNameWithId, lastNameWithId});
    return({firstNameWithId, lastNameWithId});
  },[inputValue]);
  
    return (
      <input
        onChange={e => onChangeInputValue(e.target.value)}
        value={inputValue}
      />
    )
}

export default Input;

