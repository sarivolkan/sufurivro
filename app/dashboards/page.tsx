import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  CircleGauge,
  Database,
  Filter,
  Layers3,
  Monitor,
  MousePointer2,
  PieChart,
  Presentation,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ITSM Dashboards & Power BI Service Analytics",
  description:
    "Explore governed ITSM dashboards for incidents, SLA performance, MTTR, service requests, backlog and executive reporting. Built on reusable ITSM semantic models with Microsoft Fabric and Power BI.",
  alternates: {
    canonical: "https://sufurivro.com/dashboards",
  },
  openGraph: {
    title: "ITSM Dashboards & Power BI Service Analytics | SUFURIVRO",
    description:
      "Turn governed ITSM data and standardized KPI definitions into trusted Power BI dashboards for service operations, management and executive reporting.",
    url: "https://sufurivro.com/dashboards",
    siteName: "SUFURIVRO",
    type: "website",
  },
  keywords: [
    "ITSM Dashboards",
    "Power BI ITSM Dashboard",
    "SLA Dashboard",
    "Incident Dashboard",
    "Service Desk Dashboard",
    "ITSM Executive Dashboard",
    "ITSM KPI Dashboard",
    "Microsoft Fabric ITSM Analytics",
    "ITSM Reporting",
  ],
};

const SmallKpi = ({
  label,
  value,
  trend,
  tone = "blue",
}: {
  label: string;
  value: string;
  trend: string;
  tone?: "blue" | "green" | "purple" | "orange";
}) => {
  const tones = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-emerald-100 text-emerald-600",
    purple: "bg-violet-100 text-violet-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="rounded-xl border border-blue-100 bg-white p-3 shadow-[0_4px_14px_rgba(20,60,120,.04)]">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${tones[tone]}`}
        >
          <BarChart3 size={14} />
        </div>

        <div className="text-[8px] font-medium text-slate-500">
          {label}
        </div>
      </div>

      <div className="mt-2 text-[19px] font-black text-[#102965]">
        {value}
      </div>

      <div className="mt-1 text-[8px] font-bold text-emerald-600">
        {trend}
      </div>
    </div>
  );
};

const CheckItem = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2 text-[12px] font-medium text-[#486080]">
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
      <Check size={13} strokeWidth={3} />
    </div>

    {children}
  </div>
);

const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => (
  <div className="rounded-[18px] border border-blue-100 bg-white p-6 shadow-sm">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
      {icon}
    </div>

    <h3 className="mt-5 text-[16px] font-black text-[#102965]">
      {title}
    </h3>

    <p className="mt-2 text-[12px] leading-5 text-[#607690]">
      {text}
    </p>
  </div>
);

export default function DashboardsPage() {
  const heroBars = [46, 75, 58, 92, 78, 108, 94, 135];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header active="dashboards" />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f3f9ff] to-[#dceeff]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.035) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute -left-[160px] top-[90px] h-[400px] w-[400px] rounded-full bg-blue-200/25 blur-3xl" />

        <div className="absolute -right-[120px] top-[20px] h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1500px] gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10 lg:py-20">
          {/* LEFT */}

          <div className="max-w-[650px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              Governed ITSM Dashboards
            </div>

            <div className="mt-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[12px] font-bold text-orange-600">
              Trusted KPIs. Consistent Reporting. Clear Decisions.
            </div>

            <h1 className="mt-5 font-black leading-[1.01] tracking-[-0.05em] text-[#102965]">
              <span className="block text-[48px] lg:text-[56px]">
                ITSM Dashboards Built
              </span>

              <span className="mt-1 block text-[42px] text-blue-600 lg:text-[48px]">
                on a Trusted Analytics Model
              </span>
            </h1>

            <p className="mt-6 max-w-[625px] text-[17px] leading-[1.65] text-[#526a91]">
              Turn standardized ITSM data and governed KPI definitions into
              Power BI dashboards for incident management, SLA performance,
              MTTR, service requests, backlog and executive reporting.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#dashboard-gallery"
                className="inline-flex h-[54px] min-w-[205px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-[14px] font-bold text-white shadow-[0_12px_26px_rgba(249,115,22,.25)] transition hover:-translate-y-0.5"
              >
                Explore Dashboards
                <ArrowRight size={16} />
              </a>

              <a
                href="/book-a-demo"
                className="inline-flex h-[54px] min-w-[190px] items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white px-7 text-[14px] font-bold text-blue-700 transition hover:-translate-y-0.5"
              >
                Book a Demo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
              <CheckItem>Governed KPI definitions</CheckItem>
              <CheckItem>Reusable semantic model</CheckItem>
              <CheckItem>Interactive drill-through</CheckItem>
              <CheckItem>Power BI native</CheckItem>
            </div>
          </div>

          {/* =====================================================
              HERO DASHBOARD
          ====================================================== */}

          <div className="relative">
            <div className="absolute -right-3 -top-3 z-20 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[8px] font-bold text-slate-400 shadow-sm">
              Illustrative sample dashboard
            </div>

            <div className="overflow-hidden rounded-[22px] border border-blue-100 bg-white shadow-[0_30px_70px_rgba(27,64,110,.18)]">
              <div className="grid min-h-[470px] grid-cols-[125px_1fr]">
                {/* SIDEBAR */}

                <aside className="bg-gradient-to-b from-[#092b62] to-[#071e47] p-3 text-white">
                  <div className="flex items-center gap-2 border-b border-blue-800 pb-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 font-black">
                      S
                    </div>

                    <span className="text-[10px] font-black">
                      SUFURIVRO
                    </span>
                  </div>

                  <div className="mt-4 space-y-1 text-[8px]">
                    {[
                      "Overview",
                      "Incidents",
                      "Service Requests",
                      "SLA",
                      "Changes",
                      "Problems",
                      "Reports",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-md px-2 py-2 ${
                          index === 0
                            ? "bg-blue-600 text-white"
                            : "text-blue-100/80"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-blue-800 pt-3">
                    <div className="text-[8px] font-black text-white">
                      Filters
                    </div>

                    {["Date", "Service", "Group", "Priority"].map(
                      (item) => (
                        <div key={item} className="mt-3">
                          <div className="mb-1 text-[6px] text-blue-200">
                            {item}
                          </div>

                          <div className="rounded-md border border-blue-700 bg-blue-950/50 px-2 py-1.5 text-[7px] text-blue-100">
                            All
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </aside>

                {/* CONTENT */}

                <div className="bg-[#f8fbff] p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[15px] font-black text-[#102965]">
                        ITSM Executive Overview
                      </div>

                      <div className="mt-1 text-[8px] text-slate-400">
                        Governed service intelligence
                      </div>
                    </div>

                    <div className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[7px] text-slate-500">
                      Last 30 days
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-4 gap-2">
                    <SmallKpi
                      label="Total Incidents"
                      value="1,248"
                      trend="Sample"
                      tone="blue"
                    />

                    <SmallKpi
                      label="Open Backlog"
                      value="342"
                      trend="Sample"
                      tone="orange"
                    />

                    <SmallKpi
                      label="SLA Compliance"
                      value="94.2%"
                      trend="Sample"
                      tone="green"
                    />

                    <SmallKpi
                      label="Avg. MTTR"
                      value="4.6h"
                      trend="Sample"
                      tone="purple"
                    />
                  </div>

                  <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_.8fr]">
                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        Incident Volume Trend
                      </div>

                      <div className="mt-4 flex h-[145px] items-end gap-2">
                        {heroBars.map((height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-300"
                            style={{ height }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        Incidents by Priority
                      </div>

                      <div className="mt-5 flex justify-center">
                        <div className="relative h-[125px] w-[125px] rounded-full bg-[conic-gradient(#ef4444_0_12%,#f97316_12%_40%,#facc15_40%_82%,#2563eb_82%_100%)]">
                          <div className="absolute inset-[27px] flex items-center justify-center rounded-full bg-white">
                            <div className="text-center">
                              <div className="text-[17px] font-black text-[#102965]">
                                1,248
                              </div>

                              <div className="text-[6px] text-slate-400">
                                Sample
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid gap-3 lg:grid-cols-2">
                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        Service Performance
                      </div>

                      <div className="mt-4 space-y-3">
                        {[
                          ["Email & Collaboration", 92],
                          ["Core Applications", 84],
                          ["Network", 76],
                          ["Employee Services", 69],
                        ].map(([name, width]) => (
                          <div key={name as string}>
                            <div className="mb-1 flex justify-between text-[6px] text-slate-500">
                              <span>{name}</span>
                            </div>

                            <div className="h-2 rounded bg-blue-50">
                              <div
                                className="h-2 rounded bg-blue-500"
                                style={{
                                  width: `${width}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        KPI Foundation
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {[
                          "SLA",
                          "MTTR",
                          "Backlog",
                          "Aging",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-lg bg-blue-50 px-3 py-3 text-center text-[7px] font-bold text-blue-700"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUSTED MODEL
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="mx-auto max-w-[930px] text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              More Than Visualization
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              Dashboards Are Only as Trustworthy
              <span className="block text-blue-600">
                as the Model Behind Them
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[820px] text-[15px] leading-7 text-[#667c99]">
              SUFURIVRO dashboards are designed to sit on top of standardized
              ITSM data, reusable business definitions and governed Power BI
              semantic models. The goal is not just better visuals — it is
              consistent interpretation of service performance.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
              icon={<Database size={23} />}
              title="Standardized Data"
              text="Use consistent incident, SLA, request, service and operational structures across reporting."
            />

            <FeatureCard
              icon={<Target size={23} />}
              title="Governed KPIs"
              text="Keep SLA, MTTR, backlog, aging and service-performance logic consistent across dashboards."
            />

            <FeatureCard
              icon={<Layers3 size={23} />}
              title="Reusable Semantic Model"
              text="Build multiple reports on top of the same trusted Power BI analytical foundation."
            />

            <FeatureCard
              icon={<ShieldCheck size={23} />}
              title="Controlled Self-Service"
              text="Allow teams to explore data without redefining the core service-management metrics."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          DASHBOARD GALLERY
      ====================================================== */}

      <section
        id="dashboard-gallery"
        className="border-y border-blue-100 bg-[#f8fbff] py-20"
      >
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
              ITSM Dashboard Collection
            </div>

            <h2 className="mt-2 text-[35px] font-black text-[#102965]">
              Different Views. One Governed KPI Foundation.
            </h2>

            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-6 text-[#607690]">
              Use specialized reporting views for incidents, SLA performance,
              service requests and executive analytics without rebuilding the
              underlying ITSM logic.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {/* INCIDENT */}

            <div className="overflow-hidden rounded-[20px] border border-blue-100 bg-white shadow-sm">
              <div className="h-[205px] bg-[#f7fbff] p-4">
                <div className="h-full rounded-xl border border-blue-100 bg-white p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-[8px] font-black text-[#102965]">
                      Incident Management
                    </div>

                    <div className="text-[6px] text-slate-400">
                      30 days
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      ["1,248", "Incidents"],
                      ["342", "Backlog"],
                      ["4.6h", "MTTR"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-md border border-blue-100 bg-blue-50/30 p-2"
                      >
                        <div className="text-[10px] font-black text-[#102965]">
                          {value}
                        </div>

                        <div className="mt-1 text-[5px] text-slate-400">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex h-[85px] items-end gap-1.5">
                    {[28, 44, 38, 57, 69, 61, 79, 92].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-300"
                          style={{ height: h }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <BarChart3 size={19} />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-black text-[#102965]">
                      Incident Management
                    </h3>

                    <p className="mt-1 text-[12px] leading-5 text-[#607690]">
                      Analyze volume, backlog, priority, aging, assignment
                      groups and resolution performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA */}

            <div className="overflow-hidden rounded-[20px] border border-blue-100 bg-white shadow-sm">
              <div className="h-[205px] bg-[#f7fbff] p-4">
                <div className="h-full rounded-xl border border-emerald-100 bg-white p-3">
                  <div className="text-[8px] font-black text-[#102965]">
                    SLA Performance
                  </div>

                  <div className="mt-4 flex items-center gap-5">
                    <div className="relative h-[95px] w-[95px] shrink-0 rounded-full bg-[conic-gradient(#10b981_0_94%,#d1fae5_94%_100%)]">
                      <div className="absolute inset-[21px] flex items-center justify-center rounded-full bg-white text-[11px] font-black text-[#102965]">
                        94.2%
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      {[
                        ["Met", 94],
                        ["At Risk", 38],
                        ["Breached", 18],
                      ].map(([name, width]) => (
                        <div key={name as string}>
                          <div className="mb-1 text-[6px] text-slate-500">
                            {name}
                          </div>

                          <div className="h-2 rounded bg-emerald-50">
                            <div
                              className="h-2 rounded bg-emerald-500"
                              style={{
                                width: `${width}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-black text-[#102965]">
                      SLA Performance
                    </h3>

                    <p className="mt-1 text-[12px] leading-5 text-[#607690]">
                      Monitor compliance, breaches, risk and service-level
                      performance using governed SLA definitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* REQUEST */}

            <div className="overflow-hidden rounded-[20px] border border-blue-100 bg-white shadow-sm">
              <div className="h-[205px] bg-[#f7fbff] p-4">
                <div className="h-full rounded-xl border border-violet-100 bg-white p-3">
                  <div className="text-[8px] font-black text-[#102965]">
                    Service Request Analysis
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      ["2,917", "Requests"],
                      ["88%", "Fulfilled"],
                      ["3.1h", "Avg. Time"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-md border border-violet-100 bg-violet-50/30 p-2"
                      >
                        <div className="text-[10px] font-black text-[#102965]">
                          {value}
                        </div>

                        <div className="mt-1 text-[5px] text-slate-400">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex h-[85px] items-end gap-1.5">
                    {[32, 48, 42, 61, 72, 65, 83, 96].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-violet-600 to-violet-300"
                          style={{ height: h }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <Layers3 size={19} />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-black text-[#102965]">
                      Service Request
                    </h3>

                    <p className="mt-1 text-[12px] leading-5 text-[#607690]">
                      Understand demand, fulfillment time, request categories
                      and service consumption patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* EXECUTIVE */}

            <div className="overflow-hidden rounded-[20px] border border-blue-100 bg-white shadow-sm">
              <div className="h-[205px] bg-[#f7fbff] p-4">
                <div className="h-full rounded-xl border border-orange-100 bg-white p-3">
                  <div className="text-[8px] font-black text-[#102965]">
                    Executive Overview
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      ["94.2%", "SLA"],
                      ["4.6h", "MTTR"],
                      ["342", "Backlog"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-md border border-orange-100 bg-orange-50/30 p-2"
                      >
                        <div className="text-[10px] font-black text-[#102965]">
                          {value}
                        </div>

                        <div className="mt-1 text-[5px] text-slate-400">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-center">
                      <div className="relative h-[80px] w-[80px] rounded-full bg-[conic-gradient(#2563eb_0_76%,#f97316_76%_100%)]">
                        <div className="absolute inset-[18px] rounded-full bg-white" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        ["Operations", 88],
                        ["Finance", 75],
                        ["HR", 67],
                      ].map(([name, width]) => (
                        <div key={name as string}>
                          <div className="mb-1 text-[5px] text-slate-500">
                            {name}
                          </div>

                          <div className="h-1.5 rounded bg-blue-50">
                            <div
                              className="h-1.5 rounded bg-blue-500"
                              style={{
                                width: `${width}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <BriefcaseBusiness size={19} />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-black text-[#102965]">
                      Executive Overview
                    </h3>

                    <p className="mt-1 text-[12px] leading-5 text-[#607690]">
                      Give leadership a concise view of service performance
                      using the same governed KPI foundation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center text-[10px] text-slate-400">
            Dashboard values shown on this page are illustrative sample data.
          </div>
        </div>
      </section>

      {/* =====================================================
          STAKEHOLDERS
      ====================================================== */}

      <section id="stakeholders" className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
              One Model. Different Perspectives.
            </div>

            <h2 className="mt-2 text-[34px] font-black text-[#102965]">
              Tailored Views for Every ITSM Stakeholder
            </h2>

            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-6 text-[#607690]">
              Different audiences need different views, but they should not
              need different definitions of the same KPI.
            </p>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {/* SERVICE DESK */}

            <div className="rounded-[20px] border border-blue-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Monitor size={23} />
              </div>

              <h3 className="mt-5 text-[18px] font-black text-[#102965]">
                Service Desk Managers
              </h3>

              <p className="mt-2 text-[13px] leading-6 text-[#607690]">
                Monitor incident volume, backlog, assignment groups, aging and
                resolution performance for day-to-day operations.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-[#f8fbff] p-4">
                <div className="text-[9px] font-black text-[#102965]">
                  Operational Focus
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    "Open backlog",
                    "Ticket aging",
                    "MTTR",
                    "Assignment workload",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[9px] text-[#607690]"
                    >
                      <Check
                        size={12}
                        className="text-blue-600"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* IT LEADERS */}

            <div className="rounded-[20px] border border-blue-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <UsersRound size={23} />
              </div>

              <h3 className="mt-5 text-[18px] font-black text-[#102965]">
                IT Leaders
              </h3>

              <p className="mt-2 text-[13px] leading-6 text-[#607690]">
                Track service health, SLA performance, demand and operational
                trends across services and teams.
              </p>

              <div className="mt-6 rounded-xl bg-gradient-to-br from-[#0b2b58] to-[#061c3d] p-4 text-white">
                <div className="text-[9px] font-black">
                  Management Focus
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    "SLA",
                    "MTTR",
                    "Backlog",
                    "Service Trends",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-blue-800 bg-blue-950/40 p-3 text-center text-[8px] font-semibold text-blue-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BUSINESS */}

            <div className="rounded-[20px] border border-blue-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <BriefcaseBusiness size={23} />
              </div>

              <h3 className="mt-5 text-[18px] font-black text-[#102965]">
                Business Stakeholders
              </h3>

              <p className="mt-2 text-[13px] leading-6 text-[#607690]">
                Understand service demand, availability and performance through
                business-friendly reporting views.
              </p>

              <div className="mt-6 rounded-xl border border-orange-100 bg-orange-50/30 p-4">
                <div className="text-[9px] font-black text-[#102965]">
                  Business Focus
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    "Service performance",
                    "User experience",
                    "Demand trends",
                    "Business service health",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[9px] text-[#607690]"
                    >
                      <Check
                        size={12}
                        className="text-orange-500"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY STAND OUT
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f8fbff] py-16">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="grid gap-8 xl:grid-cols-[.9fr_2.1fr] xl:items-center">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-500">
                Governed by Design
              </div>

              <h2 className="mt-2 text-[29px] font-black text-[#102965]">
                Why SUFURIVRO Dashboards Are Different
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-[#607690]">
                The difference is not another chart. It is the reusable ITSM
                analytics model underneath it.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: <Target size={22} />,
                  title: "Governed KPIs",
                  text: "Use the same business definitions across every dashboard.",
                },
                {
                  icon: <MousePointer2 size={22} />,
                  title: "Interactive Analysis",
                  text: "Move from high-level service KPIs to operational detail.",
                },
                {
                  icon: <Filter size={22} />,
                  title: "Flexible Exploration",
                  text: "Filter and compare performance across services, teams and time.",
                },
                {
                  icon: <Database size={22} />,
                  title: "Reusable Model",
                  text: "Build reporting on a shared Power BI semantic foundation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-blue-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    {item.icon}
                  </div>

                  <div>
                    <div className="text-[11px] font-black text-[#102965]">
                      {item.title}
                    </div>

                    <div className="mt-1 text-[9px] leading-4 text-[#607690]">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE STRIP
      ====================================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              From Data to Dashboard
            </div>

            <h2 className="mt-2 text-[30px] font-black text-[#102965]">
              The Dashboard Is the Last Step — Not the First
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {[
              {
                no: "01",
                icon: <Database size={21} />,
                title: "Centralize",
                text: "Bring ITSM data into Microsoft Fabric.",
              },
              {
                no: "02",
                icon: <Layers3 size={21} />,
                title: "Standardize",
                text: "Create consistent ITSM entities and relationships.",
              },
              {
                no: "03",
                icon: <CircleGauge size={21} />,
                title: "Govern",
                text: "Define reusable KPIs and semantic-model logic.",
              },
              {
                no: "04",
                icon: <Presentation size={21} />,
                title: "Visualize",
                text: "Deliver trusted Power BI dashboards and self-service analytics.",
              },
            ].map((item) => (
              <div
                key={item.no}
                className="rounded-[18px] border border-blue-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    {item.icon}
                  </div>

                  <div className="text-[9px] font-black text-orange-500">
                    {item.no}
                  </div>
                </div>

                <h3 className="mt-4 text-[15px] font-black text-[#102965]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-[#607690]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 pb-10 lg:px-10">
        <div className="relative mx-auto min-h-[175px] max-w-[1450px] overflow-hidden rounded-[22px] bg-gradient-to-r from-[#06317b] via-[#0b64d5] to-[#67b5ff] px-10 py-9 text-white">
          <div className="absolute bottom-0 right-0 opacity-25">
            <svg
              width="530"
              height="165"
              viewBox="0 0 530 165"
              fill="none"
            >
              <path
                d="M70 165L210 45L265 100L330 18L430 120L475 80L530 165H70Z"
                fill="white"
                fillOpacity=".65"
              />

              <path
                d="M190 165L330 18L385 95L430 68L530 165H190Z"
                fill="#dbeafe"
                fillOpacity=".7"
              />
            </svg>
          </div>

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-100">
                Turn Governed Data Into Clear Decisions
              </div>

              <h2 className="mt-3 text-[30px] font-black">
                See What Trusted ITSM Dashboards Can Look Like
              </h2>

              <p className="mt-2 max-w-[730px] text-[12px] leading-6 text-blue-100">
                See how SUFURIVRO combines standardized ITSM data, governed KPI
                definitions and Microsoft Power BI to deliver reusable
                operational and executive analytics.
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

      <Footer active="dashboards" />
    </main>
  );
}