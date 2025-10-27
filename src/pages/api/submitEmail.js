import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';

const spreadsheetId = '1ua_1aFQdrigCJnTp7udCOVAEIvWOuo8rsg8zP6X_tF8';

// Authenticate Google Sheets
async function authenticate() {
  const auth = new JWT({
    email: "point-of@sound-chalice-454207-e8.iam.gserviceaccount.com",
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWVG+YCPkORhH8\nq583OFnYjlUADf4LsBryVa9K/aL1nuNaRBlCNGYpRGHPCtPLvgcm2OTHGrXtQuuD\nZL1Jf/YhDYVRd5gDwK4ONbaX25arhekjUMPcWGo6TwE5rebamrGRbNl0oNxUlGJk\nWnITNMsyjcOrqniOsvJHE+4LqQxeuSh+tHGkS2IPb28EKyYSBy6O3gD4C9taHJLw\nFYiF3UHV8Amq3j09Bbu8NWcrnsKvjqGJh9BIEFX1YdpX6OsV/o2oOFnuwwjgtxi9\nU72hhQpofv924bfd9FFKyfXUWSHrsSe98kP4IpGmbK6RG4fG3TnsYrmB0Ua+qWXb\nOABw4mmNAgMBAAECggEAAu2VGNx/4V/LBOVg3gX6dgXbsPsUyix9cd/qYKcNEASu\nv/jYlxoHLWGYGBzJYEwMvpx15EzoYz0s8iu5ph9Yb29ge+Q88UHFAiDYtB+CUUfz\n8QynK/kK5KTaTMHO384ojEEXATcK45jaS8MZOreKB6uMNqFE5N6mam0Ac3iw9X1V\nGyDTn6Kqmi8pwe75KNGS8T0VeROalfIhF37/UdSpBqo9xzKlxSkv0m7TjdlYN/Y+\nYK54JGdSkYjdZXeW9KhS5cEWz0+fJK5mxtbq5k/elSrg7uZMq6NdNQ8lUwWh4Jbc\ncT93WEgBUPcj2aJaQEZp6UAjhB9shtuM7zwpXt7RjwKBgQDTj3oAkLiTSgXkJND2\nD3eTRdBGhxw1c8S2CjRkh4eIPcJUbQI/yHYegyvQmml+qXZ12NobyAOxO42KLT2Y\nWBm7wG21isQguyF1nAKUlqEOTrYAWnBUoBaLXBh6fBYsKbBdCB1WzC4aifJ6tPUT\npAHJQnXNyrsTzpyJpT3YCsV7WwKBgQC16FKoVcvqk7kr/mQYlmsnm0XwjpoU5LIa\nI+5p60lrhBHxhMSh8YLh/KSDrjUm4gDWxd346aUqhTLis3IusZq0z215fkgEEAQ/\ngnGZ572Z0xl/Gv4O7G/Nqzz8kIYp9MtW3ym9ZD0k/hpgoKWf1IKPUJI4LAS4paGb\nxw39rPgLNwKBgFoJ0i6zaRqmgmNal+RhKM7xA3dAwWyuXKXtKecvFyuQvUgZLL/g\nnQTXZqpdTVCu5s+4/vqb4ZZodhC8uF5CAJG7j/WXnWkgu1jGkQKUKO9h6Gu2EeCy\nUWX2SCS48ubQx1KQxYvPUj/RPfWjVjqJrojtVB3FjmEbqdubC/sKeonJAoGACnbU\n2m4lDtd0nX1C0M9GVr7t5Qqu/mixfiN3AYzRamfsiFI05YP5HXrlE9YfpJ73oWM8\ng6cdIzcKWFQuS1VYKvKLv6NuDR3GwMiGNG5KT+D+5HrvBni/bbteBMFjlmJImDS6\nN/TeN5SOe+SB4pHc+NWPs7+EfgK5KzbmLSOYGT0CgYEAyXnJK8MXYPRf5UJvu6g1\nGcs55nj6PRJ655/x/51wYF/UXJ2ML5I+00ar1Jbx+5RQx7rQf+1xqTu1g8tARfGx\nu8/wJsuZ4xdhU7gSi+Jt0EJpGNzKWxyjfgGyT6qjJVOP2mxeArRtr3ckIGRtCotr\nBcNMo93qoyicArFV/HA83b8=\n-----END PRIVATE KEY-----\n",
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, email, phone, city, message } = req.body;

    // ✅ Validation
    if (!fullName || !email || !phone || !city || !message) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    const sheets = await authenticate();

    // ✅ Date handling (India timezone)
    const dateInKolkata = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    const [datePart] = dateInKolkata.split(",");
    const formattedDate = datePart.trim();

    // ✅ Fetch existing rows to check duplicates by email
    const getRows = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:F", // A: Date, B: Name, C: Email, D: Contact, E: City, F: Message
    });

    const rows = getRows.data.values || [];
    const emailColumnIndex = 2; // Column C (Email)
    const existingRowIndex = rows.findIndex(
      (row, index) => index > 0 && row[emailColumnIndex] === email
    );

    // ✅ Create new row with city included
    const newRow = [formattedDate, fullName, email, phone, city, message];

    if (existingRowIndex !== -1) {
      // Update existing row if same email found
      const rowNumber = existingRowIndex + 1;
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `Sheet1!A${rowNumber}:F${rowNumber}`,
        valueInputOption: "RAW",
        requestBody: {
          values: [newRow],
        },
      });
    } else {
      // Append new row
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:F",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
          values: [newRow],
        },
      });
    }

    // ✅ Send Email with City included
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "rohit@wearepointof.com",
        pass: "xnlevxthffekuznx",
      },
    });

    const mailOptions = {
      from: "rohit@wearepointof.com",
      to: ["hello@studioakto.com"],
      subject: "New Contact Form Submission",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #2e2d2b;">
            <div style="padding:20px;background:#f9f9f9;border-radius:8px;">
              <h2 style="color:#2e2d2b;text-align:center;">New StudioAkto  Form Submission</h2>
              <table style="width:100%;border-collapse:collapse;margin-top:20px;">
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Date</b></td><td style="border:1px solid #ddd;padding:8px;">${formattedDate}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Name</b></td><td style="border:1px solid #ddd;padding:8px;">${fullName}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Email</b></td><td style="border:1px solid #ddd;padding:8px;">${email}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Contact</b></td><td style="border:1px solid #ddd;padding:8px;">${phone}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>City</b></td><td style="border:1px solid #ddd;padding:8px;">${city}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Message</b></td><td style="border:1px solid #ddd;padding:8px;white-space:pre-wrap;">${message}</td></tr>
              </table>
              <p style="text-align:center;margin-top:20px;font-size:14px;color:#888;">This is an automated email — please do not reply.</p>
            </div>
          </body>
        </html>
      `,
    };

    await transport.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
