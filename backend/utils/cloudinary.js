//cloudinary
const cloudinary = require("cloudinary").v2;

//cl config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//cl upload
export function uploadImage(imageUploaded) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      imageUploaded,
      {
        width: 400,
        height: 400,
        crop: "fill",
      },
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
}
