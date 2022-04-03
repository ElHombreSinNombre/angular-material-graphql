import mongoose from "mongoose";

const MONGODB_URI = 'MONGODB_URI';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected')).catch(err => console.log(err));
