const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const links = document.querySelectorAll("a");
const texts = document.querySelectorAll("p");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

cursor.style.setProperty("--width", "10px");
cursor.style.setProperty("--height", "10px");

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener("mousedown", (e) => {
  cursor.style.setProperty("--width", `${cursor.style.getPropertyValue("--width").replace("px", "") * 1.8}px`);
  cursor.style.setProperty("--height", `${cursor.style.getPropertyValue("--height").replace("px", "") * 1.8}px`);
});

document.addEventListener("mouseup", (e) => {
  cursor.style.setProperty("--width", `${cursor.style.getPropertyValue("--width").replace("px", "") / 1.8}px`);
  cursor.style.setProperty("--height", `${cursor.style.getPropertyValue("--height").replace("px", "") / 1.8}px`);
});

texts.forEach((text) => {
  text.addEventListener("mouseover", (e) => {
    cursor.style.borderRadius = "0%";
    cursor.style.setProperty("--width", "2px");
    cursor.style.setProperty("--height", "20px");
  });
  text.addEventListener("mouseout", (e) => {
    cursor.style.borderRadius = "50%";
    cursor.style.setProperty("--width", "10px");
    cursor.style.setProperty("--height", "10px");
    

  });
});

links.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    cursor.style.backgroundColor = "#daaf61";
    cursorBorder.style.setProperty("--size", "50px");
  });
  link.addEventListener("mouseout", (e) => {
    cursor.style.backgroundColor = "#95bcd6";
    cursorBorder.style.setProperty("--size", "28px");
  });
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});