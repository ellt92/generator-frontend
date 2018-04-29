import React from "react";

const HelloWorld = () => <div>Hello World!</div>;

const routes = [
  {
    component: HelloWorld,
    routes: [
      {
        path: "/",
        component: HelloWorld,
        exact: true
      },
      {
        path: "*",
        component: HelloWorld
      }
    ]
  }
];

export default routes;
