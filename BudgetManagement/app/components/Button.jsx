export default function Button({ text }) {
    return (

        <button type="submit"
            className="w-full text-center py-3 shadow-lg shadow-cyan-500/50 rounded bg-blue-700 bg-gradient-to-r from-blue-600 to-teal-500 hover:to-green-700 text-white hover:bg-green-dark focus:outline-none my-1">
            {text}
        </button>

    );
}
