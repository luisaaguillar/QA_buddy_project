const data = {
  credentials: {
    valid: {
      username: 'luisaaguillar@gmail.com',
      password: 'Goyillo21',
    },
    invalid: {
      username: 'glez.aguilar.luis@gmail.com',
      password: 'signals21',
    },
  },
  errors: {
    email: 'Invalid email address.',
    password: 'Blank password.',
    emailAndPassword: 'Wrong email or password.',
  },
  randomName: 'AutomatedTask' + (Math.floor(Math.random() * 100) + 1),
  taskCount: 10,
};
export {data};
