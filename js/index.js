import { jacketPage } from "./pages/jacket.js";
import { listJacketsPage } from "./pages/listJackets.js";
import { contactPage } from "./pages/contact.js";



if (location.pathname === "/jacket.html") {
    jacketPage()
}

if (location.pathname === "/listjackets.html") {
    listJacketsPage()
}

if (location.pathname === "/contact.html") {
    contactPage()
}

