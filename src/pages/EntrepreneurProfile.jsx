import { useParams } from "react-router-dom";
import { entrepreneurs } from "../data/mockData";

const EntrepreneurProfile = () => {
  const { id } = useParams();
  const entrepreneur = entrepreneurs.find((e) => e.id === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4 text-blue-600">Entrepreneur Profile</h2>
      <div className="bg-white p-6 rounded shadow-md">
        <p><strong>Name:</strong> {entrepreneur.name}</p>
        <p><strong>Bio:</strong> {entrepreneur.bio}</p>
        <p><strong>Startup:</strong> {entrepreneur.startup}</p>
        <p><strong>Funding Need:</strong> {entrepreneur.funding}</p>
        <p><strong>Pitch:</strong> {entrepreneur.pitch}</p>
      </div>
    </div>
  );
};
export default EntrepreneurProfile;