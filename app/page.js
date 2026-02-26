"use client";
import { Phone, MapPin, MessageCircle, Clock, Star, Users, Utensils, Award } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Reusable Counter Component
const Counter = ({ value, duration = 2, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // Handling decimal for the 4.6 and 1.5 values
    return latest % 1 === 0 ? latest : latest.toFixed(1);
  });
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: duration });
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[85vh] bg-brand-blue text-white flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        <div className="z-10 max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cursive text-7xl md:text-9xl text-brand-gold drop-shadow-2xl"
          >
            The Cruffin
            <span className="block text-3xl md:text-5xl text-white mt-2 font-sans font-bold tracking-[0.2em] uppercase">
              The Cake Shop
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl font-light text-brand-cream/90 max-w-2xl mx-auto mt-4"
          >
            Freshness you can taste. Quality you can trust.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-10 py-4 rounded-full hover:brightness-110 transition-all transform hover:scale-105 shadow-xl">
              <MessageCircle size={20} /> Order on WhatsApp
            </a>
            <Link href="/about/" className="flex items-center justify-center gap-2 bg-transparent border-2 border-brand-gold text-brand-gold font-bold px-10 py-4 rounded-full hover:bg-brand-gold hover:text-brand-blue transition-all">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* --- ANIMATED TRUST STATS BAR --- */}
      <section className="bg-brand-gold py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-brand-blue text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-5xl font-bold">
              <Counter value={140} />+
            </p>
            <p className="text-xs uppercase font-black tracking-widest mt-2">Happy Daily Visits</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p className="text-5xl font-bold">
              <Counter value={4.6} />
            </p>
            <p className="text-xs uppercase font-black tracking-widest mt-2">Google Rating</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p className="text-5xl font-bold">
              <Counter value={5} />+ yrs
            </p>
            <p className="text-xs uppercase font-black tracking-widest mt-2">Baking Expertise</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <p className="text-5xl font-bold">
              <Counter value={1.5} />km
            </p>
            <p className="text-xs uppercase font-black tracking-widest mt-2">Free Delivery Radius</p>
          </motion.div>
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
              { name: "Local Guide", text: "Truly yummy and fresh! The Rasmalai cake is a must-try. Polite behavior from staff." },
              { name: "Regular Customer", text: "Proactive communication and on-time delivery every time. Best bakery in Nalasopara East." },
              { name: "Food Lover", text: "Kiwi pastries are so fresh. The quality of ingredients really stands out compared to others." }
            ].map((rev, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-brand-cream p-8 rounded-3xl relative shadow-sm border-b-4 border-brand-gold"
              >
                <p className="text-gray-700 italic mb-6">"{rev.text}"</p>
                <p className="font-bold text-brand-blue">— {rev.name}</p>
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
                className="group overflow-hidden rounded-[2.5rem] bg-white shadow-lg p-3"
              >
                <div className="h-64 overflow-hidden rounded-2rem">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.759951522692!2d72.81074406071988!3d19.425796218041135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a99a08eb3747%3A0x469c77979680e7b3!2sCRUFFIN%20THE%20CAKE%20SHOP!5e0!3m2!1sen!2sin!4v1772119454770!5m2!1sen!2sin" 
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