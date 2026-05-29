function App() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Doorstep Electrician
        </h1>

        <p className="text-xl">
          Fast & Reliable Electrical Services in Mumbai
        </p>
      </div>

      {/* Service Areas */}
      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Service Areas
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["Bandra", "Khar", "Santacruz", "Vile Parle"].map((area) => (
            <div
              key={area}
              className="bg-yellow-200 px-6 py-3 rounded-xl shadow-md"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Complaint Form */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Raise Complaint
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <select className="w-full border p-3 rounded-lg">
            <option>Select Area</option>
            <option>Bandra</option>
            <option>Khar</option>
            <option>Santacruz</option>
            <option>Vile Parle</option>
          </select>

          <textarea
            placeholder="Full Address"
            className="w-full border p-3 rounded-lg"
          />

          <select className="w-full border p-3 rounded-lg">
            <option>Select Issue</option>
            <option>Fan Repair</option>
            <option>Light Issue</option>
            <option>MCB Trip</option>
            <option>Wiring Problem</option>
          </select>

          <input
            type="date"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="time"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Describe your issue"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
