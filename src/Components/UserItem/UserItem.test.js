import renderer from 'react-test-renderer';
import UserItem from './UserItem';
import {Router} from 'react-router-dom'
import { render, screen } from '@testing-library/react';

describe('UserItem Component', () => {
    const testData = {
        name:'test user',
        email:'testemail@test.com',
        address:'testaddress',
        
    }

it('UserItem component renders correctly', () => {

  const location = { pathname:'' };
  
  const tree = renderer.create(<Router location={location}><UserItem data ={testData}/></Router>).toJSON();
  expect(tree).toMatchSnapshot();


});


test('UserItem renders data correctly', async () => {

    const location = { pathname:'' };
    render(<Router location={location}><UserItem data ={testData}/></Router>)
  
    expect(screen.getByText("test user")).toBeInTheDocument();
    expect(screen.getByText("testemail@test.com")).toBeInTheDocument();
    expect(screen.getByText("testaddress")).toBeInTheDocument();

     
  })
})