document.getElementById('loanForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);
  const msg = document.getElementById('msg');

  if (amount < 500 || amount > 100000) {
    msg.innerHTML = '<p style="color:red">Kwota pożyczki musi być między 500 a 100000 PLN.</p>';
    return;
  }

  msg.innerHTML = `<p style="color:green">Dziękujemy ${name}, Twój wniosek został przyjęty!</p>`;
  this.reset();
});