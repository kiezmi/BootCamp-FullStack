###
#
#	Archivo de scripts
#
###

#Variables
DBHOST=localhost
DBNAME=prueba
DBUSER=root
DBPASSWORD=root

echo -e "\n--- Preparado para instalar... ---\n"

echo -e "\n--- Actualizando la máquina... ---\n"
apt-get update && apt-get upgrade -y

echo -e "\n--- Instalando paquetes base... ---\n"
apt-get -y install curl build-essential python-software-properties git >> /vagrant/vm_build.log

echo -e "\n--- Instalando Mysql... ---\n"
debconf-set-selections <<< "mysql-server mysql-server/root_password password $DBPASSWORD"
debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $DBPASSWORD"
apt-get -y install mysql-server >> /vagrant/vm_mysql_build.log

echo -e "\n--- Dando permisos para conexiones exteriores a MYSQL... ---\n"
mysql -uroot -p$DBPASSWORD -e"CREATE DATABASE $DBNAME" >> /vagrant/vm_build.log
mysql -uroot -p$DBPASSWORD -e"grant all privileges on $DBNAME.* to '$DBUSER'@'localhost'identified by '$DBPASSWORD'" >> /vagrant/vm_build.log

echo -e "\n--- Instalando PHP... ---\n"
#apt-get-repository ppa:ondrej/php
apt-get update && apt-get upgrade -y
apt-get -y install php apache2 libapache2-mod-php php-curl php-gd php-mysql php-gettext >> /vagrant/vm_php_build.log

echo -e "\n--- Activando el mod-rewrite... ---\n"
a2enmod rewrite >> /vagrant/vm_php_build.log
