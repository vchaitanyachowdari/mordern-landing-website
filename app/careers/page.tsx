"use client"

import { motion } from "framer-motion"
import { Header, Footer } from "../../streamline-landing"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import Link from "next/link"

const roles = [
  {
    title: "Senior Frontend Engineer",
    location: "Remote",
    type: "Full-time",
    desc: "Own key areas of our dashboard and builder. Strong experience with React and TypeScript.",
  },
  {
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    desc: "Design elegant flows and components across the StreamLine platform.",
  },
  {
    title: "Developer Advocate",
    location: "Remote",
    type: "Full-time",
    desc: "Create content, examples, and engage with our developer community.",
  },
]

export default function CareersPage() {
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
              Join the team
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              We&apos;re a remote-first team building tools that power modern operations. Come build with us.
            </motion.p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{r.title}</CardTitle>
                    <CardDescription>
                      {r.location} • {r.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{r.desc}</CardContent>
                  <CardFooter>
                    <Link
                      href="/contact"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700"
                    >
                      Apply now
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
