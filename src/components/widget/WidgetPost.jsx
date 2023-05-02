import { Tab, Nav  } from "react-bootstrap";
import PostVideoTwo from "../post/layout/PostVideoTwo";
import PostLayoutTwo from "../post/layout/PostLayoutTwo";


const WidgetPost = ({dataPost}) => {
    
  return (
    <div className="post-widget sidebar-post-widget m-b-xs-40">
        <Tab.Container id="widget-post" defaultActiveKey="recent">
            <Nav variant="pills" className="row no-gutters">
                <Nav.Item className="col">
                <Nav.Link eventKey="recent">RECENT</Nav.Link>
                </Nav.Item>
            </Nav>
            
            <Tab.Content>
                <Tab.Pane eventKey="recent" key={Math.random()}>
                {dataPost.slice(0, 4).map((data) => (
                    <PostLayoutTwo data={data} pClass="" key={data.slug} />
                ))}
                </Tab.Pane>             
            </Tab.Content>
            
        </Tab.Container>
    </div>
  );
};

export default WidgetPost;
