import Link from "next/link";

export default function DoctorsList() {
    const doctorsData = [
        { id: 1, name: 'Waqas' },
        { id: 2, name: 'Sohaib' },
        { id: 3, name: 'Ghulam' }
    ]
    return (
        <div className="mt-5 ms-2" >
            <h3>View Doctor Profile</h3>
            <ul className="mt-5 ms-3 flex flex-col gap-2">
                {doctorsData.map((doctor) => (
                    <Link href={"/doctors-list/"+doctor.name} key={doctor.id} >{doctor.name}</Link>
                ))}
            </ul>
        </div>
    )
}