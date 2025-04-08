export default async function Home() {
  return (
    <main>
      <section className="relative h-[600px] bg-[url(/bg-main.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute bottom-35 left-32 z-100 flex h-full items-end">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-semibold text-rose-950">
              cardio virtual assistance
            </h1>
            <h2 className="text-4xl font-medium text-rose-900">
              remote cardiology service
            </h2>
            <button className="mt-10 max-w-32 rounded-full border border-gray-300 bg-rose-900/10 py-1 text-2xl font-medium text-rose-800">
              Contact
            </button>
          </div>
        </div>
      </section>
      <Circles />
    </main>
  );
}

function Circles() {
  return (
    <svg
      width="2503"
      height="2546"
      viewBox="0 0 2503 2546"
      className="absolute -top-25 -left-[60%] z-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define the radial gradient */}
      <defs>
        <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="85%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Background circle with gradient */}
      <circle
        cx="1255.5"
        cy="1271.5"
        r="950"
        fill="url(#backgroundGradient)"
        stroke="none"
      />

      {/* Stroke circles */}
      <circle
        cx="1255.5"
        cy="1271.5"
        r="950"
        fill="none"
        stroke="#D9D9D9"
        strokeWidth="1"
      />
      <circle
        cx="1255.5"
        cy="1271.5"
        r="573"
        fill="none"
        stroke="#D9D9D9"
        strokeWidth="1"
      />
      <circle
        cx="1255.5"
        cy="1252.5"
        r="271"
        fill="none"
        stroke="#D9D9D9"
        strokeWidth="1"
      />
      <circle
        cx="1013.5"
        cy="1080.5"
        r="214"
        fill="none"
        stroke="#D9D9D9"
        strokeWidth="1"
      />
      <circle
        cx="1013.5"
        cy="1080.5"
        r="153"
        fill="none"
        stroke="#D9D9D9"
        strokeWidth="1"
      />
    </svg>
  );
}
