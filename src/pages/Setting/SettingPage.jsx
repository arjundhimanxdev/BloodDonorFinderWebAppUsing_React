import { useState } from "react";

const SettingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-3">
          ⚙️ Settings
        </h1>

        {/* Profile Settings */}
        <section>
          <h2 className="text-lg font-semibold mb-3">👤 Profile</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-lg"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Save Profile
            </button>
          </div>
        </section>

        {/* Account Settings */}
        <section>
          <h2 className="text-lg font-semibold mb-3">🔒 Account</h2>
          <div className="space-y-3">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border rounded-lg"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Update Password
            </button>
          </div>
        </section>

        {/* Notifications */}
        <section className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">🔔 Notifications</h2>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="hidden"
            />
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ${
                notifications ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                  notifications ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
          </label>
        </section>

        {/* Theme Switch */}
        <section className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">🌗 Dark Mode</h2>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="hidden"
            />
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ${
                darkMode ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                  darkMode ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
          </label>
        </section>

        {/* Logout */}
        <section>
          <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            🚪 Logout
          </button>
        </section>
      </div>
    </div>
    </>
  )
}

export default SettingPage