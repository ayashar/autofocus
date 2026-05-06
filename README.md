# 🎯 AutoFocus

**Stop scrolling. Start focusing.**

AutoFocus adalah aplikasi produktivitas yang membantu Anda mempertahankan fokus dengan memblokir aplikasi yang mengganggu selama sesi konsentrasi.

## 📱 Tentang Aplikasi

AutoFocus dirancang untuk membantu pengguna memaksimalkan waktu produktif mereka dengan:

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

## 📦 Instalasi & Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build untuk production
pnpm build

# Push database schema
pnpx prisma db push
```

Akses aplikasi di `http://localhost:3000`

---

**Status:** Development mode menggunakan mock data dengan localStorage
