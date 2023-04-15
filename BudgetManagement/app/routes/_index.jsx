import MoneyCard from "../components/MoneyCard";
import Navbar from "../components/Navbar";
export const meta = () => {
  return [{ title: "Budget Management" }];
};

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-3 mt-3">
        <MoneyCard amount="500,000" text="Total money" /> 
        <MoneyCard amount="200,000" text="Spent Money"/>
        <MoneyCard amount="300,000" text="Remaining Money" />
      </div>

    </div>

  );
}
