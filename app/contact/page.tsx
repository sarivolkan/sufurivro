import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  CalendarDays,
  Check,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact SUFURIVRO",
  description:
    "Contact the SUFURIVRO team to request a demo, discuss ITSM analytics, Microsoft Fabric, Power BI reporting, integrations or partnership opportunities.",
  alternates: {
    canonical: "https://sufurivro.com/contact",
  },
  openGraph: {
    title: "Contact SUFURIVRO",
    description:
      "Talk to the SUFURIVRO team about ITSM analytics, integrations, Microsoft Fabric and Power BI.",
    url: "https://sufurivro.com/contact",
    siteName: "SUFURIVRO",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://sufurivro.com/contact#faq",
  url: "https://sufurivro.com/contact",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly will I get a response?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team aims to respond to business inquiries within one business day.",
      },
    },
    {
      "@type": "Question",
      name: "Who should I contact for a product demo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the contact form and select a demo request in your message. Our team will route your request to the right specialist.",
      },
    },
    {
      "@type": "Question",
      name: "Can I talk to a real person?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SUFURIVRO sales, technical and partnership inquiries are handled by our team.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer enterprise or custom solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SUFURIVRO can be tailored to different ITSM platforms, reporting models and enterprise analytics requirements.",
      },
    },
  ],
};

const ContactCard = ({
  icon,
  title,
  text,
  action,
  href,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  action: string;
  href: string;
}) => (
  <div className="rounded-[18px] border border-blue-100 bg-white p-6 shadow-[0_8px_24px_rgba(20,60,120,.035)]">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
      {icon}
    </div>

    <h3 className="mt-5 text-[18px] font-black text-[#102965]">
      {title}
    </h3>

    <p className="mt-2 min-h-[48px] text-[13px] leading-6 text-[#607690]">
      {text}
    </p>

    <a
      href={href}
      className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-blue-600"
    >
      {action}
      <ArrowRight size={14} />
    </a>
  </div>
);

const Reason = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
      {icon}
    </div>

    <div>
      <div className="text-[14px] font-black text-[#102965]">
        {title}
      </div>

      <p className="mt-1 text-[12px] leading-5 text-[#607690]">
        {text}
      </p>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* FAQ SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header active="contact" />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f7fbff] to-[#dceeff]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(37,99,235,.13) 1px, transparent 1px)
            `,
            backgroundSize: "18px 18px",
          }}
        />

        <div className="absolute -left-[170px] bottom-[-120px] h-[360px] w-[360px] rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute -right-[120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] gap-12 px-6 py-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10 lg:py-16">
          {/* LEFT */}

          <div className="max-w-[610px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              Let&apos;s Talk
            </div>

            <h1 className="mt-4 text-[53px] font-black leading-[1.02] tracking-[-0.05em] text-[#102965] lg:text-[59px]">
              Get in Touch with
              <span className="block">the SUFURIVRO Team</span>
            </h1>

            <p className="mt-6 max-w-[575px] text-[17px] leading-[1.6] text-[#526a91]">
              Have questions, need a demo, or want to explore a partnership?
              We&apos;re here to help. Our team is ready to talk about how
              SUFURIVRO can power your business forward.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex h-[54px] min-w-[185px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-[14px] font-bold text-white shadow-[0_12px_26px_rgba(249,115,22,.25)] transition hover:-translate-y-0.5"
              >
                Request a Demo
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact-form"
                className="inline-flex h-[54px] min-w-[155px] items-center justify-center rounded-xl border border-blue-400 bg-white px-7 text-[14px] font-bold text-blue-700 transition hover:-translate-y-0.5"
              >
                Talk to Sales
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-[12px] text-[#526a91]">
              <div className="flex items-center gap-2">
                <Check
                  size={15}
                  className="text-blue-600"
                  strokeWidth={3}
                />
                Fast response
              </div>

              <div className="flex items-center gap-2">
                <Check
                  size={15}
                  className="text-blue-600"
                  strokeWidth={3}
                />
                No pressure
              </div>

              <div className="flex items-center gap-2">
                <Check
                  size={15}
                  className="text-blue-600"
                  strokeWidth={3}
                />
                Enterprise-ready
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative mx-auto min-h-[350px] w-full max-w-[620px]">
            <div className="absolute left-[80px] top-[5px] h-[280px] w-[310px] rounded-[22px] bg-blue-100/70" />

            <div className="absolute left-[160px] top-[25px] z-10 overflow-hidden rounded-[20px] border-[7px] border-white shadow-[0_24px_60px_rgba(30,70,130,.16)]">
              <img
                src="/images/contact-team.png"
                alt="SUFURIVRO team"
                className="h-[240px] w-[245px] object-cover"
              />
            </div>

            <div className="absolute left-[15px] top-[45px] z-20 w-[165px] rounded-[16px] border border-blue-100 bg-white px-5 py-5 shadow-[0_12px_30px_rgba(30,70,130,.10)]">
              <div className="text-[12px] font-black leading-5 text-[#102965]">
                Real people.
                <br />
                Real solutions.
                <br />
                That&apos;s{" "}
                <span className="text-blue-600">
                  SUFURIVRO.
                </span>
              </div>
            </div>

            <div className="absolute bottom-[10px] left-[20px] z-20 w-[170px] rounded-[16px] border border-blue-100 bg-white p-5 shadow-[0_12px_30px_rgba(30,70,130,.10)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <UsersRound size={21} />
              </div>

              <div className="mt-4 text-[15px] font-black text-[#102965]">
                A partner in
                <span className="block">
                  your growth
                </span>
              </div>

              <div className="mt-4 h-[3px] w-14 rounded-full bg-blue-500" />
            </div>

            <div className="absolute right-[0px] top-[80px] z-20 w-[180px] rounded-[16px] border border-blue-100 bg-white p-5 shadow-[0_12px_30px_rgba(30,70,130,.10)]">
              <div className="space-y-4">
                {[
                  ["Questions", <MessageSquare size={15} />],
                  ["Demos", <CalendarDays size={15} />],
                  ["Partnerships", <UsersRound size={15} />],
                  ["Support", <Headphones size={15} />],
                  ["Custom solutions", <Target size={15} />],
                ].map(([name, icon]) => (
                  <div
                    key={name as string}
                    className="flex items-center gap-3 text-[11px] font-semibold text-[#102965]"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      {icon}
                    </div>

                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-[2px] top-[0px] rotate-[-7deg] text-[16px] font-semibold italic leading-5 text-blue-600">
              Big
              <br />
              Possibilities
              <br />
              Together
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT OPTIONS
      ====================================================== */}

      <section className="py-14">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                Ways to Reach Us
              </div>

              <h2 className="mt-2 text-[35px] font-black text-[#102965]">
                How can we help?
              </h2>
            </div>

            <p className="max-w-[420px] text-[13px] leading-6 text-[#607690]">
              Choose the best way to get in touch and we&apos;ll make sure you
              connect with the right team.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ContactCard
              icon={<CalendarDays size={22} />}
              title="Book a Demo"
              text="See SUFURIVRO in action with a personalized demo."
              action="Schedule a Demo"
              href="#contact-form"
            />

            <ContactCard
              icon={<MessageSquare size={22} />}
              title="Talk to Sales"
              text="Discuss your needs and get expert guidance."
              action="Contact Sales"
              href="#contact-form"
            />

            <ContactCard
              icon={<Headphones size={22} />}
              title="Technical Support"
              text="Get help from our technical support team."
              action="Visit Support"
              href="#contact-form"
            />

            <ContactCard
              icon={<UsersRound size={22} />}
              title="Partnership Inquiries"
              text="Explore strategic opportunities with us."
              action="Contact Partnerships"
              href="#contact-form"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM + INFO
      ====================================================== */}

      <section
        id="contact-form"
        className="pb-14"
      >
        <div className="mx-auto grid max-w-[1450px] gap-5 px-6 lg:grid-cols-[1.05fr_.85fr] lg:px-10">
          {/* FORM */}

          <div className="rounded-[20px] border border-blue-100 bg-white p-7 shadow-[0_8px_24px_rgba(20,60,120,.035)]">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              Send Us a Message
            </div>

            <h2 className="mt-2 text-[31px] font-black text-[#102965]">
              We&apos;d love to hear from you
            </h2>

            <p className="mt-1 text-[13px] text-[#607690]">
              Fill out the form and our team will get back to you shortly.
            </p>

            <form className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-[12px] font-bold text-[#385372]">
                    Full Name <span className="text-red-500">*</span>
                  </span>

                  <input
                    type="text"
                    placeholder="John Smith"
                    className="mt-2 h-[46px] w-full rounded-lg border border-slate-200 bg-white px-4 text-[13px] outline-none transition placeholder:text-slate-300 focus:border-blue-500"
                  />
                </label>

                <label className="block">
                  <span className="text-[12px] font-bold text-[#385372]">
                    Company <span className="text-red-500">*</span>
                  </span>

                  <input
                    type="text"
                    placeholder="Acme Co."
                    className="mt-2 h-[46px] w-full rounded-lg border border-slate-200 bg-white px-4 text-[13px] outline-none transition placeholder:text-slate-300 focus:border-blue-500"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="text-[12px] font-bold text-[#385372]">
                  Work Email <span className="text-red-500">*</span>
                </span>

                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 h-[46px] w-full rounded-lg border border-slate-200 bg-white px-4 text-[13px] outline-none transition placeholder:text-slate-300 focus:border-blue-500"
                />
              </label>

              <label className="mt-4 block">
                <span className="text-[12px] font-bold text-[#385372]">
                  Message <span className="text-red-500">*</span>
                </span>

                <textarea
                  placeholder="Tell us how we can help..."
                  className="mt-2 min-h-[120px] w-full resize-none rounded-lg border border-slate-200 bg-white p-4 text-[13px] outline-none transition placeholder:text-slate-300 focus:border-blue-500"
                />
              </label>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="inline-flex h-[50px] min-w-[170px] items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 text-[14px] font-bold text-white shadow-[0_10px_22px_rgba(249,115,22,.22)] hover:bg-orange-600"
                >
                  Send Message
                  <ArrowRight size={15} />
                </button>

                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <ShieldCheck size={14} />
                  Your information is secure and will never be shared.
                </div>
              </div>
            </form>
          </div>

          {/* CONTACT INFO */}

          <div className="rounded-[20px] border border-blue-100 bg-gradient-to-br from-[#f7fbff] to-[#edf6ff] p-7">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              Other Ways to Reach Us
            </div>

            <h2 className="mt-2 text-[27px] font-black text-[#102965]">
              Contact Information
            </h2>

            <div className="mt-7 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Mail size={21} />
                </div>

                <div>
                  <div className="text-[12px] font-bold text-[#102965]">
                    Business Email
                  </div>

                  <a
                    href="mailto:hello@sufurivro.com"
                    className="mt-1 block text-[15px] font-black text-blue-600"
                  >
                    hello@sufurivro.com
                  </a>

                  <div className="mt-1 text-[11px] text-[#607690]">
                    We typically respond within 1 business day.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Phone size={21} />
                </div>

                <div>
                  <div className="text-[12px] font-bold text-[#102965]">
                    Phone
                  </div>

                  <div className="mt-1 text-[14px] font-black text-blue-600">
                    Available on request
                  </div>

                  <div className="mt-1 text-[11px] text-[#607690]">
                    Business hours, Monday–Friday.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <MapPin size={21} />
                </div>

                <div className="flex-1">
                  <div className="text-[12px] font-bold text-[#102965]">
                    Our Office
                  </div>

                  <div className="mt-1 text-[14px] font-black text-[#31547d]">
                    Datamart Information Technologies
                  </div>

                  <div className="mt-1 text-[12px] leading-5 text-[#607690]">
                    İstanbul, Türkiye
                  </div>

                  <div className="mt-5 overflow-hidden rounded-[14px] border border-blue-100">
                    <img
                      src="/images/contact-office.png"
                      alt="Office"
                      className="h-[150px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOOD HANDS
      ====================================================== */}

      <section className="pb-14">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
            Why Companies Contact SUFURIVRO
          </div>

          <h2 className="mt-2 text-[28px] font-black text-[#102965]">
            You&apos;re in good hands
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <Reason
              icon={<Zap size={22} />}
              title="Fast Response"
              text="We reply within 1 business day."
            />

            <Reason
              icon={<UsersRound size={22} />}
              title="Expert Guidance"
              text="Get advice from real specialists."
            />

            <Reason
              icon={<ShieldCheck size={22} />}
              title="Secure by Design"
              text="Enterprise-grade security in every solution."
            />

            <Reason
              icon={<Target size={22} />}
              title="Tailored to Your Needs"
              text="Custom demos and solutions for your business."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="pb-14">
        <div className="mx-auto grid max-w-[1450px] gap-8 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              Quick Answers
            </div>

            <h2 className="mt-2 text-[31px] font-black text-[#102965]">
              Frequently Asked Questions
            </h2>

            <p className="mt-2 max-w-[340px] text-[13px] leading-6 text-[#607690]">
              Find answers to common questions about contacting our team.
            </p>

            <a
              href="#contact-form"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-400 px-5 py-3 text-[12px] font-bold text-blue-600"
            >
              Visit Help Center
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How quickly will I get a response?",
                a: "Our team aims to respond to business inquiries within one business day.",
              },
              {
                q: "Who should I contact for a product demo?",
                a: "Use the contact form and select a demo request in your message. Our team will route your request to the right specialist.",
              },
              {
                q: "Can I talk to a real person?",
                a: "Yes. SUFURIVRO sales, technical and partnership inquiries are handled by our team.",
              },
              {
                q: "Do you offer enterprise or custom solutions?",
                a: "Yes. SUFURIVRO can be tailored to different ITSM platforms, reporting models and enterprise analytics requirements.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-blue-100 bg-white px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-[13px] font-bold text-[#102965]">
                  {item.q}

                  <span className="text-blue-600 transition group-open:rotate-180">
                    ⌄
                  </span>
                </summary>

                <p className="mt-3 pr-10 text-[12px] leading-6 text-[#607690]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 pb-10 lg:px-10">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[20px] bg-gradient-to-r from-[#0a3c94] via-[#2388ee] to-[#a7d6ff] px-10 py-8 text-white">
          <div className="absolute bottom-0 right-0 opacity-40">
            <svg
              width="480"
              height="145"
              viewBox="0 0 480 145"
              fill="none"
            >
              <path
                d="M30 145L180 58L230 94L312 18L372 83L420 45L480 145H30Z"
                fill="white"
                fillOpacity=".7"
              />

              <path
                d="M175 145L312 18L365 87L414 52L480 145H175Z"
                fill="#dbeafe"
                fillOpacity=".8"
              />
            </svg>
          </div>

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-100">
                Let&apos;s Build What&apos;s Next
              </div>

              <h2 className="mt-2 text-[30px] font-black">
                Ready to take the next step?
              </h2>

              <p className="mt-2 max-w-[630px] text-[12px] text-blue-50">
                Get in touch today and discover how SUFURIVRO can help your
                team work smarter, move faster, and achieve more.
              </p>
            </div>

            <div className="relative">
              <a
                href="#contact-form"
                className="inline-flex min-w-[185px] items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-[14px] font-bold text-white shadow-lg shadow-blue-950/20 hover:bg-orange-600"
              >
                Contact Our Team
                <ArrowRight size={16} />
              </a>

              <div className="mt-2 text-center text-[9px] text-blue-100">
                No pressure. Just possibilities.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer active="contact" />
    </main>
  );
}