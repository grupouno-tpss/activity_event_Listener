//Function scrollt nav

function scrollt() {

    if (scrollY > 100) {
        document.getElementById("grupo1").style.background = "black";
        document.querySelector(".h11").style.color = "white";
    } else {
        document.getElementById("grupo1").style.background = "white";
        document.querySelector(".h11").style.color = "black";
    }
}

var form = document.getElementById("form");

for (const key in questions) {

    var div = document.createElement("div");
    div.className = "form-check";

    //div.innerHTML = '<div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Default radio</label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked><label class="form-check-label" for="flexRadioDefault2">Default checked radio</label></div>'
    //div.innerHTML = '<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"> <label class="form-check-label" for="flexRadioDefault1"> Default radio </label> </div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked><label class="form-check-label" for="flexRadioDefault2"> Default checked radio</label>';
    div.innerHTML = `<h4>` + questions[key] + `</h4><div class="form-check">
    <input class="form-check-input" type="radio" name="question` + key + `" value="` + 'A - ' + respuestas[key][0] + `" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
    ` +
        respuestas[key][0] +
        `
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="question` + key + `" required value="` + 'B - ' + respuestas[key][1] + `" id="flexRadioDefault2">
    <label class="form-check-label" for="flexRadioDefault2">
      ` +
        respuestas[key][1] +
        `
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="question` + key + `" value="` + 'A - ' + respuestas[key][2] + `" id="flexRadioDefault3">
    <label class="form-check-label" for="flexRadioDefault2">
    ` +
        respuestas[key][2] +
        `
    </label>
  </div>
  <br />`
    form.appendChild(div);
}

var divSubmit = document.createElement("input");
divSubmit.type = "submit";


divSubmit.innerHTML = '<input type="submit">';

form.appendChild(divSubmit);