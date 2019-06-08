import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Breadcrumb } from 'antd';

function AppBreadcrumb() {
  return (
    <Switch>
      <Route exact path="/">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Route>
      <Route exact path="/tutors">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/tutors">Tutors</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Route>
      <Route>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>???</Breadcrumb.Item>
        </Breadcrumb>
      </Route>
    </Switch>
  );
}

export default AppBreadcrumb;
