import { Tabs } from "antd";
import rupee from '../../common/images/currency-inr.svg';
import RevenuePage from '../RevenuePage/RevenuePage';

const { TabPane } = Tabs;


const StyledTab = (props) => {
    return (
        <div className="major-tabs">
            {props.children}
        </div>
    )
}

export const GeneralAdmin = () => {
    const changeHandler = (key) => { };
    return (
        <div>
            <div style={{ backgroundColor: "white" }}>
                <Tabs defaultActiveKey="1" onChange={changeHandler} type="card" className="major-upper-tabs">
                    <TabPane key="1" tab={<StyledTab><img src={rupee} className="mx-2" />Contact Tracing</StyledTab>}>
                        <div>
                            <RevenuePage />
                        </div>
                    </TabPane>
                    <TabPane key="2" tab={<StyledTab><img src={rupee} className="mx-2" />Covid Positivity</StyledTab>}>
                        <div>
                            <RevenuePage />
                        </div>
                    </TabPane>
                    <TabPane key="3" tab={<StyledTab><img src={rupee} className="mx-2" />Deaths</StyledTab>}>
                        <div>
                            <RevenuePage />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default GeneralAdmin;