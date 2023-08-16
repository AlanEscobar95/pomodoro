let currentTime = 25;
let seconds = 0;
let timerInterval;

function updateClock() {
    const clockElement = document.getElementById("digit");
    clockElement.textContent = `${String(currentTime).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function timer() {
    if (currentTime > 0 || seconds > 0) {
        if (seconds === 0) {
            seconds = 59;
            currentTime--;
        } else {
            seconds--;
        }
        updateClock();
    } else {
        clearInterval(timerInterval);
        //SweetAlert con el mensaje de felicitaciones
        Swal.fire({
            icon: 'success',
            title: 'Felicitaciones',
            text: 'Es hora de un descanso!',
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirigir a la página de corto descanso
                window.location.href = '/breaks/short-break';
            }
        });
    }
}

window.onload = () => {
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", () => {
        if (!timerInterval) {
            timerInterval = setInterval(timer, 1000);
        }
    });

    updateClock();
};
