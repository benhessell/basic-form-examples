import React from 'react';

export default function Home() {

    return (
        <div className="home-page">
            <div className="home-page_welcome">
                <h1>Welcome to the Form App</h1>
                <p>Please try out the following ways of confirguring the forms</p>
            </div>
            <ul className="home-page_links">
                <li><a href="#/singleformclass">Single Form - Class</a></li>
                <li><a href="#/singleformfunc">Single Form - Func</a></li>
                <li><a href="#/singleformreacthook">Single Form - React Hook</a></li>
            </ul>
        </div>
    );
}