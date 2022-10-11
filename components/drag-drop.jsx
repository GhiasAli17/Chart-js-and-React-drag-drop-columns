import { useState } from "react";
import Start from "./start";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import Action from "./action";
import EmailSample from "./emailSample";
import { Button } from 'antd';

import { Col, Divider, Row } from 'antd';
const style = {
  background: '#0092ff',
  padding: '8px 0',
};

function DragDrop(){
    const [startClick, setStartClick] = useState(false);
    const [actionClick, setActionClick] = useState(false);
    const [sampleClick, setSampleClick] = useState(false);
    const [smsClick, setSMSClick] = useState(false)
    return(
        <div style={{padding:20}}>
                
                <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div style={style}>List of Actions</div>
      </Col>
      <Col className="gutter-row" span={18}>
        <div style={style}>Drag Drop Area</div>
      </Col>
     
    </Row>

    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
      <Button onClick={()=>setStartClick(true)}>Start</Button><br />
      <Button onClick={() => setActionClick(true)}>Add action</Button><br />
      <Button  onClick={() => setSampleClick(true)}>Add Sample</Button><br />
      </Col>
      <Col className="gutter-row" span={18}>
       <Row   gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}>

           <Col className="gutter-row" span={6}>
           {startClick?<Start />:null}
            </Col>
            <Col className="gutter-row" span={2}>
           {actionClick?<div style={{textAlign:'center', padding:20}}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{fontSize:40}}/>  
                        </div> :null}
            </Col>
            <Col className="gutter-row" span={6}>
            {actionClick?<>  <Action /></>:null}
            </Col>
            <Col className="gutter-row" span={2}>
           {sampleClick?<div style={{textAlign:'center', padding:20}}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{fontSize:40}} />  
                        </div> :null}
            </Col>
            <Col className="gutter-row" span={6}>
            {sampleClick?<>  <EmailSample /></>:null}
            </Col>
        </Row>
      </Col>
     
    </Row>

         </div>
    )
}

export default DragDrop;