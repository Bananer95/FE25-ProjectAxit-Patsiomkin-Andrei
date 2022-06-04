import React from 'react';

interface IUserProps {
  title: string;
}

const User = (props: IUserProps) => {
  return <div>{props.title}</div>;
};

export default User;
