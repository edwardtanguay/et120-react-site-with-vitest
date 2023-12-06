import * as tools from "./tools";

/**
 * capitalizeFirstLetter()
 *
 * capitalizeFirstLetter('this is a test')
 *
 * "This is a test"
 */
export const capitalizeFirstLetter = (text: string) => {
	let r = text;
	r = r.trim();
	r = r.slice(0, 1).toUpperCase() + r.slice(1).toLowerCase();
	return r;
	//charAt(0)
	//splice
};

export const sentencize = (text: string) => {
	let tempFirstLetter = "";
	let r = text;

	if (r.startsWith("¿")) {
		tempFirstLetter = "¿";
		r = r.slice(1);
	}

	if (r.startsWith("¡")) {
		tempFirstLetter = "¡";
		r = r.slice(1);
	}

	r = tools.capitalizeFirstLetter(r);
	if (",:;".includes(text.slice(-1))) {
		r = r.slice(0, -1);
	}
	if (!".!?".includes(text.slice(-1))) {
		r += ".";
	}

	if (tempFirstLetter !== "") {
		r = tempFirstLetter + r;
	}
	return r;
};
