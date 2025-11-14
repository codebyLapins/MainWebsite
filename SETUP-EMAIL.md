# Setup Instructions for Project Request Form

## Important: Update Your Email Address

Before the project request form will work, you need to update your email address in the API route.

### Steps:

1. Open the file: `app/api/send-project-request/route.ts`

2. Find this line (around line 6):
   ```typescript
   const YOUR_EMAIL = 'your-email@example.com';
   ```

3. Replace `'your-email@example.com'` with your actual email address, for example:
   ```typescript
   const YOUR_EMAIL = 'info@codebylapins.com';
   ```

4. Save the file

## Resend API Key

The Resend API key is already configured:
```
re_LNaydsaE_KLcbVqWyFVoiFYjvbL3pKYon
```

This is set in `app/api/send-project-request/route.ts` on line 4.

## Testing the Form

1. Run your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/start-project`
3. Fill out and submit the form
4. Check your email inbox for the project request

## Form Features

- ✅ 10 sections covering all project details
- ✅ Bilingual support (Latvian/English)
- ✅ Field validation (required fields marked with *)
- ✅ Success/error message states
- ✅ Email sent via Resend API
- ✅ Responsive design
- ✅ Dark theme matching your site
- ✅ IBM Plex Mono font

## Form URL

Once deployed, the form will be accessible at:
- `https://yourwebsite.com/start-project`

## Button Location

A "Start Project" button has been added below the Services section on the homepage.
