import Patient from "./Patient"
const PatientList = ({patients, setPatients, setPatient}) => {

    const deletePatient = (id) => {
        const patientsCopy = [...patients]
        const key = patientsCopy.findIndex(item => item.id === id)
        patientsCopy.splice(key, 1)
        setPatients(patientsCopy)
    }

    return (
        <div className="w-1/2 lg:w-3/5 text-center ml-2 mr-2 h-[80vh] overflow-y-scroll">
           { patients && patients.length > 0 ? (
                <>
                    <h2 className="font-black text-3xl">Listado de pacientes</h2>
                    <p>
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {
                        patients.map((patient, index) => (
                            <Patient
                                key={index}
                                patient={patient}
                                setPatient={setPatient}
                                patients={patients}
                                deletePatient={deletePatient}
                            />
                        ))
                    }
                </>
            )
            
           : (  <>
                    <h2 className="font-black text-3xl">No hay pacientes</h2>
                    <p>
                        Agrega pacientes desde el {''}
                        <span className="text-indigo-600 font-bold">Formulario</span>
                    </p>
                </>
            )}
           

            
        </div>
    )
}

export default PatientList