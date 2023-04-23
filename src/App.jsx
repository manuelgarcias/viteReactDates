import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form';
import PatientList from './components/PatientList';


function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect ( () => {
    console.log(1)
    const obtenerLS = () => {
      const storagePatients = JSON.parse(sessionStorage.getItem('patients')) ?? []
      setPatients(storagePatients);
    }
    obtenerLS();
  }, [])
  
  useEffect ( () => {
    console.log(2)
    sessionStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  return (
      <>
        <Header
          
        />
        <div className="mt-12 flex">
          <Form
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
          />
          <PatientList 
            patients={patients}
            setPatient={setPatient}
            setPatients={setPatients}
          />
        </div>
      </>
  )
}

export default App;
