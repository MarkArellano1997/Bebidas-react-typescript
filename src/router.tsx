import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavotiresPage from './views/FavotiresPage'
import Layout from './layouts/Layout'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<IndexPage />} index/>
                    <Route path='/favoritos' element={<FavotiresPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
