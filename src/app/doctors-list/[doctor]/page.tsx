'use client';

export default function Doctor({params}: any){
    console.log(params)
    return(
        <div>
            Name: {params.doctor}
        </div>
    )
}