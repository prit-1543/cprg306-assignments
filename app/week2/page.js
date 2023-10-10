import StudentInfo from "../studentInfo";
import Link from "next/link";

export default function Hello(){
  return(
  <main>
    <div>
      <h1>My Shopping List</h1>
        <StudentInfo />
        <Link href="./week3">Week3</Link>
    </div>
  </main> 
    )
}
