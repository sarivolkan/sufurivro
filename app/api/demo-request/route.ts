import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function clean(value: unknown, maxLength = 3000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.DEMO_RECIPIENT_EMAIL;
    const fromEmail = process.env.SUFURIVRO_FROM_EMAIL;

    if (!apiKey || !recipient || !fromEmail) {
      console.error("Missing email environment variables", {
        hasApiKey: Boolean(apiKey),
        hasRecipient: Boolean(recipient),
        hasFromEmail: Boolean(fromEmail),
      });

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const firstName = clean(body.firstName, 80);
    const lastName = clean(body.lastName, 80);
    const email = clean(body.email, 160);
    const company = clean(body.company, 120);
    const jobTitle = clean(body.jobTitle, 120);
    const itsmPlatform = clean(body.itsmPlatform, 120);
    const interest = clean(body.interest, 160);
    const message = clean(body.message, 3000);

    const consent = body.consent === true;
    const website = clean(body.website, 200);

    // Honeypot: bot doldurursa gerçek mail göndermeden başarılı dön.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      !firstName ||
      !lastName ||
      !email ||
      !company ||
      !interest ||
      !consent
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid business email address.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeJobTitle = escapeHtml(jobTitle || "Not provided");
    const safePlatform = escapeHtml(itsmPlatform || "Not provided");
    const safeInterest = escapeHtml(interest);
    const safeMessage = escapeHtml(
      message || "No message provided."
    ).replaceAll("\n", "<br />");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: email,

      subject: `New SUFURIVRO Demo Request - ${company}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 680px;
            margin: 0 auto;
            color: #183153;
          "
        >
          <div
            style="
              background: #0b2a66;
              padding: 26px 30px;
              border-radius: 14px 14px 0 0;
            "
          >
            <div
              style="
                color: #ffffff;
                font-size: 24px;
                font-weight: 700;
              "
            >
              New SUFURIVRO Demo Request
            </div>

            <div
              style="
                color: #bdd4ff;
                font-size: 13px;
                margin-top: 7px;
              "
            >
              ITSM Analytics & Service Intelligence Platform
            </div>
          </div>

          <div
            style="
              border: 1px solid #dbeafe;
              border-top: none;
              padding: 30px;
              border-radius: 0 0 14px 14px;
            "
          >
            <table
              style="
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
              "
            >
              <tr>
                <td style="padding:10px 0;font-weight:bold;width:180px;">
                  Name
                </td>
                <td style="padding:10px 0;">
                  ${safeFirstName} ${safeLastName}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Business Email
                </td>
                <td style="padding:10px 0;">
                  ${safeEmail}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Company
                </td>
                <td style="padding:10px 0;">
                  ${safeCompany}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Job Title
                </td>
                <td style="padding:10px 0;">
                  ${safeJobTitle}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  ITSM Platform
                </td>
                <td style="padding:10px 0;">
                  ${safePlatform}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">
                  Interested In
                </td>
                <td style="padding:10px 0;">
                  ${safeInterest}
                </td>
              </tr>
            </table>

            <div
              style="
                margin-top: 25px;
                background: #f6faff;
                border-radius: 10px;
                padding: 20px;
              "
            >
              <div
                style="
                  font-weight: bold;
                  margin-bottom: 10px;
                "
              >
                Message
              </div>

              <div
                style="
                  color: #526a91;
                  line-height: 1.7;
                "
              >
                ${safeMessage}
              </div>
            </div>

            <div
              style="
                margin-top: 25px;
                font-size: 12px;
                color: #8091aa;
              "
            >
              Submitted from sufurivro.com/book-a-demo
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Your request could not be sent. Please try again.",
        },
        { status: 500 }
      );
    }

    console.log("Demo request sent:", data?.id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Demo request API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}