
import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import FutureLoader from './components/FutureLoader';
import NeonBackground from './components/NeonBackground';
import AiSlider from './components/AiSlider';
import ProfitChart from './components/ProfitChart';
import TelegramButton from './components/TelegramButton';
import PricingCalculator from './components/PricingCalculator';
import ProcessStepper from './components/ProcessStepper';
import LiveRequestTicker from './components/LiveRequestTicker';
import { TARGET_AUDIENCE, TESTIMONIALS, TECH_FEATURES, PAYMENT_METHODS } from './constants';
import { 
  ChevronDown, 
  Briefcase, 
  TrendingUp, 
  Cpu, 
  Server, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Layers, 
  BarChart3, 
  Megaphone, 
  PlayCircle,
  Database,
  Lock,
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (loading) {
    return <FutureLoader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 overflow-x-hidden text-slate-100 font-sans">
      <NeonBackground />
      
      {/* Scroll Progress Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left z-[60] shadow-[0_0_20px_rgba(6,182,212,0.8)]" style={{ scaleX }} />

      {/* 1. HERO SECTION */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0,transparent_70%)] rounded-full animate-pulse-slow" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="z-10 max-w-7xl"
        >
          <div className="inline-flex items-center space-x-3 px-10 py-4 rounded-full bg-slate-900/60 border border-cyan-500/30 text-cyan-400 font-mono text-sm mb-16 tracking-[0.4em] uppercase backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <Zap size={18} className="animate-pulse" />
            <span>Neural Business Infrastructure v4.2</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black mb-10 leading-[0.8] text-white uppercase italic tracking-tighter drop-shadow-2xl">
            Зарабатывай <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-600">
              с нейросетями!
            </span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-xl md:text-4xl text-slate-200 font-bold mb-20 leading-tight tracking-tight">
            Продавай доступ к мощным AI-инструментам. <br /> 
            <span className="text-cyan-400">Ты покупаешь за 10₽ — ты продаешь за 20₽. Чистая прибыль ×2.</span>
          </p>
          
          <div className="flex flex-col lg:flex-row gap-20 justify-center items-center">
            <div className="space-y-10">
              <TelegramButton label="Начни зарабатывать прямо сейчас" />
              <div className="flex justify-center items-center space-x-8">
                {PAYMENT_METHODS.map((pm, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-500 font-mono text-xs uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                    <span className={pm.color}>{pm.icon}</span>
                    <span>{pm.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block scale-100">
              <LiveRequestTicker />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 animate-bounce cursor-pointer text-slate-500 hover:text-cyan-400 transition-all"
          onClick={() => document.getElementById('margin-concept')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={72} strokeWidth={1} />
        </motion.div>
      </header>

      {/* 2. BUSINESS CONCEPT */}
      <section id="margin-concept" className="py-48 px-6 relative bg-slate-950/80 backdrop-blur-3xl border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="inline-flex items-center space-x-4 text-cyan-400 font-mono uppercase tracking-[0.5em] text-sm font-black">
                <Briefcase size={28} />
                <span>Бизнес на AI</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-[0.85] tracking-tighter">
                Покупай <span className="text-cyan-500">дешевле.</span> <br /> Продавай <span className="text-blue-500">дороже.</span>
              </h2>
              <div className="space-y-10 text-2xl text-slate-300 leading-relaxed font-medium">
                <p>
                  Мы предоставляем готовую инфраструктуру: 50+ топовых нейросетей в одном API. 
                  Ты покупаешь генерацию по партнерской цене, а клиенты платят тебе в 2 раза больше.
                </p>
                <div className="p-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-[3rem] border-l-8 border-cyan-500 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <TrendingUp size={120} />
                  </div>
                  <h4 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter">Простая математика Маржи ×2</h4>
                  <p className="text-slate-200">
                    Закупка: <b className="text-rose-400">10₽</b> / Продажа: <b className="text-emerald-400">20₽</b> <br />
                    Твоя прибыль с каждого запроса — <b>10₽ чистыми</b>.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="relative group p-4">
              <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-[100px] opacity-30 pointer-events-none" />
              <AiSlider />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CALCULATOR & STATS */}
      <section className="py-48 px-6 bg-slate-900/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-8">
            <div className="inline-flex items-center space-x-3 text-emerald-400 font-mono uppercase tracking-widest text-sm font-bold">
              <BarChart3 size={24} />
              <span>Финансовый Прогноз</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter">Сколько ты заработаешь?</h2>
            <p className="text-3xl text-slate-400 font-bold max-w-4xl mx-auto uppercase tracking-tight">
              Используй калькулятор, чтобы увидеть потенциал своего бизнеса в реальном времени.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <PricingCalculator />
            <div className="space-y-12">
              <ProfitChart />
              <div className="grid grid-cols-2 gap-8">
                <div className="p-10 rounded-[2.5rem] bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
                  <h5 className="text-slate-500 font-mono uppercase text-xs mb-4">Партнерская закупка</h5>
                  <p className="text-4xl font-black text-white">10.00 ₽</p>
                  <p className="text-[10px] text-slate-600 mt-4 font-mono uppercase">Unified API Price</p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                  <h5 className="text-emerald-500/60 font-mono uppercase text-xs mb-4">Твоя розница</h5>
                  <p className="text-4xl font-black text-emerald-400">20.00 ₽</p>
                  <p className="text-[10px] text-emerald-600 mt-4 font-mono uppercase">Retail Standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK */}
      <section className="py-48 px-6 border-y border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-6">
             <div className="inline-flex items-center space-x-3 text-purple-400 font-mono uppercase tracking-widest text-sm font-bold">
              <Cpu size={24} />
              <span>Технологический Стек</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic">Инфраструктура API</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TECH_FEATURES.map((feat, i) => (
              <motion.div
                key={i}
                className="p-12 rounded-[3.5rem] bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all group flex flex-col items-center text-center space-y-8"
                whileHover={{ y: -15 }}
              >
                <div className="p-8 bg-white/5 rounded-[2rem] group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-500 shadow-xl">
                  {React.cloneElement(feat.icon as React.ReactElement, { size: 48 })}
                </div>
                <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">{feat.title}</h4>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PARTNERSHIP PROCESS */}
      <section className="py-48 px-6 bg-slate-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32 space-y-4">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic">Как стать партнером?</h2>
            <p className="text-slate-500 font-mono uppercase tracking-[0.4em] font-bold">Join the Neural Network Revolution</p>
          </div>
          
          <ProcessStepper />
          
          <div className="mt-32 flex justify-center">
            <motion.div 
              className="px-12 py-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-xl flex items-center gap-4 hover:bg-cyan-500/20 transition-all cursor-pointer group"
              onClick={() => window.open('https://t.me/dmitriy_ferixdi', '_blank')}
            >
              <span>Связаться для активации доступа</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. TARGET AUDIENCE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TARGET_AUDIENCE.map((audience, i) => (
              <motion.div
                key={i}
                className="p-12 rounded-[3rem] bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 transition-all group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 p-6 bg-white/5 rounded-3xl w-fit group-hover:scale-110 transition-transform shadow-lg">
                  {audience.icon}
                </div>
                <h4 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter">{audience.title}</h4>
                <p className="text-slate-400 leading-relaxed font-medium text-lg">{audience.desc}</p>
                <div className="mt-10 pt-8 border-t border-slate-800 text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] font-black flex items-center gap-3">
                  <ShieldCheck size={18} /> Business Verified
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <footer className="py-72 px-6 relative overflow-hidden bg-slate-950 text-center">
        {/* Deep Pulsing Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-cyan-600/10 blur-[300px] rounded-full animate-pulse-slow pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 space-y-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-14"
          >
            <h2 className="text-6xl md:text-[11rem] font-black text-white uppercase italic leading-[0.75] tracking-tighter">
              Твой бизнес <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400">начинается здесь.</span>
            </h2>
            <p className="text-3xl md:text-5xl text-slate-300 font-black leading-tight tracking-tight max-w-5xl mx-auto">
              Напиши мне в Telegram прямо сейчас. <br /> 
              Я покажу, как запустить твой сервис с маржей ×2 уже сегодня!
            </p>
          </motion.div>
          
          <div className="flex flex-col items-center space-y-16">
            <TelegramButton label="Связаться в Telegram" />
            <div className="flex items-center space-x-10 text-emerald-500/70 font-mono text-sm uppercase tracking-[0.5em] font-black">
              <ShieldCheck size={32} className="animate-bounce" />
              <span>Network Secure // @dmitriy_ferixdi</span>
            </div>
          </div>
        </div>
        
        <div className="mt-80 pt-20 border-t border-slate-900">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-slate-600 font-mono text-[11px] tracking-[0.5em] uppercase font-bold">
            <span>Neural Business Core v4.2.1 // Latency: 42ms</span>
            <span className="my-10 md:my-0">© {new Date().getFullYear()} DMITRIY FERIXDI // NEURAL FUTURE HUB</span>
            <div className="flex space-x-12">
              <span className="hover:text-cyan-500 cursor-pointer transition-colors">Documentation</span>
              <span className="hover:text-cyan-500 cursor-pointer transition-colors">Profit API</span>
              <span className="hover:text-cyan-500 cursor-pointer transition-colors">Support</span>
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(0.9); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 12s infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
