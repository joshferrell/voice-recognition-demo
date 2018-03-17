import React from 'react';
import ReactSVG from 'react-svg';
import { RightArrow } from '../../media';
import './join-cta.css';

const JoinCTA = () => (
    <section className="join-cta">
        <h4>Ready to join the conversation?</h4>
        Come say hello. Your first 30 days are on the house.

        <div className="actions">
            <a href="#">
                Start your free trial
                <ReactSVG className="right-arrow" path={RightArrow} />
            </a>
            <a href="#">Contact Sales</a>
        </div>
    </section>
);

export default JoinCTA;
