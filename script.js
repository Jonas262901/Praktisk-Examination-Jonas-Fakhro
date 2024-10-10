function submitVote(event, category) {
    event.preventDefault();

    // Hämta den valda spelaren
    const selectedPlayer = document.querySelector('input[name="player"]:checked');
    if (!selectedPlayer) {
        alert('Vänligen välj en spelare att rösta på.');
        return;
    }

    // Visa ett meddelande för att bekräfta användarens röst
    alert('Tack för din röst på: ' + selectedPlayer.value);

    // Skapa ett meddelandecontainer för "Tack för din röst"
    const messageContainer = document.createElement('div');
    messageContainer.innerHTML = `<p>Tack för din röst! Varför inte rösta i en annan kategori?</p>`;

    // Filtrera de kategorier som inte är den nuvarande
    const categories = ['herrar', 'damer', 'puskas'];
    const links = categories
        .filter(cat => cat !== category)
        .map(cat => `<a href="${cat}.html">Rösta på ${cat.charAt(0).toUpperCase() + cat.slice(1)}</a>`)
        .join(' | ');

    // Lägg till länkarna till meddelandet
    messageContainer.innerHTML += `<div class="navigation-links">${links}</div>`;

    // Rensa det nuvarande huvudinnehållet och lägg till meddelandet
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = '';
    mainContent.appendChild(messageContainer);
}
