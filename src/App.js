import './App.css';
import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar';
import ContentContainer from './components/Content/ContentContainer';
import News from './components/News/News';
import Home from './components/Home/home';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/usersContainer';
import Login from './components/Login/Login';

const App = () => {
  return (
      <div className='app-wrapper'>
          <div>
              <HeaderContainer />
              <div style={{display: 'flex'}}>
                <Navbar />
                <div className='app_wrapper_content'>
                    <Routes>                            
                        <Route path='/' element={<Home />} />
                        <Route path='/content/:userId?' element={<ContentContainer />} />
                        <Route path='/content/' element={<ContentContainer />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/users/*' element={<UsersContainer/>} />
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/login/*' element={<Login/>}/>
                    </Routes>
                </div>
              </div>
          </div>
      </div>
  );
}

export default App;
