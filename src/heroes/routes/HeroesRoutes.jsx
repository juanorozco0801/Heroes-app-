import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPages, HeroePages, MarvelPages, SearchPages } from '../pages';



export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        
        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPages/>} />
                <Route path="dc" element={<DcPages/>} />
                <Route path="search" element={<SearchPages/>}/>
                <Route path="hero/:id" element={<HeroePages/>}/>

                <Route path='/' element={<Navigate to='/marvel'/>}></Route>
            </Routes>
        </div>
    </>
  )
}
