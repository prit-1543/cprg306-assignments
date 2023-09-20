import Link from "next/link";
 
export default function StudentInfo() 
{
  return (
    <main>
        <div>
            <h1>Student Information</h1> 
            <p>Student Name: Prit Patel<br />
               course: CPRG 306 A<br />
               <Link href="https://github.com/prit-1543/cprg306-assignments.git">Github Link</Link>
            </p>         
        </div>
    </main>
  )
}