import Box from "../components/Box";
export const meta = () => {
  return [{ title: "Identity" }];
};

export default function Identity() {
  const boxNum = [
    {id:"Developer", selected:true},
    {id:"Designer", selected:false},
    {id:"Content Creator", selected:false}
  ]
  return (
    <div className="flex bg-gray-900 h-screen ">
      <div className="flex flex-col justify-center ml-8">
        <h1 className="font-extrabold text-5xl leading-[48px] text-white">I am a...</h1>
        <p className="text-white">Select all that apply</p>
        <div className="flex flex-row gap-4">
          {boxNum.map(a => {
            return <Box id={a.id} selected={a.selected} />
          })}
        
        </div>
      </div>
    </div>

  );
}