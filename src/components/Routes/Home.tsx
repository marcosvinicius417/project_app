import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("Organize os Usuarios", "Todos os Usuarios");
  return <LayoutRoutes title="Todos os Usuarios" tasks={tasks}></LayoutRoutes>;
};

export default Home;
