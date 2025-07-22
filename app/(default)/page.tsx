"use client";
import { useRef } from "react";

export default function Home() {
  // Для управления мобильным меню
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Закрытие меню по клику вне меню
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      menuRef.current &&
      btnRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      !btnRef.current.contains(e.target as Node)
    ) {
      menuRef.current.classList.add("hidden");
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      onClick={handleClick}
    >
      {/* Spline 3D background */}
      <div className="fixed inset-0 z-0">
        <iframe
          src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="Spline 3D background"
        ></iframe>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-32 md:pt-40 md:pb-40 text-center min-h-screen">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        <span className="px-3 py-1 text-xs font-medium text-white bg-opacity-10 backdrop-blur-sm rounded-full mb-8 border border-white border-opacity-20">
          Моноклан
        </span>
        <h1 className="md:text-6xl max-w-4xl text-neutral-100 leading-tight text-4xl font-medium tracking-tighter">
          Движение к ИИ и его применение
        </h1>
        <p className="md:text-xl max-w-2xl text-lg text-neutral-300 mt-6">
          Присоединяйся к революции искусственного интеллекта. Изучай передовые
          техники, автоматизируй рабочие процессы и опережай конкурентов с
          помощью ИИ.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="/pro"
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Pro ИИ сообщество
          </a>
          <a
            href="mailto:aiiszdes@google.com?subject=Моноклан&body=Как мы можем помочь?"
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Связаться
          </a>
        </div>
      </div>
    </div>
  );
}
