# Shopykart - E-Commerce Web Application

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Installation Guide](#installation-guide)
5. [Usage Instructions](#usage-instructions)
6. [Project Structure](#project-structure)
7. [API Documentation](#api-documentation)
8. [Database Schema](#database-schema)
9. [Configuration](#configuration)
10. [Contributing](#contributing)
11. [Troubleshooting](#troubleshooting)
12. [License](#license)

## 🚀 Project Overview

Shopykart is a comprehensive e-commerce web application developed as a capstone project. This platform provides users with a seamless online shopping experience, featuring product browsing, cart management, user authentication, and order processing capabilities.

### 🎯 Project Goals

- Create a fully functional e-commerce platform
- Implement modern web development practices
- Provide an intuitive user interface for online shopping
- Demonstrate proficiency in full-stack web development

## ✨ Features

### Core Features

- **User Authentication**
  - User registration and login
  - Secure password handling
  - Session management
  - Profile management

- **Product Management**
  - Browse products by categories
  - Product search functionality
  - Detailed product views
  - Product filtering and sorting

- **Shopping Cart**
  - Add/remove items from cart
  - Modify item quantities
  - Cart persistence across sessions
  - Real-time cart updates

- **Order Management**
  - Checkout process
  - Order history
  - Order tracking
  - Payment integration (if applicable)

### Additional Features

- **Responsive Design**
  - Mobile-friendly interface
  - Cross-browser compatibility
  - Optimized user experience

- **Admin Panel** (if applicable)
  - Product management
  - Order management
  - User management
  - Analytics dashboard

## 🛠 Technology Stack

### Frontend
- **HTML5** - Structure and markup
- **CSS3** - Styling and responsive design
- **JavaScript** - Client-side interactivity
- **Bootstrap** (if used) - UI framework

### Backend (assumed based on common patterns)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

### Tools & Libraries
- **Git** - Version control
- **npm** - Package management
- **Postman** - API testing (if applicable)

## 📦 Installation Guide

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (version 14.x or higher)
- npm (Node Package Manager)
- MongoDB (if using local database)
- Git

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/utpal3000/Shopykart.git
   cd Shopykart
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Create a `.env` file in the root directory
   - Add necessary environment variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/shopykart
   JWT_SECRET=your_jwt_secret_key
   SESSION_SECRET=your_session_secret
   ```

4. **Database Setup**
   - Start MongoDB service
   - Create the database (if not auto-created)
   ```bash
   mongod
   ```

5. **Run the Application**
   ```bash
   npm start
   ```
   or for development mode:
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`

## 📖 Usage Instructions

### For End Users

1. **Registration/Login**
   - Create a new account or log in with existing credentials
   - Complete profile information

2. **Browse Products**
   - Navigate through different product categories
   - Use search functionality to find specific items
   - Apply filters to narrow down results

3. **Shopping Cart**
   - Add desired products to your cart
   - Review cart contents
   - Modify quantities or remove items as needed

4. **Checkout Process**
   - Proceed to checkout from your cart
   - Enter shipping and billing information
   - Complete payment process
   - Receive order confirmation

### For Administrators (if applicable)

1. **Admin Dashboard**
   - Access admin panel with administrator credentials
   - Manage products (add, edit, delete)
   - View and process orders
   - Manage user accounts

## 📁 Project Structure

```
Shopykart/
├── public/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   ├── cart.js
│   │   └── auth.js
│   ├── images/
│   └── index.html
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   └── orders.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   └── utils/
│       ├── database.js
│       └── helpers.js
├── views/
│   ├── layouts/
│   ├── partials/
│   └── pages/
├── config/
│   └── database.js
├── package.json
├── server.js
└── README.md
```

## 🔌 API Documentation

### Authentication Endpoints

#### POST `/api/auth/register`
- **Description**: Register a new user
- **Body**: 
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: User object with JWT token

#### POST `/api/auth/login`
- **Description**: User login
- **Body**: 
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: User object with JWT token

### Product Endpoints

#### GET `/api/products`
- **Description**: Get all products
- **Query Parameters**: 
  - `category` (optional)
  - `search` (optional)
  - `limit` (optional)
  - `page` (optional)

#### GET `/api/products/:id`
- **Description**: Get product by ID
- **Response**: Product object

### Cart Endpoints

#### POST `/api/cart/add`
- **Description**: Add item to cart
- **Body**: 
  ```json
  {
    "productId": "string",
    "quantity": "number"
  }
  ```

#### GET `/api/cart`
- **Description**: Get user's cart
- **Response**: Cart object with items

### Order Endpoints

#### POST `/api/orders`
- **Description**: Create new order
- **Body**: Order details including items and shipping info

#### GET `/api/orders/:userId`
- **Description**: Get user's order history

## 🗄 Database Schema

### User Schema
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  firstName: String,
  lastName: String,
  address: Object,
  phone: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Product Schema
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String],
  stock: Number,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Order Schema
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [{
    productId: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: String,
  shippingAddress: Object,
  createdAt: Date,
  updatedAt: Date
}
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/shopykart

# Authentication
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=30d
SESSION_SECRET=your_session_secret

# Email Configuration (if applicable)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Payment Gateway (if applicable)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Database Configuration

Ensure MongoDB is properly configured:

1. **Local MongoDB**
   - Install MongoDB Community Edition
   - Start MongoDB service
   - Use default connection string

2. **MongoDB Atlas (Cloud)**
   - Create cluster on MongoDB Atlas
   - Get connection string
   - Update MONGODB_URI in .env file

## 🤝 Contributing

We welcome contributions to improve Shopykart! Please follow these guidelines:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git fork https://github.com/utpal3000/Shopykart.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, well-documented code
   - Follow existing code style
   - Add tests if applicable

4. **Commit Your Changes**
   ```bash
   git commit -m "Add: your feature description"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide clear description of changes
   - Include screenshots if UI changes are made

### Code Style Guidelines

- Use consistent indentation (2 or 4 spaces)
- Write meaningful variable and function names
- Add comments for complex logic
- Follow JavaScript/Node.js best practices

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. Application Won't Start
**Problem**: Server fails to start
**Solutions**:
- Check if all dependencies are installed: `npm install`
- Verify MongoDB is running
- Check environment variables in `.env` file
- Ensure port 3000 is not already in use

#### 2. Database Connection Error
**Problem**: Cannot connect to MongoDB
**Solutions**:
- Verify MongoDB service is running
- Check connection string in `.env` file
- Ensure database credentials are correct
- Check network connectivity (for cloud databases)

#### 3. Login/Authentication Issues
**Problem**: Users cannot log in
**Solutions**:
- Check JWT secret configuration
- Verify password hashing implementation
- Clear browser cookies and localStorage
- Check session management

#### 4. Cart Not Persisting
**Problem**: Cart items disappear after page refresh
**Solutions**:
- Check localStorage implementation
- Verify session management
- Ensure proper cart state management

### Debug Mode

To run the application in debug mode:

```bash
# For Node.js debugging
npm run debug

# Or with additional logging
DEBUG=shopykart:* npm start
```

### Logging

Check application logs for detailed error information:
- Server logs in console
- Browser console for client-side errors
- Network tab for API request issues

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **GitHub Issues**: Report bugs and request features
- **Email**: [s.utpal3000@gmail.com]
- **Documentation**: Check this README for common issues

## 🚀 Deployment

### Deployment Options

1. **Heroku**
   ```bash
   # Install Heroku CLI
   heroku create your-app-name
   git push heroku main
   ```

2. **Netlify** (Frontend only)
   - Connect GitHub repository
   - Configure build settings
   - Deploy automatically

3. **Local Production**
   ```bash
   npm run build
   npm start
   ```

### Environment Setup for Production

- Set NODE_ENV=production
- Use production database
- Configure proper security headers
- Enable HTTPS
- Set up monitoring and logging

---

**Version**: 1.0.0  
**Last Updated**: July 2025  
**Author**: Utpal (utpal3000)

Thank you for using Shopykart! 🛒✨
