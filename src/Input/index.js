import React, { useState, useEffect, useMemo } from 'react'
import { getFakeData1, getFakeData2 } from '../fakeRequest'

const Input = ({inputValue,onChangeInputValue}) => {
  
  const [data, setData] = useState([]);
  const [encontrados, setEncontrados] = useState([]);

  useMemo(async() => {
    const firstNameWithId = await getFakeData1()
    const lastNameWithId = await getFakeData2()
  
    const newFirstNameWithId = firstNameWithId.sort((a,b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
    const newLastNameWithId = lastNameWithId.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));

    const newArray = newFirstNameWithId.map((element, index) => {
      return({
        id:newFirstNameWithId[index].id,
        firstName:newFirstNameWithId[index].firstName,
        lastName: newLastNameWithId[index].lastName
      })
    });
    setData(newArray);
    return({firstNameWithId, lastNameWithId});
  },[]);
  
  useEffect(() => {
    let newArray = [];
    newArray = (data?.filter(element => element.firstName.toLowerCase().includes(inputValue.toLowerCase())))
    if(newArray.length === 0) {
      newArray = (data?.filter(element => element.lastName.toLowerCase().includes(inputValue.toLowerCase())));
    }
    setEncontrados(newArray);
  }, [inputValue,data])

    return (
      <>
        <input
          onChange={e => onChangeInputValue(e.target.value)}
          value={inputValue}
        />
        {
          inputValue !== '' && (
            encontrados?.map((element,index) => (<p key={index}>{element.firstName} {element.lastName}</p>)))
        }
      </>
    )
}

export default Input;

