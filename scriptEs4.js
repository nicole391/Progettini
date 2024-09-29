let selectedCost = 0;
let selectedImage = '';

function updateDestination() {
    const destinationSelect = document.getElementById("destination");
    const selectedOption = destinationSelect.options[destinationSelect.selectedIndex];
    selectedCost = parseFloat(selectedOption.getAttribute("cost"));
    selectedImage = selectedOption.getAttribute("image");

    const destinationImage = document.getElementById("destination-image");
    if (selectedImage) {
        destinationImage.src = selectedImage;
        destinationImage.classList.remove("hidden");
    } else {
        destinationImage.classList.add("hidden");
    }
}

function calculateBooking() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let passengers = document.getElementById("passengers").value;

    if (!name || !surname || !email || !destination || !date || passengers < 1) {
        alert("Per favore, compila tutti i campi richiesti!");
        return;
    }

    const total = selectedCost * passengers;

    const summaryDetails = `Nome: ${name}<br> Cognome: ${surname}<br>Email: ${email}<br>Destinazione: ${destination}<br>Data di Partenza: ${date}<br>Numero di Passeggeri: ${passengers}`;
    document.getElementById("summary").innerHTML = summaryDetails;
    document.getElementById("total").innerHTML = `Totale: €${total}`;

    document.getElementById("booking-summary").classList.remove("hidden");
}
