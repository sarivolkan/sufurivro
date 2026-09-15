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
  title: "Microsoft Fabric for ITSM Analytics",
  description:
    "Centralize ITSM data in Microsoft Fabric and build scalable Power BI analytics. Unify ServiceNow, Jira, Freshservice and BMC Helix data with OneLake, governed models and self-service reporting.",
  alternates: {
    canonical: "https://sufurivro.com/microsoft-fabric-itsm",
  },
  openGraph: {
    title: "Microsoft Fabric for ITSM Analytics | SUFURIVRO",
    description:
      "Build a unified ITSM data platform with Microsoft Fabric, OneLake and Power BI for scalable service management analytics.",
    url: "https://sufurivro.com/microsoft-fabric-itsm",
    siteName: "SUFURIVRO",
    type: "website",
  },
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

        <div className="relative mx-auto grid max-w-[1450px] gap-14 px-6 py-16 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-10 lg:py-20">
          {/* LEFT */}

          <div className="max-w-[650px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              Unify. Transform. Analyze.
            </div>

            <h1 className="mt-5 font-black leading-[1.02] tracking-[-0.05em] text-[#102965]">
              <span className="block text-[50px] lg:text-[58px]">
                Microsoft Fabric
              </span>

              <span className="mt-1 block text-[43px] text-blue-600 lg:text-[48px]">
                for ITSM Data
              </span>
            </h1>

            <p className="mt-6 max-w-[625px] text-[17px] leading-[1.65] text-[#526a91]">
              Bring your ITSM data into Microsoft Fabric and create a unified,
              scalable analytics platform for service management. Centralize
              ServiceNow, Jira Service Management, Freshservice and BMC Helix
              data, transform it in Fabric, store it in OneLake, and deliver
              governed Power BI analytics across your organization.
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
                Centralized Data
              </div>

              <div className="flex items-center gap-2">
                <BarChart3 size={21} className="text-blue-600" />
                Scalable Analytics
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={21} className="text-blue-600" />
                Enterprise Security
              </div>
            </div>
          </div>

          {/* RIGHT FABRIC DIAGRAM */}

          <div className="rounded-[24px] border border-blue-100 bg-white/95 p-6 shadow-[0_28px_70px_rgba(36,85,145,0.15)] backdrop-blur">
            <div className="flex items-start justify-between gap-5">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/fabric.png"
                  alt="Microsoft Fabric"
                  className="h-[38px] w-auto object-contain"
                />

                <div>
                  <div className="text-[15px] font-black text-[#102965]">
                    Microsoft Fabric
                  </div>

                  <div className="text-[10px] text-slate-400">
                    Unified ITSM Data Platform
                  </div>
                </div>
              </div>

              <div className="text-right text-[10px] font-bold leading-4 text-blue-500">
                One platform.
                <br />
                Endless possibilities.
              </div>
            </div>

            <div className="mt-7 grid gap-4 lg:grid-cols-[.8fr_1fr_.9fr] lg:items-center">
              {/* SOURCES */}

              <div className="rounded-2xl border border-blue-100 bg-[#f9fcff] p-4">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">
                  ITSM Sources
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    "ServiceNow",
                    "Jira Service Management",
                    "Freshservice",
                    "BMC Helix",
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="rounded-lg border border-blue-50 bg-white px-3 py-2 text-[10px] font-semibold text-[#365477]"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* FABRIC CORE */}

              <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white p-4">
                <div className="flex items-center justify-center">
                  <img
                    src="/logos/fabric.png"
                    alt="Microsoft Fabric platform"
                    className="h-[35px] w-auto object-contain"
                  />
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    "Ingest",
                    "Transform",
                    "Model",
                    "Analyze",
                    "Share",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-center text-[10px] font-bold text-[#244a80]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* BUSINESS VALUE */}

              <div className="rounded-2xl border border-blue-100 bg-[#f9fcff] p-4">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">
                  Business Value
                </div>

                <div className="mt-4 space-y-3 text-[10px] text-[#526a91]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    360° Service Insights
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Faster Decision Making
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Cost Optimization
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Better User Experience
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

      <section className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              Real-World Impact
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              Microsoft Fabric ITSM Analytics Use Cases
            </h2>

            <p className="mx-auto mt-2 max-w-[760px] text-[15px] leading-6 text-[#667c99]">
              Turn ITSM data into enterprise insights using Microsoft Fabric,
              OneLake and Power BI.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <UseCaseCard
              icon={<BarChart3 size={25} />}
              title="Enterprise ITSM Analytics"
              text="Combine data from multiple ITSM platforms and other enterprise sources to create a single source of truth."
            />

            <UseCaseCard
              icon={<UsersRound size={25} />}
              title="Cross-Department Insights"
              text="Analyze ITSM data together with HR, Finance, Operations or other business data in Microsoft Fabric."
            />

            <UseCaseCard
              icon={<BrainCircuit size={25} />}
              title="Advanced Analytics"
              text="Use Fabric data engineering, analytics and AI capabilities to identify trends, anomalies and improvement opportunities."
            />

            <UseCaseCard
              icon={<PieChart size={25} />}
              title="Self-Service BI"
              text="Give users governed ITSM data models and ready-to-use Power BI reports for secure self-service analytics."
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
              Microsoft Fabric Architecture
            </div>

            <h2 className="mt-3 text-[34px] font-black text-[#102965]">
              Modern Data Architecture for ITSM
            </h2>

            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-6 text-[#607690]">
              Build a scalable, secure and governed ITSM data platform on
              Microsoft Fabric.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-6">
            {/* DATA SOURCES */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Network size={21} />
              </div>

              <h3 className="mt-4 text-[15px] font-black text-[#102965]">
                Data Sources
              </h3>

              <div className="mt-3 space-y-2 text-[10px] leading-5 text-[#607690]">
                <div>ServiceNow</div>
                <div>Jira Service Management</div>
                <div>Freshservice</div>
                <div>BMC Helix</div>
                <div>Other Systems</div>
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
                Data Factory
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Connect and ingest ITSM data from multiple source systems.
              </p>
            </div>

            {/* TRANSFORM */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Zap size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
                Transform
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                Data Engineering
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Clean, enrich and prepare ITSM data for enterprise analytics.
              </p>
            </div>

            {/* STORE */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Layers3 size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
                Store
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                OneLake
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Centralize ITSM data in a unified Microsoft Fabric data layer.
              </p>
            </div>

            {/* MODEL */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Boxes size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
                Model
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                Semantic Model
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Build governed and reusable ITSM metrics, dimensions and KPIs.
              </p>
            </div>

            {/* VISUALIZE */}

            <div className="rounded-[18px] border border-blue-100 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                <BarChart3 size={21} />
              </div>

              <div className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
                Visualize
              </div>

              <h3 className="mt-1 text-[15px] font-black text-[#102965]">
                Power BI
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-[#607690]">
                Deliver interactive ITSM dashboards and self-service reporting.
              </p>
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
              Why Choose SUFURIVRO for Microsoft Fabric + ITSM?
            </h2>

            <p className="mt-2 text-[14px] text-[#667c99]">
              Combine ITSM expertise with a modern Microsoft Fabric analytics
              architecture.
            </p>
          </div>

          <div className="mt-9 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <Sparkles size={26} />,
                title: "ITSM Expertise",
                text: "A solution designed around service management data, processes and reporting needs.",
              },
              {
                icon: <Target size={26} />,
                title: "Faster Time to Value",
                text: "Accelerate delivery with reusable data models, analytics patterns and Power BI reporting.",
              },
              {
                icon: <ShieldCheck size={26} />,
                title: "Secure and Governed",
                text: "Build trusted ITSM analytics on Microsoft Fabric with centralized governance and security.",
              },
              {
                icon: <UsersRound size={26} />,
                title: "End-to-End Analytics",
                text: "From API ingestion and OneLake storage to semantic models and Power BI dashboards.",
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
              Unify Data from Leading ITSM Platforms
            </h2>

            <p className="mt-1 text-[13px] text-[#667c99]">
              Bring multiple service management platforms into one Microsoft
              Fabric ITSM data model.
            </p>
          </div>

          <div className="mt-7 grid items-center gap-8 md:grid-cols-4">
            <a
              href="/servicenow-power-bi"
              className="flex items-center justify-center md:border-r md:border-slate-200"
            >
              <img
                src="/logos/servicenow.png"
                alt="ServiceNow Microsoft Fabric integration"
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
                  alt="Freshservice Microsoft Fabric integration"
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
                  alt="BMC Helix Microsoft Fabric integration"
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
              Ready to Modernize Your ITSM Data?
            </div>

            <h2 className="mt-2 text-[27px] font-black text-[#102965]">
              Build Your Microsoft Fabric ITSM Data Platform
            </h2>

            <p className="mt-1 text-[13px] text-[#607690]">
              Centralize ITSM data in Microsoft Fabric, create governed models,
              and deliver trusted Power BI analytics across your organization.
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