import { Tabs } from "antd";
import rupee from '../../common/images/currency-inr.svg';
import Positivity from '../positivity/positivity';
import ContactTracing from '../ContactTracing/ContactTracing';

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
                    <TabPane key="1" tab={<StyledTab>Contact Tracing</StyledTab>}>
                        <div>
                            <ContactTracing />
                        </div>
                    </TabPane>
                    <TabPane key="2" tab={<StyledTab>Covid Positivity</StyledTab>}>
                        <div>
                            <Positivity />
                        </div>
                    </TabPane>
                    <TabPane key="3" tab={<StyledTab>Deaths</StyledTab>}>
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