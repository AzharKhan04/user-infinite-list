import renderer from 'react-test-renderer';
import App from './App';

describe('App Component', () => {
  

it('App component renders correctly', () => {

  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();


});


})