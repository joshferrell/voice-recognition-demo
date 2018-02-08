import React, { Component } from 'react';
import { Fabric, Icon } from 'office-ui-fabric-react';
import { Window, NavPane, NavPaneItem, TitleBar } from 'react-desktop/windows';
import { VCTitleBar, VoiceNumber } from '../../widgets';
import './main-menu.css';

export default class MainMenu extends Component {
    constructor(props) {
        super(props);

        this.navItems = Array(3);
        this.state = {
            selectedNav: 0
        };
    }

    makeEventListener = index => (event) => {
        if (event.includes(`click ${index + 4}`)) {
            this.setState({ selectedNav: index });
        }
    }

    makeSelectNav = index => () => {
        this.setState({ selectedNav: index });
    };

    render = () => {
        const { subject } = this.props;

        return (
            <Fabric>
                <Window theme="light" chrome padding="12px">
                    <TitleBar title="Outlook" />
                    <div className="vc-nav-pane" style={{ width: '100%' }}>
                        <NavPane openLength={200} theme="light" canPaneToggle={false}>
                            <NavPaneItem
                                title="New Mail"
                                icon={
                                    <VoiceNumber number={2}>
                                        <Icon iconName="CirclePlus" />
                                    </VoiceNumber>
                                }
                                selected={this.state.selectedNav === 0}
                                onSelect={this.makeSelectNav(0)}
                                padding="10px 20px"
                            >
                                test
                            </NavPaneItem>
                            <NavPaneItem
                                title="Inbox"
                                icon={
                                    <VoiceNumber number={3}>
                                        <Icon iconName="Mail" />
                                    </VoiceNumber>
                                }
                                selected={this.state.selectedNav === 1}
                                onSelect={this.makeSelectNav(1)}
                                padding="10px 20px"
                            >
                                Something else
                            </NavPaneItem>
                        </NavPane>
                    </div>

                </Window>
            </Fabric>

        );
    }
}
