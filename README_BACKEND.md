# Backend Integration Guide

This project uses a lightweight Express server (`server/index.ts`) to handle API requests, which integrates with Supabase, Resend, and n8n.

## Environment Variables

To enable backend functionality, you must configure the following environment variables in your deployment platform or `.env` file (for local development).

### Supabase (Database)
- `VITE_SUPABASE_URL`: Your Supabase project URL.
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key (public).
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (keep secret! used for server-side operations).

### Resend (Email)
- `RESEND_API_KEY`: API key from Resend.com.
- `RESEND_FROM_EMAIL`: Verified sender email (e.g., `Tech Hilfe Pro <info@techhilfepro.de>`).

### Stripe (Payments)
- `STRIPE_CHECKOUT_URL_MINI_MONTHLY`
- `STRIPE_CHECKOUT_URL_MINI_YEARLY`
- `STRIPE_CHECKOUT_URL_BASIS_MONTHLY`
- `STRIPE_CHECKOUT_URL_BASIS_YEARLY`
- `STRIPE_CHECKOUT_URL_KOMFORT_MONTHLY`
- `STRIPE_CHECKOUT_URL_KOMFORT_YEARLY`

### n8n (Automation)
- `N8N_WEBHOOK_LEAD`: Webhook URL for processing new leads.

## API Endpoints

### `POST /api/submit-lead`

Handles form submissions for contact forms, checklist downloads, and subscription interests.

**Payload:**
```json
{
  "type": "b2c_contact" | "checklist_download" | "b2b_contact",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+49123456789",
  "message": "My printer is broken",
  "is_business": false,
  "meta": {
    "customer_status": "new",
    "privacy_accepted": true,
    "source": "search"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": { ...supabase_record }
}
```

## Database Schema

The `leads` table in Supabase stores all submissions.

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  type TEXT NOT NULL,
  name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  is_business BOOLEAN DEFAULT FALSE,
  message TEXT,
  plan TEXT,
  consent_marketing BOOLEAN DEFAULT FALSE,
  source_page TEXT,
  meta JSONB
);
```

## Deployment

When deploying to a platform like Vercel or Cloudflare, ensure that the `server/api` logic is adapted to Serverless Functions or Edge Functions if the Express server cannot be run directly.
