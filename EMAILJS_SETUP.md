# EmailJS Setup Guide for Solidify

This guide will help you set up EmailJS to send quote requests and contact form messages.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (you get 200 emails per month)
3. Verify your email

## Step 2: Create Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add Service**
3. Select **Gmail** (or your preferred email provider)
4. Connect your email account (e.g., solidify123d@gmail.com)
5. Name it something like `gmail_service`
6. Copy the **Service ID** - you'll need this

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it `contact_form_template` (or similar)
4. In the **Subject** field, enter:
   ```
   {{request_type}} Request from {{from_name}}
   ```

5. In the **HTML Content** field, paste this template:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">
            <strong>Email:</strong> {{from_email}}<br>
            <strong>Company:</strong> {{company}}<br>
            <strong>Phone:</strong> {{phone}}<br>
            <strong>Project Type:</strong> {{project_type}}<br>
            <strong>Request Type:</strong> {{request_type}}<br>
            <strong>File Attached:</strong> {{file_name}}
          </div>
          <div style="margin-top: 15px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #0066cc; border-radius: 3px">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 10px">Subject: {{subject}}</div>
            <p style="font-size: 14px; color: #333333; line-height: 1.6; white-space: pre-wrap">{{message}}</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #eeeeee; font-size: 11px; color: #999999; text-align: center">
    <p>This is an automated message from Solidify 3D Printing Service</p>
  </div>
</div>
```

6. Click **Save**
7. Copy the **Template ID** - you'll need this

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

## Step 5: Configure Your Environment

1. Create a `.env` file in the root of your project (same level as `package.json`)
2. Add these variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_from_step_2
VITE_EMAILJS_TEMPLATE_ID=your_template_id_from_step_3
VITE_EMAILJS_PUBLIC_KEY=your_public_key_from_step_4
VITE_RECEIVE_EMAIL=solidify123d@gmail.com
```

3. **IMPORTANT**: Add `.env` to your `.gitignore` file (it's already there by default)

## Step 6: Test Your Setup

1. Run `npm run dev`
2. Go to the Contact page or click "Get A Free Quote"
3. Fill out the form and submit
4. You should receive an email at `solidify123d@gmail.com`

## Troubleshooting

### "Email service not properly configured"
- Make sure your `.env` file exists in the root directory
- Check that all three environment variables are set correctly
- Restart your dev server after creating the `.env` file

### Emails not being received
- Check your spam/junk folder
- Make sure your Gmail account is properly connected in EmailJS
- Verify the Template ID is correct

### "Failed to send message" error
- Check browser console for detailed error messages
- Verify your Service ID and Template ID match what's in EmailJS
- Make sure your EmailJS account has remaining email quota

## Free Tier Limits
- 200 emails per month (free plan)
- Unlimited contacts
- If you exceed, upgrade to a paid plan or create another free account

## For Production

When deploying to production:
1. Create a new `.env.production` file with your EmailJS credentials
2. Or set environment variables in your hosting platform's settings
3. Never commit `.env` files to git

## Security Notes

- Your Public Key is safe to expose (it's meant to be public)
- Your Service ID and Template ID are not sensitive
- Keep your email account password secure
- Don't commit any credentials to git

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- Check the browser console (F12) for error messages
- Contact EmailJS support for account issues
