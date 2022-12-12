import {Routes, Route } from 'react-router-dom'

import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {


  return (
    <>
        <Routes>
            {/* Ruta publica */}
            <Route path='login' element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>
            }/>

            {/* Ruta privada */}
            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/>

            {/* Rutas publicas todas  */}
            {/* <Route path='/*' element={<HeroesRoutes/>} /> */}
            {/* <Route path='login' element={<LoginPage/>} /> */}


        </Routes>
    </>
  )
}
