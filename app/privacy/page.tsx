"use client"

import { Header, Footer } from "../../streamline-landing"
import { motion } from "framer-motion"

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function PrivacyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b bg-gradient-to-b from-emerald-50 to-background">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              className="mt-3 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Effective date: {new Date().toLocaleDateString()}
            </motion.p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl space-y-10 px-4">
            <motion.div {...fade} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="mt-2 text-muted-foreground">
                StreamLine respects your privacy. This policy explains what information we collect, how we use it, and
                the rights and choices available to you.
              </p>
            </motion.div>

            <motion.div id="info-we-collect" {...fade} transition={{ duration: 0.5, delay: 0.05 }}>
              <h3 className="text-xl font-semibold">Information we collect</h3>
              <ul className="mt-2 list-inside list-disc text-muted-foreground">
                <li>Account details such as name, email, and company.</li>
                <li>Usage data and diagnostic logs to improve performance and reliability.</li>
                <li>Payment information processed by our PCI-compliant provider (we don’t store card numbers).</li>
              </ul>
            </motion.div>

            <motion.div id="how-we-use" {...fade} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="text-xl font-semibold">How we use information</h3>
              <ul className="mt-2 list-inside list-disc text-muted-foreground">
                <li>To provide, maintain, and improve StreamLine services.</li>
                <li>To secure our platform, prevent fraud, and enforce policies.</li>
                <li>To communicate updates, respond to requests, and provide support.</li>
              </ul>
            </motion.div>

            <motion.div id="sharing" {...fade} transition={{ duration: 0.5, delay: 0.15 }}>
              <h3 className="text-xl font-semibold">Sharing</h3>
              <p className="mt-2 text-muted-foreground">
                We share data with trusted processors to operate the service (e.g., cloud hosting, payments). We do not
                sell personal information.
              </p>
            </motion.div>

            <motion.div id="retention" {...fade} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-xl font-semibold">Data retention</h3>
              <p className="mt-2 text-muted-foreground">
                We retain data only as long as necessary for the purposes outlined here or as required by law.
              </p>
            </motion.div>

            <motion.div id="your-rights" {...fade} transition={{ duration: 0.5, delay: 0.25 }}>
              <h3 className="text-xl font-semibold">Your rights</h3>
              <ul className="mt-2 list-inside list-disc text-muted-foreground">
                <li>Access, correct, or delete your personal information.</li>
                <li>Object to or restrict processing where applicable.</li>
                <li>Portability of your data upon request.</li>
              </ul>
            </motion.div>

            <motion.div id="contact" {...fade} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="mt-2 text-muted-foreground">
                Questions? Email privacy@streamline.io and we’ll respond promptly.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
