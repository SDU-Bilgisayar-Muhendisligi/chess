const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chess"
});

let jsonData = [];

app.post('/chess', (req, res) => {
  const sql = "INSERT INTO login (name, email, password, level, registration_date) VALUES (?, ?, ?, ?, NOW())";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.level
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error");
    }
    jsonData.push({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      level: req.body.level,
      registration_date: new Date().toISOString()
    });
    return res.json(data);
  });
});

app.get('/login-json', (req, res) => {
  const sql = "SELECT * FROM login";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error");
    }
    const formattedData = data.map(item => {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        password: item.password,
        level: item.level,
        registration_date: item.registration_date
      };
    });
    return res.json(formattedData);
  });
});

app.get('/login-json/:email', (req, res) => {
  const { email } = req.params;
  const sql = "SELECT * FROM login WHERE email = ?";
  
  db.query(sql, [email], (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error");
    }
    
    const userData = data.map(item => {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        password: item.password,
        level: item.level,
        registration_date: item.registration_date
      };
    });

    res.json(userData);
  });
});

//playerPage sayfası için
app.get('/user-json', (req, res) => {
  const { email } = req.query;
  const sql = "SELECT * FROM login WHERE email = ?";
  
  db.query(sql, [email], (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error");
    }
    
    if (data.length > 0) {
      const userData = {
        id: data[0].id,
        name: data[0].name,
        email: data[0].email,
        password: data[0].password,
        level: data[0].level,
        registration_date: data[0].registration_date
      };
      return res.json(userData);
    } else {
      return res.json("User not found");
    }
  });
});

// settings için get isteği
//http://localhost:8081/current-user?email=deneme16@deneme16.com
app.get('/current-user', (req, res) => {
  const { email } = req.query;
  const sql = "SELECT * FROM login WHERE email = ?";

  db.query(sql, [email], (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error");
    }

    if (data.length > 0) {
      const currentUser = {
        id: data[0].id,
        name: data[0].name,
        email: data[0].email,
        password: data[0].password,
        level: data[0].level,
        registration_date: data[0].registration_date
      };
      return res.json(currentUser);
    } else {
      return res.json("User not found");
    }
  });
});

app.post('/update-user', (req, res) => {
  const { email, name, password } = req.body;


  const checkEmailQuery = 'SELECT * FROM login WHERE email = ?';
  db.query(checkEmailQuery, [email], (error, results) => {
    if (error) {
      console.error(error);
      return res.json('Error');
    }

    if (results.length === 0) {
      return res.json('User not found');
    }

  
    let updateQuery = 'UPDATE login SET';
    const updateValues = [];

    if (name) {
      updateQuery += ' name = ?,';
      updateValues.push(name);
    }

    if (password) {
      updateQuery += ' password = ?,';
      updateValues.push(password);
    }


    updateQuery = updateQuery.slice(0, -1) + ' WHERE email = ?';
    updateValues.push(email);

    db.query(updateQuery, updateValues, (error) => {
      if (error) {
        console.error(error);
        return res.json('Error');
      }

      return res.json('User updated successfully');
    });
  });
});



app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  const values = [
    req.body.email,
    req.body.password
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

//score tablosu
app.post('/update-score', (req, res) => {
  const { winnerColor, loserColor, draw, username } = req.body;

  if (draw) {
    const updateScoreQuery = 'UPDATE score SET user_score = user_score + 10 WHERE username = ?';
    db.query(updateScoreQuery, [username], (error) => {
      if (error) {
        console.error(error);
        return res.json('Hata');
      }
      
      return res.json('Skorlar başarıyla güncellendi');
    });
  } else {
    const scoreIncrement = winnerColor === 'white' ? 100 : -50;
    const updateScoreQuery = 'UPDATE score SET user_score = user_score + ? WHERE username = ?';
    db.query(updateScoreQuery, [scoreIncrement, username], (error) => {
      if (error) {
        console.error(error);
        return res.json('Hata');
      }
      
      return res.json('Skorlar başarıyla güncellendi');
    });
  }
});

app.post('/add-user-score', (req, res) => {
  const { username } = req.body;

  const checkUserQuery = 'SELECT * FROM score WHERE username = ?';
  db.query(checkUserQuery, [username], (error, results) => {
    if (error) {
      console.error(error);
      return res.json('Hata');
    }

    if (results.length === 0) {
      const insertScoreQuery = 'INSERT INTO score (username, user_score) VALUES (?, 0)';
      db.query(insertScoreQuery, [username], (error) => {
        if (error) {
          console.error(error);
          return res.json('Hata');
        }

        return res.json('Kullanıcı skoru başarıyla eklendi');
      });
    } else {
      return res.json('Kullanıcı zaten skor tablosunda mevcut');
    }
  });
});

app.get('/user-score/:username', (req, res) => {
  const { username } = req.params;
  const sql = 'SELECT * FROM score WHERE username = ?';

  db.query(sql, [username], (err, data) => {
    if (err) {
      console.error(err);
      return res.json('Hata');
    }

    if (data.length > 0) {
      const userScore = {
        id: data[0].id,
        username: data[0].username,
        user_score: data[0].user_score,
      };
      return res.json(userScore);
    } else {
      return res.json('Kullanıcı bulunamadı');
    }
  });
});
app.get('/user-score', (req, res) => {
  const sql = 'SELECT * FROM score';

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.json('Hata');
    }

    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
