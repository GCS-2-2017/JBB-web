JBB-Web é um projeto realizado em parceria com o Jardim Botânico de Brasília que consiste em um site
para a inscrição e agendamento de visitas ao jardim e edicação ambiental, com informações sobre a vejetação e relevo do cerrado.

Alunos:  
Cecilia França Dib de Oliveira Bessa - 14/0134425  
Isaque Alves de Lima - 14/0144544

travis CI: https://travis-ci.org/GCS-2-2017/JBB-web

Heroku: https://jbb-web.herokuapp.com/

------------

## Manual de Instalação/Execução

Vagrant

Na pasta raiz do projeto devem estar presentes os seguintes arquivos:
> ***install-ruby.sh***
>
> ***install-rvm.sh***
>
> ***install-postgresql.sh***
>
> ***Vagrantfile***

Após a verificação dos arquivos execute os seguintes comandos:

```
$ vagrant up --provider virtualbox
```
```
$ vagrant provision
```
```
$ vagrant ssh
```

Logo após o download da box, já dentro do vagrant você deve alterar o arquivo ***.bashrc***:

Você pode utilizar o nano ou o vim como editor para o .bashrc, sendo que recomendamos o nano.

```
$ nano ~/.bashrc
```

No final do arquivo, adicione a pasta do vagrant para ele acessar a pasta compartilhada entre os SO's sempre que a máquina for iniciada, para isso execute o seguinte comando:

```
$ cd /vagrant/
```

Feito isso salve e feche o arquivo, agora toda vez que o ambiente for ligado ele já estará na pasta compartilhada.

Para configurar o banco de dados execute os seguintes passos:

```
$ sudo su
```
```
$ cd
```
```
$ nano /etc/postgresql/9.5/main/pg_hba.conf
```

Feito isso altere as linhas abaixo:

> local	all	postgres	peer

> local	all	all	peer

para:

> local	all	postgres	trust

> local	all	all	trust

Feito isso ainda no usuário root reinicie o serviço postgresql e saia do modo root:

```
$ service postgresql reload
```

```
$ exit
```

Entre no serviço postgresql com o usuário postgres e crie o usuário travis para a aplicação:

```
$ psql -U postgres
```

```
$ create user travis with createdb;
```

Para sair use um dos seguintes comandos:

```
$ Ctrl-D
```

```
$ \q
```

O próximo passo é acessar a pasta raiz do projeto utilizando o seguinte comando:

```
$ cd /vagrant/JBB-Web/
```

Após isso é só executar os seguintes comandos:

```
$ bundle install
```
```
$ rake db:setup
```

Para executar o projeto é necessário iniciar o servidor do rails, para isso utilize o seguinte comando:

```
$ rails s
```
--------------

## Manual de Execução

Se já estiver configurado, execute os seguintes comandos:

```
$ vagrant up
```
```
$ vagrant ssh
```

Acesse a pasta do projeto através do comando:

```
$ cd JBB-Web
```

Execute o projeto com o seguinte comando:

```
$ rails s
```
--------------
## Empacotamento

O projeto empacotado juntamente com uma cópia do arquivo de descrição encontra-se disponível na pasta package disponível na raiz do projeto.
