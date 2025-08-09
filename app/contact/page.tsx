"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Header, Footer } from "../../streamline-landing"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thanks for reaching out! We'll get back to you shortly.")
  }

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
              Contact us
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              Have questions about StreamLine? Fill out the form and our team will be in touch.
            </motion.p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-5">
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" required placeholder="How can we help?" rows={6} />
                </div>
                <Button type="submit" className="h-11 bg-emerald-600 text-white hover:bg-emerald-700">
                  Send message
                </Button>
              </form>
            </motion.div>

            <motion.aside
              className="space-y-4 rounded-lg border bg-card p-6 md:col-span-2"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold">Other ways to reach us</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="size-4 text-emerald-600" /> support@streamline.io
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 text-emerald-600" /> +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 text-emerald-600" /> Remote-first • Global
                </p>
              </div>
            </motion.aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
