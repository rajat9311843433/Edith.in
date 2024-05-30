function prebookOrder() {
    const modal = document.getElementById('prebookModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('prebookModal');
    modal.style.display = 'none';
}

function goBack() {
    window.location.href = 'index.html';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('prebookModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
