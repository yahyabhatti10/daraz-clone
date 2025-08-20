# Daraz Clone

A Clone of well known web application named Daraz.pk, built with React (frontend) and Node.js/Express/MongoDB (backend).

---

## Features

- Browse products by category
- Browse all products
- Browser products on Sale
- User authentication using JWT (signup/login)
- Responsive design

---

## Technologies Used

- **Frontend:** React, Redux Toolkit, Vite
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT
- **Deployment:** Vercel, Render

---

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yahyabhatti10/daraz-clone.git
   cd daraz-clone
   ```

2. **Install dependencies for backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for frontend:**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**

   - Create a `.env` file in the `backend` folder:

     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=8000
     HASH_PASSWORD_SECRET=your_hash_password_secret
     SALT_ROUNDS=no_of_salt_rounds
     ACCESS_TOKEN_SECRET=your_access_token_secret
     REFRESH_TOKEN_SECRET=your_refresh_token_secret

     ```

---

## Running the Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

- The frontend will run on `http://localhost:5173` (default Vite port)
- The backend will run on `http://localhost:8000` (or as configured)

---

## API Endpoints

- `/signup` - User signup
- `/login` - User login
- `/products` - Get all products
- `/products/:categoryId` - Get products by categoryID
- `/categories` - Get all categories
- `/dashboard` - User data (protected route)
- ...and more

---

## Folder Structure

```
.
├── backend
│   ├── app.js
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── categoryController.js
│   │   ├── productController.js
│   │   ├── protectedController.js
│   │   └── userController.js
│   ├── data
│   │   └── data.js
│   ├── middleware
│   │   └── authenticateToken.js
│   ├── models
│   │   ├── Category.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── package.json
│   ├── package-lock.json
│   ├── routes
│   │   ├── categoryRoutes.js
│   │   ├── productRoutes.js
│   │   ├── protectedRoutes.js
│   │   └── userRoutes.js
│   ├── seed.js
│   ├── server.js
│   └── utils
│       └── auth
│           ├── password.js
│           └── token.js
├── frontend
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   └── daraz.svg
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── ads
│   │   │   │   ├── ad10.png
│   │   │   │   ├── ad11.png
│   │   │   │   ├── ad12.png
│   │   │   │   ├── ad13.png
│   │   │   │   ├── ad14.png
│   │   │   │   ├── ad15.png
│   │   │   │   ├── ad1.png
│   │   │   │   ├── ad2.png
│   │   │   │   ├── ad3.png
│   │   │   │   ├── ad4.png
│   │   │   │   ├── ad5.png
│   │   │   │   ├── ad6.png
│   │   │   │   ├── ad7.png
│   │   │   │   ├── ad8.png
│   │   │   │   ├── ad9.png
│   │   │   │   ├── daraz-app-ad.png
│   │   │   │   └── saleAd.webp
│   │   │   ├── categories
│   │   │   │   ├── Automotive.png
│   │   │   │   ├── Computing.png
│   │   │   │   ├── Electronic.png
│   │   │   │   ├── Fashion.png
│   │   │   │   ├── Grocery.png
│   │   │   │   ├── HealthBeauty.png
│   │   │   │   ├── HomeAppliances.png
│   │   │   │   ├── Mobile.png
│   │   │   │   ├── Sports.png
│   │   │   │   └── Toys.png
│   │   │   ├── downloadApp
│   │   │   │   ├── appGallery.png
│   │   │   │   ├── appStore.png
│   │   │   │   └── googlePlay.png
│   │   │   ├── flags
│   │   │   │   ├── bangladesh.png
│   │   │   │   ├── myanmar.png
│   │   │   │   ├── nepal.png
│   │   │   │   ├── pakistan.png
│   │   │   │   └── srilanka.png
│   │   │   ├── logo
│   │   │   │   ├── logoBG.png
│   │   │   │   └── logo.png
│   │   │   ├── paymentMethods
│   │   │   │   ├── 1.png
│   │   │   │   ├── 2.png
│   │   │   │   ├── 3.png
│   │   │   │   ├── 4.png
│   │   │   │   ├── 5.png
│   │   │   │   ├── 6.png
│   │   │   │   ├── 7.png
│   │   │   │   ├── 8.png
│   │   │   │   ├── 9.png
│   │   │   │   └── verification.png
│   │   │   └── socialIcons
│   │   │       ├── facebook.png
│   │   │       ├── instagram.png
│   │   │       ├── twitter.png
│   │   │       └── youtube.png
│   │   ├── components
│   │   │   ├── ads
│   │   │   │   ├── adSlider
│   │   │   │   │   ├── AdSlider.css
│   │   │   │   │   └── AdSlider.jsx
│   │   │   │   ├── darazAppAd
│   │   │   │   │   └── DarazAppAd.jsx
│   │   │   │   └── saleAd
│   │   │   │       └── SaleAd.jsx
│   │   │   ├── category
│   │   │   │   ├── categoryCard
│   │   │   │   │   ├── CategoryCard.css
│   │   │   │   │   └── CategoryCard.jsx
│   │   │   │   └── categoryList
│   │   │   │       └── CategoryList.jsx
│   │   │   ├── elements
│   │   │   │   └── countryIcon.jsx
│   │   │   ├── layout
│   │   │   │   ├── footer
│   │   │   │   │   └── Footer.jsx
│   │   │   │   ├── footerBottom
│   │   │   │   │   └── FooterBottom.jsx
│   │   │   │   ├── footerContent
│   │   │   │   │   ├── FooterContent.css
│   │   │   │   │   └── FooterContent.jsx
│   │   │   │   ├── footerLinks
│   │   │   │   │   ├── FooterLinks.css
│   │   │   │   │   └── FooterLinks.jsx
│   │   │   │   ├── header
│   │   │   │   │   ├── Header.css
│   │   │   │   │   └── Header.jsx
│   │   │   │   ├── navbar
│   │   │   │   │   ├── Navbar.css
│   │   │   │   │   └── Navbar.jsx
│   │   │   │   └── paymentMethods
│   │   │   │       └── PaymentMethods.jsx
│   │   │   └── product
│   │   │       ├── productCard
│   │   │       │   ├── ProductCard.css
│   │   │       │   └── ProductCard.jsx
│   │   │       ├── productList
│   │   │       │   ├── ProductList.css
│   │   │       │   └── ProductList.jsx
│   │   │       └── saleProductList
│   │   │           ├── SaleProductList.css
│   │   │           └── SaleProductList.jsx
│   │   ├── context
│   │   │   ├── ProductContext.js
│   │   │   └── ProductProvider.jsx
│   │   ├── data
│   │   │   └── data.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── CategoryProducts.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── SaleProducts.jsx
│   │   │   └── Signup.jsx
│   │   ├── routes
│   │   │   ├── AppRoutes.jsx
│   │   │   └── ProtectedRoutes.jsx
│   │   ├── store
│   │   │   ├── categories
│   │   │   │   ├── categorySlice.js
│   │   │   │   └── categoryThunk.js
│   │   │   ├── products
│   │   │   │   ├── productSlice.js
│   │   │   │   └── productThunk.js
│   │   │   └── store.js
│   │   └── utils
│   │       └── scrollToTop.js
│   └── vite.config.js
├── README.md
└── vercel.json
```

---

## Author

- [yahyabhatti10](https://github.com/yahyabhatti10)
