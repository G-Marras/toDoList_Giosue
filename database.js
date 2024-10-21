import mongoose from 'mongoose';
const dbName = 'todolist'
const user='giosuemarras'

const password='GiosueMarras0'

const connectionUrl = `mongodb+srv://
${user}:${password}
@clustertodolist.phc8r.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=ClusterToDoList'`

const connect = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log('- Connected to MongoDB server');
  } catch (error) {
    console.log('- Connection error', error);
    throw(error);
  }
}
export default connect;