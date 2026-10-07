import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles, Palette } from 'lucide-react';

interface CeremonyDetailsProps {
  event?: string | null;
}

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = ({ event = 'both' }) => {
  const isHomecoming = event === 'homecoming';

  return (
    <div className="py-24 sm:py-32 bg-white relative overflow-hidden w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: 'url("/Burgundy Floral Wedding Frame.png")' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative w-full z-10">
      
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-lavender/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 justify-center">
        {/* Left Side: Text Content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center bg-white/70 backdrop-blur-md p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-brand-lavender/30"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-brand-plum uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[11px] sm:text-xs font-bold drop-shadow-sm">
                The Sacred Union
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-brand-plum/60 to-transparent" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
                <>A Celebration of <br /><span className="italic font-light text-brand-plum">Tradition & Love</span></>
            </h2>

            <p className="text-black font-semibold font-serif text-lg sm:text-xl leading-relaxed mb-16 max-w-lg text-center">
                We are honored to invite you to witness the beginning of our forever as we exchange vows, surrounded by the warmth and love of our cherished family and friends.
            </p>

            {/* Premium Timeline */}
            <div className="relative space-y-8 flex flex-col items-center w-full max-w-md mx-auto">
              
              {/* Date */}
              <div className="relative group flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(106,27,41,0.3)] transition-all duration-500 mb-3">
                  <Calendar className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 group-hover:text-brand-plum transition-colors duration-500 text-center">
                  Date: December 12, 2026
                </h4>
              </div>

              {/* Venue */}
              <div className="relative group flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(106,27,41,0.3)] transition-all duration-500 mb-3 mt-4">
                  <MapPin className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 group-hover:text-brand-plum transition-colors duration-500 text-center">
                  Venue: Seascape Hall, The Blue water,<br className="hidden sm:block" /> Wadduwa
                </h4>
              </div>

              {/* Time */}
              <div className="relative group flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(106,27,41,0.3)] transition-all duration-500 mb-3 mt-4">
                  <Clock className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 group-hover:text-brand-plum transition-colors duration-500 text-center">
                  Time: 6.30 PM onwards
                </h4>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
      </div>
    </div>
  );
};
