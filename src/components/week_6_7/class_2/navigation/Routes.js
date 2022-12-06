import { Home, About, Contact} from "../index";
import GoogleIcon from '@mui/icons-material/Google';

export const routes = [
  { id: 1, path: "/", Element: Home, title: "Home" },
  { id: 2, path: "/about", Element: About, title: "About" },
  { id: 3, path: "/contact", Element: Contact, title: "Contact" }
]

export const socialNetwork = [
  { linkto: "www.google.com", snTitle: "Google", Icon: GoogleIcon}
]