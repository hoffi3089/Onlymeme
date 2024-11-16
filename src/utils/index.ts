import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";

export const formatBigNumber = (value: number): string => {
	let _value = '';
	if (value >= 1e6) {
		_value = `${Math.round(value / 1e4) / 1e2}M`;
	} else if (value >= 1e3) {
		_value = `${Math.round(value / 10) / 1e2}K`;
	} else {
		_value = value.toString();
	}
	return _value;
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const validNumberChar = (c: string) => {
	return ['Backspace', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'Delete', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].indexOf(c)!==-1
}

export const showToast = (html: string, type: 'info' | 'success' | 'warning' | 'error' | 'default') => {
	toast(html, {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		type,
		theme: 'colored',
	});
}

export const copyToClipboard = (text: string) => {
	var textField = document.createElement('textarea')
	textField.innerText = text
	document.body.appendChild(textField)
	textField.select()
	document.execCommand('copy')
	textField.remove()
};

export const numberWithCommas = (value: number): string => {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const currentTime = () => Math.round(+new Date().getTime() / 1e3);

const dateField = {
	prefixAgo: '',
	prefixFromNow: '',
	suffixAgo: "ago",
	suffixFromNow: "from now",
	inPast: 'any moment now',
	seconds: "less than a minute",
	minute: "about a minute",
	minutes: "%d minutes",
	hour: "about an hour",
	hours: "about %d hours",
	day: "a day",
	days: "%d days",
	month: "about a month",
	months: "%d months",
	year: "about a year",
	years: "%d years",
	wordSeparator: " ",
	numbers: []
} as DATEFIELDS;

export const getDateText = (value: number, isPast: boolean, unit?: string): string => {
	const _dateField = dateField as any;
	if (unit == 'seconds') return _dateField.seconds;
	/* if(value>1) unit+='s'; */
	let s = '';
	if (!isPast && _dateField.prefixAgo) s += _dateField.prefixAgo + _dateField.wordSeparator;
	if (isPast && _dateField.prefixFromNow) s += _dateField.prefixFromNow + _dateField.wordSeparator;

	if (unit !== undefined) {
		const v: any = _dateField[unit];
		if (typeof v === 'string') s += v.replace('%d', value.toString());
	}
	if (!isPast && _dateField.suffixAgo) s += _dateField.wordSeparator + _dateField.suffixAgo;
	if (isPast && _dateField.suffixFromNow) s += _dateField.wordSeparator + _dateField.suffixFromNow;
	return s;
}

export const offsetDate = (time: number) => {
	if (!time) return '';
	const now = currentTime();
	let diff = Math.round((now - time) / 86400);
	let isPast = false;
	if (diff < 0) {
		diff = -diff;
		isPast = true;
	}
	let y = Math.floor(diff / 365);
	if (y) return getDateText(y, isPast, y === 1 ? 'year' : 'years');
	let m = Math.floor(diff / 30);
	if (m) return getDateText(m, isPast, m === 1 ? 'month' : 'months');
	if (diff == 0) {
		diff = now - time;
		if (diff < 0) {
			diff = -diff;
			isPast = true;
		}
		let h = Math.floor(diff / 3600);
		if (h) return getDateText(h, isPast, h === 1 ? 'hour' : 'hours');
		m = Math.floor(diff / 60);
		if (m) return getDateText(m, isPast, m === 1 ? 'minute' : 'minutes');
		return getDateText(0, isPast, 'seconds');
	}
	return getDateText(diff, isPast, diff === 1 ? 'day' : 'days');
}