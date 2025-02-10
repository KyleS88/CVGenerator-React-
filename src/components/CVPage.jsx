import React from 'react'

const CVPage = ({ personInfo, eduInfo, pracInfo, handleReturnToEdit }) => {
  return (
    <div className='CVPage'>
        <h1>{`${personInfo.name}'s CV`}</h1>
        <div className="personInfo">
            <h3 id='nameDisplay'>Name: {personInfo.name}</h3>
            <p id='emailDisplay'>Email: {personInfo.email}</p>
            <p id="phoneDisplay">Phone Number: {personInfo.phone}</p>
        </div>
        <div className="eduInfo">
            <header>Education</header>
            <h3 id="schoolNameDisplay">{eduInfo.schoolName}</h3>
            <p id="titleDisplay">{eduInfo.title}</p>
            <p id="gradDateDisplay">{eduInfo.gradDate}</p>
        </div>
        <div className="pracInfo">
            <ul>
            {pracInfo.map((employment) => {
                return (
                   <li className='listOfEmployment' key={employment.entry}>
                    <h3>{employment.positionEmp}</h3>
                    <p>{employment.company}</p>
                    <p>{employment.durationOfEmployment.start} - {employment.durationOfEmployment.end}</p>
                    <p>Responsibility:  {employment.role}</p>
                </li>  
                )
               
            })}
            </ul>
        </div>
        <button onClick={handleReturnToEdit}>Return Back to Edit Page</button>
        
    </div>
  )
}

export default CVPage