import StudentInfo from "../studentInfo";

export default function Hello() {
    return (
        <main className="bg-black min-h-screen p-8">
            <div className="max-w-4xl mx-auto flex justify-between items-center space-x-12">
                <h1 className="text-5xl font-bold text-white">My Shopping List</h1>
                <div className="font-mono text-lg">
                    <StudentInfo />
                </div>
            </div>
        </main>
    );
}
