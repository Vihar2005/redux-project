import './App.css'
import ReduxComponent from './Components/ReduxComponent'
import StudentComponent from './Components/StudentComponent'
import Crudcomponent from './Components/Crudcomponent'
import Thunkcomponent from './reduxThunk/Thunkcomponent'
import FirebaseCRUD from './Firebase/FirebaseCRUD'
import React from 'react';
import FirebaseListing from './FirebaseList/FirebaseListing.jsx'
import Userlist from './FirebaseList/UserList.jsx'
import Signup from './Auth-login/Signup.jsx'
import Signin from './Auth-login/Signin.jsx'
import Home from './Auth-login/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReduxToolkit from './Components/Redux-toolkit.jsx'



function App() {


  return (
    <>
      <h3>my project</h3>
      {/* <ReduxComponent /> */}
      <ReduxToolkit />
      {/* <StudentComponent /> */}
      {/* <Crudcomponent /> */}
      {/* <Thunkcomponent /> */}
      {/* <FirebaseCRUD /> */}
      {/* <FirebaseListing />
       <Userlist /> */}


      {/* <UserAuthContextProvider>
        My App
      </UserAuthContextProvider> */}
    
    {/* <Signup /> */}
    {/* <Signin /> */}
    {/* <BrowserRouter>
      <Routes> */}
        {/* <Route path='/' element={<SliderComp />}></Route> */}
        {/* <Route path='/Home' element={<Home />}></Route>
        <Route path='/Signup' element={<Signup />}></Route> */}
        {/* <Route path='/Home' element={<Home />}></Route> */}
        {/* <Route path='/About' element={<About />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        {/* <Route path='/list' element={<List />}></Route> */}
      {/* </Routes>
    </BrowserRouter> */}

    </>
  )
}

export default App
