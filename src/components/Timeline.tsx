import React from 'react';
import { motion } from 'motion/react';
import { Heart, Mic, Wine, Utensils, Music, Car } from 'lucide-react';

const events = [
  { time: '06:30 PM', title: 'Couple Arrival', desc: 'Welcome the couple', Icon: Heart },
  { time: '07:00 PM', title: 'Welcome Speech', desc: 'A few words of welcome', Icon: Mic },
  { time: '07:30 PM', title: 'Homecoming Toast', desc: 'A toast to the couple', Icon: Wine },
  { time: '08:00 PM', title: 'Dinner', desc: 'Join us for a feast', Icon: Utensils },
  { time: '09:30 PM', title: 'Dancing Floor', desc: 'Let\'s celebrate!', Icon: Music },
  { time: '11:30 PM', title: 'Going Away', desc: 'The grand exit', Icon: Car },
];

export const Timeline = () => {
  return (
    <div className="bg-gradient-to-b from-[#FDF9F1] via-[#F9EFEF] to-[#FDF9F1] py-24 sm:py-32 relative overflow-hidden flex justify-center w-full">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: 'url("/Burgundy Floral Wedding Frame.png")' }} />
      {/* Bottom left corner flower */}
      <img 
        src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM - Copy.png" 
        alt="Floral Corner" 
        className="absolute bottom-0 left-0 w-64 sm:w-96 opacity-80 mix-blend-multiply pointer-events-none z-0 translate-y-20 sm:translate-y-0" 
      />

      <div className="w-full max-w-2xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top middle flower */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <img 
            src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM.png" 
            alt="Floral Top" 
            className="w-20 sm:w-24 h-auto opacity-80 mix-blend-multiply"
          />
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl font-names text-white tracking-wide mb-2">The Day</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full max-w-md mx-auto">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative flex items-center mb-12 last:mb-0 group"
            >
              {/* Time */}
              <div className="w-20 sm:w-24 flex-shrink-0 text-right">
                <span className="font-['Cormorant_Garamond',_serif] text-sm sm:text-base text-white/90 tracking-widest tabular-nums font-semibold">
                  {event.time}
                </span>
              </div>

              {/* Dot and Line Container */}
              <div className="flex flex-col items-center mx-4 sm:mx-6 relative h-full">
                {/* Line to next item */}
                {idx !== events.length - 1 && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-[calc(100%+3rem)] bg-white/40 group-hover:bg-white/80 transition-colors duration-500" />
                )}
                {/* Icon Image */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white relative z-10 border border-white/40 shadow-[0_4px_15px_rgba(106,27,41,0.15)] flex items-center justify-center group-hover:border-white group-hover:scale-105 transition-all duration-300 overflow-hidden">
                  <event.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-plum opacity-90" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-['Cormorant_Garamond',_serif] text-xl sm:text-2xl text-white mb-1 font-medium">{event.title}</h3>
                <p className="text-[11px] sm:text-xs text-white/80 font-sans tracking-wide">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
