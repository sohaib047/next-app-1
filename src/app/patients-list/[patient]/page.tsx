'use client';

export default function Patient({props}: any){
    console.log(props)
    return(
        <div>
            Name: {props}
        </div>
    )
}