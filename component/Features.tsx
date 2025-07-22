"use client"

import { motion } from "framer-motion"
import { Search, Bell, Shield, BarChart3, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Smart Search & Filters",
    description: "Find relevant tenders quickly with our advanced search and filtering system.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Never miss an opportunity with instant alerts for new tenders matching your criteria.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Verified & Secure",
    description: "All tenders are verified for authenticity and your data is protected with enterprise-grade security.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your bidding performance and success rates with comprehensive analytics.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    title: "Deadline Management",
    description: "Stay organized with automatic deadline tracking and submission reminders.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Work seamlessly with your team on tender applications and document management.",
    color: "from-teal-500 to-blue-500",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Win More Tenders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to streamline your tender process
            and increase your success rate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
