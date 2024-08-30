import React from "react";
import { Task } from "../../../interfaces";
import BtnEditTask from "./BtnEditTask";
import BtnDeleteTask from "./BtnDeleteTask";

const ActionsTaskItem: React.FC<{ task: Task; isListInView1: boolean }> = ({
  task,
  isListInView1,
}) => {
  return (
    <>
      <div
        className={`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${
          isListInView1 ? "items-center" : "border-t-2 w-full pt-4 mt-4"
        }`}
      >
        <BtnDeleteTask taskId={task.id} />
        <BtnEditTask task={task} />
      </div>
    </>
  );
};

export default ActionsTaskItem;
