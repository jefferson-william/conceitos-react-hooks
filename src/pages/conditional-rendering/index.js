import React from "react";

const UserGreeting = () => <h1>UserGreeting</h1>;

const GuestGreeting = () => <h1>GuestGreeting</h1>;

export default function(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
