import { useState } from "react";

export default function AmigoSecreto() {
  const [participantes, setParticipantes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [resultado, setResultado] = useState(null);

  const agregarParticipante = () => {
    if (nombre.trim() !== "" && !participantes.includes(nombre)) {
      setParticipantes([...participantes, nombre]);
      setNombre("");
    }
  };

  const sortearAmigoSecreto = () => {
    if (participantes.length < 2) {
      alert("Necesitas al menos 2 participantes para hacer el sorteo.");
      return;
    }
    
    let mezcla = [...participantes];
    mezcla.sort(() => Math.random() - 0.5);
    let parejas = {};

    for (let i = 0; i < mezcla.length; i++) {
      let siguiente = i === mezcla.length - 1 ? 0 : i + 1;
      parejas[mezcla[i]] = mezcla[siguiente];
    }
    setResultado(parejas);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md text-center">
      <h1 className="text-xl font-bold">Amigo Secreto 🎁</h1>
      <input
        className="border p-2 rounded w-full mt-2"
        type="text"
        placeholder="Ingrese un nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
        onClick={agregarParticipante}
      >
        Agregar Participante
      </button>

      <ul className="mt-4 text-left">
        {participantes.map((p, index) => (
          <li key={index} className="border p-2 rounded mt-1">{p}</li>
        ))}
      </ul>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
        onClick={sortearAmigoSecreto}
      >
        Sortear Amigo Secreto 🎉
      </button>

      {resultado && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-bold">Resultados:</h2>
          {Object.keys(resultado).map((persona, index) => (
            <p key={index} className="mt-1">{persona} → {resultado[persona]}</p>
          ))}
        </div>
      )}
    </div>
  );
}
