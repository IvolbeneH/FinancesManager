import { Sidebar } from "./components/Sidebar";
import { CardInfo } from "./components/CardInfo";
import { StatisticsBank } from "./components/StatisticsBank";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="mt-2 grid grid-cols-2 gap-3 px-3">
        <CardInfo
          title="Receitas"
          imageUrl="/money.svg"
          description="$49,13k"
        />
        <CardInfo
          title="A pagar"
          imageUrl="/people.svg"
          description="$49,13k"
        />
        <CardInfo
          title="Despesas pagas"
          imageUrl="/profile-2user.svg"
          description="$49,13k"
        />
        <CardInfo
          title="Saldo atual"
          imageUrl="/frame.svg"
          description="$49,12k"
        />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 px-3 pb-4">
        <StatisticsBank title="meus" title2="cartões" />
        <StatisticsBank title="minhas" title2="contas" />
      </div>
    </div>
  );
}
