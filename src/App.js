import {Routes, Route} from 'react-router-dom'

import Home from '../src/routes/home/home.component'
import Shop from './components/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='signin' element={<SignIn />} />
			</Route>
		</Routes>
	);
}

export default App;
