form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://sheet.best/api/sheets/03688906-3ad1-47c0-b0b0-edcdd45d4373", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "Name": form.elements.nombre.value,
            "Question1": form.elements.question0.value,
            "Question2": form.elements.question1.value,
            "Question3": form.elements.question2.value,
            "Question4": form.elements.question3.value,
            "Question5": form.elements.question4.value,
            "Question6": form.elements.question5.value,
            "Question7": form.elements.question6.value,
            "Question8": form.elements.question7.value,
            "Question9": form.elements.question8.value,
            "Question10": form.elements.question9.value,
            "Question11": form.elements.question10.value,
        })
    });
    swal("Se han enviado tus respuestas", "Gracias por participar en nuestra actividad", "success");

});