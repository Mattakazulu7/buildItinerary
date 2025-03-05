document.addEventListener("DOMContentLoaded", function () {
    const labels = document.querySelectorAll(".theoretical-block-label, .practical-block-label");
    const timeSlots = document.querySelectorAll("#playdate-schedule ul li");

    labels.forEach(label => {
        label.addEventListener("click", function () {
            const text = this.textContent.trim();
            for (let i = 0; i < timeSlots.length; i++) {
                if (timeSlots[i].textContent.includes("–") && timeSlots[i].textContent.trim().endsWith("–")) {
                    timeSlots[i].innerHTML = `${timeSlots[i].innerHTML.trim()} ${text}`;
                    break;
                }
            }
        });
    });
});
