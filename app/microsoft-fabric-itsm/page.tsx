import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Database,
  Gauge,
  Layers3,
  Network,
  PieChart,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Fabric ITSM Analytics Platform",
  description:
    "Build a governed ITSM analytics layer on Microsoft Fabric and Power BI. Centralize ServiceNow, Jira Service Management, Freshservice and BMC Helix data, standardize ITSM KPIs and deliver reusable semantic models and dashboards.",
  alternates: {
    canonical: "https://sufurivro.com/microsoft-fabric-itsm",
  },
  openGraph: {
    title: "Microsoft Fabric ITSM Analytics Platform | SUFURIVRO",
    description:
      "Turn Microsoft Fabric into a governed ITSM analytics foundation with standardized data models, KPI logic, Power BI semantic models and self-service reporting.",
    url: "https://sufurivro.com/microsoft-fabric-itsm",
    siteName: "SUFURIVRO",
    type: "website",
  },
  keywords: [
    "Microsoft Fabric ITSM",
    "Microsoft Fabric ITSM Analytics",
    "ITSM Analytics Platform",
    "ITSM Data Platform",
    "Power BI ITSM",
    "ITSM Semantic Model",
    "ServiceNow Microsoft Fabric",
    "ITSM Data Model",
    "ITSM KPI Framework",
    "Microsoft Fabric ServiceNow",
    "ITSM Self-Service Reporting",
  ],
};

const FeatureIcon = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
    {children}
  </div>
);

const UseCaseCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="rounded-[18px] border border-blue-100 bg-white p-7 shadow-[0_6px_22px_rgba(17,41,101,0.04)]">
    <FeatureIcon>{icon}</FeatureIcon>

    <h3 className="mt-5 text-[17px] font-black text-[#102965]">
      {title}
    </h3>

    <p className="mt-2 text-[13px] leading-6 text-[#607690]">
      {text}
    </p>
  </div>
);

export default function MicrosoftFabricITSMPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header active="fabric" />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f6fbff] to-[#e3f1ff]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute -right-[160px] -top-[130px] h-[520px] w-[520px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] gap-14 px-6 py-16 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:px-10 lg:py-20">
          {/* LEFT */}

          <div className="max-w-[680px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              Microsoft Fabric + ITSM Analytics
            </div>

            <div className="mt-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[12px] font-bold text-orange-600">
              Governed ITSM Intelligence on Microsoft Fabric
            </div>

            <h1 className="mt-5 font-black leading-[1.02] tracking-[-0.05em] text-[#102965]">
              <span className="block text-[48px] lg:text-[57px]">
                Turn Microsoft Fabric into
              </span>

              <span className="mt-1 block text-[43px] text-blue-600 lg:text-[50px]">
                Your ITSM Intelligence Layer
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-[17px] leading-[1.65] text-[#526a91]">
              Microsoft Fabric gives you the enterprise data foundation.
              SUFURIVRO adds the ITSM-specific layer — standardized service
              data, governed KPI definitions, reusable semantic models and
              Power BI analytics built for service management.
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
                href="#architecture"
                className="inline-flex h-[54px] min-w-[180px] items-center justify-center rounded-xl border border-blue-200 bg-white px-7 text-[15px] font-bold text-blue-700 shadow-[0_8px_18px_rgba(37,99,235,0.06)] transition hover:-translate-y-0.5"
              >
                See Architecture
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium text-[#395880]">
              <div className="flex items-center gap-2">
                <Database size={21} className="text-blue-600" />
                Unified ITSM Data
              </div>

              <div className="flex items-center gap-2">
                <Gauge size={21} className="text-blue-600" />
                Governed KPI Logic
              </div>

              <div className="flex items-center gap-2">
                <BarChart3 size={21} className="text-blue-600" />
                Power BI Analytics
              </div>
            </div>
          </div>

          {/* RIGHT ARCHITECTURE DIAGRAM */}

          <div className="rounded-[24px] border border-blue-100 bg-white/95 p-6 shadow-[0_28px_70px_rgba(36,85,145,0.15)] backdrop-blur">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="text-[15px] font-black text-[#102965]">
                  ITSM Intelligence Architecture
                </div>

                <div className="mt-1 text-[10px] text-slate-400">
                  From operational records to governed analytics
                </div>
              </div>

              <div className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-[9px] font-black uppercase tracking-[0.14em] text-blue-600">
                SUFURIVRO
              </div>
            </div>

            <div className="mt-7 grid gap-3 lg:grid-cols-4 lg:items-stretch">
              {/* SOURCES */}

              <div className="rounded-2xl border border-blue-100 bg-[#f9fcff] p-4">
                <div className="text-[9px] font-black uppercase tracking-[0.16em] text-blue-600">
                  ITSM Sources
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    "ServiceNow",
                    "Jira SM",
                    "Freshservice",
                    "BMC Helix",
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="rounded-lg border border-blue-50 bg-white px-3 py-2 text-[9px] font-semibold text-[#365477]"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* FABRIC */}

              <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white p-4">
                <div className="flex justify-center">
                  <img
                    src="/logos/fabric.png"
                    alt="Microsoft Fabric"
                    className="h-[31px] w-auto object-contain"
                  />
                </div>

                <div className="mt-3 text-center text-[10px] font-black text-[#102965]">
                  Microsoft Fabric
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    "Ingest",
                    "Transform",
                    "OneLake",
                    "Govern",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-blue-100 bg-white px-2 py-2 text-center text-[9px] font-semibold text-[#526a91]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* SUFURIVRO */}

              <div className="rounded-2xl border border-orange-200 bg-gradient-to-b from-orange-50 to-white p-4">
                <div className="text-center text-[9px] font-black uppercase tracking-[0.16em] text-orange-500">
                  SUFURIVRO
                </div>

                <div className="mt-2 text-center text-[11px] font-black text-[#102965]">
                  ITSM Analytics Layer
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    "Canonical Model",
                    "KPI Framework",
                    "Semantic Model",
                    "Analytics Logic",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-orange-100 bg-white px-2 py-2 text-center text-[9px] font-semibold text-[#526a91]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* POWER BI */}

              <div className="rounded-2xl border border-blue-100 bg-[#f9fcff] p-4">
                <div className="flex justify-center">
                  <img
                    src="/logos/powerbi.svg"
                    alt="Microsoft Power BI"
                    className="h-[31px] w-auto object-contain"
                  />
                </div>

                <div className="mt-3 text-center text-[10px] font-black text-[#102965]">
                  Power BI
                </div>

                <div className="mt-4 space-y-2 text-[9px] text-[#526a91]">
                  {[
                    "Dashboards",
                    "Self-Service BI",
                    "Executive KPIs",
                    "Operational Detail",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg bg-white px-2 py-2"
                    >
                      <CheckCircle2
                        size={12}
                        className="shrink-0 text-blue-600"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4 text-center text-[10px] font-semibold text-slate-500">
              ITSM Sources → Microsoft Fabric → SUFURIVRO → Microsoft Power BI
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIFFERENTIATION
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              Where SUFURIVRO Adds Value
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              Microsoft Fabric Provides the Data Platform.
              <span className="block text-blue-600">
                SUFURIVRO Adds the ITSM Analytics Layer.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[820px] text-[15px] leading-7 text-[#667c99]">
              Getting ITSM data into Fabric is only the first step. The real
              reporting challenge is turning raw operational records into
              consistent service-management entities, measures, relationships
              and business KPIs that users can trust.
            </p>
          </div>

          <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <UseCaseCard
              icon={<Boxes size={25} />}
              title="Canonical ITSM Model"
              text="Standardize incidents, problems, changes, requests, SLAs and service entities into a reusable analytics structure."
            />

            <UseCaseCard
              icon={<Target size={25} />}
              title="Governed KPI Framework"
              text="Define SLA compliance, MTTR, resolution time, backlog, aging and other service KPIs once and reuse them consistently."
            />

            <UseCaseCard
              icon={<Layers3 size={25} />}
              title="Reusable Semantic Model"
              text="Create a Power BI-ready semantic layer with governed relationships, dimensions, measures and business definitions."
            />

            <UseCaseCard
              icon={<BarChart3 size={25} />}
              title="Analytics Accelerators"
              text="Start with reusable dashboard patterns for incident, SLA, service performance and executive reporting."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ====================================================== */}

      <section
        id="architecture"
        className="border-y border-blue-100 bg-[#f7fbff] py-16"
      >
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              Microsoft Fabric ITSM Architecture
            </div>

            <h2 className="mt-3 text-[34px] font-black text-[#102965]">
              A Governed Data-to-Intelligence Architecture for ITSM
            </h2>

            <p className="mx-auto mt-3 max-w-[800px] text-[14px] leading-6 text-[#607690]">
              Use Microsoft Fabric as the enterprise data foundation while
              SUFURIVRO provides the ITSM-specific modeling and analytics layer
              required for trusted Power BI reporting.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-6">
            {/* SOURCES */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Network size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
                Source
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                ITSM Platforms
              </h3>

              <div className="mt-3 space-y-2 text-[10px] leading-5 text-[#607690]">
                <div>ServiceNow</div>
                <div>Jira Service Management</div>
                <div>Freshservice</div>
                <div>BMC Helix</div>
                <div>Other Sources</div>
              </div>
            </div>

            {/* INGEST */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Database size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
                Ingest
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                Fabric Data Integration
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Bring required ITSM data into Microsoft Fabric using the
                integration approach appropriate for each source.
              </p>
            </div>

            {/* STORE */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Layers3 size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
                Centralize
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                Fabric Data Layer
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Clean, transform, store and govern service-management data in
                your Microsoft Fabric environment.
              </p>
            </div>

            {/* STANDARDIZE */}

            <div className="rounded-[18px] border border-orange-200 bg-orange-50/30 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Zap size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-orange-500">
                SUFURIVRO
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                Standardize ITSM
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Convert source-specific structures into consistent ITSM
                entities, dimensions and relationships.
              </p>
            </div>

            {/* MODEL */}

            <div className="rounded-[18px] border border-orange-200 bg-orange-50/30 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Boxes size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-orange-500">
                SUFURIVRO
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                Semantic Model
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Apply reusable SLA, MTTR, backlog and service-performance
                measures through a governed semantic layer.
              </p>
            </div>

            {/* VISUALIZE */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                <BarChart3 size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
                Analyze
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                Microsoft Power BI
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Deliver interactive dashboards, executive KPIs and secure
                self-service ITSM reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              ITSM Analytics Use Cases
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              Get More Business Value from ITSM Data in Fabric
            </h2>

            <p className="mx-auto mt-2 max-w-[760px] text-[15px] leading-6 text-[#667c99]">
              Build service-management analytics on top of the Microsoft data
              platform your organization already uses.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <UseCaseCard
              icon={<BarChart3 size={25} />}
              title="Enterprise ITSM Analytics"
              text="Create trusted reporting for incidents, requests, problems, changes, SLAs and service performance."
            />

            <UseCaseCard
              icon={<UsersRound size={25} />}
              title="Cross-Platform Reporting"
              text="Standardize data from multiple ITSM environments and analyze service performance using common business definitions."
            />

            <UseCaseCard
              icon={<BrainCircuit size={25} />}
              title="Advanced Analytics"
              text="Use the broader capabilities of Microsoft Fabric to explore trends, anomalies and improvement opportunities in service data."
            />

            <UseCaseCard
              icon={<PieChart size={25} />}
              title="Self-Service BI"
              text="Give users trusted Power BI semantic models so they can explore ITSM data without recreating core KPI logic."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          GOVERNANCE SECTION
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f8fbff] py-16">
        <div className="mx-auto grid max-w-[1350px] gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-10">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              One Analytics Foundation
            </div>

            <h2 className="mt-3 text-[35px] font-black leading-tight text-[#102965]">
              Stop Rebuilding the Same
              <span className="block text-blue-600">
                ITSM Logic in Every Report
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#607690]">
              Without a governed semantic layer, different reports can define
              SLA compliance, MTTR, backlog and ticket aging differently.
              SUFURIVRO centralizes those definitions so operational and
              executive reporting can work from the same trusted foundation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <Target size={23} />,
                title: "Common KPI Definitions",
                text: "Use consistent service-management measures across teams and reports.",
              },
              {
                icon: <ShieldCheck size={23} />,
                title: "Governed Data",
                text: "Separate reusable business logic from individual dashboard development.",
              },
              {
                icon: <Sparkles size={23} />,
                title: "Reusable Analytics",
                text: "Build once and reuse models, metrics and dimensions across Power BI solutions.",
              },
              {
                icon: <UsersRound size={23} />,
                title: "Self-Service Ready",
                text: "Give analysts and business users a trusted layer for their own reporting.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-blue-100 bg-white p-6"
              >
                <FeatureIcon>{item.icon}</FeatureIcon>

                <h3 className="mt-4 text-[15px] font-black text-[#102965]">
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
          WHY SUFURIVRO
      ====================================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[32px] font-black text-[#102965]">
              Why SUFURIVRO for Microsoft Fabric + ITSM?
            </h2>

            <p className="mx-auto mt-2 max-w-[720px] text-[14px] leading-6 text-[#667c99]">
              Fabric gives you the technology foundation. SUFURIVRO adds
              service-management analytics expertise and reusable ITSM
              intelligence.
            </p>
          </div>

          <div className="mt-9 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <Sparkles size={26} />,
                title: "ITSM-Specific Design",
                text: "Built around service-management entities, processes, metrics and reporting scenarios.",
              },
              {
                icon: <Target size={26} />,
                title: "Faster Time to Value",
                text: "Start from reusable ITSM models, KPI definitions and analytics patterns rather than a blank data model.",
              },
              {
                icon: <ShieldCheck size={26} />,
                title: "Governed by Design",
                text: "Create consistent reporting logic that can be reused across operational, management and executive analytics.",
              },
              {
                icon: <UsersRound size={26} />,
                title: "Built for Power BI",
                text: "Deliver trusted semantic models, dashboards and self-service analytics through the Microsoft BI ecosystem.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <FeatureIcon>{item.icon}</FeatureIcon>

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
          ITSM TOOL STRIP
      ====================================================== */}

      <section className="border-y border-blue-100 bg-gradient-to-r from-[#f5faff] via-white to-[#f5faff] py-9">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[25px] font-black text-[#102965]">
              One Analytics Layer Across Your ITSM Ecosystem
            </h2>

            <p className="mt-1 text-[13px] text-[#667c99]">
              Standardize service-management data from different source
              platforms into a consistent analytics foundation.
            </p>
          </div>

          <div className="mt-7 grid items-center gap-8 md:grid-cols-4">
            <a
              href="/servicenow-power-bi"
              className="flex items-center justify-center md:border-r md:border-slate-200"
            >
              <img
                src="/logos/servicenow.png"
                alt="ServiceNow analytics"
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
          CTA
      ====================================================== */}

      <section className="px-6 py-10 lg:px-10">
        <div className="relative mx-auto flex max-w-[1450px] flex-col justify-between gap-7 overflow-hidden rounded-[24px] border border-blue-100 bg-gradient-to-r from-[#eef7ff] via-[#f7fbff] to-[#e7f3ff] px-10 py-8 md:flex-row md:items-center">
          <div className="absolute bottom-0 left-8 flex items-end gap-4 opacity-30">
            {[52, 86, 118, 74].map((h, i) => (
              <div
                key={i}
                className="w-9 rounded-t-lg bg-blue-300"
                style={{ height: h }}
              />
            ))}
          </div>

          <div className="relative md:ml-[300px]">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              Build Your ITSM Intelligence Layer
            </div>

            <h2 className="mt-2 text-[27px] font-black text-[#102965]">
              Get More Value from Microsoft Fabric and Your ITSM Data
            </h2>

            <p className="mt-1 max-w-[760px] text-[13px] leading-6 text-[#607690]">
              Standardize ITSM data, govern your service KPIs and deliver
              reusable Power BI analytics on top of your Microsoft Fabric
              environment.
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

      <Footer active="fabric" />
    </main>
  );
}