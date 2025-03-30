import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

// The reason why we don't have to add /auth or /root in the path of the url because these are route groups (They are not added the file based routing)
// They are used to create meaningful layout 
// How this is defined internally is the folders which are created inside the route group which dont have parentheses "()" within it will be counted as routes 
// E.g. sign-in is the folders name which comes from (auth) - sign-in is counted as route.
const Home = () => {
    const loggedIn = {firstName: 'Ak', lastName: 'B', email:'ak@gmail.com'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                    //The input variables are passed in this way to the child component 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.38}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSideBar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
            />
        </section>
    )
}

export default Home;