import { Routes, Route, Navigate } from 'react-router-dom'
import { HomeView, MasterLayout } from '@/views'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MasterLayout />}>
                <Route path='/' element={<HomeView />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes