-- 质押项目
CREATE TABLE staking_platforms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  logo_url VARCHAR(255) NOT NULL,
  reward_min DECIMAL(5,1) NOT NULL,
  reward_max DECIMAL(5,1) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  synopsis TEXT NOT NULL,
  commission DECIMAL(5,1) NOT NULL,
  unbonding VARCHAR(255) NOT NULL,
  reward VARCHAR(255) NOT NULL,
  validator_address VARCHAR(255) NOT NULL,
  block_explorer VARCHAR(255) NOT NULL,
  about TEXT NOT NULL,
  resources VARCHAR(255) NOT NULL,
  staking_guide_title VARCHAR(255) NOT NULL,
  staking_guide TEXT NOT NULL,
  full_guide VARCHAR(255) NOT NULL,
  staking_guide_worth VARCHAR(255) NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert initial data
INSERT INTO staking_platforms (name, logo_url, reward_min, reward_max, sort_order)
VALUES
  ('PlatON', '/logos/platon.svg', 15.00, 25.00, 1),
  ('Oasis Labs', '/logos/oasis.svg', 6.00, 20.00, 2);

-- 用户
CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data
INSERT INTO users (name, company, email) VALUES
('John Doe', 'Acme Corp', 'john@acme.com'),
('Jane Smith', 'Tech Inc', 'jane@tech.com');

-- 管理员
CREATE TABLE administrators (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin (password: admin123)
INSERT INTO administrators (username, email, password) 
VALUES ('admin', 'admin@example.com', '$2b$10$8RrWGzDJJVE5vNqMJL6yAeRPHGCNZoKSzMXqkWGCh0FKpL3JzKVyW');

INSERT INTO administrators (username, email, password) 
VALUES ('lfxy_1', 'admin@lfxy.com', 'wmzcl1gpt@@@');

-- 管理员登录记录
CREATE TABLE admin_login_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  admin_id INT NOT NULL,
  username VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(50),
  FOREIGN KEY (admin_id) REFERENCES administrators(id) ON DELETE CASCADE
);

-- 质押项目介绍
CREATE TABLE staking_platforms_present (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  synopsis VARCHAR(255) NOT NULL,
  validator_address VARCHAR(255) NOT NULL,
  commission DECIMAL(5,2) NOT NULL,
  unbonding_period VARCHAR(255) DEFAULT NULL,
  reward_frequency VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 质押项目关联
CREATE TABLE staking_platforms_relation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  interlink_platform_id INT NOT NULL
);

-- 质押项目FQA
CREATE TABLE staking_platforms_qa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  question VARCHAR(255) NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);