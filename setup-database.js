const db = require('./database');

// Create a sample table
const createTableQuery = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)';
db.exec(createTableQuery, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Table "users" created.');
    
    // Insert some data into the table
    const insertDataQuery = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.run(insertDataQuery, ['John Doe', 'john@example.com'], (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Data inserted.');
        
        // Fetch and display the data from the sample table
        const selectDataQuery = 'SELECT * FROM users';
        db.all(selectDataQuery, (err, rows) => {
          if (err) {
            console.error(err);
          } else {
            rows.forEach((row) => {
              console.log(`${row.id}: ${row.name} (${row.email})`);
            });
          }
          
          // Close the database connection
          db.close((err) => {
            if (err) {
              console.error(err.message);
            } else {
              console.log('Database connection closed.');
            }
          });
        });
      }
    });
  }
});
