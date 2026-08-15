import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addToClips, updateToClips } from '../redux/clipSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const clipId = searchParams.get("clipId");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allclips = useSelector((state) => state.clip.clips);

    useEffect(() => {
        console.log("inside use effect");
        if(clipId) {
           const clip = allclips.find((p) => p._id === clipId);
           if (clip) {
            console.log("Page Found"); 
            setTitle(clip.title);
            setValue(clip.content);
           } 
        }
      
    }, [clipId, allclips]);

    function developClip() {
      const clip = {
        title: title,
        content: value,
        _id: clipId ||
        Date.now().toString(36),
        developedAt:new Date().toISOString(),   
    }

    if(clipId) {
       //Update
       dispatch(updateToClips(clip));
    }
    else {
       //develop
       dispatch(addToClips(clip));
    }

    //after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
    navigate("/clips");
    }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
      <input className='p-1 rounded-2xl mt-5 w-[66%] pl-4'
        type="text"
        placeholder='enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
      />

      <button 
       onClick={developClip}
       className="p-2 rounded-2xl mt-5">
        {
            clipId ? "Update Clip" : "Develop Clip"
        }
       </button>
    </div>  
    <div className='mt-8'>
        <textarea
            className="rounded-2xl mt-4, min-w-[500px] p-4"
            value={value}
            placeholder='enter content here'
            onChange={(e) => setValue(e.target.value)}
            rows={20}
        />
    </div>
    </div>
  );
};

export default Home
