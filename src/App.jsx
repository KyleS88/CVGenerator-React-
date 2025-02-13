import {useState, useEffect} from 'react'
import CV from './components/CV'
import CVPage from './components/CVPage'
import Error from './components/Error'

import './App.css'
const App = () => {
  const [profile, setProfile] = useState({})
  const [personInfo, setPersonInfo] = useState(JSON.parse(localStorage.getItem("PersonInfo"))||{name: '', email: '', phone: ''})
  const [eduInfo, setEduInfo] = useState(JSON.parse(localStorage.getItem("EducationInfo"))||{schoolName: '', title: '', gradDate: ''})
  const [pracInfo, setPracInfo] = useState(JSON.parse(localStorage.getItem("PracticalInfo"))||[])
  const [companyName, setCompanyName] = useState('')
  const [position, setPosition] = useState('')
  const [responsibilty, setResponsibilty] = useState('')
  const [dateJointoEnd, setDateJointoEnd] = useState({start: '', end: ''})
  const [generate, setGenerate] = useState(false)
  const [popUp, setPopUp] = useState(false)

  useEffect(()=> {
    localStorage.setItem("PracticalInfo", JSON.stringify(pracInfo));
  }, [pracInfo])
  useEffect(()=> {
    localStorage.setItem("PersonInfo", JSON.stringify(personInfo));
  }, [personInfo])
  useEffect(()=> {
    localStorage.setItem("EducationInfo", JSON.stringify(eduInfo));
  }, [eduInfo])

  const handlePopUp = () => {
    setPopUp(false);
  }

  const handleReturnToEdit = () => {
    setGenerate(false);
  }

  const handlePracSubmit = () => {

    const currentEntry = pracInfo.length ? pracInfo[pracInfo.length-1].entry + 1 : 1;
      const enteredEmployment = {entry: currentEntry, company: companyName, positionEmp: position, role: responsibilty, durationOfEmployment: dateJointoEnd}
      setPracInfo([...pracInfo, enteredEmployment]);

      setCompanyName('');
      setPosition('');
      setResponsibilty('');
      setDateJointoEnd({start: '', end: ''});

  }

  const handleCVGeneration = () => {
    (!personInfo.name.length || !personInfo.email.length || !personInfo.phone.length || !eduInfo.schoolName.length || !eduInfo.title.length || !eduInfo.gradDate.length || !pracInfo.length)? 
      setPopUp(true):
      setGenerate(true);
  }

  const handleDelete = () => {
    setPersonInfo({name: '', email: '', phone: ''})
    setEduInfo({schoolName: '', title: '', gradDate: ''})
    setPracInfo([])
  }

  return (
    <main>
      <div className='popup'>
        {popUp && <Error handlePopUp ={handlePopUp} />}
      </div>
      <div className='context'>
        {!generate && 
            <CV
            profile = {profile}
            personInfo = {personInfo}
            eduInfo = {eduInfo}
            pracInfo = {pracInfo}
            setProfile = {setProfile}
            setPersonInfo = {setPersonInfo}
            setPracInfo = {setPracInfo}
            setEduInfo = {setEduInfo}
            handlePracSubmit = {handlePracSubmit}
            companyName = {companyName}
            position = {position}
            responsibilty = {responsibilty}
            dateJointoEnd = {dateJointoEnd}
            setCompanyName = {setCompanyName}
            setPosition = {setPosition}
            setResponsibilty = {setResponsibilty}
            setDateJointoEnd = {setDateJointoEnd}
            handleCVGeneration = {handleCVGeneration}
            handleDelete = {handleDelete}
          />}
        
        {generate && personInfo.name.length && personInfo.email.length && personInfo.phone.length && eduInfo.schoolName.length && eduInfo.title.length && eduInfo.gradDate.length && pracInfo.length && 
          <CVPage
            personInfo = {personInfo}
            eduInfo = {eduInfo}
            pracInfo = {pracInfo}
            handleReturnToEdit = {handleReturnToEdit}
          />}
      
      </div>
      
    </main>

  )
}

export default App