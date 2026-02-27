"use client";
import { Phone, MapPin, MessageCircle, Clock, Star, Users, Utensils, Award, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// --- FIXED COUNTER COMPONENT ---
// Ensures smooth, non-flickering numbers for both integers and decimals
const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  
  const rounded = useTransform(count, (latest) => {
    const isDecimal = value % 1 !== 0;
    // Uses Math.floor for integers to prevent "jumping" decimal places during animation
    return isDecimal ? latest.toFixed(1) : Math.floor(latest).toLocaleString();
  });
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: duration, ease: "easeOut" });
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}

      <section className="relative w-full min-h-[90vh] bg-brand-blue text-white flex items-center justify-center px-6 pt-20 pb-32 md:pb-48 overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" 
          />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Floating Bakery Icons (Desktop Only) */}
        <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 left-[10%]"><Utensils size={40} /></motion.div>
          <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-40 left-[15%]"><Star size={30} /></motion.div>
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }} className="absolute top-40 right-[10%]"><Award size={45} /></motion.div>
        </div>

        <div className="z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left space-y-8 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-bold tracking-widest uppercase mb-4 border border-brand-gold/30">
                ✨ Best Bakery in Nalasopara
              </span>
              <h1 className="font-cursive text-7xl md:text-8xl lg:text-9xl text-brand-gold drop-shadow-2xl leading-tight">
                The Cruffin
                <span className="block text-3xl md:text-5xl text-white mt-2 font-sans font-bold tracking-[0.15em] uppercase">
                  The Cake Shop
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl font-light text-brand-cream/90 max-w-xl mx-auto lg:mx-0"
            >
              Handcrafted sweetness delivered to your doorstep. Experience the perfect blend of <b>freshness</b> and <b>artistry</b>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4"
            >
              <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-10 py-4 rounded-full hover:brightness-110 transition-all transform hover:scale-105 shadow-xl group">
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" /> Order on WhatsApp
              </a>
              <Link href="/about/" className="flex items-center justify-center gap-2 bg-transparent border-2 border-brand-gold text-brand-gold font-bold px-10 py-4 rounded-full hover:bg-brand-gold hover:text-brand-blue transition-all">
                Our Story
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Featured Visual (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="/img/2.jpg" 
                alt="Signature Cruffin" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-brand-gold text-brand-blue p-6 rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-brand-blue"
            >
              <span className="font-black text-2xl">100%</span>
              <span className="text-xs font-bold uppercase tracking-tighter">Freshly Baked</span>
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-brand-gold/20 rounded-full animate-spin-slow" />
          </motion.div>
        </div>
      </section>

      {/* --- TRUST STATS SECTION --- */}
      {/* Adjusted negative margin (-mt-20 to -mt-28) to ensure it sits perfectly between sections */}
      <section className="relative z-20 -mt-20 md:-mt-28 mb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-brand-blue/15 border border-brand-gold/10 p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
            
            {/* Stat Item */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center group">
              <div className="mb-4 p-3 rounded-2xl bg-brand-gold/10 text-brand-gold group-hover:scale-110 transition-transform">
                <Users size={28} />
              </div>
              <p className="text-3xl md:text-5xl font-black text-brand-blue"><Counter value={140} />+</p>
              <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest mt-2 text-gray-400">Happy Daily Visits</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center text-center group">
              <div className="mb-4 p-3 rounded-2xl bg-brand-gold/10 text-brand-gold group-hover:scale-110 transition-transform">
                <Star size={28} />
              </div>
              <p className="text-3xl md:text-5xl font-black text-brand-blue"><Counter value={4.6} /></p>
              <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest mt-2 text-gray-400">Google Rating</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center group">
              <div className="mb-4 p-3 rounded-2xl bg-brand-gold/10 text-brand-gold group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <p className="text-3xl md:text-5xl font-black text-brand-blue"><Counter value={5} />+</p>
              <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest mt-2 text-gray-400">Years Excellence</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col items-center text-center group">
              <div className="mb-4 p-3 rounded-2xl bg-brand-gold/10 text-brand-gold group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <p className="text-3xl md:text-5xl font-black text-brand-blue">
                <Counter value={1.5} />
                <span className="text-xl md:text-2xl ml-1">km</span>
              </p>
              <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest mt-2 text-gray-400">Free Delivery</p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* --- REVIEWS SECTION --- */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cursive text-6xl text-brand-blue">What Our Customers Say</h2>
            <div className="flex justify-center gap-1 text-brand-gold mt-4">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Kajal K.", 
                duration: "3 months ago",
                img: "https://lh3.googleusercontent.com/a-/ALV-EMi-example-1", 
                text: "Had a great experience ordering from this cake shop.❤️ The cake looked fantastic and tasted even better 😋. You can tell they use quality ingredients. Owner is polite and ensured timely delivery...",
                rating: 5
              },
              { 
                name: "Soumya S.", 
                duration: "4 months ago",
                img: "https://lh3.googleusercontent.com/a-/ALV-EMj-example-2",
                text: "I bought my kid birthday cake hr n give us a very good tasty cake... 👍",
                rating: 5
              },
              { 
                name: "Local Guide", 
                duration: "1 month ago",
                img: "https://lh3.googleusercontent.com/a-/ALV-EMk-example-3",
                text: "Truly yummy and fresh! The Rasmalai cake is a must-try. Polite behavior from staff.",
                rating: 5
              }
            ].map((rev, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-cream p-8 rounded-3xl relative shadow-sm border-b-4 border-brand-gold"
              >
                {/* Header: Photo, Name, Duration */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={rev.img} 
                      alt={rev.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => e.target.src = "https://ui-avatars.com/api/?name=" + rev.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-blue text-[15px] leading-none">{rev.name}</span>
                    <span className="text-[11px] text-gray-500 mt-1">{rev.duration}</span>
                  </div>
                </div>

                {/* Review Body */}
                <div className="grow">
                  <p className="text-gray-700 text-[13.5px] leading-relaxed mb-2">
                    {rev.text}
                  </p>
                  <button className="text-gray-500 text-[13px] font-medium hover:underline">Read more</button>
                </div>

                {/* Footer: Stars and Google Icon */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-brand-gold/10">
                  <div className="flex gap-0.5 text-brand-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={14} />
                    ))}
                  </div>
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c3.13 0 5.75-1.04 7.67-2.81l-3.57-2.77c-1.06.71-2.43 1.12-4.1 1.12-3.15 0-5.83-2.12-6.78-4.98H1.62v2.86C3.54 20.35 7.49 23 12 23z" fill="#34A853"/>
                      <path d="M5.22 14.57c-.24-.71-.38-1.47-.38-2.57s.14-1.86.38-2.57V6.57H1.62A11.97 11.97 0 0 0 0 12c0 2.01.5 3.91 1.38 5.57l3.84-3z" fill="#FBBC05"/>
                      <path d="M12 4.75c1.7 0 3.22.58 4.42 1.73l3.31-3.31C17.74 1.3 15.12 0 12 0 7.49 0 3.54 2.65 1.62 6.57l3.84 2.86C6.17 6.88 8.85 4.75 12 4.75z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MENU PREVIEW --- */}
      <section className="py-20 px-4 bg-brand-cream" id="menu">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cursive text-6xl text-brand-blue mb-12 text-center">Signature Treats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { img: "/img/2.jpg", title: "Rasmalai Fusion Cake", price: "450" },
              { img: "/img/1.jpg", title: "Chocolate Truffle Cake", price: "450" },
              { img: "/img/3.jpg", title: "Choco Fruit Donuts", price: "110" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-xl bg-white shadow-lg p-3"
              >
                <div className="h-64 overflow-hidden rounded-xl">
                  <img src={item.img} className="w-full h-full rounded-xl object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-brand-blue font-bold text-lg mt-2">₹{item.price} onwards</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-blue text-white pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 border-b border-white/10 pb-12">
          <div className="flex flex-col justify-center">
             <h2 className="font-cursive text-5xl text-brand-gold mb-6">Visit The Shop</h2>
             <div className="space-y-4 text-lg">
                <p className="flex gap-3"><MapPin className="text-brand-gold" />Datta Ashiward Apt, 06, Datta Mandir, Nalasopara East, Vasai-Virar, Nala Sopara, Maharashtra 401209</p>
                <p className="flex gap-3"><Phone className="text-brand-gold" /> +91 9764502585</p>
                <p className="flex gap-3"><Clock className="text-brand-gold" /> 10:00 AM - 10:00 PM</p>
             </div>
          </div>
          <div className="h-72 rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.568442805908!2d72.8252!3d19.4205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzEzLjgiTiA3MsKwNDknMzAuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <p className="text-center mt-10 text-white/50 text-sm">© 2026 The Cruffin Cake Shop | Serving Sweetness Locally</p>
      </footer>
    </main>
  );
}