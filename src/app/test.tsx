export default function TailwindTest() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-red-500 mb-4">
                Tailwind Test
            </h1>
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                This should be blue with white text if Tailwind works
            </div>
            <button className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white">
                Test Button
            </button>
        </div>
    )
}