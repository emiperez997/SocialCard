import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

function SocialCard({
  username,
  name,
  image,
  comments,
  likes,
  content,
  picture_image,
  openMenu,
}) {
  const [showContent, setShowContent] = useState(false);

  const previewContent = content.slice(0, 100);

  return (
    <div className={`h-auto w-96 bg-white rounded-lg`}>
      <div className="p-3 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={picture_image}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />

          <div className="flex flex-col  ">
            <h2 className="text-md font-bold leading-5">{name}</h2>
            <p className="font-thin text-sm text-gray-600">@{username}</p>
          </div>
        </div>

        <div>
          <BsThreeDotsVertical
            className="text-slate-800 text-xl cursor-pointer"
            onClick={openMenu}
          />
        </div>
      </div>

      <div className="bg-gray-800">
        <img src={image} alt="User" className="object-fill w-full h-full" />
      </div>

      <div className="p-3">
        <p className="leading-5 text-slate-700">
          {showContent ? (
            <>
              {content} <br />
              <button
                className="text-gray-600 font-bold text-md"
                onClick={() => setShowContent(false)}
              >
                See less
              </button>
            </>
          ) : (
            <>
              {previewContent}...{" "}
              <button
                className="text-gray-600 font-bold text-md"
                onClick={() => setShowContent(true)}
              >
                See more
              </button>
            </>
          )}
        </p>
      </div>

      <hr class="h-px my-1 bg-slate-400" />

      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-2 text-slate-600">
          <FaRegCommentAlt className="text-lg" />
          <p className="text-sm">{comments}</p>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <FaRegHeart className="text-xl" />
          <p className="text-sm">{likes}</p>
        </div>

        <div>
          <FaRegBookmark className="text-lg text-slate-600" />
        </div>
      </div>
    </div>
  );
}

export { SocialCard };
