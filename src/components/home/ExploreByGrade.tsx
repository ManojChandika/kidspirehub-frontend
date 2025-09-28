import Link from 'next/link';
import Image from 'next/image';
import { Inter, Nunito, Fredoka } from 'next/font/google';
import { 
  Download, 
  CheckCircle, 
  Star,
  Award,
  Users,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Sparkles,
  Heart,
  PlayCircle,
  Target,
  Brain,
  Zap
} from 'lucide-react';

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

type GradeCard = {
  key: string;
  title: string;
  ages: string;
  count: string;
  description: string;
  detailedDescription: string;
  skills: string[];
  href: string;
  imageSrc: string;
  imageAlt: string;
  difficulty: string;
  weeklyDownloads: string;
  topSubjects: string[];
  developmentalFocus: string[];
  gradient: string;
  bgGradient: string;
  popularity: 'hot' | 'trending' | 'popular' | 'new';
  seoKeywords: string;
};

const grades: GradeCard[] = [
  {
    key: 'preschool',
    title: 'Preschool Worksheets',
    ages: 'Ages 3-4',
    count: '85+ worksheets',
    description: 'Foundation skills through play-based learning with shapes, colors, letters, and basic number recognition.',
    detailedDescription: 'Comprehensive preschool worksheets focusing on early childhood development, pre-reading skills, basic math concepts, and social-emotional learning through engaging activities.',
    skills: ['Shape Recognition', 'Letter Tracing', 'Color Identification', 'Number Counting', 'Fine Motor Skills', 'Pattern Recognition'],
    href: '/worksheets/preschool',
    imageSrc: '/grades/preschool.png',
    imageAlt: 'Preschool children learning with colorful educational toys and worksheets',
    difficulty: 'Beginner',
    weeklyDownloads: '1.2K',
    topSubjects: ['Pre-Math', 'Pre-Reading', 'Art & Crafts'],
    developmentalFocus: ['Fine Motor Skills', 'Cognitive Development', 'Social Skills'],
    gradient: 'from-pink-400 via-rose-500 to-red-500',
    bgGradient: 'from-pink-50 to-rose-50',
    popularity: 'hot',
    seoKeywords: 'preschool worksheets, early learning, pre-k activities, toddler education, fine motor skills'
  },
  {
    key: 'kindergarten',
    title: 'Kindergarten Worksheets',
    ages: 'Ages 4-6',
    count: '120+ worksheets',
    description: 'Essential kindergarten skills including phonics, sight words, counting to 100, and basic addition concepts.',
    detailedDescription: 'Complete kindergarten curriculum worksheets covering phonics, reading readiness, math foundations, science exploration, and creative expression activities.',
    skills: ['Phonics & Sight Words', 'Counting to 100', 'Simple Addition', 'Patterns', 'Reading Readiness', 'Writing Practice'],
    href: '/worksheets/kindergarten',
    imageSrc: '/grades/kindergarten.png',
    imageAlt: 'Kindergarten classroom with children engaged in learning activities and educational worksheets',
    difficulty: 'Beginner',
    weeklyDownloads: '1.8K',
    topSubjects: ['Reading', 'Math', 'Science'],
    developmentalFocus: ['Reading Readiness', 'Number Sense', 'Social Development'],
    gradient: 'from-blue-400 via-cyan-500 to-teal-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    popularity: 'trending',
    seoKeywords: 'kindergarten worksheets, phonics practice, sight words, counting activities, kindergarten math'
  },
  {
    key: 'grade-1',
    title: '1st Grade Worksheets',
    ages: 'Ages 6-7',
    count: '140+ worksheets',
    description: 'First grade fundamentals with place value, addition/subtraction to 100, reading comprehension, and handwriting.',
    detailedDescription: 'Comprehensive first grade worksheets covering math operations, reading comprehension, writing skills, basic science concepts, and critical thinking development.',
    skills: ['Place Value', 'Word Problems', 'Handwriting', 'Reading Comprehension', 'Subtraction', 'Story Writing'],
    href: '/worksheets/grade-1',
    imageSrc: '/grades/grade-1.png',
    imageAlt: 'First grade students working on educational worksheets and learning activities',
    difficulty: 'Elementary',
    weeklyDownloads: '2.1K',
    topSubjects: ['Math', 'Reading', 'Writing'],
    developmentalFocus: ['Mathematical Thinking', 'Reading Fluency', 'Written Expression'],
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    bgGradient: 'from-green-50 to-emerald-50',
    popularity: 'hot',
    seoKeywords: 'first grade worksheets, 1st grade math, reading comprehension, place value, handwriting practice'
  },
  {
    key: 'grade-2',
    title: '2nd Grade Worksheets',
    ages: 'Ages 7-8',
    count: '135+ worksheets',
    description: 'Second grade skills with multiplication introduction, basic fractions, paragraph writing, and science exploration.',
    detailedDescription: 'Advanced second grade learning materials including multiplication concepts, fraction basics, creative writing, science investigations, and problem-solving activities.',
    skills: ['Multiplication Intro', 'Fractions Basics', 'Paragraph Writing', 'Science Habitats', 'Time & Money', 'Creative Stories'],
    href: '/worksheets/grade-2',
    imageSrc: '/grades/grade-2.png',
    imageAlt: 'Second grade educational worksheets covering math, reading, and science topics',
    difficulty: 'Elementary',
    weeklyDownloads: '1.9K',
    topSubjects: ['Math', 'Writing', 'Science'],
    developmentalFocus: ['Problem Solving', 'Creative Expression', 'Scientific Thinking'],
    gradient: 'from-purple-400 via-violet-500 to-indigo-500',
    bgGradient: 'from-purple-50 to-violet-50',
    popularity: 'popular',
    seoKeywords: 'second grade worksheets, 2nd grade math, multiplication basics, paragraph writing, fractions'
  },
  {
    key: 'grade-3',
    title: '3rd Grade Worksheets',
    ages: 'Ages 8-9',
    count: '130+ worksheets',
    description: 'Third grade mastery with multiplication/division, advanced fractions, science experiments, and geography.',
    detailedDescription: 'Challenging third grade curriculum including advanced math operations, scientific method, geography skills, and comprehensive reading strategies.',
    skills: ['Multiplication & Division', 'Advanced Fractions', 'Science Experiments', 'Geography', 'Essay Structure', 'Data Analysis'],
    href: '/worksheets/grade-3',
    imageSrc: '/grades/grade-3.png',
    imageAlt: 'Third grade learning activities including math problems, science experiments, and geography studies',
    difficulty: 'Intermediate',
    weeklyDownloads: '1.7K',
    topSubjects: ['Math', 'Science', 'Social Studies'],
    developmentalFocus: ['Analytical Thinking', 'Research Skills', 'Mathematical Reasoning'],
    gradient: 'from-orange-400 via-amber-500 to-yellow-500',
    bgGradient: 'from-orange-50 to-amber-50',
    popularity: 'trending',
    seoKeywords: 'third grade worksheets, 3rd grade math, multiplication division, science experiments, geography'
  },
  {
    key: 'grade-4',
    title: '4th Grade Worksheets',
    ages: 'Ages 9-10',
    count: '125+ worksheets',
    description: 'Fourth grade excellence with long division, decimals, essay writing, earth science, and state geography.',
    detailedDescription: 'Comprehensive fourth grade materials covering complex math concepts, advanced writing skills, earth science exploration, and detailed geography studies.',
    skills: ['Long Division', 'Decimals', 'Essay Writing', 'Earth Science', 'State Geography', 'Critical Reading'],
    href: '/worksheets/grade-4',
    imageSrc: '/grades/grade-4.png',
    imageAlt: 'Fourth grade educational materials showing advanced math, writing, and science worksheets',
    difficulty: 'Intermediate',
    weeklyDownloads: '1.5K',
    topSubjects: ['Math', 'Writing', 'Earth Science'],
    developmentalFocus: ['Complex Problem Solving', 'Academic Writing', 'Scientific Investigation'],
    gradient: 'from-red-400 via-pink-500 to-rose-500',
    bgGradient: 'from-red-50 to-pink-50',
    popularity: 'popular',
    seoKeywords: 'fourth grade worksheets, 4th grade math, long division, decimals, essay writing, earth science'
  },
  {
    key: 'grade-5',
    title: '5th Grade Worksheets',
    ages: 'Ages 10-11',
    count: '110+ worksheets',
    description: 'Fifth grade preparation with advanced fractions, data analysis, persuasive writing, and human body systems.',
    detailedDescription: 'Advanced fifth grade curriculum preparing students for middle school with complex math, sophisticated writing, detailed science study, and analytical thinking.',
    skills: ['Advanced Fractions', 'Graphs & Data', 'Persuasive Writing', 'Human Body Systems', 'Algebraic Thinking', 'Research Projects'],
    href: '/worksheets/grade-5',
    imageSrc: '/grades/grade-5.png',
    imageAlt: 'Fifth grade advanced learning projects including data analysis, persuasive writing, and science studies',
    difficulty: 'Advanced',
    weeklyDownloads: '1.3K',
    topSubjects: ['Advanced Math', 'Writing', 'Life Science'],
    developmentalFocus: ['Abstract Thinking', 'Persuasive Communication', 'Scientific Analysis'],
    gradient: 'from-indigo-400 via-blue-500 to-cyan-500',
    bgGradient: 'from-indigo-50 to-blue-50',
    popularity: 'new',
    seoKeywords: 'fifth grade worksheets, 5th grade math, fractions decimals, persuasive writing, human body'
  }
];

const getPopularityBadge = (popularity: string) => {
  const badges = {
    'hot': { icon: TrendingUp, text: 'Most Popular', color: 'bg-red-500 text-white', pulse: true },
    'trending': { icon: ArrowRight, text: 'Trending', color: 'bg-blue-500 text-white', pulse: false },
    'new': { icon: Sparkles, text: 'New Content', color: 'bg-green-500 text-white', pulse: true },
    'popular': { icon: Heart, text: 'Popular', color: 'bg-purple-500 text-white', pulse: false }
  };
  
  return badges[popularity as keyof typeof badges];
};

export default function ExploreByGrade() {
  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Educational Worksheets by Grade Level",
    "description": "Free printable educational worksheets organized by grade level from preschool through 5th grade",
    "url": "https://kidspirehub.com/grades",
    "numberOfItems": grades.length,
    "itemListElement": grades.map((grade, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": grade.title,
      "description": grade.detailedDescription,
      "provider": {
        "@type": "Organization",
        "name": "KidspireHub"
      },
      "educationalLevel": grade.ages,
      "teaches": grade.skills,
      "keywords": grade.seoKeywords,
      "audience": {
        "@type": "EducationalAudience",
        "audienceType": "student",
        "educationalRole": "student"
      },
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
        aria-labelledby="explore-by-grade-heading" 
        className="relative bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 overflow-hidden"
        role="region"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-20 left-16 w-36 h-36 rounded-full bg-indigo-200/20 blur-3xl animate-float" />
          <div className="absolute bottom-32 right-24 w-32 h-32 rounded-full bg-purple-200/20 blur-2xl animate-float-delayed" />
          <div className="absolute top-1/2 right-16 w-28 h-28 rounded-full bg-blue-200/20 blur-2xl animate-bounce-slow" />
          
          {/* Floating educational elements */}
          <div className="absolute top-32 right-32 opacity-5 animate-spin-slow">
            <BookOpen className="w-24 h-24 text-blue-600" />
          </div>
          <div className="absolute bottom-40 left-32 opacity-5 animate-bounce-slow">
            <Brain className="w-20 h-20 text-purple-600" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          
          {/* Enhanced Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-indigo-100 mb-8 group hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Award className="w-5 h-5 text-indigo-600 group-hover:rotate-12 transition-transform duration-300" />
              <span className={`${inter.className} text-sm font-semibold text-gray-700`}>
                Age-Appropriate Learning Materials
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-500 fill-current group-hover:scale-110 transition-transform duration-200" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
            </div>

            {/* SEO-optimized main heading */}
            <h2 
              id="explore-by-grade-heading" 
              className={`${nunito.className} text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6`}
            >
              Educational Worksheets by{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Grade Level
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 opacity-30 rounded-full" />
              </span>
            </h2>
            
            <p className={`${inter.className} text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8`}>
              Discover <strong>age-appropriate worksheets</strong> designed to match your child's{' '}
              <em>developmental stage</em> and learning needs from preschool through 5th grade.
            </p>

            {/* Enhanced stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Users, label: '12K+ Students', sublabel: 'Learning daily', color: 'text-blue-600' },
                { icon: Target, label: '7 Grade Levels', sublabel: 'Ages 3-11', color: 'text-green-600' },
                { icon: Download, label: '700+ Worksheets', sublabel: 'Available now', color: 'text-purple-600' },
                { icon: Clock, label: 'New Content', sublabel: 'Added weekly', color: 'text-orange-600' }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <stat.icon className={`w-7 h-7 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`${fredoka.className} font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors duration-300`}>{stat.label}</div>
                  <div className={`${inter.className} text-sm text-gray-500`}>{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Grade Cards */}
          <div className="space-y-12">
            {grades.map((grade, index) => {
              const popularityBadge = getPopularityBadge(grade.popularity);
              const isEven = index % 2 === 0;
              
              return (
                <article 
                  key={grade.key}
                  className="group relative rounded-3xl border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                  itemScope
                  itemType="https://schema.org/Course"
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${grade.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0`}>
                    
                    {/* Enhanced Image Section */}
                    <div className={`relative h-72 lg:h-80 lg:col-span-2 overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                      {/* Image container with enhanced effects */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={grade.imageSrc} 
                          alt={grade.imageAlt} 
                          fill 
                          sizes="(max-width: 1024px) 100vw, 40vw" 
                          className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${grade.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                        
                        {/* Floating badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full ${popularityBadge.color} text-xs font-bold shadow-lg backdrop-blur-sm ${popularityBadge.pulse ? 'animate-pulse' : ''}`}>
                            <popularityBadge.icon className="w-3 h-3" />
                            {popularityBadge.text}
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/70 text-white text-xs font-semibold backdrop-blur-sm">
                            <Download className="w-3 h-3" />
                            {grade.weeklyDownloads}/week
                          </div>
                        </div>

                        {/* Difficulty indicator */}
                        <div className="absolute top-4 right-4 px-3 py-2 rounded-full bg-white/90 text-gray-800 text-xs font-bold backdrop-blur-sm shadow-lg">
                          {grade.difficulty} Level
                        </div>

                        {/* Interactive play button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <PlayCircle className="w-8 h-8 text-gray-800" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className={`p-8 lg:p-12 lg:col-span-3 flex flex-col justify-between ${!isEven ? 'lg:order-1' : ''}`}>
                      
                      {/* Header section */}
                      <div>
                        <div className="flex items-start justify-between gap-6 mb-4">
                          <div>
                            <h3 
                              className={`${fredoka.className} text-3xl sm:text-4xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-2`}
                              itemProp="name"
                            >
                              {grade.title}
                            </h3>
                            <div className="flex items-center gap-4 text-lg">
                              <span className={`${inter.className} font-bold text-indigo-600`}>{grade.ages}</span>
                              <span className="w-2 h-2 bg-gray-300 rounded-full" />
                              <span className={`${inter.className} font-semibold text-gray-600`}>{grade.count}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced description */}
                        <p 
                          className={`${inter.className} text-lg text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300`}
                          itemProp="description"
                        >
                          {grade.description}
                        </p>

                        {/* Top subjects */}
                        <div className="mb-6">
                          <h4 className={`${nunito.className} text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide`}>
                            Top Subjects
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {grade.topSubjects.map((subject, subjectIndex) => (
                              <span 
                                key={subjectIndex}
                                className={`${inter.className} text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r ${grade.gradient} text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced skills grid */}
                        <div className="mb-8">
                          <h4 className={`${nunito.className} text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide`}>
                            Key Learning Skills
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {grade.skills.map((skill, skillIndex) => (
                              <div 
                                key={skillIndex} 
                                className="group/skill flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 transform hover:scale-105"
                              >
                                <CheckCircle className="w-5 h-5 text-green-600 group-hover/skill:scale-110 group-hover/skill:rotate-12 transition-all duration-300" />
                                <span className={`${inter.className} font-medium text-gray-700 group-hover/skill:text-gray-800 transition-colors duration-300`}>
                                  {skill}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Developmental focus */}
                        <div className="mb-8">
                          <h4 className={`${nunito.className} text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide`}>
                            <Brain className="inline w-4 h-4 mr-2" />
                            Developmental Focus
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {grade.developmentalFocus.map((focus, focusIndex) => (
                              <span 
                                key={focusIndex}
                                className={`${inter.className} text-xs font-semibold px-3 py-2 rounded-full bg-gradient-to-r ${grade.bgGradient} border border-gray-200 text-gray-700`}
                              >
                                {focus}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced CTA section */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <Link
                          href={grade.href}
                          aria-label={`Browse ${grade.title} - ${grade.count} available worksheets for ${grade.ages}`}
                          className={`${fredoka.className} group/btn relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r ${grade.gradient} px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                          itemProp="url"
                        >
                          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                          <Download className="w-6 h-6 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-300" />
                          Browse {grade.title.split(' ')[0]} Worksheets
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>

                        {/* Quick stats */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span className={`${inter.className} font-medium`}>Popular Choice</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-yellow-600" />
                            <span className={`${inter.className} font-medium`}>Instant Download</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress indicator */}
                      <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`h-full bg-gradient-to-r ${grade.gradient} w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full`} />
                      </div>
                    </div>
                  </div>

                  {/* SEO meta information */}
                  <meta itemProp="keywords" content={grade.seoKeywords} />
                  <meta itemProp="educationalLevel" content={grade.ages} />
                </article>
              );
            })}
          </div>

          {/* Enhanced Call-to-Action Section */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              {/* Background decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 left-6 w-16 h-16 border-2 border-white rounded-full animate-pulse" />
                <div className="absolute top-12 right-12 w-8 h-8 border-2 border-white rounded-full animate-bounce" />
                <div className="absolute bottom-12 left-12 w-12 h-12 border-2 border-white rounded-full animate-ping" />
                <div className="absolute bottom-6 right-6 w-6 h-6 bg-white rounded-full animate-pulse" />
                
                {/* Floating grade icons */}
                <BookOpen className="absolute top-8 left-1/4 w-10 h-10 animate-float" />
                <Brain className="absolute bottom-8 right-1/4 w-8 h-8 animate-float-delayed" />
              </div>

              <div className="relative z-10 text-center">
                <h3 className={`${fredoka.className} text-3xl sm:text-4xl font-bold text-white mb-4`}>
                  Ready to Boost Your Child's Learning?
                </h3>
                <p className={`${inter.className} text-xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed`}>
                  Join thousands of parents and teachers who trust our age-appropriate worksheets to support their children's educational journey from preschool through elementary school.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/worksheets"
                    className={`${nunito.className} inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-indigo-50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300`}
                  >
                    <Download className="w-6 h-6" />
                    Explore All Grade Levels
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <div className="flex items-center gap-4 text-indigo-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className={`${inter.className} text-sm font-medium`}>Always Free</span>
                    </div>
                    <div className="w-1 h-1 bg-indigo-300 rounded-full" />
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-300" />
                      <span className={`${inter.className} text-sm font-medium`}>Instant Download</span>
                    </div>
                  </div>
                </div>

                {/* Social proof section */}
                <div className="mt-8 flex items-center justify-center gap-6">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-300 to-blue-400 border-2 border-white shadow-lg" />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white shadow-lg flex items-center justify-center text-xs font-bold text-white">
                      +5K
                    </div>
                  </div>
                  <p className={`${inter.className} text-indigo-100 text-sm`}>
                    <strong>5,234 parents</strong> downloaded worksheets this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}