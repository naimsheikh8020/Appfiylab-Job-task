import myStory from "../../assets/card_ppl1.png";
import story2 from "../../assets/card_ppl2.png";
import story3 from "../../assets/card_ppl3.png";
import story4 from "../../assets/card_ppl4.png";
import profile from "../../assets/mini_pic.png";
import { Plus } from "lucide-react";

const Stories = () => {
  const stories = [
    { img: story2, name: "Ryan Roslansky" },
    { img: story3, name: "Ryan Roslansky" },
    { img: story4, name: "Ryan Roslansky" },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">

      {/* YOUR STORY */}
      <div className="relative min-w-[140px] h-[190px] rounded-xl overflow-hidden">
        <img
          src={myStory}
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* PLUS BUTTON */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
          <Plus className="w-4 h-4 text-white" />
        </div>

        {/* TEXT */}
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-sm font-medium">
          Your Story
        </p>
      </div>

      {/* OTHER STORIES */}
      {stories.map((story, i) => (
        <div
          key={i}
          className="relative min-w-[140px] h-[190px] rounded-xl overflow-hidden"
        >
          {/* IMAGE */}
          <img
            src={story.img}
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* PROFILE */}
          <img
            src={profile}
            className="absolute top-2 right-2 w-8 h-8 rounded-full border-2 border-white object-cover"
          />

          {/* NAME */}
          <p className="absolute bottom-3 left-3 text-white text-sm font-medium">
            {story.name}
          </p>
        </div>
      ))}

    </div>
  );
};

export default Stories;