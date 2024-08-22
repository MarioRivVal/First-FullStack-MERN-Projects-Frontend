import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  console.log(auth);
  console.log(cargando);

  if (cargando) return "Cargando...";

  return (
    <>
      <h1>esta es una protegida admin</h1>

      {auth.veterinario?._id ? <Outlet /> : <Navigate to="/" />}
    </>
  );
};

export default RutaProtegida;
