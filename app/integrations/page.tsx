import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Eye,
  Layers3,
  Link2,
  Network,
  Server,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ITSM Integrations & Unified Analytics",
  description:
    "Connect ServiceNow, Jira Service Management, Freshservice, BMC Helix and other ITSM platforms to Microsoft Fabric. Standardize service data and build one governed Power BI analytics layer with SUFURIVRO.",
  alternates: {
    canonical: "https://sufurivro.com/integrations",
  },
  openGraph: {
    title: "ITSM Integrations & Unified Analytics | SUFURIVRO",
    description:
      "Bring data from multiple ITSM platforms into Microsoft Fabric, standardize service-management data and deliver governed Power BI analytics through one reusable model.",
    url: "https://sufurivro.com/integrations",
    siteName: "SUFURIVRO",
    type: "website",
  },
  keywords: [
    "ITSM Integrations",
    "ServiceNow Integration",
    "Jira Service Management Integration",
    "Freshservice Integration",
    "BMC Helix Integration",
    "ITSM Data Integration",
    "Microsoft Fabric ITSM Integration",
    "Unified ITSM Data",
    "Multi-Platform ITSM Analytics",
    "Power BI ITSM",
  ],
};

const MiniIcon = ({
  children,
  orange = false,
}: {
  children: React.ReactNode;
  orange?: boolean;
}) => (
  <div
    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
      orange
        ? "bg-orange-100 text-orange-600"
        : "bg-blue-100 text-blue-600"
    }`}
  >
    {children}
  </div>
);

const JourneyCard = ({
  no,
  icon,
  title,
  text,
}: {
  no: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="relative h-full rounded-[22px] border border-blue-100 bg-white p-6 shadow-[0_8px_26px_rgba(20,60,120,.045)]">
    <div className="mb-6 flex items-start justify-between">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-[13px] font-black text-white">
        {no}
      </div>

      <MiniIcon>{icon}</MiniIcon>
    </div>

    <h3 className="text-[18px] font-black text-[#102965]">
      {title}
    </h3>

    <p className="mt-3 text-[13px] leading-6 text-[#607690]">
      {text}
    </p>
  </div>
);

export default function IntegrationsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header active="integrations" />

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

        <div className="absolute -right-[180px] -top-[150px] h-[620px] w-[620px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] gap-14 px-6 py-16 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:px-10 lg:py-20">
          {/* LEFT */}

          <div className="max-w-[670px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              Multi-Platform ITSM Integration
            </div>

            <div className="mt-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[12px] font-bold text-orange-600">
              Connect Sources. Standardize Data. Govern Analytics.
            </div>

            <h1 className="mt-5 font-black leading-[1.02] tracking-[-0.05em] text-[#102965]">
              <span className="block text-[48px] lg:text-[56px]">
                Connect Your ITSM Ecosystem
              </span>

              <span className="mt-1 block text-[40px] text-blue-600 lg:text-[46px]">
                to One Analytics Layer
              </span>
            </h1>

            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.65] text-[#526a91]">
              Bring data from ServiceNow, Jira Service Management, Freshservice,
              BMC Helix and other service-management platforms into Microsoft
              Fabric. SUFURIVRO standardizes source-specific structures and
              creates one governed analytics layer for Power BI.
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
                href="#integration-journey"
                className="inline-flex h-[54px] min-w-[185px] items-center justify-center rounded-xl border border-blue-200 bg-white px-7 text-[15px] font-bold text-blue-700 shadow-[0_8px_18px_rgba(37,99,235,.06)] transition hover:-translate-y-0.5"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium text-[#395880]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={19} className="text-blue-600" />
                Multiple ITSM sources
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={19} className="text-blue-600" />
                Standardized ITSM model
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={19} className="text-blue-600" />
                Governed Power BI analytics
              </div>
            </div>
          </div>

          {/* RIGHT FLOW DIAGRAM */}

          <div className="rounded-[24px] border border-blue-100 bg-white p-6 shadow-[0_28px_70px_rgba(36,85,145,.15)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-600">
                  Unified ITSM Analytics Flow
                </div>

                <div className="mt-1 text-[9px] text-slate-400">
                  Source systems to governed intelligence
                </div>
              </div>

              <div className="rounded-lg border border-orange-100 bg-orange-50 px-3 py-2 text-[8px] font-black uppercase tracking-[0.14em] text-orange-600">
                SUFURIVRO
              </div>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-4 lg:items-stretch">
              {/* SOURCES */}

              <div className="rounded-2xl border border-blue-100 bg-[#f9fcff] p-4">
                <div className="text-[9px] font-black uppercase tracking-[0.18em] text-[#102965]">
                  ITSM Sources
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex h-[42px] items-center justify-center rounded-lg border border-blue-50 bg-white px-3">
                    <img
                      src="/logos/servicenow.png"
                      alt="ServiceNow integration"
                      className="max-h-[25px] max-w-[110px] object-contain"
                    />
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-blue-50 bg-white px-3 py-3">
                    <img
                      src="/logos/jira.svg"
                      alt="Jira Service Management integration"
                      className="h-[19px] w-[19px]"
                    />

                    <span className="text-[8px] font-semibold text-[#365477]">
                      Jira Service Management
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-blue-50 bg-white px-3 py-3">
                    <img
                      src="/logos/freshservice.png"
                      alt="Freshservice integration"
                      className="h-[19px] w-[19px]"
                    />

                    <span className="text-[9px] font-semibold text-[#365477]">
                      Freshservice
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-blue-50 bg-white px-3 py-3">
                    <img
                      src="/logos/bmc.svg"
                      alt="BMC Helix integration"
                      className="h-[19px] w-[19px]"
                    />

                    <span className="text-[9px] font-semibold text-[#365477]">
                      BMC Helix
                    </span>
                  </div>
                </div>
              </div>

              {/* FABRIC */}

              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-center">
                <img
                  src="/logos/fabric.png"
                  alt="Microsoft Fabric ITSM integration"
                  className="mx-auto h-[34px] w-auto object-contain"
                />

                <div className="mt-3 text-[11px] font-black text-[#102965]">
                  Microsoft Fabric
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    "Ingest",
                    "Transform",
                    "Store",
                    "Govern",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-blue-100 bg-white px-2 py-2 text-[8px] font-semibold text-[#607690]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* SUFURIVRO */}

              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 text-center">
                <div className="mx-auto flex h-[38px] w-[38px] items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Layers3 size={19} />
                </div>

                <div className="mt-3 text-[11px] font-black text-[#102965]">
                  SUFURIVRO
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-orange-500">
                  ITSM Analytics Layer
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    "Normalize",
                    "Standardize",
                    "Model",
                    "Define KPIs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-orange-100 bg-white px-2 py-2 text-[8px] font-semibold text-[#607690]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* POWER BI */}

              <div className="rounded-2xl border border-yellow-100 bg-yellow-50/70 p-4 text-center">
                <img
                  src="/logos/powerbi.svg"
                  alt="Power BI ITSM analytics"
                  className="mx-auto h-[34px] w-auto object-contain"
                />

                <div className="mt-3 text-[11px] font-black text-[#102965]">
                  Power BI
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    "Dashboards",
                    "Self-Service",
                    "Executive KPIs",
                    "Drill-Through",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-yellow-100 bg-white px-2 py-2 text-[8px] font-semibold text-[#607690]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-blue-100 bg-[#f8fbff] px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-4 text-[9px] font-bold text-[#365477]">
                <span>Connect</span>
                <ArrowRight size={14} className="text-blue-400" />
                <span>Centralize</span>
                <ArrowRight size={14} className="text-blue-400" />
                <span>Standardize</span>
                <ArrowRight size={14} className="text-blue-400" />
                <span>Govern</span>
                <ArrowRight size={14} className="text-blue-400" />
                <span>Analyze</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATION JOURNEY
      ====================================================== */}

      <section id="integration-journey" className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              From Source to Standardized Intelligence
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              A Reusable ITSM Integration Architecture
            </h2>

            <p className="mx-auto mt-3 max-w-[800px] text-[15px] leading-6 text-[#667c99]">
              The objective is not simply to connect systems. SUFURIVRO turns
              source-specific service data into a reusable and governed
              analytics structure.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            <JourneyCard
              no="1"
              icon={<Server size={22} />}
              title="Connect ITSM Sources"
              text="Bring required data from ServiceNow, Jira Service Management, Freshservice, BMC Helix and other service platforms into your Microsoft data environment."
            />

            <JourneyCard
              no="2"
              icon={<Database size={22} />}
              title="Centralize in Fabric"
              text="Use Microsoft Fabric to ingest, transform, store and govern service-management data from your source systems."
            />

            <JourneyCard
              no="3"
              icon={<Layers3 size={22} />}
              title="Standardize with SUFURIVRO"
              text="Normalize source-specific entities and relationships into a consistent ITSM analytics structure."
            />

            <JourneyCard
              no="4"
              icon={<BarChart3 size={22} />}
              title="Deliver Governed Analytics"
              text="Expose reusable semantic models and KPI definitions through Power BI dashboards and self-service reporting."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          NORMALIZATION
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f7fbff] py-16">
        <div className="mx-auto grid max-w-[1450px] gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10">
          {/* LEFT */}

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              Unified ITSM Data Model
            </div>

            <h2 className="mt-3 text-[35px] font-black leading-tight text-[#102965]">
              Different Source Systems.
              <span className="block text-blue-600">
                One Analytics Language.
              </span>
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#607690]">
              ServiceNow, Jira Service Management, Freshservice and BMC Helix
              do not necessarily represent service-management data in the same
              way. SUFURIVRO creates a canonical analytics layer that separates
              reporting from source-specific structures.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Standardized incident entities",
                "Common request and ticket dimensions",
                "Reusable SLA and MTTR definitions",
                "Normalized status and priority mappings",
                "Cross-platform service reporting",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[13px] font-semibold text-[#365477]"
                >
                  <CheckCircle2 size={18} className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT MODEL */}

          <div className="rounded-[22px] border border-blue-100 bg-white p-6 shadow-[0_14px_40px_rgba(20,60,120,.07)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-black text-[#102965]">
                  Canonical ITSM Model
                </div>

                <div className="mt-1 text-[9px] text-slate-400">
                  Standardized analytics structure
                </div>
              </div>

              <div className="rounded-full bg-orange-50 px-3 py-1 text-[8px] font-bold text-orange-600">
                SUFURIVRO
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Incident",
                  text: "Priority · Status · Category · Assignment",
                },
                {
                  title: "Service Request",
                  text: "Type · Service · Fulfillment · Requester",
                },
                {
                  title: "SLA",
                  text: "Target · Breach · Compliance · Duration",
                },
                {
                  title: "Change & Problem",
                  text: "Risk · Impact · Cause · Outcome",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-blue-100 bg-[#fbfdff] p-4"
                >
                  <div className="text-[11px] font-black text-[#102965]">
                    {item.title}
                  </div>

                  <div className="mt-2 text-[9px] leading-4 text-[#607690]">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-orange-100 bg-orange-50/50 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Target size={21} />
                </div>

                <div>
                  <div className="text-[11px] font-black text-[#102965]">
                    Governed KPI Framework
                  </div>

                  <div className="mt-1 text-[9px] leading-4 text-[#607690]">
                    SLA · MTTR · Backlog · Aging · Resolution · Service
                    Performance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATION OPTIONS
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="mx-auto max-w-[880px] text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.26em] text-blue-600">
              Flexible Data Integration
            </div>

            <h2 className="mt-3 text-[36px] font-black text-[#102965]">
              Work with the Integration Method That Fits Your Architecture
            </h2>

            <p className="mx-auto mt-3 max-w-[780px] text-[15px] leading-7 text-[#667c99]">
              SUFURIVRO does not require every ITSM source to use the same
              ingestion method. Data can enter Microsoft Fabric through
              supported platform connectors, vendor APIs or existing enterprise
              data-integration patterns, depending on the source and customer
              architecture.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: <Link2 size={23} />,
                title: "Supported Connectors",
                text: "Use suitable Microsoft or platform-supported connectivity where it fits the source and architecture.",
              },
              {
                icon: <Network size={23} />,
                title: "Vendor APIs",
                text: "Use supported vendor APIs where API-based ingestion is appropriate for the required service data.",
              },
              {
                icon: <Database size={23} />,
                title: "Existing Data Pipelines",
                text: "Reuse existing enterprise ingestion and data-platform patterns instead of duplicating architecture.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-blue-100 bg-white p-7 shadow-sm"
              >
                <MiniIcon>{item.icon}</MiniIcon>

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
          BENEFITS
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f8fbff] py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-[11px] font-black uppercase tracking-[0.26em] text-blue-600">
            One Analytics Layer. Multiple Sources.
          </div>

          <h2 className="mt-3 text-[36px] font-black text-[#102965]">
            Why Standardize ITSM Integrations with SUFURIVRO?
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <Database size={22} />,
                title: "One Source of Truth",
                text: "Create a common analytical representation of service-management data across different source platforms.",
              },
              {
                icon: <Zap size={22} />,
                title: "Reduce Rework",
                text: "Avoid rebuilding source-specific transformations and KPI logic separately for every dashboard.",
                orange: true,
              },
              {
                icon: <Eye size={22} />,
                title: "Consistent Reporting",
                text: "Use standardized business definitions across operational, management and executive Power BI reporting.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: "Platform Independence",
                text: "Reduce the dependency of your analytics model on the reporting structure of any single ITSM platform.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <MiniIcon orange={item.orange}>
                  {item.icon}
                </MiniIcon>

                <div>
                  <div className="font-black text-[#102965]">
                    {item.title}
                  </div>

                  <div className="mt-2 text-[13px] leading-6 text-[#607690]">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STRIP
      ====================================================== */}

      <section className="border-b border-blue-100 bg-gradient-to-r from-[#f5faff] via-white to-[#f5faff] py-10">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[25px] font-black text-[#102965]">
              Build One Analytics Layer Across Leading ITSM Platforms
            </h2>

            <p className="mt-1 text-[13px] text-[#667c99]">
              Microsoft Fabric provides the data foundation. SUFURIVRO
              standardizes ITSM data for governed Power BI analytics.
            </p>
          </div>

          <div className="mt-8 grid items-center gap-7 md:grid-cols-6">
            <div className="flex justify-center">
              <img
                src="/logos/servicenow.png"
                alt="ServiceNow integration"
                className="max-h-[38px] max-w-[140px] object-contain"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/logos/jira.svg"
                alt="Jira Service Management integration"
                className="h-[35px] w-[35px]"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/logos/freshservice.png"
                alt="Freshservice integration"
                className="h-[35px] w-[35px]"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/logos/bmc.svg"
                alt="BMC Helix integration"
                className="h-[38px] w-[38px]"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/logos/fabric.png"
                alt="Microsoft Fabric ITSM analytics"
                className="max-h-[40px] max-w-[130px] object-contain"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/logos/powerbi.svg"
                alt="Power BI ITSM analytics"
                className="max-h-[40px] max-w-[130px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 py-10 lg:px-10">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[24px] bg-gradient-to-r from-[#072a67] via-[#0e57c9] to-[#1877f2] px-9 py-10 text-white lg:px-12">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-200">
                Build One Governed ITSM Analytics Layer
              </div>

              <h2 className="mt-3 text-[31px] font-black">
                Connect Your ITSM Sources Without Fragmenting Your Analytics
              </h2>

              <p className="mt-3 max-w-[760px] text-[13px] leading-6 text-blue-100">
                Bring service-management data into Microsoft Fabric,
                standardize source-specific structures with SUFURIVRO and
                deliver trusted Power BI analytics through one reusable model.
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

      <Footer active="integrations" />
    </main>
  );
}