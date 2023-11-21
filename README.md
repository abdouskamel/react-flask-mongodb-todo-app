# React-Flask-MongoDB Todo App

Todo app built with React for the front-end, Flask for the backend, and MongoDB for the database.

## Requirements

Install dependencies:
```
pip install flask flask-cors pymongo[srv]
npm install
```

## Usage

1. Launch your MongoDB server:
```
sudo systemctl start mongod
```

2. Edit `MONGODB_CONNECTION_STRING` in `api/config.py` with your connection string.

3. Launch the backend server:
```
cd api
flask --app main run
```

4. Edit `API_URI` in `src/config.json` with the address of your Flask application.

5. Start the React app in the root directory:
```
npm start
```