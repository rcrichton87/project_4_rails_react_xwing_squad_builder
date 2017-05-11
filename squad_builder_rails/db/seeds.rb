User.destroy_all

user1 = User.create({email: "red5@yavin.com", password: 'iamajedi', password_confirmation: 'iamajedi'})
user2 = User.create({email: "v4der@empire.com", password: 'password', password_confirmation: 'password'})