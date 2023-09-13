import React from 'react';
import { Table } from 'react-bootstrap';

const ClasesTable = ({ horario }) => {
  // Obtener todos los días disponibles en el horario
  const dias = Object.keys(horario);

  return (
    <Table bordered striped>
      <thead>
        <tr>
          <th>Hora</th>
          {dias.map((dia) => (
            <th key={dia}>{dia}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {horario &&
          horario[dias[0]].map((clase, index) => (
            <tr key={index}>
              <td>{clase.horaInicio}</td>
              {dias.map((dia) => {
                const clasesDia = horario[dia];
                const claseHora = clasesDia[index];

                return (
                  <td key={dia}>
                    {claseHora && (
                      <>
                        <div>{claseHora.clase}</div>
                        <div>Duración: {claseHora.duracion} minutos</div>
                        <img src={claseHora.logo} alt={claseHora.clase} />
                      </>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ClasesTable;
