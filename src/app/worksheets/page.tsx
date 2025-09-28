"use client";

import { useMemo, useState, useEffect } from 'react';
import { 
  SlidersHorizontal, 
  FilterX, 
  Heart, 
  Search, 
  Loader2, 
  Download, 
  Eye,
  Star,
  Users,
  BookOpen,
  Award,
  Zap,
  ChevronDown,
  ChevronRight,
  Grid3X3,
  List,
  TrendingUp,
  Shield,
  Clock,
  Plus,
  Minus,
  CheckSquare,
  Square,
  Folder,
  FolderOpen,
  Tag,
  Share2,
  Bookmark,
  ArrowUp,
  X,
  Trash2
} from 'lucide-react';
import Head from 'next/head';

type Grade = 'Pre-K' | 'K' | '1' | '2' | '3' | '4' | '5' | '6';
type Subject = 'Math' | 'English' | 'Science' | 'Art' | 'Games' | 'Social Studies' | 'Music';
type ResourceType = 'Worksheet' | 'Coloring' | 'Puzzle' | 'Game' | 'Activity' | 'Assessment';
type Style = 'Colorful' | 'Black & White' | 'Interactive' | 'Simple' | 'Detailed' | 'Fun Characters';
type ViewMode = 'grid' | 'list';
type SortBy = 'newest' | 'popular' | 'downloads' | 'title';

type SubTopic = {
  id: string;
  name: string;
  count: number;
};

type Topic = {
  id: string;
  name: string;
  count: number;
  subtopics: SubTopic[];
};

type SubjectTopics = {
  [key in Subject]: Topic[];
};

type Worksheet = {
  id: string;
  title: string;
  subject: Subject;
  grade: Grade;
  type: ResourceType;
  style: Style;
  description: string;
  skills: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  downloads: number;
  rating: number;
  imageUrl: string;
  isFavorite: boolean;
  isNew: boolean;
  isPremium: boolean;
  topicId?: string;
  subtopicIds?: string[];
  tags: string[];
  dateAdded: string;
  author: string;
  language: string;
};

const ALL_GRADES: Grade[] = ['Pre-K', 'K', '1', '2', '3', '4', '5', '6'];
const ALL_SUBJECTS: Subject[] = ['Math', 'English', 'Science', 'Art', 'Games', 'Social Studies', 'Music'];
const ALL_TYPES: ResourceType[] = ['Worksheet', 'Coloring', 'Puzzle', 'Game', 'Activity', 'Assessment'];
const ALL_STYLES: Style[] = ['Colorful', 'Black & White', 'Interactive', 'Simple', 'Detailed', 'Fun Characters'];

// Define comprehensive topic structure
const SUBJECT_TOPICS: SubjectTopics = {
  'Math': [
    {
      id: 'numbers',
      name: 'Numbers & Counting',
      count: 45,
      subtopics: [
        { id: 'counting-1-10', name: 'Counting 1-10', count: 15 },
        { id: 'counting-1-100', name: 'Counting 1-100', count: 12 },
        { id: 'number-recognition', name: 'Number Recognition', count: 10 },
        { id: 'skip-counting', name: 'Skip Counting', count: 8 }
      ]
    },
    {
      id: 'addition',
      name: 'Addition',
      count: 38,
      subtopics: [
        { id: 'single-digit', name: 'Single Digit', count: 15 },
        { id: 'double-digit', name: 'Double Digit', count: 12 },
        { id: 'word-problems', name: 'Word Problems', count: 11 }
      ]
    },
    {
      id: 'subtraction',
      name: 'Subtraction',
      count: 32,
      subtopics: [
        { id: 'basic-subtraction', name: 'Basic Subtraction', count: 18 },
        { id: 'regrouping', name: 'With Regrouping', count: 14 }
      ]
    },
    {
      id: 'geometry',
      name: 'Geometry',
      count: 28,
      subtopics: [
        { id: 'shapes', name: 'Shapes', count: 15 },
        { id: 'patterns', name: 'Patterns', count: 8 },
        { id: 'symmetry', name: 'Symmetry', count: 5 }
      ]
    },
    {
      id: 'measurement',
      name: 'Measurement',
      count: 25,
      subtopics: [
        { id: 'length', name: 'Length', count: 10 },
        { id: 'weight', name: 'Weight', count: 8 },
        { id: 'time', name: 'Time', count: 7 }
      ]
    }
  ],
  'English': [
    {
      id: 'phonics',
      name: 'Phonics',
      count: 52,
      subtopics: [
        { id: 'letter-sounds', name: 'Letter Sounds', count: 20 },
        { id: 'blending', name: 'Blending', count: 15 },
        { id: 'sight-words', name: 'Sight Words', count: 17 }
      ]
    },
    {
      id: 'reading',
      name: 'Reading Comprehension',
      count: 43,
      subtopics: [
        { id: 'short-passages', name: 'Short Passages', count: 18 },
        { id: 'story-elements', name: 'Story Elements', count: 15 },
        { id: 'main-idea', name: 'Main Idea', count: 10 }
      ]
    },
    {
      id: 'writing',
      name: 'Writing Skills',
      count: 35,
      subtopics: [
        { id: 'handwriting', name: 'Handwriting Practice', count: 15 },
        { id: 'creative-writing', name: 'Creative Writing', count: 12 },
        { id: 'grammar', name: 'Grammar', count: 8 }
      ]
    },
    {
      id: 'vocabulary',
      name: 'Vocabulary',
      count: 30,
      subtopics: [
        { id: 'word-families', name: 'Word Families', count: 12 },
        { id: 'synonyms', name: 'Synonyms & Antonyms', count: 10 },
        { id: 'context-clues', name: 'Context Clues', count: 8 }
      ]
    }
  ],
  'Science': [
    {
      id: 'life-science',
      name: 'Life Science',
      count: 40,
      subtopics: [
        { id: 'animals', name: 'Animals', count: 15 },
        { id: 'plants', name: 'Plants', count: 12 },
        { id: 'habitats', name: 'Habitats', count: 8 },
        { id: 'life-cycles', name: 'Life Cycles', count: 5 }
      ]
    },
    {
      id: 'earth-science',
      name: 'Earth Science',
      count: 35,
      subtopics: [
        { id: 'weather', name: 'Weather', count: 15 },
        { id: 'seasons', name: 'Seasons', count: 10 },
        { id: 'solar-system', name: 'Solar System', count: 10 }
      ]
    },
    {
      id: 'physical-science',
      name: 'Physical Science',
      count: 25,
      subtopics: [
        { id: 'matter', name: 'States of Matter', count: 10 },
        { id: 'magnets', name: 'Magnets', count: 8 },
        { id: 'simple-machines', name: 'Simple Machines', count: 7 }
      ]
    }
  ],
  'Art': [
    {
      id: 'drawing',
      name: 'Drawing & Sketching',
      count: 35,
      subtopics: [
        { id: 'basic-shapes', name: 'Basic Shapes', count: 15 },
        { id: 'step-by-step', name: 'Step-by-Step Drawing', count: 12 },
        { id: 'shading', name: 'Shading Techniques', count: 8 }
      ]
    },
    {
      id: 'coloring',
      name: 'Coloring Pages',
      count: 48,
      subtopics: [
        { id: 'animals-coloring', name: 'Animals', count: 15 },
        { id: 'nature-coloring', name: 'Nature', count: 12 },
        { id: 'patterns-coloring', name: 'Patterns', count: 10 },
        { id: 'holidays-coloring', name: 'Holidays', count: 11 }
      ]
    },
    {
      id: 'crafts',
      name: 'Arts & Crafts',
      count: 30,
      subtopics: [
        { id: 'paper-crafts', name: 'Paper Crafts', count: 15 },
        { id: 'seasonal-crafts', name: 'Seasonal Crafts', count: 10 },
        { id: 'recycled-crafts', name: 'Recycled Materials', count: 5 }
      ]
    }
  ],
  'Games': [
    {
      id: 'puzzles',
      name: 'Puzzles',
      count: 42,
      subtopics: [
        { id: 'word-search', name: 'Word Search', count: 15 },
        { id: 'crossword', name: 'Crosswords', count: 12 },
        { id: 'sudoku', name: 'Number Puzzles', count: 8 },
        { id: 'mazes', name: 'Mazes', count: 7 }
      ]
    },
    {
      id: 'brain-teasers',
      name: 'Brain Teasers',
      count: 25,
      subtopics: [
        { id: 'logic-puzzles', name: 'Logic Puzzles', count: 10 },
        { id: 'riddles', name: 'Riddles', count: 8 },
        { id: 'pattern-games', name: 'Pattern Games', count: 7 }
      ]
    },
    {
      id: 'educational-games',
      name: 'Educational Games',
      count: 33,
      subtopics: [
        { id: 'memory-games', name: 'Memory Games', count: 12 },
        { id: 'matching-games', name: 'Matching Games', count: 11 },
        { id: 'board-games', name: 'Educational Board Games', count: 10 }
      ]
    }
  ],
  'Social Studies': [
    {
      id: 'geography',
      name: 'Geography',
      count: 38,
      subtopics: [
        { id: 'maps', name: 'Maps & Directions', count: 15 },
        { id: 'countries', name: 'Countries & Capitals', count: 12 },
        { id: 'landforms', name: 'Landforms', count: 11 }
      ]
    },
    {
      id: 'history',
      name: 'History',
      count: 30,
      subtopics: [
        { id: 'american-history', name: 'American History', count: 12 },
        { id: 'world-history', name: 'World History', count: 10 },
        { id: 'historical-figures', name: 'Historical Figures', count: 8 }
      ]
    },
    {
      id: 'community',
      name: 'Community Helpers',
      count: 25,
      subtopics: [
        { id: 'jobs', name: 'Jobs & Careers', count: 12 },
        { id: 'community-services', name: 'Community Services', count: 8 },
        { id: 'safety', name: 'Safety Rules', count: 5 }
      ]
    }
  ],
  'Music': [
    {
      id: 'instruments',
      name: 'Musical Instruments',
      count: 28,
      subtopics: [
        { id: 'string-instruments', name: 'String Instruments', count: 10 },
        { id: 'wind-instruments', name: 'Wind Instruments', count: 9 },
        { id: 'percussion', name: 'Percussion', count: 9 }
      ]
    },
    {
      id: 'theory',
      name: 'Music Theory',
      count: 22,
      subtopics: [
        { id: 'notes', name: 'Musical Notes', count: 8 },
        { id: 'rhythm', name: 'Rhythm', count: 7 },
        { id: 'scales', name: 'Scales', count: 7 }
      ]
    },
    {
      id: 'activities',
      name: 'Music Activities',
      count: 20,
      subtopics: [
        { id: 'singing', name: 'Singing Activities', count: 8 },
        { id: 'movement', name: 'Movement & Dance', count: 7 },
        { id: 'listening', name: 'Listening Activities', count: 5 }
      ]
    }
  ]
};

// Sample worksheet data with SEO-friendly additions
const WORKSHEETS: Worksheet[] = [
  {
    id: '1',
    title: 'Addition Fun with Safari Animals - Grade 1 Math Worksheet',
    subject: 'Math',
    grade: '1',
    type: 'Worksheet',
    style: 'Colorful',
    description: 'Practice single-digit addition with cute safari animals in this engaging worksheet. Perfect for first graders learning basic math skills at home or in the classroom.',
    skills: ['Addition', 'Number Recognition', 'Animal Names'],
    difficulty: 'Easy',
    duration: '15 min',
    downloads: 2847,
    rating: 4.8,
    imageUrl: '/api/placeholder/400/300',
    isFavorite: false,
    isNew: true,
    isPremium: false,
    topicId: 'addition',
    subtopicIds: ['single-digit'],
    tags: ['animals', 'addition', 'colorful', 'grade-1', 'printable'],
    dateAdded: '2024-01-15',
    author: 'KidsSpire Education Team',
    language: 'English'
  },
  {
    id: '2',
    title: 'Letter Tracing Adventure - Handwriting Practice for Pre-K',
    subject: 'English',
    grade: 'Pre-K',
    type: 'Worksheet',
    style: 'Simple',
    description: 'Help children develop fine motor skills and letter recognition with guided tracing exercises. Ideal for preschoolers starting their writing journey.',
    skills: ['Letter Formation', 'Fine Motor Skills', 'Handwriting'],
    difficulty: 'Easy',
    duration: '20 min',
    downloads: 3521,
    rating: 4.9,
    imageUrl: '/api/placeholder/400/300',
    isFavorite: true,
    isNew: false,
    isPremium: false,
    topicId: 'writing',
    subtopicIds: ['handwriting'],
    tags: ['letters', 'tracing', 'handwriting', 'pre-k', 'motor-skills'],
    dateAdded: '2024-01-10',
    author: 'KidsSpire Education Team',
    language: 'English'
  },
  {
    id: '3',
    title: 'Ocean Life Coloring & Facts - Grade 2 Science Activity',
    subject: 'Science',
    grade: '2',
    type: 'Coloring',
    style: 'Detailed',
    description: 'Discover amazing ocean creatures while coloring and learning fun facts. Combines creativity with science education for second grade students.',
    skills: ['Science Knowledge', 'Reading', 'Creativity'],
    difficulty: 'Medium',
    duration: '25 min',
    downloads: 1965,
    rating: 4.7,
    imageUrl: '/api/placeholder/400/300',
    isFavorite: false,
    isNew: false,
    isPremium: true,
    topicId: 'life-science',
    subtopicIds: ['animals'],
    tags: ['ocean', 'animals', 'science', 'coloring', 'grade-2'],
    dateAdded: '2024-01-08',
    author: 'Marine Biology Experts',
    language: 'English'
  },
  {
    id: '4',
    title: 'Shape Sorting Puzzle - Kindergarten Math Activity',
    subject: 'Math',
    grade: 'K',
    type: 'Puzzle',
    style: 'Colorful',
    description: 'Interactive shape recognition and sorting activity designed specifically for kindergarten students. Builds foundational geometry skills through play.',
    skills: ['Shape Recognition', 'Sorting', 'Logic'],
    difficulty: 'Easy',
    duration: '10 min',
    downloads: 4235,
    rating: 4.6,
    imageUrl: '/api/placeholder/400/300',
    isFavorite: false,
    isNew: true,
    isPremium: false,
    topicId: 'geometry',
    subtopicIds: ['shapes'],
    tags: ['shapes', 'sorting', 'kindergarten', 'geometry', 'puzzle'],
    dateAdded: '2024-01-12',
    author: 'Early Math Specialists',
    language: 'English'
  },
  {
    id: '5',
    title: 'Dinosaur Discovery Memory Game - Grade 3 Educational Fun',
    subject: 'Games',
    grade: '3',
    type: 'Game',
    style: 'Fun Characters',
    description: 'Educational game about dinosaurs with matching and memory challenges. Perfect for third graders who love prehistoric creatures and brain games.',
    skills: ['Memory', 'Science Facts', 'Problem Solving'],
    difficulty: 'Medium',
    duration: '30 min',
    downloads: 1478,
    rating: 4.5,
    imageUrl: '/api/placeholder/400/300',
    isFavorite: true,
    isNew: false,
    isPremium: false,
    topicId: 'educational-games',
    subtopicIds: ['memory-games'],
    tags: ['dinosaurs', 'memory', 'game', 'grade-3', 'paleontology'],
    dateAdded: '2024-01-05',
    author: 'Educational Game Designers',
    language: 'English'
  },
  {
    id: '6',
    title: 'Weather Patterns Assessment - Grade 4 Science Test',
    subject: 'Science',
    grade: '4',
    type: 'Assessment',
    style: 'Simple',
    description: 'Comprehensive assessment to test understanding of weather patterns and seasonal changes. Aligned with fourth grade science curriculum standards.',
    skills: ['Weather Knowledge', 'Critical Thinking', 'Observation'],
    difficulty: 'Hard',
    duration: '45 min',
    downloads: 892,
    rating: 4.4,
    imageUrl: '/api/placeholder/400/300',
    isFavorite: false,
    isNew: false,
    isPremium: true,
    topicId: 'earth-science',
    subtopicIds: ['weather'],
    tags: ['weather', 'assessment', 'science', 'grade-4', 'meteorology'],
    dateAdded: '2024-01-03',
    author: 'Science Curriculum Team',
    language: 'English'
  }
];

// Breadcrumb component for better navigation
function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
            {item.href ? (
              <a href={item.href} className="hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Back to top button
function BackToTop({ show }: { show: boolean }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-50"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

// Loading skeleton component
function WorksheetSkeleton() {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-gray-200"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        <div className="flex space-x-2">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="h-6 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default function WorksheetsPage() {
  const [query, setQuery] = useState('');
	const [favorites, setFavorites] = useState<string[]>([]);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);
  const [types, setTypes] = useState<ResourceType[]>([]);
  const [styles, setStyles] = useState<Style[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>('newest');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
	const [isFavOpen, setIsFavOpen] = useState(false);
  const itemsPerPage = 9;

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document title and meta description dynamically
  useEffect(() => {
    const updateMeta = () => {
      let title = 'Free Educational Worksheets for Kids | KidsSpire Hub';
      let description = 'Download free printable educational worksheets for children K-12. Math, reading, science, art worksheets and more.';
      
      if (subjects.length === 1) {
        title = `Free ${subjects[0]} Worksheets for Kids | KidsSpire Hub`;
        description = `Download ${subjects[0].toLowerCase()} worksheets for children. High-quality educational resources for homeschool and classroom use.`;
      }
      
      if (grades.length === 1) {
        const gradeText = grades[0] === 'Pre-K' ? 'Preschool' : `Grade ${grades[0]}`;
        title = `${gradeText} Worksheets - Free Educational Resources | KidsSpire Hub`;
        description = `Free ${gradeText.toLowerCase()} worksheets covering all subjects. Perfect for teachers, parents, and homeschooling families.`;
      }
      
      if (subjects.length === 1 && grades.length === 1) {
        const gradeText = grades[0] === 'Pre-K' ? 'Preschool' : `Grade ${grades[0]}`;
        title = `${gradeText} ${subjects[0]} Worksheets - Free Download | KidsSpire Hub`;
        description = `Free ${gradeText.toLowerCase()} ${subjects[0].toLowerCase()} worksheets. Printable educational resources aligned with curriculum standards.`;
      }
      
      document.title = title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    };
    
    updateMeta();
  }, [subjects, grades]);

	// Persist favorites between sessions
	useEffect(() => {
		try {
			const saved = localStorage.getItem('ksh_favorites');
			if (saved) {
				setFavorites(JSON.parse(saved));
			}
		} catch {}
	}, []);

	useEffect(() => {
		try {
			localStorage.setItem('ksh_favorites', JSON.stringify(favorites));
		} catch {}
	}, [favorites]);

  // Get available topics based on selected subjects
  const availableTopics = useMemo(() => {
    if (subjects.length === 0) return [];
    
    const topics: Topic[] = [];
    subjects.forEach(subject => {
      if (SUBJECT_TOPICS[subject]) {
        topics.push(...SUBJECT_TOPICS[subject]);
      }
    });
    return topics;
  }, [subjects]);

  // Get available subtopics based on selected topics
  const availableSubtopics = useMemo(() => {
    if (selectedTopics.length === 0) return [];
    
    const subtopics: SubTopic[] = [];
    availableTopics.forEach(topic => {
      if (selectedTopics.includes(topic.id)) {
        subtopics.push(...topic.subtopics);
      }
    });
    return subtopics;
  }, [selectedTopics, availableTopics]);

  const toggle = <T extends string>(set: (v: T[]) => void, list: T[], value: T) => {
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const toggleTopic = (topicId: string) => {
    const newTopics = selectedTopics.includes(topicId) 
      ? selectedTopics.filter(t => t !== topicId)
      : [...selectedTopics, topicId];
    
    setSelectedTopics(newTopics);
    
    // Remove subtopics that belong to deselected topics
    if (!newTopics.includes(topicId)) {
      const topicToRemove = availableTopics.find(t => t.id === topicId);
      if (topicToRemove) {
        const subtopicsToRemove = topicToRemove.subtopics.map(st => st.id);
        setSelectedSubtopics(prev => prev.filter(st => !subtopicsToRemove.includes(st)));
      }
    }
  };

  const toggleFavorite = (worksheetId: string) => {
    setFavorites(prev => 
      prev.includes(worksheetId) 
        ? prev.filter(id => id !== worksheetId)
        : [...prev, worksheetId]
    );
  };

	const removeFavorite = (worksheetId: string) => {
		setFavorites(prev => prev.filter(id => id !== worksheetId));
	};

	const clearFavorites = () => setFavorites([]);

  const shareWorksheet = (worksheet: Worksheet) => {
    if (navigator.share) {
      navigator.share({
        title: worksheet.title,
        text: worksheet.description,
        url: window.location.origin + `/worksheets/${worksheet.id}`
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.origin + `/worksheets/${worksheet.id}`);
    }
  };

  const activeFiltersCount = grades.length + subjects.length + selectedTopics.length + selectedSubtopics.length + types.length + styles.length;

  const clearAll = () => {
    setGrades([]); 
    setSubjects([]); 
    setSelectedTopics([]);
    setSelectedSubtopics([]);
    setTypes([]); 
    setStyles([]); 
    setQuery('');
    setExpandedTopics([]);
    setCurrentPage(1);
  };

  const results = useMemo(() => {
    setIsLoading(true);
    
    let filtered = WORKSHEETS.filter(worksheet => {
      // Search query filter
      if (query) {
        const searchText = `${worksheet.title} ${worksheet.description} ${worksheet.skills.join(' ')} ${worksheet.tags.join(' ')}`.toLowerCase();
        if (!searchText.includes(query.toLowerCase())) return false;
      }

      // Grade filter
      if (grades.length > 0 && !grades.includes(worksheet.grade)) {
        return false;
      }

      // Subject filter
      if (subjects.length > 0 && !subjects.includes(worksheet.subject)) {
        return false;
      }

      // Topic filter
      if (selectedTopics.length > 0 && (!worksheet.topicId || !selectedTopics.includes(worksheet.topicId))) {
        return false;
      }

      // Subtopic filter
      if (selectedSubtopics.length > 0) {
        const hasSelectedSubtopic = worksheet.subtopicIds?.some(subtopicId => 
          selectedSubtopics.includes(subtopicId)
        );
        if (!hasSelectedSubtopic) return false;
      }

      // Type filter
      if (types.length > 0 && !types.includes(worksheet.type)) {
        return false;
      }

      // Style filter
      if (styles.length > 0 && !styles.includes(worksheet.style)) {
        return false;
      }

      return true;
    });

    // Sort results
    switch (sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => b.downloads - a.downloads);
        break;
      case 'downloads':
        filtered = filtered.sort((a, b) => b.downloads - a.downloads);
        break;
      case 'title':
        filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    setTimeout(() => setIsLoading(false), 300); // Simulate loading
    return filtered;
  }, [query, grades, subjects, selectedTopics, selectedSubtopics, types, styles, sortBy]);

  // Paginated results
  const paginatedResults = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return results.slice(0, endIndex); // Show all results up to current page
  }, [results, currentPage]);

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const hasMore = currentPage < totalPages;

  const loadMore = () => {
    if (!hasMore || loadingMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setLoadingMore(false);
    }, 500);
  };

  const getSortLabel = (sort: SortBy) => {
    switch (sort) {
      case 'newest': return 'Newest First';
      case 'popular': return 'Most Popular';
      case 'downloads': return 'Most Downloaded';
      case 'title': return 'A to Z';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDownloads = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

	const favoriteItems = useMemo(() => WORKSHEETS.filter(w => favorites.includes(w.id)), [favorites]);

  // Generate breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Educational Resources', href: '/resources' },
    { label: 'Free Worksheets' }
  ];

  // Add dynamic breadcrumb based on filters
  if (subjects.length === 1) {
    breadcrumbItems.push({ label: subjects[0] + ' Worksheets' });
  }
  if (grades.length === 1) {
    const gradeText = grades[0] === 'Pre-K' ? 'Preschool' : `Grade ${grades[0]}`;
    breadcrumbItems.push({ label: gradeText });
  }

  return (
    <>
		{/* SEO Head Tags */}
		<Head>
        <title>Free Educational Worksheets for Kids | KidsSpire Hub</title>
        <meta name="description" content="Download 500+ free printable educational worksheets for children K-12. Math, reading, science, art worksheets and more. Perfect for homeschool and classroom use." />
        <meta name="keywords" content="free worksheets, educational worksheets, printable worksheets, kids worksheets, homeschool worksheets, teaching resources" />
        <meta property="og:title" content="Free Educational Worksheets for Kids | KidsSpire Hub" />
        <meta property="og:description" content="Download 500+ free printable educational worksheets for children K-12. Math, reading, science, art worksheets and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kidsspirehub.com/worksheets" />
        <meta property="og:image" content="/og-worksheets.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Educational Worksheets for Kids" />
        <meta name="twitter:description" content="Download 500+ free printable educational worksheets for children K-12." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kidsspirehub.com/worksheets" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Free Educational Worksheets for Kids",
            "description": "Download 500+ free printable educational worksheets for children K-12. Math, reading, science, art worksheets and more.",
            "url": "https://kidsspirehub.com/worksheets",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": results.length,
              "itemListElement": results.slice(0, 5).map((worksheet, index) => ({
                "@type": "CreativeWork",
                "position": index + 1,
                "name": worksheet.title,
                "description": worksheet.description,
                "educationalUse": "assignment",
                "educationalLevel": worksheet.grade,
                "learningResourceType": worksheet.type,
                "author": {
                  "@type": "Organization",
                  "name": worksheet.author
                }
              }))
            }
          })}
        </script>
		</Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with enhanced SEO content */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Free Educational{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                  Worksheets
                </span>
                {' '}for Kids
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Download <strong>500+ premium-quality printable worksheets</strong> covering{' '}
                <em>math, reading, science, art, and more</em>. Perfect for{' '}
                <mark className="bg-yellow-100 px-1 rounded">homeschooling families</mark>, 
                teachers, and parents who want the best educational resources.
              </p>
              
              {/* Enhanced key stats with better accessibility */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto" role="region" aria-label="Platform statistics">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600" aria-label="500 plus worksheets available">500+</div>
                  <div className="text-sm text-gray-600">Free Worksheets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">K-12</div>
                  <div className="text-sm text-gray-600">Grade Levels</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">7</div>
                  <div className="text-sm text-gray-600">Core Subjects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Free Forever</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            
            {/* Search and Filters with enhanced accessibility */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="space-y-6">
                
                {/* Search Bar with better labeling */}
                <div className="relative max-w-2xl mx-auto">
                  <label htmlFor="worksheet-search" className="sr-only">
                    Search educational worksheets by subject, grade, or skill
                  </label>
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <input
                    id="worksheet-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search worksheets by subject, grade, or skill..."
                    className="w-full rounded-2xl border-2 border-gray-200 px-12 py-4 text-lg focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-200"
                    aria-describedby="search-help"
                  />
                  <div id="search-help" className="sr-only">
                    Search through our collection of educational worksheets by entering keywords like subject names, grade levels, or specific skills
                  </div>
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label="Clear search"
                    >
                      <FilterX className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Enhanced Filter Toggle */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
                    aria-expanded={showFilters}
                    aria-controls="filter-panel"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters & Categories
                    {activeFiltersCount > 0 && (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                        {activeFiltersCount}
                      </span>
                    )}
                  </button>

                  {/* Results summary for better UX */}
                  <div className="text-sm text-gray-600">
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading worksheets...
                      </span>
                    ) : (
                      <span>
                        Showing {paginatedResults.length} of {results.length} worksheets
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Filter Panel with better organization */}
                {showFilters && (
                  <div id="filter-panel" className="border-t border-gray-200 pt-6" role="region" aria-label="Worksheet filters">
                    <div className="space-y-6">
                      
                      {/* Grade Filter with improved accessibility */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          Grade Level
                        </h3>
                        <div className="flex flex-wrap gap-2" role="group" aria-label="Select grade levels">
                          {ALL_GRADES.map((g) => (
                            <button 
                              key={g} 
                              onClick={() => toggle(setGrades, grades, g)} 
                              className={`rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200 ${
                                grades.includes(g) 
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                              }`}
                              aria-pressed={grades.includes(g)}
                            > 
                              Grade {g} 
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Subject Filter with enhanced labeling */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Subject Areas
                        </h3>
                        <div className="flex flex-wrap gap-2" role="group" aria-label="Select subject areas">
                          {ALL_SUBJECTS.map((s) => (
                            <button 
                              key={s} 
                              onClick={() => {
                                toggle(setSubjects, subjects, s);
                                if (subjects.includes(s)) {
                                  setSelectedTopics([]);
                                  setSelectedSubtopics([]);
                                  setExpandedTopics([]);
                                }
                              }} 
                              className={`rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200 ${
                                subjects.includes(s) 
                                  ? 'bg-green-600 text-white border-green-600 shadow-md' 
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-green-300 hover:bg-green-50'
                              }`}
                              aria-pressed={subjects.includes(s)}
                            > 
                              {s} 
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Resource Type Filter */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          Resource Type
                        </h3>
                        <div className="flex flex-wrap gap-2" role="group" aria-label="Select resource types">
                          {ALL_TYPES.map((t) => (
                            <button 
                              key={t} 
                              onClick={() => toggle(setTypes, types, t)} 
                              className={`rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200 ${
                                types.includes(t) 
                                  ? 'bg-purple-600 text-white border-purple-600 shadow-md' 
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                              }`}
                              aria-pressed={types.includes(t)}
                            > 
                              {t} 
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Style Filter */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          Visual Style
                        </h3>
                        <div className="flex flex-wrap gap-2" role="group" aria-label="Select visual styles">
                          {ALL_STYLES.map((st) => (
                            <button 
                              key={st} 
                              onClick={() => toggle(setStyles, styles, st)} 
                              className={`rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200 ${
                                styles.includes(st) 
                                  ? 'bg-amber-600 text-white border-amber-600 shadow-md' 
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300 hover:bg-amber-50'
                              }`}
                              aria-pressed={styles.includes(st)}
                            > 
                              {st} 
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Enhanced Active Filters Display */}
                {(grades.length || subjects.length || selectedTopics.length || selectedSubtopics.length || types.length || styles.length || query) && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                        <SlidersHorizontal className="h-4 w-4 text-blue-600" />
                        Active Filters ({activeFiltersCount})
                      </h4>
                      <button 
                        className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-100 transition-colors" 
                        onClick={clearAll}
                        aria-label="Clear all active filters"
                      >
                        <FilterX className="h-3 w-3" /> 
                        Clear All
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {/* Search Query */}
                      {query && (
                        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                          <Search className="h-3 w-3" />
                          "{query}"
                          <button
                            onClick={() => setQuery('')}
                            className="hover:bg-gray-200 rounded p-0.5 transition-colors"
                            aria-label="Remove search filter"
                          >
                            <FilterX className="h-3 w-3" />
                          </button>
                        </div>
                      )}

                      {/* Grade filters with better labeling */}
                      {grades.map((grade) => (
                        <div key={grade} className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm">
                          Grade {grade}
                          <button
                            onClick={() => toggle(setGrades, grades, grade)}
                            className="hover:bg-blue-200 rounded p-0.5 transition-colors"
                            aria-label={`Remove Grade ${grade} filter`}
                          >
                            <FilterX className="h-3 w-3" />
                          </button>
                        </div>
                      ))}

                      {/* Subject filters */}
                      {subjects.map((subject) => (
                        <div key={subject} className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm">
                          {subject}
                          <button
                            onClick={() => {
                              toggle(setSubjects, subjects, subject);
                              if (subjects.includes(subject)) {
                                setSelectedTopics([]);
                                setSelectedSubtopics([]);
                                setExpandedTopics([]);
                              }
                            }}
                            className="hover:bg-green-200 rounded p-0.5 transition-colors"
                            aria-label={`Remove ${subject} subject filter`}
                          >
                            <FilterX className="h-3 w-3" />
                          </button>
                        </div>
                      ))}

                      {/* Topic filters */}
                      {selectedTopics.map((topicId) => {
                        const topic = availableTopics.find(t => t.id === topicId);
                        return topic ? (
                          <div key={topicId} className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-3 py-2 rounded-lg text-sm">
                            <Folder className="h-3 w-3" />
                            {topic.name}
                            <button
                              onClick={() => toggleTopic(topic.id)}
                              className="hover:bg-indigo-200 rounded p-0.5 transition-colors"
                              aria-label={`Remove ${topic.name} topic filter`}
                            >
                              <FilterX className="h-3 w-3" />
                            </button>
                          </div>
                        ) : null;
                      })}

                      {/* Subtopic filters */}
                      {selectedSubtopics.map((subtopicId) => {
                        const subtopic = availableSubtopics.find(st => st.id === subtopicId);
                        return subtopic ? (
                          <div key={subtopicId} className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-3 py-2 rounded-lg text-sm">
                            <Tag className="h-3 w-3" />
                            {subtopic.name}
                            <button
                              onClick={() => toggle(setSelectedSubtopics, selectedSubtopics, subtopic.id)}
                              className="hover:bg-cyan-200 rounded p-0.5 transition-colors"
                              aria-label={`Remove ${subtopic.name} subtopic filter`}
                            >
                              <FilterX className="h-3 w-3" />
                            </button>
                          </div>
                        ) : null;
                      })}

                      {/* Resource Type filters */}
                      {types.map((type) => (
                        <div key={type} className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm">
                          {type}
                          <button
                            onClick={() => toggle(setTypes, types, type)}
                            className="hover:bg-purple-200 rounded p-0.5 transition-colors"
                            aria-label={`Remove ${type} resource type filter`}
                          >
                            <FilterX className="h-3 w-3" />
                          </button>
                        </div>
                      ))}

                      {/* Style filters */}
                      {styles.map((style) => (
                        <div key={style} className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-2 rounded-lg text-sm">
                          {style}
                          <button
                            onClick={() => toggle(setStyles, styles, style)}
                            className="hover:bg-amber-200 rounded p-0.5 transition-colors"
                            aria-label={`Remove ${style} style filter`}
                          >
                            <FilterX className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Topics Section - Only show when subjects are selected */}
                {subjects.length > 0 && availableTopics.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Folder className="h-4 w-4 text-indigo-600" />
                      Available Topics
                      {selectedTopics.length > 0 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {selectedTopics.length} selected
                        </span>
                      )}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {availableTopics.map((topic) => {
                        const isSelected = selectedTopics.includes(topic.id);
                        const selectedSubtopicsInTopic = topic.subtopics.filter(st => selectedSubtopics.includes(st.id)).length;
                        
                        return (
                          <button
                            key={topic.id}
                            onClick={() => toggleTopic(topic.id)}
                            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                              isSelected
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md hover:bg-indigo-700'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                            }`}
                            aria-pressed={isSelected}
                          >
                            <Folder className="w-3 h-3" />
                            {topic.name}
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                              isSelected ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-500'
                            }`}>
                              {topic.count}
                            </span>
                            {selectedSubtopicsInTopic > 0 && (
                              <span className="text-xs px-1.5 py-0.5 rounded-full bg-green-400 text-white">
                                +{selectedSubtopicsInTopic}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Enhanced Subtopics Section */}
                {selectedTopics.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                        <Tag className="h-4 w-4 text-green-600" />
                        Specific Topics
                        {selectedSubtopics.length > 0 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {selectedSubtopics.length} selected
                          </span>
                        )}
                      </h3>
                      
                      {selectedSubtopics.length > 0 && (
                        <button
                          onClick={() => setSelectedSubtopics([])}
                          className="text-xs text-red-600 hover:text-red-700 transition-colors"
                        >
                          Clear subtopics
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      {availableTopics
                        .filter(topic => selectedTopics.includes(topic.id))
                        .map((topic) => (
                          <div key={topic.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                                <FolderOpen className="w-4 h-4 text-indigo-600" />
                                {topic.name}
                              </h4>
                              
                              <div className="flex items-center gap-2">
                                {topic.subtopics.filter(st => selectedSubtopics.includes(st.id)).length > 0 && (
                                  <button
                                    onClick={() => {
                                      const subtopicIds = topic.subtopics.map(st => st.id);
                                      setSelectedSubtopics(prev => prev.filter(id => !subtopicIds.includes(id)));
                                    }}
                                    className="text-xs text-red-600 hover:text-red-700 transition-colors"
                                  >
                                    Clear all
                                  </button>
                                )}
                                <button
                                  onClick={() => {
                                    const subtopicIds = topic.subtopics.map(st => st.id);
                                    const allSelected = subtopicIds.every(id => selectedSubtopics.includes(id));
                                    if (allSelected) {
                                      setSelectedSubtopics(prev => prev.filter(id => !subtopicIds.includes(id)));
                                    } else {
                                      setSelectedSubtopics(prev => [...new Set([...prev, ...subtopicIds])]);
                                    }
                                  }}
                                  className="text-xs text-indigo-600 hover:text-indigo-700 transition-colors"
                                >
                                  {topic.subtopics.every(st => selectedSubtopics.includes(st.id)) ? 'Deselect all' : 'Select all'}
                                </button>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {topic.subtopics.map((subtopic) => {
                                const isSelected = selectedSubtopics.includes(subtopic.id);
                                
                                return (
                                  <button
                                    key={subtopic.id}
                                    onClick={() => toggle(setSelectedSubtopics, selectedSubtopics, subtopic.id)}
                                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                                      isSelected
                                        ? 'bg-green-600 text-white border-green-600 shadow-md hover:bg-green-700'
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-green-300 hover:bg-green-50'
                                    }`}
                                    aria-pressed={isSelected}
                                  >
                                    <div className={`w-2 h-2 rounded-full ${
                                      isSelected ? 'bg-green-300' : 'bg-gray-400'
                                    }`} />
                                    {subtopic.name}
                                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                                      isSelected ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'
                                    }`}>
                                      {subtopic.count}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Results Section with enhanced accessibility */}
            <div className="space-y-6">
              {/* Enhanced Results Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900" id="results-heading">
                    {results.length} Worksheet{results.length !== 1 ? 's' : ''} Found
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Free educational resources for your learning journey
                  </p>
                  {query && (
                    <p className="text-sm text-blue-600 mt-1">
                      Search results for "{query}"
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* View Mode Toggle with better accessibility */}
                  <div className="flex items-center border border-gray-200 rounded-lg p-1" role="tablist" aria-label="View mode">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      role="tab"
                      aria-selected={viewMode === 'grid'}
                      aria-label="Grid view"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      role="tab"
                      aria-selected={viewMode === 'list'}
                      aria-label="List view"
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Enhanced Sort Dropdown */}
                  <div className="relative">
                    <label htmlFor="sort-select" className="sr-only">Sort worksheets by</label>
                    <select
                      id="sort-select"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortBy)}
                      className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="newest">Newest First</option>
                      <option value="popular">Most Popular</option>
                      <option value="downloads">Most Downloaded</option>
                      <option value="title">A to Z</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Enhanced Results Display */}
              {isLoading && results.length === 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <WorksheetSkeleton key={i} />
                  ))}
                </div>
              ) : results.length === 0 ? (
                <div className="text-center py-12" role="region" aria-labelledby="no-results-heading">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 id="no-results-heading" className="text-lg font-semibold text-gray-900 mb-2">
                    No worksheets found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search terms to find more results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button 
                      onClick={clearAll}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FilterX className="h-4 w-4" />
                      Clear All Filters
                    </button>
                    <button 
                      onClick={() => setQuery('')}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Search className="h-4 w-4" />
                      Clear Search
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Worksheets Grid/List with structured data */}
                  <div className={
                    viewMode === 'grid' 
                      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                      : 'space-y-4'
                  } role="region" aria-labelledby="results-heading">
                    {paginatedResults.map((worksheet, index) => (
                      <article
                        key={worksheet.id}
                        className={`group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white ${
                          viewMode === 'grid' ? '' : 'flex flex-row'
                        }`}
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                      >
                        {/* Image with better alt text */}
                        <div className={`relative overflow-hidden ${
                          viewMode === 'grid' ? 'aspect-[4/3]' : 'w-48 flex-shrink-0'
                        }`}>
                          <img
                            src="/worksheets/temp.jpg"
                            alt={`${worksheet.title} - ${worksheet.subject} worksheet for grade ${worksheet.grade}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            itemProp="image"
                            loading={index < 6 ? 'eager' : 'lazy'}
                          />
                          
                          {/* Enhanced Badges */}
                          <div className="absolute top-3 left-3 flex flex-col gap-2">
                            {worksheet.isNew && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-500 text-white shadow-sm">
                                New
                              </span>
                            )}
                            {worksheet.isPremium && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-500 text-white shadow-sm">
                                Premium
                              </span>
                            )}
                          </div>

                          {/* Enhanced Favorite Button (ensure clickable above overlay) */}
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleFavorite(worksheet.id); }}
                            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 z-20"
                            aria-label={favorites.includes(worksheet.id) ? 'Remove from favorites' : 'Add to favorites'}
                          >
                            <Heart className={`h-4 w-4 transition-colors ${
                              favorites.includes(worksheet.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'
                            }`} />
                          </button>

                          {/* Enhanced Quick Preview */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10">
                            <button 
                              className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              aria-label={`Preview ${worksheet.title}`}
                            >
                              <Eye className="h-4 w-4 inline mr-2" />
                              Quick Preview
                            </button>
                          </div>
                        </div>

                        {/* Enhanced Content with structured data */}
                        <div className={`p-4 flex-1 ${viewMode === 'grid' ? '' : 'flex flex-col justify-between'}`}>
                          <div>
                            <header className="flex items-start justify-between gap-2 mb-2">
                              <h3 
                                className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors"
                                itemProp="name"
                              >
                                {worksheet.title}
                              </h3>
                              <div className="flex items-center gap-1 text-sm text-gray-600 flex-shrink-0" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span itemProp="ratingValue">{worksheet.rating}</span>
                              </div>
                            </header>

                            <p 
                              className="text-sm text-gray-600 mb-3 line-clamp-2" 
                              itemProp="description"
                            >
                              {worksheet.description}
                            </p>

                            {/* Enhanced Meta Information */}
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                              <div className="flex items-center gap-1" itemProp="educationalLevel">
                                <Award className="h-3 w-3" />
                                Grade {worksheet.grade}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span itemProp="timeRequired">{worksheet.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                <span itemProp="interactionStatistic">{formatDownloads(worksheet.downloads)}</span>
                              </div>
                            </div>

                            {/* Enhanced Skills/Learning Objectives */}
                            <div className="mb-3">
                              <div className="text-xs text-gray-500 mb-1">Skills covered:</div>
                              <div className="flex flex-wrap gap-1">
                                {worksheet.skills.slice(0, 3).map((skill, index) => (
                                  <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                                    {skill}
                                  </span>
                                ))}
                                {worksheet.skills.length > 3 && (
                                  <span className="text-xs text-gray-500">+{worksheet.skills.length - 3} more</span>
                                )}
                              </div>
                            </div>

                            {/* Enhanced Tags with better categorization */}
                            <div className="flex items-center gap-2 mb-4 flex-wrap">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(worksheet.difficulty)}`}>
                                {worksheet.difficulty}
                              </span>
                              <span 
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                itemProp="about"
                              >
                                {worksheet.subject}
                              </span>
                              <span 
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                                itemProp="learningResourceType"
                              >
                                {worksheet.type}
                              </span>
                              {viewMode === 'list' && (
                                <span className="text-xs text-gray-500">
                                  Added {formatDate(worksheet.dateAdded)}
                                </span>
                              )}
                            </div>

                            {/* Author and language info */}
                            <div className="text-xs text-gray-500 mb-4" itemProp="author" itemScope itemType="https://schema.org/Organization">
                              By <span itemProp="name">{worksheet.author}</span> • <span itemProp="inLanguage">{worksheet.language}</span>
                            </div>
                          </div>

                          {/* Enhanced Action Buttons */}
                          <div className="flex gap-2">
                            <button 
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              aria-label={`Download ${worksheet.title} worksheet`}
                            >
                              <Download className="h-4 w-4" />
                              Download Free
                            </button>
                            
                            <button
                              onClick={() => shareWorksheet(worksheet)}
                              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                              aria-label={`Share ${worksheet.title}`}
                            >
                              <Share2 className="h-4 w-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* Enhanced Load More with better UX */}
                  {hasMore && (
                    <div className="text-center py-8">
                      <button
                        onClick={loadMore}
                        disabled={loadingMore}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        {loadingMore ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Loading more worksheets...
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4" />
                            Load More Worksheets ({results.length - paginatedResults.length} remaining)
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Pagination summary for SEO */}
                  <div className="text-center text-sm text-gray-500 py-4">
                    Showing {paginatedResults.length} of {results.length} educational worksheets
                    {activeFiltersCount > 0 && ` (filtered from ${WORKSHEETS.length} total)`}
                  </div>
                </>
              )}
            </div>

            {/* SEO-friendly educational content section */}
            <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why Choose KidsSpire Hub Educational Worksheets?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      High-Quality Educational Content
                    </h3>
                    <p className="text-gray-600">
                      Our worksheets are designed by education professionals and aligned with curriculum standards. 
                      Each resource undergoes thorough review to ensure educational value and age-appropriateness.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Download className="h-5 w-5 text-blue-600" />
                      100% Free Forever
                    </h3>
                    <p className="text-gray-600">
                      All our educational worksheets are completely free to download and use. 
                      No hidden fees, no subscriptions - just high-quality educational resources for everyone.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                      Comprehensive Subject Coverage
                    </h3>
                    <p className="text-gray-600">
                      From mathematics and English to science and art, our collection covers all major subjects 
                      for grades Pre-K through 6, supporting diverse learning needs.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Users className="h-5 w-5 text-orange-600" />
                      Perfect for Multiple Settings
                    </h3>
                    <p className="text-gray-600">
                      Whether you're homeschooling, teaching in a classroom, or supporting learning at home, 
                      our worksheets adapt to various educational environments and teaching styles.
                    </p>
                  </div>
                </div>

                {/* FAQ Section for SEO */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Are these worksheets really free?
                      </h4>
                      <p className="text-gray-600">
                        Yes! All our educational worksheets are 100% free to download, print, and use. 
                        We believe quality education should be accessible to everyone.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Can I use these worksheets in my classroom?
                      </h4>
                      <p className="text-gray-600">
                        Absolutely! Our worksheets are perfect for teachers, homeschool parents, and tutors. 
                        You can print multiple copies and use them in any educational setting.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        How often do you add new worksheets?
                      </h4>
                      <p className="text-gray-600">
                        We regularly add new educational resources to our collection. 
                        New worksheets are typically added weekly across various subjects and grade levels.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Are the worksheets aligned with educational standards?
                      </h4>
                      <p className="text-gray-600">
                        Yes, our worksheets are designed to align with common educational standards and 
                        curriculum requirements for each grade level, supporting effective learning outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
		<BackToTop show={showBackToTop} />

		{/* Favorites Floating Button */}
		<button
			onClick={() => setIsFavOpen(true)}
			className="fixed bottom-8 left-8 bg-rose-600 hover:bg-rose-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 z-50 flex items-center gap-2"
			aria-label="Open favorites"
		>
			<Heart className="h-5 w-5" />
			Favorites {favorites.length > 0 && (
				<span className="inline-flex items-center justify-center text-xs font-semibold bg-white text-rose-600 rounded-full w-6 h-6">
					{favorites.length}
				</span>
			)}
		</button>

		{/* Favorites Slide-over */}
		<div
			className={`fixed inset-0 z-50 ${isFavOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
			aria-hidden={!isFavOpen}
		>
			{/* Backdrop */}
			<div
				onClick={() => setIsFavOpen(false)}
				className={`absolute inset-0 bg-black/40 transition-opacity ${isFavOpen ? 'opacity-100' : 'opacity-0'}`}
			/>
			{/* Panel */}
			<aside
				className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${isFavOpen ? 'translate-x-0' : 'translate-x-full'}`}
				role="dialog"
				aria-label="Favorites cart"
			>
				<div className="flex items-center justify-between p-4 border-b border-gray-200">
					<h3 className="text-lg font-semibold text-gray-900">Your Favorites</h3>
					<div className="flex items-center gap-2">
						{favorites.length > 0 && (
							<button
								onClick={clearFavorites}
								className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 hover:bg-red-50 hover:border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
								aria-label="Clear all favorites"
								title="Clear all"
							>
								<Trash2 className="h-4 w-4 text-red-600" />
							</button>
						)}
						<button
							onClick={() => setIsFavOpen(false)}
							className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
							aria-label="Close favorites"
							title="Close"
						>
							<X className="h-4 w-4 text-gray-700" />
						</button>
					</div>
				</div>
				<div className="h-full overflow-y-auto p-4 space-y-3">
					{favoriteItems.length === 0 ? (
						<div className="text-center text-gray-600 py-12">
							<Heart className="h-8 w-8 mx-auto mb-3 text-gray-400" />
							<p>No favorites yet. Tap the heart on a worksheet to add it here.</p>
						</div>
					) : (
						favoriteItems.map((w) => (
							<div key={w.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl">
								<img src="/worksheets/temp.jpg" alt={w.title} className="w-16 h-12 rounded object-cover" />
								<div className="flex-1 min-w-0">
									<p className="font-medium text-sm text-gray-900 truncate">{w.title}</p>
									<p className="text-xs text-gray-500">{w.subject} • Grade {w.grade}</p>
								</div>
								<div className="flex items-center gap-2">
									<button onClick={() => removeFavorite(w.id)} className="text-xs text-red-600 hover:text-red-700">Remove</button>
									<button className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded"> 
										<Download className="h-3 w-3" /> Download
									</button>
								</div>
							</div>
						))
					)}
				</div>
			</aside>
		</div>
      </div>
    </>
  );
}