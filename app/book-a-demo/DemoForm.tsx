"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      jobTitle: formData.get("jobTitle"),
      itsmPlatform: formData.get("itsmPlatform"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Your request could not be submitted."
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[620px] flex-col items-center justify-center rounded-[26px] border border-blue-100 bg-white p-8 text-center shadow-[0_18px_55px_rgba(20,60,120,.08)]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={38} />
        </div>

        <div className="mt-7 text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
          Demo Request Received
        </div>

        <h2 className="mt-3 text-[32px] font-black text-[#102965]">
          Thank You
        </h2>

        <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-[#607690]">
          Your demo request has been received successfully. Our team will
          review your requirements and contact you to arrange a suitable time
          for your SUFURIVRO demonstration.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex h-[52px] items-center justify-center rounded-xl border border-blue-200 bg-white px-7 text-[14px] font-bold text-blue-700 transition hover:bg-blue-50"
        >
          Back to SUFURIVRO
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-[26px] border border-blue-100 bg-white p-7 shadow-[0_18px_55px_rgba(20,60,120,.08)] lg:p-9">
      <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-600">
        Request Your Demo
      </div>

      <h2 className="mt-3 text-[30px] font-black text-[#102965]">
        Tell Us About Your ITSM Environment
      </h2>

      <p className="mt-2 max-w-[650px] text-[13px] leading-6 text-[#607690]">
        Share a few details and our team will contact you to arrange a
        personalized SUFURIVRO demonstration.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
        {/* HONEYPOT - BOT PROTECTION */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="text-[12px] font-bold text-[#102965]"
            >
              First Name *
            </label>

            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              maxLength={80}
              placeholder="First name"
              className="mt-2 h-[50px] w-full rounded-xl border border-blue-100 bg-[#fbfdff] px-4 text-[13px] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="text-[12px] font-bold text-[#102965]"
            >
              Last Name *
            </label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              maxLength={80}
              placeholder="Last name"
              className="mt-2 h-[50px] w-full rounded-xl border border-blue-100 bg-[#fbfdff] px-4 text-[13px] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="text-[12px] font-bold text-[#102965]"
            >
              Business Email *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={160}
              placeholder="name@company.com"
              className="mt-2 h-[50px] w-full rounded-xl border border-blue-100 bg-[#fbfdff] px-4 text-[13px] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="text-[12px] font-bold text-[#102965]"
            >
              Company *
            </label>

            <input
              id="company"
              name="company"
              type="text"
              required
              maxLength={120}
              placeholder="Company name"
              className="mt-2 h-[50px] w-full rounded-xl border border-blue-100 bg-[#fbfdff] px-4 text-[13px] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="jobTitle"
              className="text-[12px] font-bold text-[#102965]"
            >
              Job Title
            </label>

            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              maxLength={120}
              placeholder="IT Manager, BI Manager..."
              className="mt-2 h-[50px] w-full rounded-xl border border-blue-100 bg-[#fbfdff] px-4 text-[13px] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </div>

          <div>
            <label
              htmlFor="itsmPlatform"
              className="text-[12px] font-bold text-[#102965]"
            >
              ITSM Platform
            </label>

            <select
              id="itsmPlatform"
              name="itsmPlatform"
              defaultValue=""
              className="mt-2 h-[50px] w-full rounded-xl border border-blue-100 bg-[#fbfdff] px-4 text-[13px] text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            >
              <option value="">Select your ITSM platform</option>
              <option value="ServiceNow">ServiceNow</option>
              <option value="Jira Service Management">
                Jira Service Management
              </option>
              <option value="Freshservice">Freshservice</option>
              <option value="BMC Helix">BMC Helix</option>
              <option value="Ivanti">Ivanti</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="interest"
            className="text-[12px] font-bold text-[#102965]"
          >
            What are you interested in? *
          </label>

          <select
            id="interest"
            name="interest"
            required
            defaultValue=""
            className="mt-2 h-[50px] w-full rounded-xl border border-blue-100 bg-[#fbfdff] px-4 text-[13px] text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          >
            <option value="" disabled>
              Select an area
            </option>

            <option value="ITSM Analytics">ITSM Analytics</option>
            <option value="ServiceNow + Power BI">
              ServiceNow + Power BI
            </option>
            <option value="Microsoft Fabric + ITSM">
              Microsoft Fabric + ITSM
            </option>
            <option value="Self-Service Reporting">
              Self-Service Reporting
            </option>
            <option value="ITSM Integrations">
              ITSM Integrations
            </option>
            <option value="Power BI Dashboards">
              Power BI Dashboards
            </option>
            <option value="Custom Solution">
              Custom Solution
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-[12px] font-bold text-[#102965]"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={3000}
            placeholder="Tell us briefly about your reporting or analytics needs..."
            className="mt-2 w-full resize-none rounded-xl border border-blue-100 bg-[#fbfdff] px-4 py-4 text-[13px] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1"
          />

          <label
            htmlFor="consent"
            className="text-[11px] leading-5 text-slate-500"
          >
            I agree that SUFURIVRO may contact me regarding my demo request
            and related product information.
          </label>
        </div>

        {status === "error" && (
          <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-[12px] font-medium text-red-700">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 inline-flex h-[54px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-[15px] font-black text-white shadow-[0_12px_24px_rgba(249,115,22,.24)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Request a Demo
              <ArrowRight size={17} />
            </>
          )}
        </button>

        <div className="text-center text-[10px] text-slate-400">
          No obligation. We&apos;ll contact you to arrange a suitable time.
        </div>
      </form>
    </div>
  );
}