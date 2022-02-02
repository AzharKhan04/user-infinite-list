import renderer from 'react-test-renderer';
import TopBar from './TopBar';
import {Router} from 'react-router-dom'
import { render, screen } from '@testing-library/react';

describe('TopBar Component', () => {
  

it('TopBar component renders correctly', () => {

  const location = {  };
  const tree = renderer.create(<Router location={location}><TopBar/></Router>).toJSON();
  expect(tree).toMatchSnapshot();


});


test('Topbar component has text users ',  () => {

    const location = { pathname: '' };
    render(<Router location={location}><TopBar/></Router>)
  
    expect(screen.getByText("Users")).toBeInTheDocument();
     
  })
})