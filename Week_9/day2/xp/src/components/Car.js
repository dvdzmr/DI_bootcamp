import React, { useState } from 'react';

function Car(car) {
    const [color, setColor] = useState("red");
    return (
        <div>
            <p>This car is model {}{car.carname.name} {car.carname.model} in {color}.</p>
        </div>
    );
}

export default Car;