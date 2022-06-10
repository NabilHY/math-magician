import renderer from 'react-test-renderer';
import Calculator from '../../component/calculator';
import Home from '../../component/home';
import Quote from '../../component/quote';

describe('Calculator component renders correctly', () => {
  it('calculator page matches snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('home component renders correctely', () => {
  it('main page matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Quote component renders correctely', () => {
  it('Quote page matches snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

