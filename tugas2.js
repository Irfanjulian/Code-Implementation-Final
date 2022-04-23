const pijarFood = (harga, voucher, jarak, pajak) => {
  // Pengkondisian mencari voucher diskon.
  let potongan = "";
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
    console.log("Tidak ada diskon");
  }

  // Pengkondisian Biaya Pengiriman
  let ongkosKirim = ''
  for(let i = 1; i <= 2; i++){
      for(let j = i; j <= jarak-2; j++){
          ongkosKirim = ((i * 5000)+(j * 3000));
      }
  }

  // Pengkondisian Pajak
  let bayarPajak = "";
  if (pajak === true) {
    bayarPajak = (harga - potongan + biayaKirim) * 0.05;
  } else if(pajak === false){
    bayarPajak = 0;
  } else {
      console.log('Data tidak sesuai');
  }

  let result = `
  Harga = ${harga}
  Potongan Diskon = ${potongan}
  Biaya Pengirimgan = ${ongkosKirim}
  Biaya Pajak = ${bayarPajak}
  Total Harga = ${harga + ongkosKirim + bayarPajak - potongan}
  `

  console.log(result);

};
pijarFood(400000, "pijarFood5", 12, false);
