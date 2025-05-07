CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) CHECK (role IN ('freelancer', 'admin')) NOT NULL,
  profile_image TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  company VARCHAR(100),
  phone VARCHAR(20),
  notes TEXT
);
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  client_id INTEGER REFERENCES clients(id) ON DELETE SET NULL,
	  title VARCHAR(200) NOT NULL,
  description TEXT,
  status VARCHAR(20) CHECK (status IN ('active', 'completed')) DEFAULT 'active',
  start_date DATE,
  due_date DATE
);
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  status VARCHAR(20) CHECK (status IN ('todo', 'in-progress', 'done')) DEFAULT 'todo',
  due_date DATE
);
CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  client_id INTEGER REFERENCES clients(id) ON DELETE SET NULL,
  project_id INTEGER REFERENCES projects(id) ON DELETE SET NULL,
  amount DECIMAL(10, 2) NOT NULL,
  due_date DATE,
  status VARCHAR(20) CHECK (status IN ('unpaid', 'paid', 'overdue')) DEFAULT 'unpaid',
  pdf_url TEXT
);
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  invoice_id INTEGER REFERENCES invoices(id) ON DELETE CASCADE,
  amount_paid DECIMAL(10, 2) NOT NULL,
  payment_date DATE NOT NULL,
  payment_method VARCHAR(50) CHECK (payment_method IN ('UPI', 'Bank Transfer'))
);
