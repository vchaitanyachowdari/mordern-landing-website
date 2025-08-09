"use client"

import { Header, Footer } from "../../streamline-landing"
import { motion } from "framer-motion"

const reveal = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function TermsPage() {
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
              Terms of Service
            </motion.h1>
            <motion.p
              className="mt-3 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Last updated: {new Date().toLocaleDateString()}
            </motion.p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl space-y-10 px-4">
            <motion.div {...reveal} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold">1. Acceptance of terms</h2>
              <p className="mt-2 text-muted-foreground">
                By accessing or using StreamLine, you agree to be bound by these Terms. If you do not agree, do not use
                the service.
              </p>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.05 }}>
              <h2 className="text-2xl font-semibold">2. Accounts</h2>
              <p className="mt-2 text-muted-foreground">
                You are responsible for safeguarding passwords and for all activities under your account. Provide
                accurate information and notify us of any unauthorized use.
              </p>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-2xl font-semibold">3. Subscriptions & billing</h2>
              <p className="mt-2 text-muted-foreground">
                Paid plans renew automatically unless canceled. Fees are non-refundable except where required by law.
              </p>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.15 }}>
              <h2 className="text-2xl font-semibold">4. Acceptable use</h2>
              <ul className="mt-2 list-inside list-disc text-muted-foreground">
                <li>No unlawful, harmful, or abusive activities.</li>
                <li>No reverse engineering or circumvention of security.</li>
                <li>No interference with service integrity or availability.</li>
              </ul>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-2xl font-semibold">5. Termination</h2>
              <p className="mt-2 text-muted-foreground">
                We may suspend or terminate accounts for violations. You may cancel at any time in your settings.
              </p>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.25 }}>
              <h2 className="text-2xl font-semibold">6. Disclaimers</h2>
              <p className="mt-2 text-muted-foreground">
                The service is provided "as is" without warranties of any kind to the fullest extent permitted by law.
              </p>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.3 }}>
              <h2 className="text-2xl font-semibold">7. Limitation of liability</h2>
              <p className="mt-2 text-muted-foreground">
                To the maximum extent permitted, StreamLine and its affiliates will not be liable for indirect or
                consequential damages, or for loss of profits or data.
              </p>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.35 }}>
              <h2 className="text-2xl font-semibold">8. Changes to terms</h2>
              <p className="mt-2 text-muted-foreground">
                We may update these Terms from time to time. Continued use constitutes acceptance of the revised Terms.
              </p>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.4 }}>
              <h2 className="text-2xl font-semibold">9. Contact</h2>
              <p className="mt-2 text-muted-foreground">Questions? Email legal@streamline.io.</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
