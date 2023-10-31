import StudentInfo from "./studentInfo";
import Link from "next/link";

export default function Page() {
  return (
    <main className="font-sans bg-black h-screen flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold mb-2">CPRG-306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <div className="space-y-3">
          <Link href="./week2" className="block w-full text-center bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-full">
            Week 2 Assignment
          </Link>
          <Link href="./week3" className="block w-full text-center bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-full">
            Week 3 Assignment
          </Link>
          <Link href="./week4" className="block w-full text-center bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-full">
            Week 4 Assignment
          </Link>
          <Link href="./week5" className="block w-full text-center bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-full">
            Week 5 Assignment
          </Link>
          <Link href="./week6" className="block w-full text-center bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-full">
            Week 6 Assignment
          </Link>
          <Link href="./week7" className="block w-full text-center bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-full">
            Week 7 Assignment
          </Link>
          <Link href="./week8" className="block w-full text-center bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-full">
            Week 8 Assignment
          </Link>
        </div>
      </div>
    </main>
  )
}
