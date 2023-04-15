export default function Input({text}) {
    return (
        <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name={text}
        placeholder={text} />
       

    );
}
