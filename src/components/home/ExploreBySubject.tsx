import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Palette, 
  Globe2, 
  PenTool,
  Search,
  Star,
  Download,
  ArrowRight,
  Sparkles,
  Award,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Heart
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

type SubjectCard = {
  key: string;
  title: string;
  count: string;
  description: string;
  detailedDescription: string;
  icon: React.ElementType;
  gradient: string;
  bgGradient: string;
  href: string;
  popularity: 'hot' | 'trending' | 'new' | 'popular';
  difficulty: string;
  ageRange: string;
  weeklyDownloads: string;
  skills: string[];
  seoKeywords: string;
  imageSrc: string;
  imageAlt: string;
};

const subjects: SubjectCard[] = [
  {
    key: 'math',
    title: 'Math Worksheets',
    count: '150+ worksheets',
    description: 'Addition, subtraction, multiplication, fractions, geometry, and problem-solving activities.',
    detailedDescription: 'Comprehensive math worksheets covering basic arithmetic, word problems, geometry, fractions, and advanced problem-solving skills for all grade levels.',
    icon: Calculator,
    gradient: 'from-orange-400 via-red-500 to-pink-500',
    bgGradient: 'from-orange-50 to-pink-50',
    href: '/worksheets/math',
    popularity: 'hot',
    difficulty: 'All Levels',
    ageRange: 'Ages 5-18',
    weeklyDownloads: '2.1K',
    skills: ['Addition & Subtraction', 'Multiplication', 'Fractions', 'Geometry', 'Word Problems'],
    seoKeywords: 'math worksheets, elementary math, arithmetic practice, geometry worksheets, fraction exercises',
    imageSrc: '/subjects/maths logo.png',
    imageAlt: 'Maths subject colorful numbers illustration'
  },
  {
    key: 'ela',
    title: 'English & Reading',
    count: '200+ worksheets',
    description: 'Reading comprehension, phonics, vocabulary, grammar, and creative writing exercises.',
    detailedDescription: 'Complete English language arts curriculum including reading comprehension, phonics practice, vocabulary building, grammar exercises, and creative writing prompts.',
    icon: BookOpen,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    bgGradient: 'from-blue-50 to-teal-50',
    href: '/worksheets/english',
    popularity: 'trending',
    difficulty: 'Beginner to Advanced',
    ageRange: 'Ages 4-16',
    weeklyDownloads: '1.8K',
    skills: ['Reading Comprehension', 'Phonics', 'Vocabulary', 'Grammar', 'Creative Writing'],
    seoKeywords: 'reading worksheets, phonics practice, vocabulary building, grammar exercises, comprehension activities',
    imageSrc: '/subjects/English logo.png',
    imageAlt: 'English language arts alphabet illustration'
  },
  {
    key: 'science',
    title: 'Science Exploration',
    count: '80+ worksheets',
    description: 'Life science, earth science, physics basics, experiments, and scientific method activities.',
    detailedDescription: 'Hands-on science worksheets covering biology, chemistry basics, earth science, space exploration, and simple experiments perfect for young scientists.',
    icon: FlaskConical,
    gradient: 'from-emerald-500 via-green-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
    href: '/worksheets/science',
    popularity: 'popular',
    difficulty: 'Elementary',
    ageRange: 'Ages 6-14',
    weeklyDownloads: '967',
    skills: ['Life Science', 'Earth Science', 'Simple Experiments', 'Scientific Method', 'Nature Study'],
    seoKeywords: 'science worksheets, elementary science, nature activities, simple experiments, scientific method',
    imageSrc: '/subjects/Science logo.png',
    imageAlt: 'Science icons planets laboratory and nature'
  },
  {
    key: 'art',
    title: 'Art & Creativity',
    count: '90+ worksheets',
    description: 'Drawing tutorials, coloring pages, craft projects, pattern recognition, and creative expression.',
    detailedDescription: 'Inspire creativity with art worksheets featuring drawing lessons, coloring activities, craft templates, and creative projects that develop artistic skills.',
    icon: Palette,
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
    bgGradient: 'from-fuchsia-50 to-rose-50',
    href: '/worksheets/art',
    popularity: 'new',
    difficulty: 'All Ages',
    ageRange: 'Ages 3-12',
    weeklyDownloads: '1.2K',
    skills: ['Drawing Basics', 'Color Theory', 'Pattern Making', 'Craft Projects', 'Creative Expression'],
    seoKeywords: 'art worksheets, drawing activities, coloring pages, craft templates, creative projects',
    imageSrc: '/subjects/Art logo.png',
    imageAlt: 'Art and fun supplies and colors'
  },
  {
    key: 'social',
    title: 'Social Studies',
    count: '70+ worksheets',
    description: 'Geography, history basics, community helpers, cultures, and citizenship activities.',
    detailedDescription: 'Explore the world with social studies worksheets covering geography, basic history, community roles, different cultures, and good citizenship practices.',
    icon: Globe2,
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    bgGradient: 'from-violet-50 to-indigo-50',
    href: '/worksheets/social-studies',
    popularity: 'trending',
    difficulty: 'Elementary',
    ageRange: 'Ages 6-12',
    weeklyDownloads: '654',
    skills: ['Geography', 'History Basics', 'Community Helpers', 'Cultural Awareness', 'Map Skills'],
    seoKeywords: 'social studies worksheets, geography activities, history for kids, community helpers, cultural studies',
    imageSrc: '/subjects/Social logo.png',
    imageAlt: 'Social studies icons maps and history'
  },
  {
    key: 'writing',
    title: 'Writing & Grammar',
    count: '120+ worksheets',
    description: 'Handwriting practice, creative writing, grammar rules, spelling, and composition skills.',
    detailedDescription: 'Develop strong writing skills with worksheets covering handwriting practice, creative writing prompts, grammar exercises, spelling activities, and composition techniques.',
    icon: PenTool,
    gradient: 'from-amber-500 via-yellow-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    href: '/worksheets/writing',
    popularity: 'hot',
    difficulty: 'Beginner to Intermediate',
    ageRange: 'Ages 5-14',
    weeklyDownloads: '1.5K',
    skills: ['Handwriting', 'Creative Writing', 'Grammar', 'Spelling', 'Essay Writing'],
    seoKeywords: 'writing worksheets, handwriting practice, creative writing prompts, grammar exercises, spelling activities',
    imageSrc: '/subjects/Grammar logo.png',
    imageAlt: 'Grammar and writing themed illustration'
  },
];

const getPopularityBadge = (popularity: string) => {
  const badges = {
    'hot': { icon: TrendingUp, text: 'Hot', color: 'bg-red-500 text-white' },
    'trending': { icon: ArrowRight, text: 'Trending', color: 'bg-blue-500 text-white' },
    'new': { icon: Sparkles, text: 'New', color: 'bg-green-500 text-white' },
    'popular': { icon: Heart, text: 'Popular', color: 'bg-purple-500 text-white' }
  };
  
  const badge = badges[popularity as keyof typeof badges];
  return badge;
};

export default function ExploreBySubject() {
  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Educational Worksheet Subjects",
    "description": "Free printable educational worksheets organized by subject for K-12 students",
    "url": "https://kidspirehub.com/subjects",
    "numberOfItems": subjects.length,
    "itemListElement": subjects.map((subject, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": subject.title,
      "description": subject.detailedDescription,
      "provider": {
        "@type": "Organization",
        "name": "KidspireHub"
      },
      "educationalLevel": subject.ageRange,
      "teaches": subject.skills,
      "keywords": subject.seoKeywords,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section 
        aria-labelledby="explore-by-subject-heading" 
        className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden"
        role="region"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-32 left-20 w-40 h-40 rounded-full bg-purple-200/20 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-32 w-32 h-32 rounded-full bg-blue-200/20 blur-2xl animate-float-delayed" />
          <div className="absolute top-1/2 right-20 w-28 h-28 rounded-full bg-pink-200/20 blur-2xl animate-bounce-slow" />
          
          {/* Floating subject icons */}
          <div className="absolute top-40 left-40 opacity-5 animate-spin-slow">
            <Calculator className="w-24 h-24 text-orange-600" />
          </div>
          <div className="absolute bottom-40 right-40 opacity-5 animate-bounce-slow">
            <BookOpen className="w-20 h-20 text-blue-600" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          
          {/* Enhanced Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Interactive trust badge */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-100 mb-8 group hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Award className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
              <span className={`${inter.className} text-sm font-semibold text-gray-700`}>
                Curriculum-Aligned Learning Resources
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-500 fill-current group-hover:scale-110 transition-transform duration-200" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
            </div>

            {/* SEO-optimized main heading */}
            <h2 
              id="explore-by-subject-heading" 
              className={`${nunito.className} text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6`}
            >
              Explore Educational Worksheets by{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                  Subject
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 opacity-30 rounded-full" />
              </span>
            </h2>
            
            <p className={`${inter.className} text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8`}>
              Discover <strong>700+ free printable worksheets</strong> organized by subject to support your child's{' '}
              <em>comprehensive learning journey</em> across all essential academic areas.
            </p>

            {/* Stats and social proof */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Download, label: '8K+ Downloads', sublabel: 'This week' },
                { icon: Users, label: '6 Subjects', sublabel: 'Available' },
                { icon: Star, label: '4.9 Rating', sublabel: 'User average' },
                { icon: Clock, label: 'Updated', sublabel: 'Daily' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className={`${fredoka.className} font-semibold text-gray-900`}>{stat.label}</div>
                  <div className={`${inter.className} text-sm text-gray-500`}>{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Subject Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => {
              const popularityBadge = getPopularityBadge(subject.popularity);
              
              return (
                <article 
                  key={subject.key}
                  className="group relative rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  itemScope
                  itemType="https://schema.org/Course"
                >
                  {/* Enhanced visual header with interactive elements */}
                  <div 
                    className={`h-48 relative overflow-hidden bg-white`} 
                    aria-hidden="true"
                  >
                    {/* Subject image */}
                    <Image
                      src={subject.imageSrc}
                      alt={subject.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={false}
                    />
                    {/* Soft gradient overlay for readability */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${subject.gradient} opacity-40`} />

                    {/* Popularity badge */}
                    <div className={`absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${popularityBadge.color} text-xs font-bold shadow-lg backdrop-blur-sm`}>
                      <popularityBadge.icon className="w-3 h-3" />
                      {popularityBadge.text}
                    </div>

                    {/* Download count indicator */}
                    <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 text-white text-xs font-semibold backdrop-blur-sm">
                      <Download className="w-3 h-3" />
                      {subject.weeklyDownloads}/week
                    </div>
                  </div>

                  {/* Enhanced content section */}
                  <div className="p-8 relative">
                    {/* Subject info header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 
                          className={`${fredoka.className} text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-1`}
                          itemProp="name"
                        >
                          {subject.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className={`${inter.className} font-semibold`}>{subject.count}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>{subject.ageRange}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p 
                      className={`${inter.className} text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300`}
                      itemProp="description"
                    >
                      {subject.description}
                    </p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {subject.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className={`${inter.className} text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${subject.bgGradient} text-gray-700 border border-gray-200`}
                        >
                          {skill}
                        </span>
                      ))}
                      {subject.skills.length > 3 && (
                        <span className={`${inter.className} text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600`}>
                          +{subject.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Enhanced CTA button */}
                    <Link
                      href={subject.href}
                      className={`${fredoka.className} group/btn relative inline-flex items-center justify-center w-full rounded-2xl bg-gradient-to-r ${subject.gradient} px-6 py-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
                      aria-label={`Browse ${subject.title} - ${subject.count} available`}
                      itemProp="url"
                    >
                      <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                      <Download className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      Browse {subject.title.split(' ')[0]} Worksheets
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>

                    {/* Progress indicator */}
                    <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`h-full bg-gradient-to-r ${subject.gradient} w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full`} />
                    </div>
                  </div>

                  {/* SEO meta information */}
                  <meta itemProp="keywords" content={subject.seoKeywords} />
                  <meta itemProp="educationalLevel" content={subject.ageRange} />
                </article>
              );
            })}
          </div>

          {/* Enhanced CTA section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0 opacity-10">
                <Calculator className="absolute top-6 left-6 w-12 h-12 animate-bounce" />
                <BookOpen className="absolute top-6 right-6 w-10 h-10 animate-pulse" />
                <FlaskConical className="absolute bottom-6 left-6 w-8 h-8 animate-spin" />
                <Palette className="absolute bottom-6 right-6 w-14 h-14 animate-ping" />
              </div>

              <div className="relative z-10">
                <h3 className={`${fredoka.className} text-3xl sm:text-4xl font-bold text-white mb-4`}>
                  Can't Find What You're Looking For?
                </h3>
                <p className={`${inter.className} text-xl text-purple-100 mb-8 max-w-2xl mx-auto`}>
                  Explore our complete collection of educational worksheets or request custom content for your specific learning needs.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/worksheets"
                    className={`${nunito.className} inline-flex items-center gap-3 px-10 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-purple-50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300`}
                  >
                    <Search className="w-6 h-6" />
                    Browse All Worksheets
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <div className="flex items-center gap-2 text-purple-100">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-sm font-medium">New worksheets added weekly</span>
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