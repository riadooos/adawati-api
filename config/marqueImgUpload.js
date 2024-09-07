import cloudinaryPackage from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// config cloudinary
const cloudinary = cloudinaryPackage.v2;
cloudinary.config({
  cloud_name: "dtrz3i2f5",
  api_key: "971769924893331",
  api_secret: "K8KIpSAK5v8vQeyexi6mE9C244I",
});

// Create storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png", "webp"],
  params: {
    folder: "articles-adawati-2024-marques",
  },
});

const marqueFileUpload = multer({ storage: storage });

export default marqueFileUpload;
