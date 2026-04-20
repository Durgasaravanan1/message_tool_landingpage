// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import Confetti from 'react-confetti';
// // import { 
// //   FaCreditCard, FaGooglePay, FaUniversity, FaLock, FaShieldAlt, 
// //   FaArrowRight, FaCheckCircle, FaRocket, FaWhatsapp, FaEnvelope, 
// //   FaUsers, FaChartLine 
// // } from 'react-icons/fa';

// // const CheckoutPage = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const { plan = 'Growth', price = '₹2,499' } = location.state || { plan: 'Growth', price: '₹2,499' };
  
// //   // State for checkout form
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     businessName: '',
// //     paymentMethod: 'card'
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isComplete, setIsComplete] = useState(false);
// //   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

// //   // Plan details
// //   const planDetails = {
// //     Starter: { price: '₹999', features: ['WhatsApp campaigns', 'Basic email campaigns', 'Up to 1,000 contacts', 'Standard support'] },
// //     Growth: { price: '₹2,499', features: ['WhatsApp + Email campaigns', 'Automation flows', 'AI content generator', 'Up to 5,000 contacts', 'Priority support'] },
// //     Pro: { price: '₹4,999', features: ['Unlimited campaigns', 'Advanced automation', 'Team inbox', 'Advanced analytics', 'Premium support'] }
// //   };
// //   const currentPlan = planDetails[plan] || planDetails.Growth;

// //   // Window size for confetti
// //   useEffect(() => {
// //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
// //     const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     // Simulate payment processing
// //     setTimeout(() => {
// //       setIsSubmitting(false);
// //       setIsComplete(true);
// //     }, 1500);
// //   };

// //   // Steps for thank you page
// //   const steps = [
// //     { icon: FaWhatsapp, title: 'Connect WhatsApp', desc: 'Link your WhatsApp Business account', color: '#25D366' },
// //     { icon: FaEnvelope, title: 'Add Email', desc: 'Connect your email provider (Gmail, Outlook)', color: '#EA4335' },
// //     { icon: FaUsers, title: 'Upload Contacts', desc: 'Import your customer list (CSV/Excel)', color: '#1A3F78' },
// //     { icon: FaChartLine, title: 'Launch Campaign', desc: 'Create & send your first message', color: '#4ABA99' }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
// //       {/* Confetti – only on thank you page */}
// //       {isComplete && (
// //         <Confetti
// //           width={windowSize.width}
// //           height={windowSize.height}
// //           recycle={false}
// //           numberOfPieces={200}
// //           colors={['#4ABA99', '#1A3F78', '#F59E0B', '#10B981']}
// //         />
// //       )}

// //       {/* Decorative circles */}
// //       <div className="absolute top-20 left-10 w-64 h-64 bg-[#4ABA99]/10 rounded-full blur-3xl" />
// //       <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1A3F78]/10 rounded-full blur-3xl" />

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         <AnimatePresence mode="wait">
// //           {!isComplete ? (
// //             // ---------- CHECKOUT FORM ----------
// //             <motion.div
// //               key="checkout"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ duration: 0.4 }}
// //             >
// //               {/* Header */}
// //               <motion.div 
// //                 initial={{ opacity: 0, y: -20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="text-center mb-12"
// //               >
// //                 <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] bg-clip-text text-transparent">
// //                   Complete Your Subscription
// //                 </h1>
// //                 <p className="text-gray-500 mt-2">Secure checkout – 7‑day free trial, cancel anytime</p>
// //               </motion.div>

// //               <div className="grid lg:grid-cols-5 gap-8">
// //                 {/* Form Section */}
// //                 <motion.div 
// //                   initial={{ opacity: 0, x: -30 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ delay: 0.1 }}
// //                   className="lg:col-span-3"
// //                 >
// //                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
// //                     <form onSubmit={handleSubmit} className="space-y-6">
// //                       <div>
// //                         <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
// //                         <input
// //                           type="text"
// //                           name="name"
// //                           required
// //                           value={formData.name}
// //                           onChange={handleChange}
// //                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4ABA99] focus:ring-2 focus:ring-[#4ABA99]/20 transition-all duration-200 outline-none"
// //                           placeholder="John Doe"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
// //                         <input
// //                           type="email"
// //                           name="email"
// //                           required
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4ABA99] focus:ring-2 focus:ring-[#4ABA99]/20 transition-all duration-200 outline-none"
// //                           placeholder="hello@yourbusiness.com"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
// //                         <input
// //                           type="tel"
// //                           name="phone"
// //                           required
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4ABA99] focus:ring-2 focus:ring-[#4ABA99]/20 transition-all duration-200 outline-none"
// //                           placeholder="+91 98765 43210"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name *</label>
// //                         <input
// //                           type="text"
// //                           name="businessName"
// //                           required
// //                           value={formData.businessName}
// //                           onChange={handleChange}
// //                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4ABA99] focus:ring-2 focus:ring-[#4ABA99]/20 transition-all duration-200 outline-none"
// //                           placeholder="Your Business"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Method</label>
// //                         <div className="grid grid-cols-3 gap-3">
// //                           {[
// //                             { id: 'card', icon: FaCreditCard, label: 'Credit / Debit Card' },
// //                             { id: 'upi', icon: FaGooglePay, label: 'UPI (GPay, PhonePe)' },
// //                             { id: 'netbanking', icon: FaUniversity, label: 'Net Banking' }
// //                           ].map((method) => (
// //                             <button
// //                               key={method.id}
// //                               type="button"
// //                               onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
// //                               className={`relative p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
// //                                 formData.paymentMethod === method.id
// //                                   ? 'border-[#4ABA99] bg-[#4ABA99]/5 shadow-md'
// //                                   : 'border-gray-200 hover:border-[#4ABA99] hover:bg-gray-50'
// //                               }`}
// //                             >
// //                               <method.icon className={`text-2xl ${formData.paymentMethod === method.id ? 'text-[#4ABA99]' : 'text-gray-500'}`} />
// //                               <span className="text-xs font-medium text-gray-600">{method.label}</span>
// //                               {formData.paymentMethod === method.id && (
// //                                 <motion.div
// //                                   initial={{ scale: 0 }}
// //                                   animate={{ scale: 1 }}
// //                                   className="absolute -top-2 -right-2 w-5 h-5 bg-[#4ABA99] rounded-full flex items-center justify-center"
// //                                 >
// //                                   <FaCheckCircle className="text-white text-xs" />
// //                                 </motion.div>
// //                               )}
// //                             </button>
// //                           ))}
// //                         </div>
// //                       </div>
// //                       <motion.button
// //                         type="submit"
// //                         disabled={isSubmitting}
// //                         whileHover={{ scale: 1.02 }}
// //                         whileTap={{ scale: 0.98 }}
// //                         className={`w-full py-4 rounded-xl font-bold text-white text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
// //                           isSubmitting
// //                             ? 'bg-gray-400 cursor-not-allowed'
// //                             : 'bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] hover:shadow-xl'
// //                         }`}
// //                       >
// //                         {isSubmitting ? (
// //                           <>
// //                             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                             </svg>
// //                             Processing...
// //                           </>
// //                         ) : (
// //                           <>
// //                             Complete Purchase <FaArrowRight />
// //                           </>
// //                         )}
// //                       </motion.button>
// //                       <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-4">
// //                         <span className="flex items-center gap-1"><FaLock className="text-[#4ABA99]" /> Secure SSL</span>
// //                         <span className="flex items-center gap-1"><FaShieldAlt className="text-[#4ABA99]" /> 7‑day free trial</span>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </motion.div>

// //                 {/* Order Summary */}
// //                 <motion.div 
// //                   initial={{ opacity: 0, x: 30 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ delay: 0.2 }}
// //                   className="lg:col-span-2"
// //                 >
// //                   <div className="sticky top-24 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden">
// //                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ABA99]/5 rounded-full blur-3xl -z-0" />
// //                     <h2 className="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
// //                       <span className="w-1 h-6 bg-gradient-to-b from-[#1A3F78] to-[#4ABA99] rounded-full"></span>
// //                       Order Summary
// //                     </h2>
// //                     <div className="space-y-4">
// //                       <div className="flex justify-between items-center pb-3 border-b border-gray-100">
// //                         <span className="text-gray-500">Selected Plan</span>
// //                         <span className="font-bold text-gray-800">{plan}</span>
// //                       </div>
// //                       <div className="flex justify-between items-center pb-3 border-b border-gray-100">
// //                         <span className="text-gray-500">Price</span>
// //                         <span className="font-bold text-2xl text-[#4ABA99]">{currentPlan.price}</span>
// //                       </div>
// //                       <div className="flex justify-between items-center pb-3 border-b border-gray-100">
// //                         <span className="text-gray-500">Billing Cycle</span>
// //                         <span className="font-semibold text-gray-700">Monthly (auto-renew)</span>
// //                       </div>
// //                       <div className="pt-2">
// //                         <p className="text-sm font-semibold text-gray-700 mb-2">What's included:</p>
// //                         <ul className="space-y-2">
// //                           {currentPlan.features.map((feature, idx) => (
// //                             <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
// //                               <FaCheckCircle className="text-[#4ABA99] text-xs flex-shrink-0" />
// //                               {feature}
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                       <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200">
// //                         <div className="flex justify-between items-center">
// //                           <span className="font-black text-gray-800">Total Due Today</span>
// //                           <span className="font-black text-2xl bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] bg-clip-text text-transparent">
// //                             {currentPlan.price}
// //                           </span>
// //                         </div>
// //                         <p className="text-xs text-gray-400 mt-2">
// //                           *WhatsApp API charges are billed separately by Meta based on usage.
// //                         </p>
// //                       </div>
// //                       <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-100">
// //                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-60" />
// //                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-60" />
// //                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Amex_logo.svg/1280px-Amex_logo.svg.png" alt="Amex" className="h-6 opacity-60" />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               </div>
// //             </motion.div>
// //           ) : (
// //             // ---------- THANK YOU PAGE ----------
// //             <motion.div
// //               key="thankyou"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ duration: 0.4 }}
// //               className="max-w-4xl mx-auto"
// //             >
// //               <div className="text-center mb-12">
// //                 <motion.div
// //                   initial={{ scale: 0 }}
// //                   animate={{ scale: 1 }}
// //                   transition={{ type: 'spring', delay: 0.2 }}
// //                   className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#4ABA99] to-[#1A3F78] shadow-xl mb-6"
// //                 >
// //                   <FaCheckCircle className="text-5xl text-white" />
// //                 </motion.div>
// //                 <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] bg-clip-text text-transparent">
// //                   Welcome to WYN Reach! 🚀
// //                 </h1>
// //                 <p className="text-gray-600 text-lg mt-3">
// //                   Your {plan} plan ({currentPlan.price}/month) is now active. You're ready to grow your business.
// //                 </p>
// //               </div>

// //               {/* Next Steps Card */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.3 }}
// //                 className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 mb-8"
// //               >
// //                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
// //                   <FaRocket className="text-[#4ABA99]" />
// //                   Your Next Steps
// //                 </h2>
// //                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //                   {steps.map((step, idx) => (
// //                     <motion.div
// //                       key={idx}
// //                       initial={{ opacity: 0, y: 20 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       transition={{ delay: 0.4 + idx * 0.1 }}
// //                       className="relative group"
// //                     >
// //                       <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
// //                         <div className="flex items-center gap-3 mb-2">
// //                           <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${step.color}15` }}>
// //                             <step.icon className="text-xl" style={{ color: step.color }} />
// //                           </div>
// //                           <span className="text-xs font-bold text-gray-400">Step {idx + 1}</span>
// //                         </div>
// //                         <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
// //                         <p className="text-xs text-gray-500">{step.desc}</p>
// //                       </div>
// //                       {idx < steps.length - 1 && (
// //                         <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
// //                           <FaArrowRight className="text-gray-300 text-sm" />
// //                         </div>
// //                       )}
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </motion.div>

// //               {/* Action Buttons */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.6 }}
// //                 className="flex flex-col sm:flex-row gap-4 justify-center"
// //               >
// //                 <button
// //                   onClick={() => navigate('/dashboard')}
// //                   className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
// //                 >
// //                   Go to Dashboard <FaArrowRight />
// //                 </button>
// //                 <button
// //                   onClick={() => window.open('https://help.wynreach.com', '_blank')}
// //                   className="px-8 py-4 rounded-xl bg-white text-[#1A3F78] font-bold text-lg border-2 border-[#1A3F78]/20 hover:border-[#1A3F78]/40 transition-all duration-200 flex items-center justify-center gap-2"
// //                 >
// //                   Watch Tutorial
// //                 </button>
// //               </motion.div>

// //               <p className="text-center text-gray-400 text-sm mt-8">
// //                 Need help? Contact our support at <a href="mailto:support@wynreach.com" className="text-[#4ABA99] hover:underline">support@wynreach.com</a>
// //               </p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import Confetti from 'react-confetti';
// import { 
//   FaCreditCard, FaGooglePay, FaUniversity, FaLock, FaShieldAlt, 
//   FaArrowRight, FaCheckCircle, FaRocket, FaWhatsapp, FaEnvelope, 
//   FaUsers, FaChartLine, FaUser, FaEnvelopeOpen, FaPhone, FaBuilding,
//   FaGem, FaStar
// } from 'react-icons/fa';

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { plan = 'Growth', price = '₹2,499' } = location.state || { plan: 'Growth', price: '₹2,499' };
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     businessName: '',
//     paymentMethod: 'card'
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isComplete, setIsComplete] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   const planDetails = {
//     Starter: { price: '₹999', features: ['WhatsApp campaigns', 'Basic email campaigns', 'Up to 1,000 contacts', 'Standard support'], icon: FaGem },
//     Growth: { price: '₹2,499', features: ['WhatsApp + Email campaigns', 'Automation flows', 'AI content generator', 'Up to 5,000 contacts', 'Priority support'], icon: FaStar },
//     Pro: { price: '₹4,999', features: ['Unlimited campaigns', 'Advanced automation', 'Team inbox', 'Advanced analytics', 'Premium support'], icon: FaRocket }
//   };
//   const currentPlan = planDetails[plan] || planDetails.Growth;
//   const PlanIcon = currentPlan.icon;

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsComplete(true);
//     }, 1500);
//   };

//   // Refined steps – cleaner layout
//   const steps = [
//     { icon: FaWhatsapp, title: 'Connect WhatsApp', desc: 'Link your WhatsApp Business account', color: '#25D366', bg: '#E8F8EF' },
//     { icon: FaEnvelope, title: 'Add Email', desc: 'Connect your email provider (Gmail, Outlook)', color: '#EA4335', bg: '#FEF2F2' },
//     { icon: FaUsers, title: 'Upload Contacts', desc: 'Import your customer list (CSV/Excel)', color: '#1A3F78', bg: '#EBF5FF' },
//     { icon: FaChartLine, title: 'Launch Campaign', desc: 'Create & send your first message', color: '#4ABA99', bg: '#E8F8F2' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {isComplete && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           recycle={false}
//           numberOfPieces={200}
//           colors={['#4ABA99', '#1A3F78', '#F59E0B', '#10B981']}
//         />
//       )}

//       <div className="absolute top-20 left-10 w-64 h-64 bg-[#4ABA99]/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1A3F78]/10 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <AnimatePresence mode="wait">
//           {!isComplete ? (
//             <motion.div
//               key="checkout"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//             >
//               {/* Header with enhanced styling */}
//               <motion.div 
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center mb-12"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A3F78] to-[#4ABA99] shadow-lg mb-4">
//                   <PlanIcon className="text-3xl text-white" />
//                 </div>
//                 <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] bg-clip-text text-transparent">
//                   Complete Your Subscription
//                 </h1>
//                 <p className="text-gray-500 mt-2">Secure checkout – 7‑day free trial, cancel anytime</p>
//               </motion.div>

//               <div className="grid lg:grid-cols-5 gap-8">
//                 {/* Form Section – Boosted design */}
//                 <motion.div 
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className="lg:col-span-3"
//                 >
//                   <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       {/* Name field with icon */}
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                           <FaUser className="text-[#4ABA99] text-xs" /> Full Name *
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           required
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4ABA99] focus:ring-2 focus:ring-[#4ABA99]/20 transition-all duration-200 outline-none bg-gray-50/50"
//                           placeholder="John Doe"
//                         />
//                       </div>

//                       {/* Email field */}
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                           <FaEnvelopeOpen className="text-[#4ABA99] text-xs" /> Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4ABA99] focus:ring-2 focus:ring-[#4ABA99]/20 transition-all duration-200 outline-none bg-gray-50/50"
//                           placeholder="hello@yourbusiness.com"
//                         />
//                       </div>

//                       {/* Phone field */}
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                           <FaPhone className="text-[#4ABA99] text-xs" /> Phone Number *
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           required
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4ABA99] focus:ring-2 focus:ring-[#4ABA99]/20 transition-all duration-200 outline-none bg-gray-50/50"
//                           placeholder="+91 98765 43210"
//                         />
//                       </div>

//                       {/* Business Name field */}
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                           <FaBuilding className="text-[#4ABA99] text-xs" /> Business Name *
//                         </label>
//                         <input
//                           type="text"
//                           name="businessName"
//                           required
//                           value={formData.businessName}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4ABA99] focus:ring-2 focus:ring-[#4ABA99]/20 transition-all duration-200 outline-none bg-gray-50/50"
//                           placeholder="Your Business"
//                         />
//                       </div>

//                       {/* Payment Method – cleaner buttons */}
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Method</label>
//                         <div className="grid grid-cols-3 gap-3">
//                           {[
//                             { id: 'card', icon: FaCreditCard, label: 'Card' },
//                             { id: 'upi', icon: FaGooglePay, label: 'UPI' },
//                             { id: 'netbanking', icon: FaUniversity, label: 'Net Banking' }
//                           ].map((method) => (
//                             <button
//                               key={method.id}
//                               type="button"
//                               onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
//                               className={`relative py-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-1 ${
//                                 formData.paymentMethod === method.id
//                                   ? 'border-[#4ABA99] bg-[#4ABA99]/5 shadow-md'
//                                   : 'border-gray-200 hover:border-[#4ABA99] hover:bg-gray-50'
//                               }`}
//                             >
//                               <method.icon className={`text-2xl ${formData.paymentMethod === method.id ? 'text-[#4ABA99]' : 'text-gray-500'}`} />
//                               <span className="text-xs font-medium text-gray-600">{method.label}</span>
//                               {formData.paymentMethod === method.id && (
//                                 <motion.div
//                                   initial={{ scale: 0 }}
//                                   animate={{ scale: 1 }}
//                                   className="absolute -top-2 -right-2 w-5 h-5 bg-[#4ABA99] rounded-full flex items-center justify-center"
//                                 >
//                                   <FaCheckCircle className="text-white text-xs" />
//                                 </motion.div>
//                               )}
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Submit Button */}
//                       <motion.button
//                         type="submit"
//                         disabled={isSubmitting}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className={`w-full py-4 rounded-xl font-bold text-white text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
//                           isSubmitting
//                             ? 'bg-gray-400 cursor-not-allowed'
//                             : 'bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] hover:shadow-xl'
//                         }`}
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             Processing...
//                           </>
//                         ) : (
//                           <>
//                             Complete Purchase <FaArrowRight />
//                           </>
//                         )}
//                       </motion.button>

//                       {/* Security badges */}
//                       <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-4">
//                         <span className="flex items-center gap-1"><FaLock className="text-[#4ABA99]" /> Secure SSL</span>
//                         <span className="flex items-center gap-1"><FaShieldAlt className="text-[#4ABA99]" /> 7‑day free trial</span>
//                       </div>
//                     </form>
//                   </div>
//                 </motion.div>

//                 {/* Order Summary – enhanced */}
//                 <motion.div 
//                   initial={{ opacity: 0, x: 30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="lg:col-span-2"
//                 >
//                   <div className="sticky top-24 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ABA99]/5 rounded-full blur-3xl -z-0" />
//                     <h2 className="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
//                       <span className="w-1 h-6 bg-gradient-to-b from-[#1A3F78] to-[#4ABA99] rounded-full"></span>
//                       Order Summary
//                     </h2>
//                     <div className="space-y-4">
//                       <div className="flex justify-between items-center pb-3 border-b border-gray-100">
//                         <span className="text-gray-500">Selected Plan</span>
//                         <span className="font-bold text-gray-800 flex items-center gap-2">
//                           <PlanIcon className="text-[#4ABA99] text-sm" /> {plan}
//                         </span>
//                       </div>
//                       <div className="flex justify-between items-center pb-3 border-b border-gray-100">
//                         <span className="text-gray-500">Price</span>
//                         <span className="font-bold text-2xl text-[#4ABA99]">{currentPlan.price}</span>
//                       </div>
//                       <div className="flex justify-between items-center pb-3 border-b border-gray-100">
//                         <span className="text-gray-500">Billing Cycle</span>
//                         <span className="font-semibold text-gray-700">Monthly (auto-renew)</span>
//                       </div>
//                       <div className="pt-2">
//                         <p className="text-sm font-semibold text-gray-700 mb-2">What's included:</p>
//                         <ul className="space-y-2">
//                           {currentPlan.features.map((feature, idx) => (
//                             <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                               <FaCheckCircle className="text-[#4ABA99] text-xs flex-shrink-0" />
//                               {feature}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200">
//                         <div className="flex justify-between items-center">
//                           <span className="font-black text-gray-800">Total Due Today</span>
//                           <span className="font-black text-2xl bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] bg-clip-text text-transparent">
//                             {currentPlan.price}
//                           </span>
//                         </div>
//                         <p className="text-xs text-gray-400 mt-2">
//                           *WhatsApp API charges are billed separately by Meta based on usage.
//                         </p>
//                       </div>
//                       <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-100">
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-60" />
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-60" />
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Amex_logo.svg/1280px-Amex_logo.svg.png" alt="Amex" className="h-6 opacity-60" />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ) : (
//             // ---------- THANK YOU PAGE – Refined Next Steps ----------
//             <motion.div
//               key="thankyou"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="max-w-4xl mx-auto"
//             >
//               <div className="text-center mb-12">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: 'spring', delay: 0.2 }}
//                   className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#4ABA99] to-[#1A3F78] shadow-xl mb-6"
//                 >
//                   <FaCheckCircle className="text-5xl text-white" />
//                 </motion.div>
//                 <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] bg-clip-text text-transparent">
//                   Welcome to WYN Reach! 🚀
//                 </h1>
//                 <p className="text-gray-600 text-lg mt-3">
//                   Your {plan} plan ({currentPlan.price}/month) is now active. You're ready to grow your business.
//                 </p>
//               </div>

//               {/* Next Steps – Clean timeline style */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 mb-8"
//               >
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//                   <FaRocket className="text-[#4ABA99]" />
//                   Your Next Steps
//                 </h2>
//                 <div className="space-y-4">
//                   {steps.map((step, idx) => (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.4 + idx * 0.1 }}
//                       className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-white transition-all duration-200 border border-transparent hover:border-gray-100"
//                     >
//                       <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: step.bg }}>
//                         <step.icon className="text-2xl" style={{ color: step.color }} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-1">
//                           <h3 className="font-bold text-gray-800">{step.title}</h3>
//                           <span className="text-xs font-medium text-gray-400">Step {idx + 1}</span>
//                         </div>
//                         <p className="text-sm text-gray-500">{step.desc}</p>
//                       </div>
//                       {idx < steps.length - 1 && (
//                         <div className="hidden sm:block text-gray-300">
//                           <FaArrowRight className="text-sm" />
//                         </div>
//                       )}
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Action Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center"
//               >
//                 <button
//                   onClick={() => navigate('/dashboard')}
//                   className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1A3F78] to-[#4ABA99] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
//                 >
//                   Go to Dashboard <FaArrowRight />
//                 </button>
//                 <button
//                   onClick={() => window.open('https://help.wynreach.com', '_blank')}
//                   className="px-8 py-4 rounded-xl bg-white text-[#1A3F78] font-bold text-lg border-2 border-[#1A3F78]/20 hover:border-[#1A3F78]/40 transition-all duration-200 flex items-center justify-center gap-2"
//                 >
//                   Watch Tutorial
//                 </button>
//               </motion.div>

//               <p className="text-center text-gray-400 text-sm mt-8">
//                 Need help? Contact our support at <a href="mailto:support@wynreach.com" className="text-[#4ABA99] hover:underline">support@wynreach.com</a>
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { 
  FaCreditCard, FaGooglePay, FaUniversity, FaLock, FaShieldAlt, 
  FaArrowRight, FaCheckCircle, FaRocket, FaWhatsapp, FaEnvelope, 
  FaUsers, FaChartLine, FaUser, FaEnvelopeOpen, FaPhone, FaBuilding,
  FaGem, FaStar
} from 'react-icons/fa';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { plan = 'Growth', price = '₹2,499' } = location.state || { plan: 'Growth', price: '₹2,499' };
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    paymentMethod: 'card'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const planDetails = {
    Starter: { price: '₹999', features: ['WhatsApp campaigns', 'Basic email campaigns', 'Up to 1,000 contacts', 'Standard support'], icon: FaGem },
    Growth: { price: '₹2,499', features: ['WhatsApp + Email campaigns', 'Automation flows', 'AI content generator', 'Up to 5,000 contacts', 'Priority support'], icon: FaStar },
    Pro: { price: '₹4,999', features: ['Unlimited campaigns', 'Advanced automation', 'Team inbox', 'Advanced analytics', 'Premium support'], icon: FaRocket }
  };
  const currentPlan = planDetails[plan] || planDetails.Growth;
  const PlanIcon = currentPlan.icon;

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 1500);
  };

  const steps = [
    { icon: FaWhatsapp, title: 'Connect WhatsApp', desc: 'Link your WhatsApp Business account', color: '#25D366', bg: '#E8F8EF' },
    { icon: FaEnvelope, title: 'Add Email', desc: 'Connect your email provider (Gmail, Outlook)', color: '#EA4335', bg: '#FEF2F2' },
    { icon: FaUsers, title: 'Upload Contacts', desc: 'Import your customer list (CSV/Excel)', color: '#133f85', bg: '#e8f8fb' },
    { icon: FaChartLine, title: 'Launch Campaign', desc: 'Create & send your first message', color: '#3dcdc5', bg: '#e0f4f0' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#e8f8fb] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {isComplete && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#3dcdc5', '#133f85', '#2fa9b9', '#96ddd8']}
        />
      )}

      <div className="absolute top-20 left-10 w-64 h-64 bg-[#3dcdc5]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#133f85]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#133f85] to-[#3dcdc5] shadow-lg mb-4">
                  <PlanIcon className="text-3xl text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#133f85] to-[#3dcdc5] bg-clip-text text-transparent">
                  Complete Your Subscription
                </h1>
                <p className="text-gray-500 mt-2">Secure checkout – 7‑day free trial, cancel anytime</p>
              </motion.div>

              <div className="grid lg:grid-cols-5 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="lg:col-span-3"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#96ddd8] p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <FaUser className="text-[#3dcdc5] text-xs" /> Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3dcdc5] focus:ring-2 focus:ring-[#3dcdc5]/20 transition-all duration-200 outline-none bg-gray-50/50"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <FaEnvelopeOpen className="text-[#3dcdc5] text-xs" /> Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3dcdc5] focus:ring-2 focus:ring-[#3dcdc5]/20 transition-all duration-200 outline-none bg-gray-50/50"
                          placeholder="hello@yourbusiness.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <FaPhone className="text-[#3dcdc5] text-xs" /> Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3dcdc5] focus:ring-2 focus:ring-[#3dcdc5]/20 transition-all duration-200 outline-none bg-gray-50/50"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <FaBuilding className="text-[#3dcdc5] text-xs" /> Business Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3dcdc5] focus:ring-2 focus:ring-[#3dcdc5]/20 transition-all duration-200 outline-none bg-gray-50/50"
                          placeholder="Your Business"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Method</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 'card', icon: FaCreditCard, label: 'Card' },
                            { id: 'upi', icon: FaGooglePay, label: 'UPI' },
                            { id: 'netbanking', icon: FaUniversity, label: 'Net Banking' }
                          ].map((method) => (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                              className={`relative py-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-1 ${
                                formData.paymentMethod === method.id
                                  ? 'border-[#3dcdc5] bg-[#3dcdc5]/5 shadow-md'
                                  : 'border-gray-200 hover:border-[#3dcdc5] hover:bg-gray-50'
                              }`}
                            >
                              <method.icon className={`text-2xl ${formData.paymentMethod === method.id ? 'text-[#3dcdc5]' : 'text-gray-500'}`} />
                              <span className="text-xs font-medium text-gray-600">{method.label}</span>
                              {formData.paymentMethod === method.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute -top-2 -right-2 w-5 h-5 bg-[#3dcdc5] rounded-full flex items-center justify-center"
                                >
                                  <FaCheckCircle className="text-white text-xs" />
                                </motion.div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 rounded-xl font-bold text-white text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                          isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-[#133f85] to-[#3dcdc5] hover:shadow-xl'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Complete Purchase <FaArrowRight />
                          </>
                        )}
                      </motion.button>

                      <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-4">
                        <span className="flex items-center gap-1"><FaLock className="text-[#3dcdc5]" /> Secure SSL</span>
                        <span className="flex items-center gap-1"><FaShieldAlt className="text-[#3dcdc5]" /> 7‑day free trial</span>
                      </div>
                    </form>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <div className="sticky top-24 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-[#96ddd8] p-6 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#3dcdc5]/5 rounded-full blur-3xl -z-0" />
                    <h2 className="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-[#133f85] to-[#3dcdc5] rounded-full"></span>
                      Order Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <span className="text-gray-500">Selected Plan</span>
                        <span className="font-bold text-gray-800 flex items-center gap-2">
                          <PlanIcon className="text-[#3dcdc5] text-sm" /> {plan}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <span className="text-gray-500">Price</span>
                        <span className="font-bold text-2xl text-[#3dcdc5]">{currentPlan.price}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <span className="text-gray-500">Billing Cycle</span>
                        <span className="font-semibold text-gray-700">Monthly (auto-renew)</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-gray-700 mb-2">What's included:</p>
                        <ul className="space-y-2">
                          {currentPlan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <FaCheckCircle className="text-[#3dcdc5] text-xs flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="font-black text-gray-800">Total Due Today</span>
                          <span className="font-black text-2xl bg-gradient-to-r from-[#133f85] to-[#3dcdc5] bg-clip-text text-transparent">
                            {currentPlan.price}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          *WhatsApp API charges are billed separately by Meta based on usage.
                        </p>
                      </div>
                      <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-60" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-60" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Amex_logo.svg/1280px-Amex_logo.svg.png" alt="Amex" className="h-6 opacity-60" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#3dcdc5] to-[#133f85] shadow-xl mb-6"
                >
                  <FaCheckCircle className="text-5xl text-white" />
                </motion.div>
                <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#133f85] to-[#3dcdc5] bg-clip-text text-transparent">
                  Welcome to WYN Reach! 🚀
                </h1>
                <p className="text-gray-600 text-lg mt-3">
                  Your {plan} plan ({currentPlan.price}/month) is now active. You're ready to grow your business.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#96ddd8] p-6 md:p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaRocket className="text-[#3dcdc5]" />
                  Your Next Steps
                </h2>
                <div className="space-y-4">
                  {steps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-white transition-all duration-200 border border-transparent hover:border-[#96ddd8]"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: step.bg }}>
                        <step.icon className="text-2xl" style={{ color: step.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-800">{step.title}</h3>
                          <span className="text-xs font-medium text-gray-400">Step {idx + 1}</span>
                        </div>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="hidden sm:block text-gray-300">
                          <FaArrowRight className="text-sm" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={() => navigate('/dashboard')}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#133f85] to-[#3dcdc5] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Go to Dashboard <FaArrowRight />
                </button>
                <button
                  onClick={() => window.open('https://help.wynreach.com', '_blank')}
                  className="px-8 py-4 rounded-xl bg-white text-[#133f85] font-bold text-lg border-2 border-[#133f85]/20 hover:border-[#133f85]/40 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Watch Tutorial
                </button>
              </motion.div>

              <p className="text-center text-gray-400 text-sm mt-8">
                Need help? Contact our support at <a href="mailto:support@wynreach.com" className="text-[#3dcdc5] hover:underline">support@wynreach.com</a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CheckoutPage;