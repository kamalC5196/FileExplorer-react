import React, { useState } from 'react';
import './style.css';

export default function App() {
  const explorer = [
    {
      name: 'public',
      isFolder: true,
      files: [
        {
          name: 'index.html',
          isFolder: false,
          files: [],
        },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      files: [
        {
          name: 'App.js',
          isFolder: false,
          files: [],
        },
        {
          name: 'index.js',
          isFolder: false,
          files: [],
        },
        {
          name: 'style.css',
          isFolder: false,
          files: [],
        },
        {
          name: 'components',
          isFolder: true,
          files: [
            {
              name: 'c.js',
              isFolder: false,
              files: [],
            },
          ],
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: false,
      files: [],
    },
  ];
  return (
    <>
      {explorer.map((e, i) => (
        <Display explorer={e} key={i} />
      ))}
    </>
  );
}

function Display({ explorer }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {explorer.isFolder ? (
        <h2
          onClick={() => {
            setShow(!show);
          }}
        >
          {explorer.name}
        </h2>
      ) : (
        <p>{explorer.name}</p>
      )}

      <ul style={{ display: show ? 'block' : 'none' }}>
        {explorer.files.map((e, i) => (
          <Display key={i} explorer={e} />
        ))}
      </ul>
    </>
  );
}
