// eslint-disable-next-line import/no-extraneous-dependencies,no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import queryString from 'query-string';
import '../../static/css/App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Axios from 'axios';

const ReadContent = () => {
  const [readList, setReadList] = useState([]);
  const { url } = useParams();
  const queryable = queryString.parse(url);

  useEffect(() => {
    const result = Axios.get('http://localhost:8000/api/ContentTypeRead', {
      params: {
        id: queryable.id,
      },
    });

    setReadList(result.data);
  }, [url]);

  return (
    <div>
      {readList.map((val) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <h1>주제</h1>
          <div>{val.fields.subject}</div>
          <h2>제목</h2>
          <div>{val.fields.title}</div>
          <h3>내용</h3>
          <div>{val.fields.content}</div>
        </div>
      ))}
    </div>
  );
};

export default ReadContent;
