"use client";

import Image from "next/image";

export default function Home() {
  const timelineItems = [
    {
      title: "WE GREET",
      subtitle: "ĐÓN KHÁCH",
      time: "3:30 PM",
    },
    {
      title: "WE DO",
      subtitle: "LỄ VOW",
      time: "4:00 PM",
    },
    {
      title: "WE SMILE",
      subtitle: "CHỤP ẢNH LƯU NIỆM",
      time: "4:30 PM",
    },
    {
      title: "WE SHARE",
      subtitle: "KHÁCH MỜI CHIA SẺ",
      time: "5:00 PM",
    },
    {
      title: "WE FEAST",
      subtitle: "KHAI TIỆC",
      time: "6:00 PM",
    },
  ];

  return (
    <main className="bg-[#3a2c22] text-white min-h-screen relative overflow-hidden">

      {/* TITLE */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 pt-14 sm:pt-16">
          <p className="font-serif tracking-[0.35em] sm:tracking-[0.6em] text-xs sm:text-sm mb-12 sm:mb-25">
            THE WEDDING OF
          </p>

          <h1 className="text-[clamp(40px,11vw,120px)] leading-[0.9] font-script mb-10 sm:mb-20 flex items-end justify-center gap-[0.2em] md:gap-[0.5em]">
            <span className="inline-flex items-end mr-[1em] sm:mr-[0.8em] md:mr-[1em]">
              <span className="text-[1.35em] leading-[0.8]">L</span>
              <span>oc</span>
            </span>
            <span className="font-daisybud text-[0.8em] leading-none">&</span>
            <span>Tram</span>
          </h1>

          <p className="font-serif mt-4 sm:mt-6 tracking-[0.25em] sm:tracking-[0.6em] text-xs sm:text-sm">
            16.05.2026 — NOMIA GARDEN RETREATS
          </p>
        </div>
      </section>

      {/* WELCOME */}
      <section className="bg-[#3a2c22] text-white py-10 sm:py-12 px-5 sm:px-10 md:px-20">
        <div className="text-center mt-20 sm:mt-32 px-3 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-[clamp(44px,10vw,120px)] leading-[0.92] font-script mb-20 sm:mb-20">
            Welcome
          </h1>

          <p className="font-serif tracking-[0.08em] sm:tracking-[0.12em] leading-6 sm:leading-8 text-[0.74em] sm:text-[0.9em] max-w-3xl mx-auto">
            CHÀO MỪNG ĐẾN VỚI TRANG WEB ĐÁM CƯỚI CỦA TỤI MÌNH.
            <br />
            TẠI ĐÂY, BẠN SẼ TÌM THẤY MỌI THÔNG TIN CẦN THIẾT CHO NGÀY ĐẶC BIỆT CỦA LỘC & TRÂM.
          </p>

          <p className="font-serif mt-4 sm:mt-6 italic tracking-[0.06em] sm:tracking-[0.15em] text-[0.74em] sm:text-[0.9em] max-w-3xl mx-auto">
            WELCOME TO OUR WEDDING WEBSITE.
            <br />
            HERE, YOU WILL FIND ALL THE ESSENTIAL INFORMATION FOR THE SPECIAL DAY OF LOC & TRAM.
          </p>
        </div>
      </section>

      {/* ENVELOPE SECTION */}
      <section className="bg-[#3a2c22] text-white pb-1 sm:pb-20 px-4 sm:px-0">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-0 sm:px-4">
          <div className="relative w-full max-w-300 aspect-1200/850 overflow-hidden rounded-[28px] border border-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
            <Image
              src="/rsvp.png"
              alt="rsvp"
              width={1200}
              height={850}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/8" />

            <div className="absolute inset-0 flex flex-col items-center justify-between px-4 py-5 sm:px-8 sm:py-9 md:px-10 md:py-10">
              <div className="mt-[8%] sm:mt-[13%] md:mt-[16%] text-center text-black">
                <h1 className="text-[clamp(40px,8vw,80px)] leading-[1] font-script whitespace-nowrap">
                  Kindly Respond
                </h1>
              </div>

              <div className="mb-[5%] w-full max-w-[96%] sm:max-w-[80%] rounded-[20px] bg-white/10 px-4 py-3 text-center text-black backdrop-blur-[2px] sm:px-6 sm:py-4">
                <p className="font-serif text-[clamp(10px,1.5vw,22px)] leading-5 sm:leading-7 tracking-[0.06em] sm:tracking-widest">
                  XIN VUI LÒNG PHẢN HỒI TRƯỚC 9PM (05/05/2026)
                </p>
                <p className="font-serif text-[clamp(10px,1.5vw,22px)] leading-5 sm:leading-7 tracking-[0.06em] sm:tracking-widest">
                  BẰNG CÁCH SỬ DỤNG LIÊN KẾT RSVP ĐƯỢC CUNG CẤP TẠI <a href="https://loctramwedding.fillout.com/rsvp" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2">
                    ĐÂY
                  </a>
                </p>

                <p className="mt-4 sm:mt-8 font-serif italic text-[clamp(8px,1.5vw,22px)] leading-5 sm:leading-7 tracking-[0.06em] sm:tracking-widest">
                  PLEASE RESPOND BEFORE 9PM (MAY 5TH, 2026)
                </p>
                <p className="font-serif italic text-[clamp(8px,1.5vw,22px)] leading-5 sm:leading-7 tracking-[0.06em] sm:tracking-widest">
                  USING RSVP LINK PROVIDED <a href="https://loctramwedding.fillout.com/rsvp" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2">
                    HERE
                  </a>
                </p>
              </div>
            </div>

            <Image
              src="/rsvp_qr.png"
              alt="qr"
              width={120}
              height={120}
              className="absolute right-10 bottom-10 w-15 h-15 sm:right-10 sm:bottom-10 sm:w-18 sm:h-18 md:w-30 md:h-30 lg:w-40 lg:h-40"
            />
          </div>
        </div>
      </section>
      {/* TIMELINE */}
      <section className="bg-[#f4f2ec] text-[#19140f] mt-20 sm:mt-24 py-24 sm:py-35 px-4 sm:px-8 md:px-10">
        <div className="text-center mx-auto max-w-6xl">
          <h1 className="text-[clamp(40px,8vw,96px)] leading-[0.92] font-script mb-18 sm:mb-30 flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-[1em]">
            <span className="-ml-15 sm:-ml-20">Wedding</span>
            <span className="mt-8 sm:mt-10 ml-15 sm:ml-20">Timeline</span>
          </h1>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 sm:gap-y-10 sm:gap-x-6">
            {timelineItems.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-timeline-title text-[clamp(33px,2.0vw,40px)] leading-[1.05] font-bold wrap-break-word">
                  {item.title}
                </h3>
                <p className="font-serif mt-3 text-[clamp(16px,1.4vw,20px)] italic tracking-[0.01em] uppercase wrap-break-word px-2 sm:px-0">
                  {item.subtitle}
                </p>
                <p className="font-serif mt-3 italic text-[clamp(16px,1.3vw,18px)] tracking-[0.01em] uppercase">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section className="bg-[#3a2c22] text-white py-24 sm:py-35 px-4 sm:px-8 md:px-10">
        <div className="text-center mx-auto max-w-6xl">
          <h1 className="text-[clamp(40px,8vw,96px)] leading-[0.92] font-script mb-18 sm:mb-30 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-[1.5em]">
            <span className="-ml-15 sm:-ml-20">Wedding</span>
            <span className="mt-8 sm:mt-10 ml-15 sm:ml-20">Venue</span>
          </h1>


          <p className="font-serif text-center mt-3 tracking-[0.22em] sm:tracking-[0.8em] text-[clamp(12px,1.6vw,22px)] uppercase">
            NOMIA GARDEN RETREATS
          </p>

          <p className="font-serif text-center mt-3 text-[clamp(12px,1.6vw,22px)] uppercase italic tracking-[0.06em] sm:tracking-[0.15em]">
            <a href="https://maps.app.goo.gl/sEwstQxV1KdZbSNF6" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
              GET DIRECTION</a>
          </p>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="font-serif tracking-[0.08em] leading-8 text-[clamp(11px,1.5vw,16px)] uppercase">
                CHỈ CÁCH SÀI GÒN CHƯA ĐẾN 70KM, NOMIA GARDEN RETREATS LÀ KHU
                NGHỈ DƯỠNG TUYỆT ĐẸP NẰM BÊN CẠNH HỒ TRỊ AN, NƠI ĐÂY LƯU GIỮ
                VẺ ĐẸP HOANG SƠ CỦA THIÊN NHIÊN BAN TẶNG KẾT HỢP VỚI SỰ TINH TẾ
                KHEO LÉO TỪ BÀN TAY CON NGƯỜI.
              </p>

              <p className="font-serif italic mt-6 sm:mt-8 tracking-[0.06em] leading-8 text-[clamp(11px,1.5vw,16px)] uppercase">
                LOCATED LESS THAN 70KM FROM SAIGON, NOMIA GARDEN RETREATS IS
                A STUNNING RESORT SITUATED BESIDE TRI AN LAKE. IT PRESERVES THE
                PRISTINE BEAUTY BESTOWED BY NATURE, COMBINED WITH THE
                REFINED CRAFTSMANSHIP OF HUMAN HANDS.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-140">
              <Image
                src="/nomia.png"
                alt="Nomia Garden Retreats"
                width={1120}
                height={740}
                className="w-full h-auto border border-[#d2c7b5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="min-h-screen bg-[#f4f2ec] text-[#19140f] px-5 sm:px-8 md:px-10 py-20 sm:py-28 flex items-center">
        <div className="mx-auto w-full max-w-6xl text-center">
          <p className="font-serif tracking-[0.35em] text-[11px] sm:text-sm uppercase mb-4 sm:mb-6">
            BEFORE THE STORY
          </p>
          <h1 className="font-script text-[clamp(54px,10vw,120px)] leading-[0.9]">
            Our Story
          </h1>
          <p className="font-serif mx-auto mt-6 max-w-3xl text-[clamp(13px,1.6vw,18px)] leading-7 sm:leading-8 tracking-[0.08em]">
            A short chapter about how the two of us met, grew together, and started building this life side by side.
          </p>
        </div>
      </section>

      {/* GETTING MARRIED */}
      <section className="min-h-screen bg-[#3a2c22] text-white px-5 sm:px-8 md:px-10 py-20 sm:py-28 flex items-center">
        <div className="mx-auto w-full max-w-6xl text-center">
          <p className="font-serif tracking-[0.35em] text-[11px] sm:text-sm uppercase mb-4 sm:mb-6">
            THE BIG DAY
          </p>
          <h1 className="font-script text-[clamp(48px,10vw,120px)] leading-[1.02] sm:leading-[0.96] tracking-[-0.01em]">
            We are getting married!
          </h1>
          <p className="font-serif mx-auto mt-6 max-w-3xl text-[clamp(13px,1.6vw,18px)] leading-8 sm:leading-9 tracking-[0.08em]">
            We cannot wait to celebrate with you on our wedding day and share this moment with the people we love.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="min-h-screen bg-[#f4f2ec] text-[#19140f] px-5 sm:px-8 md:px-10 py-20 sm:py-28 flex items-center">
        <div className="mx-auto w-full max-w-6xl text-center">
          <p className="font-serif tracking-[0.35em] text-[11px] sm:text-sm uppercase mb-4 sm:mb-6">
            GET IN TOUCH
          </p>
          <h1 className="font-script text-[clamp(54px,10vw,120px)] leading-[1.02] sm:leading-[0.96] tracking-[-0.01em]">
            Contact us
          </h1>
          <p className="font-serif mx-auto mt-6 max-w-3xl text-[clamp(13px,1.6vw,18px)] leading-8 sm:leading-9 tracking-[0.08em]">
            If you have any questions about the schedule, venue, or RSVP, please reach out and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

    </main>
  );
}
