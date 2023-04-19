
export const meta = () => {
  return [{ title: "Welcome to lancelot" }];
};

export default function Welcome() {
  return (
    <div className="flex flex-col  bg-gray-900 h-screen">
      <div className="flex rounded-lg rounded-t-none h-20 text-white items-center justify-between font-bold" >
          <div className="flex gap-10">
            <ul className="flex gap-2 text-lg">
              <li className="ml-4">Lancelot</li>
            </ul>
          </div>
          <ul className="flex gap-2 text-lg">
            <li>Joe Smith </li>
          </ul>
        </div>
      <div className="flex flex-row justify-center  bg-gray-900 h-screen ">
        
        <div className="flex flex-col ml-12 w-1/2 justify-center">
          <h1 className="font-bold	text-white text-5xl ">Welcome to Lancelot 🎉</h1>
          <p className="text-white mt-4 w-3/4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, assumenda vero asperiores qui quisquam voluptas enim! Delectus omnis tenetur quas quibusdam ducimus reprehenderit deleniti esse in praesentium nihil, optio asperiores.</p>
          <button type="submit"
            className="w-1/4 mt-2 text-center py-3 bg-purple-600 rounded-md text-white hover:bg-green-dark focus:outline-none my-1">
            Lets do this
          </button>
        </div>

        <div className=" flex items-center justify-center font-medium text-3xl leading-10 not-italic opacity-30 bg-[#1F2635] text-white mt-6 mb-6 w-1/4 h-9/10 rounded-lg ">
          Peaceful Video
        </div>
      </div>
    </div>
  );
}