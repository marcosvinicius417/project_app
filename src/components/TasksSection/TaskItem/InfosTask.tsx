import React from "react";
import { Task } from "../../../interfaces";
import { ReactComponent as Calendar } from "../../../assets/date.svg";
import useDate from "../../hooks/useDate";

const InfosTask: React.FC<{ task: Task; isListInView1: boolean }> = ({
  task,
}) => {
  const dateFormated = useDate(task.date);

  return (
    <div className={`flex flex-col flex-1`}>
      <div className={`flex items-center justify-between`}>
        <span className="block font-medium dark:text-slate-200">
          {task.title}
        </span>
      </div>
      <div className={`flex items-center justify-between`}>
        <span className="block font-medium dark:text-slate-200">
          {task.email}
        </span>
      </div>
      <div className={`flex items-center justify-between`}>
        <span className="block font-medium dark:text-slate-200">
          R${task.value}
        </span>
      </div>
      <time className="mt-auto flex w-full">
        <Calendar className="mr-2 w-4 sm:w-5" /> {dateFormated}
      </time>
    </div>
  );
};

export default InfosTask;
