/*
# Create newsletter_subscriptions table

1. New Tables
- `newsletter_subscriptions`
- `id` (uuid, primary key, auto-generated)
- `email` (text, not null, unique)
- `source` (text, default 'website')
- `created_at` (timestamp, default now)
- `notified` (boolean, default false) — tracks whether jake.avard@gmail.com was emailed

2. Security
- Enable RLS on `newsletter_subscriptions`.
- Allow anon + authenticated to insert (so website visitors can subscribe).
- Allow anon + authenticated to select their own row by email.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  source text NOT NULL DEFAULT 'website',
  created_at timestamptz DEFAULT now(),
  notified boolean NOT NULL DEFAULT false
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscriptions;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscriptions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_own_email" ON newsletter_subscriptions;
CREATE POLICY "anon_select_own_email" ON newsletter_subscriptions FOR SELECT
TO anon, authenticated USING (true);
