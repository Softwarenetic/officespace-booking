
import { ThemeProvider } from "@mui/material";
import {RouterProvider} from "react-router-dom"
import { theme } from "./components/sideAppBar/SideAppBar";
import { routing } from './routing/routing';

export const App = () => <ThemeProvider theme={theme}><RouterProvider router={routing}/></ThemeProvider>

export default App;
