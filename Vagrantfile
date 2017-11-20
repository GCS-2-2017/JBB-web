# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 3000, host: 3000

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision :shell, path: "install-rvm.sh", args: "stable", privileged: false
  config.vm.provision :shell, path: "install-ruby.sh", args: "2.3.1", privileged: false
  config.vm.provision :shell, path: "install-ruby.sh", args: "2.3.1 rails haml", privileged: false
  config.vm.provision :shell, path: "install-postgresql.sh", args: "9.5.4", privileged: false

  config.vm.provision "shell", inline: <<-SHELL, privileged: false
    sudo apt-get update
    sudo apt-get install -y nodejs nodejs-legacy postgresql-common postgresql-9.5
    sudo apt-get install -y git curl automake build-essential bison
    sudo apt-get install -y libpq-dev libssl-dev libtool libcurl4-openssl-dev
    sudo apt-get install -y libyaml-dev libreadline-dev libxml2-dev libxslt1-dev
    sudo apt-get install -y libffi-dev libffi-dev libgdbm-dev libncurses5-dev
    sudo apt-get install -y libsqlite3-dev sqlite3 zlib1g-dev
    sudo apt-get install -y python-software-properties
    rvm default ruby-2.3.1
    gem install bundler
    gem install nokogiri -v '1.6.8'
    gem install rails
    sudo apt-get autoremove
    sudo apt-get autoclean
    sudo apt-get update
    cd /vagrant/
    bundle install
  SHELL
#  config.vm.provision "chef_solo" do |chef|
#    chef.cookbooks_path = ["cookbooks", "site-cookbooks"]
#    chef.add_recipe "rails-stack"
# end
end
