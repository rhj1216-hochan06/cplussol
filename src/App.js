import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import Header1 from './components/main/Header';


const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
      <Header1/>
				<Routes>
					<Route path="/" element={<Main />}></Route>
        </Routes>
			</BrowserRouter>

		</div>
	);
};

export default App;