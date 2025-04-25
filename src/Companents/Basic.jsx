import React from 'react';
import DRM from "../../public/DRM.png"
import a from "../../public/logo/a.png"
import b from "../../public/logo/b.png"
import c from "../../public/logo/c.png"
import d from "../../public/logo/d.png"
import f from "../../public/logo/f.png"


function Basic() {


  return (
    <>
      <div className='bg-[#16171B] text-white '>

        <header className='container mx-auto p-4 '>
          <nav>
            <div className=' flex justify-between'>
              <img src={DRM} alt="logo" className='w-30 h-8' />
              <div className='flex gap-4'>
                <h1>Наши работы</h1>
                <h1>Услуги</h1>
                <h1>Наша команда</h1>
                <h1>Отзывы</h1>
              </div>
              <div>
                <button className='btn bg-white text-black px-2 py-2 rounded-sm'>Связаться с нами</button>
              </div>
            </div>
            <div className='mt-20 max-w-6xl mx-auto'>
              <div className=' '>
                <h1 className='text-5xl font-bold'>Создаём мощные цифровые решения, <br /> которые работают на вас.</h1>
                <p className='mt-4'>Без шаблонов, без лишних движений — только продуманный  дизайн, чистый код и технологии, <br /> заточенные под результат.</p>
                <button className='mt-6 bg-gradient-to-r from-[#003099] to-[#0051FF] px-3 py-2 rounded-sm'>
                  У вас есть идея?
                </button>
              </div>
              <div className='mt-15'>
                <h1 className='text-3xl font-medium'>Партнеры</h1>
                <div className=' flex  mt-6 justify-between'>
                  <img src={d} alt="" className='w-37 h-8' />
                  <img src={b} alt="" className='w-37 h-8' />
                  <img src={c} alt="" className='w-38 h-8' />
                  <img src={a} alt="" className='w-38 h-8' />
                  <img src={f} alt="" className='w-39 h-7 mt-1' />
                </div>
              </div>
            </div>
          </nav>
        </header>


        <main className='container mx-auto p-4 mt-8'>
          <div>
            <div>
              <h1 className='text-4xl font-medium'>Наши Работы</h1>
            </div>
            <div className='mt-8'>
              <div className='bg-amber-50 w-30 h-30'>d</div>
            </div>
          </div>

          <div className='mt-10'>
          <h1 className='text-3xl font-medium'>Услуги</h1>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 '>
            <div className=''>
              <div className='bg-opacity-10 shadow-inner border rounded-xl mb-2 p-6'>
                <h1 className='text-xl font-semibold '>Разработка Сайта</h1>
                <p>
                Создаём быстрые, стильные и продуманные сайты, которые действительно работают.
                </p>
                <p>
                Мы делаем не просто красивые страницы, а инструменты для бизнеса — адаптивные, удобные и готовые к продвижению.
                </p>

                <p>Стомость:</p>
                <li>Лендинг (одностраничный сайт) — от 500 $</li>
                <li>Корпоративный сайт — от 1000 $</li>
                <li>Интернет-магазин — от 1000 $</li>
                <li>Веб-приложение (индивидуальная разработка) — обсуждается индивидуально</li>

                <div className='flex '>
                  <p>⏳ Сроки: от 14 дней, в зависимости от сложности проекта.</p>
                  <button className='px-1 py-0.5  bg-gradient-to-r from-[#0051FF] to-[#003099] rounded-xl'>Подробнее</button>
                </div>
                </div>
              <div className='bg-opacity-10 shadow-inner border rounded-xl p-4'>g</div>
            </div>
            <div>
              <div className='bg-opacity-10 shadow-inner border rounded-xl mb-2 p-4' >g</div>
              <div className='bg-opacity-10 shadow-inner border rounded-xl p-4'>g</div>
            </div>
          </div>
          </div>



        </main>
        <footer>

        </footer>
      </div>

    </>
  );
}

export default Basic;