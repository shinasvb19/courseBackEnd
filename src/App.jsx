import { useEffect, useState } from "react";
import Instance from "./config/Instance";
import moment from "moment";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    Instance.get("/").then((res) => {
      setTableData(res.data);
    });
    // return () => {
    //   cleanup
    // };
  }, []);

  return (
    <div className="w-screen h-screen bg-blue-100 flex justify-center items-center p-2">
      <div className="max-w-[1300px] mx-auto bg-white h-[700px] rounded-lg shadow-2xl p-12 ">
        <div className="w-full flex flex-row justify-between pb-14">
          <h1 className="text-3xl font-bold">My Courses</h1>
          <a className="text-2xl text-violet-500 font-semibold" href="#">
            View All
          </a>
        </div>
        <div className="w-[350px] overflow-x-scroll md:w-[600px] lg:w-full">
          <table className="w-[1000px] table-auto">
            <thead>
              <tr className="h-28">
                <td className="text-2xl font-semibold text-gray-400">
                  Course Name
                </td>
                <td className="text-2xl font-semibold text-gray-400">
                  Start Date
                </td>
                <td className="text-2xl font-semibold text-gray-400">
                  Lesson Completed
                </td>
                <td className="text-2xl font-semibold text-gray-400">
                  Duration
                </td>
              </tr>
            </thead>
            <tbody className="">
              {tableData?.map((data) => (
                <tr className="h-20" key={data._id}>
                  <td className="flex flex-row">
                    <div className="w-16 h-16 rounded-2xl bg-gray-500"></div>
                    <div className="ml-4">
                      <h1 className="text-2xl font-semibold">{data?.name}</h1>
                      <p className="text-lg font-medium text-gray-400">
                        {data?.totalLesson} Lessons
                      </p>
                    </div>
                  </td>
                  <td className="text-2xl font-semibold">
                    {moment(data?.startDate).format("ll")}
                  </td>
                  <td className="text-2xl font-semibold">
                    {data?.lessonCompleted}
                    <span className="text-gray-400">
                      /{data?.totalLesson}
                    </span>{" "}
                    (
                    {Math.floor(
                      (data?.lessonCompleted / data?.totalLesson) * 100
                    )}
                    %)
                  </td>
                  <td className="text-2xl font-semibold">{data?.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
