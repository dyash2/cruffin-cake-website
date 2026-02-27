"use client";
import { Award, Heart, ShieldCheck, Users, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
    viewport: { once: true }
  };

  return (
    <main className="min-h-screen bg-brand-cream overflow-hidden">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/" className="font-cursive text-4xl text-brand-gold font-bold">
            The Cruffin
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/" className="flex items-center gap-2 text-brand-blue font-bold hover:underline group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-white border-b border-gray-100">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-cursive text-7xl md:text-8xl text-brand-blue mb-6"
        >
          Our Sweet Journey
        </motion.h1>
        <motion.p 
          {...fadeInUp}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Serving Nalasopara East since 2022. We began with a simple mission: 
          to bake cakes that make your special moments unforgettable.
        </motion.p>
      </section>

      {/* Story Content */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Shop Image */}
          <motion.div 
            whileHover={{ rotate: 0 }}
            className="h-125 rounded-[2.5rem] overflow-hidden shadow-2xl transform -rotate-2 border-8 border-white transition-transform duration-500"
          >
            <img 
              src="/img/1.jpg" 
              alt="Our Shop Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Decorative Badge */}
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-blue p-6 rounded-2xl shadow-xl font-bold"
          >
            <p className="text-3xl">5+</p>
            <p className="text-sm uppercase tracking-tighter">Years of Baking</p>
          </motion.div>
        </motion.div>
        
        <div className="space-y-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-brand-blue mb-4 flex items-center gap-2">
              <Heart className="text-brand-gold animate-pulse" fill="#EDBE58" /> Why We Bake
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We use only the choicest ingredients to ensure every bite is fresh. 
              Our customers know us for our polite nature and dedication to on-time delivery. 
              Whether it's a birthday or a simple craving, we treat every order with love.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-brand-blue mb-4 flex items-center gap-2">
              <Award className="text-brand-gold" /> Our Specialty
            </h2>
            <p className="text-gray-600 mb-4">We specialize in a variety of bakery desserts crafted with quality:</p>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-brand-dark font-semibold"
            >
              {[
                "Chocolate Truffle Cakes", 
                "Fresh Fruit Pastries", 
                "Signature Cruffins", 
                "Custom Birthday Cakes"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={{
                    initial: { opacity: 0, x: -10 },
                    whileInView: { opacity: 1, x: 0 }
                  }}
                  className="flex items-center gap-2"
                >
                  <span className="text-brand-gold">•</span> {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Trust Values Section */}
      <section className="py-24 bg-brand-blue text-white px-4">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center"
        >
          {[
            { icon: ShieldCheck, title: "Quality First", text: "Fresh ingredients, 100% eggless options available daily." },
            { icon: Users, title: "Friendly Service", text: "Our staff is known for being polite and helpful to all neighbors." },
            { icon: Clock, title: "On-Time Delivery", text: "Fast delivery within Nalasopara East to keep celebrations on track." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center group p-4"
            >
              <div className="bg-white/10 p-6 rounded-full mb-6 group-hover:bg-brand-gold transition-all duration-300 ring-4 ring-white/5 group-hover:ring-brand-gold/50">
                <item.icon size={40} className="text-brand-gold group-hover:text-brand-blue transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-100 max-w-xs leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cursive text-6xl text-brand-blue mb-10">Ready to start your order?</h2>
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(37, 211, 102, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919876543210" 
            className="bg-[#25D366] text-white font-bold px-12 py-5 rounded-full text-xl inline-flex items-center gap-3 shadow-2xl transition-all"
          >
            Message on WhatsApp
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}