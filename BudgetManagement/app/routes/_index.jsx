import MoneyCard from "../components/MoneyCard";
import Navbar from "../components/Navbar";
export const meta = () => {
  return [{ title: "Budget Management" }];
};

const cardData=[ 
  {amount: 500000, text: "Total Money"},
  {amount: 200000, text: "Spent Money"},
  {amount: 300000, text: "Remaining Money"}
]
const numbers=[1,2,3,4,5,6,7,8,9,10]
export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-3 mt-3">
        {cardData.map(a =>{
          return <MoneyCard amount={a.amount} text={a.text}/> 
        })}
      </div>
      <div>
        {numbers.map(n =>{
          return n*2
        })}
      </div>

    </div>

  );
}
