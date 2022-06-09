import renderer from 'react-test-renderer';
import Home from '../../component/home';

describe('home component renders correctely', () => {
  it('main page matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
