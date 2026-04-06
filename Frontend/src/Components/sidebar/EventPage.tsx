import eventImg from "../../assets/group-profile.png";

const EventPage = () => {
  const events = [1, 2];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-gray-800 text-lg">
          Events
        </h3>
        <button className="text-sm text-blue-500 font-medium">
          See all
        </button>
      </div>

      {/* EVENTS LIST */}
      <div className="space-y-6">
        {events.map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={eventImg}
              alt="event"
              className="w-full h-44 object-cover"
            />

            {/* CONTENT */}
            <div className="p-4">

              {/* TITLE + DATE */}
              <div className="flex gap-3 mb-4">
                
                {/* DATE BOX */}
                <div className="bg-green-500 text-white rounded-lg px-3 py-2 text-center leading-tight">
                  <p className="text-sm font-semibold">10</p>
                  <p className="text-xs">Jul</p>
                </div>

                {/* TITLE */}
                <p className="text-lg font-medium text-gray-800 leading-snug font-semibold">
                  No more terrorism no more cry
                </p>
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <p className="text-xs text-gray-400">
                  17 People Going
                </p>

                <button className="text-sm border cursor-pointer bg-blue-50 border-blue-500 text-blue-500 px-4 py-1  hover:bg-blue-100 transition">
                  Going
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EventPage;