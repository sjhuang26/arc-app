import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useStore } from '../stores/root';
import { Table, Spin } from 'antd';
import { getTutors } from '../db';

function TutorsView() {
  const store = useStore();
  useEffect(() => {
    if (store.server.tutors.invalidated) {
      getTutors().then(docs => {
        console.log(docs);
        updateTutorData(docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
    }
  });

  function updateTutorData(data) {
    console.log(data, store.server.tutors);
    store.server.tutors.update(data);
  }

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade'
    },
    {
      title: 'Action',
      key: 'action',
      render(text, record) {
        return <Link to={'/tutors/edit/' + record.id}>Edit</Link>;
      }
    }
  ];

  return (
    <Spin spinning={store.server.tutors.invalidated}>
      <Table dataSource={store.server.tutors.data} columns={tableColumns} />
    </Spin>
  );
}

export default observer(TutorsView);
