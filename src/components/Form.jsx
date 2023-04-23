import {useState, useEffect} from "react"
import Error from "./Error";

function Form ({setPatients, patients, setPatient, patient}) {
    const [name, setName] = useState ('');
    const [owner, setOwner] = useState ('');
    const [email, setEmail] = useState ('');
    const [higthDate, setHigthDate] = useState ('');
    const [symptoms, setSymptoms] = useState ('');
    const [error, setError] = useState (false);
    const [errorMessage, setErrorMessage] = useState ('');

    useEffect(
        () => {
            if (Object.keys(patient).length > 0) {
                setName(patient.name);
                setOwner(patient.owner);
                setEmail(patient.email);
                setHigthDate(patient.higthDate);
                setSymptoms(patient.symptoms);
            }
        }, [patient]
    )
    
    const generateId = () => {
        const ramdom = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return ramdom + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //form validate
        if([ name, owner, email, higthDate, symptoms ].includes('') ) {
            setError(true);
            setErrorMessage('Debe llenar todos los campos');
        } else {
            setError(false);
            const patientObject = {
                'name': name,
                'owner': owner,
                'email': email,
                'higthDate': higthDate,
                'symptoms': symptoms
            }

            if (patient.id) {
                patientObject.id = patient.id
                const patientsCopy = [...patients]
                const key = patientsCopy.findIndex(item => item.id === patient.id)
                patientsCopy[key] = patientObject
                setPatients(patientsCopy)
                setPatient({})
            } else {
                patientObject.id = generateId()
                setPatients(oldPatients => [...oldPatients, patientObject]);
            }
            
            setName('');
            setOwner('');
            setEmail('');
            setHigthDate('');
            setSymptoms('');
        }


        
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 text-center  ml-2 mr-2">
            <h2 className="text-3xl font-black">Seguimiento pacientes</h2>
            <p>
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form 
                className="bg-white shadow-md rounded-lg p-4"
                onSubmit={handleSubmit}
            >
                {/* {error && 
                    <Error
                        errorMessage={errorMessage}
                    />
                } */}
                {
                    error && 
                    <Error
                    >
                        <p>{errorMessage}</p>
                    </Error>
                }
                <div className="pr-2 pl-2">
                    <label className="block">Nombre mascota</label>
                    <input
                        type="text"
                        placeholder="nombre de la mascota"
                        className="border-2 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="pr-2 pl-2">
                    <label className="block">Propietario</label>
                    <input
                        type="text"
                        placeholder="nombre del propietario"
                        className="border-2 w-full"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value.trim())}
                    />
                </div>
                <div className="pr-2 pl-2">
                    <label className="block">Email</label>
                    <input
                        type="text"
                        placeholder="e-mail del propietario"
                        className="border-2 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="pr-2 pl-2">
                    <label className="block">Fecha Alta</label>
                    <input
                        type="date"
                        placeholder="Fecha de alta"
                        className="border-2 w-full"
                        value={higthDate}
                        onChange={(e) => setHigthDate(e.target.value)}
                    />
                </div>
                <div className="pr-2 pl-2">
                    <label className="block">Sintomas</label>
                    <textarea
                        placeholder="Sintomas"
                        className="border-2 w-full"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer"
                    value={patient.id ? 'Editar paciente' : 'Agregar paciente' }
                />
            </form>
        </div>
    )
}

export default Form