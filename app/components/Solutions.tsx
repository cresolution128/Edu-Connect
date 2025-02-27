import Image from "next/image";
import { FaChalkboardTeacher, FaSchool, FaTasks, FaUserGraduate } from "react-icons/fa";

const Sol = [
  {
    title: "Student Management",
    description:
      "This solution focuses on managing student data, including enrollment, attendance, grades, and demographics.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Learning Management",
    description:
      "Features may include course creation, content management, assignment submission, grading tools, and discussion forums.",
    icon: <FaSchool />,
  },
  {
    title: "Performance Tracker",
    description:
      "This solution encompasses a range of functionalities, including the ability to create and manage courses.",
    icon: <FaUserGraduate />,
  },
  {
    title: "Integrated ERP",
    description:
      "This system offers a comprehensive suite of tools for managing all aspects of school operations in one platform.",
    icon: <FaTasks />,
  },
];

const Solutions = () => {
  return (
    <section id="Solutions" className="section w-9/12 mx-auto pt-12 pb-10">
      <h3 className="text-4xl pt-10 font-bold text-center">
        Our Solutions For Your School
      </h3>
      <h6 className="text-center text-gray-400 pt-5">
        We make it easy for users to use our platform, that's why we provide
        this benefit.
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center py-20 gap-y-10 xl:gap-3">
        {Sol.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4 border-2 pt-10 pb-20 px-3 rounded-xl shadow-sm bg-white">
            <div className="flex items-center justify-center size-16 [&>*]:text-4xl rounded-lg bg-primary-light text-primary-main">
              {item.icon}
            </div>
            <p className="text-xl font-semibold">{item.title}</p>
            <p className="text-sm text-gray-400 w-60 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
