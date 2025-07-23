import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import UI1 from "@/public/images/ui1.png";
import UI2 from "@/public/images/ui2.png";
import UI3 from "@/public/images/ui3.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Accordion from "./accordion";
import BusinessCategories from "./business-categories";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <p
                  className="text-blue-500 text-xs font-semibold"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Присоединяйся к ИИшенка Pro Сообществу сегодня!
                </p>
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Осваивай ИИ и опережай <br className="max-lg:hidden" />
              коллег и конкурентов
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Присоединяйся к революции искусственного интеллекта. Изучай
                передовые техники, автоматизируй рабочие процессы и опережай
                конкурентов с помощью ИИ.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#pricing"
                  >
                    <span className="relative inline-flex items-center">
                      Вступить в сообщество{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  {/* <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          {/* Hero tabs */}
          <div className="-mx-0.5 flex justify-center items-center">
            <div className="mt-8 w-full flex justify-center items-center">
              <div
                className="relative rounded-2xl px-5 py-3 shadow-xl max-w-5xl w-full before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]"
                data-aos="zoom-y-out"
                data-aos-delay={100}
              >
                <video
                  className="box-content rounded-2xl border-2 border-gray-50 max-w-full w-full h-auto"
                  src="https://www.ibillidi.com/wc.mp4"
                  loop
                  controls
                />
              </div>
            </div>
          </div>
          {/* Pricing Section (light theme, Russian) */}
          <div
            id="pricing"
            className="mt-12 flex flex-col md:flex-row gap-8 bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto border border-gray-200"
          >
            {/* Тарифы */}
            <div className="flex-1 flex flex-col gap-6">
              <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full w-max">
                Скидка для ранних пользователей
              </span>
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4 h-full">
                <div className="text-lg font-semibold mb-2">
                  Месячная подписка
                </div>
                <div className="text-3xl font-bold mb-1">
                  5 990 ₽ или 65 €{" "}
                  <span className="text-base font-normal text-gray-500">
                    /мес
                  </span>
                </div>
                <div className="text-gray-400 line-through text-sm">
                  Обычно 7 990 ₽ или 85 €
                </div>
                <div className="text-green-600 text-sm font-semibold">
                  17% скидка
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 relative ">
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  ЛУЧШАЯ ЦЕНА
                </div>
                <div className="text-lg font-semibold mb-2">
                  Годовая подписка
                </div>
                <div className="text-3xl font-bold mb-1">
                  59 900 ₽ или 650 €{" "}
                  <span className="text-base font-normal text-gray-500">
                    /год
                  </span>
                </div>
                <div className="text-gray-400 line-through text-sm">
                  Обычно 79 900 ₽ или 850 €
                </div>
                <div className="text-green-600 text-sm font-semibold">
                  33% скидка
                </div>
              </div>
            </div>
            {/* Преимущества */}
            <div className="flex-1 flex flex-col justify-between bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div>
                <div className="text-lg font-bold mb-4">Что входит:</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-green-700">
                    <span className="text-xl">✅</span> Доступ ко всем текущим и
                    будущим материалам
                  </li>
                  <li className="flex items-center gap-2 text-green-700">
                    <span className="text-xl">✅</span> Регулярно пополняющийся
                    материал про ИИ
                  </li>
                  <li className="flex items-center gap-2 text-green-700">
                    <span className="text-xl">✅</span> Приватное сообщество
                  </li>
                  <li className="flex items-center gap-2 text-green-700">
                    <span className="text-xl">✅</span> Шаблоны и ресурсы для
                    ИИ-агентов
                  </li>
                  <li className="flex items-center gap-2 text-yellow-600">
                    <span className="text-xl">🎁</span> БОНУС — Эксклюзивные
                    знания про ИИ-агентов
                  </li>
                  <li className="flex items-center gap-2 text-yellow-600">
                    <span className="text-xl">🎁</span> БОНУС — Эксклюзивный
                    нетворкинг
                  </li>
                </ul>
              </div>
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="https://t.me/iishenka_pro_bot" target="blank"
              >
                <span className="relative inline-flex items-center">
                  Я с вами! Вступить в Pro{" "}
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
              <span className="text-sm font-normal text-gray-500 text-center">Вы будете перенаправлены в Телеграм-бота для вступления</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
