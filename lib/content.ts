export type PortfolioProject = {
  id: number
  title: string
  category: string
  location: string
  year: string
  description: string
  image: string
  slug: string
}

export type JournalPost = {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  slug: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Minimalist Apartment",
    category: "Residential",
    location: "Mumbai",
    year: "2023",
    description:
      "A contemporary apartment designed with clean lines and a neutral palette, creating a serene urban retreat.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "minimalist-apartment",
  },
  {
    id: 2,
    title: "Luxury Villa",
    category: "Residential",
    location: "Bangalore",
    year: "2022",
    description:
      "An opulent villa that blends traditional Indian elements with modern luxury, featuring custom furniture and artisanal details.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "luxury-villa",
  },
  {
    id: 3,
    title: "Modern Office",
    category: "Commercial",
    location: "Delhi",
    year: "2023",
    description:
      "A dynamic workspace designed to foster collaboration and creativity while maintaining brand identity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "modern-office",
  },
  {
    id: 4,
    title: "Boutique Hotel",
    category: "Hospitality",
    location: "Goa",
    year: "2021",
    description:
      "A boutique hotel that captures the essence of Goan culture while providing luxurious comfort to guests.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "boutique-hotel",
  },
  {
    id: 5,
    title: "Cultural Residence",
    category: "Residential",
    location: "Jaipur",
    year: "2022",
    description: "A family home that celebrates Rajasthani heritage through contemporary design language.",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "cultural-residence",
  },
  {
    id: 6,
    title: "Contemporary Restaurant",
    category: "Commercial",
    location: "Chennai",
    year: "2021",
    description:
      "A restaurant space that creates a memorable dining experience through thoughtful spatial design and ambiance.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "contemporary-restaurant",
  },
  {
    id: 7,
    title: "Urban Loft",
    category: "Residential",
    location: "Pune",
    year: "2023",
    description:
      "A converted industrial space transformed into a sophisticated urban dwelling with character and charm.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "urban-loft",
  },
  {
    id: 8,
    title: "Wellness Center",
    category: "Commercial",
    location: "Hyderabad",
    year: "2022",
    description:
      "A holistic wellness center designed to promote tranquility and healing through mindful spatial arrangement.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "wellness-center",
  },
  {
    id: 9,
    title: "Heritage Renovation",
    category: "Residential",
    location: "Kolkata",
    year: "2021",
    description:
      "A careful restoration of a colonial-era home, preserving its historical elements while adding modern comforts.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "heritage-renovation",
  },
]

export const journalPosts: JournalPost[] = [
  {
    id: 1,
    title: "The Art of Minimalism in Indian Homes",
    excerpt: "Discover how to embrace minimalism while honoring cultural elements in modern Indian interiors.",
    date: "April 15, 2023",
    author: "Priya Sharma",
    category: "Design Tips",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "minimalism-in-indian-homes",
  },
  {
    id: 2,
    title: "Sustainable Materials for Eco-Conscious Interiors",
    excerpt: "Explore environmentally friendly materials that don't compromise on style or functionality.",
    date: "March 22, 2023",
    author: "Rahul Verma",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "sustainable-materials",
  },
  {
    id: 3,
    title: "Vastu Principles for Modern Apartments",
    excerpt: "Learn how to apply ancient Vastu principles in contemporary urban living spaces.",
    date: "February 10, 2023",
    author: "Priya Sharma",
    category: "Vastu",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "vastu-for-apartments",
  },
  {
    id: 4,
    title: "Color Psychology in Interior Design",
    excerpt: "Understanding how different colors affect mood and energy in your living spaces.",
    date: "January 28, 2023",
    author: "Ananya Desai",
    category: "Color Theory",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "color-psychology",
  },
  {
    id: 5,
    title: "Small Space Solutions: Maximizing Functionality",
    excerpt: "Creative strategies to make the most of limited square footage without sacrificing style.",
    date: "December 15, 2022",
    author: "Priya Sharma",
    category: "Space Planning",
    image: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "small-space-solutions",
  },
  {
    id: 6,
    title: "Blending Traditional and Contemporary Elements",
    excerpt: "How to create a harmonious balance between heritage pieces and modern design.",
    date: "November 5, 2022",
    author: "Vikram Malhotra",
    category: "Style Fusion",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "traditional-contemporary-fusion",
  },
]
