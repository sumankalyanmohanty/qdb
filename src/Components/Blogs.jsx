import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, List, Button, Modal, Divider, Form } from "antd";

const { Sider } = Layout;
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogid, setBlogid] = useState("");
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [uposts, setUposts] = useState([]);
  const [posts, setPosts] = useState([]);

  let userid = localStorage.getItem("userId");
  let url = process.env.REACT_APP_BASE_URL_USERS + userid + "/posts";
  useEffect(() => {
    axios.get(url).then((blogdata) => {
      setBlogs(blogdata.data);
    });
  }, []);
  const getVal = (e) => {
    setPosts(e.target.value);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    
    setOpen(false);
  };
  const handleSubmit = (id) => {
    
    fetch("https://jsonplaceholder.typicode.com/posts/"+id, {
      method: "PUT",
      body: JSON.stringify({
        posts,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        
        setUposts(json);
      });
  };
  function handleRemove(id) {
    const newList = blogs.filter((item) => item.id !== id);
    setBlogs(newList);
  }
  const data = blogs.map((newdata) => ({
    blogID: `${newdata.id}`,
    title: ` ${newdata.title}`,
    content: ` ${newdata.body}`,
    Ebutton: (
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        {" "}
        EDIT
      </Button>
    ),
    modal: (
      <Modal
        title={newdata.title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form>
          <input
            type="text"
            name="title"
            onChange={getVal}
            value={newdata.title}
          ></input>
          <p></p>
          <textarea name="textarea" onChange={getVal} rows="5" cols="40">
            {newdata.body}
          </textarea>
          <p></p>
          <input
            type="submit"
            name="submitInfo"
            id="postcontent"
            onClick={()=>handleSubmit(newdata.id)}
          ></input>
        </Form>
      </Modal>
    ),
    Dbutton: <Button onClick={() => handleRemove(newdata.id)}> DELETE</Button>,
  }));
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A="
              />
            }
          >
            <List.Item.Meta
              title={ item.title }
              description={item.description}
            />
            {item.content}
            <Divider>
              {item.Ebutton}
              {item.Dbutton}
              {item.modal}
            </Divider>
          </List.Item>
        )}
      />
    </div>
  );
};
export default Blogs;
