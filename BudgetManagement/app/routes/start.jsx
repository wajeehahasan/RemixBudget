import Btn from "../components/Btn";
import RadioButton from "../components/RadioButton";
export const meta = () => {
    return [{ title: "Start" }];
};
const buttondata = [
    { text: "Freelancer",selected: true },
    { text: "Recruiting",selected: false }

];
const submitbtn = [
    { text: "Back", selected:false },
    { text: "Next", selected:true}

];
export default function Start() {
    return (
        <div className="flex flex-col bg-gray-900 h-screen">
            <h1 className="flex font-extrabold text-5xl line-height[48px] text-white ">Where woud you like to start?</h1>
            {buttondata.map((data) => <RadioButton text={data.text} selected={data.selected} />)}
            <div className="flex flex-row">
            {submitbtn.map((submit) => <Btn text={submit.text} selected={submit.selected} />)}
            </div>
        </div>


    );
}