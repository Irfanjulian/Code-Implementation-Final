const pijarFood = (harga, voucher, jarak, pajak) => {
  // Pengkondisian mencari voucher diskon.
  let potongan = 0;
  if (voucher === "pijarFood5" && harga > 50000) {
    potongan = harga * 0.5;
    if (potongan > 50000) {
      potongan = 50000;
    }
  } else if (voucher === "diTeraktirPijar" && harga > 25000) {
    potongan = harga * 0.6;
    if (potongan > 25000) {
      potongan = 25000;
    }
  } else {
    potongan = ("Tidak ada diskon");
  }

  // Pengkondisian Biaya Pengiriman
  let ongkosKirim;
    if(typeof jarak === 'number'){  
      ongkosKirim = ((jarak - 2) * 3000 + 5000);
  } else {
    ongkosKirim = (`Anda tidak memasukan jarak dengan benar`);
  }


  // Pengkondisian Pajak
  let bayarPajak;
  if (pajak === true) {
    bayarPajak = (harga - potongan + ongkosKirim) * 0.05;
  } else if(pajak === false){
    bayarPajak = 0;
  } else {
      bayarPajak = ('Ada data yang tidak sesuai');
  }

  let result = `
  Harga             = ${harga}
  Potongan Diskon   = ${potongan}
  Biaya Pengiringan = ${ongkosKirim}
  Biaya Pajak       = ${bayarPajak}
  -------------------------------------
  Total Harga       = ${harga + ongkosKirim + bayarPajak - potongan}
  `
  console.log(result);
}

pijarFood(89000, "diTeraktirPijar", 'abc', true);
