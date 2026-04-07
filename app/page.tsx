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

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center px-6 pt-6 sm:pt-12 md:pt-10 lg:pt-6">
          <div className="mx-auto mb-6 w-20 sm:mb-8 sm:w-24">
            <Image
              src="/logo/TRẮNG.png"
              alt="Wedding logo"
              width={300}
              height={300}
              className="h-full w-full"
            />
          </div>

          <p className="font-serif tracking-[0.35em] sm:tracking-[0.6em] lg:text-[1.2em] text-[0.8em] sm:text-[0.8em] mb-12 sm:mb-25">
            THE WEDDING OF
          </p>

          <h1 className="text-[clamp(40px,11vw,120px)] leading-[0.9] font-script mb-12 sm:mb-20 flex items-end justify-center gap-[0.2em] md:gap-[0.5em]">
            <span className="inline-flex items-end mr-[1em] sm:mr-[0.8em] md:mr-[1em]">
              <span className="text-[1.35em] leading-[0.8]">L</span>
              <span>oc</span>
            </span>
            <span className="font-daisybud text-[0.8em] leading-none">&</span>
            <span>Tram</span>
          </h1>

          <p className="font-serif mt-6 sm:mt-8 tracking-[0.25em] sm:tracking-[0.6em] lg:text-[1.2em] text-[0.8em] sm:text-[0.8em]">
            16.05.2026 — NOMIA GARDEN RETREATS
          </p>
        </div>
      </section>

      {/* WELCOME */}
      <section className="bg-[#3a2c22] text-white py-10 sm:py-12 px-5 sm:px-10 md:px-20">
        <div className="text-center mt-20 sm:mt-32 px-3 sm:px-6 max-w-6xl mx-auto">
          <h1 className="text-[clamp(60px,10vw,120px)] leading-[0.92] font-script mb-20 sm:mb-20">
            Welcome
          </h1>

          <p className="font-serif tracking-[0.08em] sm:tracking-[0.12em] leading-8 sm:leading-8 lg:text-[1em] text-[0.7em] sm:text-[0.7em] max-w-4xl mx-auto">
            CHÀO MỪNG BẠN ĐẾN VỚI LỄ CƯỚI CỦA LỘC & TRÂM.
            <br />
            TẠI ĐÂY, BẠN SẼ TÌM THẤY MỌI THÔNG TIN
            <br/>
            CẦN THIẾT CHO NGÀY ĐẶC BIỆT NÀY.
          </p>

          <p className="font-serif mt-6 sm:mt-12 italic tracking-[0.08em] sm:tracking-[0.15em] leading-8 sm:leading-8 lg:text-[1em] text-[0.7em] sm:text-[0.7em] max-w-4xl mx-auto">
            WELCOME TO LOC & TRAM’S WEDDING.
            <br />
            HERE, YOU’LL FIND EVERYTHING YOU NEED<br/>FOR THIS SPECIAL DAY.
          </p>
        </div>
      </section>

      {/* ENVELOPE SECTION */}
      <section className="bg-[#3a2c22] text-white pb-8 sm:pb-20 px-4 sm:px-0">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-0 sm:px-4">
          <div className="relative w-[min(96vw,1100px)] aspect-1200/850 overflow-hidden rounded-3xl sm:rounded-[28px] border border-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
            <Image
              src="/rsvp.png"
              alt="rsvp"
              width={1200}
              height={850}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/8" />

            <div className="absolute inset-0 flex flex-col items-center justify-between px-3 py-4 sm:px-7 sm:py-8 md:px-10 md:py-10 lg:px-12">
              <div className="mt-[12%] lg:mt-[15%] sm:mt-[15%] md:mt-[13%] text-center text-black">
                <h1 className="text-[clamp(36px,7vw,100px)] leading-none font-script whitespace-nowrap">
                  Kindly Respond
                </h1>
              </div>

              <div className="lg:mb-[8%] mb-[6%] w-full max-w-[96%] sm:max-w-[84%] leading-4 lg:max-w-[80%] rounded-2xl sm:rounded-[20px] bg-white/10 px-3 py-2 text-center text-black backdrop-blur-[2px] sm:px-6 sm:py-4 lg:px-8 lg:py-5">
                <p className="font-serif text-[clamp(8px,1.12vw,22px)] lg:leading-12 sm:leading-7 tracking-[0.06em] lg:text-[1.1em] text-[0.8em] sm:text-[0.8em] sm:tracking-[0.08em] lg:tracking-widest">
                  XIN VUI LÒNG PHẢN HỒI TRƯỚC 9PM (05/05/2026)
                </p>
                <p className="font-serif text-[clamp(8px,1.12vw,22px)] lg:leading-12 sm:leading-7 tracking-[0.06em] lg:text-[1.1em] text-[0.8em] sm:text-[0.8em] sm:tracking-[0.08em] lg:tracking-widest">
                  BẰNG CÁCH SỬ DỤNG LIÊN KẾT RSVP ĐƯỢC CUNG CẤP TẠI <a href="https://loctramwedding.fillout.com/rsvp" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2">
                    ĐÂY
                  </a>
                </p>

                <p className="mt-2 sm:mt-6 font-serif italic text-[clamp(8px,1.12vw,22px)] lg:leading-12 sm:leading-7 tracking-[0.06em] lg:text-[1.1em] text-[0.8em] sm:text-[0.8em] sm:tracking-[0.08em] lg:tracking-widest">
                  PLEASE RESPOND BEFORE 9PM (MAY 5TH, 2026)
                </p>
                <p className="font-serif italic text-[clamp(8px,1.12vw,22px)] lg:leading-12 sm:leading-7 tracking-[0.06em] lg:text-[1.1em] text-[0.8em] sm:text-[0.8em] sm:tracking-[0.08em] lg:tracking-widest">
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
              className="absolute right-5 bottom-5 lg:right-10 lg:bottom-10 h-14 w-14 sm:right-5 sm:bottom-5 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-50 lg:w-50"
            />
          </div>
        </div>
      </section>

      <div className="relative w-full">
        <Image
          src="/prewedding/7.png"
          alt="Loc&Tram"
          width={853}
          height={1280}
          className="block w-full h-auto"
        />
      </div>

      {/* TIMELINE */}
      <section className="bg-[#f4f2ec] text-[#19140f] py-24 sm:py-35 px-4 sm:px-8 md:px-10">
        <div className="text-center mx-auto max-w-6xl">
          <h1 className="text-[clamp(55px,12vw,96px)] leading-[0.92] font-script mb-18 sm:mb-30 flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-[1em]">
            <span className="-ml-15 sm:-ml-20">Wedding</span>
            <span className="mt-8 sm:mt-10 ml-15 sm:ml-20">Timeline</span>
          </h1>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 sm:gap-y-10 sm:gap-x-6">
            {timelineItems.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-timeline-title text-[clamp(32px,2.0vw,40px)] leading-[1.05] font-bold wrap-break-word">
                  {item.title}
                </h3>
                <p className="font-serif mt-3 text-[clamp(18px,1.4vw,20px)] bold tracking-[0.01em] uppercase wrap-break-word px-2 sm:px-0">
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
      <section className="bg-[#3a2c22] text-white py-2 sm:py-6 px-4 sm:px-8 md:px-10">
        <div className="mt-18 sm:mt-22 text-center mx-auto max-w-6xl">
          <h1 className="text-[clamp(55px,12vw,96px)] leading-[0.92] font-script mb-18 sm:mb-30 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-[1.5em]">
            <span className="-ml-15 sm:-ml-20">Wedding</span>
            <span className="mt-12 sm:mt-13 ml-16 sm:ml-20">Venue</span>
          </h1>


          <p className="font-serif text-center mt-3 tracking-[0.33em] sm:tracking-[0.8em] text-[clamp(16px,1.6vw,22px)] uppercase">
            NOMIA GARDEN RETREATS
          </p>

          <p className="font-serif text-center mt-3 text-[clamp(14px,1.6vw,22px)] uppercase italic tracking-[0.06em] sm:tracking-[0.15em]">
            <a href="https://maps.app.goo.gl/sEwstQxV1KdZbSNF6" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
              GET DIRECTION</a>
          </p>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left ">
              <p className="font-serif tracking-[0.08em] leading-6 text-[clamp(11px,1.5vw,16px)]">
                Chỉ cách Sài Gòn chưa đến 70km, Nomia Garden Retreats là khu nghỉ dưỡng tuyệt đẹp nằm bên cạnh Hồ Trị An,
                nơi đây lưu giữ vẻ đẹp hoang sơ của thiên nhiên ban tặng kết hợp với sự tinh tế khéo léo từ bàn tay con người.
              </p>

              <p className="font-serif italic mt-10 sm:mt-12 tracking-[0.08em] leading-6 text-[clamp(11px,1.5vw,16px)]">
                Located less than 70km from Saigon, Nomia Garden Retreats is a stunning resort situated beside Tri An Lake.
                It preserves the pristine beauty bestowed by nature, combined with the refined craftsmanship of human hands.
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
      <section className="min-h-screen bg-[#f4f2ec] text-[#19140f] flex flex-col items-stretch">
        <div className="mx-auto mt-20 sm:mt-25 w-full max-w-5xl px-5 text-center sm:px-8 md:px-10">
          <h1 className="text-[clamp(60px,10vw,120px)] leading-[0.9] font-script lg:mb-33 mb-15 sm:mb-20">
            Our Story
          </h1>
          <p className="font-serif lg:mt-10 mt-4 sm:mt-6 italic lg:tracking-widest tracking-[0.08em] sm:tracking-[0.15em] lg:leading-7 leading-5 sm:leading-6 lg:text-[1.6em] text-[0.7em] sm:text-[0.9em] max-w-4xl mx-auto">
            Lộc & Trâm không bắt đầu bằng điều gì quá đặc biệt,
            <br />
            chỉ là hai người bước vào cuộc đời nhau đúng lúc.
          </p>
          <p className="font-serif lg:mt-10 mt-4 sm:mt-6 italic lg:tracking-widest tracking-[0.08em] sm:tracking-[0.15em] lg:leading-7 leading-5 sm:leading-6 lg:text-[1.6em] text-[0.7em] sm:text-[0.9em] max-w-4xl mx-auto">
            Loc & Tram didn’t begin with anything extraordinary,
            <br />
            just two people who came into each other’s lives
            <br />
            at the right time.
          </p>
        </div>

        <div className="relative mt-5 sm:mt-8 w-full">
          <Image
            src="/prewedding/1.jpg"
            alt="Loc&Tram"
            width={853}
            height={1280}
            className="block w-full h-auto border border-[#d2c7b5]"
          />
        </div>

        <div className="mx-auto mt-5 sm:mt-8 w-full max-w-5xl px-5 text-center sm:px-8 md:px-10">
          <p className="font-serif lg:mt-10 mt-4 sm:mt-6 italic lg:tracking-widest tracking-[0.08em] sm:tracking-[0.15em] lg:leading-7 leading-5 sm:leading-6 lg:text-[1.6em] text-[0.7em] sm:text-[0.9em] max-w-4xl mx-auto">
            Từng ngày trôi qua, họ nhận ra: bình yên nhất là khi có nhau.
          </p>
          <p className="font-serif lg:mt-10 mt-4 sm:mt-6 italic lg:tracking-widest tracking-[0.08em] sm:tracking-[0.15em] lg:leading-7 leading-5 sm:leading-6 lg:text-[1.6em] text-[0.7em] sm:text-[0.9em] max-w-4xl mx-auto">
            As the days went by, they realized that the greatest peace is simply having one another.
          </p>
        </div>

        <div className="relative mt-5 sm:mt-8 w-full">
        <Image
          src="/prewedding/6.jpg"
          alt="Loc&Tram"
          width={853}
          height={1280}
          className="block w-full h-auto"
        />
        </div>

        <div className="mx-auto mt-5 sm:mt-8 w-full max-w-5xl px-5 text-center sm:px-8 md:px-10">
          <p className="font-serif lg:mt-10 mt-4 sm:mt-6 italic lg:tracking-widest tracking-[0.08em] sm:tracking-[0.15em] lg:leading-7 leading-5 sm:leading-6 lg:text-[1.6em] text-[0.7em] sm:text-[0.9em] max-w-4xl mx-auto">
            Và thế là, họ quyết định cùng nhau đi xa hơn,
            <br />
            không chỉ là hôm nay, mà là mãi về sau.
          </p>

          <p className="font-serif lg:mb-10 mb-4 sm:mb-6 lg:mt-10 mt-4 sm:mt-6 italic lg:tracking-widest tracking-[0.08em] sm:tracking-[0.15em] lg:leading-7 leading-5 sm:leading-6 lg:text-[1.6em] text-[0.7em] sm:text-[0.9em] max-w-4xl mx-auto">
            And so, they chose to go further together,
            <br />
            not just for today, but for all the days to come.
          </p>
        </div>
      
      </section>

      {/* GETTING MARRIED */}
      <section className="min-h-screen bg-[#f4f2ec] text-[#19140f] flex flex-col items-stretch">
      <div className="mx-auto bg-[#3a2c22] text-white sm:mt-20 w-full px-5 text-center sm:px-8 md:px-10">
        <h1 className="text-[clamp(40px,10vw,80px)] leading-[0.92] font-script mt-16 sm:mt-20 mb-16 sm:mb-20 flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-[1em]">
          <span className="-ml-30 sm:-ml-40">We are</span>
          <span className="mt-1 sm:mt-3 ml-20 sm:ml-30">getting married!</span>
        </h1>
      </div>

        <div className="relative w-full">
        <Image
          src="/prewedding/3.jpg"
          alt="Loc&Tram"
          width={853}
          height={1280}
          className="block w-full h-auto"
        />
        </div>

        <div className="mx-auto mt-10 sm:mt-14 mb-10 sm:mb-14 w-full max-w-5xl px-5 text-center sm:px-8 md:px-10">
          <p className="font-serif tracking-[0.5em] sm:tracking-[0.8em] text-lg sm:text-xl font-bold">
            SAVE THE DATE
            <br />
            16.05.2026
          </p>
          <div className="mx-auto mt-10 sm:mt-14 mb-2 w-20 sm:mb-6 sm:w-24">
            <Image
              src="/logo/ĐEN.png"
              alt="Wedding logo"
              width={300}
              height={300}
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* CONTACT
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
      </section> */}

    </main>
  );
}
