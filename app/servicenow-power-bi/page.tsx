import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  Check,
  Clock3,
  Database,
  Gauge,
  Layers3,
  LineChart,
  ShieldCheck,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ServiceNow Power BI Analytics with Microsoft Fabric",
  description:
    "Transform ServiceNow data into governed Power BI analytics with Microsoft Fabric. Standardize ITSM data, SLA and MTTR KPIs, semantic models, dashboards and self-service reporting with SUFURIVRO.",
  alternates: {
    canonical: "https://sufurivro.com/servicenow-power-bi",
  },
  openGraph: {
    title: "ServiceNow Power BI Analytics with Microsoft Fabric | SUFURIVRO",
    description:
      "Build a governed ServiceNow analytics layer with Microsoft Fabric and Power BI for SLA, MTTR, incident, backlog and service-performance reporting.",
    url: "https://sufurivro.com/servicenow-power-bi",
    siteName: "SUFURIVRO",
    type: "website",
  },
  keywords: [
    "ServiceNow Power BI",
    "ServiceNow Analytics",
    "ServiceNow Power BI Integration",
    "ServiceNow Microsoft Fabric",
    "ServiceNow Reporting",
    "ServiceNow ITSM Analytics",
    "ServiceNow SLA Dashboard",
    "ServiceNow MTTR Dashboard",
    "ServiceNow Semantic Model",
    "Power BI ServiceNow Dashboard",
    "Microsoft Fabric ITSM Analytics",
  ],
};

const BenefitCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="rounded-[18px] border border-blue-100 bg-white p-6 shadow-[0_8px_26px_rgba(20,60,120,.045)]">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
      {icon}
    </div>

    <h3 className="mt-5 text-[17px] font-black text-[#102965]">
      {title}
    </h3>

    <p className="mt-2 text-[13px] leading-6 text-[#607690]">
      {text}
    </p>
  </div>
);

const MetricCard = ({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) => (
  <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
    <div className="text-[10px] font-semibold text-slate-400">
      {label}
    </div>

    <div className="mt-2 flex items-end justify-between">
      <div className="text-[23px] font-black text-[#102965]">
        {value}
      </div>

      <div className="text-[9px] font-bold text-emerald-600">
        {change}
      </div>
    </div>

    <div className="mt-3 flex h-7 items-end gap-1">
      {[8, 13, 10, 18, 14, 21, 17, 24].map((height, index) => (
        <div
          key={index}
          className="flex-1 rounded-t bg-blue-200"
          style={{ height }}
        />
      ))}
    </div>
  </div>
);

export default function ServiceNowPowerBIPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header active="servicenow" />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f7fbff] to-[#e6f2ff]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20,110,245,.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20,110,245,.06) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative mx-auto grid max-w-[1450px] gap-14 px-6 py-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10 lg:py-20">
          {/* LEFT */}

          <div className="max-w-[660px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              ServiceNow Power BI Analytics
            </div>

            <div className="mt-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[12px] font-bold text-orange-600">
              Built on Microsoft Fabric + Power BI
            </div>

            <h1 className="mt-5 text-[48px] font-black leading-[1.04] tracking-[-0.045em] text-[#102965] lg:text-[59px]">
              Turn ServiceNow Data into
              <span className="block text-blue-600">
                Governed Power BI Intelligence
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-[17px] leading-[1.65] text-[#526a91]">
              Bring ServiceNow data into Microsoft Fabric and transform raw ITSM
              records into standardized entities, governed KPI definitions,
              reusable semantic models and interactive Power BI analytics.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/book-a-demo"
                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 text-[14px] font-bold text-white shadow-[0_12px_28px_rgba(249,115,22,.25)] hover:bg-orange-600"
              >
                Book a Demo
                <ArrowRight size={16} />
              </a>

              <a
                href="/dashboards"
                className="inline-flex h-[54px] items-center justify-center rounded-xl border border-blue-300 bg-white px-7 text-[14px] font-bold text-blue-700"
              >
                See Sample Dashboards
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 text-[12px] font-semibold text-[#526a91]">
              <div className="flex items-center gap-2">
                <Check
                  size={16}
                  className="text-orange-500"
                  strokeWidth={3}
                />
                Standardized ServiceNow data model
              </div>

              <div className="flex items-center gap-2">
                <Check
                  size={16}
                  className="text-orange-500"
                  strokeWidth={3}
                />
                Governed SLA & MTTR metrics
              </div>

              <div className="flex items-center gap-2">
                <Check
                  size={16}
                  className="text-orange-500"
                  strokeWidth={3}
                />
                Microsoft Fabric + Power BI
              </div>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}

          <div className="relative">
            <div className="absolute -right-16 -top-20 h-[300px] w-[300px] rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative rounded-[22px] border border-blue-100 bg-white p-5 shadow-[0_25px_70px_rgba(20,70,140,.15)]">
              <div className="flex flex-wrap items-start justify-between gap-5 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-[11px] font-black text-[#102965]">
                    ServiceNow
                  </div>

                  <div className="mt-1 text-[17px] font-black text-[#102965]">
                    IT Service Management Dashboard
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-[8px]">
                  {["Last 12 months", "All Services", "All Priorities"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                  label="Incidents"
                  value="1,248"
                  change="↓ 18%"
                />

                <MetricCard
                  label="SLA Compliance"
                  value="92.4%"
                  change="↑ 6%"
                />

                <MetricCard
                  label="Avg. Resolution"
                  value="6.2 h"
                  change="↓ 40%"
                />

                <MetricCard
                  label="Open Tickets"
                  value="342"
                  change="↓ 28%"
                />
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-[1.5fr_.8fr]">
                <div className="rounded-xl border border-blue-100 p-4">
                  <div className="text-[11px] font-bold text-[#102965]">
                    Incident Trend
                  </div>

                  <div className="mt-5 flex h-[155px] items-end gap-2">
                    {[
                      55, 92, 76, 115, 87, 128,
                      104, 139, 96, 120, 83, 110,
                    ].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t bg-blue-400"
                        style={{ height }}
                      />
                    ))}
                  </div>

                  <div className="mt-2 flex justify-between text-[7px] text-slate-400">
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
                    ].map((month) => (
                      <span key={month}>
                        {month}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-blue-100 p-4">
                  <div className="text-[11px] font-bold text-[#102965]">
                    Top Categories
                  </div>

                  <div className="mt-5 flex items-center justify-center">
                    <div className="relative h-[105px] w-[105px] rounded-full border-[18px] border-blue-500">
                      <div className="absolute inset-[7px] rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-[8px] text-[#607690]">
                    {[
                      ["Software", "28%"],
                      ["Hardware", "24%"],
                      ["Access", "18%"],
                      ["Network", "16%"],
                      ["Other", "14%"],
                    ].map(([name, value]) => (
                      <div
                        key={name}
                        className="flex justify-between border-b border-slate-50 pb-1"
                      >
                        <span>{name}</span>
                        <span className="font-bold">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              ServiceNow Analytics
            </div>

            <h2 className="mt-3 text-[34px] font-black text-[#102965]">
              Go Beyond Native ServiceNow Reporting
            </h2>

            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-6 text-[#607690]">
              Use Microsoft Fabric and Power BI to create a reusable ServiceNow
              analytics foundation with consistent business definitions,
              governed metrics and enterprise-grade reporting.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <BenefitCard
              icon={<BarChart3 size={23} />}
              title="Complete ITSM Visibility"
              text="Analyze incidents, requests, changes, problems, SLAs and service performance through one governed reporting layer."
            />

            <BenefitCard
              icon={<Clock3 size={23} />}
              title="Consistent KPI Logic"
              text="Define SLA, MTTR, resolution time, backlog and service-performance measures once and reuse them everywhere."
            />

            <BenefitCard
              icon={<Gauge size={23} />}
              title="Operational Analytics"
              text="Track service trends, bottlenecks, aging tickets and performance by service, priority, assignment group and team."
            />

            <BenefitCard
              icon={<ShieldCheck size={23} />}
              title="Governed & Scalable"
              text="Use Microsoft Fabric as a scalable analytics foundation and Power BI for secure enterprise reporting."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ANALYTICS LAYER
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f7fbff] py-16">
        <div className="mx-auto grid max-w-[1450px] gap-12 px-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:px-10">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
              Governed ServiceNow Analytics
            </div>

            <h2 className="mt-3 text-[35px] font-black leading-tight text-[#102965]">
              From Raw ServiceNow Data
              <span className="block text-blue-600">
                to Trusted Business Metrics
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#607690]">
              Connecting to ServiceNow is only the beginning. SUFURIVRO adds
              the analytics structure required to transform operational ITSM
              records into consistent, reusable and business-ready
              intelligence.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-[#607690]">
              ServiceNow data can be brought into Microsoft Fabric using the
              integration approach appropriate for your architecture. Once
              available in Fabric, SUFURIVRO standardizes the data model,
              implements ITSM KPI logic and prepares governed semantic models
              for Microsoft Power BI.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Standardized ServiceNow entities and relationships",
                "Reusable SLA and MTTR KPI definitions",
                "Centralized ServiceNow data in Microsoft Fabric",
                "Governed semantic models for Power BI",
                "Reusable analytics across multiple dashboards",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[13px] font-semibold text-[#365477]"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Check size={14} strokeWidth={3} />
                  </div>

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] border border-blue-100 bg-white p-7 shadow-[0_12px_35px_rgba(20,60,120,.06)]">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600">
              ServiceNow Analytics Flow
            </div>

            <div className="mt-7 space-y-3">
              {[
                {
                  step: "01",
                  title: "ServiceNow",
                  text: "Bring the ITSM data required for analytics into your Microsoft data platform.",
                  icon: <Database size={21} />,
                },
                {
                  step: "02",
                  title: "Microsoft Fabric",
                  text: "Centralize, transform, store and govern ServiceNow data.",
                  icon: <Layers3 size={21} />,
                },
                {
                  step: "03",
                  title: "SUFURIVRO Analytics Model",
                  text: "Standardize entities, relationships, measures and ITSM KPI definitions.",
                  icon: <Target size={21} />,
                },
                {
                  step: "04",
                  title: "Microsoft Power BI",
                  text: "Deliver trusted dashboards, analysis and self-service reporting.",
                  icon: <BarChart3 size={21} />,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-xl border border-blue-50 bg-[#fbfdff] p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    {item.icon}
                  </div>

                  <div>
                    <div className="text-[9px] font-black text-orange-500">
                      {item.step}
                    </div>

                    <div className="text-[14px] font-black text-[#102965]">
                      {item.title}
                    </div>

                    <p className="mt-1 text-[11px] leading-5 text-[#607690]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT SUFURIVRO ADDS
      ====================================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="mx-auto max-w-[880px] text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              The SUFURIVRO Analytics Layer
            </div>

            <h2 className="mt-3 text-[34px] font-black text-[#102965]">
              Microsoft Fabric Moves and Stores Data. SUFURIVRO Makes It
              ITSM-Ready.
            </h2>

            <p className="mt-4 text-[14px] leading-7 text-[#607690]">
              SUFURIVRO complements your Microsoft data platform by providing
              the ITSM-specific modeling and analytics logic required after
              ServiceNow data reaches Fabric.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <BenefitCard
              icon={<Database size={23} />}
              title="Canonical ITSM Model"
              text="Transform ServiceNow structures into a reusable analytics model designed around incidents, requests, problems, changes and SLAs."
            />

            <BenefitCard
              icon={<LineChart size={23} />}
              title="Reusable KPI Framework"
              text="Create governed measures once and reuse them across operational, management and executive Power BI reports."
            />

            <BenefitCard
              icon={<Zap size={23} />}
              title="Analytics Accelerators"
              text="Reduce repeated BI development by starting with reusable ITSM models, KPI patterns and dashboard structures."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f8fbff] py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              ServiceNow Reporting Use Cases
            </div>

            <h2 className="mt-3 text-[34px] font-black text-[#102965]">
              ServiceNow Power BI Dashboards Built for ITSM Performance
            </h2>

            <p className="mx-auto mt-3 max-w-[720px] text-[14px] leading-6 text-[#607690]">
              Monitor operational performance, service quality and ITSM
              outcomes using trusted ServiceNow data and consistent KPI logic.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <BenefitCard
              icon={<BarChart3 size={23} />}
              title="Incident Analytics"
              text="Analyze incident volumes, priorities, categories, assignment groups, aging, resolution times and recurring trends."
            />

            <BenefitCard
              icon={<ShieldCheck size={23} />}
              title="SLA Performance"
              text="Monitor SLA compliance, breached tickets, service-level trends and performance by service, priority or team."
            />

            <BenefitCard
              icon={<Clock3 size={23} />}
              title="MTTR & Backlog"
              text="Measure mean time to resolution, ticket aging, open backlog and operational bottlenecks."
            />

            <BenefitCard
              icon={<UsersRound size={23} />}
              title="Executive Reporting"
              text="Provide IT leaders with concise Power BI dashboards covering service health, trends and operational performance."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                How It Works
              </div>

              <h2 className="mt-3 text-[35px] font-black leading-tight text-[#102965]">
                From ServiceNow Data
                <span className="block text-blue-600">
                  to Governed Intelligence
                </span>
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-[#607690]">
                SUFURIVRO uses Microsoft Fabric and Microsoft Power BI to build
                a reusable ServiceNow analytics architecture focused on
                governance, consistency and self-service reporting.
              </p>

              <a
                href="/microsoft-fabric-itsm"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-blue-600"
              >
                Explore Microsoft Fabric + ITSM
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {[
                {
                  no: "1",
                  title: "Connect",
                  text: "Bring ServiceNow data into Microsoft Fabric.",
                },
                {
                  no: "2",
                  title: "Standardize",
                  text: "Transform raw records into governed ITSM entities.",
                },
                {
                  no: "3",
                  title: "Model",
                  text: "Build reusable KPI logic and semantic models.",
                },
                {
                  no: "4",
                  title: "Analyze",
                  text: "Deliver Power BI dashboards and self-service analytics.",
                },
              ].map((item) => (
                <div
                  key={item.no}
                  className="rounded-[18px] border border-blue-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-[12px] font-black text-white">
                    {item.no}
                  </div>

                  <h3 className="mt-5 text-[15px] font-black text-[#102965]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-[#607690]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECH STRIP
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f8fbff]">
        <div className="mx-auto flex max-w-[1150px] flex-col items-center justify-center gap-8 px-6 py-9 md:flex-row md:gap-16">
          <div className="flex items-center justify-center">
            <img
              src="/logos/servicenow.png"
              alt="ServiceNow"
              className="max-h-[42px] max-w-[180px] object-contain"
            />
          </div>

          <ArrowRight
            className="hidden text-blue-300 md:block"
            size={20}
          />

          <div className="flex items-center justify-center">
            <img
              src="/logos/fabric.png"
              alt="Microsoft Fabric"
              className="max-h-[42px] max-w-[180px] object-contain"
            />
          </div>

          <ArrowRight
            className="hidden text-blue-300 md:block"
            size={20}
          />

          <div className="rounded-lg border border-blue-100 bg-white px-5 py-3 text-center">
            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
              SUFURIVRO
            </div>

            <div className="mt-1 text-[13px] font-black text-[#102965]">
              Governed ITSM Model
            </div>
          </div>

          <ArrowRight
            className="hidden text-blue-300 md:block"
            size={20}
          />

          <div className="flex items-center justify-center">
            <img
              src="/logos/powerbi.svg"
              alt="Microsoft Power BI"
              className="max-h-[42px] max-w-[180px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 py-12 lg:px-10">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[22px] bg-gradient-to-r from-[#092d74] via-[#0d5cc4] to-[#68b8ff] px-8 py-10 text-white lg:px-12">
          <div className="absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full bg-white/10" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-100">
                Ready to Modernize ServiceNow Analytics?
              </div>

              <h2 className="mt-2 text-[31px] font-black">
                Turn ServiceNow Data Into Governed Power BI Intelligence
              </h2>

              <p className="mt-2 max-w-[730px] text-[12px] leading-6 text-blue-50">
                See how SUFURIVRO combines ServiceNow, Microsoft Fabric and
                Power BI to create reusable ITSM models, consistent KPIs,
                dashboards and self-service analytics.
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
        </div>
      </section>

      <Footer active="servicenow" />
    </main>
  );
}