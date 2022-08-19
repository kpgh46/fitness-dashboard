import "./style.css";
import { Tooltip, Toast, Popover } from "bootstrap";
import {
	clickGenerateWorkoutButton,
	clickWorkoutCell,
	clickCompleteBtn,
} from "./ClickEvents";
import { fetchQuote } from "./FetchWorkouts";

clickGenerateWorkoutButton();
clickWorkoutCell();
clickCompleteBtn();
// fetchQuote();
