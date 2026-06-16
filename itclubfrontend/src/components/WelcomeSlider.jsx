import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import Donate from '../pages/Donate';

const categoryImages = {
  Skill: [
    "/Skill/skill1.png",
    "/Skill/skill2.png",
    "/Skill/skill3.png",
    "/Skill/skill4.png",
  ],
  Education: [
    "/Education/education1.png",
    "/Education/education2.png",
    "/Education/education3.png",
    "/Education/education4.png",
  ],
  Women: [
    "/Women/women1.png",
    "/Women/women2.png",
    "/Women/women3.png",
    "/Women/women4.png",
  ],
  Health: [
    "/Health/health1.png",
    "/Health/health2.png",
    "/Health/health3.png",
    "/Health/health4.png",
  ],
  Environment: [
    "/Environment/environment1.png",
    "/Environment/environment2.png",
    "/Environment/environment3.png",
    "/Environment/environment4.png",
  ],
  Livelihood: [
    "/Livelihood/livelihood1.png",
    "/Livelihood/livelihood2.png",
    "/Livelihood/livelihood3.png",
    "/Livelihood/livelihood4.png",
  ],
};

const contentData = [
  {
    title: "Skill",
    sub: "Development",
    slogan: "Building Sustainable Futures",
    desc: "Empowering youth with practical skills, vocational training, and career opportunities to enhance employability and self-reliance."
  },
  {
    title: "Education",
    sub: "& Literacy",
    slogan: "Learning for All",
    desc: "Promoting quality education and literacy initiatives to ensure equal learning opportunities for children, youth, and communities."
  },
  {
    title: "Women",
    sub: "Empowerment",
    slogan: "Empowering Change Makers",
    desc: "Supporting women through education, entrepreneurship, leadership development, and economic empowerment programs."
  },
  {
    title: "Health",
    sub: "& Nutrition",
    slogan: "Healthy Communities, Stronger Futures",
    desc: "Improving access to healthcare, nutrition, and wellness programs for underserved and vulnerable populations."
  },
  {
    title: "Environment",
    sub: "Care",
    slogan: "Towards a Greener Tomorrow",
    desc: "Encouraging environmental responsibility through awareness campaigns, conservation initiatives, and sustainable practices."
  },
  {
    title: "Livelihood",
    sub: "Support",
    slogan: "Creating Opportunities for Growth",
    desc: "Strengthening livelihoods through skill enhancement, entrepreneurship support, and sustainable income-generation opportunities."
  }
];

const WelcomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // पूरे सेक्शन को बदलने का समय (6 सेकंड)
  const duration = 6000; 
  const currentImages = categoryImages[contentData[currentIndex].title] || [];

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
  }, [currentIndex, isPaused, progress]);

  // यहाँ हमने डिले को बढ़ाकर 4500ms और फ़ेड स्पीड को 1200ms किया है ताकि आराम से चेंज हो
  const sliderSettings = (baseDelay) => ({
    modules: [Autoplay, EffectFade],
    effect: "fade",
    speed: 1200, // फ़ेड होने की रफ़्तार को स्मूथ किया
    autoplay: { 
      delay: baseDelay, // अब यह 4000ms से 4600ms के बीच रहेगा
      disableOnInteraction: false, 
      pauseOnMouseEnter: true 
    },
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
            <span className="hidden md:block absolute top-35 -right-45 -translate-y-1/2 opacity-[0.07] rotate-90 font-black blur-[0.7px] text-left text-4xl tracking-[0.2em]">
              ITCLUB <br /> FOUNDATION
            </span>
            <span className="block md:hidden absolute top-22 -right-35 opacity-[0.07] rotate-90 font-black blur-[0.7px] text-left text-4xl tracking-[0.2em]">
              ITCLUB <br /> FOUNDATION
            </span>
          </div>

          <div
            className="space-y-6 inline-block w-full cursor-default relative z-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Focus Area Section */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-it-green font-extrabold tracking-[0.4em] text-[10px] uppercase"></span>
              </div>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest pl-9">
                {contentData[currentIndex].slogan}
              </p>
            </div>

            {/* Title Section */}
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

            {/* Description Section */}
            <div className="pt-2 border-l-4 border-it-green/80 pl-6 w-full">
              <p className="text-sm md:text-lg text-gray-500 font-bold leading-relaxed tracking-tight max-w-sm">
                {contentData[currentIndex].desc}
              </p>

              {/* BOTTOM SECTION */}
              <div className="mt-10 flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase text-it-blue opacity-50 tracking-widest leading-none mb-1">
                    Our Global Mission
                  </span>
                  <span className="text-xs font-bold text-gray-700 whitespace-nowrap">
                    Better World, Brighter Future
                  </span>
                </div>

                <div className="flex items-center">
                  <style>
                    {`
                      @keyframes greenBlueLoop {
                        0%, 100% { background-color: #10b981; } 
                        50% { background-color: #1e3a8a; }      
                      }
                      .animate-donate-btn {
                        animation: greenBlueLoop 3s ease-in-out infinite;
                      }
                    `}
                  </style>

                  <a
                    href="/donate-now"
                    aria-label="Make a donation"
                    className="animate-donate-btn text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 no-underline flex items-center justify-center whitespace-nowrap"
                  >
                    DONATE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PHOTO GRID: 60% */}
        <div className="w-full md:w-[60%] bg-[#f8fafc] p-2 grid grid-cols-2 grid-rows-2 gap-2 h-96 md:h-full overflow-hidden">          
          
          <div className="relative overflow-hidden rounded-2xl bg-gray-200 h-full shadow-sm">
            {/* Delay बढ़ाकर 4200ms किया */}
            <Swiper {...sliderSettings(4200)}>
              {currentImages.map((img, i) => (
                <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
              ))}
            </Swiper>
          </div>
{/* #019b07 */}
          <div className="bg-it-green flex flex-col items-center justify-center text-white text-center p-6 h-full rounded-2xl shadow-inner relative overflow-hidden group">
            <p className="text-xl lg:text-3xl font-black uppercase tracking-widest leading-none z-10">
              Connecting <br /> 
              <span className="text-it-blue">Communities!</span>
              <span className="block text-xs mt-2">People Empowerment</span>
            </p>
            <div className="w-12 h-1 bg-white mt-4 z-10 rounded-full"></div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gray-200 h-full shadow-sm">
            {/* Delay बढ़ाकर 4500ms किया */}
            <Swiper {...sliderSettings(4500)}>
              {[...currentImages].reverse().map((img, i) => (
                <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="overflow-hidden rounded-2xl bg-gray-200 h-full shadow-sm">
              {/* Delay बढ़ाकर 4000ms किया */}
              <Swiper {...sliderSettings(4000)}>
                  {currentImages.map((img, i) => (
                  <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gray-200 h-full shadow-sm">
              {/* Delay बढ़ाकर 4600ms किया */}
              <Swiper {...sliderSettings(4600)}>
                {[...currentImages].reverse().map((img, i) => (
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