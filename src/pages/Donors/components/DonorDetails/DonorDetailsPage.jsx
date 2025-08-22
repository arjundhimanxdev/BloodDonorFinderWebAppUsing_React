import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DATABASE_KEYS } from "../../../../constants/database-key";
import { WebDatabase } from "../../../../utils/webDatabase";

const DonorDetailsPage = () => {
  const { id } = useParams();
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    const savedDonors = WebDatabase.getItem(DATABASE_KEYS.DONORS) || [];
    setDonor(savedDonors[id]);
  }, [id]);

  if (!donor) {
    return <p className="text-center mt-10 text-gray-500">Donor not found.</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-xl rounded-xl p-6">
      <h2 className="text-2xl font-bold text-red-500 mb-4">{donor.name}</h2>
      <p className="text-gray-700 mb-2">📧 Email: {donor.email}</p>
      <p className="text-gray-700 mb-2">📞 Phone: {donor.phone}</p>
      <p className="text-gray-700 mb-2">🏠 Address: {donor.address}</p>
      <p className="text-gray-900 font-bold">
        🩸 Blood Group: {donor.bloodGroup}
      </p>

      <div className="mt-6">
        <Link
          to="/donors"
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          ⬅ Back to Donors
        </Link>
      </div>
    </div>
  );
};

export default DonorDetailsPage;
