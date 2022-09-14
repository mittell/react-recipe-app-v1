import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';

function App() {
	return (
		<BrowserRouter>
			<Search />
			<Category />
			<Pages />
		</BrowserRouter>
	);
}

export default App;
