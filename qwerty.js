var nama = prompt("nama", "sypa kek");
    var bangun = prompt("terbangun dari", "mimpi");
    var madang = prompt("madang pake apa?", "pur ayam");
    var kmn = prompt("berangkat ke mana?", "Old Trafford");
    var ngapain = prompt("ngapain?", "ngungsi");
    var knp = prompt("knp ngungsi?", "tsunami trofi");
    
    const form = document.getElementById("ppp");
    const hasil = document.getElementById("show");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      hasil.innerHTML = `
        <h1>Cerita</h1>
        <p>${nama} terbangun dari ${bangun}, lalu sarapan dengan ${madang}. setelah itu berangkat ke ${kmn} untuk ${ngapain} karena emyu bakal ${knp}</p>
        
        <h3>rate cerita gw</h3>
        <input type="number" id="abcd" placeholder="masukkan nilai">
        <button onclick="cekNilai()">rate</button>
        <div id="hasilRating"></div>
      `;
    });

    function cekNilai() {
      let nilaiInput = document.getElementById("abcd");
      let nilai = parseInt(nilaiInput.value);
      let hasil;
      
      if (nilai < 30) {
        hasil = "jahat bgt anj";
      } else if (nilai >= 30 && nilai < 60) {
        hasil = "kamu jahat";
      } else if (nilai >= 60 && nilai < 85) {
        hasil = "hmm";
      } else if (nilai >= 85) {
        hasil = "maaci";
      } else {
        hasil = "masukkan nilai yang valid!";
      }
      
      document.getElementById("hasilRating").innerHTML = `<p><strong>${hasil}</strong></p>`;
    }