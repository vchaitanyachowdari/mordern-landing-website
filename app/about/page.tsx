"use client"

import { motion } from "framer-motion"
import { Header, Footer } from "../../streamline-landing"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-emerald-50 to-background">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About StreamLine
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              We&apos;re on a mission to help teams automate tedious work, connect their tools, and focus on what
              matters. Founded in 2024, StreamLine is a fully-remote, product-led company serving thousands of teams.
            </motion.p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold">Our values</h2>
              <ul className="list-inside list-disc text-muted-foreground">
                <li>Customer obsession</li>
                <li>Default to action</li>
                <li>Craft and simplicity</li>
                <li>Transparency and trust</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card>
                <CardContent className="p-6 text-sm text-muted-foreground">
                  <p>
                    StreamLine operates globally with teammates across 8 time zones. We believe great products come from
                    empowered people, thoughtful iteration, and listening closely to our users.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
