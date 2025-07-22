"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Target, BarChart3, Users, Zap } from "lucide-react"

const adFeatures = [
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Reach your ideal customers with precision targeting",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track performance with detailed analytics",
  },
  {
    icon: Users,
    title: "Large Audience",
    description: "Access to 2M+ monthly active users",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Launch campaigns in minutes, not days",
  },
]

export default function Advertisment() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <Target className="w-4 h-4 mr-2" />
              Premium Advertising Solutions
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Advertise Across Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                Entire Network
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Reach thousands of businesses, contractors, and decision-makers across all our platforms with targeted
              advertising campaigns that deliver results.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {adFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/advertise"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Start Advertising
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/ad-packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                View Packages
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Ad Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Your Ad Could Be Here</h3>
                <p className="text-gray-300">Reach millions of potential customers</p>
              </div>

              {/* Mock Ad Placements */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Tender Platform</div>
                    <div className="text-xs text-blue-400">Premium Spot</div>
                  </div>
                  <div className="h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-300">Your Advertisement</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Business Directory</div>
                    <div className="text-xs text-green-400">Featured Listing</div>
                  </div>
                  <div className="h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-300">Your Business Profile</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl p-4 border border-red-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">News Section</div>
                    <div className="text-xs text-red-400">Sponsored Content</div>
                  </div>
                  <div className="h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-300">Your Article/News</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">2M+</div>
                <div className="text-gray-300">Monthly Impressions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
