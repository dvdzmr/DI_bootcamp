import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAgeAsync, incrementAgeAsync } from '../store/ageSlice';


const AgeCounter = () => {
    const dispatch = useDispatch();
    const age = useSelector((state) => state.age.value);
    const loading = useSelector((state) => state.age.loading);
    const error = useSelector((state) => state.age.error);

    return (
        // <div className="container mt-5">
            <div>
                <div>
                    <h1>Age Simulator 2024</h1>
                </div>
                <div>
                    <h3>Age: {age}</h3>
                    <button
                        onClick={() => dispatch(incrementAgeAsync(1))}
                        disabled={loading}
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => dispatch(decrementAgeAsync(1))}
                        disabled={loading}
                    >
                        Decrement
                    </button>
                    {loading && (
                        <div>
                            <p>Calculating age...</p>
                        </div>
                    )}
                    {error && <p>Error: {error}</p>}
                </div>
            </div>
    );
};

export default AgeCounter;