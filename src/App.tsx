import SEO from "./components/SEO";
import hero from "./assets/hero.png";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
   <>
      <SEO
        title="AIVA OS | AI Automation & Web Development"
        description="AIVA OS provides AI Automation, Web Development, Chatbots, SEO, Business Solutions and Modern AI Tools."
      />

      <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">AIVA-OS 🚀</h1>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-violet-400">Home</a>
          <a href="#features" className="hover:text-violet-400">Features</a>
          <a href="#about" className="hover:text-violet-400">About</a>
          <a href="#contact" className="hover:text-violet-400">Contact</a>
        </div>

        <button className="bg-violet-600 px-5 py-2 rounded-lg hover:bg-violet-700 transition">
          Get Started
        </button>
      </nav>

     {/* Hero */}
<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/20 blur-[150px] rounded-full"></div>

    <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-fuchsia-500/20 blur-[120px] rounded-full"></div>

    <div className="absolute top-40 left-20 w-[250px] h-[250px] bg-blue-500/20 blur-[120px] rounded-full"></div>
  </div>

  <div className="mb-6 flex justify-center">
    <span className="px-5 py-2 rounded-full bg-violet-500/20 border border-violet-500 text-violet-300 text-sm font-semibold">
      🚀 Next Generation AI Operating System
    </span>
  </div>

  <motion.img
    src={hero}
    alt="Hero"
    className="w-[260px] md:w-[340px] lg:w-[420px] mb-10"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  />

  <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
    Build the Future with <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-500">
      AIVA-OS 🚀
    </span>
  </h1>

  <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-400 leading-8">
    Experience the next generation AI platform designed for developers,
    creators and businesses. Faster, smarter and beautifully engineered.
  </p>

  <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
    <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold shadow-2xl hover:scale-105 transition duration-300">
      🚀 Launch AIVA
    </button>

    <button className="px-10 py-4 rounded-xl border border-violet-500 text-violet-300 hover:bg-violet-500/10 transition duration-300">
      Learn More
    </button>
  </div>
<div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400 text-sm md:text-base">

  <div className="flex items-center gap-2">
    ✅ AI Powered
  </div>

  <div className="flex items-center gap-2">
    ⚡ Lightning Fast
  </div>

  <div className="flex items-center gap-2">
    🔒 Secure Platform
  </div>

  <div className="flex items-center gap-2">
    ☁ Cloud Ready
  </div>

</div>
</section>
{/* ===================== STATS ===================== */}

<section className="py-24 bg-[#111827]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      <div className="bg-[#1a2235] rounded-2xl p-8 text-center border border-violet-500/20 hover:border-violet-500 transition duration-300">
        <h2 className="text-5xl font-bold text-violet-400">50K+</h2>
        <p className="text-gray-400 mt-3">Active Users</p>
      </div>

      <div className="bg-[#1a2235] rounded-2xl p-8 text-center border border-fuchsia-500/20 hover:border-fuchsia-500 transition duration-300">
        <h2 className="text-5xl font-bold text-fuchsia-400">120+</h2>
        <p className="text-gray-400 mt-3">AI Tools</p>
      </div>

      <div className="bg-[#1a2235] rounded-2xl p-8 text-center border border-blue-500/20 hover:border-blue-500 transition duration-300">
        <h2 className="text-5xl font-bold text-blue-400">99.9%</h2>
        <p className="text-gray-400 mt-3">Uptime</p>
      </div>

      <div className="bg-[#1a2235] rounded-2xl p-8 text-center border border-green-500/20 hover:border-green-500 transition duration-300">
        <h2 className="text-5xl font-bold text-green-400">24/7</h2>
        <p className="text-gray-400 mt-3">AI Support</p>
      </div>

    </div>

  </div>
</section>
{/* ===================== FEATURES ===================== */}

<section id="features" className="py-24 px-6 bg-[#0f172a]">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Powerful <span className="text-violet-400">Features</span>
      </h2>
      <p className="text-gray-400 mt-4 text-lg">
        Everything you need in one intelligent AI platform.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-[#1a2235] p-8 rounded-2xl hover:-translate-y-2 transition duration-300 border border-violet-500/20">
        <div className="text-5xl mb-5">🤖</div>
        <h3 className="text-2xl font-bold mb-3">AI Assistant</h3>
        <p className="text-gray-400">
          Chat naturally with an intelligent AI that understands your workflow.
        </p>
      </div>

      <div className="bg-[#1a2235] p-8 rounded-2xl hover:-translate-y-2 transition duration-300 border border-fuchsia-500/20">
        <div className="text-5xl mb-5">⚡</div>
        <h3 className="text-2xl font-bold mb-3">Automation</h3>
        <p className="text-gray-400">
          Automate repetitive tasks with one click and save valuable time.
        </p>
      </div>

      <div className="bg-[#1a2235] p-8 rounded-2xl hover:-translate-y-2 transition duration-300 border border-blue-500/20">
        <div className="text-5xl mb-5">🔒</div>
        <h3 className="text-2xl font-bold mb-3">Enterprise Security</h3>
        <p className="text-gray-400">
          Your data stays protected with modern encryption and cloud security.
        </p>
      </div>

      <div className="bg-[#1a2235] p-8 rounded-2xl hover:-translate-y-2 transition duration-300 border border-green-500/20">
        <div className="text-5xl mb-5">☁️</div>
        <h3 className="text-2xl font-bold mb-3">Cloud Sync</h3>
        <p className="text-gray-400">
          Access your AI workspace anytime, anywhere from every device.
        </p>
      </div>

    </div>

  </div>
</section>

{/* ===================== ABOUT ===================== */}

<section id="about" className="py-24 px-6 bg-[#111827]">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-5xl font-bold mb-8">
      About <span className="text-violet-400">AIVA-OS</span>
    </h2>

    <p className="text-xl text-gray-400 leading-9">
      AIVA-OS is an advanced AI Operating System built for developers,
      creators, freelancers and businesses. It combines powerful AI tools,
      automation, cloud technology and intelligent workflows into one modern
      platform to improve productivity and innovation.
    </p>

  </div>
</section>

{/* ================= CONTACT ================= */}

<section
  id="contact"
  className="py-28 px-6 bg-[#0f172a]"
>
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Contact <span className="text-violet-400">Us</span>
      </h2>

      <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
        Have a question, partnership idea or business inquiry?
        We'd love to hear from you.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* Left Card */}

      <div className="bg-[#161f33] rounded-3xl p-10 border border-violet-500/20">

        <h3 className="text-3xl font-bold mb-8">
          Let's Build Something Amazing 🚀
        </h3>

        <div className="space-y-6">

          <div>
            <p className="text-violet-400 font-semibold">
              Email
            </p>

            <p className="text-gray-300">
              aivaosofficial@gmail.com
            </p>
          </div>

          <div>
            <p className="text-violet-400 font-semibold">
              Website
            </p>

            <p className="text-gray-300">
              aiva-os.netlify.app
            </p>
          </div>

          <div>
            <p className="text-violet-400 font-semibold">
              Availability
            </p>

            <p className="text-gray-300">
              Monday – Sunday • 24/7
            </p>
          </div>

        </div>
      </div>

      {/* Right Card */}

      <div className="bg-[#161f33] rounded-3xl p-10 border border-violet-500/20">

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
          />

          <textarea
           rows={5}
            placeholder="Your Message"
            className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
          ></textarea>

          <button
            className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-105 transition duration-300 font-bold"
          >
            🚀 Send Message
          </button>

        </form>

      </div>

    </div>

  </div>
</section>

{/* ===================== CTA ===================== */}
<section className="py-24 bg-gradient-to-r from-violet-700 via-fuchsia-600 to-purple-700 text-center">

  <div className="max-w-4xl mx-auto px-6">

    <h2 className="text-5xl font-bold mb-6">
      Ready to Build with AI?
    </h2>

    <p className="text-xl text-white/80 mb-10">
      Join thousands of developers and businesses using AIVA-OS to build
      smarter, faster and more powerful AI solutions.
    </p>

    <button className="px-10 py-4 rounded-xl bg-white text-violet-700 font-bold hover:scale-105 transition duration-300 shadow-xl">
      🚀 Get Started Now
    </button>

  </div>

</section>
    {/* ================= FOOTER ================= */}

<footer className="border-t border-gray-800 bg-[#0b1120] py-10">

  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

    <div>
      <h2 className="text-2xl font-bold text-white">
        AIVA-OS 🚀
      </h2>

      <p className="text-gray-400 mt-2">
        Next Generation AI Operating System
      </p>
    </div>

    <div className="flex gap-6 text-gray-400">

      <a href="#" className="hover:text-violet-400 transition">
        Home
      </a>

      <a href="#features" className="hover:text-violet-400 transition">
        Features
      </a>

      <a href="#about" className="hover:text-violet-400 transition">
        About
      </a>

      <a href="#contact" className="hover:text-violet-400 transition">
        Contact
      </a>

    </div>

  </div>

  <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
    © 2026 AIVA-OS. All Rights Reserved.
  </div>

</footer>
      </div>
    </>
  );
}

export default App;