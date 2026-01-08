import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import pic1 from '../assets/pic1.webp';
import pic2 from '../assets/pic2.webp';
import pic3 from '../assets/pic3.webp';
import pic4 from '../assets/pic4.webp';
import pic5 from '../assets/pic5.webp';
import pic6 from '../assets/pic6.webp';
import pic7 from '../assets/pic7.webp';

const contentData = [
  {
    title: "Skill",
    sub: "Development",
    slogan: "Building Sustainable Futures",
    desc: "Empowering young minds through modern education, skill training, and vocational programs that create employment and sustainable growth."
  },
  {
    title: "Digital",
    sub: "Innovation",
    slogan: "Tech for Social Good",
    desc: "Bridging the digital divide by delivering innovative technology solutions, digital literacy, and smart tools to strengthen grassroots communities."
  },
  {
    title: "Women",
    sub: "Empowerment",
    slogan: "Leaders of Tomorrow",
    desc: "Supporting women to lead with confidence through education, entrepreneurship, leadership training, and equal opportunities across all sectors."
  },
  {
    title: "Quality",
    sub: "Healthcare",
    slogan: "Health for Everyone",
    desc: "Ensuring access to quality healthcare services, preventive awareness programs, and medical support for underserved and vulnerable populations."
  },
  {
    title: "Nature",
    sub: "Preservation",
    slogan: "Green Earth, Clean Air",
    desc: "Protecting nature by promoting environmental awareness, conservation initiatives, and sustainable practices for a cleaner, greener future."
  },
  {
    title: "Cultural",
    sub: "Heritage",
    slogan: "Rooted in Tradition",
    desc: "Preserving cultural heritage by celebrating local traditions, art forms, and creative expressions that define our diverse identity."
  },
];

const allPics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const WelcomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const duration = 5000;

  useEffect(() => {
    let interval;
    let progressInterval;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contentData.length);
        setProgress(0);
      }, duration * (1 - progress / 100));

      progressInterval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + (100 / (duration / 100)) : 100));
      }, 100);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentIndex, isPaused]);

  const sliderSettings = (delay) => ({
    modules: [Autoplay, EffectFade],
    effect: "fade",
    speed: 800,
    autoplay: { delay: delay, disableOnInteraction: false, pauseOnMouseEnter: true },
    loop: true,
    allowTouchMove: false,
    className: "h-full w-full"
  });

  return (
    <section className="bg-white overflow-hidden h-auto md:h-[calc(100vh-70px)] flex flex-col font-sans">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row flex-1 w-full overflow-hidden shadow-2xl my-2 rounded-xl border border-gray-100 bg-white">        
        
        {/* LEFT CONTENT: 40% */}
        <div className="w-full md:w-[40%] p-10 md:p-20 flex flex-col justify-center relative shrink-0 bg-white overflow-hidden">
                  
          {/* Background watermark */}
          <div className="relative">
            {/* Desktop view */}
            <span className="hidden md:block absolute top-30 -right-45 -translate-y-1/2 opacity-[0.07] rotate-90 font-black blur-[0.7px] text-left text-4xl tracking-[0.2em]">
              ITCLUB <br /> FOUNDATION
            </span>
            {/* Mobile view */}
            <span className="block md:hidden absolute top-22 -right-35 opacity-[0.07] rotate-90 font-black blur-[0.7px] text-left text-4xl tracking-[0.2em]">
              ITCLUB <br /> FOUNDATION
            </span>

          </div>

          
          <div
            className="space-y-6 inline-block w-full cursor-default relative z-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="w-6 h-0.5 bg-it-green rounded-full"></span>
                <span className="text-it-green font-extrabold tracking-[0.4em] text-[10px] uppercase">
                    Focus Area {currentIndex + 1}
                </span>
              </div>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest pl-9">
                {contentData[currentIndex].slogan}
              </p>
            </div>
            
            <div className="space-y-2 pl-0 md:pl-2">
              <h2 className="text-3xl lg:text-5xl font-black text-it-blue leading-tight uppercase tracking-tight">
                {contentData[currentIndex].title} <br />
                <span className="relative inline-block mt-1">
                  <span className="opacity-10 transition-all duration-500">
                    {contentData[currentIndex].sub}
                  </span>
                  <span 
                    className="absolute top-0 left-0 overflow-hidden whitespace-nowrap text-it-green transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  >
                    {contentData[currentIndex].sub}
                  </span>
                </span>
              </h2>
            </div>
            
            <div className="pt-2 border-l-4 border-it-green/80 pl-6 max-w-sm"> 
              <p className="text-sm md:text-lg text-gray-500 font-bold leading-relaxed tracking-tight">
                {contentData[currentIndex].desc}
              </p>
              
              <div className="mt-6 flex items-center gap-4 group cursor-pointer">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase text-it-blue opacity-50 tracking-widest">Our Global Mission</span>
                  <span className="text-xs font-bold text-gray-700">Better World, Brighter Future</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-it-green group-hover:border-it-green transition-all duration-300">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:text-white text-gray-400 transition-colors"><path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PHOTO GRID: 60% */}
        <div className="w-full md:w-[60%] bg-[#f8fafc] p-2 grid grid-cols-2 grid-rows-2 gap-2 h-96 md:h-full overflow-hidden">          
          <div className="relative overflow-hidden rounded-2xl bg-gray-200 h-full shadow-sm">
            <Swiper {...sliderSettings(1500)}>
              {allPics.map((img, i) => (
                <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="bg-it-green flex flex-col items-center justify-center text-white text-center p-6 h-full rounded-2xl shadow-inner relative overflow-hidden group">
            <p className="text-xl lg:text-3xl font-black uppercase tracking-widest leading-none z-10">
              Connecting <br /> 
              <span className="text-it-blue">Communities!</span>
              <span className="block text-xs mt-2">People Empowerement</span>
            </p>
            <div className="w-12 h-1 bg-white mt-4 z-10 rounded-full"></div>
          </div>


          <div className="relative overflow-hidden rounded-2xl bg-gray-200 h-full shadow-sm">
            <Swiper {...sliderSettings(2000)}>
              {[...allPics].reverse().map((img, i) => (
                <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="overflow-hidden rounded-2xl bg-gray-200 h-full shadow-sm">
              <Swiper {...sliderSettings(1200)}>
                {[pic3, pic5, pic1, pic7].map((img, i) => (
                  <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="overflow-hidden rounded-2xl bg-gray-200 h-full shadow-sm">
              <Swiper {...sliderSettings(1800)}>
                {[pic6, pic2, pic4, pic1].map((img, i) => (
                  <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WelcomeSlider;