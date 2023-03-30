const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const lightMode = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bg-panel"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text"),
  colorBorder: getStyle(html, "--color-border")
};

const darkMode = {
  bg: "#282a36",
  bgPanel: "#44475a",
  colorHeadings: "#BABA34",
  colorText: "#f8f8f2",
  colorBorder: "#BABA34",
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(lightMode);
});
