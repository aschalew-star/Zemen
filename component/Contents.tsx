"use client"
import { motion } from "framer-motion"
import type React from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Calendar, Eye, Clock, Bookmark, Share2, ArrowRight, Sparkles, ImageIcon, Zap, Star } from "lucide-react"
import { useState } from "react"
import { mainArticles, advertisements, categoryColors, combinedSectionsData } from "./content-data"

// Define interfaces for props
interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  title?: string
  description?: string
}

interface ArticleImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  title: string
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

function ImageWithFallback({
  src,
  alt,
  className,
  aspectRatio = "aspect-[4/3]",
  title,
  description,
}: ImageWithFallbackProps) {
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
          className="object-cover"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}

function ArticleImageWithFallback({ src, alt, className, title }: ArticleImageWithFallbackProps) {
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

function CategoryCard({ title, icon: Icon, items, gradient, linkPrefix, delay, iconColorClass }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
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

function CombinedScrollingContent({ sections, delay }: CombinedScrollingContentProps) {
  const duplicatedSections = [...sections, ...sections]
  const SECTION_CARD_WIDTH = 450
  const CARD_GAP = 32
  const totalOriginalWidth = sections.length * SECTION_CARD_WIDTH + (sections.length - 1) * CARD_GAP
  const SCROLL_SPEED_PX_PER_SEC = 40
  const animationDuration = totalOriginalWidth / SCROLL_SPEED_PX_PER_SEC

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden relative"
    >
      <h3 className="text-3xl font-extrabold text-gray-900 text-center relative z-10 pt-6 px-4 sm:px-6 lg:px-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
          Curated Insights & Essential Guides
        </span>
        <p className="text-base font-medium text-gray-600 mt-2 pb-6">Explore our top content and resources</p>
      </h3>
      <div className="relative overflow-hidden group">
        <div
          className="flex animate-scroll-left group-hover:animation-pause"
          style={
            {
              width: `${totalOriginalWidth * 2}px`,
              animationDuration: `${animationDuration}s`,
              "--scroll-translate-x": `-${totalOriginalWidth}px`,
            } as React.CSSProperties
          }
        >
          {duplicatedSections.map((section, sectionIndex) => (
            <motion.div
              key={`${section.id}-${sectionIndex}`}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="flex-shrink-0 w-[450px] p-5 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border border-white/70 transform transition-all duration-300 relative overflow-hidden group/card"
              style={{ marginRight: sectionIndex % sections.length === sections.length - 1 ? "0px" : `${CARD_GAP}px` }}
            >
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
  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-red-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            <div className="text-center mb-6 sm:col-span-1 md:col-span-2 lg:col-span-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-800 border border-blue-200 shadow-lg relative z-10"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Sponsored Content
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl -z-0 scale-150" />
            </div>
            {advertisements.slice(0, 3).map((ad, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-xl bg-white group hover:scale-102 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:translate-y-[-2px] transition-all duration-300"
              >
                <Link href={ad.link} className="block">
                  <ImageWithFallback
                    src={ad.src || "/placeholder.svg"}
                    alt={ad.alt}
                    title={ad.title}
                    description={ad.description}
                    aspectRatio="aspect-[21/9] sm:aspect-[16/9] md:aspect-[4/1] lg:aspect-[4/5]"
                  />
                </Link>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  AD
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-10"
          >
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
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-6 left-6"
                >
                  <div className="bg-gradient-to-r from-red-600 to-pink-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    FEATURED
                  </div>
                </motion.div>
                <div className="absolute top-6 right-6 flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white/70 transition-all duration-300 shadow-lg"
                  >
                    <Bookmark className="w-5 h-5 text-gray-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white/70 transition-all duration-300 shadow-lg"
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </div>
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
                  <Link href="/Zemen-news">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center gap-2"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
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
                        <Link href="/Zemen-tenders">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group/btn"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            <div className="text-center mb-6 sm:col-span-1 md:col-span-2 lg:col-span-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-800 border border-purple-200 shadow-lg relative z-10"
              >
                <Zap className="w-4 h-4 mr-2" />
                Featured Ads
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl -z-0 scale-150" />
            </div>
            {advertisements.slice(3).map((ad, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-xl bg-white group hover:scale-102 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:translate-y-[-2px] transition-all duration-300"
              >
                <Link href={ad.link} className="block">
                  <ImageWithFallback
                    src={ad.src || "/placeholder.svg"}
                    alt={ad.alt}
                    title={ad.title}
                    description={ad.description}
                    aspectRatio="aspect-[21/9] sm:aspect-[16/9] md:aspect-[4/1] lg:aspect-[4/5]"
                  />
                </Link>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  AD
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <CombinedScrollingContent sections={combinedSectionsData} delay={0.6} />
    </section>
  )
}
