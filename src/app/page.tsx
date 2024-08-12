import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 w-full h-48 flex items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://huggingface.co/transformers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/pic.jpg"
              alt="Picture"
              className="dark:invert"
              width={400}
              height={400}
              priority
            />
            <Image
              src="/rana.jpg"
              alt="Rana Fiaz"
              className="absolute top-0 left-0 rounded-full shadow-lg"
              width={150}
              height={150}
              priority
            />
          </a>
        </div>
      </div>

     

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.who.int/health-topics"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Health Topics{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about various health topics and how to maintain well-being.
          </p>
        </a>

        <a
          href="https://www.mayoclinic.org/tests-procedures"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Medical Procedures{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore various medical procedures and their importance for health.
          </p>
        </a>

        <a
          href="https://www.healthline.com/nutrition"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Nutrition{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Delve into nutrition and how it plays a crucial role in health.
          </p>
        </a>

        <a
          href="https://www.webmd.com/fitness-exercise/default.htm"
          className="group rounded-lg border border-black px-6 py-3 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Fitness{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about fitness routines and exercises to stay healthy. Rana Fiaz is a skilled AI developer with an interest in health.
          </p>
        </a>
      </div>
    </main>
  );
}
