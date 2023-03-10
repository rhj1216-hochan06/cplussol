import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				{/* 헤더 */}
				<Routes>
					<Route path="/" element={<Main />}></Route>
          {/* 회사소개 */}
          {/* 렌탈 */}
        </Routes>
        {/* 풋터 */}
			</BrowserRouter>

		</div>
	);
};

export default App;