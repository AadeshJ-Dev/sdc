export const loginValidations = (email, password) => {
  const response = {
    field: '',
    error: {},
  };

  if (!email || email.trim() === '') {
    response.field = 'email';
    response.error.email = 'Please enter registered username';
  }
  else if (!password || password.trim() === '') {
    response.field = 'password';
    response.error.password = 'Please enter a valid password';
  }
  else if (email.trim() !== 'foo' || password.trim() !== 'bar') {
    response.field = 'password';
    response.error.password = 'Invalid username or password';
  }

  return response;
};
