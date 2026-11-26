create table if not exists public.accounts (id uuid primary key default gen_random_uuid(),title text not null,price numeric(12,2) not null check(price>=0),level integer not null default 0 check(level>=0),evo integer not null default 0 check(evo>=0),rank text not null default '',description text not null default '',status text not null default 'Available' check(status in ('Available','Reserved','Sold Out')),images text[] not null default '{}',created_at timestamptz not null default now());
alter table public.accounts enable row level security;
revoke all on public.accounts from anon, authenticated;
grant select on public.accounts to anon, authenticated;
grant all on public.accounts to service_role;
drop policy if exists catalog_read on public.accounts;
create policy catalog_read on public.accounts for select to anon,authenticated using(true);
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('account-images','account-images',true,4194304,array['image/jpeg','image/png','image/webp']) on conflict(id) do nothing;
-- No public write policy. Server uses privileged key. Do not store private information in public listings or images.
