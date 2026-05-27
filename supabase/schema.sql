create extension if not exists pgcrypto;
create table if not exists stores(id uuid primary key default gen_random_uuid(), name text not null, address text, phone text, active boolean default true);
create table if not exists profiles(id uuid primary key default gen_random_uuid(), username text unique, name text, role text, active boolean default true);
create table if not exists products(id uuid primary key default gen_random_uuid(), sku text, barcode text, name text, category text, price numeric, cost numeric, active boolean default true);
create table if not exists product_stock(product_id uuid references products(id), store_id uuid references stores(id), qty numeric default 0, primary key(product_id,store_id));
create table if not exists sales(id uuid primary key default gen_random_uuid(), store_id uuid, user_name text, total numeric, payment text, created_at timestamptz default now());
create table if not exists stock_moves(id uuid primary key default gen_random_uuid(), type text, product text, from_store text, to_store text, qty numeric, user_name text, created_at timestamptz default now());
