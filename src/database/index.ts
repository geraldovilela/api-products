import mongoose from "mongoose";
import {config} from "../config/config";

mongoose.connect(config.mongo_url, config.mongo_options)
mongoose.Promise = global.Promise;

export default mongoose;