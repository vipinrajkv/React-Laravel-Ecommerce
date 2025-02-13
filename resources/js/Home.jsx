import React from "react";
import Footer from "./components/Footer";
import RouterLayout from "./routes/routeFile";
import { BrowserRouter as Router } from 'react-router-dom';
import List from "./components/list";
// import { ContexProvider } from "./components/contextProvider";

const Home = () => {

    return (
        <Router>
                <RouterLayout/>
            {/* <List /> */}
            <Footer />
        </Router>
    );
};

export default Home;