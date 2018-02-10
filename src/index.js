import React from 'react';
import ReactDOM from 'react-dom';
import { Fabric } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


initializeIcons();

ReactDOM.render(
    <Fabric>
        <App />
    </Fabric>,
    document.getElementById('root')
);
registerServiceWorker();
