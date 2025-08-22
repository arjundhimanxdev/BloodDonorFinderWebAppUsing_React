import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DATABASE_KEYS } from "../../../../constants/database-key";
import { WebDatabase } from "../../../../utils/webDatabase";

const DonorsFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    address: "",   
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // LocalStorage me data save karna
    const existing = WebDatabase.getItem(DATABASE_KEYS.DONORS) || [];
    const updated = [formData, ...existing]; 
    WebDatabase.setItem(DATABASE_KEYS.DONORS, JSON.stringify(updated));

    navigate("/donors");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4 text-center text-red-500">
        Register as Donor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
          required
        />
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
    
        <textarea
          name="address"
          placeholder="Enter Full Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
          rows="3"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonorsFormPage;
