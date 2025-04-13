import Card from "../components/Card";
import { requests, investors } from "../data/mockData";

const EntrepreneurDashboard = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl mb-4 text-blue-600">Collaboration Requests</h2>
      {requests.map((r) => {
        const investor = investors.find((i) => i.id === r.investorId);
        return (
          <Card key={r.id}>
            <h3 className="text-lg font-bold">{investor.name}</h3>
            <p>{r.snippet}</p>
            <p>Status: {r.status}</p>
          </Card>
        );
      })}
    </div>
  );
};
export default EntrepreneurDashboard;