import { 
    Download, 
    CircleDollarSign, 
    GraduationCap, 
    Printer, 
    Search, 
    Heart,
    Star,
    Award,
    CheckCircle,
    Sparkles,
    ArrowRight,
    Users,
    Clock
  } from 'lucide-react';
  import { Inter, Nunito, Fredoka } from 'next/font/google';
  
  // Font configurations for better typography
  const inter = Inter({ 
    subsets: ['latin'], 
    weight: ['400', '500', '600', '700'], 
    display: 'swap',
    variable: '--font-inter'
  });
  
  const nunito = Nunito({ 
    subsets: ['latin'], 
    weight: ['400', '500', '600', '700', '800'], 
    display: 'swap',
    variable: '--font-nunito'
  });
  
  const fredoka = Fredoka({ 
    subsets: ['latin'], 
    weight: ['400', '500', '600'], 
    display: 'swap',
    variable: '--font-fredoka'
  });
  
  export default function WhyChoose() {
    // Enhanced structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "KidspireHub Educational Worksheets",
      "description": "Free printable educational worksheets for children grades K-12, including math, reading, science, and art activities",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "KidspireHub"
      },
      "serviceType": "Educational Resources",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "audience": {
        "@type": "EducationalAudience",
        "audienceType": ["student", "parent", "teacher"],
        "educationalRole": ["student"]
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Free Educational Worksheets",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "CreativeWork",
              "name": "Math Worksheets",
              "description": "Printable math worksheets for all grade levels"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "CreativeWork",
              "name": "Reading Comprehension Worksheets",
              "description": "Interactive reading worksheets to improve comprehension skills"
            }
          }
        ]
      }
    };
  
    // Enhanced feature data with better SEO keywords and descriptions
    const features = [
      {
        icon: Download,
        title: "Instant PDF Downloads",
        subtitle: "No Registration Required",
        description: "Get immediate access to high-quality printable worksheets. Simply click, download, and start learning - completely hassle-free.",
        keywords: "instant download, PDF worksheets, printable learning materials",
        gradient: "from-blue-400 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50",
        hoverGradient: "hover:from-blue-500 hover:to-cyan-600",
        stats: "500+ Downloads Daily"
      },
      {
        icon: CircleDollarSign,
        title: "100% Free Forever",
        subtitle: "Always Free Access",
        description: "All educational resources are completely free. We believe quality education should be accessible to every child, everywhere.",
        keywords: "free worksheets, no cost education, accessible learning",
        gradient: "from-green-400 to-emerald-500",
        bgGradient: "from-green-50 to-emerald-50",
        hoverGradient: "hover:from-green-500 hover:to-emerald-600",
        stats: "$0 Cost Forever"
      },
      {
        icon: GraduationCap,
        title: "Grade-Specific Content",
        subtitle: "K-12 Curriculum Aligned",
        description: "Worksheets designed specifically for each grade level and learning stage, from kindergarten through high school.",
        keywords: "grade specific, K-12 worksheets, curriculum aligned, age appropriate",
        gradient: "from-purple-400 to-violet-500",
        bgGradient: "from-purple-50 to-violet-50",
        hoverGradient: "hover:from-purple-500 hover:to-violet-600",
        stats: "13 Grade Levels"
      },
      {
        icon: Printer,
        title: "Print-Optimized Design",
        subtitle: "Home & Classroom Ready",
        description: "Optimized for standard home printers with both colorful and printer-friendly black & white versions available.",
        keywords: "print friendly, home printing, classroom worksheets",
        gradient: "from-orange-400 to-red-500",
        bgGradient: "from-orange-50 to-red-50",
        hoverGradient: "hover:from-orange-500 hover:to-red-600",
        stats: "Color & B/W Options"
      },
      {
        icon: Search,
        title: "Smart Search & Filters",
        subtitle: "Find Resources Fast",
        description: "Advanced filtering system helps you find exactly what you need by subject, grade level, difficulty, and learning objectives.",
        keywords: "advanced search, educational filters, find worksheets",
        gradient: "from-indigo-400 to-blue-500",
        bgGradient: "from-indigo-50 to-blue-50",
        hoverGradient: "hover:from-indigo-500 hover:to-blue-600",
        stats: "10+ Filter Options"
      },
      {
        icon: Heart,
        title: "Educator Created",
        subtitle: "Teacher & Parent Approved",
        description: "Crafted by experienced educators who understand child development and effective learning methodologies.",
        keywords: "teacher created, educator approved, child development",
        gradient: "from-pink-400 to-rose-500",
        bgGradient: "from-pink-50 to-rose-50",
        hoverGradient: "hover:from-pink-500 hover:to-rose-600",
        stats: "50+ Educators"
      }
    ];
  
    return (
      <>
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
  
        <section 
          aria-labelledby="why-choose-heading" 
          className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden"
          role="region"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-200/20 blur-3xl animate-float" />
            <div className="absolute bottom-32 right-20 w-28 h-28 rounded-full bg-purple-200/20 blur-2xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-green-200/20 blur-2xl animate-bounce-slow" />
            
            {/* Floating educational icons */}
            <div className="absolute top-40 right-40 opacity-5 animate-spin-slow">
              <GraduationCap className="w-20 h-20 text-blue-600" />
            </div>
            <div className="absolute bottom-40 left-32 opacity-5 animate-bounce-slow">
              <Star className="w-16 h-16 text-purple-600" />
            </div>
          </div>
  
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
            
            {/* Enhanced Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-100 mb-8 group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Award className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className={`${inter.className} text-sm font-semibold text-gray-700`}>
                  Trusted by 75,000+ Families Worldwide
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
  
              {/* Main heading with SEO optimization */}
              <h2 
                id="why-choose-heading"
                className={`${nunito.className} text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6`}
              >
                Why Choose{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                    KidspireHub
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 opacity-30 rounded-full" />
                </span>
                ?
              </h2>
              
              <p className={`${inter.className} text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8`}>
                Discover why parents, teachers, and students love our{' '}
                <strong>free educational worksheets</strong> and learning resources designed to{' '}
                <em>inspire young minds</em> and accelerate learning success.
              </p>
  
              {/* Interactive CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`${fredoka.className} inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300`}>
                  <Download className="w-5 h-5" />
                  Start Learning Today
                  <Sparkles className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className={`${inter.className} text-sm font-medium`}>
                    Join 2,347 families who downloaded this week
                  </span>
                </div>
              </div>
            </div>
  
            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <article 
                  key={index}
                  className={`group relative rounded-3xl border border-gray-200 bg-gradient-to-br ${feature.bgGradient} p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Interactive icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.hoverGradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <feature.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Floating indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 
                      className={`${nunito.className} text-xl font-bold text-gray-900 group-hover:text-gray-800 mb-2 transition-colors duration-300`}
                      itemProp="name"
                    >
                      {feature.title}
                    </h3>
                    
                    <p className={`${inter.className} text-sm font-semibold text-blue-600 mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                      {feature.subtitle}
                    </p>
                    
                    <p 
                      className={`${inter.className} text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300`}
                      itemProp="description"
                    >
                      {feature.description}
                    </p>
  
                    {/* Stats indicator */}
                    <div className="flex items-center justify-between">
                      <span className={`${fredoka.className} text-sm font-semibold text-gray-500 group-hover:text-blue-600 transition-colors duration-300`}>
                        {feature.stats}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
  
                    {/* Progress bar */}
                    <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${feature.gradient} w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full`} />
                    </div>
                  </div>
  
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
  
                  {/* SEO keywords (hidden) */}
                  <meta itemProp="keywords" content={feature.keywords} />
                </article>
              ))}
            </div>
  
            {/* Enhanced Call-to-Action Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full" />
                  <div className="absolute top-8 right-12 w-4 h-4 border-2 border-white rounded-full" />
                  <div className="absolute bottom-8 left-12 w-6 h-6 border-2 border-white rounded-full" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full" />
                </div>
  
                <div className="relative z-10">
                  <h3 className={`${fredoka.className} text-3xl sm:text-4xl font-bold text-white mb-4`}>
                    Ready to Start Learning?
                  </h3>
                  <p className={`${inter.className} text-xl text-blue-100 mb-8 max-w-2xl mx-auto`}>
                    Join thousands of families already using our free educational worksheets to boost their children's learning success.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className={`${nunito.className} inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300`}>
                      <Download className="w-6 h-6" />
                      Browse Free Worksheets
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <div className="flex items-center gap-2 text-blue-100">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm font-medium">Updated daily with new content</span>
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