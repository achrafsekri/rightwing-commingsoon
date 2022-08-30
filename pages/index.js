import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      {/* <canvas className="absolute top-0 left-0 w-screen h-screen bg-white -z-10 ">

      </canvas> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: "0.7" }}
        className="top-0 left-0 z-0 flex flex-col items-center justify-center w-screen h-screen tracking-wide text-black "
      >
        <div>
          <motion.img
            src="./logo.svg"
            alt="rightwing logo in svg format"
            className="w-16 h-16 sm:w-28 sm:h-28"
          />
        </div>
        <h1 className="text-3xl font-bold capitalize md:text-6xl xl:text-8xl">under maintenance</h1>
        <h2 className="mt-5 text-sm font-semibold md:text-lg lg:text-3xl">hello@rightwing.dev</h2>
      </motion.div>
      <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden -z-20 grayscale blur-sm">
        <video
          autoPlay
          muted
          loop="true"
          src="/desktop.mp4"
          className="w-screen h-screen "
        ></video>
      </div>
    </>
  );
}
