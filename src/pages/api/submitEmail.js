import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';

const spreadsheetId = '1ppnAvCGSXzMP096XsLIaIWc7B0CiCrKjcUnqqX4M6QU';

// Authenticate Google Sheets
async function authenticate() {
  const auth = new JWT({
    email: "zerror-service-email@spartan-thunder-476511-r2.iam.gserviceaccount.com",
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCFq7veMKeJdcCn\nAbaXjT/Yn5JcOBTh4WR1bhCCUGaLOObem9kZ4AbCfeLRbow97WRNnGKwv+6Dm0xs\nmCZgJXpH6GAR1dkUYQfPLcXLnbWE7/bT5nHNlA/Zz2p9k6rcp2c8X9JgsSFyXsnd\nioBlNPA3vzQAjBtO5LFy7tKXk4Lyxwjh3MMtskHJBoiOMo8OJq6r2AnpDD3MBN/K\nJOhpcYD918FY15RJyOPWe6g4aZJqavOFE4U3bMIzDWiBgqsvuzZE9RTK9cWrS0pn\nI6P8HOqzV0wGhorTyiZBPOjcjCBT5hByT+wtBejD3x7IKM98ipIV7AKv0bN6MTHX\nFVsUiIt5AgMBAAECggEANLBHKqMh/rhX+lxeBSnLj08CyW/fp1OJHhKG1l7rtJf2\nxKtIrX7VG0e0ppm9FNHkdgUdD49v7BdETg/BHKfZJcvuRkl1OievBNaFfyeIe8B8\nmfTdScvBXbj4wEv7DuO7eRxKGAvp46OCTV2BE6OExmyLCmYvg274lRWXE+E0vg3t\nVaXmVhXjIQ8ykclEf1mT8rdbp2a7ZdaXChfq2eywADKXbsgzmzXhsfjScML6pVbt\nBzkoUyiewDOfkY3IE5jASwJWbt6l+EPzMRwrvJtJXDUFWqpQ+e0henPGJtL8EvX/\na5fWa8aCJVJ3eOAu0LHJIRmO9gVXzaZ75Opl9qf/0wKBgQC7Xjz8UV8fBV2isNX+\n/dAu0alxoywspEbMLc20ZsKvggyY3v2n7Rt7A5ENbTuQn5PB03Fb+WlLA16+9G8G\nSvAOosBspVXvRBFyKBVEOMy5qgfrD9SlantD7jQrl04KzlNJBcHbSnN9lPCHvPCQ\nfde1P6PRE6USQ56+pGl9NyUrCwKBgQC2ojqUvbDT5qxqKIpZXUsQtrTFwyD8BDrp\n/y7xwPlpXYXIKXcJmO4nBJwkpBIZ8yOOkaMd788w9LREyNNaCi5FT70E2looLm68\nGzVFt3sAyN8aVAuermoZDnMSlGg8vHWLshIuUlKecIPmqYzZzNmzoKCevjyn7BxH\nHUNK6K5WCwKBgAJmD3PPet9Dy1IU33h3OV4QExJAW4VqyPk+MN75Xc6vZIfkeuzW\nbT6i6g1484VDdbnKgi4CQGXUcjcRnAZBmVcmoD4D09jPT0Xd23/XFk/eLGHG/xrr\nBQ72krZoJnie8ZQCvduX1WirKnUiZxYCdmt8mBVKIhfcw8B/DFatCQ3HAoGBAJs6\noh4AaMaCvrLwSD8Si5XmJRod8vAhTE3NBoKWqabDxczOaY3vvSPOyERga75AqU0p\nPgJY7LrIklwQcYuLMa7ZymfQi2axqI8bdRkPjW2qTe6b1tCFoEoxvN7i4wIUkLgu\nn0Nd1zkxmvq3y67nbXY+paanPPjhN1u+ZI7L3DnnAoGAH1ZGXtmPWHKpsIgLIWpu\nVL0aJ3N2KxbV4kQ0sYoBThSxS1mrd93jIksk5xA3E2h+XdEjcsNHnlxwFjG+snIt\n4p4Gj2J6miAkoaXxAgCCW7s/8FD47bG6dKMIRX2vBUJqcWRG37Lql+KlFjIR8y8Y\nRd6D7dBgoifWynOd/eQpoLE=\n-----END PRIVATE KEY-----\n",
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
        user: "hello@zerrorstudios.com",
        pass: "byaqczanjvrarkan",
      },
    });

    const mailOptions = {
      from: "hello@zerrorstudios.com",
      to: ["hello@studioakto.com"],
      subject: "New Contact Form Submission",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #2e2d2b;">
            <div style="padding:20px;background:#f9f9f9;border-radius:8px;">
              <h2 style="color:#2e2d2b;text-align:center;">StudioAkto New Form Submission</h2>
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
