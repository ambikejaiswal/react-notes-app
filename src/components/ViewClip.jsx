import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { addToClips, updateToClips } from '../redux/clipSlice';


const ViewClip = () => {

    const {id} = useParams();

    const allclips = useSelector((state) => state.clip.clips);

    const clip = allclips.filter((p) => p._id === id)[0];
    console.log("First Clip:", clip);
   

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
      <input className='p-1 rounded-2xl mt-5 w-[66%] pl-4'
        type="text"
        placeholder='enter title here'
        value={clip?.title || ""}
        disabled
        onChange={(e) => setTitle(e.target.value)} 
      />

      {/* <button 
       onClick={developClip}
       className="p-2 rounded-2xl mt-5">
        {
            clipId ? "Update Clip" : "Develop Clip"
        }
       </button> */}
    </div>  
    <div className='mt-8'>
        <textarea
            className="rounded-2xl mt-4, min-w-[500px] p-4"
            value={clip?.content || ""}
            placeholder='enter content here'
            disabled
            onChange={(e) => setValue(e.target.value)}
            rows={20}
        />
    </div>
    </div>
  )
}

export default ViewClip
