import React from 'react'

// The reason why we don't have to add /auth or /root in the path of the url because these are route groups (They are not added the file based routing)
// They are used to create meaningful layout 
// How this is defined internally is the folders which are created inside the route group which dont have parentheses "()" within it will be counted as routes 
// E.g. sign-in is the folders name which comes from (auth) - sign-in is counted as route.
const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    Home
                </header>
            </div>
        </section>
    )
}

export default Home;