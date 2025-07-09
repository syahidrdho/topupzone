document.getElementById("topupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const game = document.getElementById("game").value;
  const id = document.getElementById("id").value;
  const server = document.getElementById("server").value;
  const nominal = document.getElementById("nominal").value;
  const pembayaran = document.getElementById("pembayaran").value;

  const result = `
    <strong>Pesanan Diterima!</strong><br>
    Game: ${game.toUpperCase()}<br>
    ID: ${id}${server ? " (Server: " + server + ")" : ""}<br>
    Nominal: ${nominal} Diamonds<br>
    Pembayaran: ${pembayaran.toUpperCase()}<br>
    Silakan lanjutkan pembayaran ke nomor resmi kami.
  `;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = result;
  resultDiv.style.display = "block";

  // Reset form
  document.getElementById("topupForm").reset();
});
