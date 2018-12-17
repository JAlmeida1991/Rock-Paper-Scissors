import "@fortawesome/fontawesome-free/css/all.min.css";
import { choices } from "./globals";
import rockPaperScissors from "./helpers";

choices.forEach(choice => choice.addEventListener("click", rockPaperScissors));
