import React from 'react'

const Job = ({pracInfo}) => {
  return (
    <>
    {pracInfo.map((employment)=> {
        <li className='listOfEmployment' key={employment.entry}>
            <h3>{employment.positionEmp}</h3>
            <p>{employment.company}</p>
            <p>{employment.durationOfEmployment.start} - {employment.durationOfEmployment.end}</p>
            <p>Responsibility:  {employment.role}</p>
        </li>
})}
    </>
  )
}

export default Job