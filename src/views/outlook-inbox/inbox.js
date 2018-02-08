import React, { Component } from 'react';
import { Persona } from 'office-ui-fabric-react';
import {
    MasterDetailsView,
    MasterDetailsViewItem,
    MasterDetailsViewItemMaster,
    MasterDetailsViewItemDetails
} from 'react-desktop/windows';
// import renderDetailsViewItem from '../../widgets/vc-detail-view-item/';

import './inbox.css';

const voiceUser = {
    name: 'Voice Computer',
    title: 'The all-in-one speech app'
};

const emails = [
    {
        subject: 'Repetitive Stress Injury',
        timeSent: 'Today 1:43pm',
        shortMessage: 'Eliminate repetative motion and the injuries associated with it.',
        message: (
            <p>This is a test</p>
        ),
        user: voiceUser
    },
    {
        subject: 'Distance yourself from pain',
        message: `
            Voice Computer provides the intuitive alternative that
            keeps you productive
        `,
        user: voiceUser
    },
    {
        subject: 'Want to learn more?',
        message: `
            Subscribe to our free newsletter for more on speech
            recognition technology and accessibility
        `,
        user: voiceUser
    }
];

export default class Inbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emails,
            selectedEmail: 0
        };
    }

    renderEmail = ({ user, subject, shortMessage }) => (
        <section className="email-card">
            <h4>{subject}</h4>
            <p className="email-author">{user.name}</p>
            <p className="email-message">{`${shortMessage.substring(0, 60)}...`}</p>
        </section>
    )

    renderView = ({ user, subject, message, timeSent }) => (
        <section className="email-view">
            <Persona
                primaryText={user.name}
                secondaryText={timeSent}
                className="email-from"
            />
            <div className="email-to">
                <strong>To:</strong> Future Voice Computer User
            </div>
            <div className="email-subject">
                <strong>{subject}</strong>
            </div>
            <hr />
            {message}
        </section>
    )

    render = () => {
        return (
            <MasterDetailsView>
                <MasterDetailsViewItem>
                    <MasterDetailsViewItemMaster>
                        {this.renderEmail(emails[0])}
                    </MasterDetailsViewItemMaster>
                    <MasterDetailsViewItemDetails>
                        {this.renderView(emails[0])}
                    </MasterDetailsViewItemDetails>
                </MasterDetailsViewItem>
            </MasterDetailsView>
        );
    }
}
