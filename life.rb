#life.rb
require 'sinatra'
require 'mysql2'


client = Mysql2::Client.new(
  :adapter  => 'mysql',
  :host     => 'localhost',
  :username => 'ronald',
  :password => 'dev',
  :database => 'life'
)

get '/' do
  #puts settings.root
  send_file File.join(settings.root, 'public/life.html')
  #"settings.public is this: " + settings.public
  #":views is this: " + settings.root
end

post '/ajax/user' do
  mail = params[:mail]
  'This is your mail: ' + mail
  client.query("insert into users (data) values('#{mail}');"); 
  #return result; 
  #"This is yon mail #{params[:mail]}"
  #"This is yon pw #{params[:pw]}"
end

