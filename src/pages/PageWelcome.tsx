import * as tools from '../tools';

export const PageWelcome = () => {

	const message = 'this is the welcome page';
	return (
		<p>{tools.sentencize(message)}</p>
	)
}