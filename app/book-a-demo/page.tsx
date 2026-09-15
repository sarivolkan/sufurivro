import type { Metadata } from "next";
import DemoForm from "./DemoForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Database,
  Mail,
  MapPin,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book an ITSM Analytics Demo",
  description:
    "Book a SUFURIVRO demo to see how ITSM data from ServiceNow and other platforms can be integrated with Microsoft Fabric and Power BI for analytics, dashboards and self-service reporting.",
  alternates: {
    canonical: "https://sufurivro.com/book-a-demo",
  },
  openGraph: {
    title: "Book an ITSM Analytics Demo | SUFURIVRO",
    description:
      "See how SUFURIVRO connects ITSM platforms to Microsoft Fabric and Power BI for governed analytics, dashboards and self-service reporting.",
    url: "https://sufurivro.com/book-a-demo",
    siteName: "SUFURIVRO",
    type: "website",
  },
};

const ExpectationItem = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>

      <div>
        <h3 className="text-[15px] font-black text-[#102965]">
          {title}
        </h3>

        <p className="mt-1 text-[13px] leading-6 text-[#607690]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default function BookADemoPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f6fbff] to-[#e3f1ff]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.04) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute -right-[180px] -top-[160px] h-[600px] w-[600px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1450px] px-6 py-14 text-center lg:px-10 lg:py-18">
          <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
            ITSM Analytics Demo
          </div>

          <h1 className="mx-auto mt-4 max-w-[900px] text-[45px] font-black leading-[1.05] tracking-[-0.045em] text-[#102965] lg:text-[58px]">
            See SUFURIVRO
            <span className="block text-blue-600">
              in Action
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[780px] text-[17px] leading-7 text-[#526a91]">
            Book a personalized ITSM analytics demo and see how ServiceNow,
            Jira Service Management, Freshservice, BMC Helix and other service
            platforms can be connected to Microsoft Fabric and Power BI for
            dashboards, governed analytics and self-service reporting.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] font-semibold text-[#395880]">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-blue-600" />
              30-minute discovery session
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-blue-600" />
              Tailored to your ITSM environment
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-blue-600" />
              No obligation
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM + EXPECTATIONS
      ====================================================== */}

      <section className="py-18">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
          {/* FORM */}

        <DemoForm />

          {/* RIGHT */}

          <div>
            <div className="rounded-[26px] border border-blue-100 bg-gradient-to-br from-[#f8fbff] to-[#edf6ff] p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
                What to Expect
              </div>

              <h2 className="mt-3 text-[30px] font-black leading-tight text-[#102965]">
                A Demo Built Around
                <span className="block text-blue-600">
                  Your ITSM Needs
                </span>
              </h2>

              <p className="mt-4 text-[13px] leading-6 text-[#607690]">
                We&apos;ll focus on the areas that matter most to your
                organization rather than giving you a generic product tour.
              </p>

              <div className="mt-8 space-y-6">
                <ExpectationItem
                  icon={<Clock3 size={20} />}
                  title="30-Minute Discovery"
                  text="We start by understanding your current ITSM reporting, integration and analytics challenges."
                />

                <ExpectationItem
                  icon={<Database size={20} />}
                  title="Your ITSM Architecture"
                  text="Review how your ServiceNow or other ITSM platform can connect securely to the SUFURIVRO data architecture."
                />

                <ExpectationItem
                  icon={<BarChart3 size={20} />}
                  title="Power BI Dashboard Examples"
                  text="See examples of incident, SLA, MTTR, service request and executive ITSM dashboards."
                />

                <ExpectationItem
                  icon={<UsersRound size={20} />}
                  title="Self-Service Reporting"
                  text="Learn how business and IT users can build their own reports from governed semantic models."
                />

                <ExpectationItem
                  icon={<ShieldCheck size={20} />}
                  title="Integration & Security"
                  text="Discuss secure API-based data ingestion, Microsoft Fabric and governance requirements."
                />
              </div>
            </div>

            {/* CONTACT CARD */}

            <div className="mt-6 rounded-[24px] border border-blue-100 bg-white p-7 shadow-[0_8px_26px_rgba(20,60,120,.04)]">
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
                Prefer to Contact Us?
              </div>

              <h2 className="mt-3 text-[23px] font-black text-[#102965]">
                Datamart Information Technologies
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-1 shrink-0 text-blue-600"
                  />

                  <div className="text-[12px] leading-6 text-[#607690]">
                    Deniz Street, Muallimköy Technology Development Zone
                    <br />
                    Phase 1 Site, 1.1.C1 Block, No: 143/B, Unit Z101
                    <br />
                    Gebze, Kocaeli, Türkiye
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={19} className="text-blue-600" />

                  <a
                    href="/contact"
                    className="text-[12px] font-bold text-blue-600 hover:text-blue-700"
                  >
                    Contact SUFURIVRO
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays size={19} className="text-blue-600" />

                  <div className="text-[12px] text-[#607690]">
                    Demo meetings by appointment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY BOOK
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f8fbff] py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              See the Complete Platform
            </div>

            <h2 className="mt-3 text-[32px] font-black text-[#102965]">
              From ITSM APIs to Power BI Insights
            </h2>

            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-6 text-[#607690]">
              Discover how SUFURIVRO brings together secure ITSM integration,
              Microsoft Fabric, governed semantic models, Power BI dashboards
              and self-service analytics.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Connect",
                text: "Securely ingest ITSM data through vendor APIs.",
              },
              {
                title: "Unify",
                text: "Centralize and model service data in Microsoft Fabric.",
              },
              {
                title: "Analyze",
                text: "Deliver Power BI dashboards and self-service reporting.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-blue-100 bg-white p-6 text-center"
              >
                <div className="text-[18px] font-black text-[#102965]">
                  {item.title}
                </div>

                <p className="mt-2 text-[13px] leading-6 text-[#607690]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}