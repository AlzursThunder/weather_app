import { lazy } from "react";
import Button from "./Button";
import Header from "./Header";
import Home from './Home';
import InputElement from "./InputElement";
import SelectElement from "./SelectElement";
import TextAreaElement from "./TextAreaElement";
import Warning from './Warning';
const Contact = lazy(() => import('./Contact'))

export {
	Button,
	Contact,
	Header,
	Home,
	InputElement,
	SelectElement,
	TextAreaElement,
	Warning,
}