import postImg from "../../assets/txt_img.png";
import {
  Image as ImageIcon,
  Video,
  Calendar,
  FileText,
  Send,
} from "lucide-react";
import { useRef, useState } from "react";
import { useCreatePost } from "../../hooks/useCreatePost";

const CreatePost = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const { mutate, isPending } = useCreatePost();

  // handle file select
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);

      const url = URL.createObjectURL(selectedFile);
      setPreview(url);
    }
  };

  // handle submit
  const handlePost = () => {
    if (!content && !file) {
      alert("Post cannot be empty");
      return;
    }

    const formData = new FormData();

    formData.append("content", content);
    formData.append("visibility", "public");

    if (file) {
      formData.append("image", file);
    }

    mutate(formData, {
      onSuccess: () => {
        // reset form
        setContent("");
        setFile(null);
        setPreview(null);
      },
    });
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
          value={content}
          className="w-full text-sm outline-none text-gray-700 resize-none leading-relaxed"
          onChange={(e) => setContent(e.target.value)}
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
            onClick={() => {
              setPreview(null);
              setFile(null);
            }}
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

          <div className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Video
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Event
          </div>

          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Article
          </div>
        </div>

        {/* POST BUTTON */}
        <button
          onClick={handlePost}
          disabled={isPending}
          className="flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-lg text-sm w-full sm:w-auto disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {isPending ? "Posting..." : "Post"}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;