import StudentInfo from "../studentInfo";
import Link from "next/link";

export default function Hello(){
  return(
      <main className="bg-black min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">My Shopping List</h1>
        <div className="p-4 bg-gray shadow rounded">
        <h1>My Shopping List</h1>
        <StudentInfo />
        </div>
      </div>
    </main> 
    )
}