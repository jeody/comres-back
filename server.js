//const path = require('path');
require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute');
const signatoryRoute = require('./routes/signatoryRoute');
const productRoute = require('./routes/productRoute');
const rankRoute = require('./routes/rankRoute');
const memberRoute = require('./routes/memberRoute');
const categoryRoute = require('./routes/categoryRoute');
const branchOfServiceRoute = require('./routes/branchOfServiceRoute');
const brandRoute = require('./routes/brandRoute');
const couponRoute = require('./routes/couponRoute');
const orderRoute = require('./routes/orderRoute');
const quizRoute = require('./routes/quizRoute');
const abstractQuizRoute = require('./routes/abstractQuizRoute');
const numberQuizRoute = require('./routes/numberQuizRoute');
const verbalQuizRoute = require('./routes/verbalQuizRoute');
const pdfRoute = require('./routes/pdfRoute');
const uploadRoute = require('./routes/uploadRoute');
const errorHandler = require('./middleware/errorMiddleware');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const { connectDB } = require('./config/db'); // CORRECT: Destructuring the object
const colors = require('colors');
const app = express();

// For CommonJS (require)
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

//Load env vars
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});


// Middlewares
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://authz-app-nu.vercel.app'],
    credentials: true
  })
);

// Add the parent origin to the frame-ancestors directive
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "frame-ancestors": ["'self'", "http://localhost:5000", "http://localhost:3000"],
    },
  })
);

// const __dirname = path.resolve(); // Set __dirname to current directory
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use('/files', express.static('files'));
app.use('/filesCourse', express.static('filesCourse'));

// Sanitize data
app.use(mongoSanitize());

// set security headers
app.use(helmet());

// Prevent XSS attacks, make sure this comes before any routes
app.use(xss());

// Routes
app.use('/api/users', userRoute);
app.use('/api/signatory', signatoryRoute);
app.use('/api/products', productRoute);
app.use('/api/members', memberRoute);
app.use('/api/category', categoryRoute);
app.use('/api/branchOfService', branchOfServiceRoute);
app.use('/api/brand', brandRoute);
app.use('/api/coupon', couponRoute);
app.use('/api/order', orderRoute);
app.use('/api/quiz', quizRoute);
app.use('/api/abstractQuiz', abstractQuizRoute);
app.use('/api/numberQuiz', numberQuizRoute);
app.use('/api/verbalQuiz', verbalQuizRoute);
app.use('/api/pdfUpload', pdfRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/ranks', rankRoute);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/api/uploadfiles', async (req, res) => {
  res.send('Success!!!');
});

app.post('/upload', (req, res) => {
  // We'll handle the image upload here
});

// error handler
app.use(errorHandler);
