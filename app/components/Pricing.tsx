import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

const Check = ({ locked, extended }: any) =>
  locked ? (
    <FaCheck className="text-white text-lg p-1 bg-gray-400 rounded-full" />
  ) : extended ? (
    <FaCheck className="text-black text-lg p-1 bg-white rounded-full font-thin" />
  ) : (
    <FaCheck className="text-white text-lg font-thin p-1 bg-black rounded-full" />
  );

const Standard = {
  features: [
    "Student Enrollment Management",
    "Attendance Tracking",
    "Basic Reporting",
    "Payement Tracking",
  ],
  pro: ["Teacher & Staff Management", "Advanced Reporting", "Email Support"],
};

const Extended = [
  "Student Enrollment Management",
  "Attendance Tracking",
  "Basic Reporting",
  "Payement Tracking",
  "Teacher & Staff Management",
  "Advanced Reporting",
  "Email Support",
];

const Pricing = () => {
  return (
    <section id="Pricing" className="md:px-80 py-20">
      <h3 className="text-4xl pt-10 font-bold text-center">Our pricing</h3>
      <h6 className="text-center text-gray-400 pt-10">
        Pay securely online and manage the booking via desktop or via the mobile
        app.
      </h6>
      <div>
        <div className="flex flex-col md:flex-row justify-center gap-20 pt-10">
          <div className="flex flex-col items-center gap-8 border-2 pt-10 pb-10 px-3 mx-10 md:mx-0 rounded-xl shadow-sm bg-white">
            <p className="text-2xl font-semibold">Standard</p>
            <p className="text-sm text-gray-400">
              The national average cost of buying coin easy.
            </p>
            <p className="text-6xl font-semibold">
              $15
              <span className="text-xl text-gray-400 font-normal">/month</span>
            </p>
            <p className="text-sm text-gray-400 w-60 text-center">
              10% discount for 6 months
            </p>
            <Button className="bg-primary-main text-white w-full hover:bg-primary-dark">
              Select Plan
            </Button>
            <div className="flex flex-col justify-start items-start gap-4 w-full mt-4 pl-2">
              {Standard.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 text-sm">
                  <Check />
                  <p>{feature}</p>
                </div>
              ))}
              {Standard.pro.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 text-sm">
                  <Check locked />
                  <p className="line-through">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 border-2 pt-10 pb-10 px-3 mx-10 md:mx-0 rounded-xl shadow-sm bg-primary-main text-white">
            <p className="text-2xl font-semibold">Extended</p>
            <p className="text-sm text-gray-300">
              The national average cost of buying coin easy.
            </p>
            <p className="text-6xl font-semibold">
              $30
              <span className="text-xl text-gray-300 font-normal">/month</span>
            </p>
            <p className="text-sm text-gray-300 w-60 text-center">
              10% discount for 6 months
            </p>
            <Button
              variant="outline"
              className="text-black bg-white font-semibold w-full"
            >
              Select Plan
            </Button>
            <div className="flex flex-col justify-start items-start gap-4 w-full mt-4 pl-2">
              {Extended.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 text-sm">
                  <Check extended />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
