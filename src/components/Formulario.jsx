import { useState } from "react";
import Alerta from "./Alerta";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropoetario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState(Date.now());
  const [sintomas, setSintomas] = useState("");

  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDAR FORMULARIO
    if ([nombre, propietario, email, sintomas].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    console.log("tdoo lleno");
  };

  const { msg } = alerta;

  return (
    <>
      <p className="text-lg text-center mb-10">
        Añade tus pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label className="text-gray-700 font-bold uppercase" htmlFor="nombre">
            Nombre Mascota
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre de la mascota"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="text-gray-700 font-bold uppercase"
            htmlFor="propietario"
          >
            Nombre Propetario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del Propetario"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropoetario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="text-gray-700 font-bold uppercase" htmlFor="email">
            Email Propetario
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email del Propetario"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="text-gray-700 font-bold uppercase" htmlFor="fecha">
            Fecha alta
          </label>
          <input
            type="date"
            id="fecha"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="text-gray-700 font-bold uppercase"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Agregar pacientes"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
        />
      </form>
      {msg && <Alerta alerta={alerta} />}
    </>
  );
};

export default Formulario;
