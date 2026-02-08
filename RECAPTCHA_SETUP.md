# Google reCAPTCHA v3 Setup Guide for VexarLabs

This guide explains how to configure Google reCAPTCHA v3 on your VexarLabs website to protect forms from spam and automated submissions.

## 📋 What is reCAPTCHA v3?

Google reCAPTCHA v3 is an **invisible** spam protection system that:
- ✅ **No user interaction required** - No "I'm not a robot" checkbox
- ✅ **Scores user behavior** - Returns a score (0.0 to 1.0) indicating likelihood of being a bot
- ✅ **Protects forms** - Contact form, newsletter subscriptions
- ✅ **Free tier** - 1 million assessments/month

## 🚀 Step-by-Step Setup

### Step 1: Create reCAPTCHA Keys

1. **Go to** [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. **Sign in** with your Google account
3. **Fill in the registration form:**
   - **Label**: `VexarLabs Website`
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domains (one per line):
     ```
     localhost
     vexarlabs.manus.space
     yourdomain.com
     ```
   - **Accept terms** and click **Submit**

4. **Copy your keys:**
   - **Site Key** (starts with `6L...`) - Used in frontend
   - **Secret Key** (starts with `6L...`) - Used in backend (for verification)

### Step 2: Configure Frontend (Site Key)

1. **Open** `/home/ubuntu/vexarlabs/client/src/App.tsx`

2. **Find** this line (appears twice):
   ```typescript
   reCaptchaKey="YOUR_RECAPTCHA_SITE_KEY"
   ```

3. **Replace** `YOUR_RECAPTCHA_SITE_KEY` with your **Site Key**:
   ```typescript
   reCaptchaKey="6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   ```

4. **Save** the file

### Step 3: Uncomment Script Tag (Optional)

If you want to load reCAPTCHA via script tag instead of the React package:

1. **Open** `/home/ubuntu/vexarlabs/client/index.html`

2. **Find** this commented line:
   ```html
   <!-- <script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script> -->
   ```

3. **Uncomment** and replace `YOUR_SITE_KEY`:
   ```html
   <script src="https://www.google.com/recaptcha/api.js?render=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"></script>
   ```

**Note:** This step is optional. The React package (`react-google-recaptcha-v3`) already loads reCAPTCHA automatically.

### Step 4: Test reCAPTCHA

1. **Deploy** your changes to your VPS or test locally
2. **Open** the Contact page or scroll to the Newsletter section
3. **Submit** a form
4. **Check** the browser console (F12 → Console tab)
5. **Look for** this message:
   ```
   reCAPTCHA token: 03AGdBq26XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```

If you see the token, reCAPTCHA is working! ✅

### Step 5: Backend Verification (Production)

**Important:** Currently, the frontend only generates reCAPTCHA tokens but doesn't verify them. For production, you need to verify tokens on your backend.

#### Backend Verification Flow:

1. **Frontend** generates token and sends it with form data
2. **Backend** receives token and verifies it with Google
3. **Google** returns a score (0.0 to 1.0)
4. **Backend** decides whether to accept or reject the submission based on score

#### Example Backend Verification (Node.js):

```javascript
const axios = require('axios');

async function verifyRecaptcha(token) {
  const secretKey = 'YOUR_SECRET_KEY'; // From reCAPTCHA Admin Console
  
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify`,
    null,
    {
      params: {
        secret: secretKey,
        response: token,
      },
    }
  );
  
  const { success, score, action } = response.data;
  
  // Score ranges from 0.0 (bot) to 1.0 (human)
  // Recommended threshold: 0.5
  if (success && score >= 0.5) {
    return { valid: true, score };
  } else {
    return { valid: false, score };
  }
}

// Usage in your API endpoint:
app.post('/api/contact', async (req, res) => {
  const { recaptchaToken, name, email, message } = req.body;
  
  const verification = await verifyRecaptcha(recaptchaToken);
  
  if (!verification.valid) {
    return res.status(400).json({ error: 'reCAPTCHA verification failed' });
  }
  
  // Process form submission...
  // Send email, save to database, etc.
  
  res.json({ success: true });
});
```

## 📊 Where reCAPTCHA is Integrated

reCAPTCHA v3 is now active on:

1. **Contact Form** (`/contact`)
   - Action: `contact_form`
   - Triggers before EmailJS sends email

2. **Newsletter (Footer)** (All pages)
   - Action: `newsletter_subscribe`
   - Triggers before newsletter subscription

3. **Newsletter (Under Construction)** (Password page)
   - Action: `newsletter_construction`
   - Triggers before newsletter subscription

## 🔧 Troubleshooting

### Error: "reCAPTCHA not loaded. Please refresh the page."

**Cause:** reCAPTCHA script failed to load or Site Key is invalid

**Solutions:**
1. Check your internet connection
2. Verify Site Key is correct in `App.tsx`
3. Ensure domain is added in reCAPTCHA Admin Console
4. Clear browser cache and refresh

### Token appears but forms still accept spam

**Cause:** Backend verification not implemented

**Solution:** Implement backend verification (see Step 5 above)

### reCAPTCHA badge appears in bottom-right corner

**Normal behavior:** reCAPTCHA v3 shows a small badge. You can hide it with CSS:

```css
.grecaptcha-badge {
  visibility: hidden;
}
```

**Important:** If you hide the badge, you must include this text on your site:
> This site is protected by reCAPTCHA and the Google [Privacy Policy](https://policies.google.com/privacy) and [Terms of Service](https://policies.google.com/terms) apply.

## 📚 Additional Resources

- [reCAPTCHA v3 Documentation](https://developers.google.com/recaptcha/docs/v3)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
- [Score Interpretation Guide](https://developers.google.com/recaptcha/docs/v3#interpreting_the_score)

## ✅ Checklist

- [ ] Created reCAPTCHA keys in Google Admin Console
- [ ] Added Site Key to `App.tsx` (2 locations)
- [ ] Tested forms and verified token generation in console
- [ ] (Optional) Implemented backend verification for production
- [ ] Deployed changes to VPS

---

**Need help?** Contact VexarLabs support or refer to the official Google reCAPTCHA documentation.
