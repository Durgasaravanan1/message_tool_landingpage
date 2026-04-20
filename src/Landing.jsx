// import { useState, useEffect, useRef } from "react";
// import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

// // ─── Brand Colors ─────────────────────────────────────────────────────────────
// // Primary Teal: #4ABA99 | Dark Navy: #1A3F78 | Light BG: #F0F7F4

// function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-60px" });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: direction === "up" ? 36 : direction === "down" ? -36 : 0, x: direction === "left" ? 36 : direction === "right" ? -36 : 0 }}
//       animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
//       transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function FloatShape({ className, delay = 0, children }) {
//   return (
//     <motion.div className={`absolute pointer-events-none ${className}`}
//       animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
//       transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}>
//       {children}
//     </motion.div>
//   );
// }

// function Badge({ children, color = "teal" }) {
//   const styles = {
//     teal: "bg-teal-50 text-teal-700 border-teal-200",
//     navy: "bg-blue-50 text-blue-800 border-blue-200",
//     red:  "bg-red-50 text-red-600 border-red-200",
//   };
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border ${styles[color]}`}>
//       {children}
//     </span>
//   );
// }

// // ─── Navbar ───────────────────────────────────────────────────────────────────
// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   useEffect(() => {
//     const h = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", h);
//     return () => window.removeEventListener("scroll", h);
//   }, []);

//   return (
//     <motion.nav initial={{ y: -70 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-2xl shadow-sm border-b border-teal-100" : "bg-transparent"}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         <div className="flex items-center gap-2.5">
//           <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] flex items-center justify-center shadow-lg shadow-teal-200">
//             <span className="text-white font-black text-sm">W</span>
//           </div>
//           <span className="font-black text-lg text-slate-800">WYN <span className="text-[#4ABA99]">Reach</span></span>
//         </div>
//         <div className="hidden md:flex items-center gap-8">
//           {["Features", "How It Works", "Use Cases", "Pricing", "FAQ"].map((l) => (
//             <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-slate-500 hover:text-[#1A3F78] text-sm font-medium transition-colors">{l}</a>
//           ))}
//         </div>
//         <div className="hidden md:flex items-center gap-3">
//           <a href="#pricing" className="text-slate-600 hover:text-[#1A3F78] text-sm font-medium px-4 py-2 transition-colors">Login</a>
//           <motion.a href="#pricing" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//             className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] text-white text-sm font-bold shadow-lg shadow-teal-200">
//             Sign Up →
//           </motion.a>
//         </div>
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-700 p-2">
//           <div className="w-5 space-y-1.5">
//             <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : {}} className="block h-0.5 bg-slate-700 rounded" />
//             <motion.span animate={menuOpen ? { opacity: 0 } : {}} className="block h-0.5 bg-slate-700 rounded" />
//             <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : {}} className="block h-0.5 bg-slate-700 rounded" />
//           </div>
//         </button>
//       </div>
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-teal-100 px-4 pb-4">
//             {["Features", "How It Works", "Use Cases", "Pricing", "FAQ"].map((l) => (
//               <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} onClick={() => setMenuOpen(false)}
//                 className="block py-3 text-slate-600 hover:text-[#1A3F78] text-sm font-medium border-b border-teal-50">{l}</a>
//             ))}
//             <a href="#pricing" className="block mt-4 py-3 rounded-xl bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] text-white text-sm font-bold text-center shadow-lg">
//               Start Free Trial
//             </a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }

// // ─── Hero ─────────────────────────────────────────────────────────────────────
// function HeroSection() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 400], [0, 80]);
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16"
//       style={{ background: "linear-gradient(160deg, #E8F4F0 0%, #F0F7F4 40%, #F9FCFB 70%, #F0F7F4 100%)" }}>
//       <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #4ABA99, transparent)" }} />
//       <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #1A3F78, transparent)" }} />
//       <FloatShape className="top-24 left-12 w-14 h-14" delay={0}><div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4ABA99] to-[#1A3F78] shadow-xl shadow-teal-300 opacity-80 rotate-12" /></FloatShape>
//       <FloatShape className="top-32 right-16 w-10 h-10" delay={1.2}><div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] shadow-lg shadow-teal-300 opacity-90" /></FloatShape>
//       <FloatShape className="bottom-32 left-20 w-8 h-8" delay={0.8}><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4ABA99] to-[#1A3F78] shadow-lg opacity-80 -rotate-12" /></FloatShape>
//       <FloatShape className="bottom-40 right-24 w-12 h-12" delay={1.6}><div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] shadow-xl opacity-70 rotate-6" /></FloatShape>
//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
//           <Badge color="teal"><span className="w-1.5 h-1.5 rounded-full bg-[#4ABA99] animate-pulse" />WhatsApp & Email Automation for SMEs</Badge>
//         </motion.div>
//         <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
//           className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.08] mb-6 tracking-tight">
//           Turn WhatsApp & Email<br />Into Your{" "}
//           <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #1A3F78, #4ABA99)" }}>Sales Machine</span>
//         </motion.h1>
//         <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
//           className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
//           Send offers, automate follow-ups, and convert more customers — without extra effort. Built for SMEs.
//         </motion.p>
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
//           <motion.a href="#pricing" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
//             className="px-8 py-4 rounded-2xl text-white font-bold text-base shadow-xl shadow-teal-300/60"
//             style={{ background: "linear-gradient(135deg, #1A3F78, #4ABA99)" }}>🚀 Start Free Trial — 7 Days Free</motion.a>
//           <motion.a href="#features" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//             className="px-8 py-4 rounded-2xl bg-white text-slate-700 font-semibold text-base border border-teal-100 shadow-md hover:shadow-lg transition-shadow">View Features →</motion.a>
//         </motion.div>
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
//           className="flex flex-wrap justify-center gap-10 mb-16">
//           {[["500+","Businesses"],["2M+","Messages Sent"],["98%","Delivery Rate"],["7-day","Free Trial"]].map(([n,l]) => (
//             <div key={l} className="text-center"><div className="text-2xl font-black text-slate-800">{n}</div><div className="text-slate-400 text-sm">{l}</div></div>
//           ))}
//         </motion.div>
//         <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ y }} className="relative mx-auto max-w-4xl">
//           <HeroDashboard />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function HeroDashboard() {
//   return (
//     <div className="relative">
//       <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30" style={{ background: "linear-gradient(135deg, #1A3F78, #4ABA99)" }} />
//       <div className="relative bg-white rounded-3xl shadow-2xl shadow-teal-100 border border-teal-100 overflow-hidden">
//         <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50/80">
//           <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
//           <div className="flex-1 mx-4"><div className="bg-white rounded-lg px-3 py-1 text-xs text-gray-400 border border-gray-200 text-left max-w-xs mx-auto">app.wynreach.io/dashboard</div></div>
//         </div>
//         <div className="flex flex-col sm:flex-row" style={{ minHeight: "320px" }}>
//           <div className="w-full sm:w-40 bg-gray-50 border-r border-gray-100 p-3 flex-shrink-0">
//             <div className="flex items-center gap-2 mb-5 px-2">
//               <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] flex items-center justify-center"><span className="text-white text-[9px] font-black">W</span></div>
//               <span className="text-slate-700 font-bold text-xs">WYN Reach</span>
//             </div>
//             {[{icon:"💬",label:"Campaigns",active:true},{icon:"👥",label:"Contacts"},{icon:"🤖",label:"Automation"},{icon:"📊",label:"Analytics"},{icon:"⚙️",label:"Settings"}].map((item) => (
//               <div key={item.label} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg mb-1 cursor-pointer text-xs font-medium ${item.active ? "bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] text-white" : "text-slate-500 hover:bg-white"}`}>
//                 <span className="text-base">{item.icon}</span><span>{item.label}</span>
//               </div>
//             ))}
//           </div>
//           <div className="flex-1 p-5">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
//               <div><h3 className="text-slate-800 font-bold text-sm">Campaign Dashboard</h3><p className="text-slate-400 text-xs">Welcome back!</p></div>
//               <motion.button whileHover={{ scale: 1.04 }} className="px-3 py-1.5 rounded-lg text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #1A3F78, #4ABA99)" }}>+ New Campaign</motion.button>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
//               {[{label:"Messages Sent",value:"12,480",icon:"💬",color:"#4ABA99"},{label:"Open Rate",value:"94.2%",icon:"📬",color:"#1A3F78"},{label:"Revenue",value:"₹1.8L",icon:"💰",color:"#4ABA99"}].map((s) => (
//                 <div key={s.label} className="bg-gray-50 rounded-2xl p-3 border border-gray-100">
//                   <div className="flex items-center justify-between mb-2"><span className="text-base">{s.icon}</span><span className="w-2 h-2 rounded-full" style={{ background: s.color }} /></div>
//                   <div className="text-slate-800 font-black text-base">{s.value}</div><div className="text-slate-400 text-[10px]">{s.label}</div>
//                 </div>
//               ))}
//             </div>
//             <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 mb-4">
//               <div className="text-slate-500 text-[10px] mb-2 font-medium">Weekly Performance</div>
//               <div className="flex items-end gap-1.5 h-14">
//                 {[45,68,42,88,62,95,73].map((h,i) => (
//                   <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.9+i*0.06, duration: 0.5, ease: "easeOut" }}
//                     className="flex-1 rounded-t-md" style={{ background: i===5||i===4 ? "linear-gradient(to top, #1A3F78, #4ABA99)" : "#E5E7EB" }} />
//                 ))}
//               </div>
//               <div className="flex justify-between text-[9px] text-slate-400 mt-1">{["M","T","W","T","F","S","S"].map((d,i)=><span key={i}>{d}</span>)}</div>
//             </div>
//             <div className="space-y-2">
//               {[{name:"Diwali Offer 🎉",type:"WhatsApp",reach:"2,340",color:"#4ABA99"},{name:"Monthly Newsletter",type:"Email",reach:"5,120",color:"#1A3F78"}].map((c) => (
//                 <div key={c.name} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
//                   <div className="flex items-center gap-2">
//                     <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: `${c.color}20` }}>{c.type==="WhatsApp"?"💬":"📧"}</div>
//                     <div><div className="text-slate-700 text-xs font-semibold">{c.name}</div><div className="text-slate-400 text-[10px]">{c.reach} reached</div></div>
//                   </div>
//                   <span className="text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ background: `${c.color}20`, color: c.color }}>Sent ✓</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <motion.div animate={{ y: [0,-10,0] }} transition={{ duration: 3, repeat: Infinity }} className="hidden lg:flex absolute -left-8 top-1/3 bg-white rounded-2xl shadow-xl border border-teal-100 p-3 w-44">
//         <div className="flex items-center gap-2 mb-1"><div className="w-7 h-7 rounded-xl bg-teal-100 flex items-center justify-center text-sm">💬</div><div className="text-slate-700 text-xs font-bold">New Reply!</div></div>
//         <div className="text-slate-400 text-[10px]">Customer interested in offer</div>
//         <div className="flex items-center gap-1 mt-2"><div className="w-1.5 h-1.5 rounded-full bg-[#4ABA99] animate-pulse" /><span className="text-[#4ABA99] text-[9px] font-semibold">Just now</span></div>
//       </motion.div>
//       <motion.div animate={{ y: [0,10,0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} className="hidden lg:flex absolute -right-6 bottom-1/3 bg-white rounded-2xl shadow-xl border border-teal-100 p-3 w-44">
//         <div className="flex items-center gap-2 mb-1"><div className="w-7 h-7 rounded-xl bg-blue-100 flex items-center justify-center text-sm">📧</div><div className="text-slate-700 text-xs font-bold">Campaign Sent</div></div>
//         <div className="text-slate-400 text-[10px]">5,200 emails delivered ✓</div>
//         <div className="mt-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg px-2 py-1"><span className="text-[#1A3F78] text-[9px] font-bold">94% open rate 🔥</span></div>
//       </motion.div>
//     </div>
//   );
// }

// // ─── Integration Hub Section (PRESERVED ORIGINAL DESIGN) ─────────────────────
// function IntegrationSection() {
//   const leftItems = [
//     { icon: "💬", label: "WhatsApp", color: "#25D366", bg: "#E8F8EF", border: "#25D36640" },
//     { icon: "📨", label: "Messenger", color: "#0084FF", bg: "#EBF5FF", border: "#0084FF40" },
//     { icon: "⚫", label: "Threads",   color: "#1C1C1E", bg: "#F2F2F7", border: "#1C1C1E30" },
//     { icon: "📧", label: "Gmail",     color: "#EA4335", bg: "#FEF2F2", border: "#EA433540" },
//   ];
//   const rightItems = [
//     { icon: "📊", label: "Sheets",  color: "#34A853", bg: "#F0FDF4", border: "#34A85340" },
//     { icon: "▶️", label: "YouTube", color: "#FF0000", bg: "#FFF0F0", border: "#FF000040" },
//     { icon: "🤖", label: "OpenAI",  color: "#10A37F", bg: "#EFFAF7", border: "#10A37F40" },
//     { icon: "🎨", label: "Figma",   color: "#F24E1E", bg: "#FEF3F0", border: "#F24E1E40" },
//   ];

//   return (
//     <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #EAF4F0 0%, #F0F7F4 100%)" }}>
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="w-[700px] h-[400px] rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(ellipse, #4ABA99 0%, #1A3F78 50%, transparent 100%)" }} />
//       </div>
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <p className="text-center text-slate-500 font-semibold text-sm tracking-widest uppercase mb-12">WYN Reach AI Integration</p>
//         </FadeIn>
//         <div className="flex items-center justify-center gap-0 sm:gap-4 mb-16">
//           <div className="flex flex-col gap-4 items-center">
//             {leftItems.map((item, i) => (
//               <motion.div key={item.label}
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22,1,0.36,1] }}
//                 whileHover={{ scale: 1.15, x: 6 }}
//                 className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center shadow-md border cursor-pointer"
//                 style={{ background: item.bg, borderColor: item.border }}>
//                 <span className="text-xl leading-none">{item.icon}</span>
//                 <span className="text-[8px] font-bold mt-0.5" style={{ color: item.color }}>{item.label}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="relative flex-shrink-0" style={{ width: "320px", height: "296px" }}>
//             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 296" fill="none">
//               <defs>
//                 <linearGradient id="lgL" x1="0" y1="0" x2="1" y2="0">
//                   <stop offset="0%" stopColor="#4ABA99" stopOpacity="0.08" />
//                   <stop offset="100%" stopColor="#4ABA99" stopOpacity="0.55" />
//                 </linearGradient>
//                 <linearGradient id="lgR" x1="1" y1="0" x2="0" y2="0">
//                   <stop offset="0%" stopColor="#1A3F78" stopOpacity="0.08" />
//                   <stop offset="100%" stopColor="#1A3F78" stopOpacity="0.5" />
//                 </linearGradient>
//                 <radialGradient id="hubBg" cx="50%" cy="50%" r="50%">
//                   <stop offset="0%" stopColor="#4ABA9930" />
//                   <stop offset="100%" stopColor="transparent" />
//                 </radialGradient>
//               </defs>
//               <ellipse cx="160" cy="148" rx="56" ry="56" fill="url(#hubBg)" />
//               {[37,99,161,223].map((y,i) => (
//                 <motion.line key={`ll${i}`} x1="0" y1={y} x2="132" y2="148"
//                   stroke="url(#lgL)" strokeWidth="1.5" strokeDasharray="5 4"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 + i*0.08, duration: 0.6 }} />
//               ))}
//               {[37,99,161,223].map((y,i) => (
//                 <motion.line key={`lr${i}`} x1="320" y1={y} x2="188" y2="148"
//                   stroke="url(#lgR)" strokeWidth="1.5" strokeDasharray="5 4"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 + i*0.08, duration: 0.6 }} />
//               ))}
//               {[37,99,161,223].map((y,i) => (
//                 <motion.circle key={`dl${i}`} r="3" fill="#4ABA99"
//                   animate={{ cx:[2,130], cy:[y,148], opacity:[0,0.9,0] }}
//                   transition={{ duration:2.2, delay:i*0.6, repeat:Infinity, ease:"easeInOut" }} />
//               ))}
//               {[37,99,161,223].map((y,i) => (
//                 <motion.circle key={`dr${i}`} r="3" fill="#1A3F78"
//                   animate={{ cx:[318,190], cy:[y,148], opacity:[0,0.9,0] }}
//                   transition={{ duration:2.2, delay:0.4+i*0.6, repeat:Infinity, ease:"easeInOut" }} />
//               ))}
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <motion.div
//                 animate={{ scale:[1,1.07,1] }}
//                 transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
//                 className="relative w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
//                 style={{ background:"linear-gradient(135deg,#1A3F78,#4ABA99)" }}>
//                 <span className="text-white font-black text-3xl relative z-10">W</span>
//                 <motion.div className="absolute inset-0 rounded-3xl border-2 border-[#4ABA99]"
//                   animate={{ scale:[1,1.35,1.7], opacity:[0.5,0.2,0] }}
//                   transition={{ duration:2, repeat:Infinity }} />
//                 <motion.div className="absolute inset-0 rounded-3xl border border-[#4ABA99]"
//                   animate={{ scale:[1,1.6,2.1], opacity:[0.3,0.1,0] }}
//                   transition={{ duration:2, delay:0.6, repeat:Infinity }} />
//               </motion.div>
//             </div>
//           </div>
//           <div className="flex flex-col gap-4 items-center">
//             {rightItems.map((item, i) => (
//               <motion.div key={item.label}
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22,1,0.36,1] }}
//                 whileHover={{ scale: 1.15, x: -6 }}
//                 className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center shadow-md border cursor-pointer"
//                 style={{ background: item.bg, borderColor: item.border }}>
//                 <span className="text-xl leading-none">{item.icon}</span>
//                 <span className="text-[8px] font-bold mt-0.5" style={{ color: item.color }}>{item.label}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <FadeIn direction="right">
//             <p className="text-slate-400 text-sm font-medium mb-3 tracking-wide">Powered by AI automation</p>
//             <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
//               Our Powerful<br />
//               <span className="text-transparent bg-clip-text"
//                 style={{ backgroundImage: "linear-gradient(135deg, #1A3F78, #4ABA99)" }}>
//                 WhatsApp & Email
//               </span><br />
//               Marketing Solutions
//             </h2>
//           </FadeIn>
//           <FadeIn delay={0.15}>
//             <div className="flex flex-col gap-5">
//               <div className="bg-white rounded-2xl p-4 shadow-sm border border-teal-100 max-w-xs">
//                 <div className="flex items-center gap-2 mb-3">
//                   <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] flex items-center justify-center">
//                     <span className="text-white text-[9px] font-black">W</span>
//                   </div>
//                   <span className="text-slate-600 text-xs font-semibold">WYN Reach Platform</span>
//                   <div className="ml-auto w-2 h-2 rounded-full bg-[#4ABA99] animate-pulse" />
//                 </div>
//                 <div className="space-y-1.5 mb-3">
//                   <div className="h-2 rounded-full w-full" style={{ background: "linear-gradient(90deg,#1A3F78,#4ABA99)" }} />
//                   <div className="h-2 bg-slate-100 rounded-full w-3/4" />
//                   <div className="h-2 bg-slate-100 rounded-full w-5/6" />
//                 </div>
//                 <div className="grid grid-cols-3 gap-1.5">
//                   {["💬","📧","🤖"].map((ic,i) => (
//                     <div key={i} className="h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-sm">{ic}</div>
//                   ))}
//                 </div>
//               </div>
//               <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
//                 WYN Reach is the all-in-one automation tool that connects WhatsApp & Email marketing to help cover all of your customer communication needs.
//               </p>
//               <motion.a href="#features" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold shadow-lg shadow-teal-200 self-start"
//                 style={{ background: "linear-gradient(135deg, #1A3F78, #4ABA99)" }}>
//                 Take a Tour →
//               </motion.a>
//             </div>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Problem Section ──────────────────────────────────────────────────────────
// function ProblemSection() {
//   const problems = [
//     { icon: "😔", title: "Customers forget your offers", desc: "Without reminders, your deals get ignored and sales slip away quietly." },
//     { icon: "🥶", title: "Leads go cold without follow-up", desc: "Every unanswered lead is money left on the table. Manual follow-ups don't scale." },
//     { icon: "⏱️", title: "Manual work kills your time", desc: "Copying numbers, writing messages one by one — there's a smarter way." },
//     { icon: "🔇", title: "No consistent communication", desc: "Inconsistent messaging means customers forget you when it matters most." },
//   ];
//   return (
//     <section className="relative py-20 overflow-hidden" style={{ background: "#F0F7F4" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <FadeIn><Badge color="red">⚠️ The Problem</Badge></FadeIn>
//           <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-4">You're Losing Customers{" "}<span className="text-transparent bg-clip-text" style={{ backgroundImage:"linear-gradient(135deg,#EF4444,#F97316)" }}>Every Day</span></h2></FadeIn>
//           <FadeIn delay={0.2}><p className="text-slate-500 text-lg max-w-xl mx-auto">Not because your product is bad — but because your follow-up is missing.</p></FadeIn>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {problems.map((p,i) => (
//             <FadeIn key={p.title} delay={0.1+i*0.08}>
//               <motion.div whileHover={{ y:-6,scale:1.02 }} transition={{ type:"spring",stiffness:300 }} className="bg-white rounded-2xl p-6 shadow-sm border border-teal-50 h-full">
//                 <div className="text-4xl mb-4">{p.icon}</div>
//                 <h3 className="text-slate-800 font-bold text-base mb-2">{p.title}</h3>
//                 <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
//               </motion.div>
//             </FadeIn>
//           ))}
//         </div>
//         <FadeIn delay={0.4}><p className="text-center mt-12 text-slate-600 text-lg font-semibold">👉 If you don't follow up, you don't convert.</p></FadeIn>
//       </div>
//     </section>
//   );
// }

// // ─── Solution Section ─────────────────────────────────────────────────────────
// function SolutionSection() {
//   const points = ["Send WhatsApp campaigns in minutes","Run professional email campaigns","Automate follow-ups without manual work","Manage everything from one dashboard"];
//   return (
//     <section className="py-20 overflow-hidden" style={{ background:"linear-gradient(180deg,#F0F7F4 0%,#F9FCFB 100%)" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//         <FadeIn direction="right">
//           <div className="relative">
//             <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl" style={{ background:"linear-gradient(135deg,#1A3F78,#4ABA99)" }} />
//             <div className="relative bg-white rounded-3xl shadow-xl border border-teal-100 p-6">
//               <div className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-5">WYN Reach — All Channels</div>
//               <div className="mb-4 p-4 rounded-2xl border border-teal-100" style={{ background:"linear-gradient(135deg,#E8F8F2,#F0FDF7)" }}>
//                 <div className="flex items-center gap-2 mb-3">
//                   <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center text-base">💬</div>
//                   <div><div className="text-[#1A3F78] text-xs font-bold">WhatsApp Campaign</div><div className="text-slate-400 text-[10px]">Diwali Offer 2024</div></div>
//                   <span className="ml-auto text-[10px] bg-teal-100 text-[#4ABA99] px-2 py-0.5 rounded-full font-semibold">Sent ✓</span>
//                 </div>
//                 <div className="bg-white rounded-xl p-3 text-slate-600 text-xs leading-relaxed shadow-sm">🎉 Happy Diwali! Enjoy 30% off all products this week. Use code: <strong>DIWALI30</strong>. Valid till Sunday!</div>
//                 <div className="flex gap-4 mt-2 text-[10px] text-slate-400"><span>✓✓ 2,340 delivered</span><span>👁 94% read</span></div>
//               </div>
//               <div className="p-4 rounded-2xl border border-teal-100" style={{ background:"linear-gradient(135deg,#E8F4F0,#F0F7F4)" }}>
//                 <div className="flex items-center gap-2 mb-3">
//                   <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center text-base">📧</div>
//                   <div><div className="text-[#1A3F78] text-xs font-bold">Email Campaign</div><div className="text-slate-400 text-[10px]">Monthly Newsletter</div></div>
//                   <span className="ml-auto text-[10px] bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full font-semibold">Scheduled</span>
//                 </div>
//                 <div className="bg-white rounded-xl p-3 shadow-sm">
//                   <div className="text-slate-700 text-xs font-semibold mb-1">Subject: Exclusive December Offers 🎁</div>
//                   <div className="text-slate-400 text-[10px] leading-relaxed">Hi First Name, Check out our exclusive deals this month...</div>
//                 </div>
//                 <div className="flex gap-4 mt-2 text-[10px] text-slate-400"><span>📨 5,120 recipients</span><span>📅 Sends Dec 1, 9AM</span></div>
//               </div>
//               <motion.div animate={{ scale:[1,1.06,1] }} transition={{ duration:2,repeat:Infinity }}
//                 className="absolute -top-4 -right-4 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
//                 style={{ background:"linear-gradient(135deg,#1A3F78,#4ABA99)" }}>🤖 AI-Powered</motion.div>
//             </div>
//           </div>
//         </FadeIn>
//         <div>
//           <FadeIn><Badge color="teal">💡 The Solution</Badge></FadeIn>
//           <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4">WYN Reach Automates Your{" "}<span className="text-transparent bg-clip-text" style={{ backgroundImage:"linear-gradient(135deg,#1A3F78,#4ABA99)" }}>Customer Communication</span></h2></FadeIn>
//           <FadeIn delay={0.15}><p className="text-slate-500 text-lg mb-8">Reach your customers where they actually respond — WhatsApp & Email.</p></FadeIn>
//           <div className="space-y-4">
//             {points.map((p,i) => (
//               <FadeIn key={p} delay={0.2+i*0.1}>
//                 <div className="flex items-center gap-3">
//                   <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" style={{ background:"linear-gradient(135deg,#1A3F78,#4ABA99)" }}>
//                     <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
//                   </div>
//                   <span className="text-slate-700 font-medium">{p}</span>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//           <FadeIn delay={0.6}><div className="mt-10 p-4 rounded-2xl border border-teal-100" style={{ background:"linear-gradient(135deg,#E8F4F0,#F0F7F4)" }}><p className="text-slate-800 font-semibold">👉 Less effort. More conversions.</p></div></FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Features Section (ENHANCED WITH ANIMATIONS) ──────────────────────────────
// function FeaturesSection() {
//   const features = [
//     { icon:"💬", title:"WhatsApp Campaigns", desc:"Send bulk messages that feel personal. Reach customers instantly and get faster responses.", color:"from-teal-400 to-[#4ABA99]", gradient:"linear-gradient(135deg, #4ABA99, #2D8F72)" },
//     { icon:"📧", title:"Email Campaigns", desc:"Create and send professional emails with ease. Perfect for detailed offers and updates.", color:"from-[#1A3F78] to-blue-600", gradient:"linear-gradient(135deg, #1A3F78, #2D5FA8)" },
//     { icon:"🤖", title:"AI Content Generator", desc:"No more thinking what to write. Generate WhatsApp messages and emails in seconds.", color:"from-[#4ABA99] to-teal-600", gradient:"linear-gradient(135deg, #4ABA99, #0F766E)" },
//     { icon:"🔁", title:"Automation Flows", desc:"Set it once. Let it run. Auto send welcome messages, offer reminders & follow-ups.", color:"from-amber-400 to-orange-500", gradient:"linear-gradient(135deg, #F59E0B, #EA580C)" },
//     { icon:"🎯", title:"Smart Targeting", desc:"Send the right message to the right people. Segment your audience for better results.", color:"from-cyan-400 to-sky-500", gradient:"linear-gradient(135deg, #06B6D4, #0284C7)" },
//     { icon:"📊", title:"Performance Tracking", desc:"Know what works. Track opens, clicks, and responses. Improve campaigns faster.", color:"from-fuchsia-500 to-pink-500", gradient:"linear-gradient(135deg, #D946EF, #EC4899)" },
//   ];

//   return (
//     <section id="features" className="py-20 relative overflow-hidden" style={{ background:"#F0F7F4" }}>
//       {/* Animated background elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-200/20 blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-14">
//           <FadeIn>
//             <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
//               <Badge color="teal">🚀 Features</Badge>
//             </motion.div>
//           </FadeIn>
//           <FadeIn delay={0.1}>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-4">
//               Our Powerful{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3F78] to-[#4ABA99]">
//                 Marketing Solutions
//               </span>
//             </h2>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-slate-500 text-lg max-w-2xl mx-auto">
//               One platform. All the tools. Zero technical knowledge needed.
//             </p>
//           </FadeIn>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {features.map((feature, idx) => (
//             <FadeIn key={feature.title} delay={0.05 * idx}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50, rotateX: -15 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.5, delay: idx * 0.08, type: "spring", stiffness: 100 }}
//                 whileHover={{
//                   y: -12,
//                   scale: 1.03,
//                   transition: { duration: 0.2, type: "spring", stiffness: 300 }
//                 }}
//                 className="group relative bg-white rounded-2xl p-6 shadow-lg border border-teal-50 cursor-pointer overflow-hidden"
//               >
//                 {/* Animated gradient border on hover */}
//                 <motion.div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
//                   style={{
//                     background: `linear-gradient(135deg, ${feature.gradient.split(',')[1] || '#4ABA99'}, ${feature.gradient.split(',')[2] || '#1A3F78'})`,
//                     padding: "2px",
//                     mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                     WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                     WebkitMaskComposite: "xor",
//                     maskComposite: "exclude"
//                   }}
//                 />
                
//                 {/* Icon with floating animation */}
//                 <motion.div
//                   animate={{ y: [0, -5, 0] }}
//                   transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
//                   className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-5 shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10`}
//                 >
//                   {feature.icon}
//                 </motion.div>
                
//                 {/* Shine effect on hover */}
//                 <motion.div
//                   className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"
//                   style={{ animation: "shine 1.5s infinite" }}
//                 />
                
//                 <h3 className="text-slate-800 font-bold text-xl mb-3 relative z-10 group-hover:text-[#1A3F78] transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-slate-500 text-sm leading-relaxed relative z-10">
//                   {feature.desc}
//                 </p>
                
//                 {/* Learn more link with animated arrow */}
//                 <motion.div
//                   initial={{ x: 0 }}
//                   whileHover={{ x: 8 }}
//                   className="mt-5 flex items-center gap-2 text-[#4ABA99] text-sm font-semibold relative z-10"
//                 >
//                   Learn more
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     →
//                   </motion.span>
//                 </motion.div>
                
//                 {/* Decorative dot pattern */}
//                 <div className="absolute bottom-3 right-3 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
//                   <svg viewBox="0 0 40 40" fill="currentColor" className="text-[#1A3F78]">
//                     <circle cx="5" cy="5" r="2" />
//                     <circle cx="15" cy="5" r="2" />
//                     <circle cx="25" cy="5" r="2" />
//                     <circle cx="35" cy="5" r="2" />
//                     <circle cx="5" cy="15" r="2" />
//                     <circle cx="15" cy="15" r="2" />
//                     <circle cx="25" cy="15" r="2" />
//                     <circle cx="35" cy="15" r="2" />
//                     <circle cx="5" cy="25" r="2" />
//                     <circle cx="15" cy="25" r="2" />
//                     <circle cx="25" cy="25" r="2" />
//                     <circle cx="35" cy="25" r="2" />
//                     <circle cx="5" cy="35" r="2" />
//                     <circle cx="15" cy="35" r="2" />
//                     <circle cx="25" cy="35" r="2" />
//                     <circle cx="35" cy="35" r="2" />
//                   </svg>
//                 </div>
//               </motion.div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>

//       {/* Add shine animation CSS */}
//       <style>{`
//         @keyframes shine {
//           0% { left: -100% }
//           20% { left: 100% }
//           100% { left: 100% }
//         }
//         .animate-shine {
//           animation: shine 2s infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// // ─── How It Works Section (ENHANCED WITH ANIMATIONS) ─────────────────────────
// function HowItWorksSection() {
//   const steps = [
//     { icon: "📋", title: "Upload Contacts", desc: "Import your customer list from Excel, CSV, or connect your CRM in seconds.", number: "01", gradient: "from-teal-400 to-[#4ABA99]" },
//     { icon: "✍️", title: "Create Message", desc: "Write your own message or let our AI generate the perfect one for you.", number: "02", gradient: "from-[#1A3F78] to-blue-600" },
//     { icon: "🚀", title: "Send or Automate", desc: "Send instantly or schedule campaigns to run automatically on your timeline.", number: "03", gradient: "from-amber-400 to-orange-500" },
//     { icon: "💰", title: "Convert Customers", desc: "Track responses, measure results, and watch your conversions grow.", number: "04", gradient: "from-[#4ABA99] to-teal-600" },
//   ];

//   return (
//     <section id="how-it-works" className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F9FCFB 0%, #F0F7F4 100%)" }}>
//       {/* Animated background shapes */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           className="absolute top-20 right-10 w-96 h-96 rounded-full border-4 border-teal-100/30"
//         />
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-20 left-10 w-80 h-80 rounded-full border-4 border-blue-100/20"
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <FadeIn>
//             <motion.div
//               whileHover={{ scale: 1.05, rotate: 5 }}
//               className="inline-block"
//             >
//               <Badge color="teal">⚙️ How It Works</Badge>
//             </motion.div>
//           </FadeIn>
//           <FadeIn delay={0.1}>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-4">
//               Up and Running in{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3F78] to-[#4ABA99]">
//                 4 Simple Steps
//               </span>
//             </h2>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-slate-500 text-lg max-w-2xl mx-auto">
//               Get started in minutes, not days. No complicated setup required.
//             </p>
//           </FadeIn>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
//           {/* Connecting line for desktop */}
//           <div className="hidden lg:block absolute top-1/3 left-[12%] right-[12%] h-[2px]">
//             <div className="w-full h-full bg-gradient-to-r from-[#4ABA99] via-[#1A3F78] to-[#4ABA99] opacity-30" />
//           </div>

//           {steps.map((step, idx) => (
//             <FadeIn key={step.title} delay={0.1 + idx * 0.1}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 150 }}
//                 whileHover={{
//                   y: -15,
//                   scale: 1.05,
//                   transition: { type: "spring", stiffness: 300 }
//                 }}
//                 className="relative bg-white rounded-2xl p-6 shadow-xl border border-teal-50 text-center group"
//               >
//                 {/* Step number badge with pulsing animation */}
//                 <motion.div
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
//                   className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg"
//                   style={{ background: `linear-gradient(135deg, #1A3F78, #4ABA99)` }}
//                 >
//                   {idx + 1}
//                 </motion.div>

//                 {/* Icon with bounce animation */}
//                 <motion.div
//                   animate={{
//                     y: [0, -8, 0],
//                     rotate: [0, 5, -5, 0]
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     delay: idx * 0.3,
//                     ease: "easeInOut"
//                   }}
//                   className={`w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center text-4xl bg-gradient-to-br ${step.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}
//                 >
//                   {step.icon}
//                 </motion.div>

//                 {/* Title with underline animation on hover */}
//                 <h3 className="text-slate-800 font-bold text-lg mb-3 relative inline-block">
//                   {step.title}
//                   <motion.span
//                     initial={{ width: 0 }}
//                     whileHover={{ width: "100%" }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] rounded-full"
//                   />
//                 </h3>
//                 <p className="text-slate-500 text-sm leading-relaxed">
//                   {step.desc}
//                 </p>

//                 {/* Arrow indicator on hover */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileHover={{ opacity: 1, y: 0 }}
//                   className="mt-4 text-[#4ABA99] text-xs font-semibold flex items-center justify-center gap-1"
//                 >
//                   <span>Step {idx + 1}</span>
//                   <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </motion.div>

//                 {/* Glowing effect on hover */}
//                 <motion.div
//                   className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   style={{
//                     boxShadow: "0 0 30px rgba(74, 186, 153, 0.3)",
//                     background: "radial-gradient(circle at center, rgba(74, 186, 153, 0.1), transparent)"
//                   }}
//                 />
//               </motion.div>
//             </FadeIn>
//           ))}
//         </div>

//         <FadeIn delay={0.6}>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="text-center mt-12"
//           >
//             <motion.p
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="text-slate-600 text-lg font-semibold inline-block px-6 py-2 rounded-full bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100"
//             >
//               👉 Simple. Fast. Effective.
//             </motion.p>
//           </motion.div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }

// // ─── Use Cases ────────────────────────────────────────────────────────────────
// function UseCasesSection() {
//   const [active, setActive] = useState(0);
//   const cases = [
//     { icon: "🛒", tab: "Retail", title: "Retail & Supermarkets", desc: "Drive daily footfall and online orders with targeted promotions.", points: ["Send daily offers on WhatsApp", "Promote weekly deals via email", "Flash sales to loyalty customers", "Abandoned cart reminders"] },
//     { icon: "🏢", tab: "SMEs", title: "SMEs & Service Businesses", desc: "Never lose a lead again. Follow up automatically and close more deals.", points: ["Follow up with leads instantly", "Send proposals and reminders", "Appointment confirmations", "Service renewal alerts"] },
//     { icon: "🎓", tab: "Coaching", title: "Coaching & Training Institutes", desc: "Fill your batches faster and keep students engaged throughout.", points: ["Launch new batches on WhatsApp", "Share complete details via email", "Exam reminders & study tips", "Course completion certificates"] },
//   ];
//   return (
//     <section id="use-cases" className="py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #F0F7F4 0%, #F9FCFB 100%)" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <FadeIn><Badge color="teal">📈 Use Cases</Badge></FadeIn>
//           <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-3">Works for Any Business That Needs{" "}<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>More Customers</span></h2></FadeIn>
//         </div>
//         <FadeIn delay={0.2}>
//           <div className="flex justify-center gap-3 mb-12 flex-wrap">
//             {cases.map((c, i) => (
//               <motion.button key={c.tab} onClick={() => setActive(i)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//                 className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${active === i ? "text-white shadow-lg shadow-teal-200" : "bg-white text-slate-500 border border-teal-100 hover:border-teal-300"}`}
//                 style={active === i ? { background: "linear-gradient(135deg,#1A3F78,#4ABA99)" } : {}}>
//                 {c.icon} {c.tab}
//               </motion.button>
//             ))}
//           </div>
//         </FadeIn>
//         <AnimatePresence mode="wait">
//           <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}
//             className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <motion.div
//                 animate={{ rotate: [0, 5, -5, 0] }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 className="text-6xl mb-5 inline-block"
//               >
//                 {cases[active].icon}
//               </motion.div>
//               <h3 className="text-slate-900 font-black text-2xl mb-4">{cases[active].title}</h3>
//               <p className="text-slate-500 text-base mb-8">{cases[active].desc}</p>
//               <div className="space-y-3">
//                 {cases[active].points.map((p, idx) => (
//                   <motion.div
//                     key={p}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                     className="flex items-center gap-3"
//                   >
//                     <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" style={{ background: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>
//                       <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
//                     </div>
//                     <span className="text-slate-700 text-sm">{p}</span>
//                   </motion.div>
//                 ))}
//               </div>
//               <motion.a href="#pricing" whileHover={{ scale: 1.04 }} className="inline-flex mt-8 px-7 py-3 rounded-2xl text-white font-bold text-sm shadow-lg shadow-teal-200" style={{ background: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>Try Free for 7 Days →</motion.a>
//             </div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
//               animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-3xl shadow-sm border border-teal-100 p-6"
//             >
//               <div className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-4">{cases[active].title} — Sample Campaign</div>
//               <div className="rounded-2xl p-4 border border-teal-100" style={{ background: "#E8F8F2" }}>
//                 <div className="flex items-center gap-2 mb-3">
//                   <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center text-lg">{cases[active].icon}</div>
//                   <div className="text-[#1A3F78] text-xs font-bold">WYN Reach Campaign</div>
//                 </div>
//                 <div className="bg-white rounded-xl p-3 text-slate-700 text-sm leading-relaxed shadow-sm whitespace-pre-line">
//                   {active === 0 && "🛍️ Weekend Special! Get 25% off on all items this Saturday & Sunday.\nShow this message at billing.\n\n📍 Visit us or order online. Limited time offer!"}
//                   {active === 1 && "👋 Hi Rajesh, Following up on your enquiry from yesterday.\n\nOur team is ready to help you get started. Reply YES for a free consultation! 🤝"}
//                   {active === 2 && "📚 New Batch Starting Jan 15! 🎓\n\nSeats filling fast. Secure your spot today.\n✅ Morning & Evening batches available\n📞 Call/WhatsApp to enrol now!"}
//                 </div>
//                 <div className="flex gap-4 mt-3 text-[11px] text-slate-400"><span>✓✓ Delivered</span><span>👁 Read</span><span>📅 Just now</span></div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

// // ─── Pricing ──────────────────────────────────────────────────────────────────
// function PricingSection() {
//   const plans = [
//     { name: "Starter", price: "₹999", period: "/month", badge: null, features: ["WhatsApp campaigns", "Basic email campaigns", "Up to 1,000 contacts", "Standard support", "Basic analytics"], cta: "Start Now" },
//     { name: "Growth", price: "₹2,499", period: "/month", badge: "Most Popular ⭐", highlight: true, features: ["WhatsApp + Email campaigns", "Automation flows", "AI content generator", "Up to 5,000 contacts", "Priority support", "Advanced analytics"], cta: "Start Free Trial" },
//     { name: "Pro", price: "₹4,999", period: "/month", badge: null, features: ["Unlimited campaigns", "Advanced automation", "Team inbox", "Advanced analytics", "Premium support", "Custom integrations"], cta: "Get Started" },
//   ];
//   return (
//     <section id="pricing" className="py-20" style={{ background: "#F0F7F4" }}>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <FadeIn><Badge color="teal">💰 Pricing</Badge></FadeIn>
//           <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-4">Simple, Transparent{" "}<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>Pricing</span></h2></FadeIn>
//           <FadeIn delay={0.2}><p className="text-slate-500 text-lg">Start free for 7 days. No credit card required.</p></FadeIn>
//         </div>
//         <div className="grid md:grid-cols-3 gap-6 items-center">
//           {plans.map((p, i) => (
//             <FadeIn key={p.name} delay={0.1 + i * 0.1}>
//               <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}
//                 className={`relative rounded-3xl overflow-hidden ${p.highlight ? "shadow-2xl shadow-teal-200 scale-105" : "shadow-sm"}`}>
//                 {p.highlight && <div className="h-1.5" style={{ background: "linear-gradient(90deg,#1A3F78,#4ABA99)" }} />}
//                 <div className={`p-7 border ${p.highlight ? "bg-white border-teal-200" : "bg-white border-teal-50"}`}>
//                   {p.badge && <span className="inline-block mb-3 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>{p.badge}</span>}
//                   <h3 className="text-slate-800 font-bold text-lg mb-1">{p.name}</h3>
//                   <div className="flex items-end gap-1 mb-6"><span className="text-slate-900 font-black text-4xl">{p.price}</span><span className="text-slate-400 text-sm mb-1">{p.period}</span></div>
//                   <div className="space-y-3 mb-8">
//                     {p.features.map((f) => (
//                       <div key={f} className="flex items-center gap-2.5">
//                         <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: p.highlight ? "linear-gradient(135deg,#1A3F78,#4ABA99)" : "#E5E7EB" }}>
//                           <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke={p.highlight ? "white" : "#6B7280"} strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
//                         </div>
//                         <span className="text-slate-600 text-sm">{f}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
//                     className={`block text-center py-3.5 rounded-2xl text-sm font-bold transition-all ${p.highlight ? "text-white shadow-lg shadow-teal-200" : "bg-gray-50 text-slate-700 border border-gray-200 hover:bg-gray-100"}`}
//                     style={p.highlight ? { background: "linear-gradient(135deg,#1A3F78,#4ABA99)" } : {}}>
//                     {p.cta}
//                   </motion.a>
//                 </div>
//               </motion.div>
//             </FadeIn>
//           ))}
//         </div>
//         <FadeIn delay={0.4}><p className="text-center mt-8 text-slate-400 text-sm">* WhatsApp API charges are billed separately based on Meta usage.</p></FadeIn>
//       </div>
//     </section>
//   );
// }

// // ─── FAQ ──────────────────────────────────────────────────────────────────────
// function FAQSection() {
//   const [open, setOpen] = useState(null);
//   const faqs = [
//     { q: "Do I need technical knowledge to use this?", a: "No. WYN Reach is built for business owners with zero technical background. If you can send a WhatsApp message, you can use WYN Reach." },
//     { q: "Is WhatsApp API included in the plan?", a: "No, WhatsApp API charges depend on usage and are billed separately by Meta. Our plans cover the platform access and tools." },
//     { q: "Can I try before paying?", a: "Yes, we offer a 7-day free trial on selected plans. No credit card required to start." },
//     { q: "How quickly can I start?", a: "You can start sending campaigns within minutes after setup. Our onboarding wizard guides you through everything." },
//     { q: "Is this suitable for small businesses?", a: "Absolutely! WYN Reach is specifically designed for SMEs, coaches, retailers, and service businesses." },
//   ];
//   return (
//     <section id="faq" className="py-20" style={{ background: "linear-gradient(180deg,#F9FCFB 0%,#F0F7F4 100%)" }}>
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <FadeIn><h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">Frequently Asked{" "}<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>Questions</span></h2></FadeIn>
//         </div>
//         <div className="space-y-3">
//           {faqs.map((f, i) => (
//             <FadeIn key={f.q} delay={0.05 * i}>
//               <div className="bg-white rounded-2xl border border-teal-50 overflow-hidden shadow-sm">
//                 <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
//                   <span className="text-slate-800 font-semibold text-sm pr-4">{f.q}</span>
//                   <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}
//                     className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-200"
//                     style={{ background: open === i ? "linear-gradient(135deg,#1A3F78,#4ABA99)" : "white" }}>
//                     <svg className={`w-3.5 h-3.5 ${open === i ? "text-white" : "text-[#4ABA99]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
//                   </motion.div>
//                 </button>
//                 <AnimatePresence>
//                   {open === i && (
//                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
//                       <div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed border-t border-teal-50 pt-4">{f.a}</div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Final CTA ────────────────────────────────────────────────────────────────
// function FinalCTASection() {
//   return (
//     <section className="relative py-20 overflow-hidden">
//       <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#E8F4F0 0%,#F0F7F4 50%,#E8F4F0 100%)" }} />
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle,#4ABA99,transparent)" }} />
//       <FloatShape className="top-8 left-12 w-10 h-10" delay={0}><div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4ABA99] to-[#1A3F78] opacity-50 rotate-12 shadow-lg" /></FloatShape>
//       <FloatShape className="top-12 right-16 w-8 h-8" delay={1}><div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] opacity-60 shadow-md" /></FloatShape>
//       <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <FadeIn><Badge color="teal">🚀 Ready to grow?</Badge></FadeIn>
//         <FadeIn delay={0.1}><h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mt-6 mb-6">Stop Losing Customers.<br /><span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>Start Converting Them.</span></h2></FadeIn>
//         <FadeIn delay={0.2}><p className="text-slate-500 text-xl mb-12">Automate your WhatsApp & Email communication today.</p></FadeIn>
//         <FadeIn delay={0.3}>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.a href="#pricing" whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }} className="px-10 py-4 rounded-2xl text-white font-extrabold text-lg shadow-2xl shadow-teal-300" style={{ background: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>🚀 Start Free Trial</motion.a>
//             <motion.a href="#pricing" whileHover={{ scale: 1.04 }} className="px-10 py-4 rounded-2xl bg-white text-slate-700 font-semibold text-lg border border-teal-100 shadow-md">View Pricing</motion.a>
//           </div>
//         </FadeIn>
//         <FadeIn delay={0.4}><p className="mt-6 text-slate-400 text-sm">7-day free trial • No credit card • Cancel anytime</p></FadeIn>
//       </div>
//     </section>
//   );
// }

// // ─── Footer ───────────────────────────────────────────────────────────────────
// function Footer() {
//   return (
//     <footer className="bg-[#1A3F78] py-14 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg,#4ABA99,#ffffff60)" }}><span className="text-white font-black text-sm">W</span></div>
//               <span className="font-black text-lg text-white">WYN <span className="text-[#4ABA99]">Reach</span></span>
//             </div>
//             <p className="text-white/60 text-sm leading-relaxed mb-4">Automate your WhatsApp & Email communication to convert more customers with less effort.</p>
//             <a href="mailto:hello@wynsync.tech" className="text-[#4ABA99] text-sm hover:underline">hello@wynsync.tech</a>
//           </div>
//           {[
//             { title: "Product", links: ["Features", "Pricing", "How It Works", "Use Cases"] },
//             { title: "Company", links: ["About", "Contact", "Blog", "Careers"] },
//             { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cookie Policy"] },
//           ].map(col => (
//             <div key={col.title}>
//               <h4 className="text-white font-bold text-sm mb-4">{col.title}</h4>
//               <div className="space-y-2.5">{col.links.map(l => <a key={l} href="#" className="block text-white/50 text-sm hover:text-white transition-colors">{l}</a>)}</div>
//             </div>
//           ))}
//         </div>
//         <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-white/40 text-sm">© 2024 WYN Reach. All rights reserved. Part of WYN Sync ecosystem.</p>
//           <div className="flex gap-3">
//             {["💬", "📧", "🐦", "💼"].map((icon, i) => (
//               <motion.a key={i} href="#" whileHover={{ scale: 1.2 }} className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-base hover:bg-white/20 transition-colors">{icon}</motion.a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ─── MAIN ─────────────────────────────────────────────────────────────────────
// export default function WynReachLanding() {
//   return (
//     <div style={{ fontFamily: "'Plus Jakarta Sans','DM Sans',sans-serif" }} className="antialiased overflow-x-hidden">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
//         * { box-sizing: border-box; }
//         html { scroll-behavior: smooth; }
//       `}</style>
//       <Navbar />
//       <HeroSection />
//       <IntegrationSection />
//       <ProblemSection />
//       <SolutionSection />
//       <FeaturesSection />
//       <HowItWorksSection />
//       <UseCasesSection />
//       <PricingSection />
//       <FAQSection />
//       <FinalCTASection />
//       <Footer />
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
// ─── Brand Colors ─────────────────────────────────────────────────────────────
// Primary Teal: #4ABA99 | Dark Navy: #1A3F78 | Light BG: #F0F7F4

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === "up" ? 36 : direction === "down" ? -36 : 0, x: direction === "left" ? 36 : direction === "right" ? -36 : 0 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatShape({ className, delay = 0, children }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}>
      {children}
    </motion.div>
  );
}

function Badge({ children, color = "teal" }) {
  const styles = {
    teal: "bg-teal-50 text-teal-700 border-teal-200",
    navy: "bg-blue-50 text-blue-800 border-blue-200",
    red:  "bg-red-50 text-red-600 border-red-200",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold border ${styles[color]}`}>
      {children}
    </span>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav initial={{ y: -70 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-2xl shadow-sm border-b border-teal-100" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] flex items-center justify-center shadow-lg shadow-teal-200">
            <span className="text-white font-black text-xs sm:text-sm">W</span>
          </div>
          <span className="font-black text-base sm:text-lg text-slate-800">WYN <span className="text-[#4ABA99]">Reach</span></span>
        </div>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {["Features", "How It Works", "Use Cases", "Pricing", "FAQ"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-slate-500 hover:text-[#1A3F78] text-sm font-medium transition-colors">{l}</a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-slate-600 hover:text-[#1A3F78] text-sm font-medium px-4 py-2 transition-colors">Login</a>
          <motion.a href="#pricing" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] text-white text-sm font-bold shadow-lg shadow-teal-200">
            Sign Up →
          </motion.a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-700 p-2">
          <div className="w-5 space-y-1.5">
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : {}} className="block h-0.5 bg-slate-700 rounded transition-all" />
            <motion.span animate={menuOpen ? { opacity: 0 } : {}} className="block h-0.5 bg-slate-700 rounded transition-all" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : {}} className="block h-0.5 bg-slate-700 rounded transition-all" />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-teal-100 px-4 pb-4">
            {["Features", "How It Works", "Use Cases", "Pricing", "FAQ"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-600 hover:text-[#1A3F78] text-sm font-medium border-b border-teal-50">{l}</a>
            ))}
            <a href="#pricing" className="block mt-4 py-3 rounded-xl bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] text-white text-sm font-bold text-center shadow-lg">
              Start Free Trial
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero Section with Compact & Colorful Dashboard ──────────────────────────
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-16"
      style={{
        background:
          "linear-gradient(160deg, #E8F4F0 0%, #F0F7F4 40%, #F9FCFB 70%, #F0F7F4 100%)",
      }}
    >
      {/* 🌈 Background blobs (desktop only) */}
      <div className="hidden sm:block absolute top-20 left-10 w-60 sm:w-72 h-60 sm:h-72 rounded-full opacity-40 blur-3xl bg-[radial-gradient(circle,#4ABA99,transparent)]" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle,#1A3F78,transparent)]" />

      {/* 🔷 Floating shapes (desktop only) */}
      <div className="hidden sm:block">
        <FloatShape className="top-24 left-12 w-14 h-14" delay={0}>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4ABA99] to-[#1A3F78] shadow-xl opacity-80 rotate-12" />
        </FloatShape>

        <FloatShape className="top-32 right-16 w-10 h-10" delay={1.2}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] shadow-lg opacity-90" />
        </FloatShape>

        <FloatShape className="bottom-32 left-20 w-8 h-8" delay={0.8}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4ABA99] to-[#1A3F78] shadow-lg opacity-80 -rotate-12" />
        </FloatShape>

        <FloatShape className="bottom-40 right-24 w-12 h-12" delay={1.6}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] shadow-xl opacity-70 rotate-6" />
        </FloatShape>
      </div>

      <div className="relative w-full max-w-6xl mx-auto text-center">

        {/* 🏷 Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Badge color="teal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ABA99] animate-pulse" />
            WhatsApp & Email Automation for SMEs
          </Badge>
        </motion.div>

        {/* 🔥 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6"
        >
          Turn WhatsApp & Email
          <br className="hidden sm:block" />
          Into Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3F78] to-[#4ABA99]">
            Sales Machine
          </span>
        </motion.h1>

        {/* 📄 Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-slate-500 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto mb-10"
        >
          Send offers, automate follow-ups, and convert more customers — without extra effort.
        </motion.p>

        {/* 🔘 Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-white font-bold shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #1A3F78, #4ABA99)",
            }}
          >
            🚀 Start Free Trial
          </motion.a>

          <motion.a
            href="#features"
            whileHover={{ scale: 1.04 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border text-slate-700"
          >
            View Features →
          </motion.a>
        </motion.div>

        {/* 📊 Stats */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-6 sm:gap-10 mb-14">
          {[
            ["500+", "Businesses"],
            ["2M+", "Messages"],
            ["98%", "Delivery"],
            ["7-day", "Free Trial"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-xl sm:text-2xl font-black text-slate-800">{n}</div>
              <div className="text-slate-400 text-xs sm:text-sm">{l}</div>
            </div>
          ))}
        </div>

        {/* 📱 Dashboard */}
        <div className="w-full max-w-4xl mx-auto">

          {/* Desktop animated */}
          <div className="hidden sm:block">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <HeroDashboard />
            </motion.div>
          </div>

          {/* Mobile static */}
          <div className="block sm:hidden scale-[0.95]">
            <HeroDashboard />
          </div>

        </div>

      </div>
    </section>
  );
}

// 🔥 COMPACT & COLORFUL DASHBOARD - Reduced height/width, fresh purple/pink palette 🔥
function HeroDashboard() {
  return (
    <div className="relative w-full px-2 sm:px-0 max-w-3xl lg:max-w-4xl mx-auto">
      {/* New vibrant glow effect - purple/pink */}
      <div className="absolute -inset-3 rounded-2xl blur-xl opacity-60 pointer-events-none" style={{ background: "radial-gradient(circle, #C084FC, #DB2777)" }} />
      
      <div className="relative bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-xl sm:rounded-2xl shadow-2xl shadow-purple-300/40 border-2 border-purple-200 overflow-hidden">
        {/* Header with new color */}
        <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2.5 bg-gradient-to-r from-purple-100 via-white to-pink-100 border-b-2 border-purple-200">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-1 sm:mx-2">
            <div className="bg-white rounded-md px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] text-gray-600 border border-purple-200 text-left max-w-xs mx-auto shadow-sm">
              app.wynreach.io/dashboard
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#C084FC] animate-pulse" />
            <span className="text-[6px] sm:text-[8px] text-purple-700 font-bold hidden sm:inline">Live</span>
          </div>
        </div>

        {/* Body: Column on mobile, Row on desktop - more compact */}
        <div className="flex flex-col sm:flex-row">
          {/* Sidebar - compact */}
          <div className="w-full sm:w-36 bg-gradient-to-b from-purple-50 to-white border-b sm:border-b-0 sm:border-r border-purple-100 p-2 sm:p-2.5 flex-shrink-0">
            <div className="flex items-center gap-1.5 mb-2 sm:mb-3 px-1.5">
              <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] flex items-center justify-center shadow-sm">
                <span className="text-white text-[7px] font-black">W</span>
              </div>
              <span className="text-slate-700 font-bold text-[9px] sm:text-[10px]">WYN Reach</span>
            </div>
            <div className="flex flex-row sm:flex-col gap-0.5 sm:gap-0.5 overflow-x-auto sm:overflow-x-visible pb-1 sm:pb-0">
              {[{icon:"💬",label:"Campaigns",active:true},{icon:"👥",label:"Contacts"},{icon:"🤖",label:"Automation"},{icon:"📊",label:"Analytics"},{icon:"⚙️",label:"Settings"}].map((item) => (
                <div key={item.label} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md cursor-pointer text-[9px] sm:text-[10px] font-medium whitespace-nowrap sm:whitespace-normal ${item.active ? "bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] text-white shadow-sm" : "text-slate-500 hover:bg-purple-50"}`}>
                  <span className="text-xs sm:text-sm">{item.icon}</span>
                  <span className="text-[8px] sm:text-[9px]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content - compact */}
          <div className="flex-1 p-2 sm:p-3 bg-white/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <div>
                <h3 className="text-slate-800 font-bold text-xs sm:text-sm">Campaign Dashboard</h3>
                <p className="text-slate-400 text-[8px] sm:text-[9px]">Welcome back! 👋</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
                className="px-2 sm:px-2.5 py-1 rounded-lg text-[8px] sm:text-[9px] font-bold text-white shadow-sm shadow-purple-300 w-fit bg-gradient-to-r from-[#1A3F78] to-[#4ABA99]"
              >
                + New Campaign
              </motion.button>
            </div>

            {/* Stats Cards - smaller */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2.5">
              {[
                {label:"Messages",value:"12.4k",icon:"💬",color:"#C084FC",bg:"from-purple-100 to-white"},
                {label:"Open Rate",value:"94%",icon:"📬",color:"#DB2777",bg:"from-pink-100 to-white"},
                {label:"Revenue",value:"₹1.8L",icon:"💰",color:"#F59E0B",bg:"from-amber-100 to-white"}
              ].map((s) => (
                <div key={s.label} className={`bg-gradient-to-br ${s.bg} rounded-lg p-1.5 sm:p-2 border border-purple-100 shadow-sm`}>
                  <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                    <span className="text-sm sm:text-base">{s.icon}</span>
                    <span className="w-1 h-1 rounded-full shadow-sm" style={{ background: s.color }} />
                  </div>
                  <div className="text-slate-800 font-black text-xs sm:text-sm">{s.value}</div>
                  <div className="text-slate-500 text-[6px] sm:text-[8px] font-semibold">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Chart - smaller */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-1.5 sm:p-2 border border-purple-100 mb-2.5 shadow-sm">
              <div className="text-slate-600 text-[7px] sm:text-[8px] mb-1 font-bold flex items-center justify-between">
                <span>📈 Weekly Performance</span>
                <span className="text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded-full text-[6px] sm:text-[7px]">↑23%</span>
              </div>
              <div className="flex items-end gap-0.5 h-8 sm:h-10">
                {[45,68,42,88,62,95,73].map((h,i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }} 
                    animate={{ height: `${h * 0.6}%` }} 
                    transition={{ delay: 0.9+i*0.06, duration: 0.4 }}
                    className="flex-1 rounded-t-sm shadow-sm" 
                    style={{ background: i===5||i===4 ? "linear-gradient(to top, #C084FC, #DB2777)" : "#E9D5FF" }} 
                  />
                ))}
              </div>
              <div className="flex justify-between text-[6px] sm:text-[7px] text-slate-500 mt-0.5 font-semibold">
                {["M","T","W","T","F","S","S"].map((d,i)=><span key={i}>{d}</span>)}
              </div>
            </div>

            {/* Campaigns List - compact */}
            <div className="space-y-1.5">
              {[
                {name:"Diwali Offer 🎉",type:"WhatsApp",reach:"2.3k",status:"Sent ✓",color:"#C084FC",bg:"from-purple-100 to-white"},
                {name:"Monthly Newsletter",type:"Email",reach:"5.1k",status:"Scheduled",color:"#DB2777",bg:"from-pink-100 to-white"}
              ].map((c) => (
                <div key={c.name} className={`flex items-center justify-between bg-gradient-to-br ${c.bg} rounded-lg px-1.5 sm:px-2 py-1 border border-purple-100 shadow-sm`}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center text-xs shadow-sm" style={{ background: `${c.color}30` }}>
                      {c.type==="WhatsApp"?"💬":"📧"}
                    </div>
                    <div>
                      <div className="text-slate-800 text-[8px] sm:text-[9px] font-extrabold">{c.name}</div>
                      <div className="text-slate-500 text-[6px] sm:text-[7px] font-medium">{c.reach} reached</div>
                    </div>
                  </div>
                  <span className="text-[6px] sm:text-[7px] px-1 py-0.5 rounded-full font-bold shadow-sm" style={{ background: `${c.color}20`, color: c.color }}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>

            {/* AI Insight Banner - compact */}
            <div className="mt-2 sm:mt-2.5 p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-purple-200 to-pink-200 border border-purple-300 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base">🤖</span>
                <span className="text-[7px] sm:text-[8px] font-extrabold text-slate-800">AI Insight: 94% open rate — 2x avg! 🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tooltips - hidden on mobile/tablet */}
      <motion.div animate={{ y: [0,-6,0] }} transition={{ duration: 3, repeat: Infinity }} className="hidden xl:flex absolute -left-8 top-1/3 bg-white rounded-xl shadow-xl border border-purple-200 p-2 w-36">
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className="w-5 h-5 rounded-lg bg-purple-100 flex items-center justify-center text-xs">💬</div>
          <div className="text-slate-700 text-[10px] font-bold">New Reply!</div>
        </div>
        <div className="text-slate-500 text-[8px]">Customer interested</div>
        <div className="flex items-center gap-1 mt-1">
          <div className="w-1 h-1 rounded-full bg-[#C084FC] animate-pulse" />
          <span className="text-[#C084FC] text-[7px] font-semibold">Just now</span>
        </div>
      </motion.div>
      <motion.div animate={{ y: [0,6,0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} className="hidden xl:flex absolute -right-8 bottom-1/3 bg-white rounded-xl shadow-xl border border-purple-200 p-2 w-36">
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className="w-5 h-5 rounded-lg bg-pink-100 flex items-center justify-center text-xs">📧</div>
          <div className="text-slate-700 text-[10px] font-bold">Campaign Sent</div>
        </div>
        <div className="text-slate-500 text-[8px]">5.2k delivered ✓</div>
        <div className="mt-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-md px-1 py-0.5">
          <span className="text-[#DB2777] text-[7px] font-bold">94% open 🔥</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Integration Hub Section (unchanged, responsive) ─────────────────────────
function IntegrationSection() {
  const leftItems = [
    { icon: "💬", label: "WhatsApp", color: "#25D366", bg: "#E8F8EF", border: "#25D36640" },
    { icon: "📨", label: "Messenger", color: "#0084FF", bg: "#EBF5FF", border: "#0084FF40" },
    { icon: "⚫", label: "Threads", color: "#1C1C1E", bg: "#F2F2F7", border: "#1C1C1E30" },
    { icon: "📧", label: "Gmail", color: "#EA4335", bg: "#FEF2F2", border: "#EA433540" },
  ];

  const rightItems = [
    { icon: "📊", label: "Sheets", color: "#34A853", bg: "#F0FDF4", border: "#34A85340" },
    { icon: "▶️", label: "YouTube", color: "#FF0000", bg: "#FFF0F0", border: "#FF000040" },
    { icon: "🤖", label: "OpenAI", color: "#10A37F", bg: "#EFFAF7", border: "#10A37F40" },
    { icon: "🎨", label: "Figma", color: "#F24E1E", bg: "#FEF3F0", border: "#F24E1E40" },
  ];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-[#EAF4F0] to-[#F0F7F4]">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full opacity-15 blur-3xl bg-[radial-gradient(ellipse,#4ABA99_0%,#1A3F78_50%,transparent_100%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-center text-slate-500 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-8 sm:mb-12">
          WYN Reach AI Integration
        </p>

        {/* ✅ FIXED SECTION */}
        <div className="flex justify-center mb-12 sm:mb-16">

          {/* 🔥 SCALE FOR MOBILE ONLY */}
          <div className="scale-[0.7] sm:scale-100 origin-center">

            {/* ❌ removed flex-col */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">

              {/* LEFT */}
              <div className="flex flex-col gap-3 sm:gap-4 items-center">
                {leftItems.map((item, i) => (
                  <motion.div key={item.label}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.5 }}
                    whileHover={{ scale: 1.1, x: 4 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center shadow-md border"
                    style={{ background: item.bg, borderColor: item.border }}>
                    <span>{item.icon}</span>
                    <span className="text-[6px] sm:text-[8px] font-bold" style={{ color: item.color }}>{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* CENTER (UNCHANGED) */}
              <div className="relative w-[220px] h-[200px] sm:w-[320px] sm:h-[296px]">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 296">

                  {[37,99,161,223].map((y,i) => (
                    <motion.line key={`ll${i}`} x1="0" y1={y} x2="132" y2="148"
                      stroke="#4ABA99" strokeWidth="1.5" strokeDasharray="5 4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + i*0.08 }} />
                  ))}

                  {[37,99,161,223].map((y,i) => (
                    <motion.line key={`lr${i}`} x1="320" y1={y} x2="188" y2="148"
                      stroke="#1A3F78" strokeWidth="1.5" strokeDasharray="5 4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + i*0.08 }} />
                  ))}

                  {/* DOTS */}
                  {[37,99,161,223].map((y,i) => (
                    <motion.circle key={`dl${i}`} r="3" fill="#4ABA99"
                      animate={{ cx:[2,130], cy:[y,148], opacity:[0,0.9,0] }}
                      transition={{ duration:2.2, delay:i*0.6, repeat:Infinity }} />
                  ))}

                  {[37,99,161,223].map((y,i) => (
                    <motion.circle key={`dr${i}`} r="3" fill="#1A3F78"
                      animate={{ cx:[318,190], cy:[y,148], opacity:[0,0.9,0] }}
                      transition={{ duration:2.2, delay:0.4+i*0.6, repeat:Infinity }} />
                  ))}

                </svg>

                {/* CENTER BOX */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale:[1,1.07,1] }}
                    transition={{ duration:3, repeat:Infinity }}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center bg-gradient-to-br from-[#1A3F78] to-[#4ABA99]">
                    <span className="text-white text-2xl sm:text-3xl font-black">W</span>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-3 sm:gap-4 items-center">
                {rightItems.map((item, i) => (
                  <motion.div key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.5 }}
                    whileHover={{ scale: 1.1, x: -4 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center shadow-md border"
                    style={{ background: item.bg, borderColor: item.border }}>
                    <span>{item.icon}</span>
                    <span className="text-[6px] sm:text-[8px] font-bold" style={{ color: item.color }}>{item.label}</span>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Problem Section ──────────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    { icon: "😔", title: "Customers forget your offers", desc: "Without reminders, your deals get ignored and sales slip away quietly." },
    { icon: "🥶", title: "Leads go cold without follow-up", desc: "Every unanswered lead is money left on the table. Manual follow-ups don't scale." },
    { icon: "⏱️", title: "Manual work kills your time", desc: "Copying numbers, writing messages one by one — there's a smarter way." },
    { icon: "🔇", title: "No consistent communication", desc: "Inconsistent messaging means customers forget you when it matters most." },
  ];
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden" style={{ background: "#F0F7F4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <FadeIn><Badge color="red">⚠️ The Problem</Badge></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 mt-4 mb-3 sm:mb-4">You're Losing Customers{" "}<span className="text-transparent bg-clip-text" style={{ backgroundImage:"linear-gradient(135deg,#EF4444,#F97316)" }}>Every Day</span></h2></FadeIn>
          <FadeIn delay={0.2}><p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">Not because your product is bad — but because your follow-up is missing.</p></FadeIn>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {problems.map((p,i) => (
            <FadeIn key={p.title} delay={0.1+i*0.08}>
              <motion.div whileHover={{ y:-6,scale:1.02 }} transition={{ type:"spring",stiffness:300 }} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-teal-50 h-full">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{p.icon}</div>
                <h3 className="text-slate-800 font-bold text-sm sm:text-base mb-2">{p.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}><p className="text-center mt-8 sm:mt-12 text-slate-600 text-base sm:text-lg font-semibold">👉 If you don't follow up, you don't convert.</p></FadeIn>
      </div>
    </section>
  );
}

// ─── Solution Section ─────────────────────────────────────────────────────────
function SolutionSection() {
  const points = ["Send WhatsApp campaigns in minutes","Run professional email campaigns","Automate follow-ups without manual work","Manage everything from one dashboard"];
  return (
    <section className="py-16 sm:py-20 overflow-hidden" style={{ background:"linear-gradient(180deg,#F0F7F4 0%,#F9FCFB 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        <FadeIn direction="right" className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl hidden sm:block" style={{ background:"linear-gradient(135deg,#1A3F78,#4ABA99)" }} />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-teal-100 p-4 sm:p-6">
              <div className="text-slate-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-5">WYN Reach — All Channels</div>
              <div className="mb-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-teal-100" style={{ background:"linear-gradient(135deg,#E8F8F2,#F0FDF7)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-100 flex items-center justify-center text-sm sm:text-base">💬</div>
                  <div><div className="text-[#1A3F78] text-[10px] sm:text-xs font-bold">WhatsApp Campaign</div><div className="text-slate-400 text-[8px] sm:text-[10px]">Diwali Offer 2024</div></div>
                  <span className="ml-auto text-[8px] sm:text-[10px] bg-teal-100 text-[#4ABA99] px-2 py-0.5 rounded-full font-semibold">Sent ✓</span>
                </div>
                <div className="bg-white rounded-xl p-2 sm:p-3 text-slate-600 text-[11px] sm:text-xs leading-relaxed shadow-sm">🎉 Happy Diwali! Enjoy 30% off all products this week. Use code: <strong>DIWALI30</strong>. Valid till Sunday!</div>
                <div className="flex gap-4 mt-2 text-[8px] sm:text-[10px] text-slate-400"><span>✓✓ 2,340 delivered</span><span>👁 94% read</span></div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-teal-100" style={{ background:"linear-gradient(135deg,#E8F4F0,#F0F7F4)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-100 flex items-center justify-center text-sm sm:text-base">📧</div>
                  <div><div className="text-[#1A3F78] text-[10px] sm:text-xs font-bold">Email Campaign</div><div className="text-slate-400 text-[8px] sm:text-[10px]">Monthly Newsletter</div></div>
                  <span className="ml-auto text-[8px] sm:text-[10px] bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full font-semibold">Scheduled</span>
                </div>
                <div className="bg-white rounded-xl p-2 sm:p-3 shadow-sm">
                  <div className="text-slate-700 text-[10px] sm:text-xs font-semibold mb-1">Subject: Exclusive December Offers 🎁</div>
                  <div className="text-slate-400 text-[8px] sm:text-[10px] leading-relaxed">Hi First Name, Check out our exclusive deals this month...</div>
                </div>
                <div className="flex gap-4 mt-2 text-[8px] sm:text-[10px] text-slate-400"><span>📨 5,120 recipients</span><span>📅 Sends Dec 1, 9AM</span></div>
              </div>
              <motion.div animate={{ scale:[1,1.06,1] }} transition={{ duration:2,repeat:Infinity }}
                className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg"
                style={{ background:"linear-gradient(135deg,#1A3F78,#4ABA99)" }}>🤖 AI-Powered</motion.div>
            </div>
          </div>
        </FadeIn>
        <div className="order-1 lg:order-2">
          <FadeIn><Badge color="teal">💡 The Solution</Badge></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-4 mb-4">WYN Reach Automates Your{" "}<span className="text-transparent bg-clip-text" style={{ backgroundImage:"linear-gradient(135deg,#1A3F78,#4ABA99)" }}>Customer Communication</span></h2></FadeIn>
          <FadeIn delay={0.15}><p className="text-slate-500 text-base sm:text-lg mb-6 sm:mb-8">Reach your customers where they actually respond — WhatsApp & Email.</p></FadeIn>
          <div className="space-y-3 sm:space-y-4">
            {points.map((p,i) => (
              <FadeIn key={p} delay={0.2+i*0.1}>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" style={{ background:"linear-gradient(135deg,#1A3F78,#4ABA99)" }}>
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-700 text-sm sm:text-base font-medium">{p}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.6}><div className="mt-8 sm:mt-10 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-teal-100" style={{ background:"linear-gradient(135deg,#E8F4F0,#F0F7F4)" }}><p className="text-slate-800 text-sm sm:text-base font-semibold">👉 Less effort. More conversions.</p></div></FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Features Section (unchanged) ────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    { icon:"💬", title:"WhatsApp Campaigns", desc:"Send bulk messages that feel personal. Reach customers instantly and get faster responses.", color:"from-teal-400 to-[#4ABA99]" },
    { icon:"📧", title:"Email Campaigns", desc:"Create and send professional emails with ease. Perfect for detailed offers and updates.", color:"from-[#1A3F78] to-blue-600" },
    { icon:"🤖", title:"AI Content Generator", desc:"No more thinking what to write. Generate WhatsApp messages and emails in seconds.", color:"from-[#4ABA99] to-teal-600" },
    { icon:"🔁", title:"Automation Flows", desc:"Set it once. Let it run. Auto send welcome messages, offer reminders & follow-ups.", color:"from-amber-400 to-orange-500" },
    { icon:"🎯", title:"Smart Targeting", desc:"Send the right message to the right people. Segment your audience for better results.", color:"from-cyan-400 to-sky-500" },
    { icon:"📊", title:"Performance Tracking", desc:"Know what works. Track opens, clicks, and responses. Improve campaigns faster.", color:"from-fuchsia-500 to-pink-500" },
  ];

  return (
    <section id="features" className="py-16 sm:py-20 relative overflow-hidden" style={{ background:"#F0F7F4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <FadeIn><Badge color="teal">🚀 Features</Badge></FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 mt-4 mb-3 sm:mb-4">
              Our Powerful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3F78] to-[#4ABA99]">
                Marketing Solutions
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto px-2">
              One platform. All the tools. Zero technical knowledge needed.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <FadeIn key={feature.title} delay={0.05 * idx}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-teal-50 cursor-pointer overflow-hidden"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-slate-800 font-bold text-lg sm:text-xl mb-2 sm:mb-3 relative z-10 group-hover:text-[#1A3F78] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed relative z-10">
                  {feature.desc}
                </p>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="mt-4 sm:mt-5 flex items-center gap-2 text-[#4ABA99] text-xs sm:text-sm font-semibold relative z-10"
                >
                  Learn more →
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works Section (No step numbers) ───────────────────────────────────
function HowItWorksSection() {
  const steps = [
    { icon: "📋", title: "Upload Contacts", desc: "Import your customer list from Excel, CSV, or connect your CRM in seconds.", gradient: "from-teal-400 to-[#4ABA99]" },
    { icon: "✍️", title: "Create Message", desc: "Write your own message or let our AI generate the perfect one for you.", gradient: "from-[#1A3F78] to-blue-600" },
    { icon: "🚀", title: "Send or Automate", desc: "Send instantly or schedule campaigns to run automatically on your timeline.", gradient: "from-amber-400 to-orange-500" },
    { icon: "💰", title: "Convert Customers", desc: "Track responses, measure results, and watch your conversions grow.", gradient: "from-[#4ABA99] to-teal-600" },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F9FCFB 0%, #F0F7F4 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <FadeIn><Badge color="teal">⚙️ How It Works</Badge></FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 mt-4 mb-3 sm:mb-4">
              Up and Running in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3F78] to-[#4ABA99]">
                4 Simple Steps
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Get started in minutes, not days. No complicated setup required.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((step, idx) => (
            <FadeIn key={step.title} delay={0.1 + idx * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl border border-teal-50 text-center group"
              >
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-5 flex items-center justify-center text-3xl sm:text-4xl bg-gradient-to-br ${step.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-slate-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
                <div className="mt-3 sm:mt-4 text-[#4ABA99] text-[10px] sm:text-xs font-semibold">
                  Step {idx + 1}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center mt-10 sm:mt-12">
            <p className="text-slate-600 text-sm sm:text-lg font-semibold inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100">
              👉 Simple. Fast. Effective.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Use Cases (unchanged) ────────────────────────────────────────────────────
function UseCasesSection() {
  const [active, setActive] = useState(0);
  const cases = [
    { icon: "🛒", tab: "Retail", title: "Retail & Supermarkets", desc: "Drive daily footfall and online orders with targeted promotions.", points: ["Send daily offers on WhatsApp", "Promote weekly deals via email", "Flash sales to loyalty customers", "Abandoned cart reminders"] },
    { icon: "🏢", tab: "SMEs", title: "SMEs & Service Businesses", desc: "Never lose a lead again. Follow up automatically and close more deals.", points: ["Follow up with leads instantly", "Send proposals and reminders", "Appointment confirmations", "Service renewal alerts"] },
    { icon: "🎓", tab: "Coaching", title: "Coaching & Training Institutes", desc: "Fill your batches faster and keep students engaged throughout.", points: ["Launch new batches on WhatsApp", "Share complete details via email", "Exam reminders & study tips", "Course completion certificates"] },
  ];
  return (
    <section id="use-cases" className="py-16 sm:py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #F0F7F4 0%, #F9FCFB 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <FadeIn><Badge color="teal">📈 Use Cases</Badge></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-4 mb-3">Works for Any Business That Needs{" "}<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>More Customers</span></h2></FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 flex-wrap">
            {cases.map((c, i) => (
              <motion.button key={c.tab} onClick={() => setActive(i)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all ${active === i ? "text-white shadow-lg shadow-teal-200" : "bg-white text-slate-500 border border-teal-100 hover:border-teal-300"}`}
                style={active === i ? { background: "linear-gradient(135deg,#1A3F78,#4ABA99)" } : {}}>
                {c.icon} {c.tab}
              </motion.button>
            ))}
          </div>
        </FadeIn>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl sm:text-6xl mb-4 sm:mb-5 inline-block">
                {cases[active].icon}
              </motion.div>
              <h3 className="text-slate-900 font-black text-xl sm:text-2xl mb-3 sm:mb-4">{cases[active].title}</h3>
              <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8">{cases[active].desc}</p>
              <div className="space-y-2 sm:space-y-3">
                {cases[active].points.map((p, idx) => (
                  <motion.div key={p} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-center gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" style={{ background: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-slate-700 text-xs sm:text-sm">{p}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a href="#pricing" whileHover={{ scale: 1.04 }} className="inline-flex mt-6 sm:mt-8 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-200" style={{ background: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>Try Free for 7 Days →</motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-teal-100 p-4 sm:p-6"
            >
              <div className="text-slate-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">{cases[active].title} — Sample Campaign</div>
              <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-teal-100" style={{ background: "#E8F8F2" }}>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-100 flex items-center justify-center text-base sm:text-lg">{cases[active].icon}</div>
                  <div className="text-[#1A3F78] text-[10px] sm:text-xs font-bold">WYN Reach Campaign</div>
                </div>
                <div className="bg-white rounded-xl p-2 sm:p-3 text-slate-700 text-xs sm:text-sm leading-relaxed shadow-sm whitespace-pre-line">
                  {active === 0 && "🛍️ Weekend Special! Get 25% off on all items this Saturday & Sunday.\nShow this message at billing.\n\n📍 Visit us or order online. Limited time offer!"}
                  {active === 1 && "👋 Hi Rajesh, Following up on your enquiry from yesterday.\n\nOur team is ready to help you get started. Reply YES for a free consultation! 🤝"}
                  {active === 2 && "📚 New Batch Starting Jan 15! 🎓\n\nSeats filling fast. Secure your spot today.\n✅ Morning & Evening batches available\n📞 Call/WhatsApp to enrol now!"}
                </div>
                <div className="flex gap-4 mt-2 sm:mt-3 text-[9px] sm:text-[11px] text-slate-400"><span>✓✓ Delivered</span><span>👁 Read</span><span>📅 Just now</span></div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Pricing (unchanged) ──────────────────────────────────────────────────────
function PricingSection() {
  const navigate = useNavigate();

  const plans = [
    { name: "Starter", price: "₹999", period: "/month", badge: null, features: ["WhatsApp campaigns", "Basic email campaigns", "Up to 1,000 contacts", "Standard support", "Basic analytics"], cta: "Start Now" },
    { name: "Growth", price: "₹2,499", period: "/month", badge: "Most Popular ⭐", highlight: true, features: ["WhatsApp + Email campaigns", "Automation flows", "AI content generator", "Up to 5,000 contacts", "Priority support", "Advanced analytics"], cta: "Start Free Trial" },
    { name: "Pro", price: "₹4,999", period: "/month", badge: null, features: ["Unlimited campaigns", "Advanced automation", "Team inbox", "Advanced analytics", "Premium support", "Custom integrations"], cta: "Get Started" },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20" style={{ background: "#F0F7F4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14">
          <FadeIn><Badge color="teal">💰 Pricing</Badge></FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 mt-4 mb-3 sm:mb-4">
              Simple, Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3F78] to-[#4ABA99]">
                Pricing
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 text-sm sm:text-lg">
              Start free for 7 days. No credit card required.
            </p>
          </FadeIn>
        </div>

        {/* PLANS */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 items-center">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden ${
                  p.highlight
                    ? "shadow-2xl shadow-teal-200 scale-100 md:scale-105"
                    : "shadow-sm"
                }`}
              >
                {p.highlight && (
                  <div className="h-1.5 bg-gradient-to-r from-[#1A3F78] to-[#4ABA99]" />
                )}

                <div className={`p-5 sm:p-7 border ${p.highlight ? "bg-white border-teal-200" : "bg-white border-teal-50"}`}>

                  {p.badge && (
                    <span className="inline-block mb-3 text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r from-[#1A3F78] to-[#4ABA99]">
                      {p.badge}
                    </span>
                  )}

                  <h3 className="text-slate-800 font-bold text-base sm:text-lg mb-1">{p.name}</h3>

                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-slate-900 font-black text-3xl sm:text-4xl">{p.price}</span>
                    <span className="text-slate-400 text-xs sm:text-sm mb-1">{p.period}</span>
                  </div>

                  {/* FEATURES */}
                  <div className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{
                            background: p.highlight
                              ? "linear-gradient(135deg,#1A3F78,#4ABA99)"
                              : "#E5E7EB",
                          }}
                        >
                          ✓
                        </div>
                        <span className="text-slate-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* 🔥 BUTTON FIX */}
                  <motion.button
                    onClick={() => navigate("/checkout")}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 rounded-xl font-bold text-sm ${
                      p.highlight
                        ? "text-white shadow-lg"
                        : "bg-gray-50 text-slate-700 border border-gray-200"
                    }`}
                    style={
                      p.highlight
                        ? { background: "linear-gradient(135deg,#1A3F78,#4ABA99)" }
                        : {}
                    }
                  >
                    {p.cta}
                  </motion.button>

                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* FOOTER */}
        <FadeIn delay={0.4}>
          <p className="text-center mt-8 text-slate-400 text-sm">
            * WhatsApp API charges are billed separately based on Meta usage.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── FAQ (unchanged) ──────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "Do I need technical knowledge to use this?", a: "No. WYN Reach is built for business owners with zero technical background. If you can send a WhatsApp message, you can use WYN Reach." },
    { q: "Is WhatsApp API included in the plan?", a: "No, WhatsApp API charges depend on usage and are billed separately by Meta. Our plans cover the platform access and tools." },
    { q: "Can I try before paying?", a: "Yes, we offer a 7-day free trial on selected plans. No credit card required to start." },
    { q: "How quickly can I start?", a: "You can start sending campaigns within minutes after setup. Our onboarding wizard guides you through everything." },
    { q: "Is this suitable for small businesses?", a: "Absolutely! WYN Reach is specifically designed for SMEs, coaches, retailers, and service businesses." },
  ];
  return (
    <section id="faq" className="py-16 sm:py-20" style={{ background: "linear-gradient(180deg,#F9FCFB 0%,#F0F7F4 100%)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <FadeIn><h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-3">Frequently Asked{" "}<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>Questions</span></h2></FadeIn>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={0.05 * i}>
              <div className="bg-white rounded-xl sm:rounded-2xl border border-teal-50 overflow-hidden shadow-sm">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left">
                  <span className="text-slate-800 font-semibold text-xs sm:text-sm pr-4">{f.q}</span>
                  <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-200"
                    style={{ background: open === i ? "linear-gradient(135deg,#1A3F78,#4ABA99)" : "white" }}>
                    <svg className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${open === i ? "text-white" : "text-[#4ABA99]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-teal-50 pt-3 sm:pt-4">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA (unchanged) ────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#E8F4F0 0%,#F0F7F4 50%,#E8F4F0 100%)" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn><Badge color="teal">🚀 Ready to grow?</Badge></FadeIn>
        <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 leading-tight mt-5 sm:mt-6 mb-4 sm:mb-6">Stop Losing Customers.<br /><span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>Start Converting Them.</span></h2></FadeIn>
        <FadeIn delay={0.2}><p className="text-slate-500 text-base sm:text-xl mb-8 sm:mb-12">Automate your WhatsApp & Email communication today.</p></FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="#pricing" whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }} className="px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-white font-extrabold text-sm sm:text-lg shadow-2xl shadow-teal-300 text-center" style={{ background: "linear-gradient(135deg,#1A3F78,#4ABA99)" }}>🚀 Start Free Trial</motion.a>
            <motion.a href="#pricing" whileHover={{ scale: 1.04 }} className="px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-slate-700 font-semibold text-sm sm:text-lg border border-teal-100 shadow-md text-center">View Pricing</motion.a>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}><p className="mt-5 sm:mt-6 text-slate-400 text-xs sm:text-sm">7-day free trial • No credit card • Cancel anytime</p></FadeIn>
      </div>
    </section>
  );
}

// ─── Footer (unchanged) ───────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#1A3F78] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg,#4ABA99,#ffffff60)" }}><span className="text-white font-black text-xs sm:text-sm">W</span></div>
              <span className="font-black text-base sm:text-lg text-white">WYN <span className="text-[#4ABA99]">Reach</span></span>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">Automate your WhatsApp & Email communication to convert more customers with less effort.</p>
            <a href="mailto:hello@wynsync.tech" className="text-[#4ABA99] text-xs sm:text-sm hover:underline">hello@wynsync.tech</a>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "How It Works", "Use Cases"] },
            { title: "Company", links: ["About", "Contact", "Blog", "Careers"] },
            { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cookie Policy"] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4">{col.title}</h4>
              <div className="space-y-2 sm:space-y-2.5">{col.links.map(l => <a key={l} href="#" className="block text-white/50 text-xs sm:text-sm hover:text-white transition-colors">{l}</a>)}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[10px] sm:text-sm">© 2024 WYN Reach. All rights reserved. Part of WYN Sync ecosystem.</p>
          <div className="flex gap-3">
            {["💬", "📧", "🐦", "💼"].map((icon, i) => (
              <motion.a key={i} href="#" whileHover={{ scale: 1.2 }} className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-sm sm:text-base hover:bg-white/20 transition-colors">{icon}</motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function WynReachLanding() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans','DM Sans',sans-serif" }} className="antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Navbar />
      <HeroSection />
      <IntegrationSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}