import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import {Form,Input,Button,Space} from "antd";
import Operation from "antd/es/transfer/operation";
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function AddVideos(){

    const onFinish=(values)=>{
        console.log({values});
    };
    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <TeacherSidebar/>
            </aside>
            <div className="col-8">
                <div className="card">
                    <h5 className="card-header">Add Videos</h5>
                    <div className="card-body"> 

                        <Form className="text-center" onFinish={onFinish}>
                            <Form.List name="videos">
                                {(fields,{add,remove}) => (
                                    <>
                                        {fields.map((field,index)=>{
                                            return(
                                                <Space  direction="horizontal" size="large">
                                                    <Form.Item 
                                                    key={field.key}
                                                    name={[field.name,"Title"]} 
                                                    label={`Video:${index+1}`}>
                                                    <Input className="w-100" placeholder="Video Title"/>
                                                    </Form.Item>
                                                    
                                                    <Form.Item 
                                                    key={field.key}
                                                    name={[field.name,"Video"]}>
                                                    <Input className="w-100" type="file"/>
                                                    </Form.Item>
                                                
                                                <Button
                                                className="btn btn-sm"
                                                onClick={()=>{
                                                    remove(field.name);
                                                }} 
                                                >
                                                <HighlightOffIcon/>
                                                </Button>

                                                </Space>
                                            );
                                        })}

                                        <Form.Item>
                                            <Button 
                                            className="btn btn-outline-primary btn-lg w-50 h-100" 
                                                block
                                                onClick={()=>{
                                                    add();
                                                }}
                                            >
                                                <span>Click to Add <AddToQueueIcon/></span>
                                            </Button>
                                        </Form.Item>

                                    </>
                        
                                )}

                            </Form.List>

                            <Button className="btn btn-primary w-25 h-100" htmlType="submit" type="primary">
                            Upload
                            </Button>
                       </Form>
                    </div>
                </div>   
           </div>
        </div>
        </div>
    );
}

export default AddVideos;