export default function Box({ id, selected }) {
    let color="text-white"
    let boxClass="flex mt-6 flex-row gap-2 border-2 border-solid rounded-xl w-[248px] h-[248px] bg-black justify-center content-center"
    if (selected) {
        color = "text-purple-500";
        boxClass=boxClass+" border-purple-500"
      }

    return (
        <div className={boxClass}>
            <p className={color}>
                {id}
            </p>
        </div>
    );
}
