import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DATABASE_KEYS } from "../../constants/database-key";
import { WebDatabase } from "../../utils/webDatabase";

const DonorsPage = () => {
  const [donors, setDonors] = useState([]);

  // LocalStorage se donors load karna
  useEffect(() => {
    const savedDonors = WebDatabase.getItem(DATABASE_KEYS.DONORS) || [];
    setDonors(savedDonors);
  }, []);

  // Donors clear karne ka function
  const clearDonors = () => {
    WebDatabase.removeItem(DATABASE_KEYS.DONORS);
    setDonors([]);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-red-500">Available Donors</h2>

        <div className="flex gap-3">
          <Link
            to="/donors/add"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Add Donor
          </Link>

          {/* Clear All Button */}
          {donors.length > 0 && (
            <button
              onClick={clearDonors}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {donors.length === 0 ? (
        <p className="text-center text-gray-500">No donors registered yet.</p>
      ) : (
        // 👇 Scrollable container
        <div className="h-[500px] overflow-y-auto pr-2">
          <div className="grid md:grid-cols-2 gap-6">
            {donors.map((donor, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-red-500"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {donor.name}
                </h3>
                <p className="text-gray-600">📧 {donor.email}</p>
                <p className="text-gray-600">📞 {donor.phone}</p>
                <p className="text-gray-800 font-bold">
                  🩸 Blood Group: {donor.bloodGroup}
                </p>

                {/* View Details Button */}
                <Link
                  to={`/donors/${index}`}
                  className="mt-3 inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorsPage;
