import postImg from "../../assets/txt_img.png";
import {
  Image as ImageIcon,
  Video,
  Calendar,
  FileText,
  Send,
} from "lucide-react";
import { useRef } from "react";

const CreatePost = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm font-poppins">

      {/* TOP */}
      <div className="flex items-start gap-3 mb-5">
        <img
          src={postImg}
          className="w-10 h-10 rounded-full object-cover"
        />

        <textarea
          placeholder="Write something ..."
          rows={1}
          className="w-full text-sm outline-none text-gray-700 resize-none leading-relaxed"
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = target.scrollHeight + "px";
          }}
        />
      </div>

      {/* ACTION BAR */}
      <div className="bg-blue-50 rounded-xl px-4 py-3 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-6 text-sm text-gray-600">

          {/* PHOTO */}
          <button
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-2"
          >
            <ImageIcon className="w-4 h-4" />
            Photo
          </button>

          {/* hidden file input */}
          <input
            type="file"
            ref={fileRef}
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                console.log("Selected file:", file);
              }
            }}
          />

          {/* VIDEO */}
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Video
          </div>

          {/* EVENT */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Event
          </div>

          {/* ARTICLE */}
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Article
          </div>
        </div>

        {/* POST BUTTON */}
        <button className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-lg text-sm">
          <Send className="w-4 h-4" />
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;