import React from 'react'
const GeneralInformation = ({ personInfo, setPersonInfo}) => {
  return (
  <>
  <label htmlFor='nameInput'>
    <input id='nameInput' autoFocus required type='text' value={personInfo.name} placeholder='Name' onChange={(e) => {setPersonInfo({...personInfo, name: e.target.value})}} ></input>
  </label>
  <label htmlFor='emailInput'>
    <input id='emailInput' required type='text' value={personInfo.email} placeholder='Email' onChange={(e) => {setPersonInfo({...personInfo, email: e.target.value})}} ></input>
  </label>
  <label htmlFor='phoneInput'>
    <input id='phoneInput' required type='text' value={personInfo.phone} placeholder='Phone Number' onChange={(e) => {setPersonInfo({...personInfo, phone: e.target.value})}} ></input>
  </label>
  </>
  )
}

export default GeneralInformation