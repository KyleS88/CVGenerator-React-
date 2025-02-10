import React from 'react'

const PracticalInformation = ({handlePracSubmit, companyName, position, responsibilty, dateJointoEnd, setCompanyName, setPosition, setResponsibilty, setDateJointoEnd }) => {
  return (
    <>
      <label htmlFor='companyName'>
        <input id='companyName' type="text" required placeholder='Name of Company' value={companyName} onChange={(e)=> {setCompanyName(e.target.value)} }/>
      </label>
      <label htmlFor='position'>
        <input id='position' type="text" required placeholder='Position' value={position} onChange={(e)=> {setPosition(e.target.value)} }/>
      </label>
      <label htmlFor='responsibilty'>
        <input id='responsibilty' type="text" required placeholder='Responsibilties' value={responsibilty} onChange={(e)=> {setResponsibilty(e.target.value)} }/>
      </label>
      <label htmlFor='dateStart'>
        <input id='dateStart' type="date" required placeholder='Start Date of Employment' value={dateJointoEnd.start} onChange={(e)=> {setDateJointoEnd({...dateJointoEnd, start: e.target.value})}}/>
      </label>
      <label htmlFor='dateEnd'>
      <input id='dateEnd' type="date" required placeholder='End Date of Employment' value={dateJointoEnd.end} onChange={(e)=> {setDateJointoEnd({...dateJointoEnd, end: e.target.value})} }/>
      </label>
      <button onClick={(e) => { e.preventDefault(), handlePracSubmit()}} style={{padding: '10px', paddingLeft:'80px', paddingRight:'80px'}}>Add</button>
    </>

  )
}

export default PracticalInformation