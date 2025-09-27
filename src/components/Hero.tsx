import Link from 'next/link';
import Image from 'next/image';
import { Inter, Nunito, Fredoka } from 'next/font/google';
import { 
  BookOpen, 
  Download, 
  Users, 
  Award, 
  Sparkles, 
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Gift
} from 'lucide-react';

// Optimized font loading for better performance
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
  variable: '--font-inter',
  preload: true
});

const nunito = Nunito({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'], 
  display: 'swap',
  variable: '--font-nunito',
  preload: true
});

const fredoka = Fredoka({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'], 
  display: 'swap',
  variable: '--font-fredoka'
});

export default function Hero() {
  // Enhanced structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "KidspireHub",
    "alternateName": "Kids Educational Worksheets Hub",
    "description": "Download free printable educational worksheets for children K-12. Math worksheets, reading comprehension, science activities, and learning resources for homeschool and classroom use.",
    "url": "https://kidspirehub.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://kidspirehub.com/logo.png",
      "width": "300",
      "height": "100"
    },
    "image": "https://kidspirehub.com/hero-image.jpg",
    "sameAs": [
      "https://www.facebook.com/kidspirehub",
      "https://www.instagram.com/kidspirehub",
      "https://www.pinterest.com/kidspirehub"
    ],
    "offers": {
      "@type": "Offer",
      "name": "Free Educational Worksheets",
      "description": "Access to 500+ free printable worksheets for grades K-12",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "category": "Education"
    },
    "audience": {
      "@type": "EducationalAudience",
      "audienceType": "student",
      "educationalRole": "student"
    },
    "provider": {
      "@type": "Organization",
      "name": "KidspireHub Educational Team"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kidspirehub.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Free Worksheets",
        "item": "https://kidspirehub.com/worksheets"
      }
    ]
  };

  return (
    <>
      {/* Enhanced SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      
      <section 
        className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 min-h-screen flex items-center"
        role="banner"
        aria-label="KidspireHub Hero Section - Free Educational Worksheets"
      >
        {/* Interactive animated background */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow-300/20 blur-2xl animate-bounce-slow hover:bg-yellow-300/30 transition-colors duration-1000" />
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-orange-300/30 blur-2xl animate-float-delayed hover:bg-orange-300/40 transition-colors duration-1000" />
          <div className="absolute bottom-32 left-32 w-28 h-28 rounded-full bg-red-300/25 blur-2xl animate-pulse-slow hover:bg-red-300/35 transition-colors duration-1000" />
          <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-pink-300/15 blur-3xl animate-float hover:bg-pink-300/25 transition-colors duration-1000" />
          
          {/* Floating educational icons */}
          <div className="absolute top-32 right-32 opacity-10 animate-spin-slow">
            <BookOpen className="w-16 h-16 text-orange-400" />
          </div>
          <div className="absolute bottom-40 left-20 opacity-10 animate-bounce-slow">
            <Sparkles className="w-12 h-12 text-yellow-500" />
          </div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Main content - SEO optimized */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Interactive trust badge */}
              <div className="group inline-flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <Award className="w-5 h-5 text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
                <span className={`${inter.className} text-sm font-semibold text-gray-700`}>
                  Trusted by 75,000+ Families Worldwide
                </span>
                <div className="flex items-center gap-1" role="img" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-3 h-3 text-yellow-500 fill-current group-hover:scale-110 transition-transform duration-200" 
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* SEO-optimized headlines with better semantic structure */}
              <header className="space-y-6">
                <h1 className={`${nunito.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight`}>
                  Free Educational{' '}
                  <span className="relative inline-block group cursor-pointer">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 group-hover:from-orange-600 group-hover:via-red-600 group-hover:to-pink-600 transition-all duration-300">
                      Worksheets
                    </span>
                    <span className="absolute -bottom-3 left-0 right-0 h-4 bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 opacity-40 rounded-full group-hover:opacity-60 group-hover:h-5 transition-all duration-300" />
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
                  </span>
                  {' '}for Kids
                </h1>
                
                <h2 className={`${fredoka.className} text-2xl sm:text-3xl text-orange-600 font-medium leading-relaxed`}>
                  Printable Learning Activities for Kindergarten through Grade 12
                </h2>
                
                <p className={`${inter.className} text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl`}>
                  Download <strong>500+ premium-quality printable worksheets</strong> covering{' '}
                  <em>math, reading, science, art, and more</em>. Perfect for{' '}
                  <mark className="bg-yellow-100 px-1 rounded">homeschooling families</mark>, teachers, and parents who want the best educational resources.
                </p>
              </header>

              {/* Interactive benefits with hover effects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
                {[
                  {
                    icon: Download,
                    title: "500+ Free Downloads",
                    description: "High-quality PDF worksheets",
                    gradient: "from-orange-400 to-red-500",
                    hoverColor: "hover:from-orange-500 hover:to-red-600"
                  },
                  {
                    icon: BookOpen,
                    title: "All Grade Levels",
                    description: "K-12 curriculum aligned",
                    gradient: "from-yellow-400 to-orange-500",
                    hoverColor: "hover:from-yellow-500 hover:to-orange-600"
                  },
                  {
                    icon: CheckCircle,
                    title: "Instant Access",
                    description: "No signup required",
                    gradient: "from-green-400 to-emerald-500",
                    hoverColor: "hover:from-green-500 hover:to-emerald-600"
                  },
                  {
                    icon: Heart,
                    title: "Teacher Approved",
                    description: "Educational standards met",
                    gradient: "from-pink-400 to-red-500",
                    hoverColor: "hover:from-pink-500 hover:to-red-600"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="group flex items-center gap-4 p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-orange-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.hoverColor} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <feature.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className={`${nunito.className} text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                      <p className={`${inter.className} text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300`}>
                        {feature.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                  </div>
                ))}
              </div>

              {/* Enhanced interactive CTA section */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-8">
                <Link
                  href="/worksheets"
                  aria-label="Download free printable educational worksheets for kids - math, reading, science activities"
                  className={`${fredoka.className} group relative inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 px-10 py-5 text-xl font-semibold text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 overflow-hidden`}
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <Gift className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Start Learning Free Today
                  <Sparkles className="ml-3 w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                </Link>
                
                <Link
                  href="/demo"
                  aria-label="Watch demo of educational worksheets and learning activities"
                  className={`${nunito.className} group inline-flex items-center justify-center rounded-3xl bg-white/95 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-300 px-10 py-5 text-xl font-semibold text-gray-800 hover:text-gray-900 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200`}
                >
                  <Play className="mr-3 w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                  <ArrowRight className="ml-3 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </div>

              {/* Social proof and urgency */}
              <div className={`${inter.className} flex items-center gap-4 pt-6 text-sm text-gray-600`}>
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-red-400 border-2 border-white shadow-sm" />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold text-gray-600">
                    +K
                  </div>
                </div>
                <p>
                  <strong>2,347 downloads</strong> this week • Join thousands of happy families!
                </p>
              </div>
            </div>

            {/* Interactive visual element */}
            <div className="lg:col-span-5 relative">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-pink-300 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100 group-hover:shadow-3xl group-hover:-translate-y-2 transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className={`${nunito.className} text-2xl font-bold text-gray-900`}>
                        Popular This Week
                      </h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-400 text-white text-sm font-semibold rounded-full">
                        FREE
                      </span>
                    </div>
                    
                    {/* Sample worksheet previews */}
                    <div className="space-y-4">
                      {[
                        { subject: "Math", grade: "Grade 3", title: "Addition & Subtraction", downloads: "1.2K" },
                        { subject: "Reading", grade: "Grade 2", title: "Phonics Practice", downloads: "987" },
                        { subject: "Science", grade: "Grade 4", title: "Animal Habitats", downloads: "856" }
                      ].map((worksheet, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className={`${nunito.className} font-semibold text-gray-900`}>{worksheet.title}</h4>
                            <p className="text-sm text-gray-600">{worksheet.subject} • {worksheet.grade}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-gray-700">{worksheet.downloads}</div>
                            <div className="text-xs text-gray-500">downloads</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`${fredoka.className} w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-2xl hover:from-orange-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      View All Worksheets
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}