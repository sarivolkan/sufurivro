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
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ITSM Integrations & API Data Platform",
  description:
    "Connect ServiceNow, Jira Service Management, Freshservice and BMC Helix through secure APIs. Unify ITSM data in Microsoft Fabric and deliver governed Power BI analytics.",
  alternates: {
    canonical: "https://sufurivro.com/integrations",
  },
  openGraph: {
    title: "ITSM Integrations & API Data Platform | SUFURIVRO",
    description:
      "Build secure API-based ITSM integrations and centralize ServiceNow, Jira, Freshservice and BMC Helix data in Microsoft Fabric for Power BI analytics.",
    url: "https://sufurivro.com/integrations",
    siteName: "SUFURIVRO",
    type: "website",
  },
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

          <div className="max-w-[650px]">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              ITSM API Integration Platform
            </div>

            <h1 className="mt-5 font-black leading-[1.02] tracking-[-0.05em] text-[#102965]">
              <span className="block text-[48px] lg:text-[56px]">
                Connect All Your ITSM Tools
              </span>

              <span className="mt-1 block text-[40px] text-blue-600 lg:text-[46px]">
                Into One Unified Data Flow
              </span>
            </h1>

            <p className="mt-6 max-w-[625px] text-[17px] leading-[1.65] text-[#526a91]">
              Connect ServiceNow, Jira Service Management, Freshservice, BMC
              Helix and other ITSM platforms through secure APIs. SUFURIVRO
              centralizes ITSM data in Microsoft Fabric and makes it available
              for governed Power BI analytics, dashboards and self-service
              reporting.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex h-[54px] min-w-[185px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(249,115,22,.24)] transition hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowRight size={17} />
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
                Secure API integration
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={19} className="text-blue-600" />
                Unified ITSM data
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={19} className="text-blue-600" />
                Power BI ready
              </div>
            </div>
          </div>

          {/* RIGHT FLOW DIAGRAM */}

          <div className="rounded-[24px] border border-blue-100 bg-white p-6 shadow-[0_28px_70px_rgba(36,85,145,.15)]">
            <div className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-600">
              Unified ITSM Integration Flow
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[.95fr_.55fr_.75fr_.7fr] lg:items-center">
              {/* SOURCES */}

              <div className="rounded-2xl border border-blue-100 bg-[#f9fcff] p-4">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#102965]">
                  ITSM Sources
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex h-[44px] items-center justify-center rounded-lg border border-blue-50 bg-white px-3">
                    <img
                      src="/logos/servicenow.png"
                      alt="ServiceNow API integration"
                      className="max-h-[27px] max-w-[120px] object-contain"
                    />
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-blue-50 bg-white px-3 py-3">
                    <img
                      src="/logos/jira.svg"
                      alt="Jira Service Management integration"
                      className="h-[20px] w-[20px]"
                    />

                    <span className="text-[8px] font-semibold text-[#365477]">
                      Jira Service Management
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-blue-50 bg-white px-3 py-3">
                    <img
                      src="/logos/freshservice.png"
                      alt="Freshservice integration"
                      className="h-[20px] w-[20px]"
                    />

                    <span className="text-[9px] font-semibold text-[#365477]">
                      Freshservice
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-blue-50 bg-white px-3 py-3">
                    <img
                      src="/logos/bmc.svg"
                      alt="BMC Helix integration"
                      className="h-[20px] w-[20px]"
                    />

                    <span className="text-[9px] font-semibold text-[#365477]">
                      BMC Helix
                    </span>
                  </div>
                </div>
              </div>

              {/* API */}

              <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Link2 size={23} />
                </div>

                <div className="mt-3 text-[11px] font-black text-[#102965]">
                  Secure API
                </div>

                <div className="mt-1 text-[8px] leading-4 text-[#607690]">
                  Automated
                  <br />
                  data ingestion
                </div>
              </div>

              {/* FABRIC */}

              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-center">
                <img
                  src="/logos/fabric.png"
                  alt="Microsoft Fabric ITSM integration"
                  className="mx-auto h-[37px] w-auto object-contain"
                />

                <div className="mt-3 text-[11px] font-black text-[#102965]">
                  Microsoft Fabric
                </div>

                <div className="mt-1 text-[8px] leading-4 text-[#607690]">
                  Centralize
                  <br />
                  transform & model
                </div>
              </div>

              {/* POWER BI */}

              <div className="rounded-2xl border border-yellow-100 bg-yellow-50/70 p-4 text-center">
                <img
                  src="/logos/powerbi.svg"
                  alt="Power BI ITSM integration"
                  className="mx-auto h-[37px] w-auto object-contain"
                />

                <div className="mt-3 text-[11px] font-black text-[#102965]">
                  Power BI
                </div>

                <div className="mt-1 text-[8px] leading-4 text-[#607690]">
                  Dashboards
                  <br />
                  & self-service BI
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-blue-100 bg-[#f8fbff] px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-bold text-[#365477]">
                <span>Connect</span>
                <ArrowRight size={14} className="text-blue-400" />
                <span>Ingest</span>
                <ArrowRight size={14} className="text-blue-400" />
                <span>Transform</span>
                <ArrowRight size={14} className="text-blue-400" />
                <span>Model</span>
                <ArrowRight size={14} className="text-blue-400" />
                <span>Visualize</span>
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
              Complete Integration. Real Insights.
            </div>

            <h2 className="mt-3 text-[36px] font-black tracking-[-0.035em] text-[#102965]">
              End-to-End ITSM Data Integration
            </h2>

            <p className="mx-auto mt-3 max-w-[780px] text-[15px] leading-6 text-[#667c99]">
              From source systems to Microsoft Fabric and Power BI, SUFURIVRO
              creates a secure and reusable ITSM integration architecture.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            <JourneyCard
              no="1"
              icon={<Server size={22} />}
              title="Connect ITSM Sources"
              text="Connect ServiceNow, Jira Service Management, Freshservice, BMC Helix and other service platforms through supported APIs."
            />

            <JourneyCard
              no="2"
              icon={<Network size={22} />}
              title="Ingest Through APIs"
              text="Automate secure API-based ITSM data ingestion without depending on manual exports or isolated reporting processes."
            />

            <JourneyCard
              no="3"
              icon={<Layers3 size={22} />}
              title="Unify in Microsoft Fabric"
              text="Centralize, transform and model ITSM data in Microsoft Fabric to create a governed and reusable analytics foundation."
            />

            <JourneyCard
              no="4"
              icon={<BarChart3 size={22} />}
              title="Deliver Power BI Analytics"
              text="Use unified ITSM data for Power BI dashboards, self-service reporting, operational analytics and executive insights."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          UNIFIED DATA / HUB
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f7fbff] py-16">
        <div className="mx-auto grid max-w-[1450px] gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10">
          {/* LEFT */}

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              Unified ITSM Data
            </div>

            <h2 className="mt-3 text-[35px] font-black leading-tight text-[#102965]">
              One Integration Layer for
              <span className="block text-blue-600">
                Your ITSM Ecosystem
              </span>
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#607690]">
              Instead of maintaining separate reporting pipelines for each ITSM
              platform, SUFURIVRO creates a unified data layer that standardizes
              service management data for analytics and reporting.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Secure API-based integrations",
                "Unified ITSM data model",
                "Centralized Microsoft Fabric architecture",
                "Reusable Power BI semantic models",
                "Cross-platform ITSM reporting",
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

          {/* RIGHT INTEGRATION HUB */}

          <div className="rounded-[22px] border border-blue-100 bg-white p-6 shadow-[0_14px_40px_rgba(20,60,120,.07)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-black text-[#102965]">
                  Integration Hub
                </div>

                <div className="mt-1 text-[9px] text-slate-400">
                  Unified ITSM Data Flow
                </div>
              </div>

              <div className="rounded-full bg-emerald-50 px-3 py-1 text-[8px] font-bold text-emerald-600">
                Connected
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  name: "ServiceNow",
                  status: "API connected",
                  logo: "/logos/servicenow.png",
                },
                {
                  name: "Jira Service Management",
                  status: "API connected",
                  logo: "/logos/jira.svg",
                },
                {
                  name: "Freshservice",
                  status: "API connected",
                  logo: "/logos/freshservice.png",
                },
                {
                  name: "BMC Helix",
                  status: "API connected",
                  logo: "/logos/bmc.svg",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-blue-100 bg-[#fbfdff] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                      <img
                        src={item.logo}
                        alt={`${item.name} ITSM integration`}
                        className="max-h-[27px] max-w-[34px] object-contain"
                      />
                    </div>

                    <div>
                      <div className="text-[11px] font-black text-[#102965]">
                        {item.name}
                      </div>

                      <div className="mt-1 text-[8px] text-emerald-600">
                        ● {item.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Database size={21} />
                </div>

                <div>
                  <div className="text-[11px] font-black text-[#102965]">
                    Unified Data Model
                  </div>

                  <div className="mt-1 text-[9px] leading-4 text-[#607690]">
                    Standardized incidents, requests, SLA, problems, changes
                    and service metrics.
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

      <section className="py-20">
        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
          <div className="text-[11px] font-black uppercase tracking-[0.26em] text-blue-600">
            Real Efficiency. Lasting Impact.
          </div>

          <h2 className="mt-3 text-[36px] font-black text-[#102965]">
            Why Teams Choose SUFURIVRO for ITSM Integrations
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <Database size={22} />,
                title: "One Source of Truth",
                text: "Unify data from multiple ITSM platforms for consistent, governed and reliable analytics.",
              },
              {
                icon: <Zap size={22} />,
                title: "Reduce Manual Reporting",
                text: "Automate ITSM data integration and reduce recurring exports, spreadsheets and manual reporting work.",
                orange: true,
              },
              {
                icon: <Eye size={22} />,
                title: "Enable Self-Service Analytics",
                text: "Give IT and business teams trusted access to unified data for Power BI self-service analytics.",
              },
              {
                icon: <Link2 size={22} />,
                title: "Connect Your ITSM Ecosystem",
                text: "Create reusable API-based integrations across ServiceNow, Jira, Freshservice, BMC Helix and other systems.",
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

      <section className="border-y border-blue-100 bg-gradient-to-r from-[#f5faff] via-white to-[#f5faff] py-9">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-[25px] font-black text-[#102965]">
              Connect Leading ITSM Platforms to Microsoft Fabric and Power BI
            </h2>

            <p className="mt-1 text-[13px] text-[#667c99]">
              Build one governed analytics flow across your service management
              ecosystem.
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
                alt="Microsoft Fabric ITSM integration"
                className="max-h-[40px] max-w-[130px] object-contain"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/logos/powerbi.svg"
                alt="Power BI ITSM integration"
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
                Build a Unified ITSM Data Platform
              </div>

              <h2 className="mt-3 text-[31px] font-black">
                Ready to Connect Your ITSM Ecosystem?
              </h2>

              <p className="mt-3 max-w-[760px] text-[13px] leading-6 text-blue-100">
                Connect your ITSM platforms through secure APIs, centralize
                your data in Microsoft Fabric and deliver governed Power BI
                analytics from one unified data foundation.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-[14px] font-black text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
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