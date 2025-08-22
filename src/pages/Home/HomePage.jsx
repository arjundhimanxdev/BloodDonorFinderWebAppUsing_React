import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaDroplet, FaTrash } from "react-icons/fa6";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-7">
      <section className="rounded-2xl bg-gray-200 p-3 flex gap-3 mt-5 w-full h-[calc(100vh-5rem)]">
        {/* LEFT PANEL */}
        <section className="flex h-[10] flex-col gap-2 w-[40%] sticky top-5 self-start">
          <div className="p-4 rounded-2xl justify-center flex flex-col items-center bg-red-700 h-[40vh]">
            <FaDroplet className="text-white w-12 h-10" />
            <h2 className="text-white text-xl font-semibold md:text-2xl pt-2">
              Find a Donor
            </h2>
            <p className="text-white p-2">
              Help others by <br /> donating blood
            </p>
            <button className="text-red-700 px-5 py-2 font-semibold cursor-pointer bg-white rounded-xl">
              Post a Request
            </button>
          </div>

          {/* Chat / ToDo Input + List */}
          <div className="p-4 overflow-y-auto rounded-2xl bg-gray-100 h-[42vh] flex flex-col">
            <form onSubmit={addTask} className="flex gap-2 mb-3">
              <input
                className="flex-1 shadow-xl py-3 shadow-gray-800/5 rounded-2xl px-4 text-gray-700 border-none outline-none"
                id="input"
                type="text"
                placeholder="Type a message...."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Add
              </button>
            </form>

            {/* List */}
            <div className="flex-1 overflow-y-auto space-y-2">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white p-2 rounded-lg shadow"
                >
                  <span className="text-gray-700">{task}</span>
                  <button
                    onClick={() => deleteTask(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT PANEL WITH SCROLL */}
        <aside className="p-4 w-[60%] rounded-2xl bg-white overflow-y-auto">
          <div className="space-y-4">
            <Outlet />
          </div>
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
