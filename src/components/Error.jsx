import React from 'react'

const Error = ({ handlePopUp }) => {
  return (
    <>
        <h1 style={{color:'red'}}>Please fill in all information on the page before generating your CV!</h1>
        <button style={{color:'red'}} onClick={handlePopUp}>X</button>
    </>
)
}

export default Error