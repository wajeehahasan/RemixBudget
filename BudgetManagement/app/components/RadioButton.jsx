export default function RadioButton({ text, selected }) {
    let color = "bg-[#0B101A]"
    let radioClass = "flex flex-row text-white justify-center items-center gap-2 w-[248px] h-16 bg-[#0B101A] rounded-md border-2 border-solid	"
    if (selected) {
        color = "text-[#8B5CF6]";
        radioClass = radioClass + " border-purple-500"
    }

    return (
        <div className={radioClass}>
            <p className={color}>{text}{selected}</p>

        </div>

    );
}