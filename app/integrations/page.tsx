import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  Check,
  CircleCheck,
  Database,
  Gauge,
  Layers3,
  Link2,
  Network,
  Server,
  ShieldCheck,
  UserRound,
  UsersRound,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ITSM Integrations",
  description:
    "Connect ServiceNow, Jira Service Management, Freshservice and BMC Helix through secure APIs. Centralize ITSM data in Microsoft Fabric and analyze it with Power BI using SUFURIVRO.",
  alternates: {
    canonical: "https://sufurivro.com/integrations",
  },
  openGraph: {
    title: "ITSM Integrations | SUFURIVRO",
    description:
      "Connect your ITSM ecosystem, centralize data in Microsoft Fabric and unlock analytics with Power BI.",
    url: "https://sufurivro.com/integrations",
    siteName: "SUFURIVRO",
    type: "website",
  },
};

const CircleIcon = ({
  children,
  orange = false,
}: {
  children: ReactNode;
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

const FlowCheck = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-3 text-[13px] text-[#455f83]">
    <Check size={16} className="shrink-0 text-blue-600" strokeWidth={3} />
    <span>{children}</span>
  </div>
);

const Benefit = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex gap-4">
    <CircleIcon>{icon}</CircleIcon>

    <div>
      <h3 className="text-[15px] font-black text-[#102965]">{title}</h3>
      <p className="mt-1 max-w-[260px] text-[12px] leading-5 text-[#607690]">
        {text}
      </p>
    </div>
  </div>
);

export default function IntegrationsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          SHARED HEADER
      ====================================================== */}

      <Header active="integrations" />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f2f8ff] to-[#dceeff]">
        {/* GRID */}

        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.035) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute -left-[150px] top-[60px] h-[330px] w-[330px] rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute -right-[120px] top-[180px] h-[360px] w-[360px] rounded-full bg-blue-200/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] gap-12 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10 lg:py-16">
          {/* HERO LEFT */}

          <div className="max-w-[580px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              Bring Your ITSM Ecosystem Together
            </div>

            <h1 className="mt-5 font-black leading-[0.98] tracking-[-0.055em] text-[#102965]">
              <span className="block text-[49px] lg:text-[57px]">
                Connect All Your ITSM
              </span>

              <span className="block text-[49px] lg:text-[57px]">
                Tools Into One
              </span>

              <span className="mt-2 block whitespace-nowrap text-[41px] text-[#2563ff] lg:text-[46px]">
                Unified Data Flow
              </span>
            </h1>

            <p className="mt-6 max-w-[570px] text-[17px] leading-[1.58] text-[#526a91]">
              SUFURIVRO connects your ITSM platforms through secure APIs,
              centralizes your data in Microsoft Fabric, and powers powerful
              analytics in Power BI — so you can go from data to decisions,
              faster.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex h-[52px] min-w-[178px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-[14px] font-bold text-white shadow-[0_12px_24px_rgba(249,115,22,.25)] transition hover:-translate-y-0.5"
              >
                Request Demo
                <ArrowRight size={16} />
              </a>

              <a
                href="#integration-journey"
                className="inline-flex h-[52px] min-w-[175px] items-center justify-center rounded-xl border border-blue-400 bg-white px-7 text-[14px] font-bold text-blue-700 transition hover:-translate-y-0.5"
              >
                See Integrations
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[11px] font-medium text-[#465f82]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Check size={17} strokeWidth={3} />
                </div>
                API-based integration
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Gauge size={17} />
                </div>
                Real-time ready
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Check size={17} strokeWidth={3} />
                </div>
                Power BI ready
              </div>
            </div>
          </div>

          {/* =====================================================
              HERO FLOW DIAGRAM
          ====================================================== */}

          <div className="rounded-[22px] border border-blue-100 bg-white/90 p-5 shadow-[0_28px_70px_rgba(30,77,130,.14)] backdrop-blur">
            <div className="grid gap-5 lg:grid-cols-[0.85fr_.65fr_1fr_1fr] lg:items-center">
              {/* SOURCES */}

              <div className="space-y-3">
                {[
                  {
                    logo: "/logos/servicenow.png",
                    name: "ServiceNow",
                  },
                  {
                    logo: "/logos/jira.svg",
                    name: "Jira Service Management",
                  },
                  {
                    logo: "/logos/freshservice.png",
                    name: "Freshservice",
                  },
                  {
                    logo: "/logos/bmc.svg",
                    name: "BMC Helix",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex min-h-[54px] items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 shadow-[0_5px_15px_rgba(30,60,110,.04)]"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-8 w-8 object-contain"
                    />

                    <span className="text-[11px] font-bold text-[#31547d]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* API */}

              <div className="relative flex justify-center">
                <div className="relative z-10 flex h-[112px] w-[112px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#eef6ff] to-[#e6f0ff] text-center shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Network size={22} />
                  </div>

                  <div className="mt-2 text-[15px] font-black text-[#102965]">
                    API
                  </div>

                  <div className="mt-1 text-[9px] leading-3 text-[#607690]">
                    Secure APIs
                    <br />& Data Pipeline
                  </div>
                </div>

                {/* dotted incoming connectors */}

                <div className="absolute left-[-18px] top-[14px] hidden h-[82px] w-[56px] border-r-2 border-dotted border-blue-400 lg:block" />
              </div>

              {/* FABRIC */}

              <div className="relative rounded-[15px] border border-blue-100 bg-white px-4 py-5 text-center shadow-sm">
                <img
                  src="/logos/fabric.png"
                  alt="Microsoft Fabric"
                  className="mx-auto h-[48px] w-[48px] object-contain"
                />

                <div className="mt-3 text-[13px] font-black text-[#102965]">
                  Microsoft Fabric
                </div>

                <div className="mt-4 space-y-3 text-left text-[10px] text-[#455f83]">
                  <div className="flex items-center gap-2">
                    <Database size={14} className="text-blue-600" />
                    OneLake
                  </div>

                  <div className="flex items-center gap-2">
                    <Database size={14} className="text-blue-600" />
                    Data Warehouse
                  </div>

                  <div className="flex items-center gap-2">
                    <Layers3 size={14} className="text-blue-600" />
                    Semantic Model
                  </div>
                </div>

                <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 text-3xl text-blue-600 lg:block">
                  →
                </div>
              </div>

              {/* POWER BI */}

              <div className="relative rounded-[15px] border border-blue-100 bg-white px-4 py-5 text-center shadow-sm">
                <img
                  src="/logos/powerbi.svg"
                  alt="Power BI"
                  className="mx-auto h-[48px] w-[48px] object-contain"
                />

                <div className="mt-3 text-[13px] font-black text-[#102965]">
                  Power BI
                </div>

                <div className="mt-4 space-y-3 text-left text-[10px] text-[#455f83]">
                  <div className="flex items-center gap-2">
                    <BarChart3 size={14} className="text-blue-600" />
                    Dashboards
                  </div>

                  <div className="flex items-center gap-2">
                    <UsersRound size={14} className="text-blue-600" />
                    Self-Service
                  </div>

                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-blue-600" />
                    Actionable Insights
                  </div>
                </div>

                <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 text-3xl text-blue-600 lg:block">
                  →
                </div>
              </div>
            </div>

            {/* JOURNEY LINE */}

            <div className="relative mt-7 hidden px-8 lg:block">
              <div className="absolute left-[11%] right-[7%] top-[5px] h-px bg-blue-400" />

              <div className="relative grid grid-cols-3 text-center text-[10px] font-bold text-[#102965]">
                {["Connect", "Centralize", "Analyze"].map((item) => (
                  <div key={item}>
                    <div className="mx-auto mb-2 h-[9px] w-[9px] rounded-full bg-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATION JOURNEY
      ====================================================== */}

      <section id="integration-journey" className="py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
              The Integration Journey
            </div>

            <h2 className="mt-2 text-[32px] font-black tracking-[-0.035em] text-[#102965]">
              One Integration Layer. Many Possibilities.
            </h2>

            <p className="mt-1 text-[14px] text-[#607690]">
              A simple, powerful flow from your ITSM tools to enterprise-ready
              analytics.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {/* STEP 1 */}

            <div className="relative rounded-[16px] border border-blue-100 bg-white p-6 shadow-[0_4px_16px_rgba(20,60,120,.035)]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                  1
                </div>

                <div>
                  <div className="text-[14px] font-black text-[#102965]">
                    ITSM Sources
                  </div>
                  <div className="text-[10px] text-[#607690]">
                    Connect your existing tools
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ["/logos/servicenow.png", "ServiceNow"],
                  ["/logos/jira.svg", "Jira Service Management"],
                  ["/logos/freshservice.png", "Freshservice"],
                  ["/logos/bmc.svg", "BMC Helix"],
                ].map(([logo, name]) => (
                  <div key={name} className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt={name}
                      className="h-6 w-6 object-contain"
                    />
                    <span className="text-[12px] font-medium text-[#38577c]">
                      {name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute -right-7 top-1/2 z-10 hidden -translate-y-1/2 text-[35px] text-blue-500 lg:block">
                →
              </div>
            </div>

            {/* STEP 2 */}

            <div className="relative rounded-[16px] border border-blue-100 bg-white p-6 shadow-[0_4px_16px_rgba(20,60,120,.035)]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                  2
                </div>

                <div>
                  <div className="text-[14px] font-black text-[#102965]">
                    API & Data Pipeline
                  </div>
                  <div className="text-[10px] text-[#607690]">
                    Ingest, prepare and unify
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <FlowCheck>Secure API connectors</FlowCheck>
                <FlowCheck>Incremental loads</FlowCheck>
                <FlowCheck>Validation & enrichment</FlowCheck>
                <FlowCheck>Unified data model</FlowCheck>
              </div>

              <div className="absolute -right-7 top-1/2 z-10 hidden -translate-y-1/2 text-[35px] text-blue-500 lg:block">
                →
              </div>
            </div>

            {/* STEP 3 */}

            <div className="relative rounded-[16px] border border-blue-100 bg-white p-6 shadow-[0_4px_16px_rgba(20,60,120,.035)]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                  3
                </div>

                <div>
                  <div className="text-[14px] font-black text-[#102965]">
                    Microsoft Fabric
                  </div>
                  <div className="text-[10px] text-[#607690]">
                    Scale with a modern data platform
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <FlowCheck>OneLake / data warehouse</FlowCheck>
                <FlowCheck>Scalable and secure</FlowCheck>
                <FlowCheck>Business-ready semantic model</FlowCheck>
                <FlowCheck>Optimized for analytics</FlowCheck>
              </div>

              <div className="absolute -right-7 top-1/2 z-10 hidden -translate-y-1/2 text-[35px] text-blue-500 lg:block">
                →
              </div>
            </div>

            {/* STEP 4 */}

            <div className="rounded-[16px] border border-blue-100 bg-white p-6 shadow-[0_4px_16px_rgba(20,60,120,.035)]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                  4
                </div>

                <div>
                  <div className="text-[14px] font-black text-[#102965]">
                    Power BI & Self-Service
                  </div>
                  <div className="text-[10px] text-[#607690]">
                    Turn data into insights
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <FlowCheck>Ready-to-use dashboards</FlowCheck>
                <FlowCheck>Ad-hoc analysis</FlowCheck>
                <FlowCheck>Drill-down reporting</FlowCheck>
                <FlowCheck>Business user access</FlowCheck>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE / INTEGRATION HUB
      ====================================================== */}

      <section className="pb-14">
        <div className="mx-auto grid max-w-[1450px] gap-12 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-10">
          {/* LEFT */}

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
              Why Choose SUFURIVRO
            </div>

            <h2 className="mt-3 max-w-[520px] text-[37px] font-black leading-[1.05] tracking-[-0.04em] text-[#102965]">
              Built for Flexible
              <span className="block">Enterprise Integrations.</span>
            </h2>

            <div className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              <Benefit
                icon={<Zap size={22} />}
                title="Connect fast"
                text="Pre-built connectors and secure APIs get you up and running quickly."
              />

              <Benefit
                icon={<ShieldCheck size={22} />}
                title="Govern securely"
                text="Enterprise-grade security, data governance and compliance."
              />

              <Benefit
                icon={<BarChart3 size={22} />}
                title="Scale easily"
                text="Handle growing data volumes across multiple ITSM tools."
              />

              <Benefit
                icon={<UsersRound size={22} />}
                title="Analyze everywhere"
                text="Empower technical and business users with self-service analytics."
              />
            </div>
          </div>

          {/* =====================================================
              INTEGRATION HUB DASHBOARD
          ====================================================== */}

          <div className="rounded-[18px] border border-blue-100 bg-white p-3 shadow-[0_24px_60px_rgba(25,70,125,.12)]">
            {/* APP HEADER */}

            <div className="flex items-center justify-between border-b border-slate-100 px-3 pb-3">
              <div className="flex items-center gap-4">
                <img
                  src="/logo/logo.png"
                  alt="SUFURIVRO"
                  className="h-[26px] w-auto"
                />

                <div className="text-[13px] font-black text-[#102965]">
                  Integration Hub
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="text-[8px] text-slate-400">
                  Last sync: 10 minutes ago
                </div>

                <div className="rounded-full bg-emerald-50 px-3 py-1 text-[8px] font-bold text-emerald-600">
                  ● All Systems Operational
                </div>
              </div>
            </div>

            <div className="grid min-h-[330px] grid-cols-[110px_1fr]">
              {/* SIDEBAR */}

              <aside className="border-r border-slate-100 bg-[#f8fbff] p-3">
                <div className="space-y-1 text-[8px] text-[#607690]">
                  {[
                    "Overview",
                    "Connections",
                    "Data Pipeline",
                    "Data Model",
                    "Sync History",
                    "Monitoring",
                    "Settings",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-md px-2 py-2 ${
                        index === 0
                          ? "bg-blue-100 font-bold text-blue-700"
                          : ""
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>

              {/* MAIN */}

              <div className="bg-[#fbfdff] p-3">
                {/* KPI */}

                <div className="grid grid-cols-4 gap-2">
                  {[
                    ["Connected Systems", "4", ""],
                    ["Records Synced", "2.3M", "↑ 12% this week"],
                    ["Sync Success Rate", "98.7%", ""],
                    ["Avg. Sync Time", "12 min", ""],
                  ].map(([label, value, sub]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-100 bg-white px-3 py-3"
                    >
                      <div className="text-[7px] text-slate-500">{label}</div>
                      <div className="mt-1 text-[17px] font-black text-[#102965]">
                        {value}
                      </div>
                      {sub && (
                        <div className="mt-1 text-[7px] font-bold text-emerald-600">
                          {sub}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* CHARTS */}

                <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_1fr_.92fr]">
                  {/* DATA VOLUME */}

                  <div className="rounded-xl border border-blue-100 bg-white p-3">
                    <div className="text-[9px] font-black text-[#102965]">
                      Data Volume by Source
                    </div>

                    <div className="mt-4 flex h-[120px] items-end gap-3">
                      {[
                        [50, "ServiceNow"],
                        [75, "Jira"],
                        [102, "Freshservice"],
                        [72, "BMC Helix"],
                      ].map(([height, label]) => (
                        <div
                          key={label as string}
                          className="flex flex-1 flex-col items-center justify-end"
                        >
                          <div
                            className="w-full rounded-t bg-gradient-to-t from-blue-600 to-blue-300"
                            style={{ height: height as number }}
                          />

                          <span className="mt-2 whitespace-nowrap text-[6px] text-slate-400">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DONUT */}

                  <div className="rounded-xl border border-blue-100 bg-white p-3">
                    <div className="text-[9px] font-black text-[#102965]">
                      Records by Category
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-5">
                      <div className="relative h-[115px] w-[115px] shrink-0 rounded-full bg-[conic-gradient(#2458dc_0_42%,#4c8fff_42%_70%,#ff991f_70%_88%,#a5c8ff_88%_96%,#dce9ff_96%_100%)]">
                        <div className="absolute inset-[25px] flex items-center justify-center rounded-full bg-white">
                          <div className="text-center">
                            <div className="text-[16px] font-black text-[#102965]">
                              2.3M
                            </div>
                            <div className="text-[6px] text-slate-400">
                              Total Records
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-[7px] text-slate-500">
                        {[
                          ["Incidents", "42%"],
                          ["Requests", "28%"],
                          ["Changes", "18%"],
                          ["Problems", "8%"],
                          ["Other", "4%"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="flex min-w-[95px] justify-between gap-3"
                          >
                            <span>{label}</span>
                            <span className="font-bold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* STATUS */}

                  <div className="rounded-xl border border-blue-100 bg-white p-3">
                    <div className="text-[9px] font-black text-[#102965]">
                      Connection Status
                    </div>

                    <div className="mt-4 space-y-4">
                      {[
                        ["/logos/servicenow.png", "ServiceNow"],
                        ["/logos/jira.svg", "Jira Service Management"],
                        ["/logos/freshservice.png", "Freshservice"],
                        ["/logos/bmc.svg", "BMC Helix"],
                      ].map(([logo, name]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={logo}
                              alt={name}
                              className="h-4 w-4 object-contain"
                            />
                            <span className="text-[7px] text-slate-500">
                              {name}
                            </span>
                          </div>

                          <span className="text-[7px] font-bold text-emerald-600">
                            ● Connected
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY LOGOS
      ====================================================== */}

      <section className="px-6 pb-6 lg:px-10">
        <div className="mx-auto max-w-[1450px]">
          <div className="text-center text-[9px] font-black uppercase tracking-[0.3em] text-blue-400">
            Works With Your Existing ITSM Stack
          </div>

          <div className="mt-5 grid items-center gap-6 md:grid-cols-3 xl:grid-cols-6">
            <div className="flex justify-center xl:border-r xl:border-slate-200">
              <img
                src="/logos/servicenow.png"
                alt="ServiceNow"
                className="max-h-[36px] max-w-[150px] object-contain"
              />
            </div>

            <div className="flex items-center justify-center gap-2 xl:border-r xl:border-slate-200">
              <img
                src="/logos/jira.svg"
                alt="Jira"
                className="h-7 w-7 object-contain"
              />

              <span className="text-[14px] font-medium text-[#31547d]">
                Jira Service Management
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 xl:border-r xl:border-slate-200">
              <img
                src="/logos/freshservice.png"
                alt="Freshservice"
                className="h-8 w-8 object-contain"
              />

              <span className="text-[16px] font-medium text-[#31547d]">
                Freshservice
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 xl:border-r xl:border-slate-200">
              <img
                src="/logos/bmc.svg"
                alt="BMC Helix"
                className="h-8 w-8 object-contain"
              />

              <span className="text-[16px] font-black text-[#31547d]">
                BMC Helix
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 xl:border-r xl:border-slate-200">
              <img
                src="/logos/fabric.png"
                alt="Microsoft Fabric"
                className="h-9 w-9 object-contain"
              />

              <span className="text-[14px] font-medium text-[#31547d]">
                Microsoft Fabric
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <img
                src="/logos/powerbi.svg"
                alt="Power BI"
                className="h-9 w-9 object-contain"
              />

              <span className="text-[17px] font-medium text-[#31547d]">
                Power BI
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 pb-9 lg:px-10">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[17px] bg-gradient-to-r from-[#07317b] via-[#0a56c7] to-[#1371f2] px-10 py-7 text-white">
          {/* DECORATIVE BARS */}

          <div className="absolute bottom-0 left-16 flex items-end gap-5 opacity-20">
            {[45, 75, 105, 68].map((height, index) => (
              <div
                key={index}
                className="w-8 rounded-t bg-blue-100"
                style={{ height }}
              />
            ))}
          </div>

          <div className="absolute bottom-2 left-[210px] hidden opacity-30 lg:block">
            <svg width="240" height="90" viewBox="0 0 240 90">
              <polyline
                points="0,70 40,45 80,60 120,25 160,48 200,18 240,35"
                fill="none"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </div>

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:ml-[500px]">
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-200">
                Turn Your ITSM Data Into a Brighter Tomorrow
              </div>

              <h2 className="mt-2 text-[26px] font-black">
                Ready to Integrate Your ITSM Data?
              </h2>

              <p className="mt-1 text-[12px] text-blue-100">
                Turn disconnected service tools into one reporting-ready
                platform with SUFURIVRO.
              </p>
            </div>

            <a
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-[14px] font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Book a Demo
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SHARED FOOTER
      ====================================================== */}

      <Footer active="integrations" />
    </main>
  );
}