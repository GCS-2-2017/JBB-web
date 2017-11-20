execute "apt-get update" do
  command "apt-get update"
end

# OS Dendencies
%w(git ruby-dev build-essential libsqlite3-dev libssl-dev).each do |pkg|
  package pkg
end

# Allow sudo command without password for sudoers
cookbook_file "sudo_without_password" do
  source "sudo_without_password"
  path "/etc/sudoers.d/sudo_without_password"
  group "root"
  owner "root"
  mode 0440
  action :create_if_missing
end

# Authorize yourself to connect to server
cookbook_file "authorized_keys" do
  source "authorized_keys"
  path "/home/deployer/.ssh/authorized_keys"
  group "deployer"
  owner "deployer"
  mode 0600
  action :create
end

# Add Github as known host
ssh_known_hosts_entry 'github.com'

# Install Ruby Version
include_recipe 'ruby_build'

ruby_build_ruby '2.3.1'

link "/usr/bin/ruby" do
  to "/usr/local/ruby/2.3.1/bin/ruby"
end

gem_package 'bundler' do
  options '--no-ri --no-rdoc'
end

# Install Rails Application
include_recipe "runit"
application 'JBB-web' do
  owner 'deployer'
  group 'deployer'
  repository 'git@github.com:GCS-2-2017/JBB-web.git'
  rails do
    bundler true
    end
  end
  unicorn do
    worker_processes 2
  end
end
