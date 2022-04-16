/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>BookMark</li>
 *     <li>Message</li>
 *     <li>Follow</li>
 * </ul>
 * 
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */

import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import LikeController from "./controllers/LikeController";
import DislikeController from "./controllers/DislikeController";
import BookMarkController from "./controllers/BookMarkController"
import FollowController from './controllers/FollowController';
import MessageController from './controllers/MessageController';
import AuthenticationController from "./controllers/AuthenticationController";
import mongoose from "mongoose";
import UnbookMarkController from "./controllers/UnbookmarkController";
var cors = require('cors')
const session = require("express-session");

// connect to database
const connectionString = `mongodb+srv://meet:meet1234@cluster0.zntvi.mongodb.net/myFirstDatabase?retryWrites=true`;
mongoose.connect(connectionString);

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB Database")
})

const app = express();

app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000", 'https://dulcet-kitsune-7fa4f2.netlify.app', 'https://super-gelato-e19dbd.netlify.app', 'https://melodious-stroopwafel-95ff8d.netlify.app']

}));
const SECRET = 'process.env.SECRET';
let sess = {
  secret: SECRET,
  saveUninitialized: true,
  resave: true,
  cookie: {
      secure: false
  }
}
if (process.env.ENV === 'PRODUCTION') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess))
app.use(express.json());

app.get('/hello', (req, res) =>
res.send('Hello World!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));
// create RESTful Web service API
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const likeController = LikeController.getInstance(app);
const dislikeController = DislikeController.getInstance(app);
const bookmarkController = BookMarkController.getInstance(app);
//const unBookmarkController = UnbookMarkController.getInstance(app);
const followController = FollowController.getInstance(app);
const messageController = MessageController.getInstance(app);
AuthenticationController(app);


/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);