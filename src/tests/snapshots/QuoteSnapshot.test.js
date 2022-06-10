import renderer from 'react-test-renderer';
import Quote from '../../component/quote';

describe('Quote component renders correctely', () => {
  it('Quote page matches snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
