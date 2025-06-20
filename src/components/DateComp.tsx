import { MdEdit } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

const DateComp = ({
  event: { name, date, time, venue, icon },
}: {
  event: {
    name: string;
    date: string | Date;
    time: string;
    venue: string;
    icon: string;
  };
}) => {
  return (
    <div className="flex items-center p-6 bg-neutral-200 rounded-2xl justify-around min-w-[50vw] gap-4 text-xl">
      <div className="text-3xl bg-neutral-300 p-6 rounded-full">{icon}</div>
      <div className="">
        <div className="">{name}</div>
        <div className="">{date.toString()}</div>
        <div className="">{time.toString()}</div>
        <div className="">{venue}</div>
      </div>
      <div className="flex gap-4">
        <MdEdit size={30} />
        <SlOptions size={30} />
      </div>
    </div>
  );
};

export default DateComp;
