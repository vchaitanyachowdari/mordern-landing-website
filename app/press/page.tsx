"use client"

import { motion } from "framer-motion"
import { Header, Footer } from "../../streamline-landing"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const logos = [
  { name: "TechDaily", src: "/techdaily-logo.png" },
  { name: "StackWorld", src: "/stackworld-logo.png" },
  { name: "OpsToday", src: "/generic-news-logo.png" },
  { name: "DevMag", src: "/devmag-logo.png" },
]

export default function PressPage() {
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
              Press & Media
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              Find our brand assets, product shots, and official information for your coverage.
            </motion.p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Press Kit</CardTitle>
                <CardDescription>Logos, product images, and brand guidelines</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-3">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700">Download .zip</Button>
                <Button variant="outline">Brand guidelines</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media Contact</CardTitle>
                <CardDescription>Reach our communications team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Email: press@streamline.io</p>
                <p>Response time: within 1 business day</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <p className="mb-6 text-center text-sm font-semibold">Featured in</p>
            <div className="mx-auto grid max-w-5xl grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-4">
              {logos.map((l) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={l.src || "/placeholder.svg"}
                    alt={`${l.name} logo`}
                    width={160}
                    height={48}
                    className="opacity-70"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
