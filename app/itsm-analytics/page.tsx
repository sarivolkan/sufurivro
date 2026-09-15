import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  Clock3,
  Database,
  Gauge,
  Layers3,
  Network,
  PieChart,
  ShieldCheck,
  Target,
  UserRound,
  UsersRound,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ITSM Analytics, SLA, MTTR & Service Performance",
  description:
    "Build governed ITSM analytics across ServiceNow, Jira Service Management, Freshservice and BMC Helix. Standardize SLA, MTTR, backlog and service KPIs with Microsoft Fabric and Power BI.",
  alternates: {
    canonical: "https://sufurivro.com/itsm-analytics",
  },
  openGraph: {
    title: "ITSM Analytics, SLA, MTTR & Service Performance | SUFURIVRO",
    description:
      "Create one governed ITSM analytics layer across multiple service-management platforms using Microsoft Fabric and Power BI.",
    url: "https://sufurivro.com/itsm-analytics",
    siteName: "SUFURIVRO",
    type: "website",
  },
  keywords: [
    "ITSM Analytics",
    "ITSM Reporting",
    "ITSM KPI Dashboard",
    "SLA Analytics",
    "MTTR Analytics",
    "IT Service Analytics",
    "Multi-Platform ITSM Analytics",
    "Power BI ITSM",
    "Microsoft Fabric ITSM",
    "ITSM Semantic Model",
    "Service Management Analytics",
  ],
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
      <div className="text-[12px] font-medium text-slate-500">
        {label}
      </div>

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

          <div className="max-w-[670px]">
            <div className="text-[12px] font-black uppercase tracking-[0.28em] text-blue-600">
              Governed ITSM Analytics
            </div>

            <div className="mt-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[12px] font-bold text-orange-600">
              One Analytics Layer Across Your ITSM Ecosystem
            </div>

            <h1 className="mt-5 font-black leading-[1.02] tracking-[-0.05em] text-[#112967]">
              <span className="block text-[51px] lg:text-[58px]">
                ITSM Analytics
              </span>

              <span className="mt-1 block text-[42px] text-[#2563ff] lg:text-[47px]">
                Built on Consistent Data & KPIs
              </span>
            </h1>

            <p className="mt-6 max-w-[640px] text-[18px] leading-[1.58] text-[#526a91]">
              SUFURIVRO creates a governed analytics layer across your
              service-management platforms. Standardize ITSM data, define SLA,
              MTTR, backlog and service KPIs once, and deliver trusted Power BI
              analytics through Microsoft Fabric.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/book-a-demo"
                className="inline-flex min-w-[215px] items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-[14px] font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Book a Demo
                <ArrowRight size={16} />
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
                <Layers3 size={22} className="text-blue-600" />
                Unified ITSM Model
              </div>

              <div className="flex items-center gap-2">
                <Target size={22} className="text-blue-600" />
                Governed KPI Logic
              </div>

              <div className="flex items-center gap-2">
                <BarChart3 size={22} className="text-blue-600" />
                Power BI Analytics
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
                label="SLA Compliance"
                value="92.5%"
                change="↑ 2.3%"
              />

              <KpiCard
                label="Avg. MTTR"
                value="4.6 h"
                change="↓ 18%"
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
          VALUE PROPOSITION
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="mx-auto max-w-[920px] text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              One Source of ITSM Truth
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              One ITSM Analytics Model.
              <span className="block text-blue-600">
                Multiple Service Platforms.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[820px] text-[15px] leading-7 text-[#667c99]">
              Different ITSM platforms often structure incidents, requests,
              SLAs and service data differently. SUFURIVRO standardizes these
              structures so your organization can analyze service performance
              using consistent business definitions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <Database size={25} />,
                title: "Standardized Data",
                text: "Normalize source-specific ITSM structures into consistent analytics entities.",
              },
              {
                icon: <Target size={25} />,
                title: "Common KPI Definitions",
                text: "Use the same SLA, MTTR, backlog and service-performance logic across reports.",
              },
              {
                icon: <Layers3 size={25} />,
                title: "Reusable Semantic Model",
                text: "Build reporting on top of a trusted and governed Power BI semantic layer.",
              },
              {
                icon: <Network size={25} />,
                title: "Cross-Platform Analytics",
                text: "Compare service performance across multiple ITSM platforms using one analytical framework.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="min-h-[210px] rounded-[18px] border border-blue-100 bg-white p-7 shadow-[0_6px_22px_rgba(17,41,101,0.04)]"
              >
                <FeatureIcon>{item.icon}</FeatureIcon>

                <h3 className="mt-5 text-[18px] font-black text-[#102965]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-[#526a91]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}

      <section
        id="use-cases"
        className="border-y border-blue-100 bg-[#f7fbff] py-20"
      >
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              Turn Data Into Action
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              Key ITSM Analytics Use Cases
            </h2>

            <p className="mx-auto mt-2 max-w-[760px] text-[16px] leading-7 text-[#667c99]">
              Use governed ITSM data and consistent KPIs to monitor service
              quality, operational performance and business outcomes.
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
                title: "Demand & User Experience",
                text: "Analyze request demand, service patterns and satisfaction indicators to improve service delivery.",
              },
              {
                icon: <Gauge size={25} />,
                title: "Operational Efficiency",
                text: "Identify bottlenecks, ticket aging, backlog, workload distribution and operational improvement opportunities.",
              },
              {
                icon: <PieChart size={25} />,
                title: "Executive Reporting",
                text: "Deliver trusted ITSM KPI dashboards for IT leaders and business stakeholders using common definitions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="min-h-[210px] rounded-[18px] border border-blue-100 bg-white p-7 shadow-[0_6px_22px_rgba(17,41,101,0.04)]"
              >
                <FeatureIcon>{item.icon}</FeatureIcon>

                <h3 className="mt-5 text-[18px] font-black text-[#102965]">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[275px] text-[14px] leading-6 text-[#526a91]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          KPI FRAMEWORK
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto grid max-w-[1350px] gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-10">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              Governed KPI Framework
            </div>

            <h2 className="mt-3 text-[36px] font-black leading-tight tracking-[-0.035em] text-[#102965]">
              Define ITSM Metrics Once
              <span className="block text-blue-600">
                and Reuse Them Everywhere
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#607690]">
              When each dashboard recreates its own SLA, MTTR or backlog
              calculation, reporting quickly becomes inconsistent. SUFURIVRO
              centralizes core business logic in a governed analytics layer so
              teams can work from the same definitions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "SLA Compliance",
                text: "Standardize compliance, breach and service-level calculations across reporting.",
              },
              {
                title: "MTTR",
                text: "Apply consistent mean-time-to-resolution logic across teams, services and sources.",
              },
              {
                title: "Backlog & Aging",
                text: "Measure open workload and ticket aging using common business rules.",
              },
              {
                title: "Service Performance",
                text: "Create reusable operational and executive service-management measures.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-blue-100 bg-[#fbfdff] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Target size={20} />
                </div>

                <h3 className="mt-4 text-[16px] font-black text-[#102965]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-[#607690]">
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

      <section className="border-y border-blue-100 bg-gradient-to-r from-[#f5faff] via-white to-[#f5faff] py-12">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              Multi-Platform ITSM Analytics
            </div>

            <h2 className="mt-2 text-[27px] font-black text-[#102965]">
              One Analytics Layer Across Your Service Management Tools
            </h2>

            <p className="mx-auto mt-2 max-w-[740px] text-[14px] leading-6 text-[#667c99]">
              Bring service data from different ITSM environments into a common
              analytical structure while keeping your reporting and KPI logic
              consistent.
            </p>
          </div>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-4">
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
                  alt="Jira Service Management analytics"
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
                  alt="Freshservice analytics"
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
                  alt="BMC Helix analytics"
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
          PLATFORM FLOW
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-[1350px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              From Source Systems to Trusted Insight
            </div>

            <h2 className="mt-3 text-[35px] font-black text-[#102965]">
              A Reusable ITSM Analytics Architecture
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              {
                no: "01",
                icon: <Network size={22} />,
                title: "Connect",
                text: "Bring ITSM data from your service-management platforms into Microsoft Fabric.",
              },
              {
                no: "02",
                icon: <Database size={22} />,
                title: "Standardize",
                text: "Normalize source-specific records into common ITSM entities and relationships.",
              },
              {
                no: "03",
                icon: <Layers3 size={22} />,
                title: "Govern",
                text: "Apply reusable KPI logic, measures and semantic-model definitions.",
              },
              {
                no: "04",
                icon: <BarChart3 size={22} />,
                title: "Analyze",
                text: "Deliver dashboards, drill-through analysis and self-service reporting in Power BI.",
              },
            ].map((item) => (
              <div
                key={item.no}
                className="rounded-[20px] border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <FeatureIcon>{item.icon}</FeatureIcon>

                  <div className="text-[11px] font-black text-orange-500">
                    {item.no}
                  </div>
                </div>

                <h3 className="mt-5 text-[17px] font-black text-[#102965]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#607690]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f8fbff] py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[32px] font-black text-[#102965]">
              Why Choose SUFURIVRO for ITSM Analytics?
            </h2>

            <p className="mx-auto mt-2 max-w-[700px] text-[14px] leading-6 text-[#667c99]">
              Build service-management analytics on a reusable data,
              governance and semantic-model foundation instead of rebuilding
              reporting logic for every dashboard.
            </p>
          </div>

          <div className="mt-9 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <Zap size={26} />,
                title: "Analytics Accelerators",
                text: "Start with reusable ITSM data models, KPI definitions and dashboard patterns.",
              },
              {
                icon: <Target size={26} />,
                title: "Designed for ITSM",
                text: "Built around incidents, requests, changes, problems, SLAs and service-management processes.",
              },
              {
                icon: <UserRound size={26} />,
                title: "Self-Service Ready",
                text: "Give IT and business teams governed Power BI models they can confidently explore.",
              },
              {
                icon: <ShieldCheck size={26} />,
                title: "Governed & Scalable",
                text: "Use Microsoft Fabric and Power BI as the enterprise foundation for consistent ITSM intelligence.",
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

      <section className="px-6 py-10 lg:px-10">
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
              Build a Trusted ITSM Analytics Foundation
            </div>

            <h2 className="mt-2 text-[27px] font-black text-[#102965]">
              Standardize Your ITSM Data. Govern Your KPIs. Scale Your Analytics.
            </h2>

            <p className="mt-1 max-w-[760px] text-[13px] leading-6 text-[#607690]">
              See how SUFURIVRO combines Microsoft Fabric, governed ITSM models
              and Power BI to create one reusable analytics layer across your
              service-management ecosystem.
            </p>
          </div>

          <a
            href="/book-a-demo"
            className="inline-flex min-w-[215px] items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-[14px] font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Book a Demo
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer active="itsm" />
    </main>
  );
}