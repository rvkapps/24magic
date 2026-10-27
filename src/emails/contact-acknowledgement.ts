const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export interface ContactAcknowledgementData {
  fullName: string;
  reference: string;
  service: string;
  description: string;
}

export const renderContactAcknowledgementEmail = ({
  fullName,
  reference,
  service,
  description,
}: ContactAcknowledgementData): string => {
  const message = escapeHtml(
    description.length > 300 ? `${description.slice(0, 300)}...` : description,
  );
  const firstName = escapeHtml(fullName.split(/\s+/)[0] || "there");
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#fff8f8;font-family:'Plus Jakarta Sans',Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:24px 32px;border-bottom:4px solid #830036;">
                <a href="https://24magic.in"><img src="https://24magic.in/logo-email.png" alt="24MAGIC" width="88" height="88" style="display:block;width:88px;height:88px;border:0;border-radius:18px;" /></a>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px;font-size:18px;font-weight:700;color:#1f1a1b;">Hi ${firstName},</p>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#584145;">Thank you for contacting 24MAGIC. We have received your message and our team will get back to you as soon as possible.</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px;background:#fff8f8;border-radius:12px;">
                  <tr>
                    <td style="padding:16px 20px;">
                      <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Reference</p>
                      <p style="margin:4px 0 12px;font-size:14px;font-weight:600;color:#1f1a1b;">${escapeHtml(reference)}</p>
                      <p style="margin:0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Service of interest</p>
                      <p style="margin:4px 0 0;font-size:14px;font-weight:600;color:#1f1a1b;">${escapeHtml(service)}</p>${
                        message
                          ? `
                      <p style="margin:12px 0 0;font-size:10px;font-weight:700;color:#830036;text-transform:uppercase;letter-spacing:1px;">Your message</p>
                      <p style="margin:4px 0 0;font-size:14px;line-height:1.5;color:#584145;">${message}</p>`
                          : ""
                      }
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#584145;">If you need to add anything in the meantime, simply reply to this email quoting the reference above.</p>
                <p style="margin:24px 0 0;font-size:15px;line-height:1.6;color:#584145;">Warm regards,<br /><strong style="color:#830036;">The 24MAGIC Team</strong><br /><a href="https://24magic.in" style="color:#830036;">24magic.in</a></p>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:12px;color:#8c7176;">You are receiving this because you submitted the contact form on 24magic.in.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};
