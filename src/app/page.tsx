'use client'
import Image from 'next/image'
import logo from './assets/logo.jpg'
import { useState } from 'react'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex flex-col p-5">
      <nav className='flex justify-between items-center border-indigo-500/100 border-x-4 p-5 navbar'>
        <Image
          src={logo}
          width={100}
          height={100}
          className='rounded-full'
          alt="Picture of the author"
        />
        <h5>Learning Next 13+</h5>
        <ul className='flex gap-5 items-center float-right' >
          <li>Home</li>
          <Link href='/patients-list' >Patients</Link>
          <Link href='/doctors-list' >Doctors</Link>
          <li>Sign-in</li>
        </ul>
      </nav>
      <div className='mt-5'>

        <div className="flex gap-1">
          {/* <CurrentUser /> */}
          
        </div>
        <p>This is my first page written in next js, I am writing this with the help of some documentation and some of my own skills.
          I am happy to learn new technologies and solve real world problems and add value to others.
          My main aim is to provide better solutions that ease my respective people.
          I will continue to do my best work in order to improve my self and lean on the go.</p>
      </div>
      
    </main>
  )
}

const CurrentUser = (props: any) => {
  const [name, setName] = useState("Ali")
  const [age, setAge] = useState(22)
  const changeName = (name: string, age: number)=>{
    setName(name);
    setAge(age);
  }
  return (
    <div className='flex  justify-between w-full items-center' >
      <div className='flex flex-col gap-1 border rounded-xl justify-between w-6/12 items-center' >
      <p>My name is {name}</p> 
      <p>My age is {age}</p>
      </div>
      <button className='border p-2 rounded-full' onClick={ ()=> changeName('Sohaib', 24)} >Update</button>
    </div>
  )
}