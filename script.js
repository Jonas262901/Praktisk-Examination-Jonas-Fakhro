function submitVote(event, category) {
    event.preventDefault();
    const selectedPlayer = document.querySelector('input[name="player"]:checked');
    if (!selectedPlayer) {
        alert('Vänligen välj en spelare att rösta på.');
        return;
    }

    alert('Tack för din röst på: ' + selectedPlayer.value);

    const mainContent = document.querySelector('main');
    mainContent.innerHTML = `<p>Tack för din röst! Varför inte rösta i en annan kategori?</p>`;

    const categories = ['herrar', 'damer', 'puskas'];
    const links = categories
        .filter(cat => cat !== category)
        .map(cat => `<a href="${cat}.html">Rösta på ${cat.charAt(0).toUpperCase() + cat.slice(1)}</a>`)
        .join(' | ');
    mainContent.innerHTML += `<div class="navigation-links">${links}</div>`;
}
