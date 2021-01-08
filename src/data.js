const products = [
  {
    nama: 'Meja Gambar Arsitek Lokal',
    stand: 'Manual',
    board: 'Vinil-A1',
    kondisi: 'Baru',
    produksi: 'Lokal',
  },
  {
    nama: 'Meja Gambar Mutoh',
    stand: 'Hydrolic TF-20',
    mesin: 'Mutoh QSJ',
    board: 'Magnet Mutoh-A1',
    kondisi: 'Rekondisi',
    produksi: 'Jepang',
    garansi: '3 Tahun'
  },
  {
    nama: 'Meja Gambar Tracker',
    stand: 'Semi-hydrolic',
    mesin: 'Uchida',
    board: 'Magnet A1',
    kondisi: 'Rekondisi',
    produksi: 'Jepang',
    garansi: '3 Tahun'
  },
  {
    nama: 'Meja Gambar Arsitek Lokal',
    stand: 'Pedal Elit Super',
    board: 'Vinil-A1',
    kondisi: 'Baru',
    produksi: 'Lokal'
  },
  {
    nama: 'Meja Gambar Mutoh',
    stand: 'Hydrolic TW-300N',
    mesin: 'Mutoh EYJ',
    board: 'Magnet Mutoh-A1',
    kondisi: 'Rekondisi',
    produksi: 'Jepang',
    garansi: '3 Tahun'
  },
  {
    nama: 'Meja Gambar Mutoh',
    stand: 'Hydrolic TF-20',
    mesin: 'Mutoh QSJ',
    board: 'Magnet Mutoh-A1',
    lampu: 'LF-20',
    kondisi: 'Rekondisi',
    produksi: 'Jepang',
    garansi: '3 Tahun'
  },
  {
    nama: 'Meja Gambar Mutoh',
    stand: 'Standard',
    mesin: 'Mutoh Altana',
    board: 'Magnet Mutoh-A1',
    kondisi: 'Rekondisi',
    produksi: 'Jepang',
    garansi: '3 Tahun'
  },
  {
    nama: 'Meja Gambar Mutoh',
    stand: 'Hydrolic TF-20',
    mesin: 'Mutoh EY',
    board: 'Magnet Mutoh-A0',
    lampu: 'LF-20',
    kondisi: 'Rekondisi',
    produksi: 'Jepang',
    garansi: '3 Tahun'
  },
  {
    nama: 'Meja Gambar Mutoh',
    stand: 'Pedal Elit Super Baru',
    mesin: 'Mutoh Bandul SY-80 Rekondisi',
    board: 'Vinil-A1 Baru',
    kondisi: 'Rekondisi',
    garansi: '3 Tahun'
  }
]

const figures = [
  {
    iconName: 'thumbs-up',
    title: 'Quality',
    content: 'Kualitas yang terbaik untuk kebutuhan yang sesuai dengan Anda'
  },
  {
    iconName: 'tags',
    title: 'Good Price',
    content: 'Menyediakan barang dengan menawarkan harga terbaik dan bersaing'
  },
  {
    iconName: 'check-circle',
    title: 'Guaranteed',
    content: 'Memprovide garansi 3 tahun untuk setiap barang di luar produk lokal'
  }
]

const services = ['Jual / Beli Meja Gambar Arsitek', 'Whiteboard', 'Pengadaan', 'Service'];

for (let i = 0; i < products.length; i++) {
  if (figures[i]) {
    figures[i].id = i+1;
  }
  products[i].id = i+1;
}

export default products
export {figures, services}
