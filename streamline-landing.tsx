"use client"

import type React from "react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Menu,
  Zap,
  ShieldCheck,
  BarChart3,
  GitBranch,
  Check,
  ArrowRight,
  Flame,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  type XAxisProps,
  type YAxisProps,
} from "recharts"

// Shared motion variants
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const revealOnce = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.2 },
}

export default function Component() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

// Export Header and Footer so other pages can reuse them
export function Header() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.2 })
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <motion.div
        style={{ scaleX }}
        className="pointer-events-none fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-emerald-600"
        aria-hidden="true"
      />
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Flame className="size-5" aria-hidden="true" />
          </span>
          <span className="text-base font-semibold">StreamLine</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
            Careers
          </Link>
          <Link href="/press" className="text-sm text-muted-foreground hover:text-foreground">
            Press
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#cta"
            className="inline-flex h-9 items-center justify-center rounded-md bg-emerald-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30"
          >
            Start free
          </Link>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open navigation menu">
          <Menu className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/#features">Features</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/#pricing">Pricing</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/about">About</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/careers">Careers</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/press">Press</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact">Contact</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function AnimatedBackground() {
  // Decorative floating blobs
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]" />
    </div>
  )
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -60])

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b bg-gradient-to-b from-emerald-50 to-background"
    >
      <AnimatedBackground />
      <div className="container mx-auto grid items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            {...fadeUp}
          >
            <span className="inline-flex size-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
              <Zap className="size-3" aria-hidden="true" />
            </span>
            New: AI-powered automations
          </motion.div>

          <motion.h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-5xl" {...fadeUp}>
            Automate your workflows. Accelerate your team.
          </motion.h1>

          <motion.p className="max-w-[52ch] text-base text-muted-foreground sm:text-lg" {...fadeUp}>
            StreamLine is the modern platform to orchestrate tasks, reduce busywork, and get real results— without the
            overhead. Build powerful automations in minutes, not months.
          </motion.p>

          <motion.div className="flex flex-col gap-3 sm:flex-row" {...fadeUp}>
            <Link
              href="/#cta"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30"
            >
              Start free
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-5 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View pricing
            </Link>
          </motion.div>

          <motion.ul
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground"
            {...fadeUp}
          >
            <li className="inline-flex items-center gap-2">
              <Check className="size-4 text-emerald-600" aria-hidden="true" />
              No credit card required
            </li>
            <li className="inline-flex items-center gap-2">
              <Check className="size-4 text-emerald-600" aria-hidden="true" />
              Cancel anytime
            </li>
            <li className="inline-flex items-center gap-2">
              <Check className="size-4 text-emerald-600" aria-hidden="true" />
              14-day trial
            </li>
          </motion.ul>
        </div>

        <motion.div style={{ y }} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-emerald-200/50 to-transparent blur-2xl" />
          <ChartCard />
        </motion.div>
      </div>
    </section>
  )
}

function ChartCard() {
  // Animated "activity" chart data
  const base = useMemo(() => Array.from({ length: 14 }, (_, i) => ({ t: i + 1, jobs: 20 + Math.random() * 15 })), [])
  const [data, setData] = useState(base)

  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => {
        const nextVal = Math.max(10, Math.min(60, (prev[prev.length - 1]?.jobs || 30) + (Math.random() - 0.5) * 8))
        const next = [...prev.slice(1), { t: (prev[prev.length - 1]?.t || 0) + 1, jobs: nextVal }]
        return next
      })
    }, 1200)
    return () => clearInterval(id)
  }, [])

  return (
    <Card className="mx-auto w-full max-w-[720px] rounded-xl border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Automation Throughput</CardTitle>
          <span className="text-xs text-emerald-700">Live</span>
        </div>
        <CardDescription>Real-time runs per interval</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <ChartContainer
          config={{
            jobs: { label: "Jobs", color: "hsl(var(--chart-1))" },
          }}
          className="h-[260px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="t" tickLine={false} axisLine={false} tick={{ fontSize: 12 } as XAxisProps["tick"]} />
              <YAxis
                width={28}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 } as YAxisProps["tick"]}
                domain={[0, 60]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="jobs"
                stroke="var(--color-jobs)"
                strokeWidth={2}
                dot={false}
                isAnimationActive
                animationDuration={600}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="justify-end text-xs text-muted-foreground">Avg. success rate 99.97%</CardFooter>
    </Card>
  )
}

function Features() {
  const items = [
    {
      icon: <Zap className="size-5 text-emerald-600" aria-hidden="true" />,
      title: "Lightning-fast automations",
      desc: "Trigger workflows from webhooks, schedules, or apps. Run parallel steps to save hours every week.",
    },
    {
      icon: <GitBranch className="size-5 text-emerald-600" aria-hidden="true" />,
      title: "Visual builder",
      desc: "Design complex processes with a drag-and-drop canvas and built-in versioning that teams love.",
    },
    {
      icon: <ShieldCheck className="size-5 text-emerald-600" aria-hidden="true" />,
      title: "Enterprise-grade security",
      desc: "SSO/SAML, audit logs, granular roles, and encryption in transit and at rest keep your data safe.",
    },
    {
      icon: <BarChart3 className="size-5 text-emerald-600" aria-hidden="true" />,
      title: "Insights that matter",
      desc: "Track SLAs, throughput, and failures with real-time dashboards and proactive alerts.",
    },
  ]

  return (
    <motion.section id="features" aria-labelledby="features-heading" className="w-full py-16 sm:py-24" {...revealOnce}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Build, run, and scale with confidence
          </h2>
          <p className="mt-3 text-muted-foreground">
            StreamLine brings your tools and teams together so work flows effortlessly.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-start gap-3">
                  <motion.div
                    className="inline-flex size-10 items-center justify-center rounded-md bg-emerald-50"
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  >
                    {it.icon}
                  </motion.div>
                  <CardTitle className="text-base">{it.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">{it.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function Testimonials() {
  const quotes = [
    {
      name: "Jordan Lee",
      role: "Head of Ops, NovaTech",
      avatar: "/thoughtful-artist.png",
      initials: "JL",
      quote: "StreamLine cut our manual workflows by 70%. The team ships faster and our error rate is near zero.",
    },
    {
      name: "Amira Patel",
      role: "CTO, Orbital",
      avatar: "/thoughtful-artist.png",
      initials: "AP",
      quote: "We built reliable automations in days. Observability and rollback made adoption a no-brainer.",
    },
    {
      name: "Chris Walker",
      role: "Founder, BrightLoop",
      avatar: "/thoughtful-artist.png",
      initials: "CW",
      quote: "The visual builder is phenomenal. Our non-devs create workflows without pinging engineering.",
    },
  ]

  return (
    <motion.section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full border-y bg-muted/30 py-16 sm:py-24"
      {...revealOnce}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by modern teams
          </h2>
          <p className="mt-3 text-muted-foreground">Here’s what customers say after moving to StreamLine.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarImage
                        src={q.avatar || "/placeholder.svg?height=80&width=80&query=customer-avatar"}
                        alt={`${q.name} avatar`}
                      />
                      <AvatarFallback>{q.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm font-semibold">{q.name}</CardTitle>
                      <CardDescription className="text-xs">{q.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">“{q.quote}”</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      desc: "For individuals getting started.",
      features: ["100 runs / mo", "2 workflows", "Community support"],
      cta: "Get started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      desc: "Best for growing teams.",
      features: ["10,000 runs / mo", "Unlimited workflows", "Priority support", "Advanced analytics"],
      cta: "Start 14-day trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For companies with advanced needs.",
      features: ["SAML/SSO", "Dedicated infra options", "Audit logs & DLP", "Uptime SLA"],
      cta: "Contact sales",
      highlight: false,
    },
  ] as const

  return (
    <motion.section id="pricing" aria-labelledby="pricing-heading" className="w-full py-16 sm:py-24" {...revealOnce}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Flexible pricing for every stage
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start free, upgrade when you scale. Simple, predictable, and transparent.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:mt-14 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Card className={p.highlight ? "border-emerald-600 shadow-[0_0_0_1px_rgba(5,150,105,0.2)]" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{p.name}</CardTitle>
                    {p.highlight ? (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        Popular
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{p.price}</span>
                    <span className="text-sm text-muted-foreground">{p.period}</span>
                  </div>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href={p.name === "Enterprise" ? "/contact" : "/#cta"}
                    className={
                      p.highlight
                        ? "inline-flex h-10 w-full items-center justify-center rounded-md bg-emerald-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30"
                        : "inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    }
                  >
                    {p.cta}
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function FinalCta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative w-full border-t bg-gradient-to-b from-background to-emerald-50/60 py-16 sm:py-24"
      {...revealOnce}
    >
      <AnimatedBackground />
      <div className="container mx-auto grid max-w-4xl items-center gap-6 px-4 text-center">
        <h2 id="cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to streamline your work?
        </h2>
        <p className="text-muted-foreground">Join thousands of teams automating their workflows with StreamLine.</p>
        <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            Work email
          </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 flex-1 bg-background"
          />
          <Button type="submit" className="h-11 bg-emerald-600 text-white hover:bg-emerald-700">
            Start free
          </Button>
        </form>
        {submitted ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-emerald-700">
            Thanks! We&apos;ll be in touch at {email || "your email"}.
          </motion.p>
        ) : (
          <p className="text-xs text-muted-foreground">Free 14-day trial. No credit card required.</p>
        )}
      </div>
    </motion.section>
  )
}

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto grid gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">
              <Flame className="size-5" aria-hidden="true" />
            </span>
            <span className="text-base font-semibold">StreamLine</span>
          </Link>
          <p className="text-sm text-muted-foreground">Automate tasks, connect tools, and move faster.</p>
          <div className="flex items-center gap-3 pt-1" aria-label="Social media">
            <Link
              href="#"
              aria-label="Twitter"
              className="inline-flex size-9 items-center justify-center rounded-md border hover:bg-accent"
            >
              <Twitter className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="#"
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-md border hover:bg-accent"
            >
              <Github className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-md border hover:bg-accent"
            >
              <Linkedin className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Product</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/#features" className="hover:text-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                Changelog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                Status
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Company</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-foreground">
                Press
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Legal</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                Security
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                DPA
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} StreamLine, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
