const config = {
  projects: [
    {
      name: 'My Project',
      use: {
        command: 'npm start & npx wait-on http://localhost:3000',
      },
    },
  ],
};

module.exports = config;
