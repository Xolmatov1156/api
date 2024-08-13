import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import "./App.css";
import { ThreeDots } from 'react-loader-spinner';

function App() {
    const About = lazy(
        () =>
            new Promise((resolve) => {
                return setTimeout(() => resolve(import("./pages/About")), 1500);
            })
    );
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route
                    path="/about"
                    element={
                        <Suspense
                            fallback={
                                <div className="w-screen h-screen flex items-center justify-center">
                                    <ThreeDots
                                        visible={true}
                                        height="80"
                                        width="80"
                                        color="#4fa94d"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </div>
                            }
                        >
                            <About />
                        </Suspense>
                    }
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
