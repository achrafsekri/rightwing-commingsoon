import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      {/* <canvas className="absolute w-screen h-screen top-0 left-0 bg-white -z-10 ">

      </canvas> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: "0.7" }}
        className=" top-0 left-0 flex-col flex w-screen h-screen justify-center items-center z-0 tracking-wide text-black"
      >
        <div>
          <motion.img
            src="./logo.svg"
            alt="rightwing logo in svg format"
            className="sm:w-28 sm:h-28 w-16 h-16"
          />
        </div>
        <h1 className=" font-bold text-3xl md:text-6xl xl:text-9xl ">Comming soon</h1>
        <h2 className="text-sm md:text-lg lg:text-3xl font-semibold mt-5">hello@rightwing.dev</h2>
      </motion.div>
      <div className="absolute top-0 left-0 w-screen h-screen -z-20 overflow-hidden grayscale blur-sm">
        <video
          autoPlay
          muted
          loop="true"
          src="/desktop.mp4"
          className=" w-screen h-screen"
        ></video>
      </div>
    </>
  );
}
