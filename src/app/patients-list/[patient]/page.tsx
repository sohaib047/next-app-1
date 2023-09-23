'use client';

export default function Patient({params}: any){
    console.log(params)
    return(
        <div>
            Name: {params.patient}
        </div>
    )
}