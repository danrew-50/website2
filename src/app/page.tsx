"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] dark:bg-gray-900 text-[#444448] dark:text-gray-100 transition-colors duration-300">
      {/* Theme Toggle */}
      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <ThemeToggle />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Profile Image */}
          <motion.div
            className="mb-6 sm:mb-8"
            variants={fadeInUp}
          >
            <motion.div
              variants={floatAnimation}
              animate="animate"
            >
              <Image
                src="https://ext.same-assets.com/1749553235/1901600091.png"
                alt="Joshua Wilson"
                width={120}
                height={120}
                className="rounded-full mx-auto shadow-lg dark:shadow-gray-800"
              />
            </motion.div>
          </motion.div>

          {/* Name and Handle */}
          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            variants={fadeInUp}
          >
            Joshua Wilson
          </motion.h1>
          <motion.p
            className="text-[#99a2b0] dark:text-gray-400 mb-6"
            variants={fadeInUp}
          >
            @joshuawilsun
          </motion.p>

          {/* Bio */}
          <motion.div
            className="max-w-md mx-auto text-left space-y-2 mb-6 sm:mb-8"
            variants={fadeInUp}
          >
            <motion.p
              className="flex items-start"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="mr-2 text-[#99a2b0] dark:text-gray-400">•</span>
              <span>
                Founder of{" "}
                <Link href="https://www.logocycle.com" className="text-[#444448] dark:text-gray-100 underline hover:no-underline transition-all">
                  logocycle.com
                </Link>
              </span>
            </motion.p>
            <motion.p
              className="flex items-start"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="mr-2 text-[#99a2b0] dark:text-gray-400">•</span>
              <span>
                A passionate designer who loves bringing brands to life with clean, impactful logos and identities.
              </span>
            </motion.p>
            <motion.p
              className="flex items-start"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="mr-2 text-[#99a2b0] dark:text-gray-400">•</span>
              <span>Husband, christian and designer.</span>
            </motion.p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-6 mb-6 sm:mb-8"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://x.com/joshuawilsun" className="hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6 fill-current text-[#444448] dark:text-gray-100" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://www.linkedin.com/in/joshuawilsun/" className="hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6 fill-current text-[#444448] dark:text-gray-100" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="mailto:josh@joshuawilson.co" className="hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6 fill-current text-[#444448] dark:text-gray-100" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.906L12 12.269l9.458-8.448h.906c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://cal.com/joshuawilson/30min?overlayCalendar=true" className="hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6 fill-current text-[#444448] dark:text-gray-100" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigation Pills */}
          <motion.div
            className="flex justify-center flex-wrap gap-2"
            variants={fadeInUp}
          >
            <motion.button
              className="bg-[#444448] dark:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.button>
            <motion.button
              className="text-[#99a2b0] dark:text-gray-400 px-4 py-2 rounded-full text-sm font-medium hover:text-[#444448] dark:hover:text-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Who I am
            </motion.button>
            <motion.button
              className="text-[#99a2b0] dark:text-gray-400 px-4 py-2 rounded-full text-sm font-medium hover:text-[#444448] dark:hover:text-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quotes
            </motion.button>
            <motion.button
              className="text-[#99a2b0] dark:text-gray-400 px-4 py-2 rounded-full text-sm font-medium hover:text-[#444448] dark:hover:text-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Manifesto
            </motion.button>
            <motion.button
              className="text-[#99a2b0] dark:text-gray-400 px-4 py-2 rounded-full text-sm font-medium hover:text-[#444448] dark:hover:text-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="space-y-12 sm:space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Logocycle Project */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="order-2 md:order-1"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-8 h-8 bg-[#444448] dark:bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-white text-lg font-bold">L</span>
                </div>
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Logocycle</h2>
              <p className="text-[#99a2b0] dark:text-gray-400 mb-6 leading-relaxed">
                Designing the face of a business&apos;s brand so they can focus on everything else.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="https://www.logocycle.com/"
                  className="text-[#444448] dark:text-gray-100 font-medium hover:underline inline-flex items-center transition-all"
                >
                  Website →
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://ext.same-assets.com/1749553235/3492996549.png"
                alt="Logocycle Brand Grid"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto shadow-lg dark:shadow-gray-800"
              />
            </motion.div>
          </motion.div>

          {/* Avalanche Case Study */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="order-2 md:order-1"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-8 h-8 bg-[#444448] dark:bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-white text-lg font-bold">A</span>
                </div>
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Avalanche Case Study</h2>
              <p className="text-[#99a2b0] dark:text-gray-400 mb-6 leading-relaxed">
                Avalanche represents unstoppable momentum, fearless progression, and the rush of carving your own path down the mountain.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="https://www.logocycle.com/work/avalanche"
                  className="text-[#444448] dark:text-gray-100 font-medium hover:underline inline-flex items-center transition-all"
                >
                  View case study →
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://ext.same-assets.com/1749553235/2623817408.png"
                alt="Avalanche Case Study"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto shadow-lg dark:shadow-gray-800"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
