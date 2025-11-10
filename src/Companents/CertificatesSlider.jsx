import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function CertificatesSlider() {
  const certificates = [
    { src: '/image/JobX.png', title: 'Certificate of Appreciation' },
    { src: '/image/JobX.png', title: 'Certificate of Participation' },
    { src: '/image/JobX.png', title: 'Certificate of Achievement' },
  ]

  return (
    <section className="w-full bg-black py-16 flex flex-col items-center text-center">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-[#5E3AFF]/20 p-2 px-4 rounded-full flex items-center gap-2">
          <i className="bi bi-award text-[#B197FC] text-lg"></i>
          <span className="text-white font-medium">Certificates</span>
        </div>
      </div>

      <div className="w-[90%] max-w-5xl">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1.5}
          centeredSlides
        //   loop
          className="relative"
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
