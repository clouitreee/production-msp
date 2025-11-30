-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  type TEXT NOT NULL, -- 'checklist_download', 'b2c_contact', 'b2b_contact', 'abo_interest'
  name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  is_business BOOLEAN DEFAULT FALSE,
  message TEXT,
  plan TEXT, -- 'Zuhause Basis', 'KMU Essential', etc.
  consent_marketing BOOLEAN DEFAULT FALSE,
  source_page TEXT,
  meta JSONB
);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insert only (public submission)
-- In a real scenario, you might want to restrict this further or use a service role key for inserts
CREATE POLICY "Allow public inserts" ON leads FOR INSERT WITH CHECK (true);

-- Create policy to allow read only for authenticated users (admins)
CREATE POLICY "Allow read for admins" ON leads FOR SELECT USING (auth.role() = 'authenticated');
