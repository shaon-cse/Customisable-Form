import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Customizable Forms App</h1>
            <section>
                <h2>Latest Templates</h2>
                {/* Display latest templates here */}
            </section>
            <section>
                <h2>Popular Templates</h2>
                {/* Display popular templates here */}
            </section>
        </div>
    );
};

export default Home;