
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string) {
      try {
            const res = await prisma.user.create({
                  data:{
                        username,
                        password
                  },
                  select:{
                        id:true,
                        username:true
                  }
              })
              console.log(res);
      } catch (error) {
            console.log(error);
            
      }
}

interface UpdateParams {
      firstName: string;
      lastName: string;
  }
  
  async function updateUser(username: string,newUsername:string,password:string) {
      try {
            const res = await prisma.user.update({
                  where:{
                        username
                  },
                  data:{
                        username:newUsername,
                        password
                  },
                  select:{
                        id:true,
                        username:true
                  }
            })
            console.log(res);
      } catch (error) {
            console.log(error);
      }
  }

// insertUser("knock","12345")

// updateUser("leander006","knock","123")

async function getUser(username: string) {
      try {
            const user = await prisma.user.findMany({
                  select:{
                        id:true,
                        username:true,
                        profile:true,
                  },
                  where:{
                        username,
                  }
            })
            if(user.length > 0){
                  console.log(user[0]);
            }
            else{
                  console.log("No user found");
            }
      } catch (error) {
            console.log(error);
            
      }
}

// getUser("knock")

async function remove(username:string) {
      try {
            const user = await prisma.user.findFirst({
                  where:{
                        username
                  }
            })
            
            if(user == null){
                  return console.log("No user exists");
            }
            await prisma.user.delete({where:{
                  username
            }})
            console.log("deleted successfully");
      } catch (error) {
            console.log(error);
      }
}

// remove("knock");
