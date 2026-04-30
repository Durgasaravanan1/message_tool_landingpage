// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import {
//   CheckCircle, Code, BookOpen, Users, Award, Settings, Sparkles,
//   ChevronRight, Download, Star, TrendingUp, Shield, Clock, Rocket,ChevronDown,
//   Target, Globe, Terminal, GitBranch, Database, Box, Eye, Wind,
//   LayoutGrid, Braces, Notebook, FlaskConical, FunctionSquare, ChartColumn,
//   AlertCircle, ArrowRight, User, Mail, Phone, CalendarCheck, Check
// } from "lucide-react";

// // ── Scroll animation hook ─────────────────────────────────────────
// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting) setInView(true);
//     }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// function Reveal({ children, delay = 0, className = "" }) {
//   const [ref, inView] = useInView();
//   return (
//     <div ref={ref} className={className} style={{
//       opacity: inView ? 1 : 0,
//       transform: inView ? "translateY(0)" : "translateY(32px)",
//       transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
//     }}>
//       {children}
//     </div>
//   );
// }

// // ── Data ──────────────────────────────────────────────────────────
// const PROGRAM_DATA = [
//   { num: "80+", label: "Days", sub: "Intensive Structured Training", icon: Clock },
//   { num: "3", label: "Courses", sub: "Physics · Python · OpenFOAM", icon: BookOpen },
//   { num: "10+", label: "Projects", sub: "Challenges, Mini & Capstone Projects", icon: Target },
//   { num: "1:1", label: "Career Guidance", sub: "A dedicated session to help you plan your career path and next steps.", icon: Users },
//   { num: "Industry", label: "Driven Curriculum", sub: "Courses designed around what companies actually expect from new hires.", icon: TrendingUp },
//   { num: "Lifetime", label: "Access", sub: "Revisit your lessons and resources anytime, even after course completion.", icon: Shield },
//   { num: "Interview", label: "Prep Support", sub: "Mock Interviews, Resume and Portfolio Building", icon: Award },
//   { num: "Real World", label: "Tools & Software", sub: "Get hands-on experience with the tools professionals use every day.", icon: Globe },
// ];

// const LEARNING_PATH = [
//   { step: "01", title: "Discover", desc: "Understand your starting point and map your goals to the right track in this program.", icon: Target },
//   { step: "02", title: "Learn", desc: "Progress through Physics by Design → CFD with Python → CFD with OpenFOAM in sequence.", icon: BookOpen },
//   { step: "03", title: "Apply", desc: "Complete 10+ hands-on challenges, mini-projects, and capstones on real engineering problems.", icon: Settings },
//   { step: "04", title: "Prepare", desc: "Resume reviews, mock CFD interviews, and LinkedIn & GitHub profile building sessions.", icon: Users },
//   { step: "05", title: "Launch", desc: "Apply confidently to CFD Analyst, Thermal Engineer, and Simulation Engineer roles with a portfolio.", icon: Rocket },
// ];

// const COURSES = [
//   {
//     num: "01",
//     tag: "Course 1 of 3",
//     title: "Physics by Design",
//     duration: "7 modules · ~7 weeks",
//     desc: "An intuition-first bridge course connecting theoretical engineering physics directly to practical simulation setup. You'll learn to set up boundary conditions, evaluate materials, predict thermal bottlenecks, and understand resonance — before ever opening a solver.",
//     modules: [
//       { label: "Module 0", title: "Statics & Strength of Materials", topics: "Load Paths, Stress vs Strain, Bending & Twisting, Failure Matrix" },
//       { label: "Module 1", title: "Applied Fluid Mechanics", topics: "Viscosity & Boundary Layers, Pressure vs Velocity, Turbulence, Flow Separation" },
//       { label: "Module 2", title: "Engineering Materials & Processes", topics: "Ashby Plots, Grain Structure, Forming, Machining & 3D Printing" },
//       { label: "Module 3", title: "Thermodynamics & Heat Transfer", topics: "Energy Balances, Conduction/Convection/Radiation, Thermal Bottlenecks, Thermal Boundary Layers" },
//       { label: "Module 4", title: "Dynamics & Vibrations", topics: "Kinematics, Impacts & Energy, Intro to Vibrations, Modal Analysis" },
//       { label: "Module 5", title: "Engineering Design & Analysis", topics: "Design Process, DFMA & Tolerances, Fatigue Life, Optimization Strategies" },
//       { label: "Module 6", title: "Intro to Computational Methods", topics: "Defeaturing, The Art of Meshing, Boundary Conditions, Verification & Validation" },
//     ],
//     icon: BookOpen,
//     color: "emerald",
//   },
//   {
//     num: "02",
//     tag: "Course 2 of 3",
//     title: "CFD with Python",
//     duration: "6 modules · ~6 weeks",
//     desc: "A comprehensive, hands-on guide moving from basic Python programming to solving the full Navier-Stokes equations. You'll write your own custom solvers using Finite Difference Methods and generate animations of fluid flow — breaking the 'black box' barrier of commercial CFD.",
//     modules: [
//       { label: "Module 0", title: "Python Fundamentals", topics: "Variables, Loops & Logic, NumPy, Matplotlib, Capstone" },
//       { label: "Module 1", title: "FDM Foundations", topics: "Governing Equations, Scientific Computing, Discretization, CFL Stability" },
//       { label: "Module 2", title: "1D Solvers", topics: "Linear Convection, Non-Linear Convection, Diffusion/Heat Equation, Burgers' Equation" },
//       { label: "Module 3", title: "2D Arrays & Iterative Solvers", topics: "2D Convection, 2D Diffusion, Laplace Equation, Poisson Equation" },
//       { label: "Module 4", title: "Full Navier-Stokes", topics: "Lid-Driven Cavity Flow, Poiseuille Channel Flow" },
//       { label: "Module 5", title: "Advanced Multi-Physics", topics: "Dam Break Simulation, Von Kármán Vortex Street, Rayleigh-Bénard Convection" },
//     ],
//     icon: Code,
//     color: "violet",
//   },
//   {
//     num: "03",
//     tag: "Course 3 of 3",
//     title: "Applied CFD with OpenFOAM",
//     duration: "6 chapters · ~12–15 hours",
//     desc: "Master the industry-standard open-source CFD platform from first case setup to turbulence modeling and conjugate heat transfer. You'll work inside the Linux terminal, build meshes from scratch, and produce scientific-grade simulations in ParaView.",
//     modules: [
//       { label: "Chapter 0", title: "Linux Terminal & OpenFOAM Installation", topics: "Optional Onboarding" },
//       { label: "Chapter 1", title: "CFD Essentials & OpenFOAM Workflow", topics: "Case anatomy, icoFoam, paraFoam" },
//       { label: "Chapter 2", title: "Meshing Fundamentals with blockMesh", topics: "Topology, Grading, Curved Edges" },
//       { label: "Chapter 3", title: "Advanced Meshing with snappyHexMesh", topics: "STL handling, Castellation, Layering, Quality Controls" },
//       { label: "Chapter 4", title: "Turbulence Modeling", topics: "RANS, k-ε vs k-ω, Wall Functions, y+ treatment" },
//       { label: "Chapter 5", title: "Heat Transfer", topics: "Energy Equation, Natural vs Forced Convection, Thermophysical Properties" },
//     ],
//     icon: Settings,
//     color: "orange",
//   },
// ];

// const PROJECTS = {
//   "Physics by Design": [
//     { type: "Challenge", title: "Free Body Diagram — Complex Bracket", desc: "Draw a complete FBD for a complex bracket, replacing all wall constraints with proper reaction forces and moments. Validates structural intuition before any FEA setup." },
//     { type: "Challenge", title: "Manufacturing Method Selection — Turbine Blade", desc: "Choose between machining and casting for a given turbine blade geometry and justify your decision based on grain structure, tolerances, and production volume." },
//     { type: "Challenge", title: "Motor Mount Natural Frequency Analysis", desc: "Analyze a motor mount design and propose geometric modifications to shift its natural frequency away from the operating motor RPM to avoid resonance failure." },
//     { type: "Capstone", title: "CAD Preparation for Simulation", desc: "Take a messy CAD assembly, identify and remove features unnecessary for meshing, extract fluid volumes, and define complete mathematical boundary conditions for a solver." },
//   ],
//   "CFD with Python": [
//     { type: "Challenge", title: "Module 0 Capstone Script", desc: "Build a complete Python environment from scratch using NumPy and Matplotlib. Validates that you can manipulate arrays, write loops, and generate publication-quality plots." },
//     { type: "Challenge", title: "1D Burgers' Equation Solver", desc: "Write a complete solver combining 1D convection and diffusion into the Burgers' equation — the foundation of non-linear fluid dynamics — using Finite Difference Methods." },
//     { type: "Mini-Project", title: "Project B: Virtual Wind Tunnel", desc: "Simulate 2D fluid flow around a body in a custom domain using the full Navier-Stokes solver. Visualize velocity vectors, pressure fields, and streamlines using Matplotlib animations." },
//     { type: "Capstone", title: "Project A: Stability Analysis Challenge", desc: "Experimentally find the CFL stability limit for your custom solver by systematically varying timestep and grid spacing. Produce a rigorous scientific report with grid independence data." },
//   ],
//   "Applied CFD with OpenFOAM": [
//     { type: "Mini-Project", title: "Automated CAD Cleanup Pipeline", desc: "Import dirty industrial STEP files into FreeCAD, extract the negative fluid domain, and use Salome to export perfectly healed, watertight STLs with assigned boundary face groups." },
//     { type: "Mini-Project", title: "The Perfect Boundary Layer", desc: "Set up a structured grid study using blockMesh grading. Calculate and apply specific expansion ratios to achieve target y+ values for a fully developed pipe flow simulation." },
//     { type: "Capstone", title: "Industrial Hex-Dominant Meshing", desc: "Generate a highly controlled, multi-region snappyHexMesh for a complex valve assembly. Explicitly control feature snapping and layer addition while keeping cell count within a 16 GB RAM limit." },
//     { type: "Mini-Project", title: "Aerodynamic Validation (pitzDaily)", desc: "Simulate a backward-facing step using the k-ω SST turbulence model. Extract line data with sampleDict and plot the reattachment length against empirical benchmark data in Jupyter." },
//     { type: "Mini-Project", title: "Multiphase Sloshing Tank", desc: "Implement the Volume of Fluid (VOF) method using interFoam to track phase fractions during sloshing. Tune sub-cycling parameters to maintain a stable interface and controlled Courant number." },
//     { type: "Mini-Project", title: "Turbomachinery MRF Characterization", desc: "Set up a Multiple Reference Frame cellZone for an axial fan. Automatically extract torque, thrust, and efficiency metrics into a CSV using OpenFOAM function objects." },
//     { type: "Capstone", title: "EV Battery Cooling or IC Engine Sector", desc: "Choose your track: Perform a Conjugate Heat Transfer simulation on an EV cooling channel, or simulate a 2D moving IC Engine sector with Lagrangian spray injection." },
//     { type: "Capstone", title: "End-to-End Design Optimization Loop", desc: "Build a completely automated pipeline where Dakota drives FreeCAD geometry changes, passes the new STL to OpenFOAM for meshing and solving, and extracts drag to find the aerodynamic optimum." },
//   ],
// };

// const TOOLS = [
//   { name: "Python", icon: Braces },
//   { name: "Jupyter Notebooks", icon: Notebook },
//   { name: "NumPy", icon: FunctionSquare },
//   { name: "Matplotlib", icon: ChartColumn },
//   { name: "OpenFOAM", icon: Wind },
//   { name: "ParaView", icon: Eye },
//   { name: "FreeCAD", icon: Box },
//   { name: "Salome", icon: LayoutGrid },
//   { name: "Dakota", icon: GitBranch },
//   { name: "Linux/WSL2", icon: Terminal },
//   { name: "Git & GitHub", icon: GitBranch },
//   { name: "Pandas", icon: Database },
// ];

// const SKILLS = [
//   "CFD Analysis", "Finite Difference Methods", "Navier-Stokes Equations",
//   "Turbulence Modeling (RANS)", "blockMesh & snappyHexMesh", "Conjugate Heat Transfer",
//   "Multiphase Flow (VOF)", "Workflow Automation (Bash/Python)", "Design Optimization",
//   "Fluid Mechanics", "Engineering Thermodynamics", "Engineering Materials",
//   "Modal Analysis", "V&V Methods", "Scientific Python Programming",
//   "Turbine & Axial Fan Simulation"
// ];

// const qualifications = [
//   "Diploma", "B.E / B.Tech", "B.Sc", "BCA", "B.Com",
//   "BA", "M.E / M.Tech", "M.Sc", "MCA", "MBA", "Other"
// ];

// const getNextThreeDays = () => {
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   return Array.from({ length: 3 }, (_, i) => {
//     const d = new Date();
//     d.setDate(d.getDate() + i);
//     return { date: d.getDate(), month: months[d.getMonth()], day: days[d.getDay()], fullDate: d };
//   });
// };

// const timeSlots = ["9am–12pm", "12pm–3pm", "3pm–6pm", "6pm–9pm"];

// // ── InputField Component (from HeroSection) ───────────────────────
// function InputField({ label, type = "text", placeholder, value, onChange, icon: Icon, valid, required = false }) {
//   return (
//     <div className="relative mb-3">
//       <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
//         {label} {required && <span className="text-red-500 text-lg ml-0.5">*</span>}
//       </label>
//       <div className="relative">
//         {Icon && (
//           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center">
//             <Icon size={16} />
//           </span>
//         )}
//         <input
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className={`w-full ${Icon ? "pl-9" : "pl-3"} pr-10 py-3 rounded-xl border-2 text-sm font-medium bg-white/80 outline-none transition-all duration-200
//             ${valid === true ? "border-emerald-400 bg-emerald-50/60" : valid === false ? "border-red-300" : "border-gray-200 focus:border-emerald-400"}`}
//         />
//         {valid === true && (
//           <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 flex items-center justify-center">
//             <Check size={16} strokeWidth={3} className="block" />
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }

// // ── Hero Component with EXACT FORM MODEL from HeroSection ─────────
// // ── Hero Component with EXACT FORM MODEL from HeroSection ─────────
// function Hero() {
//   // Form state from HeroSection model
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [bestDescribes, setBestDescribes] = useState("");
//   const [qualification, setQualification] = useState("");
//   const [department, setDepartment] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState("");

//   const [step, setStep] = useState(1);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [notification, setNotification] = useState({ show: false, message: "", type: "" });

//   // Get next three days: today, tomorrow, day after
//   const getNextThreeDays = () => {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     return Array.from({ length: 3 }, (_, i) => {
//       const d = new Date();
//       d.setDate(d.getDate() + i);
//       return { date: d.getDate(), month: months[d.getMonth()], day: days[d.getDay()], fullDate: d };
//     });
//   };

//   const days = getNextThreeDays();
//   const timeSlots = ["9am–12pm", "12pm–3pm", "3pm–6pm", "6pm–9pm"];

//   useEffect(() => {
//     const t = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   useEffect(() => {
//     if (!showSuccess) return;

//     const inTimer = setTimeout(() => setPopupVisible(true), 30);
//     const outTimer = setTimeout(() => setPopupVisible(false), 3000);
//     const resetTimer = setTimeout(() => {
//       setShowSuccess(false);
//       setStep(1);
//       setName("");
//       setEmail("");
//       setPhone("");
//       setBestDescribes("");
//       setQualification("");
//       setDepartment("");
//       setSelectedDate(null);
//       setSelectedTime("");
//     }, 3400);

//     return () => {
//       clearTimeout(inTimer);
//       clearTimeout(outTimer);
//       clearTimeout(resetTimer);
//     };
//   }, [showSuccess]);

//   // Validation
//   const validateName = name.trim().length >= 2 ? true : name.length > 0 ? false : null;
//   const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? true : email.length > 0 ? false : null;
//   const validatePhone = /^[6-9]\d{9}$/.test(phone) ? true : phone.length > 0 ? false : null;
//   const form1Valid = validateName === true && validateEmail === true && validatePhone === true;

//   const handleContinue = () => {
//     if (form1Valid) setStep(2);
//   };

//   const handleSchedule = async () => {
//     setIsSubmitting(true);
//     try {
//       await axios.post("https://api.wrench-wise.com/api/mechanical-course/register", {
//         name,
//         email,
//         phone,
//         bestDescribes,
//         qualification,
//         department,
//         preferredDate: selectedDate !== null ? `${days[selectedDate].date} ${days[selectedDate].month}` : "",
//         preferredTime: selectedTime
//       });

//       setNotification({
//         show: true,
//         message: "✅ Registration successful! An advisor will contact you shortly.",
//         type: "success"
//       });
//       setShowSuccess(true);
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setNotification({
//         show: true,
//         message: "❌ Registration failed. Please try again.",
//         type: "error"
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const scrollToCurriculum = () => {
//     const coursesSection = document.getElementById("courses");
//     if (coursesSection) {
//       coursesSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
//       {/* Custom Toast Notification */}
//       {notification.show && (
//         <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
//           <div className={`px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 text-sm font-medium ${
//             notification.type === "success" 
//               ? "bg-emerald-600 text-white" 
//               : "bg-red-600 text-white"
//           }`}>
//             <span>{notification.message}</span>
//             <button
//               onClick={() => setNotification({ show: false, message: "", type: "" })}
//               className="ml-2 hover:opacity-80"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         <div className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-6000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
//           {/* Left column - KEPT EXACTLY THE SAME */}
//           <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-6">
//               Certification Program in<br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 animate-gradient-x">
//                 Foundations of<br />
//                 <span className="whitespace-normal sm:whitespace-nowrap">
//                   Computational Mechanics
//                   <span className="font-normal">:</span>
//                 </span>
//               </span><br />
//               Fluid &amp; Thermal Systems
//             </h1>
//             <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
//               Build industry-ready simulation skills from first-principles physics to writing your own CFD solvers and mastering OpenFOAM workflows.
//             </p>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-6 mb-6 sm:mb-10">
//               {[
//                 "Master Fluid Mechanics and Heat Transfer",
//                 "Build CFD solvers using Python",
//                 "Run simulations in OpenFOAM",
//                 "Work on real-world engineering projects",
//                 "Build a strong GitHub portfolio"
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm group hover:translate-x-1 transition-transform duration-200">
//                   <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
         
//           </div>

//           {/* Registration Form - REPLACED WITH UPDATED HeroSection MODEL */}
//           <div id="form" className="relative mt-8 lg:mt-0">
//             <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 blur-xl animate-pulse-slow" />
//             <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-h-[100vh] ">
//               <div className="p-6 sm:p-8">
//                 <p className="text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-1">
//                   Speak to an Advisor · Free Consultation
//                 </p>
//                 <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-4 sm:mb-6">
//                   Get Program Details
//                 </h3>
                
//                 {/* Step 1 */}
//                 <div
//                   className="transition-all duration-500"
//                   style={{
//                     transform: step === 1 ? "translateX(0)" : "translateX(-110%)",
//                     opacity: step === 1 ? 1 : 0,
//                     position: step === 1 ? "relative" : "absolute",
//                     width: "100%",
//                     top: 0,
//                     left: 0
//                   }}
//                 >
//                   <InputField
//                     label="Full Name"
//                     placeholder="e.g. Yazhini"
//                     value={name}
//                     onChange={e => setName(e.target.value)}
//                     icon={User}
//                     valid={validateName}
//                     required
//                   />
//                   <InputField
//                     label="Email Address"
//                     type="email"
//                     placeholder="you@example.com"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                     icon={Mail}
//                     valid={validateEmail}
//                     required
//                   />
//                   <InputField
//                     label="Phone Number"
//                     type="tel"
//                     placeholder="10-digit mobile number"
//                     value={phone}
//                     onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                     icon={Phone}
//                     valid={validatePhone}
//                     required
//                   />

//                   <button
//                     onClick={handleContinue}
//                     disabled={!form1Valid}
//                     className={`w-full mt-3 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300
//                       ${form1Valid
//                         ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]"
//                         : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
//                   >
//                     Register Now <ArrowRight size={14} />
//                   </button>

//                   <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-3">
//                     🔒 Your details are safe and never shared.
//                   </p>
//                 </div>

//                 {/* Step 2 */}
//                 <div
//                   className="transition-all duration-500"
//                   style={{
//                     transform: step === 2 ? "translateX(0)" : "translateX(110%)",
//                     opacity: step === 2 ? 1 : 0,
//                     position: step === 2 ? "relative" : "absolute",
//                     width: "100%",
//                     top: 0,
//                     left: 0
//                   }}
//                 >
//                   {/* Which best describes you? */}
//                   <div className="mb-3 sm:mb-4">
//                     <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">
//                       Which best describes you? <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <select
//                         value={bestDescribes}
//                         onChange={(e) => setBestDescribes(e.target.value)}
//                         className="w-full border border-gray-200 rounded-lg p-2 text-xs sm:text-sm outline-none focus:border-emerald-400 bg-white appearance-none"
//                         required
//                       >
//                         <option value="">Select an option</option>
//                         <option value="Working Professional">Working Professional</option>
//                         <option value="Recent Graduate (Looking for a job)">Recent Graduate (Looking for a job)</option>
//                         <option value="Student">Student</option>
//                       </select>
//                       <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                     </div>
//                   </div>

//                   {/* Qualification */}
//                   <div className="mb-3 sm:mb-4">
//                     <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">
//                       Qualification <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       value={qualification}
//                       onChange={e => setQualification(e.target.value)}
//                       className="w-full border border-gray-200 rounded-lg p-2 text-xs sm:text-sm outline-none focus:border-emerald-400"
//                       required
//                     >
//                       <option value="">Select qualification</option>
//                       <option value="Engineering (B.E / B.Tech / M.E / M.Tech)">Engineering (B.E / B.Tech / M.E / M.Tech)</option>
//                       <option value="Diploma">Diploma</option>
//                       <option value="ITI">ITI</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>

//                   {/* Department / Field of Study */}
//                   <div className="mb-3 sm:mb-4">
//                     <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">
//                       Department / Field of Study <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       value={department}
//                       onChange={e => setDepartment(e.target.value)}
//                       className="w-full border border-gray-200 rounded-lg p-2 text-xs sm:text-sm outline-none focus:border-emerald-400"
//                       required
//                     >
//                       <option value="">Select department</option>
//                       <option value="Mechanical / Automobile">Mechanical / Automobile</option>
//                       <option value="Electrical / Electronics">Electrical / Electronics</option>
//                       <option value="Civil">Civil</option>
//                       <option value="Computer Science / IT">Computer Science / IT</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>

//                   {/* Preferred Date - 29, 30, 1 from today */}
//                   <div className="mb-3 sm:mb-4">
//                     <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">
//                       Preferred Date <span className="text-red-500">*</span>
//                     </label>
//                     <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
//                       {days.map((d, i) => (
//                         <button
//                           key={i}
//                           type="button"
//                           onClick={() => setSelectedDate(i)}
//                           className={`py-1.5 sm:py-2 rounded-lg border text-[10px] sm:text-xs font-semibold transition-all
//                             ${selectedDate === i ? "bg-emerald-600 text-white border-emerald-600" : "border-gray-200 text-gray-700 hover:border-emerald-300"}`}
//                         >
//                           {d.date} {d.month} <span className="hidden xs:inline">{d.day}</span>
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Preferred Time */}
//                   <div className="mb-4 sm:mb-5">
//                     <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">
//                       Preferred Time <span className="text-red-500">*</span>
//                     </label>
//                     <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
//                       {timeSlots.map(t => (
//                         <button
//                           key={t}
//                           type="button"
//                           onClick={() => setSelectedTime(t)}
//                           className={`py-1.5 sm:py-2 rounded-lg border text-[10px] sm:text-xs font-semibold transition-all
//                             ${selectedTime === t ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-gray-200 text-gray-600 hover:border-emerald-300"}`}
//                         >
//                           {t}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <button
//                     onClick={handleSchedule}
//                     disabled={isSubmitting || !bestDescribes || !qualification || !department || selectedDate === null || !selectedTime}
//                     className="w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitting ? "Submitting..." : "Schedule My Session ✓"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute top-0 right-0 -mt-2 -mr-2 sm:-mt-3 sm:-mr-3 pointer-events-none">
//               <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full p-1 shadow-lg animate-pulse">
//                 <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Success Popup Overlay */}
//       {showSuccess && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className={`bg-white rounded-2xl shadow-2xl border border-emerald-100 px-6 sm:px-8 py-8 text-center w-full max-w-[280px] sm:max-w-[320px] ${popupVisible ? "popup-in" : "popup-out"}`}>
//             <div className="check-bounce w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-200">
//               <CalendarCheck className="text-white" size={28} strokeWidth={2} />
//             </div>
//             <h3 className="text-gray-900 text-lg font-extrabold mb-2">Thank You! 🎉</h3>
//             <p className="text-gray-500 text-sm leading-relaxed">
//               Our team will contact you shortly to confirm your session.
//             </p>
//             <div className="mt-4 h-1 rounded-full bg-gray-100 overflow-hidden">
//               <div
//                 className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
//                 style={{
//                   width: popupVisible ? "0%" : "100%",
//                   transition: popupVisible ? "width 3s linear" : "none",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes slide-down {
//           from {
//             opacity: 0;
//             transform: translate(-50%, -20px);
//           }
//           to {
//             opacity: 1;
//             transform: translate(-50%, 0);
//           }
//         }
//         .animate-slide-down {
//           animation: slide-down 0.3s ease-out forwards;
//         }
//         @keyframes popIn {
//           0%   { transform: scale(0.75) translateY(16px); opacity: 0; }
//           60%  { transform: scale(1.04) translateY(-2px); opacity: 1; }
//           100% { transform: scale(1) translateY(0); opacity: 1; }
//         }
//         @keyframes popOut {
//           0%   { transform: scale(1) translateY(0); opacity: 1; }
//           100% { transform: scale(0.85) translateY(12px); opacity: 0; }
//         }
//         .popup-in { animation: popIn 0.38s cubic-bezier(0.34,1.56,0.64,1) forwards; }
//         .popup-out { animation: popOut 0.28s ease-in forwards; }
//         @keyframes checkBounce {
//           0%,100% { transform: scale(1); }
//           40%     { transform: scale(1.25); }
//           70%     { transform: scale(0.9); }
//         }
//         .check-bounce { animation: checkBounce 0.6s ease 0.3s both; }
//       `}</style>
//     </section>
//   );
// }

// // ── Program at a Glance ────────────────────────────────────────────
// function ProgramGlance() {
//   return (
//     <section className="py-12 sm:py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Reveal>
//           <div className="text-center mb-4">
//             <span className="text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-2">
//               <Sparkles className="w-3 h-3" /> Program at a Glance
//             </span>
//           </div>
//           <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
//             Everything included in one program
//           </h2>
//           <p className="text-center text-gray-500 text-sm sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
//             Built to take you from zero experience to a job-ready portfolio with guaranteed interview opportunities.
//           </p>
//         </Reveal>
//         <div className="mt-12 rounded-2xl overflow-hidden border border-gray-200 bg-white">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//             {PROGRAM_DATA.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.label}
//                   className={`group p-6 sm:p-7 relative bg-white border-gray-200 ${i % 4 !== 3 ? "lg:border-r" : ""} ${i < 4 ? "border-b" : ""} sm:border-b`}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
//                   <div className="relative z-10">
//                     <div className="mb-3">
//                       <Icon className="w-7 h-7 text-emerald-500 group-hover:scale-110 group-hover:rotate-3 transition" />
//                     </div>
//                     <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-cyan-600 mb-1">
//                       {item.num}
//                     </p>
//                     <p className="text-gray-800 font-bold text-sm mb-1">{item.label}</p>
//                     <p className="text-gray-400 text-xs leading-snug">{item.sub}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── Learning Path ──────────────────────────────────────────────────
// function LearningPath() {
//   const [lineVisible, setLineVisible] = useState(false);
//   const lineRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setLineVisible(true);
//         observer.disconnect();
//       }
//     }, { threshold: 0.3 });
//     if (lineRef.current) observer.observe(lineRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Reveal>
//           <span className="block text-center text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">Learning Path</span>
//           <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
//             Your Road to a Career in Simulation
//           </h2>
//           <p className="text-center text-gray-500 text-sm sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto">
//             From first principles to placement - what your learning journey looks like.
//           </p>
//         </Reveal>
//         <div className="relative" ref={lineRef}>
//           <div className="hidden lg:block absolute top-10 left-1/2 transform -translate-x-1/2 h-[3px] rounded-full" style={{
//             width: lineVisible ? "80%" : "0%",
//             opacity: lineVisible ? 1 : 0,
//             transition: "width 1s ease, opacity 0.6s ease",
//             background: "linear-gradient(90deg, #34d399, #10b981, #06b6d4)",
//             boxShadow: lineVisible ? "0 0 15px rgba(16,185,129,0.6), 0 0 30px rgba(6,182,212,0.4)" : "none",
//           }} />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//             {LEARNING_PATH.map((step, i) => {
//               const Icon = step.icon;
//               return (
//                 <Reveal key={step.step} delay={i * 100}>
//                   <div className="relative flex flex-col items-center text-center group cursor-default">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-emerald-200 shadow-md flex flex-col items-center justify-center mb-4 sm:mb-5 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:border-emerald-400 group-hover:bg-gradient-to-br from-emerald-50 to-cyan-50">
//                       <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300 mb-1" />
//                       <span className="text-emerald-400 text-[8px] sm:text-[10px] font-bold transition-all duration-300 group-hover:text-emerald-600">
//                         {step.step}
//                       </span>
//                       <span className="text-gray-800 font-bold text-[10px] sm:text-sm transition-colors duration-300 group-hover:text-emerald-700">
//                         {step.title}
//                       </span>
//                       <div className="absolute inset-0 rounded-2xl bg-emerald-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
//                     </div>
//                     <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed transition-all duration-300 group-hover:text-gray-700 max-w-[160px] sm:max-w-none">
//                       {step.desc}
//                     </p>
//                   </div>
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── Courses Section ────────────────────────────────────────────────────
// function Courses() {
//   const [expandedCourse, setExpandedCourse] = useState(null);
//   const toggleCourse = (num) => setExpandedCourse(expandedCourse === num ? null : num);

//   return (
//     <section id="courses" className="py-12 sm:py-16 bg-white scroll-mt-16">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Reveal>
//           <span className="block text-center text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">Course Syllabus</span>
//           <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
//             Three Courses. One Complete Program.
//           </h2>
//           <p className="text-center text-gray-500 text-sm sm:text-lg mb-4 max-w-4xl mx-auto leading-relaxed px-2">
//             <span className="block">Taken in sequence, these three courses form a complete foundation in computational mechanics</span>
//             <span className="block">– from physics intuition to production‑grade CFD workflows.</span>
//           </p>
//           <p className="text-center text-gray-400 text-xs sm:text-sm mb-6">
//             Our curriculum is continuously refined by talking to company experts and simulation engineers.
//           </p>

//           <div className="flex justify-center mb-12">
//             <a
//               href="/pdf/mechanical.pdf"
//               download="mechanical.pdf"
//               className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
//             >
//               Download Syllabus
//               <Download className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-1" />
//             </a>
//           </div>
//         </Reveal>

//         <div className="space-y-4">
//           {COURSES.map((course, idx) => {
//             const isExpanded = expandedCourse === course.num;
//             const colorMap = {
//               emerald: { border: "hover:border-emerald-200", badge: "bg-emerald-100 text-emerald-700", icon: "text-emerald-500" },
//               violet: { border: "hover:border-violet-200", badge: "bg-violet-100 text-violet-700", icon: "text-violet-500" },
//               orange: { border: "hover:border-orange-200", badge: "bg-orange-100 text-orange-700", icon: "text-orange-500" },
//             };
//             const colors = colorMap[course.color];
//             const Icon = course.icon;
//             return (
//               <Reveal key={course.num} delay={idx * 80}>
//                 <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ${colors.border}`}>
//                   <button onClick={() => toggleCourse(course.num)} className="w-full px-6 py-5 flex justify-between items-center text-left transition-colors duration-200 hover:bg-gray-50 rounded-2xl">
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
//                       <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>{course.tag}</span>
//                       <div>
//                         <h3 className="text-gray-900 text-lg sm:text-xl font-bold">{course.title}</h3>
//                         <p className="text-gray-400 text-xs mt-0.5">{course.duration}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Icon className={`w-5 h-5 ${colors.icon} opacity-60`} />
//                       <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
//                     </div>
//                   </button>
//                   {isExpanded && (
//                     <div className="px-6 pb-6 pt-2 border-t border-gray-100">
//                       <p className="text-gray-600 text-sm mb-5">{course.desc}</p>
//                       <div className="space-y-3">
//                         {course.modules.map((mod) => (
//                           <div key={mod.label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-sm transition-all duration-200">
//                             <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${course.color === "emerald" ? "from-emerald-500 to-cyan-500" : course.color === "violet" ? "from-violet-500 to-purple-500" : "from-orange-500 to-red-500"} text-white self-start sm:self-auto flex-shrink-0`}>
//                               {mod.label}
//                             </span>
//                             <div>
//                               <p className="text-gray-800 text-xs font-semibold">{mod.title}</p>
//                               <p className="text-gray-400 text-[10px] sm:text-[11px] leading-snug mt-0.5">{mod.topics}</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </Reveal>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── Projects Section ───────────────────────────────────────────────────
// function Projects() {
//   const [expandedPhase, setExpandedPhase] = useState(null);
//   const phases = Object.keys(PROJECTS);
//   const typeColors = {
//     Challenge: "bg-emerald-100 text-emerald-700 border-emerald-200",
//     "Mini-Project": "bg-violet-100 text-violet-700 border-violet-200",
//     Capstone: "bg-orange-100 text-orange-700 border-orange-200",
//   };
//   const togglePhase = (phase) => setExpandedPhase(expandedPhase === phase ? null : phase);

//   return (
//     <section id="projects" className="py-12 sm:py-16 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Reveal>
//           <span className="block text-center text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">Hands‑On Projects</span>
//           <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">Real Problems. Real Simulations.</h2>
//           <p className="text-center text-gray-500 text-sm sm:text-lg mb-8 max-w-2xl mx-auto">
//             Every phase comes with mini‑projects and a capstone. Click any phase to see what you will build.
//           </p>
//         </Reveal>
//         <div className="space-y-4">
//           {phases.map((phase, idx) => {
//             const isExpanded = expandedPhase === phase;
//             const projectsList = PROJECTS[phase];
//             return (
//               <Reveal key={phase} delay={idx * 80}>
//                 <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
//                   <button onClick={() => togglePhase(phase)} className="w-full px-6 py-5 flex justify-between items-center text-left transition-colors duration-200 hover:bg-gray-50 rounded-2xl">
//                     <div>
//                       <span className="text-emerald-600 text-xs font-semibold tracking-wider uppercase">Phase {idx + 1}</span>
//                       <h3 className="text-gray-900 text-lg sm:text-xl font-bold mt-1">{phase}</h3>
//                     </div>
//                     <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
//                   </button>
//                   {isExpanded && (
//                     <div className="px-6 pb-6 pt-2 border-t border-gray-100">
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {projectsList.map((project) => (
//                           <div key={project.title} className="border border-gray-100 rounded-xl p-4 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
//                             <div className="flex items-center gap-2 mb-3">
//                               <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${typeColors[project.type] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
//                                 {project.type}
//                               </span>
//                             </div>
//                             <h4 className="text-gray-900 font-bold text-sm mb-2 group-hover:text-emerald-700 transition-colors">{project.title}</h4>
//                             <p className="text-gray-500 text-xs leading-relaxed">{project.desc}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </Reveal>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── Tools & Skills ─────────────────────────────────────────────────────
// function ToolsSkills() {
//   return (
//     <section id="tools" className="py-12 sm:py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 sm:mb-16">
//           <span className="text-emerald-600 text-xs font-semibold tracking-widest uppercase">Tools & Skills</span>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">What You'll Master</h2>
//           <p className="text-gray-500 text-sm sm:text-lg mt-3 max-w-2xl mx-auto">
//             Industry-standard tools used in real engineering workflows, paired with the foundational skills that make you employable.
//           </p>
//         </div>

//         <div className="mb-12">
//           <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center gap-2">
//             <Code className="w-5 h-5 text-emerald-500" /> 12+ Tools to Master
//           </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//             {TOOLS.map((tool) => {
//               const Icon = tool.icon;
//               return (
//                 <div
//                   key={tool.name}
//                   className="bg-gray-50 border border-gray-200 rounded-xl py-5 flex flex-col items-center justify-center gap-2 text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 cursor-pointer group"
//                 >
//                   <Icon className="w-5 h-5 text-gray-500 group-hover:text-emerald-600" strokeWidth={1.5} />
//                   <span className="text-xs sm:text-sm font-medium text-center px-1">{tool.name}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div>
//           <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center gap-2">
//             <Star className="w-5 h-5 text-violet-500" /> 16+ Skills to Master
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {SKILLS.map((skill) => (
//               <span
//                 key={skill}
//                 className="px-4 py-2 rounded-full border border-gray-200 text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 transition-all duration-300 cursor-pointer"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── Pricing Section ────────────────────────────────────────────────────
// function Pricing() {
//   return (
//     <section id="pricing" className="py-12 sm:py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* HEADING */}
//         <div className="text-center mb-10 sm:mb-14">
//           <span className="block text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-3">
//             Pricing
//           </span>

//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
//             One Investment.<br />
//             Complete Career Launch.
//           </h2>
//         </div>

//         {/* CARDS */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           {/* LEFT CARD */}
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
//             <p className="text-gray-500 text-sm mb-2">EMI starting from</p>

//             <h2 className="text-4xl sm:text-5xl font-extrabold text-emerald-600 mb-2">
//               ₹4,166{" "}
//               <span className="text-lg text-gray-400 font-medium">/mo</span>
//             </h2>

//             <p className="text-gray-800 font-semibold mb-1">
//               Total Program Fee: ₹75,000
//             </p>

//             <p className="text-gray-400 text-sm mb-6">
//               18-month no-cost EMI available with ₹20,000 upfront commitment
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-50 transition">
//                 Talk to Advisor
//               </button>

//               <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
//                 View EMI Options
//               </button>
//             </div>
//           </div>

//           {/* RIGHT CARD */}
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
//             <h3 className="text-emerald-600 font-semibold tracking-widest text-sm mb-6">
//               CAREER OUTCOMES
//             </h3>

//             <div className="space-y-4 text-sm sm:text-base">
              
//               <div className="flex justify-between border-b pb-3">
//                 <span className="text-gray-600">
//                   EMI (monthly, 18 months)
//                 </span>
//                 <span className="text-emerald-600 font-semibold">
//                   ₹4,166/mo
//                 </span>
//               </div>

//               <div className="flex justify-between border-b pb-3">
//                 <span className="text-gray-600">Total Program Fee</span>
//                 <span className="text-emerald-600 font-semibold">
//                   ₹75,000
//                 </span>
//               </div>

//               <div className="flex justify-between border-b pb-3">
//                 <span className="text-gray-600">Guaranteed Interviews</span>
//                 <span className="text-emerald-600 font-semibold">5</span>
//               </div>

//               <div className="flex justify-between border-b pb-3">
//                 <span className="text-gray-600">Capstone Projects</span>
//                 <span className="text-emerald-600 font-semibold">5+</span>
//               </div>

//               <div className="flex justify-between border-b pb-3">
//                 <span className="text-gray-600">Mini Projects</span>
//                 <span className="text-emerald-600 font-semibold">8+</span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-gray-600">Industry Tracks</span>
//                 <span className="text-emerald-600 font-semibold">5</span>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// // ── Root Component ────────────────────────────────────────────────────
// export default function Mech() {
//   return (
//     <div className="min-h-screen bg-white">
//       <style>{`
//         @keyframes blob { 0% { transform: translate(0px,0px) scale(1); } 33% { transform: translate(30px,-50px) scale(1.1); } 66% { transform: translate(-20px,20px) scale(0.9); } 100% { transform: translate(0px,0px) scale(1); } }
//         @keyframes gradient-x { 0%,100% { background-size:200% 200%; background-position:left center; } 50% { background-size:200% 200%; background-position:right center; } }
//         @keyframes pulse-slow { 0%,100% { opacity:0.6; } 50% { opacity:1; } }
//         @keyframes bounce-subtle { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-5px); } }
//         .animate-blob { animation: blob 7s infinite; }
//         .animation-delay-2000 { animation-delay: 2s; }
//         .animation-delay-4000 { animation-delay: 4s; }
//         .animation-delay-6000 { animation-delay: 6s; }
//         .animate-gradient-x { animation: gradient-x 3s ease infinite; }
//         .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
//         .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
//         html { scroll-behavior: smooth; }
//         button, a, select, input[type="submit"], [role="button"], [onclick] { cursor: pointer; }
//       `}</style>
//       <Hero />
//       <ProgramGlance />
//       <LearningPath />
//       <Courses />
//       <Projects />
//       <ToolsSkills />
//       <Pricing />
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  CheckCircle, Code, BookOpen, Users, Award, Settings, Sparkles,
  ChevronRight, Download, Star, TrendingUp, Shield, Clock, Rocket, ChevronDown,
  Target, Globe, Terminal, GitBranch, Database, Box, Eye, Wind,
  LayoutGrid, Braces, Notebook, FlaskConical, FunctionSquare, ChartColumn,
  AlertCircle, ArrowRight, User, Mail, Phone, CalendarCheck, Check, Briefcase, Wallet
} from "lucide-react";

// ── Scroll animation hook ─────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────
const PROGRAM_DATA = [
  { num: "80+", label: "Days", sub: "Intensive Structured Training", icon: Clock },
  { num: "3", label: "Courses", sub: "Physics · Python · OpenFOAM", icon: BookOpen },
  { num: "10+", label: "Projects", sub: "Challenges, Mini & Capstone Projects", icon: Target },
  { num: "1:1", label: "Career Guidance", sub: "A dedicated session to help you plan your career path and next steps.", icon: Users },
  { num: "Industry", label: "Driven Curriculum", sub: "Courses designed around what companies actually expect from new hires.", icon: TrendingUp },
  { num: "Lifetime", label: "Access", sub: "Revisit your lessons and resources anytime, even after course completion.", icon: Shield },
  { num: "Interview", label: "Prep Support", sub: "Mock Interviews, Resume and Portfolio Building", icon: Award },
  { num: "Real World", label: "Tools & Software", sub: "Get hands-on experience with the tools professionals use every day.", icon: Globe },
];

const LEARNING_PATH = [
  { step: "01", title: "Discover", desc: "Understand your starting point and map your goals to the right track in this program.", icon: Target },
  { step: "02", title: "Learn", desc: "Progress through Physics by Design → CFD with Python → CFD with OpenFOAM in sequence.", icon: BookOpen },
  { step: "03", title: "Apply", desc: "Complete 10+ hands-on challenges, mini-projects, and capstones on real engineering problems.", icon: Settings },
  { step: "04", title: "Prepare", desc: "Resume reviews, mock CFD interviews, and LinkedIn & GitHub profile building sessions.", icon: Users },
  { step: "05", title: "Launch", desc: "Apply confidently to CFD Analyst, Thermal Engineer, and Simulation Engineer roles with a portfolio.", icon: Rocket },
];

const COURSES = [
  {
    num: "01",
    tag: "Course 1 of 3",
    title: "Physics by Design",
    duration: "7 modules · ~7 weeks",
    desc: "An intuition-first bridge course connecting theoretical engineering physics directly to practical simulation setup. You'll learn to set up boundary conditions, evaluate materials, predict thermal bottlenecks, and understand resonance — before ever opening a solver.",
    modules: [
      { label: "Module 0", title: "Statics & Strength of Materials", topics: "Load Paths, Stress vs Strain, Bending & Twisting, Failure Matrix" },
      { label: "Module 1", title: "Applied Fluid Mechanics", topics: "Viscosity & Boundary Layers, Pressure vs Velocity, Turbulence, Flow Separation" },
      { label: "Module 2", title: "Engineering Materials & Processes", topics: "Ashby Plots, Grain Structure, Forming, Machining & 3D Printing" },
      { label: "Module 3", title: "Thermodynamics & Heat Transfer", topics: "Energy Balances, Conduction/Convection/Radiation, Thermal Bottlenecks, Thermal Boundary Layers" },
      { label: "Module 4", title: "Dynamics & Vibrations", topics: "Kinematics, Impacts & Energy, Intro to Vibrations, Modal Analysis" },
      { label: "Module 5", title: "Engineering Design & Analysis", topics: "Design Process, DFMA & Tolerances, Fatigue Life, Optimization Strategies" },
      { label: "Module 6", title: "Intro to Computational Methods", topics: "Defeaturing, The Art of Meshing, Boundary Conditions, Verification & Validation" },
    ],
    icon: BookOpen,
    color: "emerald",
  },
  {
    num: "02",
    tag: "Course 2 of 3",
    title: "CFD with Python",
    duration: "6 modules · ~6 weeks",
    desc: "A comprehensive, hands-on guide moving from basic Python programming to solving the full Navier-Stokes equations. You'll write your own custom solvers using Finite Difference Methods and generate animations of fluid flow — breaking the 'black box' barrier of commercial CFD.",
    modules: [
      { label: "Module 0", title: "Python Fundamentals", topics: "Variables, Loops & Logic, NumPy, Matplotlib, Capstone" },
      { label: "Module 1", title: "FDM Foundations", topics: "Governing Equations, Scientific Computing, Discretization, CFL Stability" },
      { label: "Module 2", title: "1D Solvers", topics: "Linear Convection, Non-Linear Convection, Diffusion/Heat Equation, Burgers' Equation" },
      { label: "Module 3", title: "2D Arrays & Iterative Solvers", topics: "2D Convection, 2D Diffusion, Laplace Equation, Poisson Equation" },
      { label: "Module 4", title: "Full Navier-Stokes", topics: "Lid-Driven Cavity Flow, Poiseuille Channel Flow" },
      { label: "Module 5", title: "Advanced Multi-Physics", topics: "Dam Break Simulation, Von Kármán Vortex Street, Rayleigh-Bénard Convection" },
    ],
    icon: Code,
    color: "violet",
  },
  {
    num: "03",
    tag: "Course 3 of 3",
    title: "Applied CFD with OpenFOAM",
    duration: "6 chapters · ~12–15 hours",
    desc: "Master the industry-standard open-source CFD platform from first case setup to turbulence modeling and conjugate heat transfer. You'll work inside the Linux terminal, build meshes from scratch, and produce scientific-grade simulations in ParaView.",
    modules: [
      { label: "Chapter 0", title: "Linux Terminal & OpenFOAM Installation", topics: "Optional Onboarding" },
      { label: "Chapter 1", title: "CFD Essentials & OpenFOAM Workflow", topics: "Case anatomy, icoFoam, paraFoam" },
      { label: "Chapter 2", title: "Meshing Fundamentals with blockMesh", topics: "Topology, Grading, Curved Edges" },
      { label: "Chapter 3", title: "Advanced Meshing with snappyHexMesh", topics: "STL handling, Castellation, Layering, Quality Controls" },
      { label: "Chapter 4", title: "Turbulence Modeling", topics: "RANS, k-ε vs k-ω, Wall Functions, y+ treatment" },
      { label: "Chapter 5", title: "Heat Transfer", topics: "Energy Equation, Natural vs Forced Convection, Thermophysical Properties" },
    ],
    icon: Settings,
    color: "orange",
  },
];

const PROJECTS = {
  "Physics by Design": [
    { type: "Challenge", title: "Free Body Diagram — Complex Bracket", desc: "Draw a complete FBD for a complex bracket, replacing all wall constraints with proper reaction forces and moments. Validates structural intuition before any FEA setup." },
    { type: "Challenge", title: "Manufacturing Method Selection — Turbine Blade", desc: "Choose between machining and casting for a given turbine blade geometry and justify your decision based on grain structure, tolerances, and production volume." },
    { type: "Challenge", title: "Motor Mount Natural Frequency Analysis", desc: "Analyze a motor mount design and propose geometric modifications to shift its natural frequency away from the operating motor RPM to avoid resonance failure." },
    { type: "Capstone", title: "CAD Preparation for Simulation", desc: "Take a messy CAD assembly, identify and remove features unnecessary for meshing, extract fluid volumes, and define complete mathematical boundary conditions for a solver." },
  ],
  "CFD with Python": [
    { type: "Challenge", title: "Module 0 Capstone Script", desc: "Build a complete Python environment from scratch using NumPy and Matplotlib. Validates that you can manipulate arrays, write loops, and generate publication-quality plots." },
    { type: "Challenge", title: "1D Burgers' Equation Solver", desc: "Write a complete solver combining 1D convection and diffusion into the Burgers' equation — the foundation of non-linear fluid dynamics — using Finite Difference Methods." },
    { type: "Mini-Project", title: "Project B: Virtual Wind Tunnel", desc: "Simulate 2D fluid flow around a body in a custom domain using the full Navier-Stokes solver. Visualize velocity vectors, pressure fields, and streamlines using Matplotlib animations." },
    { type: "Capstone", title: "Project A: Stability Analysis Challenge", desc: "Experimentally find the CFL stability limit for your custom solver by systematically varying timestep and grid spacing. Produce a rigorous scientific report with grid independence data." },
  ],
  "Applied CFD with OpenFOAM": [
    { type: "Mini-Project", title: "Automated CAD Cleanup Pipeline", desc: "Import dirty industrial STEP files into FreeCAD, extract the negative fluid domain, and use Salome to export perfectly healed, watertight STLs with assigned boundary face groups." },
    { type: "Mini-Project", title: "The Perfect Boundary Layer", desc: "Set up a structured grid study using blockMesh grading. Calculate and apply specific expansion ratios to achieve target y+ values for a fully developed pipe flow simulation." },
    { type: "Capstone", title: "Industrial Hex-Dominant Meshing", desc: "Generate a highly controlled, multi-region snappyHexMesh for a complex valve assembly. Explicitly control feature snapping and layer addition while keeping cell count within a 16 GB RAM limit." },
    { type: "Mini-Project", title: "Aerodynamic Validation (pitzDaily)", desc: "Simulate a backward-facing step using the k-ω SST turbulence model. Extract line data with sampleDict and plot the reattachment length against empirical benchmark data in Jupyter." },
    { type: "Mini-Project", title: "Multiphase Sloshing Tank", desc: "Implement the Volume of Fluid (VOF) method using interFoam to track phase fractions during sloshing. Tune sub-cycling parameters to maintain a stable interface and controlled Courant number." },
    { type: "Mini-Project", title: "Turbomachinery MRF Characterization", desc: "Set up a Multiple Reference Frame cellZone for an axial fan. Automatically extract torque, thrust, and efficiency metrics into a CSV using OpenFOAM function objects." },
    { type: "Capstone", title: "EV Battery Cooling or IC Engine Sector", desc: "Choose your track: Perform a Conjugate Heat Transfer simulation on an EV cooling channel, or simulate a 2D moving IC Engine sector with Lagrangian spray injection." },
    { type: "Capstone", title: "End-to-End Design Optimization Loop", desc: "Build a completely automated pipeline where Dakota drives FreeCAD geometry changes, passes the new STL to OpenFOAM for meshing and solving, and extracts drag to find the aerodynamic optimum." },
  ],
};

const TOOLS = [
  { name: "Python", icon: Braces },
  { name: "Jupyter Notebooks", icon: Notebook },
  { name: "NumPy", icon: FunctionSquare },
  { name: "Matplotlib", icon: ChartColumn },
  { name: "OpenFOAM", icon: Wind },
  { name: "ParaView", icon: Eye },
  { name: "FreeCAD", icon: Box },
  { name: "Salome", icon: LayoutGrid },
  { name: "Dakota", icon: GitBranch },
  { name: "Linux/WSL2", icon: Terminal },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "Pandas", icon: Database },
];

const SKILLS = [
  "CFD Analysis", "Finite Difference Methods", "Navier-Stokes Equations",
  "Turbulence Modeling (RANS)", "blockMesh & snappyHexMesh", "Conjugate Heat Transfer",
  "Multiphase Flow (VOF)", "Workflow Automation (Bash/Python)", "Design Optimization",
  "Fluid Mechanics", "Engineering Thermodynamics", "Engineering Materials",
  "Modal Analysis", "V&V Methods", "Scientific Python Programming",
  "Turbine & Axial Fan Simulation"
];

// ── InputField Component ──────────────────────────────────────────
function InputField({ label, type = "text", placeholder, value, onChange, icon: Icon, valid, required = false }) {
  return (
    <div className="relative mb-3">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
        {label} {required && <span className="text-red-500 text-lg ml-0.5">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center">
            <Icon size={16} />
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full ${Icon ? "pl-9" : "pl-3"} pr-10 py-3 rounded-xl border-2 text-sm font-medium bg-white/80 outline-none transition-all duration-200
            ${valid === true ? "border-emerald-400 bg-emerald-50/60" : valid === false ? "border-red-300" : "border-gray-200 focus:border-emerald-400"}`}
        />
        {valid === true && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 flex items-center justify-center">
            <Check size={16} strokeWidth={3} className="block" />
          </span>
        )}
      </div>
    </div>
  );
}

// ── Hero Component ────────────────────────────────────────────────
function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bestDescribes, setBestDescribes] = useState("");
  const [qualification, setQualification] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  const getNextThreeDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return Array.from({ length: 3 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return { date: d.getDate(), month: months[d.getMonth()], day: days[d.getDay()], fullDate: d };
    });
  };
  const days = getNextThreeDays();
  const timeSlots = ["9am–12pm", "12pm–3pm", "3pm–6pm", "6pm–9pm"];

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!showSuccess) return;
    const inTimer = setTimeout(() => setPopupVisible(true), 30);
    const outTimer = setTimeout(() => setPopupVisible(false), 3000);
    const resetTimer = setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
      setName("");
      setEmail("");
      setPhone("");
      setBestDescribes("");
      setQualification("");
      setDepartment("");
      setSelectedDate(null);
      setSelectedTime("");
    }, 3400);
    return () => {
      clearTimeout(inTimer);
      clearTimeout(outTimer);
      clearTimeout(resetTimer);
    };
  }, [showSuccess]);

  const validateName = name.trim().length >= 2 ? true : name.length > 0 ? false : null;
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? true : email.length > 0 ? false : null;
  const validatePhone = /^[6-9]\d{9}$/.test(phone) ? true : phone.length > 0 ? false : null;
  const form1Valid = validateName === true && validateEmail === true && validatePhone === true;

  const handleContinue = () => {
    if (form1Valid) setStep(2);
  };

  const handleSchedule = async () => {
    setIsSubmitting(true);
    try {
      await axios.post("https://api.wrench-wise.com/api/mechanical-course/register", {
        name, email, phone, bestDescribes, qualification, department,
        preferredDate: selectedDate !== null ? `${days[selectedDate].date} ${days[selectedDate].month}` : "",
        preferredTime: selectedTime
      });
      setNotification({ show: true, message: "✅ Registration successful! An advisor will contact you shortly.", type: "success" });
      setShowSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setNotification({ show: true, message: "❌ Registration failed. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
      {notification.show && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
          <div className={`px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 text-sm font-medium ${notification.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`}>
            <span>{notification.message}</span>
            <button onClick={() => setNotification({ show: false, message: "", type: "" })} className="ml-2 hover:opacity-80">✕</button>
          </div>
        </div>
      )}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-6000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-6">
              Certification Program in<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 animate-gradient-x">
                Foundations of<br />
                <span className="whitespace-normal sm:whitespace-nowrap">
                  Computational Mechanics
                  <span className="font-normal">:</span>
                </span>
              </span><br />
              Fluid &amp; Thermal Systems
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Build industry-ready simulation skills from first-principles physics to writing your own CFD solvers and mastering OpenFOAM workflows.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-6 mb-6 sm:mb-10">
              {[
                "Master Fluid Mechanics and Heat Transfer",
                "Build CFD solvers using Python",
                "Run simulations in OpenFOAM",
                "Work on real-world engineering projects",
                "Build a strong GitHub portfolio"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm group hover:translate-x-1 transition-transform duration-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div id="form" className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 blur-xl animate-pulse-slow" />
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-h-[100vh]">
              <div className="p-6 sm:p-8">
                <p className="text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-1">Speak to an Advisor · Free Consultation</p>
                <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-4 sm:mb-6">Get Program Details</h3>
                <div className="transition-all duration-500" style={{ transform: step === 1 ? "translateX(0)" : "translateX(-110%)", opacity: step === 1 ? 1 : 0, position: step === 1 ? "relative" : "absolute", width: "100%", top: 0, left: 0 }}>
                  <InputField label="Full Name" placeholder="e.g. Yazhini" value={name} onChange={e => setName(e.target.value)} icon={User} valid={validateName} required />
                  <InputField label="Email Address" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} icon={Mail} valid={validateEmail} required />
                  <InputField label="Phone Number" type="tel" placeholder="10-digit mobile number" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} icon={Phone} valid={validatePhone} required />
                  <button onClick={handleContinue} disabled={!form1Valid} className={`w-full mt-3 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 ${form1Valid ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>Register Now <ArrowRight size={14} /></button>
                  <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-3">🔒 Your details are safe and never shared.</p>
                </div>
                <div className="transition-all duration-500" style={{ transform: step === 2 ? "translateX(0)" : "translateX(110%)", opacity: step === 2 ? 1 : 0, position: step === 2 ? "relative" : "absolute", width: "100%", top: 0, left: 0 }}>
                  <div className="mb-3 sm:mb-4">
                    <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">Which best describes you? <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select value={bestDescribes} onChange={(e) => setBestDescribes(e.target.value)} className="w-full border border-gray-200 rounded-lg p-2 text-xs sm:text-sm outline-none focus:border-emerald-400 bg-white appearance-none" required>
                        <option value="">Select an option</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Recent Graduate (Looking for a job)">Recent Graduate (Looking for a job)</option>
                        <option value="Student">Student</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">Qualification <span className="text-red-500">*</span></label>
                    <select value={qualification} onChange={e => setQualification(e.target.value)} className="w-full border border-gray-200 rounded-lg p-2 text-xs sm:text-sm outline-none focus:border-emerald-400" required>
                      <option value="">Select qualification</option>
                      <option value="Engineering (B.E / B.Tech / M.E / M.Tech)">Engineering (B.E / B.Tech / M.E / M.Tech)</option>
                      <option value="Diploma">Diploma</option>
                      <option value="ITI">ITI</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">Department / Field of Study <span className="text-red-500">*</span></label>
                    <select value={department} onChange={e => setDepartment(e.target.value)} className="w-full border border-gray-200 rounded-lg p-2 text-xs sm:text-sm outline-none focus:border-emerald-400" required>
                      <option value="">Select department</option>
                      <option value="Mechanical / Automobile">Mechanical / Automobile</option>
                      <option value="Electrical / Electronics">Electrical / Electronics</option>
                      <option value="Civil">Civil</option>
                      <option value="Computer Science / IT">Computer Science / IT</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">Preferred Date <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                      {days.map((d, i) => (
                        <button key={i} type="button" onClick={() => setSelectedDate(i)} className={`py-1.5 sm:py-2 rounded-lg border text-[10px] sm:text-xs font-semibold transition-all ${selectedDate === i ? "bg-emerald-600 text-white border-emerald-600" : "border-gray-200 text-gray-700 hover:border-emerald-300"}`}>{d.date} {d.month} <span className="hidden xs:inline">{d.day}</span></button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4 sm:mb-5">
                    <label className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase block mb-1.5 sm:mb-2">Preferred Time <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      {timeSlots.map(t => (
                        <button key={t} type="button" onClick={() => setSelectedTime(t)} className={`py-1.5 sm:py-2 rounded-lg border text-[10px] sm:text-xs font-semibold transition-all ${selectedTime === t ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-gray-200 text-gray-600 hover:border-emerald-300"}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <button onClick={handleSchedule} disabled={isSubmitting || !bestDescribes || !qualification || !department || selectedDate === null || !selectedTime} className="w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Submitting..." : "Schedule My Session ✓"}
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 -mt-2 -mr-2 sm:-mt-3 sm:-mr-3 pointer-events-none">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full p-1 shadow-lg animate-pulse"><Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" /></div>
            </div>
          </div>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className={`bg-white rounded-2xl shadow-2xl border border-emerald-100 px-6 sm:px-8 py-8 text-center w-full max-w-[280px] sm:max-w-[320px] ${popupVisible ? "popup-in" : "popup-out"}`}>
            <div className="check-bounce w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-200"><CalendarCheck className="text-white" size={28} strokeWidth={2} /></div>
            <h3 className="text-gray-900 text-lg font-extrabold mb-2">Thank You! 🎉</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Our team will contact you shortly to confirm your session.</p>
            <div className="mt-4 h-1 rounded-full bg-gray-100 overflow-hidden"><div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" style={{ width: popupVisible ? "0%" : "100%", transition: popupVisible ? "width 3s linear" : "none" }} /></div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes slide-down { from { opacity: 0; transform: translate(-50%, -20px); } to { opacity: 1; transform: translate(-50%, 0); } }
        .animate-slide-down { animation: slide-down 0.3s ease-out forwards; }
        @keyframes popIn { 0% { transform: scale(0.75) translateY(16px); opacity: 0; } 60% { transform: scale(1.04) translateY(-2px); opacity: 1; } 100% { transform: scale(1) translateY(0); opacity: 1; } }
        @keyframes popOut { 0% { transform: scale(1) translateY(0); opacity: 1; } 100% { transform: scale(0.85) translateY(12px); opacity: 0; } }
        .popup-in { animation: popIn 0.38s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .popup-out { animation: popOut 0.28s ease-in forwards; }
        @keyframes checkBounce { 0%,100% { transform: scale(1); } 40% { transform: scale(1.25); } 70% { transform: scale(0.9); } }
        .check-bounce { animation: checkBounce 0.6s ease 0.3s both; }
      `}</style>
    </section>
  );
}

// ── Program at a Glance ────────────────────────────────────────────
function ProgramGlance() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-4"><span className="text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-2"><Sparkles className="w-3 h-3" /> Program at a Glance</span></div>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">Everything included in one program</h2>
          <p className="text-center text-gray-500 text-sm sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto px-4">Built to take you from zero experience to a job-ready portfolio with guaranteed interview opportunities.</p>
        </Reveal>
        <div className="mt-12 rounded-2xl overflow-hidden border border-gray-200 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAM_DATA.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className={`group p-6 sm:p-7 relative bg-white border-gray-200 ${i % 4 !== 3 ? "lg:border-r" : ""} ${i < 4 ? "border-b" : ""} sm:border-b`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative z-10">
                    <div className="mb-3"><Icon className="w-7 h-7 text-emerald-500 group-hover:scale-110 group-hover:rotate-3 transition" /></div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-cyan-600 mb-1">{item.num}</p>
                    <p className="text-gray-800 font-bold text-sm mb-1">{item.label}</p>
                    <p className="text-gray-400 text-xs leading-snug">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Learning Path ──────────────────────────────────────────────────
function LearningPath() {
  const [lineVisible, setLineVisible] = useState(false);
  const lineRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLineVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="block text-center text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">Learning Path</span>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">Your Road to a Career in Simulation</h2>
          <p className="text-center text-gray-500 text-sm sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto">From first principles to placement - what your learning journey looks like.</p>
        </Reveal>
        <div className="relative" ref={lineRef}>
          <div className="hidden lg:block absolute top-10 left-1/2 transform -translate-x-1/2 h-[3px] rounded-full" style={{ width: lineVisible ? "80%" : "0%", opacity: lineVisible ? 1 : 0, transition: "width 1s ease, opacity 0.6s ease", background: "linear-gradient(90deg, #34d399, #10b981, #06b6d4)", boxShadow: lineVisible ? "0 0 15px rgba(16,185,129,0.6), 0 0 30px rgba(6,182,212,0.4)" : "none" }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {LEARNING_PATH.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step} delay={i * 100}>
                  <div className="relative flex flex-col items-center text-center group cursor-default">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-emerald-200 shadow-md flex flex-col items-center justify-center mb-4 sm:mb-5 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:border-emerald-400 group-hover:bg-gradient-to-br from-emerald-50 to-cyan-50">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300 mb-1" />
                      <span className="text-emerald-400 text-[8px] sm:text-[10px] font-bold transition-all duration-300 group-hover:text-emerald-600">{step.step}</span>
                      <span className="text-gray-800 font-bold text-[10px] sm:text-sm transition-colors duration-300 group-hover:text-emerald-700">{step.title}</span>
                      <div className="absolute inset-0 rounded-2xl bg-emerald-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed transition-all duration-300 group-hover:text-gray-700 max-w-[160px] sm:max-w-none">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Courses Section ────────────────────────────────────────────────
function Courses() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const toggleCourse = (num) => setExpandedCourse(expandedCourse === num ? null : num);
  return (
    <section id="courses" className="py-12 sm:py-16 bg-white scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="block text-center text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">Course Syllabus</span>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">Three Courses. One Complete Program.</h2>
          <p className="text-center text-gray-500 text-sm sm:text-lg mb-4 max-w-4xl mx-auto leading-relaxed px-2"><span className="block">Taken in sequence, these three courses form a complete foundation in computational mechanics</span><span className="block">– from physics intuition to production‑grade CFD workflows.</span></p>
          <p className="text-center text-gray-400 text-xs sm:text-sm mb-6">Our curriculum is continuously refined by talking to company experts and simulation engineers.</p>
          <div className="flex justify-center mb-12"><a href="/pdf/mechanical.pdf" download="mechanical.pdf" className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">Download Syllabus <Download className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-1" /></a></div>
        </Reveal>
        <div className="space-y-4">
          {COURSES.map((course, idx) => {
            const isExpanded = expandedCourse === course.num;
            const colorMap = { emerald: { border: "hover:border-emerald-200", badge: "bg-emerald-100 text-emerald-700", icon: "text-emerald-500" }, violet: { border: "hover:border-violet-200", badge: "bg-violet-100 text-violet-700", icon: "text-violet-500" }, orange: { border: "hover:border-orange-200", badge: "bg-orange-100 text-orange-700", icon: "text-orange-500" } };
            const colors = colorMap[course.color];
            const Icon = course.icon;
            return (
              <Reveal key={course.num} delay={idx * 80}>
                <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ${colors.border}`}>
                  <button onClick={() => toggleCourse(course.num)} className="w-full px-6 py-5 flex justify-between items-center text-left transition-colors duration-200 hover:bg-gray-50 rounded-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>{course.tag}</span>
                      <div><h3 className="text-gray-900 text-lg sm:text-xl font-bold">{course.title}</h3><p className="text-gray-400 text-xs mt-0.5">{course.duration}</p></div>
                    </div>
                    <div className="flex items-center gap-3"><Icon className={`w-5 h-5 ${colors.icon} opacity-60`} /><ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} /></div>
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-gray-600 text-sm mb-5">{course.desc}</p>
                      <div className="space-y-3">
                        {course.modules.map((mod) => (
                          <div key={mod.label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-sm transition-all duration-200">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${course.color === "emerald" ? "from-emerald-500 to-cyan-500" : course.color === "violet" ? "from-violet-500 to-purple-500" : "from-orange-500 to-red-500"} text-white self-start sm:self-auto flex-shrink-0`}>{mod.label}</span>
                            <div><p className="text-gray-800 text-xs font-semibold">{mod.title}</p><p className="text-gray-400 text-[10px] sm:text-[11px] leading-snug mt-0.5">{mod.topics}</p></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Projects Section ───────────────────────────────────────────────
function Projects() {
  const [expandedPhase, setExpandedPhase] = useState(null);
  const phases = Object.keys(PROJECTS);
  const typeColors = { Challenge: "bg-emerald-100 text-emerald-700 border-emerald-200", "Mini-Project": "bg-violet-100 text-violet-700 border-violet-200", Capstone: "bg-orange-100 text-orange-700 border-orange-200" };
  const togglePhase = (phase) => setExpandedPhase(expandedPhase === phase ? null : phase);
  return (
    <section id="projects" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="block text-center text-emerald-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">Hands‑On Projects</span>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">Real Problems. Real Simulations.</h2>
          <p className="text-center text-gray-500 text-sm sm:text-lg mb-8 max-w-2xl mx-auto">Every phase comes with mini‑projects and a capstone. Click any phase to see what you will build.</p>
        </Reveal>
        <div className="space-y-4">
          {phases.map((phase, idx) => {
            const isExpanded = expandedPhase === phase;
            const projectsList = PROJECTS[phase];
            return (
              <Reveal key={phase} delay={idx * 80}>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <button onClick={() => togglePhase(phase)} className="w-full px-6 py-5 flex justify-between items-center text-left transition-colors duration-200 hover:bg-gray-50 rounded-2xl">
                    <div><span className="text-emerald-600 text-xs font-semibold tracking-wider uppercase">Phase {idx + 1}</span><h3 className="text-gray-900 text-lg sm:text-xl font-bold mt-1">{phase}</h3></div>
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projectsList.map((project) => (
                          <div key={project.title} className="border border-gray-100 rounded-xl p-4 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                            <div className="flex items-center gap-2 mb-3"><span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${typeColors[project.type] || "bg-gray-100 text-gray-600 border-gray-200"}`}>{project.type}</span></div>
                            <h4 className="text-gray-900 font-bold text-sm mb-2 group-hover:text-emerald-700 transition-colors">{project.title}</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">{project.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Tools & Skills ─────────────────────────────────────────────────
function ToolsSkills() {
  return (
    <section id="tools" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16"><span className="text-emerald-600 text-xs font-semibold tracking-widest uppercase">Tools & Skills</span><h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">What You'll Master</h2><p className="text-gray-500 text-sm sm:text-lg mt-3 max-w-2xl mx-auto">Industry-standard tools used in real engineering workflows, paired with the foundational skills that make you employable.</p></div>
        <div className="mb-12"><h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center gap-2"><Code className="w-5 h-5 text-emerald-500" /> 12+ Tools to Master</h3><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">{TOOLS.map((tool) => { const Icon = tool.icon; return (<div key={tool.name} className="bg-gray-50 border border-gray-200 rounded-xl py-5 flex flex-col items-center justify-center gap-2 text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 cursor-pointer group"><Icon className="w-5 h-5 text-gray-500 group-hover:text-emerald-600" strokeWidth={1.5} /><span className="text-xs sm:text-sm font-medium text-center px-1">{tool.name}</span></div>); })}</div></div>
        <div><h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center gap-2"><Star className="w-5 h-5 text-violet-500" /> 16+ Skills to Master</h3><div className="flex flex-wrap gap-2">{SKILLS.map((skill) => (<span key={skill} className="px-4 py-2 rounded-full border border-gray-200 text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 transition-all duration-300 cursor-pointer">{skill}</span>))}</div></div>
      </div>
    </section>
  );
}

// ── Pricing Section (original right‑card design, consistent styling) ──
function Pricing() {
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="block text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            One Investment.<br />
            Complete Career Launch.
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT CARD - EMI Details */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-md">
            <p className="text-gray-500 text-sm mb-2">EMI starting from</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-emerald-600 mb-2">
              ₹4,166{" "}
              <span className="text-lg text-gray-400 font-medium">/mo</span>
            </h2>
            <p className="text-gray-800 font-semibold mb-1">
              Total Program Fee: ₹75,000
            </p>
            <p className="text-gray-400 text-sm mb-6">
              18-month no-cost EMI available with ₹20,000 upfront commitment
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToForm} className="w-full sm:w-auto px-6 py-3 rounded-xl border border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-50 transition">
                Talk to Advisor
              </button>
              <button onClick={scrollToForm} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
                View EMI Options
              </button>
            </div>
          </div>

          {/* RIGHT CARD - Career Outcomes (original list style) */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-md">
            <h3 className="text-emerald-600 font-semibold tracking-widest text-sm mb-6">
              CAREER OUTCOMES
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600">EMI (monthly, 18 months)</span>
                <span className="text-emerald-600 font-semibold">₹4,166/mo</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600">Total Program Fee</span>
                <span className="text-emerald-600 font-semibold">₹75,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600">Guaranteed Interviews</span>
                <span className="text-emerald-600 font-semibold">5</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600">Capstone Projects</span>
                <span className="text-emerald-600 font-semibold">5+</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600">Mini Projects</span>
                <span className="text-emerald-600 font-semibold">8+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Industry Tracks</span>
                <span className="text-emerald-600 font-semibold">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Root Component ─────────────────────────────────────────────────
export default function Mech() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes blob { 0% { transform: translate(0px,0px) scale(1); } 33% { transform: translate(30px,-50px) scale(1.1); } 66% { transform: translate(-20px,20px) scale(0.9); } 100% { transform: translate(0px,0px) scale(1); } }
        @keyframes gradient-x { 0%,100% { background-size:200% 200%; background-position:left center; } 50% { background-size:200% 200%; background-position:right center; } }
        @keyframes pulse-slow { 0%,100% { opacity:0.6; } 50% { opacity:1; } }
        @keyframes bounce-subtle { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-5px); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
        button, a, select, input[type="submit"], [role="button"], [onclick] { cursor: pointer; }
      `}</style>
      <Hero />
      <ProgramGlance />
      <LearningPath />
      <Courses />
      <Projects />
      <ToolsSkills />
      <Pricing />
    </div>
  );
}