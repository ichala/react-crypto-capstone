import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../Components/Header';
import store from '../Redux/configureStore';

it('Home Components Renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><Router><Header /></Router></Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
