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
}