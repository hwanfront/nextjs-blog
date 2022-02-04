import Typography from "typography";
import SutroTheme from "typography-theme-sutro";

const typography = new Typography(SutroTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
