import Link from 'next/link';
import { 
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Download,
  Star,
  Award,
  Users,
  BookOpen,
  Calculator,
  FlaskConical,
  Palette,
  Globe2,
  PenTool,
  Sparkles,
  ArrowUp,
  Send,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Inter, Nunito, Fredoka } from 'next/font/google';

// Enhanced font configurations
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700'], 
  display: 'swap', 
  variable: '--font-inter',
  preload: true
});

const nunito = Nunito({ 
  subsets: ['latin'], 
  weight: ['500','600','700','800'], 
  display: 'swap', 
  variable: '--font-nunito',
  preload: true
});

const fredoka = Fredoka({ 
  subsets: ['latin'], 
  weight: ['400','500','600'], 
  display: 'swap', 
  variable: '--font-fredoka'
});

export default function Footer() {
  // Enhanced structured data for SEO
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "KidspireHub",
    "alternateName": "Kids Educational Worksheets Hub",
    "description": "Free printable educational worksheets and learning resources for children from kindergarten through grade 12",
    "url": "https://kidspirehub.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://kidspirehub.com/logo.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@kidspirehub.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.facebook.com/kidspirehub",
      "https://www.instagram.com/kidspirehub",
      "https://www.twitter.com/kidspirehub",
      "https://www.youtube.com/kidspirehub"
    ],
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  // Enhanced navigation structure with SEO-friendly organization
  const footerSections = {
    subjects: {
      title: "Educational Subjects",
      icon: BookOpen,
      items: [
        { name: "Math Worksheets", href: "/worksheets/math", icon: Calculator, description: "150+ math activities" },
        { name: "English & Reading", href: "/worksheets/english", icon: BookOpen, description: "200+ reading exercises" },
        { name: "Science Activities", href: "/worksheets/science", icon: FlaskConical, description: "80+ experiments" },
        { name: "Art & Creativity", href: "/worksheets/art", icon: Palette, description: "90+ creative projects" },
        { name: "Social Studies", href: "/worksheets/social-studies", icon: Globe2, description: "70+ geography & history" },
        { name: "Writing Practice", href: "/worksheets/writing", icon: PenTool, description: "120+ writing prompts" }
      ]
    },
    grades: {
      title: "Grade Levels",
      icon: Award,
      items: [
        { name: "Preschool (Ages 3-4)", href: "/worksheets/preschool", description: "85+ early learning activities" },
        { name: "Kindergarten (Ages 4-6)", href: "/worksheets/kindergarten", description: "120+ foundational skills" },
        { name: "1st Grade (Ages 6-7)", href: "/worksheets/grade-1", description: "140+ core competencies" },
        { name: "2nd Grade (Ages 7-8)", href: "/worksheets/grade-2", description: "135+ skill builders" },
        { name: "3rd Grade (Ages 8-9)", href: "/worksheets/grade-3", description: "130+ advanced concepts" },
        { name: "4th-5th Grade (Ages 9-11)", href: "/worksheets/upper-elementary", description: "235+ complex skills" }
      ]
    },
    resources: {
      title: "Learning Resources",
      icon: Sparkles,
      items: [
        { name: "Parent Teaching Tips", href: "/resources/teaching-tips", description: "Expert guidance for home learning" },
        { name: "Educational Blog", href: "/blog", description: "Latest learning strategies & insights" },
        { name: "Printable Certificates", href: "/certificates", description: "Reward your child's achievements" },
        { name: "Learning Games", href: "/games", description: "Interactive educational activities" },
        { name: "Study Schedules", href: "/schedules", description: "Organized learning plans" },
        { name: "Progress Trackers", href: "/trackers", description: "Monitor learning milestones" }
      ]
    },
    company: {
      title: "About KidspireHub",
      icon: Heart,
      items: [
        { name: "Our Mission", href: "/about", description: "Making education accessible to all" },
        { name: "Contact Support", href: "/contact", description: "Get help with worksheets & resources" },
        { name: "Privacy Policy", href: "/privacy", description: "How we protect your information" },
        { name: "Terms of Service", href: "/terms", description: "Usage guidelines & policies" },
        { name: "Accessibility", href: "/accessibility", description: "Inclusive learning for everyone" },
        { name: "Educator Partnership", href: "/educators", description: "Resources for teachers" }
      ]
    }
  };

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "https://facebook.com/kidspirehub", 
      icon: Facebook, 
      color: "hover:bg-blue-600",
      description: "Follow us on Facebook for daily learning tips"
    },
    { 
      name: "Instagram", 
      href: "https://instagram.com/kidspirehub", 
      icon: Instagram, 
      color: "hover:bg-pink-600",
      description: "See creative learning ideas on Instagram"
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/kidspirehub", 
      icon: Twitter, 
      color: "hover:bg-blue-400",
      description: "Get quick learning tips on Twitter"
    },
    { 
      name: "YouTube", 
      href: "https://youtube.com/kidspirehub", 
      icon: Youtube, 
      color: "hover:bg-red-600",
      description: "Watch educational videos on YouTube"
    }
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      <footer 
        className="relative mt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
        role="contentinfo"
        aria-label="Site footer with navigation and company information"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-400/10 blur-3xl animate-float" />
          <div className="absolute bottom-32 right-20 w-28 h-28 rounded-full bg-purple-400/10 blur-2xl animate-float-delayed" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-indigo-400/10 blur-2xl animate-bounce-slow" />
          
          {/* Floating educational icons */}
          <div className="absolute top-32 left-32 opacity-5 animate-spin-slow">
            <BookOpen className="w-20 h-20" />
          </div>
          <div className="absolute bottom-40 right-32 opacity-5 animate-bounce-slow">
            <Sparkles className="w-16 h-16" />
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="relative border-b border-gray-700/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className={`${fredoka.className} text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center`}>
                  Stay Updated with New Worksheets!
                </h2>
                <p className={`${inter.className} text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 text-center px-4`}>
                  Get weekly notifications about new educational resources, learning tips, and exclusive content.
                </p>
                
                {/* Newsletter form */}
                <div className="flex flex-col gap-4 max-w-md mx-auto px-4">
                  <div className="relative w-full">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 sm:py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-center sm:text-left"
                      aria-label="Email address for newsletter signup"
                    />
                  </div>
                  <button className={`${nunito.className} inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto mx-auto`}>
                    <Send className="w-5 h-5" />
                    Subscribe
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Privacy Protected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Weekly Updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Always Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Enhanced Brand Section */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-8">
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 flex items-center justify-center shadow-xl">
                    <BookOpen className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h2 className={`${fredoka.className} text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent`}>
                      KidspireHub
                    </h2>
                    <p className={`${inter.className} text-blue-200 text-sm font-medium`}>
                      Free Educational Resources
                    </p>
                  </div>
                </div>
                
                <p className={`${inter.className} text-base sm:text-lg text-gray-300 leading-relaxed mb-6 text-center lg:text-left`}>
                  Empowering children's education with <strong>free, high-quality worksheets</strong> and learning resources. 
                  Trusted by families worldwide for engaging, age-appropriate educational content.
                </p>

                {/* Trust indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-sm mx-auto lg:mx-0">
                  <div className="flex items-center justify-center sm:justify-start gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <Users className="w-7 sm:w-8 h-7 sm:h-8 text-blue-400" />
                    <div className="text-center sm:text-left">
                      <div className={`${nunito.className} font-bold text-white text-lg sm:text-xl`}>75K+</div>
                      <div className={`${inter.className} text-xs text-gray-300`}>Happy Families</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <Download className="w-7 sm:w-8 h-7 sm:h-8 text-green-400" />
                    <div className="text-center sm:text-left">
                      <div className={`${nunito.className} font-bold text-white text-lg sm:text-xl`}>500K+</div>
                      <div className={`${inter.className} text-xs text-gray-300`}>Downloads</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 w-full max-w-sm mx-auto lg:mx-0 lg:min-w-[280px]">
                <h3 className={`${nunito.className} text-lg font-bold mb-4 flex items-center justify-center lg:justify-start gap-2`}>
                  <Mail className="w-5 h-5 text-blue-400" />
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                    <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <a href="mailto:support@kidspirehub.com" className={`${inter.className} text-sm hover:underline text-center lg:text-left`}>
                      support@kidspirehub.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className={`${inter.className} text-sm text-center lg:text-left`}>
                      Serving families worldwide
                    </span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                    <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className={`${inter.className} text-sm text-center lg:text-left`}>
                      24/7 Resource Access
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 sm:mb-16">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="group text-center sm:text-left">
                <h3 className={`${nunito.className} text-lg font-bold mb-6 flex items-center justify-center sm:justify-start gap-3 text-white group-hover:text-blue-300 transition-colors duration-300`}>
                  <section.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      <Link 
                        href={item.href}
                        className={`${inter.className} group/link flex items-start justify-center sm:justify-start gap-3 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:translate-x-1 text-center sm:text-left`}
                        aria-label={`${item.name} - ${item.description}`}
                      >
                        {item.icon && (
                          <item.icon className="w-4 h-4 text-gray-400 group-hover/link:text-blue-400 mt-0.5 transition-colors duration-300 flex-shrink-0" />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-300 group-hover/link:text-white transition-colors duration-300">
                            {item.name}
                          </div>
                          {item.description && (
                            <div className="text-xs text-gray-500 group-hover/link:text-gray-400 transition-colors duration-300">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media & Additional Links */}
          <div className="border-t border-gray-700/50 pt-8 sm:pt-12">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              
              {/* Social Media Links */}
              <div className="text-center lg:text-left">
                <h3 className={`${nunito.className} text-lg font-semibold mb-4`}>
                  Connect With Us
                </h3>
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-11 sm:w-12 h-11 sm:h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-300 hover:text-white ${social.color} hover:border-transparent transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      aria-label={social.description}
                      title={social.description}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust Badges & Awards */}
              <div className="text-center order-first lg:order-none">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className={`${nunito.className} font-semibold text-yellow-300 text-sm sm:text-base`}>
                    Trusted Educational Resource
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className={`${inter.className} text-xs sm:text-sm text-gray-300 ml-2`}>
                    4.9/5 from 12K+ reviews
                  </span>
                </div>
              </div>

              {/* Back to Top Button */}
              <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                <a
                  href="#top"
                  className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 w-full max-w-xs lg:w-auto"
                  aria-label="Scroll back to top of page"
                >
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                  <span className={`${inter.className} text-sm`}>Back to Top</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="border-t border-gray-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex flex-col items-center gap-4 text-xs sm:text-sm text-gray-400 sm:flex-row">
                <p className={inter.className}>
                  © {new Date().getFullYear()} KidspireHub. All rights reserved.
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-white transition-colors duration-300">
                    Terms of Service
                  </Link>
                  <Link href="/sitemap" className="hover:text-white transition-colors duration-300">
                    Sitemap
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span className={inter.className}>
                  Made with love for children's education
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}