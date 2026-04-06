import postImg from "../../assets/txt_img.png";
import {
  Image as ImageIcon,
  Video,
  Calendar,
  FileText,
  Send,
} from "lucide-react";
import { useRef, useState } from "react";

const CreatePost = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm font-poppins">

      {/* TOP */}
      <div className="flex items-start gap-3 mb-5">
        <img
          src={postImg}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
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

      {/* IMAGE PREVIEW */}
      {preview && (
        <div className="mb-4 relative">
          <img
            src={preview}
            className="w-full max-h-[300px] object-cover rounded-lg"
          />

          <button
            onClick={() => setPreview(null)}
            className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded"
          >
            Remove
          </button>
        </div>
      )}

      {/* ACTION BAR */}
      <div className="bg-blue-50 rounded-xl px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        {/* LEFT */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600">

          {/* PHOTO */}
          <button
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-2"
          >
            <ImageIcon className="w-4 h-4" />
            Photo
          </button>

          {/* HIDDEN INPUT */}
          <input
            type="file"
            ref={fileRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
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
        <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-lg text-sm w-full sm:w-auto">
          <Send className="w-4 h-4" />
          Post
        </button>

      </div>
    </div>
  );
};

export default CreatePost;