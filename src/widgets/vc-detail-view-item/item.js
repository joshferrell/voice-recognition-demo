import React from 'react';
import {
    MasterDetailsViewItem,
    MasterDetailsViewItemMaster,
    MasterDetailsViewItemDetails
} from 'react-desktop/windows';
import { VoiceNumber } from '../.';
import './item.css';

const renderDetailsViewItem = (itemComponent, itemView, number, subject, uniqueId) => {
    const eventListener = (event) => {
        if (event.includes(`click ${number}`)) {
            const evt = new MouseEvent('click', {
                bubbles: true
            });
            const target = document.getElementById(uniqueId);
            console.log(target);
            if (target) {
                target.click();
            }
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
