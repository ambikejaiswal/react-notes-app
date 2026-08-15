import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromClips } from '../redux/clipSlice';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

const Clip = () => {

    const clips = useSelector((state) => state.clip.clips);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const filteredData = clips.filter((clip) => {
    const search = searchTerm.toLowerCase();

    const [openShareId, setOpenShareId] = useState(null);

  const handleShare = (platform, clip) => {

    const url = `${window.location.origin}/clips/${clip._id}`;

    const text = `${clip.title}

${clip.content}

${url}`;

    switch(platform) {

        case "copy":
            navigator.clipboard.writeText(text);
            toast.success("Link copied!");
            break;

        case "whatsapp":
            window.open(
                `https://wa.me/?text=${encodeURIComponent(text)}`,
                "_blank"
            );
            break;

        case "telegram":
            window.open(
                `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(clip.title)}`,
                "_blank"
            );
            break;

        case "twitter":
            window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
                "_blank"
            );
            break;

        case "linkedin":
            window.open(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                "_blank"
            );
            break;

        default:
            break;
    }

    setOpenShareId(null);
};
   return (
    clip.title.toLowerCase().includes(search) ||
    clip.content.toLowerCase().includes(search)
  );
});
    function handleDelete(clipId) {
        dispatch(removeFromClips(clipId));
    }

  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-[600px] mt-5"
        type="search"
        placeholder="Search by title or content..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-5 mt-5'>
        {
            filteredData.length > 0 &&
            filteredData.map(
                (clip) => {
                    return(
                        <div className='border' key={clip?._id}>
                            <div>
                                {clip.title}
                            </div>
                            <div>
                                {clip.content}
                            </div>
                            <div 
                            className='flex flex-row gap-4 place-content-evenly'>
                                <button>
                                    <Link to={`/?clipId=${clip._id}`}>
                                        Edit
                                    </Link>
                                </button>
                                <button>
                                    <Link to={`/clips/${clip._id}`}>
                                        View
                                    </Link>
                                </button>
                                <button onClick={() => handleDelete(clip?._id)}>
                                    Delete
                                </button>
                                <button onClick={() => {
                                    navigator.clipboard.writeText
                                    (clip?.content)
                                    toast.success("copied to clipboard")
                                }}>
                                    Copy
                                </button>
                                {/* homework: share botton ka logic likhna h */}
                                <div className="relative">

    <button
        onClick={() =>
            setOpenShareId(
                openShareId === clip._id ? null : clip._id
            )
        }
        className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
    >
        Share
    </button>

    {
        openShareId === clip._id && (

            <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">

                <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-800"
                    onClick={() => handleShare("copy", clip)}
                >
                    📋 Copy Link
                </button>

                <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-800"
                    onClick={() => handleShare("whatsapp", clip)}
                >
                    💬 WhatsApp
                </button>

                <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-800"
                    onClick={() => handleShare("telegram", clip)}
                >
                    ✈️ Telegram
                </button>

                <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-800"
                    onClick={() => handleShare("twitter", clip)}
                >
                    🐦 X (Twitter)
                </button>

                <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-800"
                    onClick={() => handleShare("linkedin", clip)}
                >
                    💼 LinkedIn
                </button>

            </div>

        )
    }

</div>
                            </div>
                            <div>
                                {clip.developedAt}
                            </div>
                        </div>
                    )
                }
            )        
        }

      </div>
    </div>

  )
}

export default Clip
