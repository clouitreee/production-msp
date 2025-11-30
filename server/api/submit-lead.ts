import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import type { Request, Response } from 'express';

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase configuration');
}

const supabase = createClient(supabaseUrl!, supabaseKey!);

// Initialize Resend client
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function submitLead(req: Request, res: Response) {
  try {
    const { 
      type, 
      name, 
      email, 
      phone, 
      company_name, 
      is_business, 
      message, 
      plan, 
      consent_marketing, 
      source_page,
      meta 
    } = req.body;

    // 1. Validate required fields
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // 2. Insert into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          type,
          name,
          email,
          phone,
          company_name,
          is_business,
          message,
          plan,
          consent_marketing,
          source_page,
          meta
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to save lead' });
    }

    // 3. Send Email Notification (if Resend is configured)
    if (resend) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: ['info@techhilfepro.de'], // Replace with actual admin email
          subject: `New Lead: ${type} from ${name || email}`,
          html: `
            <h1>New Lead Received</h1>
            <p><strong>Type:</strong> ${type}</p>
            <p><strong>Name:</strong> ${name || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Company:</strong> ${company_name || 'N/A'}</p>
            <p><strong>Message:</strong> ${message || 'N/A'}</p>
            <p><strong>Plan:</strong> ${plan || 'N/A'}</p>
          `
        });
      } catch (emailError) {
        console.error('Resend error:', emailError);
        // Don't fail the request if email fails, just log it
      }
    }

    // 4. Trigger n8n Webhook (if configured)
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_LEAD;
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } catch (webhookError) {
        console.error('n8n webhook error:', webhookError);
      }
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
