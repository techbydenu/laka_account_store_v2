# LAKA ACCOUNT STORE
Private catalog starter. No PayHere or email login. Original artwork included. No demo listings.

1. In Supabase SQL Editor run `setup.sql` in a dedicated project. Verify no pre-existing permissive write policies.
2. For local development only, copy `.env.example` to `.env.local`. Public URL and publishable key are already filled in. Set SUPABASE_SECRET_KEY to your Supabase secret key (server only). Generate ADMIN_ACCESS_CODE with `openssl rand -hex 16` and ADMIN_SESSION_SECRET with `openssl rand -hex 32`. Never commit these values. Admin uses the access code, not an email.
3. `npm install` then `npm run dev`. Open localhost:3000 and /admin. Test login, upload, add/edit/delete, sold out and anonymous read-only access. For production, configure durable rate limiting on /api/admin at your hosting/WAF before exposing it. Shared code is not individual identity or audit logging. Rotate code and session secret to revoke sessions. Uploaded images are public and removing a listing does not delete storage objects.
4. Upload all root files (including hidden files) to private GitHub repo, import into Vercel, set the three secret environment variables (public URL and publishable key already configured) in project settings, deploy a preview. Vercel Hobby is for noncommercial use; choose an eligible hosting plan for commercial operation. No live payments or bank account details configured; WhatsApp inquiries only, arrange bank transfers manually if permitted. Verify game terms before any transactions.

Not live tested against Supabase. No installment ledger, verified payment records, audit logs, or automated checkout in this starter. Catalog refreshes every 15 seconds. Do not store game credentials or personal data in listings.

All source files are flat. npm run build and npm run dev automatically generate the required Next.js folders. Do not upload generated folders. No live build or database test performed.
