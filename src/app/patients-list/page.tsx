import Link from "next/link";

export default function PatientsList() {
    const patientsData = [
        { id: 10, name: 'Tehseen'},
        { id: 22, name: 'Umair' },
        { id: 33, name: 'Yasir'}
    ]
    return (
        <div className="mt-5 ms-2" >
            <h3>View Patient Profile</h3>
            <ul className="mt-5 ms-3 flex flex-col gap-2">
                {patientsData.map((patient) => (
                    <li key={patient.id} >
                        <Link href={"/patients-list/"+patient.name} >{patient.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}