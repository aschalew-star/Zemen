"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, Plus, Bell, MapPin, Phone, Mail, ChevronDown } from "lucide-react"
import Logo from "@/component/Logo" // Corrected import path
import { ImageWithFallback } from "@/component/image-with-fallback" // Corrected import path

const topNavItems = [
  { name: "Directory Search", href: "/directory-search", icon: Search },
  { name: "Add Your Business", href: "/add-business", icon: Plus },
  { name: "Register", href: "/register", type: "outline" },
  { name: "Login", href: "/login", type: "solid" },
  { name: "Advertise", href: "/advertise", type: "premium" },
]

const mainNavItems = [
  { name: "Home", href: "/" },
  { name: "Tenders", href: "/tenders" },
  { name: "Business Directory", href: "/business-directory" },
  {
    name: "Business News",
    href: "/news",
    dropdown: [
      { name: "Ethiopian News", href: "/news/ethiopian" },
      { name: "African News", href: "/news/african" },
      { name: "International News", href: "/news/international" },
      { name: "Market Updates", href: "/news/market-updates" },
      { name: "Company News", href: "/news/company" },
    ],
  },
  {
    name: "Doing Business",
    href: "/business-guide",
    dropdown: [
      { name: "Starting a Business", href: "/business-guide/starting" },
      { name: "Business Registration", href: "/business-guide/registration" },
      { name: "Investment Guides", href: "/business-guide/investment" },
      { name: "Taxation", href: "/business-guide/taxation" },
      { name: "Legal Framework", href: "/business-guide/legal" },
      { name: "Import & Export", href: "/business-guide/import-export" },
    ],
  },
  { name: "Construction", href: "/construction" },
]

const featuredAd = {
  src: "/giz.png", // Using one of your existing images
  alt: "Premium Business Solutions",
  link: "/featured-ad-link",
  title: "Unlock Your Business Potential",
  description: "Innovative solutions for growth and efficiency.",
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>091 123 5558</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>aschalewmuleta@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>megenagna,Addis Ababa, Ethiopia</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            {topNavItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      item.type === "solid"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : item.type === "outline"
                          ? "border border-white/30 hover:border-white/60 hover:bg-white/10"
                          : item.type === "premium"
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
                            : "hover:bg-white/10"
                    }`}
                  >
                    {Icon && <Icon className="w-3 h-3" />}
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Search and Advertisement Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo size="lg" />
            </Link>
            {/* Enhanced Search Bar */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tenders, businesses, news, construction projects..."
                  className="w-full pl-12 pr-4 py-2.5 bg-white border-2 border-gray-300 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-1.5 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md">
                  Search
                </button>
              </div>
            </div>
            {/* Single Large Advertisement - NO ANIMATIONS */}
            <div className="hidden lg:block flex-shrink-0 w-[300px] h-[80px] relative rounded-xl shadow-xl overflow-hidden">
              <Link href={featuredAd.link} className="block w-full h-full">
                <ImageWithFallback
                  src={featuredAd.src || "/placeholder.svg"}
                  alt={featuredAd.alt}
                  title={featuredAd.title}
                  description={featuredAd.description}
                  aspectRatio="aspect-[15/4]"
                />
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation Bar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="bg-white shadow-lg border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-14 items-center">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 relative group flex items-center
                      ${item.name === "Home" ? "bg-[#a02020] text-white hover:bg-[#801a1a]" : ""}
                    `}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: 10, scaleY: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg origin-top"
                      >
                        <ul className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.name}>
                              <Link
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              >
                                {dropdownItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            {/* Notification Bell */}
            <div className="hidden lg:block ml-8">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200 shadow-xl"
            >
              <div className="py-6 space-y-3">
                {/* Mobile Top Nav Items */}
                <div className="px-4 pb-4 border-b border-gray-200">
                  <div className="text-sm font-semibold text-gray-500 mb-3">Quick Actions</div>
                  <div className="grid grid-cols-2 gap-2">
                    {topNavItems.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                              item.type === "solid"
                                ? "bg-blue-600 text-white"
                                : item.type === "outline"
                                  ? "border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                                  : item.type === "premium"
                                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {Icon && <Icon className="w-4 h-4" />}
                            <span>{item.name}</span>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
                {/* Mobile Main Nav Items */}
                <div className="px-4">
                  <div className="text-sm font-semibold text-gray-500 mb-3">Main Menu</div>
                  {mainNavItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-red-50 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <ul className="ml-4 mt-2 space-y-1 border-l border-gray-200 pl-4">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.name}>
                              <Link
                                href={dropdownItem.href}
                                className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-1.5 rounded-md"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* Decorative bottom border */}
      <motion.div
        className="h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
  )
}
