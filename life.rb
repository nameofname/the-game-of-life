#life.rb
require 'sinatra'
require 'mysql2'

enable :sessions

client = Mysql2::Client.new(
  :adapter  => 'mysql',
  :host     => 'localhost',
  :username => 'ronald',
  :password => 'dev',
  :database => 'life'
)

get '/' do
  #puts settings.root
  #send_file File.join(settings.root, 'public/life.html')
  #"settings.public is this: " + settings.public
  #":views is this: " + settings.root
  "this is the session: " + 
  session["user"] ||= nil
end

post '/new_user' do
  email = params[:email]
  pass = params[:pass]
  client.query("insert into users (id, email, pass) values('', '#{email}', '#{pass}');"); 
  #return result; 
  #"This is yon mail #{params[:mail]}"
  #"This is yon pw #{params[:pw]}"
end

# login and logout

post '/login'
  session["user"] ||= params[:name]


post '/logout'
  session["user"] ||= nil

