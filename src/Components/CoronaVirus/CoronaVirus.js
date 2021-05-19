import { Tabs } from "antd";
import rupee from '../../common/images/currency-inr.svg';
import Positivity from '../positivity/positivity';
import ContactTracing from '../ContactTracing/ContactTracing';

import allergy from '../../common/images/allergy.svg';
import plusth from '../../common/images/plus-thick.svg';
import skull from '../../common/images/skull-outline.svg';

const { TabPane } = Tabs;


const StyledTab = (props) => {
    return (
        <div className="major-tabs">
            {props.children}
        </div>
    )
}

export const CoronaVirus = () => {
    const changeHandler = (key) => { };
    return (
        <div>
            <div style={{ backgroundColor: "white" }}>
                <Tabs defaultActiveKey="1" onChange={changeHandler} type="card" className="major-upper-tabs">
                    <TabPane key="1" tab={<StyledTab><img src={allergy} className="mx-2" />Contact Tracing</StyledTab>}>
                        <div>
                            <ContactTracing />
                        </div>
                    </TabPane>
                    <TabPane key="2" tab={<StyledTab><img src={plusth} className="mx-2" />Covid Positivity</StyledTab>}>
                        <div>
                            <Positivity />
                        </div>
                    </TabPane>
                    <TabPane key="3" tab={<StyledTab><img src={skull} className="mx-2" />Deaths</StyledTab>}>
                        <div>
                            <ContactTracing />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default CoronaVirus;