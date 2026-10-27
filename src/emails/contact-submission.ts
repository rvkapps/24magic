const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export interface ContactSubmissionData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  monthlyTx: string;
  description: string;
  plan?: string;
  source?: string;
}

export const renderContactSubmissionEmail = (
  data: ContactSubmissionData,
): string => {
  const d = {
    fullName: escapeHtml(data.fullName),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone || "—"),
    company: escapeHtml(data.company || "—"),
    service: escapeHtml(data.service),
    monthlyTx: escapeHtml(data.monthlyTx),
    description: escapeHtml(data.description || "—"),
  };
  const extraRow = (label: string, value?: string) =>
    value
      ? `
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #dfbfc340;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">${label}</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#1f1a1b;font-weight:600;">${escapeHtml(value)}</p>
                  </td>
                </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#fff8f8;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#fff8f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#ffffff;border-radius:16px;border:1px solid #dfbfc366;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg,#830036,#a61d4c);padding:28px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">
                New Contact Form Submission
              </h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">
                24MAGIC.in
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px;">
              <p style="margin:0 0 20px;color:#584145;font-size:14px;line-height:1.6;">
                A new inquiry has been submitted through the contact form.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #dfbfc340;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Full Name</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#1f1a1b;font-weight:600;">${d.fullName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #dfbfc340;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Email</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#1f1a1b;font-weight:600;">${d.email}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #dfbfc340;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Phone</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#1f1a1b;font-weight:600;">${d.phone}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #dfbfc340;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Business Name</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#1f1a1b;font-weight:600;">${d.company}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #dfbfc340;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Service Needed</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#1f1a1b;font-weight:600;">${d.service}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #dfbfc340;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Monthly Transactions</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#1f1a1b;font-weight:600;">${d.monthlyTx}</p>
                  </td>
                </tr>
${extraRow("Plan of interest", data.plan)}${extraRow("Came from", data.source)}
                <tr>
                  <td style="padding:12px 0;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Message</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#1f1a1b;line-height:1.6;">${d.description}</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#fbf1f2;border-radius:10px;padding:16px 20px;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#584145;">
                      Reply directly to <a href="mailto:${d.email}" style="color:#830036;font-weight:600;text-decoration:none;">${d.email}</a> to follow up.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 32px;border-top:1px solid #dfbfc340;text-align:center;">
              <p style="margin:0;font-size:11px;color:#58414580;">
                Sent via 24MAGIC Contact Form &bull; <a href="https://24magic.in" style="color:#830036;text-decoration:none;">24magic.in</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};
