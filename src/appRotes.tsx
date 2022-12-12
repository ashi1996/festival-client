import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FormAddOrEditFestival from './components/formAddOrEdit/formAddOrEditFestival';
import Layout from './components/layout';
import HomePage from './screens/homePage/homePage';

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='add-or-edit' element={<FormAddOrEditFestival/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;