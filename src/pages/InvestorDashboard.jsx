import { Link } from "react-router-dom";
import Card from "../components/Card";
import { entrepreneurs } from "../data/mockData";

const InvestorDashboard = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl mb-4 text-blue-600">Entrepreneurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {entrepreneurs.map((e) => (
          <Card key={e.id}>
            <h3 className="text-lg font-bold">{e.name}</h3>
            <p>{e.startup}</p>
            <p>{e.pitch}</p>
            <div className="flex space-x-2">
              <Link to={`/profile/entrepreneur/${e.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Profile
                </button>
              </Link>
              <Link to={`/chat/${e.id}`}>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Message
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default InvestorDashboard;