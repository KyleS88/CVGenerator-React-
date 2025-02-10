import React from 'react'
const EducationInformation = ({eduInfo,setEduInfo}) => {
  return (
    <>
      <label htmlFor='schoolNameInput'>
        <input id='schoolNameInput' autoFocus required type='text' value={eduInfo.schoolName} placeholder='Name of Current School' onChange={(e) => {setEduInfo({...eduInfo, schoolName: e.target.value})}} ></input>
      </label>
      <label htmlFor='titleInput'>
        <input id='titleInput' required type='text' value={eduInfo.title} placeholder='Title of Study' onChange={(e) => {setEduInfo({...eduInfo, title: e.target.value})}} ></input>
      </label>
      <label htmlFor='gradDateInput'>
        <input id='gradDateInput' required type='date' value={eduInfo.gradDate} placeholder='Graduation Date' onChange={(e) => {setEduInfo({...eduInfo, gradDate: e.target.value})}} ></input>
      </label>
    </>
  )
}

export default EducationInformation