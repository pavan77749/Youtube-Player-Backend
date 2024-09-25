import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
    cloud_name:process.env.CLOUD_NAME,
})

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
        // upload file on cloudinary
        const response =  await  cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary",response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

export {uploadOnCloudinary}
