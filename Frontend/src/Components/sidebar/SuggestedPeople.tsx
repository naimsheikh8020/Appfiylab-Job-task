import stevejobs from "../../assets/people1.png";

const SuggestedPeople = () => {
  const people = [
    {
      name: "Steve Jobs",
      role: "CEO of Apple",
      img: stevejobs,
    },
    {
      name: "Ryan Roslansky",
      role: "CEO of Linkedin",
      img: stevejobs,
    },
    {
      name: "Dylan Field",
      role: "CEO of Figma",
      img: stevejobs,
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-gray-800">
          Suggested People
        </h3>
        <button className="text-sm text-blue-500 font-medium">
          See All
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {people.map((person, i) => (
          <div key={i} className="flex items-center justify-between">
            
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <img
                src={person.img}
                alt={person.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800 leading-none">
                  {person.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {person.role}
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="text-sm border border-gray-200 px-3 py-1.5 rounded-md text-gray-600 hover:bg-gray-50 transition">
              Connect
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SuggestedPeople;