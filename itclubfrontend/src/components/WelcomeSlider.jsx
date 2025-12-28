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

const WelcomeSlider = () => {
  const sliderSettings = (delay) => ({
    modules: [Autoplay, EffectFade],
    effect: "fade",
    speed: 1200,
    autoplay: { delay: delay, disableOnInteraction: false },
    loop: true,
    allowTouchMove: false,
    className: "h-full w-full"
  });

  return (
    <section className="bg-white overflow-hidden h-auto md:h-[calc(100vh-70px)] flex flex-col">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row flex-1 w-full overflow-hidden shadow-2xl my-2 rounded-xl border border-gray-100">        
        {/* LEFT CONTENT: 40% (Modern Typography) */}
        <div className="w-full md:w-[40%] p-8 md:p-16 bg-white flex flex-col justify-center relative shrink-0">
          {/* Decorative Background Element */}
          <div className="absolute top-0 left-0 w-2 h-full bg-it-blue"></div>
          
          <div className="space-y-2">
            <span className="text-it-green font-bold tracking-[0.3em] text-[10px] uppercase">Estd. 2013</span>
            <h2 className="text-4xl lg:text-6xl font-black text-it-blue leading-[0.9] uppercase tracking-tighter">
              Connecting <br />
              <span className="text-it-green">Communities!</span>
            </h2>
            <h3 className="text-2xl lg:text-4xl font-bold text-it-blue/20 uppercase tracking-tighter leading-none">
              Empowering People
            </h3>
          </div>
          
          <div className="mt-8 border-l-4 border-it-green pl-6 py-2">
            <p className="text-sm md:text-base text-gray-600 italic font-semibold leading-relaxed">
              "Give them more reasons to smile, Change their present to change their future."
            </p>
          </div>

          <div className="mt-10 flex gap-6">
            <button className="bg-it-blue text-white py-3 px-8 text-xs font-black rounded-full shadow-xl hover:bg-it-green transition-all duration-500 hover:-translate-y-1 uppercase tracking-widest">
              Join Us
            </button>
          </div>
        </div>

        {/* RIGHT PHOTO GRID: 60% (Cinematic Frames) */}
<div className="w-full md:w-[60%] bg-it-blue/5 p-1.5 grid grid-cols-2 grid-rows-2 gap-1.5 h-96 md:h-full overflow-hidden">          
          {/* Frame 1: Large Feature */}
          <div className="relative overflow-hidden rounded-lg bg-gray-200 h-full">
            <Swiper {...sliderSettings(3000)}>
              {[pic1, pic5, pic7].map((img, i) => (
<SwiperSlide key={i}>
  <img 
    src={img} 
    style={{ transitionDuration: '3000ms' }} // Warning fix
    className="h-full w-full object-cover hover:scale-110 transition-transform" 
    alt="" 
  />
</SwiperSlide>              ))}
            </Swiper>
          </div>

          {/* Frame 2: Message Box (Fixed but Animated) */}
          <div className="bg-it-green flex flex-col items-center justify-center text-white text-center p-6 h-full rounded-lg shadow-inner relative">
            <div className="absolute inset-0 bg-white/5 opacity-20"></div>
            <p className="text-xl lg:text-3xl font-black uppercase tracking-widest leading-none z-10">
              Transforming <br /> 
              <span className="text-it-blue">Lives</span>
              

            </p>
            <div className="w-12 h-1 bg-white mt-4 z-10"></div>
          </div>

          {/* Frame 3: Medium Feature */}
          <div className="relative overflow-hidden rounded-lg bg-gray-200 h-full">
            <Swiper {...sliderSettings(4000)}>
              {[pic2, pic6, pic3].map((img, i) => (
                <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Frame 4: Action Grid */}
          <div className="grid grid-cols-2 gap-1.5 h-full">
            <div className="overflow-hidden rounded-lg bg-gray-200 h-full">
              <Swiper {...sliderSettings(2500)}>
                {[pic4, pic7, pic1].map((img, i) => (
                  <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-200 h-full">
              <Swiper {...sliderSettings(3500)}>
                {[pic3, pic2, pic6].map((img, i) => (
                  <SwiperSlide key={i}><img src={img} className="h-full w-full object-cover" alt="" /></SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>

{/* TICKER SECTION */}
<div className="bg-it-blue text-white py-1.5 overflow-hidden shrink-0 border-t border-it-green mt-auto shadow-2xl relative">
  <div 
    style={{
      display: 'flex',
      width: 'max-content',
      animation: 'marquee-direct 25s linear infinite'
    }}
    className="whitespace-nowrap flex gap-16 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em]"
  >
    {/* Style tag yahan animation ko handle karega */}
    <style>
      {`
        @keyframes marquee-direct {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
    </style>

    {/* Ticker Content */}
    <span>• Welcome to ITCLUB Foundation</span>
    <span>• Connecting Communities, Empowering People</span>
    <span>• ISO 9001:2015 Certified Organization</span>
    <span>• Join our Mission for a better future</span>
    
    {/* Loop smooth karne ke liye same content dobara */}
    <span>• Welcome to ITCLUB Foundation</span>
    <span>• Connecting Communities, Empowering People</span>
    <span>• ISO 9001:2015 Certified Organization</span>
    <span>• Join our Mission for a better future</span>
  </div>
</div>
    </section>
  );
};

export default WelcomeSlider;