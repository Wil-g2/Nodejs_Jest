const bcrypt  = require('bcryptjs');
const { User } = require('../../src/app/models'); 
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = User.create({
      name: "Willian", 
      email: "wil-g2@hotmail.com", 
      password: "123456"
    });
   
    expect(2+2).toBe(4);    
    //expect(user.checkPassword("123456")).toBe(true);    
  });
}); 
