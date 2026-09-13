import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  Clock3,
  Gauge,
  PieChart,
  ShieldCheck,
  Target,
  UserRound,
  UsersRound,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ITSM Analytics, SLA & Service Performance",
  description:
    "Turn ITSM data into actionable insights with Power BI. Analyze SLA performance, MTTR, incidents, service requests, backlog and IT service performance with SUFURIVRO.",
  alternates: {
    canonical: "https://sufurivro.com/itsm-analytics",
  },
  openGraph: {
    title: "ITSM Analytics, SLA & Service Performance | SUFURIVRO",
    description:
      "Transform ITSM data into Power BI dashboards for SLA analytics, MTTR, incidents, service performance and executive reporting.",
    url: "https://sufurivro.com/itsm-analytics",
    siteName: "SUFURIVRO",
    type: "website",
  },
};

const KpiCard = ({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) => {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-[0_5px_18px_rgba(15,55,105,0.06)]">
      <div className="text-[12px] font-medium text-slate-500">{label}</div>

      <div className="mt-2 text-[28px] font-black leading-none text-[#0a2866]">
        {value}
      </div>

      <div className="mt-2 text-[12px] font-bold text-emerald-600">
        {change}
      </div>
    </div>
  );
};

const FeatureIcon = ({
  children,
  orange = false,
}: {
  children: React.ReactNode;
  orange?: boolean;
}) => {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full ${
        orange
          ? "bg-orange-100 text-orange-600"
          : "bg-blue-100 text-blue-600"
      }`}
    >
      {children}
    </div>
  );
};

export default function ITSMAnalyticsPage() {
  const monthlyBars = [
    36, 70, 82, 105, 118, 92, 102, 151, 137, 165, 148, 203,
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header active="itsm" />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f4f9ff] to-[#dcecff]">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute -right-[150px] -top-[170px] h-[620px] w-[620px] rounded-full bg-blue-300/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] gap-14 px-6 py-16 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-10 lg:py-20">
          {/* LEFT */}

          <div className="max-w-[650px]">
            <div className="text-[12px] font-black uppercase tracking-[0.28em] text-blue-600">
              From ITSM Data to Business Impact
            </div>

            <h1 className="mt-5 font-black leading-[1.02] tracking-[-0.05em] text-[#112967]">
              <span className="block whitespace-nowrap text-[51px] lg:text-[58px]">
                ITSM Analytics
              </span>

              <span className="mt-1 block whitespace-nowrap text-[43px] text-[#2563ff] lg:text-[41px]">
                for a Smarter IT Organization
              </span>
            </h1>

            <p className="mt-6 max-w-[625px] text-[18px] leading-[1.58] text-[#526a91]">
              SUFURIVRO transforms ITSM data into actionable insights with
              ready-to-use analytics and Microsoft Power BI dashboards.
              Monitor SLA performance, MTTR, incidents, service requests and
              backlog while identifying trends and improving IT service
              delivery.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex h-[54px] min-w-[185px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(249,115,22,0.24)] transition hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowRight size={17} />
              </a>

              <a
                href="/dashboards"
                className="inline-flex h-[54px] min-w-[210px] items-center justify-center rounded-xl border border-blue-200 bg-white px-7 text-[15px] font-bold text-blue-700 shadow-[0_8px_18px_rgba(37,99,235,0.06)] transition hover:-translate-y-0.5"
              >
                See Sample Dashboards
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium text-[#395880]">
              <div className="flex items-center gap-2">
                <Clock3 size={22} className="text-blue-600" />
                Faster Insights
              </div>

              <div className="flex items-center gap-2">
                <BarChart3 size={22} className="text-blue-600" />
                Data-Driven Decisions
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={22} className="text-blue-600" />
                Greater IT Efficiency
              </div>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}

          <div className="rounded-[24px] border border-blue-100 bg-white/90 p-4 shadow-[0_28px_70px_rgba(36,85,145,0.15)] backdrop-blur">
            <div className="grid grid-cols-3 gap-3">
              <KpiCard
                label="Incidents"
                value="1,248"
                change="↓ 18%"
              />

              <KpiCard
                label="Request Fulfillment"
                value="2,917"
                change="↑ 25%"
              />

              <KpiCard
                label="Avg. Resolution Time"
                value="6.2 h"
                change="↓ 40%"
              />
            </div>

            <div className="mt-3 grid gap-3 lg:grid-cols-[1.7fr_0.75fr]">
              {/* INCIDENT TREND */}

              <div className="rounded-2xl border border-blue-100 bg-white p-4">
                <div className="text-[13px] font-black text-[#112967]">
                  Incident Trend
                </div>

                <div className="relative mt-4 h-[230px]">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="border-t border-slate-100"
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-end gap-[9px] px-4 pb-6">
                    {monthlyBars.map((height, index) => (
                      <div
                        key={index}
                        className="relative flex h-full flex-1 items-end"
                      >
                        <div
                          className="w-full rounded-t bg-gradient-to-t from-blue-500 to-blue-300"
                          style={{ height }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-4 right-4 flex justify-between text-[9px] text-slate-400">
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CATEGORIES */}

              <div className="rounded-2xl border border-blue-100 bg-white p-4">
                <div className="text-[13px] font-black text-[#112967]">
                  Categories
                </div>

                <div className="mt-5 flex justify-center">
                  <div className="relative h-[145px] w-[145px] rounded-full bg-[conic-gradient(#0f3c92_0_28%,#1565d8_28%_52%,#2f8cff_52%_70%,#7bb8ff_70%_86%,#d8e9ff_86%_100%)]">
                    <div className="absolute inset-[26px] rounded-full bg-white" />
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-[10px] text-[#526a91]">
                  <div className="flex justify-between">
                    <span className="text-blue-900">● Software</span>
                    <span>28%</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-blue-700">● Hardware</span>
                    <span>24%</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-blue-500">● Access</span>
                    <span>18%</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-blue-300">● Network</span>
                    <span>16%</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-blue-200">● Other</span>
                    <span>14%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}

      <section id="use-cases" className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              Turn Data Into Action
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              Key ITSM Analytics Use Cases
            </h2>

            <p className="mt-2 text-[16px] text-[#667c99]">
              Ready-to-use ITSM reporting and analytics to optimize service
              delivery, monitor performance and demonstrate business value.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <BarChart3 size={25} />,
                title: "Service Performance",
                text: "Track SLA compliance, MTTR, resolution times and service levels across your IT services.",
              },
              {
                icon: <UsersRound size={25} />,
                title: "User Experience",
                text: "Analyze service request patterns, demand and user satisfaction to improve IT service delivery.",
              },
              {
                icon: <Gauge size={25} />,
                title: "Operational Efficiency",
                text: "Identify bottlenecks, reduce ticket backlog, monitor workloads and optimize resource allocation.",
              },
              {
                icon: <PieChart size={25} />,
                title: "Executive Reporting",
                text: "Deliver clear ITSM KPI dashboards and Power BI insights for IT leaders and business stakeholders.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="min-h-[200px] rounded-[18px] border border-blue-100 bg-white p-7 shadow-[0_6px_22px_rgba(17,41,101,0.04)]"
              >
                <FeatureIcon>{item.icon}</FeatureIcon>

                <h3 className="mt-5 text-[18px] font-black text-[#102965]">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[265px] text-[14px] leading-6 text-[#526a91]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ITSM TOOLS
      ====================================================== */}

      <section className="border-y border-blue-100 bg-gradient-to-r from-[#f5faff] via-white to-[#f5faff] py-9">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[26px] font-black text-[#102965]">
              ITSM Analytics for Your Existing Service Management Tools
            </h2>

            <p className="mt-1 text-[14px] text-[#667c99]">
              Connect your ITSM platforms, centralize service data and analyze
              it with Microsoft Power BI.
            </p>
          </div>

          <div className="mt-7 grid items-center gap-8 md:grid-cols-4">
            <a
              href="/servicenow-power-bi"
              className="flex items-center justify-center md:border-r md:border-slate-200"
            >
              <img
                src="/logos/servicenow.png"
                alt="ServiceNow ITSM analytics"
                className="max-h-[42px] max-w-[180px] object-contain"
              />
            </a>

            <div className="flex items-center justify-center md:border-r md:border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/jira.svg"
                  alt="Jira Service Management"
                  className="h-[37px] w-[37px] object-contain"
                />

                <span className="text-[20px] font-medium text-[#244a80]">
                  Jira Service Management
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center md:border-r md:border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/freshservice.png"
                  alt="Freshservice ITSM"
                  className="h-[38px] w-[38px] object-contain"
                />

                <span className="text-[22px] font-medium text-[#244a80]">
                  Freshservice
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/bmc.svg"
                  alt="BMC Helix ITSM"
                  className="h-[42px] w-[42px] object-contain"
                />

                <span className="text-[24px] font-black text-slate-700">
                  bmc helix
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[32px] font-black text-[#102965]">
              Why Choose SUFURIVRO for ITSM Analytics?
            </h2>

            <p className="mt-2 text-[14px] text-[#667c99]">
              A complete ITSM reporting and analytics solution built for
              service management teams.
            </p>
          </div>

          <div className="mt-9 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <Zap size={26} />,
                title: "Fast Implementation",
                text: "Get up and running quickly with pre-built ITSM analytics and reporting content.",
              },
              {
                icon: <Target size={26} />,
                title: "Tailored for ITSM",
                text: "Built specifically for IT service management data, KPIs and operational processes.",
              },
              {
                icon: <UserRound size={26} />,
                title: "Self-Service Analytics",
                text: "Empower IT and business teams with governed, easy-to-use Power BI reports.",
              },
              {
                icon: <ShieldCheck size={26} />,
                title: "Scalable and Secure",
                text: "Create a secure analytics foundation designed to scale with your IT organization.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <FeatureIcon orange>{item.icon}</FeatureIcon>

                <div>
                  <h3 className="text-[16px] font-black text-[#102965]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-[#607690]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 pb-10 lg:px-10">
        <div className="relative mx-auto flex max-w-[1450px] flex-col justify-between gap-7 overflow-hidden rounded-[24px] border border-blue-100 bg-gradient-to-r from-[#eef7ff] via-[#f7fbff] to-[#e7f3ff] px-10 py-8 md:flex-row md:items-center">
          <div className="absolute bottom-0 left-8 flex items-end gap-4 opacity-30">
            {[55, 95, 120, 70].map((h, i) => (
              <div
                key={i}
                className="w-9 rounded-t-lg bg-blue-300"
                style={{ height: h }}
              />
            ))}
          </div>

          <div className="relative md:ml-[300px]">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              Ready to Unlock the Value of Your ITSM Data?
            </div>

            <h2 className="mt-2 text-[27px] font-black text-[#102965]">
              Start Your ITSM Analytics Journey Today
            </h2>

            <p className="mt-1 text-[13px] text-[#607690]">
              Turn ITSM data into trusted SLA, MTTR, service performance and
              executive insights with Microsoft Power BI.
            </p>
          </div>

          <a
            href="/contact"
            className="relative inline-flex shrink-0 items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Book a Demo →
          </a>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer active="itsm" />
    </main>
  );
}