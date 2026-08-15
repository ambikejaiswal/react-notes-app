import { createSlice } from '@reduxjs/toolkit'
import  toast from 'react-hot-toast';


const initialState = {
  clips: localStorage.getItem("clips")
  ?   JSON.parse(localStorage.getItem("clips"))
  : []
}

export const clipSlice = createSlice({
  name: 'clips',
  initialState,
  reducers: {
    addToClips: (state,action) => {
      const clip = action.payload;

      //add a check -> Clip already exist 
      //wala case

      state.clips.push(clip);
      localStorage.setItem("clips",
      JSON.stringify(state.clips));
      toast("Clip Develop Successfully")
    },
    updateToClips: (state,action) => {
      const clip = action.payload;
      const index = state.clips.findIndex((item) => 
      item._id === clip._id);

      if (index >= 0) {

        state.clips[index] = clip;
   
        localStorage.setItem("clips", 
        JSON.stringify(state.clips));
        
        toast.success("Clip Updated");
      }
    },
    resetAllClips: (state, action) => {
      state.clips = [];

      localStorage.removeItem("clips");
    },
    removeFromClips: (state,action) => {
      const clipId = action.payload;

      console.log(clipId);
      const index = state.clips.findIndex((item) => 
      item._id === clipId); 
      
      if (index >= 0) {
        state.clips.splice(index, 1);

        localStorage.setItem("clips", 
        JSON.stringify(state.clips));
        
        toast.success("Clip Deleted");
      }

    },
  },
});

// Action creators are generated for each case reducer function
export const { addToClips,  updateToClips, resetAllClips, removeFromClips } = clipSlice.actions

export default clipSlice.reducer