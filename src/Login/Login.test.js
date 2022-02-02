import renderer from 'react-test-renderer';
import Login from './Login';
import {Router} from 'react-router-dom'
import { render, screen } from '@testing-library/react';

describe('Login Component', () => {
  

it('Login component renders correctly', () => {

  const location = { pathname: '/login' };
  const tree = renderer.create(<Router location={location}><Login/></Router>).toJSON();
  expect(tree).toMatchSnapshot();


});


test('renders login button ', async () => {

    const location = { pathname: '/login' };
    render(<Router location={location}><Login/></Router>)
  
    const items = await screen.findAllByRole('button')
    expect(items).toHaveLength(1)
     
  })
})