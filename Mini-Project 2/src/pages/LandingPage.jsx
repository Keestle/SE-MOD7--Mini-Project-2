import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Homepage() { // Save in pages/Homepage.jsx
    return (
    <ThemeProvider theme={defaultTheme}>
    <div className="Homepage">
    <h1>Ernie Lim</h1>
    <h2> Junior Software Developer</h2>
    </div>
    </ThemeProvider>
    )
}