import "./style.css";
import { Tooltip, Toast, Popover } from "bootstrap";
import {
	clickGenerateWorkoutButton,
	clickWorkoutCell,
	clickCompleteBtn,
	clickMotivation,
} from "./ClickEvents";
import { fetchQuote } from "./FetchWorkouts";

clickGenerateWorkoutButton();
clickWorkoutCell();
clickCompleteBtn();
clickMotivation();
fetchQuote();
