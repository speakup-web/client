export const speakup = [
    {
        title: 'SpeakUp!',
        desc: 'Website yang mendukung untuk pengaduan kekerasan kepada pelapor dan dapat memantau status penyelidikan dan tindakan yang diambil.'
    }
]

export const navigation = [
    { name: 'About', href: window.location.pathname === '/' ? '/#about' : '/' },
    { name: 'Information', href: window.location.pathname === '/' ? '/#information' : '/' },
    { name: 'Contact Us', href: '#contact-us' },
]

export const tatacara = [
    {
        id: 1,
        title: 'Cek Kelengkapan Laporan',
        desc: 'Pengaduan dengan data lengkap dan sesuai dengan kriteria pengaduan akan mempercepat proses tindak lanjut atas aduan Anda.'
    },
    {
        id: 2,
        title: 'Isi Formulir Pengaduan',
        desc: 'Klik menu "Buat Laporan" yang terdapat pada bagian navigasi. Isi dan lengkapi formulir pengaduan yang telah disediakan.'
    },
    {
        id: 3,
        title: 'Jaga Kerahasiaan Link Laporan Anda',
        desc: 'Apabila pengaduan berhasil dikirm, Anda akan memperoleh link laporan untuk memantau pengaduan. Simpan baik-baik dan jaga kerahasiaan kode akun tersebut untuk menjaga kerahasiaan pengaduan Anda.'
    },
    {
        id: 4,
        title: 'Pantau Pengaduan',
        desc: 'Link laporan yang Anda miliki dapat Anda pergunakan untuk login ke halaman khusus pelapor. Melalui halaman tersebut, Anda dapat memantau pengaduan yang sudah Anda kirim, membuat pengaduan baru, atau berinteraksi dengan tim penanganan pengaduan.'
    },
]

export const contact = [
    {
        title: 'Kantor SpeakUp!',
        desc: 'Jl. Raya ITS, Kota Surabaya',
        type: 'kantor'
    },
    {
        title: 'Email',
        desc: 'speakup@gmail.com',
        type: 'email'
    },
    {
        title: 'Telp',
        desc: '08123456789',
        type: 'telp'
    },
]

export const pengaduan = [
    {
        id: 1,
        nama_pelapor: 'Udin',
        email_pelapor: 'udingantenk@gmail.com',
        telp_pelapor: '08123456789',
        tempat_kejadian: 'Kantin PENS',
        tanggal_kejadian: 'Senin, 4 Maret 2024',
        detail_kejadian: 'Pada hari Senin, 4 Maret 2024 berada di kantin, tiba-tiba segerombolan anak laki-laki datang. Mereka melakukan kekerasan fisik kepada salah satu mahasiswa dari jurusan Teknologi Rekayasa Internet',
        status_pengaduan: {
            "submited": true,
            "inProgress": true,
            "done": true,
            "cancelled": false
        }
    },
    {
        id: 2,
        nama_pelapor: 'Fiana',
        email_pelapor: 'fiana@gmail.com',
        telp_pelapor: '08123457788',
        tempat_kejadian: 'Kelas PENS',
        tanggal_kejadian: 'Senin, 23 Maret 2024',
        detail_kejadian: 'Pada hari Senin, 23 Maret 2024 di Ruangan A, oleh sekelompok orang melakukan pembullyan',
        status_pengaduan: {
            "submited": true,
            "inProgress": false,
            "done": true,
            "cancelled": true
        }
    },
]

