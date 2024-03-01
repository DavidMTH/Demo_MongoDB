const config = {
  projects: [
    {
      name: 'My Project',
      use: {
        // Hier kannst du den Befehl angeben
        command: 'npm start & npx wait-on http://localhost:3000',
      },
    },
  ],
};

module.exports = config;
