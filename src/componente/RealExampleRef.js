import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Ejemplo Practico haciendo llamado a la api</h1>
            <h3>The Breaking Bad API
...Tread Lightly</h3>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
