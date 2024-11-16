
# $ docker run --name wdv-mysql -e MYSQL_ROOT_PASSWORD=654321 -d mysql:latest
# $ docker run -p 8080:3306 --name wdv-mysql -e MYSQL_ROOT_PASSWORD=654321 -d mysql:latest

## tabela criada
create table usuarios(
id integer primary key not null auto_increment,
  nome varchar(255) not null,
  email varchar(255) not null,
  fone varchar(45),
  nascimento date
);
# primeiro usuario inserido!
INSERT INTO usuarios(nome, email, fone, nascimento)
VALUES('def','def@yahoo.com','1234-1234','1985-01-01');