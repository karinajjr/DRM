// src/sections/PortfolioSection.tsx

export default function PortfolioSection() {
  return (
    <section  id="Portfolio" className="relative w-full min-h-[1500px] py-24 overflow-hidden"  >
      <div className="absolute inset-0  z-10"
        style={{background:
            "linear-gradient(225deg, rgba(0,0,0,0.5) 50.39%, rgba(43,0,153,0.5) 24.96%, rgba(0,0,0,0.5) 50%)," +
            "linear-gradient(225deg, rgba(0,0,0,0.5) 1.84%, rgba(43,0,153,0.5) 25.92%, rgba(0,0,0,0.5) 50%)," +
            "linear-gradient(225deg, rgba(0,0,0,0.5) 50%, rgba(43,0,153,0.5) 68.86%, rgba(0,0,0,0.5) 87.71%)," +
            "linear-gradient(112.12deg, rgba(0,0,0,0) 0.49%, rgba(0,0,0,0.988487) 61.9%)",
        }}/>

      <div className="pointer-events-none absolute -top-90 -right-30 h-[700px] w-[400px] rounded-full blur-3xl z-20"
        style={{ background: "radial-gradient(closest-side, rgba(86,33,216,0.55), rgba(0,0,0,0))",}}/>
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[520px] w-[400px] rounded-full blur-3xl z-20"
        style={{ background: "radial-gradient(closest-side, rgba(43,0,153,0.35), rgba(0,0,0,0))",}}/>

      {/* --- Content --- */}
      <div className="container mx-auto px-4  relative  z-[100]">
        <div className="mx-auto max-w-2xl text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-white/15 bg-black/30 backdrop-blur">
            <span className="size-2 rounded-full bg-violet-400/80"></span>
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Showcasing Your Best{" "}
            <span className="text-white/80">Work with Pure Precision.</span>
          </h2>
          <p className="text-white/60 text-sm">
            Reboot uslubidagi gradient sahna—ishlaringizni diqqat markazida
            ko‘rsatadi.
          </p>
        </div>
      </div>
    </section>
  );
}



  {/* <div className="mx-auto max-w-2xl text-center space-y-3 mb-12">
                            <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-white/15 bg-black/30 backdrop-blur">
                                <span className="size-2 rounded-full bg-violet-400/80"></span>
                                Portfolio
                            </span>
                            <h2 className="text-3xl md:text-4xl font-semibold text-white">
                                Showcasing Your Best{" "}
                                <span className="text-white/80">Work with Pure Precision.</span>
                            </h2>
                            <p className="text-white/60 text-sm">
                                Reboot uslubidagi gradient sahna—ishlaringizni diqqat markazida
                                ko‘rsatadi.
                            </p>
                        </div> */}



                                {/* <section id="Svices " className="space-y-10 max-w-5xl mx-auto px-4">
                      
                        <button
                            className="relative group inline-flex items-center gap-3 px-2 py-1.5 rounded-full 
                    bg-gradient-to-b from-black/2 to-[rgba(117,66,248,0.30)]
                     font-medium border-1 border-[rgba(144,101,255,0.20)] "
                        >
                            <span className="relative flex items-center justify-center py-0.5 px-1.5 rounded-full bg-gradient-to-b from-[#4800FF] to-[#9065FF]">
                                <i className="bi bi-gear text-white"></i>
                                <span className="absolute inset-0 rounded-full shadow-[inset_0_0_2px_0.3px_#ffffffcc] pointer-events-none"></span>
                            </span>
                            <span className="relative z-10 mr-1.5">Services</span>
                        </button>
                    
                        <div className="grid grid-cols-4 gap-4">
                            {cardsData.map((card, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col  items-center w-fit p-4 rounded-2xl border border-[#FFFFFF1A] shadow-[inset_0_0_40px_6px_#FFFFFF1A] hover:border-[#9065FF]  space-y-2.5"
                                >
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9065FF] to-transparent rounded-t-full pointer-events-none"></div>
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-[#4800FF] to-[#9065FF] shadow-[inset_0_0_2px_0.3px_#ffffffcc]">
                                        <i className={`bi bi-${card.icon} text-white text-lg`}></i>
                                    </span>
                                    <h1 className="mt-2 font-semibold text-white">
                                        {card.description}
                                    </h1>
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
                                    <p className="text-sm text-gray-400"> {card.cardText} </p>
                                </div>
                            ))}
                        </div>
                    </section> */}

                 

                    {/* <section
                        id="Portfolio"
                        className="relative w-full min-h-[1500px] py-24 overflow-hidden"
                    >
                        <div
                            className="absolute inset-0  z-10"
                            style={{
                                background:
                                    "linear-gradient(225deg, rgba(0,0,0,0.5) 50.39%, rgba(43,0,153,0.5) 24.96%, rgba(0,0,0,0.5) 50%)," +
                                    "linear-gradient(225deg, rgba(0,0,0,0.5) 1.84%, rgba(43,0,153,0.5) 25.92%, rgba(0,0,0,0.5) 50%)," +
                                    "linear-gradient(225deg, rgba(0,0,0,0.5) 50%, rgba(43,0,153,0.5) 68.86%, rgba(0,0,0,0.5) 87.71%)," +
                                    "linear-gradient(112.12deg, rgba(0,0,0,0) 0.49%, rgba(0,0,0,0.988487) 61.9%)",
                            }}
                        />
                        <div className="max-w-5xl mx-auto px-4  relative  z-[100] space-y-8">
                            <button
                                className="relative group inline-flex items-center gap-3 px-2 py-1.5 rounded-full 
                    bg-gradient-to-b from-black/2 to-[rgba(117,66,248,0.30)]
                     font-medium border-1 border-[rgba(144,101,255,0.20)] "
                            >
                                <span className="relative flex items-center justify-center py-0.5 px-1.5 rounded-full bg-gradient-to-b from-[#4800FF] to-[#9065FF]">
                                    <i className="bi bi-gear text-white"></i>
                                    <span className="absolute inset-0 rounded-full  pointer-events-none"></span>
                                </span>
                                <span className="relative z-10 mr-1.5">Portfolio</span>
                            </button>
                            <div className=" space-y-2">
                                <h1 className="text-2xl font-semibold ">
                                    Showcasing Your Best
                                </h1>
                                <h1 className="text-2xl font-semibold text-[#8D8D8D]">
                                    Work with Pure Precision.
                                </h1>
                                <p className="text-[#8D8D8D]">
                                    A portfolio is more than just projects—it’s your story,
                                    vision, and <br />
                                    expertise. Reboot ensures your work stands out with a rank.
                                </p>
                            </div>
                            <button className=" py-1.5 px-3 rounded-lg bg-gradient-to-b from-[#4800FF]/80 to-[#9065FF]/80">
                                View More Works
                            </button>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-black rounded-3xl shadow-[inset_0_0_40px_6px_#FFFFFF1A] p-3.5 space-y-2 ">
                                    <img src="/image/JobX.png" alt="" />

                                    <div className="flex justify-between items-center m-2">
                                        <div className="flex flex-col items-start space-y-2 ">
                                            <h1>JobX</h1>
                                            <p className="text-[#8D8D8D] text-xs ">
                                                AI asosida, HR chatbot
                                            </p>
                                        </div>
                                        <i className="bi bi-arrow-up-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="min-h-screen bg-black text-white">
                            <CertificatesSlider />
                        </div>
                    </section> */}