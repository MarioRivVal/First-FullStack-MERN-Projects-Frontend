import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const PacienteContext = createContext();

export const PacientesProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const optenerPacientes = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios("/pacientes", config);
        setPacientes(data);
      } catch (error) {
        console.log(error);
      }
    };

    optenerPacientes();
  }, []);

  const guardarPaciente = async (paciente) => {
    if (paciente.id) {
      console.log("editanod");
    } else {
      console.log("nuevo");
    }
    return;

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios.post("/pacientes", paciente, config);

      const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data;
      setPacientes([pacienteAlmacenado, ...pacientes]);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const setEdicion = (paciente) => {
    setPaciente(paciente);
  };

  return (
    <PacienteContext.Provider
      value={{ pacientes, guardarPaciente, setEdicion, paciente }}
    >
      {children}
    </PacienteContext.Provider>
  );
};

export default PacienteContext;
