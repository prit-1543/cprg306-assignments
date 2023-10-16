import StudentInfo from "./studentInfo";
import Link from "next/link";

export default function Page(){
return(
  <main>
    <div>
      <h1>CPRG-306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <br/>
      <Link href="./week2">Week2</Link>
      <br/>
      <Link href="./week3">Week3</Link>
      <br/>
      <Link href="./week4">Week4</Link>
      <br/>
      <Link href="./week5">Week5</Link>
    </div>
    </main>
    )
}
