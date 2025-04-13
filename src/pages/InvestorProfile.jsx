import { useParams } from "react-router-dom";
import { investors } from "../data/mockData";

const InvestorProfile = () => {
  const { id } = useParams();
  const investor = investors.find((i) => i.id === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4 text-blue-600">Investor Profile</h2>
      <div className="bg-white p-6 rounded shadow-md">
        <p><strong>Name:</strong> {investor.name}</p>
        <p><strong>Bio:</strong> {investor.bio}</p>
        <p><strong>Interests:</strong> {investor.interests}</p>
        <p><strong>Portfolio:</strong> {investor.portfolio}</p>
      </div>
    </div>
  );
};
export default InvestorProfile;