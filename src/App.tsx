import NavBar from "./components/NavBar";

const App = () => {
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
        className="min-h-[60vh] flex-col flex w-full p-8 items-center gap-4"
      >
        <div className="relative">
          <h1 className="text-2xl font-semibold">About</h1>
          <div className="absolute left-1/2 -bottom-1 w-[80%] h-0.5 bg-blue-500 -translate-x-1/2" />
        </div>
        <p className="w-[80%] text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          eveniet, placeat ducimus repellat officiis perspiciatis porro tempora
          officia, quam fuga commodi. Debitis omnis consequuntur quisquam
          voluptatem minima non hic ea. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Blanditiis eveniet, placeat ducimus repellat
          officiis perspiciatis porro tempora officia, quam fuga commodi.
          Debitis omnis consequuntur quisquam voluptatem minima non hic ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          eveniet, placeat ducimus repellat officiis perspiciatis porro tempora
          officia, quam fuga commodi. Debitis omnis consequuntur quisquam
          voluptatem minima non hic ea.
        </p>
      </section>
      <section
        id="dates"
        className="min-h-[90vh] w-full p-4 items-center justify-around"
      ></section>
      <section
        id="events"
        className="min-h-[90vh] w-full p-4 items-center justify-around"
      ></section>
    </>
  );
};

export default App;
