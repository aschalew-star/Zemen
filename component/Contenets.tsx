"use client"
import { motion } from "framer-motion"
import type React from "react"

import Link from "next/link"
import NextImage from "next/image" // Import Image from next/image
import {
  Calendar,
  Eye,
  Clock,
  Briefcase,
  Star,
  TrendingUp,
  Bookmark,
  Share2,
  ArrowRight,
  Sparkles,
  ImageIcon,
  Zap,
  ClipboardList,
  HardHat,
  Newspaper,
  Building,
  Handshake,
} from "lucide-react"
import { useState } from "react"

const mainArticles = [
  {
    id: 1,
    title: "Ethiopian Deposit Insurance Fund Develops New Payout System to Support Small Savers",
    excerpt:
      "The Ethiopian Deposit Insurance Fund (EDIF) has announced that it is working on a new payout mechanism designed to support depositors, particularly first-time savers.",
    author: "Business Editor",
    category: "Banking and Finance",
    date: "Jul 17, 2025",
    readTime: "5 min read",
    views: 2340,
    image: "/care.png",
    featured: true,
  },
  {
    id: 2,
    title: "New Investment Opportunities in Ethiopia's Manufacturing Sector",
    excerpt:
      "Government announces new incentives for foreign investors in manufacturing, creating thousands of job opportunities.",
    author: "Investment Analyst",
    category: "Investment",
    date: "Jul 16, 2025",
    readTime: "4 min read",
    views: 1890,
    image: "/cuso.png",
  },
  {
    id: 3,
    title: "Digital Transformation in Ethiopian Banking Sector",
    excerpt: "Major banks are adopting new technologies to improve customer service and expand financial inclusion.",
    author: "Tech Reporter",
    category: "Technology",
    date: "Jul 15, 2025",
    readTime: "6 min read",
    views: 1567,
    image: "/dca.png",
  },
]

const mostReadContent = [
  "Customs Duty, Tariff, Levies and Taxes in Ethiopia",
  "HS Code",
  "Import and Export Regulations in Ethiopia",
  "Ethiopian Shipping and Logistics Procedures on Booking, Shipping and Clearing",
  "Import and Export Procedures in Ethiopia",
]

const editorsPick = [
  "How to Participate in Government Tender or bid in Ethiopia: Regulations and Procedures",
  "Ethiopia Business Profile",
  "Consumer Protection Law in Ethiopia",
  "I Am a Foreign Supplier: How Can I Participate in a Government Tender in Ethiopia?",
  "How to Participate in Non-Government Tenders or EOI's in Ethiopia: Guidelines and Tips",
]

const businessGuides = [
  "Business Registration and Licensing Procedures in Ethiopia",
  "How to Start a PLC (Private Limited Company) in Ethiopia (particularly in Addis Ababa)",
  "Regulations of Commercial Registration and Business Licensing in Ethiopia",
  "Micro-Financing of Small Businesses in Ethiopia",
  "Starting a Business in Ethiopia: Information and Frequently Asked Questions",
]

// New static data for the requested sections
const tendersContent = [
  "Government Tender for Infrastructure Project",
  "Private Sector IT Solutions Tender",
  "Consultancy Services Tender for Agriculture",
  "Supply Chain Management Tender",
  "Healthcare Equipment Procurement Tender",
]

const constructionContent = [
  "New Residential Complex Development",
  "Commercial Building Construction Updates",
  "Road Network Expansion Project",
  "Sustainable Urban Planning Initiatives",
  "Bridge Construction and Maintenance",
]

const businessNewsContent = [
  "Inflation Rates and Economic Outlook",
  "Tech Startup Funding Rounds",
  "Agricultural Sector Reforms",
  "Tourism Industry Recovery",
  "Manufacturing Output Growth",
]

const businessDirectoryContent = [
  "Top 10 IT Companies in Addis Ababa",
  "Leading Consulting Firms",
  "Major Import-Export Businesses",
  "Financial Institutions Listing",
  "Manufacturing Companies by Sector",
]

const doingBusinessContent = [
  "Steps to Register a New Company",
  "Taxation Laws for Foreign Investors",
  "Labor Laws and Employment Regulations",
  "Intellectual Property Rights",
  "Import/Export Licensing Requirements",
]

const advertisements = [
  {
    src: "/AD/Wepack2025 (1).gif",
    alt: "Construction Equipment",
    link: "/ad-1",
    title: "Premium Construction Equipment",
    description: "High-quality machinery for all your construction needs",
  },
  {
    src: "/AD/Welland.gif",
    alt: "Business Consulting Services",
    link: "/ad-2",
    title: "Expert Business Consulting",
    description: "Professional guidance for business growth",
  },
  {
    src: "/AD/Wepack2025.gif",
    alt: "Financial Solutions",
    link: "/ad-3",
    title: "Financial Solutions",
    description: "Comprehensive financial services and planning",
  },
  {
    src: "/AD/DesGeneralTrading.gif",
    alt: "Legal Services",
    link: "/ad-4",
    title: "Legal Advisory Services",
    description: "Expert legal consultation and representation",
  },
  {
    src: "/AD/Ethiop1.gif",
    alt: "IT Solutions",
    link: "/ad-5",
    title: "IT Solutions & Support",
    description: "Modern technology solutions for businesses",
  },
  {
    src: "/AD/giz.Webp",
    alt: "Insurance Services",
    link: "/ad-6",
    title: "Comprehensive Insurance",
    description: "Protect your business with our insurance plans",
  },
]

const categoryColors = {
  "Banking and Finance": "from-emerald-500 to-teal-600",
  Investment: "from-purple-500 to-indigo-600",
  Technology: "from-blue-500 to-cyan-600",
  Construction: "from-orange-500 to-red-600",
  Legal: "from-gray-500 to-slate-600",
}

function ImageWithFallback({ src, alt, className, aspectRatio = "aspect-[4/3]", title, description }) {
  const [imageError, setImageError] = useState(false)
  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {imageError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-6 border-2 border-dashed border-blue-200">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <ImageIcon className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">{title || alt}</h4>
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            {description || "Premium advertisement space available"}
          </p>
          <div className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
            SPONSORED
          </div>
        </div>
      ) : (
        <NextImage
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={`object-cover`}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}

function ArticleImageWithFallback({ src, alt, className, title }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
        </div>
      )}
      {imageError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-slate-400 to-slate-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <ImageIcon className="w-10 h-10 text-white" />
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2 text-center line-clamp-2">{title}</h4>
          <p className="text-sm text-gray-600 text-center">Article image will be available soon</p>
        </div>
      ) : (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          onError={() => setImageError(true)}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </div>
  )
}

interface CategoryCardProps {
  title: string
  icon: React.ElementType
  items: string[]
  gradient: string
  linkPrefix: string
  delay: number
  iconColorClass?: string
}

function CategoryCard({ title, icon: Icon, items, gradient, linkPrefix, delay, iconColorClass }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
        <div className={`w-8 h-8 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center shadow-md`}>
          <Icon className={`w-4 h-4 ${iconColorClass || "text-white"}`} />
        </div>
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.1 + index * 0.05 }}
            className="group"
          >
            <Link
              href={`/${linkPrefix}/${index}`}
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-300 line-clamp-2 block p-2 rounded-lg hover:bg-blue-50 group-hover:translate-x-1 transform transition-transform duration-300"
            >
              <span className={`font-bold mr-2 ${iconColorClass || "text-blue-500"}`}>
                {linkPrefix === "guide" ? "★" : linkPrefix === "startup-guide" ? "▶" : "•"}
              </span>
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

interface CombinedScrollingContentProps {
  sections: Array<{
    id: string
    title: string
    icon: React.ElementType
    items: string[]
    gradient: string
    linkPrefix: string
    itemBulletColorClass: string
    itemHoverBgClass: string
    itemHoverTextColorClass: string
  }>
  delay: number
}

function CombinedScrollingContent({ sections, delay }: CombinedScrollingContentProps) {
  // Duplicate sections for infinite scroll effect
  const duplicatedSections = [...sections, ...sections]

  // Define the fixed width of each section card (no horizontal margins here)
  const SECTION_CARD_WIDTH = 450 // Increased width
  // Calculate the total width of one set of original sections
  // Add a small gap between cards for visual separation within the scroll
  const CARD_GAP = 32 // 2rem gap between cards
  const totalOriginalWidth = sections.length * SECTION_CARD_WIDTH + (sections.length - 1) * CARD_GAP

  // Define a consistent scroll speed in pixels per second
  const SCROLL_SPEED_PX_PER_SEC = 40

  // Calculate the animation duration based on total width and desired speed
  const animationDuration = totalOriginalWidth / SCROLL_SPEED_PX_PER_SEC

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      // Removed p-6 and transform hover:-translate-y-1
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden relative"
    >
      <h3 className="text-3xl font-extrabold text-gray-900 text-center relative z-10 pt-6 px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Added px-4 sm:px-6 lg:px-8 for title padding */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
          Curated Insights & Essential Guides
        </span>
        <p className="text-base font-medium text-gray-600 mt-2 pb-6">Explore our top content and resources</p>{" "}
      </h3>
      <div className="relative overflow-hidden group">
        {" "}
        {/* Removed py-4 from here */}
        <div
          className="flex animate-scroll-left group-hover:animation-pause"
          style={
            {
              width: `${totalOriginalWidth * 2}px`, // Total width of duplicated content
              animationDuration: `${animationDuration}s`, // Use calculated duration
              "--scroll-translate-x": `-${totalOriginalWidth}px`, // Translate by the width of one set of original sections
            } as React.CSSProperties
          }
        >
          {duplicatedSections.map((section, sectionIndex) => (
            <motion.div
              key={`${section.id}-${sectionIndex}`} // Unique key for duplicated items
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="flex-shrink-0 w-[450px] p-5 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border border-white/70 transform transition-all duration-300 relative overflow-hidden group/card" // Updated width and padding
              style={{ marginRight: sectionIndex % sections.length === sections.length - 1 ? "0px" : `${CARD_GAP}px` }} // Apply margin only between cards
            >
              {/* Decorative background element for each card */}
              <div
                className={`absolute inset-0 opacity-10 group-hover/card:opacity-20 transition-opacity duration-300 ${section.gradient} rounded-3xl`}
              />

              <h4 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3 relative z-10">
                <div
                  className={`w-9 h-9 bg-gradient-to-r ${section.gradient} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                {section.title}
              </h4>
              <ul className="space-y-3 relative z-10">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={`/${section.linkPrefix}/${itemIndex}`}
                      className={`flex items-start gap-3 text-base text-gray-700 hover:text-blue-700 transition-colors duration-300 line-clamp-2 block p-3 rounded-lg hover:bg-blue-50/60 transform transition-transform duration-200 hover:translate-x-1 group/item`}
                    >
                      <span
                        className={`font-extrabold text-lg flex-shrink-0 ${section.itemBulletColorClass} group-hover/item:scale-110 transition-transform`}
                      >
                        {section.linkPrefix === "most-read"
                          ? `${itemIndex + 1}.`
                          : section.linkPrefix === "editors-pick"
                            ? "★"
                            : "▶"}
                      </span>
                      <span className="group-hover/item:font-medium">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* "View All" button at the bottom of each card */}
              <div className="mt-6 text-center relative z-10">
                <Link
                  href={`/${section.linkPrefix}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 group/view-all"
                >
                  View All
                  <ArrowRight className="w-4 h-4 group-hover/view-all:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Add more subtle background elements for the entire scrolling section */}
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse -translate-x-1/2 z-0"></div>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(var(--scroll-translate-x));
          }
        }
        .animate-scroll-left {
          animation-name: scroll-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .group:hover .animate-scroll-left {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  )
}

export default function ContentLayout() {
  const combinedSectionsData = [
    {
      id: "most-read",
      title: "Most Read Content",
      icon: TrendingUp,
      items: mostReadContent,
      gradient: "from-red-600 to-pink-700",
      linkPrefix: "most-read",
      itemBulletColorClass: "text-red-600",
      itemHoverBgClass: "bg-red-50/50",
      itemHoverTextColorClass: "text-red-900",
    },
    {
      id: "editors-pick",
      title: "Editor's Pick",
      icon: Star,
      items: editorsPick,
      gradient: "from-yellow-500 to-orange-500",
      linkPrefix: "editors-pick",
      itemBulletColorClass: "text-yellow-600",
      itemHoverBgClass: "bg-yellow-50/50",
      itemHoverTextColorClass: "text-yellow-900",
    },
    {
      id: "business-startup-guides",
      title: "Business Startup Guides",
      icon: Briefcase,
      items: businessGuides,
      gradient: "from-green-500 to-emerald-500",
      linkPrefix: "startup-guide",
      itemBulletColorClass: "text-green-600",
      itemHoverBgClass: "bg-green-50/50",
      itemHoverTextColorClass: "text-green-900",
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-red-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Advertisements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-800 border border-blue-200 shadow-lg"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Sponsored Content
              </motion.div>
            </div>
            {advertisements.slice(0, 3).map((ad, index) => (
              <div // Changed from motion.div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-xl bg-white" // Removed hover effects and transitions
              >
                <Link href={ad.link} className="block">
                  <ImageWithFallback
                    src={ad.src || "/placeholder.svg"}
                    alt={ad.alt}
                    title={ad.title}
                    description={ad.description}
                    className="" // Removed group-hover:scale-110 transition-transform duration-500
                    aspectRatio="aspect-[4/5]"
                  />
                  {/* Removed text overlay and content */}
                </Link>
              </div>
            ))}
          </motion.div>
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-10"
          >
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-all duration-500 group"
            >
              <div className="relative">
                <ArticleImageWithFallback
                  src={mainArticles[0].image}
                  alt={mainArticles[0].title}
                  title={mainArticles[0].title}
                  className="w-full h-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Featured Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-6 left-6"
                >
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    FEATURED
                  </div>
                </motion.div>
                {/* Action Buttons */}
                <div className="absolute top-6 right-6 flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                  >
                    <Bookmark className="w-5 h-5 text-gray-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-6 left-6">
                  <span
                    className={`bg-gradient-to-r ${categoryColors[mainArticles[0].category] || "from-gray-500 to-gray-600"} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                  >
                    {mainArticles[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{mainArticles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>{mainArticles[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-purple-500" />
                    <span>{mainArticles[0].views} views</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300 cursor-pointer leading-tight">
                  {mainArticles[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{mainArticles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{mainArticles[0].author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">By {mainArticles[0].author}</p>
                      <p className="text-sm text-gray-500">Business Journalist</p>
                    </div>
                  </div>
                  <a href="Zemen-news">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center gap-2"
                  >
                      Read More
                      
                    <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    </a>
                </div>
              </div>
            </motion.div>
            {/* Other Articles */}
            <div className="space-y-8">
              {mainArticles.slice(1).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <ArticleImageWithFallback
                        src={article.image}
                        alt={article.title}
                        title={article.title}
                        className="w-full h-64 md:h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`bg-gradient-to-r ${categoryColors[article.category] || "from-gray-500 to-gray-600"} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                        >
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{article.views}</span>
                          </div>
                        </div>
                        <a href="Zemen-tenders">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group/btn"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </motion.button>
                          </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

           
          </motion.div>
          {/* Right Sidebar - Advertisements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-800 border border-purple-200 shadow-lg"
              >
                <Zap className="w-4 h-4 mr-2" />
                Featured Ads
              </motion.div>
            </div>
            {advertisements.slice(3).map((ad, index) => (
              <div // Changed from motion.div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-xl bg-white" // Removed hover effects and transitions
              >
                <Link href={ad.link} className="block">
                  <ImageWithFallback
                    src={ad.src || "/placeholder.svg"}
                    alt={ad.alt}
                    title={ad.title}
                    description={ad.description}
                    className="" // Removed group-hover:scale-110 transition-transform duration-500
                    aspectRatio="aspect-[4/5]"
                  />
                  {/* Removed text overlay and content */}
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Combined Scrolling Content - NOW OUTSIDE THE MAX-WIDTH CONTAINER */}
      <CombinedScrollingContent sections={combinedSectionsData} delay={0.6} />
    </section>
  )
}
