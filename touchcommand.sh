mkdir backend backend/controllers backend/models backend/routes backend/config backend/middleware

# Create backend files
touch backend/server.js backend/.env backend/package.json
touch backend/config/db.js backend/middleware/authMiddleware.js

# Create models
touch backend/models/User.js backend/models/Post.js backend/models/Leave.js

# Create controllers
touch backend/controllers/authController.js backend/controllers/employeeController.js backend/controllers/adminController.js backend/controllers/postController.js

# Create routes
touch backend/routes/authRoutes.js backend/routes/employeeRoutes.js backend/routes/adminRoutes.js backend/routes/postRoutes.js

# Create frontend folder and subfolders
mkdir frontend frontend/assets

# Create frontend files
touch frontend/index.html frontend/login.html frontend/dashboard.html frontend/admin.html frontend/community.html frontend/leave.html
touch frontend/assets/styles.css frontend/assets/script.js

# Create README
touch README.md
