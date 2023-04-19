export default function Btn({text, selected}) {
    let color="bg-gray-900"
    let btnClass="flex justify-center items-center w-[120px] h-[50px] border border-style rounded-md border-[#C4B5FD]"
    if (selected) {
        color = "text-purple-500";
        btnClass=btnClass+" bg-[#7C3AED]"
      }
    return (
        <button type="submit" className={btnClass}>
        <p className="font-medium text-base leading-6 text-white">{text}{selected}</p>

    </button>
    );
}
