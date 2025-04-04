import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [click, setClick] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-4">

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          className="border-2 sm:border-8 border-red-350 text-xl sm:text-2xl md:text-4xl bg-red-300 text-white rounded-lg px-6 py-4 w-full sm:w-auto"
          onClick={() => setClick("Serjee")}
        >
          Click
        </button>

        <button 
          className="border-2 sm:border-8 border-blue-350 text-xl sm:text-2xl md:text-4xl bg-blue-300 text-white rounded-lg px-6 py-4 w-full sm:w-auto"
          onClick={() => setClick("")}
        >
          Click
        </button>
      </div>


      <p className="text-2xl sm:text-3xl md:text-8xl text-black-100 text-center mt-6">
        {click}
      </p>


      <button
        className="mt-8 p-4 sm:p-6 bg-transparent border-2 border-white text-white rounded-lg text-lg sm:text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
        onClick={() => router.push('/')}
      >
        Return
      </button>
    </div>
  );
}
