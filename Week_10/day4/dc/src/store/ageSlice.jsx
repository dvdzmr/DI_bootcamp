import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const incrementAgeAsync = createAsyncThunk('age/incrementAgeAsync', async (amount, thunkAPI) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(amount);
        }, 1500);
    });
});

export const decrementAgeAsync = createAsyncThunk('age/decrementAgeAsync', async (amount, thunkAPI) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(amount);
        }, 3000);
    });
});

const ageSlice = createSlice({
    name: 'age',
    initialState: {
        value: 0,
        status: 'idle',
        loading: false,
        error: null
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        // incrementing
            .addCase(incrementAgeAsync.pending, (state) => {
                state.status = 'loading';
                state.loading = true;
            })
            .addCase(incrementAgeAsync.fulfilled, (state, action) => {
                state.value += action.payload;
                state.status = 'succeeded';
                state.loading = false;
            })
            .addCase(incrementAgeAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                state.loading = false;
            })
        // decrementing
            .addCase(decrementAgeAsync.pending, (state) => {
                state.status = 'loading';
                state.loading = true;
            })
            .addCase(decrementAgeAsync.fulfilled, (state, action) => {
                state.value -= action.payload;
                state.status = 'succeeded';
                state.loading = false;
            })
            .addCase(decrementAgeAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const { increment, decrement, incrementByAmount } = ageSlice.actions;

export default ageSlice.reducer;