import { Award, Heart, ShieldCheck, Users, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-brand-cream">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="font-cursive text-4xl text-brand-gold font-bold">
          The Cruffin
        </Link>
        <Link href="/" className="flex items-center gap-2 text-brand-blue font-bold hover:underline">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-white border-b border-gray-100">
        <h1 className="font-cursive text-7xl md:text-8xl text-brand-blue mb-6">Our Sweet Journey</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Serving Nalasopara East since 2022. We began with a simple mission: 
          to bake cakes that make your special moments unforgettable.
        </p>
      </section>

      {/* Story Content */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Main Shop Image */}
          <div className="h-125 rounded-2em overflow-hidden shadow-2xl transform -rotate-2 border-8 border-white">
            <img 
              src="/img/1.jpg" 
              alt="Our Shop Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Badge */}
          <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-blue p-6 rounded-2xl shadow-xl font-bold">
            <p className="text-3xl">5+</p>
            <p className="text-sm uppercase tracking-tighter">Years of Baking</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-4 flex items-center gap-2">
              <Heart className="text-brand-gold" fill="#EDBE58" /> Why We Bake
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We use only the choicest ingredients to ensure every bite is fresh. 
              Our customers know us for our polite nature and dedication to on-time delivery. 
              Whether it's a birthday or a simple craving, we treat every order with love.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-4 flex items-center gap-2">
              <Award className="text-brand-gold" /> Our Specialty
            </h2>
            <p className="text-gray-600 mb-4">We specialize in a variety of bakery desserts crafted with quality:</p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-brand-dark font-semibold">
              <li>• Chocolate Truffle Cakes</li>
              <li>• Fresh Fruit Pastries</li>
              <li>• Signature Cruffins</li>
              <li>• Custom Birthday Cakes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Values Section */}
      <section className="py-20 bg-brand-blue text-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center group">
             <div className="bg-white/10 p-6 rounded-full mb-4 group-hover:bg-brand-gold transition-colors">
                <ShieldCheck size={40} className="text-brand-gold group-hover:text-brand-blue" />
             </div>
             <h3 className="text-2xl font-bold mb-2">Quality First</h3>
             <p className="text-blue-100">Fresh ingredients, 100% eggless options available daily.</p>
          </div>
          <div className="flex flex-col items-center group">
             <div className="bg-white/10 p-6 rounded-full mb-4 group-hover:bg-brand-gold transition-colors">
                <Users size={40} className="text-brand-gold group-hover:text-brand-blue" />
             </div>
             <h3 className="text-2xl font-bold mb-2">Friendly Service</h3>
             <p className="text-blue-100">Our staff is known for being polite and helpful to all neighbors.</p>
          </div>
          <div className="flex flex-col items-center group">
             <div className="bg-white/10 p-6 rounded-full mb-4 group-hover:bg-brand-gold transition-colors">
                <Clock size={40} className="text-brand-gold group-hover:text-brand-blue" />
             </div>
             <h3 className="text-2xl font-bold mb-2">On-Time Delivery</h3>
             <p className="text-blue-100">Fast delivery within Nalasopara East to keep celebrations on track.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 text-center">
        <h2 className="font-cursive text-6xl text-brand-blue mb-8">Ready to order?</h2>
        <a 
          href="https://wa.me/919876543210" 
          className="bg-[#25D366] text-white font-bold px-12 py-5 rounded-full text-xl hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-2xl"
        >
          Message on WhatsApp
        </a>
      </section>
    </main>
  );
}