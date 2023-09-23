import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div>
            <h2 className="mt-2 text-center border-2 m-2 rounded border-slate-300 hover:border-indigo-300" >Patient List</h2>
            <ul className="mt-5">
                <li ><Link className="flex float-right ms-2 me-2 border-2 p-1 rounded-full" href='/' >Back to Website</Link></li>
                <li>{children}</li>
            </ul>
           
        </div>
    )
  }