# 🎯 AutoFokus

**Lock your focus. AutoFokus on**

AutoFokus adalah aplikasi produktivitas yang membantu Anda mempertahankan fokus dengan memblokir aplikasi yang mengganggu selama sesi konsentrasi.

## 📱 Tentang Aplikasi

AutoFokus dirancang untuk membantu pengguna memaksimalkan waktu produktif mereka dengan:

- Membuat sesi fokus dengan durasi yang dapat disesuaikan
- Memblokir aplikasi yang mengganggu (Instagram, YouTube, TikTok, Twitter, WhatsApp, dll)
- Melacak progress fokus dengan visual progress ring
- Mencatat riwayat sesi dan statistik produktivitas
- Challenge matematika untuk mencegah "give up" yang impulsif

## 🚀 Cara Penggunaan

1. **Login/Register**
   - Buka aplikasi dan buat akun dengan email & password
   - Atau langsung login ke dashboard

2. **Setup Profil**
   - Pilih nama pengguna dan avatar
   - Konfigurasi aplikasi yang ingin diblokir selama fokus

3. **Mulai Fokus**
   - Pilih durasi fokus di halaman Timer (15, 30, 45, 60 menit)
   - Aplikasi yang diblokir tidak dapat diakses selama sesi
   - Jika ingin keluar, selesaikan quiz matematika

4. **Lihat Progress**
   - Dashboard menampilkan riwayat sesi dan statistik
   - Pantau jumlah kali "give up" dan total waktu fokus

## 🛠️ Tech Stack

- **Framework**: Next.js 16 dengan Turbopack
- **Language**: TypeScript + React 19
- **Styling**: Tailwind CSS
- **State Management**: localStorage (Mock data)
- **Authentication**: NextAuth.js (testing mode)
- **Database**: Prisma 7 + Supabase PostgreSQL
- **Package Manager**: pnpm

## 🎯 Target

**Target Utama:**

- Pelajar yang sering terganggu oleh notifikasi media sosial
- Profesional yang ingin meningkatkan produktivitas
- Siapa saja yang ingin membangun kebiasaan fokus yang lebih baik

**Platform:** Mobile-first web application (responsif untuk semua ukuran)

## 📦 Struktur Monorepo

Repository ini menggunakan struktur monorepo untuk mengelola aplikasi web dan mobile:
- **`apps/web/`**: Aplikasi Web & API (Next.js, Tailwind, Prisma, PostgreSQL).
- **`apps/mobile/`**: Aplikasi Mobile (Flutter & Dart).

## 🚀 Development & Perintah Kerja

Semua dependency web dapat diinstal secara tersentralisasi menggunakan pnpm workspace di root.

### 🌐 Aplikasi Web (Next.js)

Jalankan perintah berikut di tingkat root repositori:

```bash
# Install dependencies (untuk workspace)
pnpm install

# Jalankan server development web
pnpm web:dev

# Build web untuk production
pnpm web:build

# Generate Prisma Client
pnpm db:generate

# Push skema database ke Supabase PostgreSQL
pnpm db:push
```

Akses aplikasi web di `http://localhost:3000`

### 📱 Aplikasi Mobile (Flutter)

Masuk ke folder proyek mobile untuk menjalankan aplikasi Flutter:

```bash
# Masuk ke folder mobile
cd apps/mobile

# Dapatkan package dependencies
flutter pub get

# Jalankan aplikasi mobile
flutter run
```

---

**Status:** Development mode menggunakan mock data dengan localStorage
