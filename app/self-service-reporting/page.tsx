import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  Check,
  Clock3,
  FileBarChart,
  Gauge,
  Layers3,
  PieChart,
  ShieldCheck,
  UsersRound,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Self-Service ITSM Reporting with Power BI",
  description:
    "Enable self-service ITSM reporting with Microsoft Power BI. Give IT and business users governed access to trusted ITSM data for ad-hoc analysis, dashboards and operational reporting.",
  alternates: {
    canonical: "https://sufurivro.com/self-service-reporting",
  },
  openGraph: {
    title: "Self-Service ITSM Reporting with Power BI | SUFURIVRO",
    description:
      "Empower IT and business users with governed self-service analytics, ad-hoc ITSM reporting and reusable Power BI data models.",
    url: "https://sufurivro.com/self-service-reporting",
    siteName: "SUFURIVRO",
    type: "website",
  },
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
  <div className="rounded-[18px] border border-blue-100 bg-white p-7 shadow-[0_6px_22px_rgba(17,41,101,0.04)]">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
      {icon}
    </div>

    <h3 className="mt-5 text-[18px] font-black text-[#102965]">
      {title}
    </h3>

    <p className="mt-2 text-[14px] leading-6 text-[#526a91]">
      {text}
    </p>
  </div>
);

const KpiCard = ({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) => (
  <div className="rounded-xl border border-blue-100 bg-white p-3 shadow-sm">
    <div className="text-[9px] font-medium text-slate-400">
      {label}
    </div>

    <div className="mt-1 text-[19px] font-black text-[#102965]">
      {value}
    </div>

    <div className="mt-1 text-[8px] font-bold text-emerald-600">
      {change}
    </div>
  </div>
);

export default function SelfServiceReportingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header active="reporting" />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f6fbff] to-[#dfeeff]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute -right-[160px] -top-[160px] h-[600px] w-[600px] rounded-full bg-blue-300/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] gap-14 px-6 py-16 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:px-10 lg:py-20">
          {/* LEFT */}

          <div className="max-w-[650px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              Empower Your Teams With Data
            </div>

            <h1 className="mt-5 font-black leading-[1.02] tracking-[-0.05em] text-[#102965]">
              <span className="block text-[50px] lg:text-[58px]">
                Self-Service Reporting
              </span>

              <span className="mt-1 block text-[42px] text-blue-600 lg:text-[47px]">
                for ITSM and Beyond
              </span>
            </h1>

            <p className="mt-6 max-w-[625px] text-[17px] leading-[1.65] text-[#526a91]">
              Give IT and business users governed access to trusted ITSM data
              with Microsoft Power BI. Enable self-service reporting, ad-hoc
              analysis and custom dashboards without requiring SQL skills or
              constant support from technical teams.
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
                href="#benefits"
                className="inline-flex h-[54px] min-w-[180px] items-center justify-center rounded-xl border border-blue-200 bg-white px-7 text-[15px] font-bold text-blue-700 shadow-[0_8px_18px_rgba(37,99,235,0.06)] transition hover:-translate-y-0.5"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium text-[#395880]">
              <div className="flex items-center gap-2">
                <Zap size={21} className="text-blue-600" />
                No SQL skills required
              </div>

              <div className="flex items-center gap-2">
                <BarChart3 size={21} className="text-blue-600" />
                Ready-to-use data models
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={21} className="text-blue-600" />
                Governed and secure access
              </div>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}

          <div className="relative">
            <div className="rounded-[25px] border border-blue-100 bg-white p-4 shadow-[0_28px_70px_rgba(36,85,145,0.15)]">
              <div className="grid min-h-[420px] grid-cols-[125px_1fr] overflow-hidden rounded-[18px] border border-slate-100">
                {/* SIDEBAR */}

                <div className="bg-[#0d3479] p-4 text-white">
                  <div className="text-[10px] font-black">
                    SUFURIVRO
                  </div>

                  <div className="mt-7 space-y-3 text-[8px] text-blue-100">
                    <div>Home</div>

                    <div className="rounded-md bg-blue-500/30 px-2 py-2 font-bold text-white">
                      Incident Analysis
                    </div>

                    <div>Service Requests</div>
                    <div>SLA Performance</div>
                    <div>User Satisfaction</div>
                    <div>Trends & Forecast</div>
                    <div>Custom Reports</div>
                  </div>

                  <div className="mt-24 space-y-2 text-[7px] text-blue-200">
                    <div>Help</div>
                    <div>Settings</div>
                  </div>
                </div>

                {/* MAIN */}

                <div className="bg-[#f8fbff] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[15px] font-black text-[#102965]">
                        Incident Analysis
                      </div>

                      <div className="mt-1 text-[8px] text-slate-400">
                        Self-service ITSM analytics
                      </div>
                    </div>

                    <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[8px] text-slate-500">
                      Last 12 months
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-2">
                    <KpiCard
                      label="Total Incidents"
                      value="1,248"
                      change="↓ 18%"
                    />

                    <KpiCard
                      label="Resolved"
                      value="1,102"
                      change="↑ 12%"
                    />

                    <KpiCard
                      label="Avg. Resolution"
                      value="6.2 h"
                      change="↓ 40%"
                    />

                    <KpiCard
                      label="SLA Compliance"
                      value="92.4%"
                      change="↑ 6%"
                    />
                  </div>

                  <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_.8fr]">
                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        Incidents Over Time
                      </div>

                      <div className="mt-4 flex h-[110px] items-end gap-1.5">
                        {[45, 72, 62, 92, 78, 108, 85, 118, 96, 105, 88, 120].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t bg-blue-400"
                              style={{ height }}
                            />
                          )
                        )}
                      </div>

                      <div className="mt-2 flex justify-between text-[6px] text-slate-400">
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
                          <span key={month}>{month}</span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="text-[9px] font-black text-[#102965]">
                        Incidents by Category
                      </div>

                      <div className="mt-4 flex justify-center">
                        <div className="relative h-[85px] w-[85px] rounded-full bg-[conic-gradient(#1d4ed8_0_28%,#3b82f6_28%_52%,#60a5fa_52%_70%,#93c5fd_70%_86%,#dbeafe_86%_100%)]">
                          <div className="absolute inset-[18px] rounded-full bg-white" />
                        </div>
                      </div>

                      <div className="mt-3 space-y-1 text-[6px] text-slate-500">
                        <div className="flex justify-between">
                          <span>Software</span>
                          <span>28%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hardware</span>
                          <span>24%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Access</span>
                          <span>18%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl border border-blue-100 bg-white p-3">
                    <div className="text-[9px] font-black text-[#102965]">
                      Top Assigned Groups
                    </div>

                    <div className="mt-3 grid grid-cols-[1.2fr_.5fr_.8fr] border-b border-slate-100 pb-2 text-[6px] font-bold text-slate-400">
                      <div>Group</div>
                      <div>Incidents</div>
                      <div>Avg. Resolution</div>
                    </div>

                    {[
                      ["Service Desk", "420", "4.8 h"],
                      ["Infrastructure", "310", "6.1 h"],
                      ["Applications", "265", "7.2 h"],
                    ].map(([group, incidents, time]) => (
                      <div
                        key={group}
                        className="grid grid-cols-[1.2fr_.5fr_.8fr] border-b border-slate-50 py-2 text-[6px] text-slate-500"
                      >
                        <div>{group}</div>
                        <div>{incidents}</div>
                        <div>{time}</div>
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

      <section id="benefits" className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-600">
              Key Benefits
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              Make ITSM Data Accessible to Everyone
            </h2>

            <p className="mx-auto mt-2 max-w-[760px] text-[15px] leading-6 text-[#667c99]">
              Turn complex ITSM data into trusted, governed insights with
              self-service Power BI reporting.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <BenefitCard
              icon={<UsersRound size={25} />}
              title="Empower Your Users"
              text="Let IT and business users create their own reports, explore ITSM data and answer questions without depending on a reporting team."
            />

            <BenefitCard
              icon={<Clock3 size={25} />}
              title="Save Time"
              text="Reduce recurring report requests and give users faster access to the operational insights they need."
            />

            <BenefitCard
              icon={<ShieldCheck size={25} />}
              title="Stay Consistent"
              text="Use governed semantic models and standardized ITSM KPIs to keep self-service reporting trusted and consistent."
            />

            <BenefitCard
              icon={<Gauge size={25} />}
              title="Focus on What Matters"
              text="Spend less time preparing data and more time analyzing service performance, trends and business outcomes."
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
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              Popular Use Cases
            </div>

            <h2 className="mt-3 text-[34px] font-black text-[#102965]">
              Flexible Self-Service Reporting for Real Business Needs
            </h2>

            <p className="mx-auto mt-2 max-w-[760px] text-[14px] leading-6 text-[#607690]">
              Support operational reporting, management dashboards, ad-hoc
              analysis and department-specific ITSM reporting from one governed
              data model.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <BenefitCard
              icon={<FileBarChart size={25} />}
              title="Operational Reporting"
              text="Track incidents, service requests, changes, SLA performance and operational service metrics."
            />

            <BenefitCard
              icon={<BarChart3 size={25} />}
              title="Management Reporting"
              text="Create ITSM dashboards and executive reports for service managers, IT leaders and business stakeholders."
            />

            <BenefitCard
              icon={<PieChart size={25} />}
              title="Ad-Hoc Analysis"
              text="Explore trends, investigate root causes and answer new business questions without building a report from scratch."
            />

            <BenefitCard
              icon={<Layers3 size={25} />}
              title="Department Reporting"
              text="Allow teams and departments to create their own views while using the same governed ITSM data foundation."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto grid max-w-[1450px] gap-12 px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-10">
          {/* DASHBOARD VISUAL */}

          <div className="relative">
            <div className="rounded-[22px] border border-blue-100 bg-white p-5 shadow-[0_18px_50px_rgba(20,70,140,.10)]">
              <div className="text-[13px] font-black text-[#102965]">
                Service Performance
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <KpiCard
                  label="SLA Compliance"
                  value="92.4%"
                  change="↑ 6%"
                />
                <KpiCard
                  label="Avg. Resolution"
                  value="6.2 h"
                  change="↓ 40%"
                />
                <KpiCard
                  label="Incidents"
                  value="1,248"
                  change="↓ 18%"
                />
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-blue-100 p-4">
                  <div className="text-[10px] font-black text-[#102965]">
                    SLA Compliance
                  </div>

                  <div className="mt-6 flex h-[120px] items-end gap-2">
                    {[74, 83, 79, 88, 91, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-blue-400"
                        style={{ height: h }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-blue-100 p-4">
                  <div className="text-[10px] font-black text-[#102965]">
                    Incidents by Priority
                  </div>

                  <div className="mt-6 space-y-4 text-[8px] text-slate-500">
                    {[
                      ["Critical", 28],
                      ["High", 64],
                      ["Medium", 88],
                      ["Low", 48],
                    ].map(([name, width]) => (
                      <div key={name as string}>
                        <div className="mb-1 flex justify-between">
                          <span>{name}</span>
                        </div>

                        <div className="h-2 rounded-full bg-blue-50">
                          <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-blue-100 p-4">
                <div className="text-[10px] font-black text-[#102965]">
                  Recent Incidents
                </div>

                <div className="mt-3 grid grid-cols-[.8fr_1.5fr_.7fr_.7fr] border-b border-slate-100 pb-2 text-[7px] font-bold text-slate-400">
                  <div>Number</div>
                  <div>Description</div>
                  <div>Priority</div>
                  <div>State</div>
                </div>

                {[
                  ["INC001234", "VPN connection issue", "High", "In Progress"],
                  ["INC001235", "Email not working", "Medium", "Resolved"],
                  ["INC001236", "CRM access request", "Low", "Resolved"],
                ].map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-[.8fr_1.5fr_.7fr_.7fr] border-b border-slate-50 py-2 text-[7px] text-slate-500"
                  >
                    {row.map((cell) => (
                      <div key={cell}>{cell}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STEPS */}

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              How It Works
            </div>

            <h2 className="mt-3 text-[35px] font-black leading-tight text-[#102965]">
              From ITSM Data to Self-Service Insights
              <span className="block text-blue-600">
                in Just a Few Steps
              </span>
            </h2>

            <p className="mt-4 text-[14px] leading-7 text-[#607690]">
              SUFURIVRO centralizes ITSM data, applies governed models and gives
              business users a trusted foundation for Power BI self-service
              analytics.
            </p>

            <div className="mt-7 space-y-5">
              {[
                {
                  no: "1",
                  title: "Connect",
                  text: "Integrate ITSM data sources with Microsoft Fabric through secure data pipelines.",
                },
                {
                  no: "2",
                  title: "Model",
                  text: "Create governed semantic models with consistent ITSM KPIs, measures and relationships.",
                },
                {
                  no: "3",
                  title: "Explore",
                  text: "Let users build their own Power BI reports, dashboards and ad-hoc analyses.",
                },
                {
                  no: "4",
                  title: "Share",
                  text: "Publish and distribute trusted self-service insights securely across the organization.",
                },
              ].map((item) => (
                <div key={item.no} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[12px] font-black text-white">
                    {item.no}
                  </div>

                  <div>
                    <h3 className="text-[15px] font-black text-[#102965]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[12px] leading-5 text-[#607690]">
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
          IMPACT / METRICS
      ====================================================== */}

      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto grid max-w-[1450px] gap-8 rounded-[22px] border border-blue-100 bg-[#f3f9ff] px-8 py-9 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
              Self-Service Analytics Impact
            </div>

            <h2 className="mt-2 text-[27px] font-black text-[#102965]">
              Reduce Reporting Bottlenecks
            </h2>

            <p className="mt-3 max-w-[650px] text-[13px] leading-6 text-[#607690]">
              A governed self-service reporting model can reduce repetitive
              report requests, accelerate analysis and give users more freedom
              to explore trusted ITSM data.
            </p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-blue-100 text-center">
            <div className="px-4">
              <div className="text-[30px] font-black text-blue-600">
                Faster
              </div>
              <div className="mt-1 text-[10px] text-[#607690]">
                reporting
              </div>
            </div>

            <div className="px-4">
              <div className="text-[30px] font-black text-blue-600">
                Fewer
              </div>
              <div className="mt-1 text-[10px] text-[#607690]">
                ad-hoc requests
              </div>
            </div>

            <div className="px-4">
              <div className="text-[30px] font-black text-blue-600">
                More
              </div>
              <div className="mt-1 text-[10px] text-[#607690]">
                user autonomy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 pb-10 lg:px-10">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[24px] bg-gradient-to-r from-[#082b6c] via-[#0e59c5] to-[#2086f2] px-9 py-10 text-white lg:px-12">
          <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-white/10" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-100">
                Ready to Empower Your Teams?
              </div>

              <h2 className="mt-2 text-[31px] font-black">
                Start Your Self-Service ITSM Reporting Journey
              </h2>

              <p className="mt-2 max-w-[730px] text-[12px] leading-6 text-blue-50">
                See how SUFURIVRO can help you deliver governed self-service
                analytics, reusable Power BI models and trusted ITSM reporting
                across your organization.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-[14px] font-bold text-white shadow-lg shadow-blue-950/20 hover:bg-orange-600"
            >
              Book a Demo
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer active="reporting" />
    </main>
  );
}