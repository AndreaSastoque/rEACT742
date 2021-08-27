import React from 'react';

const Estudiante = ({nombre, edad, genero}) => (
    <div className="card">
        <div className="card-body">
            {/*  ternario para validar un promp */}

            <h5 className="card-title">
                {nombre ? nombre : "no hay nombre" }
            </h5>
            <p className="card-text">Edad: {edad}.</p>
            <p className="card-text">Edad: {genero}.</p>
        </div>
    </div>
);

export default Estudiante;