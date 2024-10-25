import React from 'react';
import {HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;


const UsersItem = ({ item, handleLikeBtnClick, handleSavedBtnClick }) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={item.img}
      />
    }
    actions={[
      <HeartOutlined onClick={handleLikeBtnClick} className='scale-[1.5]' />,
      <ShoppingCartOutlined onClick={handleSavedBtnClick} className='scale-[1.5]' />
    ]}
  >
    <Meta
      title={`${item.firstName} - ${item.lastName}`}
      description={item.email}
    />
  </Card>
);
export default UsersItem;