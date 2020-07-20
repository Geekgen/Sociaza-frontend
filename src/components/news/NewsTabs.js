import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { useId } from "react-id-generator";

import '../../style/NewsTabs.css';
import SportNews from './SportNews';
import HealthNews from './HealthNews';
import TechNews from './TechNews';
import EntertainmentNews from './EntertainmentNews';

function NewsTabs(props) {

    

    return (
        <Tabs className="warpper"
            key="newsTabs"
            defaultTab="one"
            onChange={(tabId) => { console.log(tabId) }}
        >
            <TabList className="tabs"  key="newsTabList">
                <Tab tabFor="one" className="tab" id="one-tab"  key="one-tab">Tech</Tab>
                <Tab tabFor="two" className="tab" id="two-tab" key="two-tab" >Health</Tab>
                <Tab tabFor="three" className="tab" id="three-tab"  key="three-tab">Sports</Tab>
                <Tab tabFor="four" className="tab" id="four-tab" key="four-tab" >Entertainment</Tab>
            </TabList>
            <div className="panels" id="panels" key="panels">
                <TabPanel tabId="one" key="tabIdOne" >
                    <div id="one-panel" key="one-panel">
                       <TechNews key={useId('techNews-')} />
                    </div>

                </TabPanel>
                <TabPanel tabId="two" key="tabIdTwo" >
                    <div id="two-panel" key="two-panel" >
                    <HealthNews key={useId('healthNews')} />
                    </div>
                </TabPanel>
                <TabPanel tabId="three" id="three-panel" key="three-panel">
                    <div  id="three-panel" key="three-panel">
                      <SportNews key={useId('sportNews')} />
                    </div>
                </TabPanel>
                <TabPanel tabId="four" id="four-panel" key="four-panel">
                    <div id="four-panel" key="four-panel" >
                      <EntertainmentNews key={useId('entertainmentNews')} />
                    </div>
                </TabPanel>
            </div>
        </Tabs >
    );
}
export default NewsTabs;