import React from 'react';
import Router from "@/router/Router";
import {Header} from "@modules/header";
import {Footer} from "@modules/footer";
import {BackgroundImage} from "@modules/background-image";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Router />
			</div>
			<Footer />
			<BackgroundImage />
		</div>
	);
}

export default App;
