import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("../utils/webtokens");
