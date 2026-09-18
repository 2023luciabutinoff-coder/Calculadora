const display = document.getElementById("display");

function append(value) {
if (display.value === "0") {
display.value = value;
} else {
display.value += value;
}
}

function clearDisplay() {
display.value = "0";
}

function deleteLast() {
display.value = display.value.slice(0, -1);
if (display.value === "") {
display.value = "0";
}
}

function calculate() {
try {
display.value = eval(display.value);
} catch {
display.value = "Error";
}
}

function percentage() {
try {
display.value = Number(display.value) / 100;
} catch {
display.value = "Error";
}
}

function sqrtNumber() {
try {
const value = Number(display.value);

if (value < 0) {
display.value = "Error";
return;
}

display.value = Math.sqrt(value);
} catch {
display.value = "Error";
}
}
