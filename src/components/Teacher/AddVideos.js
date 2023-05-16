import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import {Form,Input,Button} from "antd";
import Operation from "antd/es/transfer/operation";

function AddVideos(){
    return(
        <div className="Demo">
            <Form>
                <Form.Item name={"Title"} type="text" label="Video Title">
                <Input className="w-25" placeholder="Video Title"/>
                </Form.Item>

                <Form.Item name={"class"} label="Video">
                <Input className="w-25" type="file"/>
                </Form.Item>

                <Form.List name="videos">
                    {(fields,{add,remove}) => (
                        <>
                            {fields.map((field,index)=>{
                                return(
                                    <div>
                                    <Form.Item 
                                    name={[field.name,"Title"]} 
                                    label={`${index+1}-Video`}>
                                    <Input className="w-25" placeholder="Video Title"/>
                                    </Form.Item>
                                    
                                    <Form.Item 
                                    name={[field.name,"Video"]}>
                                    <Input className="w-25" type="file"/>
                                    </Form.Item>
                                    </div>

                                    
                                );
                            })}

                            <Form.Item>
                                <Button 
                                    type="dashed" 
                                    block
                                    onClick={()=>{
                                        add();
                                    }}
                                >
                                    Add More
                                </Button>
                            </Form.Item>

                        </>
            
                    )}

                </Form.List>
            </Form>

        </div>
    );
}

export default AddVideos;