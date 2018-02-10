import React, { Component } from 'react';
import moment from 'moment';
import { ActivityItem, Icon } from 'office-ui-fabric-react';
import './voice-history.css';

export default class VoiceHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activityHistory: [],
            secondsElapsed: moment().format()
        };

        const { subject } = this.props;
        subject.subscribe(this.handleActivity);
    }

    componentDidMount = () => {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    tick = () => this.setState(() => ({ secondsElapsed: moment() }));

    handleActivity = (command) => {
        const activityObject = {
            command,
            timestamp: moment()
        };

        this.setState(({ activityHistory }) => {
            activityHistory.sort((a, b) => moment.utc(a.timestamp).diff(moment.utc(b.timestamp)));
            console.log(activityHistory);
            if (activityHistory.length > 9) {
                activityHistory.shift();
            }

            activityHistory.push(activityObject);

            return {
                activityHistory: activityHistory.reverse()
            };
        });
    }

    renderActivityItem = ({ command, timestamp }) => (
        <ActivityItem
            key={timestamp.format('x')}
            activityDescription={[
                <span key={1}>You said</span>
            ]}
            comments={[
                <span key={1} style={{ textTransform: 'capitalize' }}>{command}</span>
            ]}
            activityIcon={<Icon iconName="CannedChat" />}
            timeStamp={timestamp.from(this.state.secondsElapsed)}
        />
    )

    render = () => (
        <div className="voice-history">
            {this.state.activityHistory.map(this.renderActivityItem)}
        </div>
    );
}
