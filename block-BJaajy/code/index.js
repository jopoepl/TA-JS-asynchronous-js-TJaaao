Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('Arya'), 1000);
    }),
    'Sam',
    { name: 'John' },
  ]).then(console.log);