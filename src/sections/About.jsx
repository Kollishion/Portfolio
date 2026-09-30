import about from "../assets/about_photo_dark.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center px-6 md:px-16 py-16 min-h-screen"
    >
      <section className="mx-auto w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="md:w-2/5 flex justify-center">
          <img
            src={about}
            alt="Illustration of a developer at a desk"
            className="w-full max-w-sm rounded-2xl border-2 border-green-400/60 shadow-[0_0_60px_rgba(74,222,128,0.25)]"
          />
        </div>

        <div className="md:w-3/5 text-left">
          <div className="relative">
            <div className="absolute top-18 right-0 w-[400px] h-[100px] bg-green-400/40 rounded-full blur-[150px] pointer-events-none -z-10 animate-glow"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-left text-white">
            I make stuff on the web and figure things out as I go.
          </h1>
          <div className="text-lg mt-5 text-slate-400 font-medium text-left max-w-xl">
            I’m a <span className="text-green-400">full-stack developer</span>,
            building apps that grow. From small features to large applications,
            I enjoy tackling challenges head-on; always powered by coffee. When
            I’m not coding, you’ll probably find me playing chess or gaming,
            though most of the time, I’m deep in{" "}
            <span className="text-blue-100">code.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
