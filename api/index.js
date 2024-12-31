const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();

// Cấu hình các route tĩnh
app.use("/public", express.static(path.join(__dirname, "../public"))); // Sửa lại đường dẫn cho đúng
app.use("/assets", express.static(path.join(__dirname, "../assets"))); // Sửa lại đường dẫn cho đúng

// Đường dẫn đến trang chủ
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views", "homepage.html"));
});

// Chuyển đổi Express thành một serverless function
module.exports.handler = serverless(app);
