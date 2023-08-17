import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/pages/Home';
import NewActivity from './components/pages/NewActivity';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='new' element={<NewActivity />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
