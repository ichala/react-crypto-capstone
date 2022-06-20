import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../Components/Home';
import store from '../Redux/configureStore';

it('Home Components Renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><Router><Home /></Router></Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
