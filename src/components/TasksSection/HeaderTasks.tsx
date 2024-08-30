import React, { useState } from "react";
import BtnAddTask from "../Utilities/BtnAddTask";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import AppsIcon from "@mui/icons-material/Apps";
import SearchField from "./SearchField";
import { useAppDispatch } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import DarkMode from "../AccountSection/DarkMode";
import { BackDrop } from "../hooks/useBackDrop";

const HeaderTasks: React.FC = () => {
  const dispatch = useAppDispatch();
  let [BackState, BackSet] = useState(false);

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };

  return (
    <header className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex ">
      <button
        className="mr-6 block xl:hidden"
        onClick={openMenuHeaderHandler}
        title="Abrir Menu"
      >
        <MenuIcon />
      </button>
      <SearchField />
      <div className="text-center">
        <span className="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden">
          ProjectApp
        </span>
      </div>
      <div className="flex flex-1">
        <div className="sm:mr-4 md:mr-6 ml-auto grid place-items-center relative" />
        <DarkMode />
        <BtnAddTask className="hidden xl:block shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent" />
        <button
          className="block xl:hidden"
          onClick={() => {
            BackState = true;
            BackSet(true);
            setTimeout(() => {
              localStorage.setItem("Alert", JSON.stringify("Showed"));
            }, 2000);
          }}
        >
          <AppsIcon
            className="shadow-slate-400 dark:shadow-slate-900 sm:shadow-transparent"
            style={{ fontSize: 33 }}
          />
        </button>
      </div>
    </header>
  );
};

export default HeaderTasks;
