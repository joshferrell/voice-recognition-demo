import React, { Component } from 'react';
import { Fabric, Icon } from 'office-ui-fabric-react';
import { Window, NavPane, NavPaneItem } from 'react-desktop/windows';
import { renderVoiceTitleBar, VoiceNumber } from '../../widgets';
import './main-menu.css';

export default class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNav: 1,
            paneExpanded: false
        };
    }

    eventListener = (index, event) => {
        if (event.includes(`click ${index + 5}`)) {
            this.setState({ selectedNav: index });
        }
    }

    togglePane = (event) => {
        if (event.includes('click 4')) {
            const target = document.querySelector('.vc-nav-pane > div > div:first-of-type > svg');
            const evt = new MouseEvent('click', {
                view: window,
                bubbles: true
            });

            target.dispatchEvent(evt);
        }
    }

    makeSelectNav = index => () => {
        this.setState({ selectedNav: index });
    };

    render = () => {
        const { subject } = this.props;
        subject.subscribe(this.togglePane);
        subject.subscribe(e => this.eventListener(0, e));
        subject.subscribe(e => this.eventListener(1, e));

        const titleBarOptions = {
            color: '#fff',
            background: '#0073c7',
            theme: 'dark'
        };

        const children = React.Children.toArray(this.props.children);

        return (
            <Fabric>
                <Window theme="light" chrome width={950} height={600}>
                    {renderVoiceTitleBar(subject, 'Outlook', titleBarOptions)}
                    <div className="vc-nav-pane" style={{ width: '100%' }}>
                        <NavPane openLength={200} theme="light" defaultIsPaneExpanded={this.state.paneExpanded}>
                            <NavPaneItem
                                title="New Mail"
                                icon={
                                    <VoiceNumber number={5}>
                                        <Icon iconName="CirclePlus" />
                                    </VoiceNumber>
                                }
                                selected={this.state.selectedNav === 0}
                                onSelect={this.makeSelectNav(0)}
                                padding="0 20px"
                            >
                                {children[1]}
                            </NavPaneItem>
                            <NavPaneItem
                                title="Inbox"
                                icon={
                                    <VoiceNumber number={6}>
                                        <Icon iconName="Mail" />
                                    </VoiceNumber>
                                }
                                selected={this.state.selectedNav === 1}
                                onSelect={this.makeSelectNav(1)}
                                padding="0 20px"
                            >
                                {children[0]}
                            </NavPaneItem>
                        </NavPane>
                    </div>

                </Window>
            </Fabric>

        );
    }
}
