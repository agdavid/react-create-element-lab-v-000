//Code React element here

const title = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');

const javascript = React.createElement('li', {}, 'JavaScript');
const react = React.createElement('li', {}, 'React');
const movies = React.createElement('li', {}, 'Movies');
const ice_cream = React.createElement('li', {}, 'Ice cream');
const list = React.createElement('ul', {className: 'me__interests'}, [javascript, react, movies, ice_cream]);

const container = React.createElement('div', {className: 'me'}, [title, paragraph, list]);

ReactDOM.render(container, document.getElementById('main'));
