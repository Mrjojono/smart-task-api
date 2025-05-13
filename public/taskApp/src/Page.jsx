import { useState } from "react";
import checklist from "./assets/checklist.png";
import favorite from "./assets/favorite.png";
import bin from "./assets/bin.png";
import check from "./assets/check.png";
import account from "./assets/profile.png";
/**===components=== */
import AddTask from "./component/AddTask";
import TaskForm from "./component/TaskForm";

function Page() {
  const [isPuh, setIsPuh] = useState("btn");
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <div>
        <section className="Todo">
          <div className="bg-gray-900 w-[180px] border-r-2  flex flex-col rounded-l-2xl">
            <div className="logo">
              <img
                src={checklist}
                alt="logo"
                className=" mt-auto mb-auto  w-auto h-10"
              />
              <span className="mt-auto mb-auto text-2xl font-bold text-white ">
                TO-DO
              </span>
            </div>

            <div>
              <button
                className={isPuh === "btn-1" ? "side-btn-click" : "side-btn"}
                onClick={() => setIsPuh("btn-1")}
              >
                <img
                  src={check}
                  alt="logo"
                  className=" mt-auto mb-auto  w-auto h-5"
                />
                <span>task</span>
              </button>
              <button
                className={isPuh === "btn-2" ? "side-btn-click" : "side-btn"}
                onClick={() => setIsPuh("btn-2")}
              >
                <img
                  src={favorite}
                  alt="logo"
                  className=" mt-auto mb-auto  w-auto h-5"
                />
                <span>important</span>
              </button>
              <button
                className={isPuh === "btn-3" ? "side-btn-click" : "side-btn"}
                onClick={() => setIsPuh("btn-3")}
              >
                <img
                  src={bin}
                  alt="logo"
                  className=" mt-auto mb-auto  w-auto h-5"
                />
                <span>completed</span>
              </button>
            </div>
          </div>

          <div className="main">
            <div className="header">
              <span>Tasks</span>
              <div className="flex flex-row p-3  gap-2">
                <span className="">Account </span>
                <img
                  src={account}
                  alt="logo"
                  className=" h-10 mt-4  rounded-full"
                />
              </div>
            </div>

            <div className="content">
              {isClick === true ? (
                <TaskForm setIsClick={setIsClick} />
              ) : (
                <AddTask
                  style="bg-green-900 p-7 transition duration-700 ease-in-out shadow-green-800 hover:bg-green-800 cursor-pointer rounded-2xl w-[150px] h-[150px] mt-4 ml-10 mr-4"
                  isClick={isClick}
                  setIsClick={setIsClick}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;
