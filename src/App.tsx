import DateComp from "./components/DateComp";
import NavBar from "./components/NavBar";

const App = () => {
  const events = [
    {
      name: "Hackathon",
      date: "2025-07-10",
      time: "10:00 AM - 6:00 PM",
      venue: "Main Auditorium",
      icon: "💻",
    },
    {
      name: "Tech Talks",
      date: "2025-07-11",
      time: "11:00 AM - 4:00 PM",
      venue: "Seminar Hall A",
      icon: "🎤",
    },
    {
      name: "Project Expo",
      date: "2025-07-12",
      time: "10:00 AM - 3:00 PM",
      venue: "Innovation Gallery",
      icon: "📊",
    },
    {
      name: "Robotics Showdown",
      date: "2025-07-12",
      time: "2:00 PM - 5:00 PM",
      venue: "Tech Arena",
      icon: "🤖",
    },
    {
      name: "Gaming Tournament",
      date: "2025-07-11",
      time: "6:00 PM - 9:00 PM",
      venue: "Lab 3B",
      icon: "🎮",
    },
  ];

  return (
    <>
      <NavBar />
      <section
        id="hero"
        className="min-h-screen flex w-screen p-4 items-center justify-around"
      >
        <div className="w-[40%]">
          <h1 className="font-semibold text-xl my-2 text-neutral-800">
            Heading
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            modi ad? Veniam, quo impedit beatae eos sed eius. Nam iusto neque
            vitae placeat quibusdam eos in officiis itaque dolores accusamus.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Model_Engineering_College.jpg/2560px-Model_Engineering_College.jpg"
          alt="Model Engineering College"
          className="h-[60vh] w-auto rounded-2xl"
        />
      </section>
      <section
        id="about"
        className="min-h-[60vh] flex-col flex w-full p-8 items-center gap-8 bg-neutral-200"
      >
        <div className="relative">
          <h1 className="text-2xl font-semibold">About</h1>
          <div className="absolute left-1/2 -bottom-1 w-[80%] h-0.5 bg-blue-500 -translate-x-1/2" />
        </div>
        <div className="flex items-center justify-around">
          <p className="w-[50%] text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            eveniet, placeat ducimus repellat officiis perspiciatis porro
            tempora officia, quam fuga commodi. Debitis omnis consequuntur
            quisquam voluptatem minima non hic ea. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Blanditiis eveniet, placeat ducimus
            repellat officiis perspiciatis porro tempora officia, quam fuga
            commodi. Debitis omnis consequuntur quisquam voluptatem minima non
            hic ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis eveniet, placeat ducimus repellat officiis perspiciatis
            porro tempora officia, quam fuga commodi. Debitis omnis consequuntur
            quisquam voluptatem minima non hic ea.
          </p>
          <img src="/about.png" alt="about" className="h-[40vh] rounded-2xl" />
        </div>
      </section>
      <section
        id="dates"
        className="min-h-[90vh] w-full p-4 items-center flex flex-col justify-around"
      >
        <div className="relative">
          <h1 className="text-2xl font-semibold">Schedule</h1>
          <div className="absolute left-1/2 -bottom-1 w-[80%] h-0.5 bg-blue-500 -translate-x-1/2" />
        </div>
        <div className="flex flex-col items-center m-6 gap-2">
          {events.map((event) => (
            <DateComp event={event} />
          ))}
        </div>
      </section>
      <footer className="mt-auto bg-[#1e293b] py-6 px-4 text-center">
        <h4 className="font-semibold text-xl my-2">Contact Us</h4>
        <p className="text-gray-400">Email: excel2025@event.com</p>
        <p className="text-gray-400">Phone: xxxxxxxxxx</p>
        <div className="mt-4 text-sm text-gray-500">
          &copy; 2025 Excel. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default App;
