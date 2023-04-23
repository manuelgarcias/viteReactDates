const Patient = ({patient, setPatient, deletePatient}) => {

    /*const addPatient = () => {
        setPatient({
            'name': patient.name,
            'owner': patient.owner,
            'email': patient.email,
            'higthDate': patient.higthDate,
            'symptoms': patient.symptoms
        })
    }*/

    return (
        <div className="bg-white text-left pl-2  rounded-lg p-4">
            <p className="font-bold">Nombre: {''}
                <span className="font-normal">{patient.name}</span>
            </p>
            <p className="font-bold">Propietario: {''}
                <span className="font-normal">{patient.owner}</span>
            </p>
            <p className="font-bold">Email: {''}
                <span className="font-normal">{patient.email}</span>
            </p>
            <p className="font-bold">Fecha alta: {''}
                <span className="font-normal">{patient.higthDate}</span>
            </p>
            <p className="font-bold">Sintomas: {''}
                <span className="font-normal">
                    {patient.symptoms}
                </span>
            </p>
            <div
                className="flex pt-5"
            >
                <button
                    type="button"
                    className="mr-10 py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPatient(patient)}
                >
                   Editar 
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
                    onClick={() => deletePatient(patient.id)}
                >
                   Eliminar
                </button>
            </div>
        </div>
    )
}

export default Patient
