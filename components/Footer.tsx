type FooterProps = {
  active?:
    | "product"
    | "servicenow"
    | "itsm"
    | "fabric"
    | "integrations"
    | "reporting"
    | "dashboards"
    | "features"
    | "contact";
};

export default function Footer({ active }: FooterProps) {
  const normal =
    "whitespace-nowrap transition hover:text-blue-600";

  const selected =
    "whitespace-nowrap font-semibold text-blue-700";

  return (
    <footer className="border-t border-blue-50 bg-white">
      <div className="mx-auto flex max-w-[1450px] flex-col gap-8 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

        {/* LOGO */}

        <div className="flex items-center">
          <a href="/">
            <img
              src="/logo/logo.png"
              alt="SUFURIVRO"
              className="h-[44px] w-auto object-contain"
            />
          </a>
        </div>

        {/* FOOTER NAVIGATION */}

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">

          <a
            href="/#product"
            className={active === "product" ? selected : normal}
          >
            Product
          </a>

          <a
            href="/servicenow-power-bi"
            className={active === "servicenow" ? selected : normal}
          >
            ServiceNow Power BI
          </a>

          <a
            href="/itsm-analytics"
            className={active === "itsm" ? selected : normal}
          >
            ITSM Analytics
          </a>

          <a
            href="/microsoft-fabric-itsm"
            className={active === "fabric" ? selected : normal}
          >
            Fabric + ITSM
          </a>

<a
  href="/integrations"
  className={active === "integrations" ? selected : normal}
>
  Integrations
</a>

          <a
  href="/self-service-reporting"
  className={active === "reporting" ? selected : normal}
>
  Self-Service Reporting
</a>

          <a
            href="/#dashboards"
            className={active === "dashboards" ? selected : normal}
          >
            Dashboards
          </a>

          <a
            href="/#features"
            className={active === "features" ? selected : normal}
          >
            Features
          </a>

          <a
            href="/#contact"
            className={active === "contact" ? selected : normal}
          >
            Contact
          </a>
        </div>

        {/* COPYRIGHT */}

        <div className="text-xs text-slate-400">
          © 2026 SUFURIVRO by{" "}
          <span className="font-semibold text-blue-700">
            Datamart Information Technologies
          </span>
          . All rights reserved.
        </div>

      </div>
    </footer>
  );
}