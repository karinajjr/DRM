import React, { useState } from "react";
import OurTaem from "./ourTaem";
import Reviews from "./reviews";


const cardsData = [
    {
        title: "Карточка 1",
        icon: "gear",
        description: "Software development",
        cardText: "Web development (creation of websites, web applications)",
    },
    {
        title: "Карточка 2",
        icon: "gear",
        description: "Artificial intelligence and machine learning",
        cardText: "Development of intelligent systems and algorithms.",
    },
    {
        title: "Карточка 2",
        icon: "gear",
        description: "1C Products",
        cardText: "1C Products: Integrated Business Management Solutions",
    },
    {
        title: "Карточка 2",
        icon: "gear",
        description: "1C Bitrix",
        cardText: "1C-Bitrix: development, integration and configuration",
    },
    {
        title: "Карточка 2",
        icon: "gear",
        description: "Antiviruses",
        cardText: "Professional protection for your business and home",
    },
    {
        title: "Карточка 2",
        icon: "gear",
        description: "Automation",
        cardText:
            "Business Process Automation: Optimization through Advanced Technologies",
    },
    {
        title: "Карточка 2",
        icon: "gear",
        description: "Biometric systems",
        cardText:
            "Biometric Systems and Artificial Intelligence: Innovations in Security Management and Personnel Control",
    },
    {
        title: "Карточка 2",
        icon: "gear",
        description: "IT Services",
        cardText:
            "IT services: Setting up and maintaining servers, corporate networks, and Wi-Fi zones",
    },
];



function all() {
    const [menuOpen, setMenuOpen] = useState(false);




    return (
        <>
            <div className="bg-[url('/baground/hope.png')] bg-[length:900px_auto] bg-contain bg-no-repeat">
                <header className=" ">
                    <nav className=" bg-gradient-to-b from-black to-black/2">
                        <div className="mx-auto max-w-5xl flex justify-between items-center">
                            <img
                                src="/logo/tenzorsoft-logo.png"
                                alt="logo"
                                className="w-20 h-auto"
                            />
                            <div className=" flex  py-5 gap-10 left-0 w-full md:w-auto p-4 transition-all  ">
                                <h1 className="cursor-pointer text-sm md:text-base ">
                                    Наши работы
                                </h1>
                                <h1 className="cursor-pointer text-sm md:text-base">Услуги</h1>
                                <h1 className="cursor-pointer text-sm md:text-base">
                                    Наша команда
                                </h1>
                                <h1 className="cursor-pointer text-sm md:text-base ">Отзывы</h1>
                            </div>

                            <div className="flex gap-2">
                                <button className="bg-white text-black py-1.5 px-3 rounded-lg">
                                    Cвязоваться с нами
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>

                <main className="mt-22 space-y-25">
                    <section id="hero" className="max-w-5xl mx-auto space-y-14">
                        <div className=" space-y-6">
                            <h1 className="text-5xl  font-bold">
                                Создаём мощные цифровые решения, которые работают на вас.
                            </h1>
                            <p className="text-lg">
                                Без шаблонов, без лишних движений — только продуманный дизайн,
                                чистый код и технологии, <br />
                                заточенные под результат.{" "}
                            </p>
                            <button className=" text-white py-3 px-4 font-medium rounded-md bg-gradient-to-br from-[#003099] to-[#0051FF]">
                                У вас есть идея?
                            </button>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold">Портнеры</h1>
                        </div>
                    </section>

                    <section id="OurWork" className="max-w-6xl mx-auto  space-y-7 ">
                        <h1 className="text-5xl font-semibold">Наша работы</h1>
                    </section>



                    <section className="min-h-screen flex justify-center items-center p-8">
                        <div className="grid md:grid-cols-[1.5fr_1fr] gap-3 max-w-6xl w-full">

                            {/* Левая колонка */}
                            <div className="flex flex-col gap-3">
                                {/* Верхняя — большая */}
                                <div className="rounded-md border border-white shadow-[inset_0_0_9px_0.3px_#0051FF1A] p-5 space-y-2 h-[320px]">
                                 <h1 className="font-semibold text-lg">Разработка Сайта</h1>
                                <p>Создаём быстрые, стильные и продуманные сайты, которые действительно работают. <br />
                                    Мы делаем не просто красивые страницы, а инструменты для бизнеса — адаптивные, удобные и готовые к продвижению.
                                </p>
                                <p>Стоимость:</p>
                                <div className="ml-5">
                                    <li>Лендинг (одностраничный сайт) — от 500 $</li>
                                    <li>Корпоративный сайт — от 1000 $</li>
                                    <li>Интернет-магазин — от 1000 $</li>
                                    <li>Веб-приложение (индивидуальная разработка) — обсуждается индивидуально</li>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <p>⏳ Сроки: от 14 дней, в зависимости от <br /> сложности проекта.</p>
                                    <button className="p-2 font-medium rounded-md bg-gradient-to-br from-[#003099] to-[#0051FF]">Подробнее</button>
                                </div>
                                </div>

                                {/* Нижняя — средняя */}
                                <div className="rounded-md border border-white shadow-[inset_0_0_9px_0.3px_#0051FF1A] p-5 space-y-2 h-[320px] ">
                                    <div>
                                        <h2 className="text-xl font-bold mb-2">Индивидуальный Подход</h2>
                                        <p className="text-sm text-gray-300 mb-3">
                                            Мы не ограничиваемся только сайтами и ботами — предлагаем весь спектр IT-услуг.
                                        </p>
                                        <p className="text-sm text-gray-400">Стоимость обсуждается индивидуально.</p>
                                    </div>
                                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition font-semibold py-2 rounded-lg">
                                        Подробнее
                                    </button>
                                </div>
                            </div>

                            {/* Правая колонка */}
                            <div className="flex flex-col gap-3">
                                {/* Верхняя маленькая */}
                                <div className=" p-5 space-y-2 h-[370px] rounded-md border border-white shadow-[inset_0_0_9px_0.3px_#0051FF1A]">
                                    <div>
                                        <h2 className="text-xl font-bold mb-2">Разработка Бота</h2>
                                        <p className="text-sm text-gray-300 mb-3">
                                            Автоматизируем рутину и улучшаем клиентский сервис через Telegram.
                                        </p>
                                        <p className="text-sm text-gray-400">Стоимость: от 100$</p>
                                    </div>
                                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition font-semibold py-2 rounded-lg">
                                        Подробнее
                                    </button>
                                </div>

                                {/* Нижняя маленькая */}
                                <div className="p-5 space-y-2 h-[270px] rounded-md border border-white shadow-[inset_0_0_9px_0.3px_#0051FF1A]">
                                    <div>
                                        <h2 className="text-xl font-bold mb-2">Дизайн Услуги</h2>
                                        <p className="text-sm text-gray-300 mb-3">
                                            Современный и понятный дизайн для сайтов, приложений и ботов. Работаем в Figma.
                                        </p>
                                    </div>
                                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition font-semibold py-2 rounded-lg">
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>






                    {/* <section id="Services" className="max-w-6xl mx-auto space-y-7">
                        <h1 className="text-5xl font-semibold">Услуги</h1>

                        <div className="grid grid-cols-2 gap-3 ">
                        

                            <div className="border border-white rounded-md shadow-[inset_0_0_9px_0.3px_#0051FF1A] p-5 space-y-2">
                                <h1 className="font-semibold text-lg">Разработка Сайта</h1>
                                <p>Создаём быстрые, стильные и продуманные сайты, которые действительно работают. <br />
                                    Мы делаем не просто красивые страницы, а инструменты для бизнеса — адаптивные, удобные и готовые к продвижению.
                                </p>
                                <p>Стоимость:</p>
                                <div className="ml-5">
                                    <li>Лендинг (одностраничный сайт) — от 500 $</li>
                                    <li>Корпоративный сайт — от 1000 $</li>
                                    <li>Интернет-магазин — от 1000 $</li>
                                    <li>Веб-приложение (индивидуальная разработка) — обсуждается индивидуально</li>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <p>⏳ Сроки: от 14 дней, в зависимости от <br /> сложности проекта.</p>
                                    <button className="p-2 font-medium rounded-md bg-gradient-to-br from-[#003099] to-[#0051FF]">Подробнее</button>
                                </div>
                            </div>

                            <div className="border border-white rounded-md shadow-[inset_0_0_9px_0.3px_#0051FF1A] p-5 space-y-2">
                                <h1 className="font-semibold text-lg">Разработка Сайта</h1>
                                <p>Создаём быстрые, стильные и продуманные сайты, которые действительно работают. <br />
                                    Мы делаем не просто красивые страницы, а инструменты для бизнеса — адаптивные, удобные и готовые к продвижению.
                                </p>
                                <p>Стоимость:</p>
                                <div className="ml-5">
                                    <li>Лендинг (одностраничный сайт) — от 500 $</li>
                                    <li>Корпоративный сайт — от 1000 $</li>
                                    <li>Интернет-магазин — от 1000 $</li>
                                    <li>Веб-приложение (индивидуальная разработка) — обсуждается индивидуально</li>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <p>⏳ Сроки: от 14 дней, в зависимости от <br /> сложности проекта.</p>
                                    <button className="p-2 font-medium rounded-md bg-gradient-to-br from-[#003099] to-[#0051FF]">Подробнее</button>
                                </div>
                            </div>

                            <div className="border border-white rounded-md shadow-[inset_0_0_9px_0.3px_#0051FF1A] p-5 space-y-2">
                                <h1 className="font-semibold text-lg">Разработка Сайта</h1>
                                <p>Создаём быстрые, стильные и продуманные сайты, которые действительно работают. <br />
                                    Мы делаем не просто красивые страницы, а инструменты для бизнеса — адаптивные, удобные и готовые к продвижению.
                                </p>
                                <p>Стоимость:</p>
                                <div className="ml-5">
                                    <li>Лендинг (одностраничный сайт) — от 500 $</li>
                                    <li>Корпоративный сайт — от 1000 $</li>
                                    <li>Интернет-магазин — от 1000 $</li>
                                    <li>Веб-приложение (индивидуальная разработка) — обсуждается индивидуально</li>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <p>⏳ Сроки: от 14 дней, в зависимости от <br /> сложности проекта.</p>
                                    <button className="p-2 font-medium rounded-md bg-gradient-to-br from-[#003099] to-[#0051FF]">Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section id="OurTeam" className="space-y-1">
                        <div className="max-w-6xl mx-auto ">
                            <h1 className="text-5xl font-semibold mb-10">Наша команда</h1>
                        </div>
                        <OurTaem />
                    </section>

                    <section id="OurWork" className=" space-y-7 ">
                        <div className="max-w-6xl mx-auto ">
                            <h1 className="text-5xl font-semibold">Отзовы</h1>
                        </div>
                        <Reviews />

                    </section>


                    {/* bg-[url('/baground/OurTeam.png')] bg-no-repeat */}
                    {/* shadow-[inset_0_0_2px_0.3px_#ffffffcc] */}



                </main>
                <footer className="max-w-6xl mx-auto space-y-8">
                    <h1 className="text-6xl font-bold text-center"> Connect with us</h1>
                    <div>
                        <h1 className="font-semibold text-2xl mb-2">Digital-Агентство DRM </h1>
                        <h1 className=" font-semibold text-xl">Номер Телефона</h1>
                        <p className="mb-1">+998(99) 998-99-99</p>
                        <h1 className="font-semibold text-xl">Почта для сотрудничества</h1>
                        <p>Hello@drm.it.com</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default all;
