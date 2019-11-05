const { User } = require('../../src/app/models');

describe("Authentication", () => {
  it("should sum two numbers", async () =>{
    const user = await User.create({
      name: 'willian', 
      email:'wil-g2@hotmail.com', 
      password_hash: '123456'
    }); 
    console.log(user);
    expect(user.email).toBe('wil-g2@hotmail.com');
  });
});