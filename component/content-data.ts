// component/content-data.ts
import type React from "react";
import { Briefcase, Star, TrendingUp } from "lucide-react";

interface CategoryColors {
  [key: string]: string;
  "Banking and Finance": string;
  Investment: string;
  Technology: string;
  Construction: string;
  Legal: string;
}

export const mainArticles = [
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
];

export const mostReadContent = [
  "Customs Duty, Tariff, Levies and Taxes in Ethiopia",
  "HS Code",
  "Import and Export Regulations in Ethiopia",
  "Ethiopian Shipping and Logistics Procedures on Booking, Shipping and Clearing",
  "Import and Export Procedures in Ethiopia",
];

export const editorsPick = [
  "How to Participate in Government Tender or bid in Ethiopia: Regulations and Procedures",
  "Ethiopia Business Profile",
  "Consumer Protection Law in Ethiopia",
  "I Am a Foreign Supplier: How Can I Participate in a Government Tender in Ethiopia?",
  "How to Participate in Non-Government Tenders or EOI's in Ethiopia: Guidelines and Tips",
];

export const businessGuides = [
  "Business Registration and Licensing Procedures in Ethiopia",
  "How to Start a PLC (Private Limited Company) in Ethiopia (particularly in Addis Ababa)",
  "Regulations of Commercial Registration and Business Licensing in Ethiopia",
  "Micro-Financing of Small Businesses in Ethiopia",
  "Starting a Business in Ethiopia: Information and Frequently Asked Questions",
];

export const advertisements = [
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
];

export const categoryColors: CategoryColors = {
  "Banking and Finance": "from-emerald-500 to-teal-600",
  Investment: "from-purple-500 to-indigo-600",
  Technology: "from-blue-500 to-cyan-600",
  Construction: "from-orange-500 to-red-600",
  Legal: "from-gray-500 to-slate-600",
};

export const combinedSectionsData = [
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
];