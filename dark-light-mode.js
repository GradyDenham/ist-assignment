function toggleTheme() {
    const theme = document.getElementsByTagName('link')[0];
    const lightTheme = "light.css";
    const darkTheme = "dark.css";
    const newTheme = theme.getAttribute('href') === lightTheme ? darkTheme : lightTheme; // If theme is light mode, then set newTheme as lightTheme, if not, then set newTheme as darkTheme.

    theme.setAttribute('href', newTheme);    // Set theme as the one chosen by newTheme variable.
    localStorage.setItem('theme', newTheme); // Save theme choice in local storage.
}

const theme = document.getElementsByTagName('link')[0];
const themeValue = localStorage.getItem('theme');
if (themeValue) {
    theme.setAttribute('href', themeValue);
}
