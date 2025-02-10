import React from 'react'
import GeneralInformation from './GeneralInformation'
import EducationalInformation from './EducationInformation'
import PracticalInformation from './PracticalInformation'
const CV = ({ handleDelete, handleCVGeneration, handlePracSubmit, profile, personInfo, eduInfo, pracInfo, setProfile, setPersonInfo, setPracInfo, setEduInfo, companyName, position, responsibilty, dateJointoEnd, setCompanyName, setPosition, setResponsibilty, setDateJointoEnd}) => {
  return (
    <>

    <form>

        <h1>Welcome to my CV Generator</h1>
        {/* Add gen info ex. name, email, phoen # */}
        <h3>Enter Your Personal Information</h3>
        <GeneralInformation 
        personInfo = {personInfo}
        setPersonInfo = {setPersonInfo}
        />
        {/* Add education experience ex. name, title of study, date of study */}
        <h3>Enter Your Education Information</h3>
        <EducationalInformation
        eduInfo = {eduInfo}
        setEduInfo = {setEduInfo}
        />
        {/* Add practical experience ex. co. name, postition title, main responsibilty, date from and until u worked  */}
        <h3>Enter Your Employment Information</h3>
        <PracticalInformation
        pracInfo = {pracInfo}
        setPracInfo = {setPracInfo}
        handlePracSubmit = {handlePracSubmit}
        companyName = {companyName}
        position = {position}
        responsibilty = {responsibilty}
        dateJointoEnd = {dateJointoEnd}
        setCompanyName = {setCompanyName}
        setPosition = {setPosition}
        setResponsibilty = {setResponsibilty}
        setDateJointoEnd = {setDateJointoEnd}
        />
      <button onClick={(e) => { e.preventDefault(); handleCVGeneration(); }}>Generate</button>    
      <button onClick={(e) => { e.preventDefault(); handleDelete(); }}>Delete</button>    
      </form>
    {/* <button type='submit' style={{padding: '20px', backgroundColor: 'green', display: 'block', paddingLeft:'40px', paddingRight:'40px'}} onClick={(e) => { e.preventDefault(), handleCVGeneration}}>Generate</button> */}
    </>

  )
}

export default CV