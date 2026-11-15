# Farid Scholarship OS

Workspace modular untuk membantu pengelolaan proses dan berkas beasiswa.

## Teknologi

- HTML, CSS, dan JavaScript pada halaman utama `index.html`
- Tailwind CSS melalui CDN
- Vite untuk server pengembangan dan build
- Google Sheets sebagai sumber data
- Google Apps Script sebagai endpoint integrasi

## Menjalankan secara lokal

Pastikan Node.js sudah terpasang, kemudian jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal.

Untuk membuat build produksi:

```bash
npm run build
npm run preview
```

## Integrasi Google Sheets

Sumber Google Apps Script berada di `google-apps-script/Code.gs`.

1. Buka Google Sheets yang digunakan proyek.
2. Pilih **Extensions → Apps Script**.
3. Salin kode dari `google-apps-script/Code.gs`.
4. Periksa kembali `SHEET_ID` agar mengarah ke spreadsheet milikmu.
5. Deploy sebagai **Web app** dan atur akses sesuai kebutuhan.

Jangan memasukkan password, token, atau kredensial pribadi ke repository publik.

## Struktur proyek

```text
.
├── google-apps-script/
│   └── Code.gs
├── src/
│   ├── services/
│   │   └── sheetsApi.js
│   └── styles/
│       └── neocities.css
├── index.html
└── package.json
```
