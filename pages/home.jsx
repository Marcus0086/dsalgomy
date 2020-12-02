import React from 'react';
import HeroPage from './hero';
function HomePage(props) {
    return (
        <React.Fragment>
            <HeroPage title={props.title} subTitle={props.subTitle} text={props.text} container={props.container} />
        </React.Fragment>
    );
}

export default HomePage;