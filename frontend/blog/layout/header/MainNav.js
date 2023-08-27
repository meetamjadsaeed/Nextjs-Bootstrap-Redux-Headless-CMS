import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Spin } from 'antd';
// import Link from "next/link";

const token = "";

const Nav = () => {
  const [current, setCurrent] = useState('mail');
  const [Categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  const [items, setItems] = useState([
    {
      label: <Link href="#">Navigation One</Link>,
      key: 'mail',
      // icon: <MailOutlined />,
    },
  ]);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const getData = async () => {
    // Get Posts
    await axios
      .get(`https://backend.seekwordpress.com/wp-json/menus/v1/menus/main-menu`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // .then((result) => console.log(result.data.items))
      .then(response => {
        const newData = response.data.items;
        // console.log(newData)
        const newItems = newData.map(item => {
          return {
            label: <Link href={item.url}>{item.title ? item.title : ""}</Link>,
            key: item.ID,
            // icon: <MailOutlined />,
          }
        });
        setItems(newItems);
        setLoading(false);
      })


      //   .then((result) => console.log(result.data))
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          setLoading(false);
        } else if (error.request) {
          // The request was made but no response was received
          // console.log(error.request);
          setLoading(false);
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log("Error", error.message);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? <Spin /> :
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      }
    </>
  );
};

export default Nav;
