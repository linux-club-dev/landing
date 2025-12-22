import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Trophy,
  Code,
  Lightbulb,
  Rocket,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Zap,
  Globe,
  Shield,
  Cpu,
} from "lucide-react";

const HackDaysPune = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your hackathon date here
  const HACKATHON_DATE = "2026-01-31T10:00:00";

  useEffect(() => {
    const hackathonDate = new Date(HACKATHON_DATE);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tracks = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Best Use of Google Gemini API",
      description: "Build AI-powered projects using the Google Gemini API — chatbots, creative tools, automation workflows, and more!",
      color: "from-blue-500 to-cyan-600",
      featured: true,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Creative AI Tools",
      description: "Design innovative AI-powered tools that enhance creativity and productivity",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Automation & Workflows",
      description: "Build smart automation solutions that simplify everyday tasks",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Open Innovation",
      description: "Let your imagination lead the way — build anything meaningful!",
      color: "from-orange-500 to-red-600",
    },
  ];


  const faqs = [
    {
      question: "Who can participate?",
      answer:
        "Students, beginners, hobbyists, and experienced developers are all welcome! This is a beginner-friendly event perfect for those who enjoy building quickly and learning by doing.",
    },
    {
      question: "Do I need a team?",
      answer:
        "You can come solo or with a team. We'll have team formation activities for solo participants to find teammates at the event.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, and enthusiasm! We'll provide food, drinks, WiFi, and a great atmosphere at Coditas Pune.",
    },
    {
      question: "Is it free to participate?",
      answer:
        "Yes! Hack Days Pune is completely free. We provide meals, MLH swag, stickers, and access to workshops and mentorship.",
    },
    {
      question: "What is the Google Gemini API track?",
      answer:
        "The main prize track encourages you to build meaningful projects using the Gemini API — chatbots, creative AI tools, automation workflows, summarizers, and more. Let your imagination lead!",
    },
    {
      question: "How do I register?",
      answer:
        "Register through the official MLH event page. Only registered and approved participants can join the event.",
    },
    {
      question: "Can I start working on my project before the event?",
      answer:
        "No. All projects must be built from scratch during the Hack Day. You can brainstorm ideas, but no code should be written beforehand.",
    },
  ];

  const sponsors = [
    { name: "Google Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-600/10 rounded-full blur-[100px] animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
            HD
          </div>
          <span className="font-bold text-xl tracking-tight">
            Hack Days Pune
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#tracks" className="hover:text-white transition-colors">
            Tracks
          </a>
          <a href="#schedule" className="hover:text-white transition-colors">
            Schedule
          </a>
          <a href="#sponsors" className="hover:text-white transition-colors">
            Partners
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>
        <Button 
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 rounded-full px-6"
          asChild
        >
          <a href="https://events.mlh.io/events/13396-hack-days-pune" target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32">
        {/* MLH Badge */}
        <a
          href="https://mlh.io"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-20 right-8 lg:right-16 w-20 lg:w-24 hover:scale-105 transition-transform"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
            alt="Major League Hacking 2025 Hackathon Season"
            className="w-full"
          />
        </a>

        <div className="text-center max-w-5xl mx-auto">
          {/* Glowing badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-300">
              Registrations Open — Limited Spots!
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              HACK DAYS
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
              PUNE
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
            Mini-Hackathon by Linux Club Pune × Major League Hacking
          </p>

          {/* Powered by badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Powered by</span>
            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Google Gemini" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-12">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>January 31, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>10:00 AM - 5:00 PM IST</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-400" />
              <span>Coditas, Viman Nagar, Pune</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-12">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-500 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105 bg-[length:200%_100%] animate-shimmer"
              asChild
            >
              <a href="https://events.mlh.io/events/13396-hack-days-pune" target="_blank" rel="noopener noreferrer">
                <Rocket className="w-5 h-5 mr-2" />
                Register on MLH — It's Free!
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm"
            >
              Learn More
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  What is
                </span>
                <br />
                Hack Days Pune?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Hack Days Pune is part of the global MLH Hack Days initiative — a series of 
                in-person events designed to provide builders with a focused space to create. 
                It's a mini-hackathon offering all the energy and creativity of a full hackathon 
                in a more accessible format.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Hosted by Linux Club Pune and powered by Major League Hacking (MLH), 
                this edition features the Google Gemini API as the main prize track. 
                Perfect for students, beginners, hobbyists, and experienced developers who enjoy 
                building quickly and learning by doing!
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">7</div>
                    <div className="text-sm text-gray-500">Hours of Hacking</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">100+</div>
                    <div className="text-sm text-gray-500">Builders Expected</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">Gemini</div>
                    <div className="text-sm text-gray-500">API Focus</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">MLH</div>
                    <div className="text-sm text-gray-500">Swag & Prizes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl" />
                <Code className="w-16 h-16 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Build. Learn. Connect.</h3>
                <p className="text-gray-400 mb-6">
                  Whether you're a first-time hacker or a seasoned pro, Hack Days 
                  offers an inclusive, beginner-friendly environment to push your limits 
                  and create something amazing with AI.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Hands-on hacking with Google Gemini API
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Beginner-friendly guidance & workshops
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    MLH swag, stickers & goodies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    End-of-day demos to showcase your creations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Venue: Coditas Pune</h3>
                  <p className="text-gray-400 mb-4">
                    No. 33, 3rd Floor, Gaia Apex, S, 2D, Viman Nagar, Pune, Maharashtra 411014, India
                  </p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                    <a href="https://maps.google.com/?q=Coditas+Pune+Viman+Nagar" target="_blank" rel="noopener noreferrer">
                      <MapPin className="w-4 h-4 mr-2" />
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Prize Tracks
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Build meaningful projects using Google Gemini API. Let your imagination lead the way!
            </p>
          </div>

          {/* Featured Track */}
          <div className="mb-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <Card className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
                        🏆 MAIN PRIZE TRACK
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        Best Use of Google Gemini API
                      </h3>
                      <p className="text-gray-400 text-lg">
                        Build AI-powered projects using the Google Gemini API — chatbots, creative tools, 
                        automation workflows, summarizers, and more! The most innovative use wins.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tracks.slice(1).map((track, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                <Card className="relative bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {track.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {track.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{track.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors/Partners Section */}
      <section id="sponsors" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Our Partners
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hack Days Pune is made possible by these amazing partners
            </p>
          </div>

          <div className="flex justify-center mb-16">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative max-w-md w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 flex items-center justify-center hover:border-white/20 transition-all">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Swag & Prizes */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  🎁 Swag & Prizes
                </span>
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                All participants get MLH swag, stickers, and goodies! Winners of the 
                Google Gemini API track get exclusive prizes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10">
                  <span className="text-2xl mr-2">🎒</span> MLH Swag
                </div>
                <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10">
                  <span className="text-2xl mr-2">🏷️</span> Stickers
                </div>
                <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10">
                  <span className="text-2xl mr-2">🏆</span> Track Prizes
                </div>
                <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10">
                  <span className="text-2xl mr-2">🎮</span> Goodies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Event Schedule
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A packed day of hacking, learning, and building with AI!
            </p>
          </div>

          {/* Coming Soon Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 text-center">
              <div className="text-6xl mb-6">📅</div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Schedule Coming Soon
                </span>
              </h3>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-6">
                We're finalizing an exciting schedule packed with hacking sessions, 
                workshops, mentorship, and more. Stay tuned!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <Clock className="w-4 h-4 inline mr-2 text-green-400" />
                  10:00 AM - 5:00 PM IST
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <Zap className="w-4 h-4 inline mr-2 text-cyan-400" />
                  7 Hours of Building
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                FAQs
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 data-[state=open]:border-purple-500/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-purple-400 transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Sponsor Contact Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-4xl">
                    🤝
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                      Interested in Sponsoring?
                    </span>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Partner with us to reach 100+ talented developers and showcase your brand 
                    at Hack Days Pune. Let's create something amazing together!
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0 rounded-full px-6"
                    asChild
                  >
                    <a href="mailto:mahallepratik683@gmail.com">
                      📧 Contact Us: mahallepratik683@gmail.com
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/30 to-green-600/30 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Build with AI?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join us for a day of innovation with Google Gemini API. 
                Limited spots available — register now!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 hover:from-blue-500 hover:via-cyan-500 hover:to-green-500 text-white border-0 rounded-full px-12 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105"
                asChild
              >
                <a href="https://events.mlh.io/events/13396-hack-days-pune" target="_blank" rel="noopener noreferrer">
                  <Rocket className="w-5 h-5 mr-2" />
                  Register on MLH — It's Free!
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
                HD
              </div>
              <div>
                <div className="font-bold">Hack Days Pune</div>
                <div className="text-sm text-gray-500">
                  Linux Club Pune × Major League Hacking
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/LinuxClubPune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/linux-club-pune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/LinuxClubPune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://events.mlh.io/events/13396-hack-days-pune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="text-sm text-gray-500">
              © 2026 Linux Club Pune. Made with 💙 in Pune
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HackDaysPune;

