'use client';

export default function Doctor({props}: any){
    console.log(props)
    return(
        <div>
            Name: {props}
        </div>
    )
}