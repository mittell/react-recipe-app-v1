import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Pages from './pages/Pages';

function App() {
	return (
		<BrowserRouter>
			<Category />
			<Pages />
		</BrowserRouter>
	);
}

export default App;
