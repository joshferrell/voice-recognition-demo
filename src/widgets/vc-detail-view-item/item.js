import React from 'react';
import uuid from 'uuid/v4';
import {
    MasterDetailsViewItem,
    MasterDetailsViewItemMaster,
    MasterDetailsViewItemDetails
} from 'react-desktop/windows';
import { VoiceNumber } from '../.';
import './item.css';

const renderDetailsViewItem = (itemComponent, itemView, number, subject) => {
    const uniqueId = `item-${uuid()}`;
    const eventListener = (event) => {
        if (event.includes(`click ${number}`)) {
            const evt = new MouseEvent('click', {
                view: window,
                bubbles: true
            });
            const target = document.getElementById(uniqueId);
            target.dispatchEvent(evt);
        }
    };

    subject.subscribe(eventListener);

    return (
        <MasterDetailsViewItem>
            <MasterDetailsViewItemMaster id={uniqueId} className="vc-detail-item">
                <VoiceNumber number={number} />
                {itemComponent}
            </MasterDetailsViewItemMaster>
            <MasterDetailsViewItemDetails>
                {itemView}
            </MasterDetailsViewItemDetails>
        </MasterDetailsViewItem>
    );
};

export default renderDetailsViewItem;
