# EmailJS Configuration Guide

This guide will help you set up EmailJS to enable the contact form on your VexarLabs website to send real emails.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Once logged in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Company: {{company}}

Message:
{{message}}

---
This message was sent via the VexarLabs contact form.
```

4. **Template Variables to use:**
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Sender's company (optional)
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (contact@vexarlabs.com)

5. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## Step 5: Update the Contact Form Code

1. Open `/home/ubuntu/vexarlabs/client/src/pages/Contact.tsx`
2. Find lines 42-44 and replace the placeholder values:

```typescript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

**Example:**
```typescript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'xYz123AbC456DeF789';
```

## Step 6: Test the Contact Form

1. Save the file
2. Go to your website: `https://3000-iyijqim90z9ni2hhzqz4z-58d90854.us1.manus.computer/contact`
3. Fill out the contact form and submit
4. Check your email inbox for the message

## Troubleshooting

### Emails not sending?
- Verify all three IDs (Service ID, Template ID, Public Key) are correct
- Check the browser console for error messages
- Ensure your email service is properly connected in EmailJS dashboard
- Check EmailJS dashboard for usage limits (free plan: 200 emails/month)

### Template variables not working?
- Make sure variable names in the template match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Variable names are case-sensitive

### Getting CORS errors?
- EmailJS should work without CORS issues, but if you encounter them:
  - Go to EmailJS dashboard → Account → Security
  - Add your domain to the allowed origins list

## Free Plan Limits

- **200 emails per month**
- If you need more, upgrade to a paid plan at [https://www.emailjs.com/pricing](https://www.emailjs.com/pricing)

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/contact](https://www.emailjs.com/contact)
