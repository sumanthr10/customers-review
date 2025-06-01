require 'pg'

conn = PG.connect(
  dbname: 'postgres',
  user: 'sumanthreddy',
  password: '1994',
  host: '127.0.0.1',
  port: 5432
)
puts "Connected to PostgreSQL!"
