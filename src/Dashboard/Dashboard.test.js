import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom'
import { Dashboard } from '@mui/icons-material';


describe('Dashboard Component', () => {
  
  it('Dashboard components renders correctly', () => {

    const location = { pathname: '/home' };
    const tree = renderer.create(<Router location={location}><Dashboard/></Router>).toJSON();
    expect(tree).toMatchSnapshot();
});

});

