function nextPage() {
    // Redirect to the Yes HTML page
    window.location.href = "yes.html"; // Make sure this file is in the same directory
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Generate random position
    const randomX = Math.random() * (containerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (containerHeight - noButton.offsetHeight);

    // Move the button to the new random position
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Attach event listeners for the buttons
document.getElementById('yesButton').addEventListener('click', nextPage);
document.getElementById('noButton').addEventListener('mouseover', moveButton);