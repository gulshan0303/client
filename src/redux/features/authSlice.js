import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser,saveImage } from '../api';

export const registerUserAsync = createAsyncThunk(
  'auth/registerUser',
  async (userData) => {
    const response = await registerUser(userData);
    return response.data;
  }
);

export const imageSave = createAsyncThunk(
  'image/likeImage',
  async (userData) => {
    const response = await saveImage(userData);
  
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  'auth/loginUser',
  async (userData) => {
    const response = await loginUser(userData);
    
    return response.data;
  }
);

const initialState ={
    isLoading: false,
    error: null,
    user:null,
    success: false,
    imageUrl:null,
    clickTime:null
}

const registrationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.imageUrl=action.payload
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUserAsync.fulfilled, (state,action) => {
        state.isLoading = false;
        state.user = action.payload;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.error = action.payload.message;
        state.success = true;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message;
        state.success = false;
      })

      // for login
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUserAsync.fulfilled, (state,action) => {
        state.isLoading = false;
        state.user = action.payload;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.error = action.payload.message;
        state.success = true;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.success = false;
      })

      .addCase(imageSave.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(imageSave.fulfilled, (state,action) => {
        state.isLoading = false;
        state.clickTime = action.payload
        state.imageUrl = action.payload
        state.success = true;
      })
      .addCase(imageSave.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.success = false;
      });
  },
});

export default registrationSlice.reducer;

export const { setUser, setLogout } = registrationSlice.actions;