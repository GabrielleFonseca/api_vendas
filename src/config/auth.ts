export default {
  jwt: {
    secret: 'c7c632fb32a5e498654e76165a6a5fd6', //.env está dando erro com o segredo
    expiresIn: '30d',
  },
};

/* como deveria ser:
export default {
  jwt: {
    secret: process.env.APP_SECRET,
    expiresIn: '30d',
  },
};*/
