import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('User123!', 10),
    isVerified: true,
    role: 'admin'
  },
  {
    name: 'John Doe',
    email: 'johndoe@email.com',
    password: bcrypt.hashSync('User123!', 10),
    isVerified: true,
    role: 'applicant'
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@email.com',
    password: bcrypt.hashSync('User123!', 10),
    isVerified: true,
    role: 'applicant'
  }
];

export default users;
