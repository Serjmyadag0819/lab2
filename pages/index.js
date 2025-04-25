import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    document.querySelectorAll("[data-scroll-to]").forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-scroll-to");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error(`Element with ID ${targetId} not found`);
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-yellow-100 flex flex-col">
      <header className="flex justify-center items-center p-3 bg-white">
        <div className="flex justify-between items-center w-full max-w-screen-lg px-1">
          <img src="images/toki.PNG" alt="Toki Logo" className="h-16 mr-2" />
          <nav className="flex space-x-6 text-gray-700 font-medium ml-6">
            <a data-scroll-to="#c">Үйлчилгээ</a>
            <a>Давуу тал</a>
            <a>Мэдээ</a>
            <a>Хамтран ажиллах</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow p-6 text-center">
        <h1 className="text-3xl md:text-3xl font-extralight text-gray-700 mb-4">
          ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭ НЭГ ДОРООС...
        </h1>

        <div className="flex gap-6 mb-8 flex-wrap justify-center">
          <img src="images/hha.PNG" alt="Main" className="max-w-full h-auto" />
        </div>

        <div className="flex gap-4 justify-center items-center" id="section1">
          <img
            src="images/apple.png"
            alt="Download on App Store"
            className="h-10"
          />
          <img
            src="images/google.webp"
            alt="Get it on Google Play"
            className="h-16"
          />
        </div>
      </main>
    </div>
  );
};




