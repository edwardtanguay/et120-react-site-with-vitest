/**
 * capitalizeFirstLetter()
 * 
 * capitalizeFirstLetter('this is a test')
 * 
 * "This is a test"
 */
export const capitalizeFirstLetter = (text: string) => {
	return text.slice(0, 1).toUpperCase() + text.slice(1);
}