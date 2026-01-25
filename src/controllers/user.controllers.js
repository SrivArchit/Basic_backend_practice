import { asynchandler } from '../util/asynchandler.js';
import { ApiError } from '../util/ApiError.js';
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from '../util/cloudinary.js';
import { ApiResponse } from '../util/ApiResponse.js';

const registerUser = asynchandler(async (req, res) => {
  // Your user registration logic here
  //get user data from req.body
  //Validate user data
  //check if user already exists
  //check for images
  //upload images to cloudinary

  const { fullName, email, password, UserName } = req.body;

  if(fullName == "" || email == "" || password == ""){
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = User.findOne({
    $or: [{ email } , { UserName }]
  })

  if(existedUser){
    throw new ApiError(409, "User already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.CoverImage[0]?.path;

  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar is required");
  } 

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage =await uploadOnCloudinary(coverImageLocalPath) 

  if(!avatar){
    throw new ApiError(500, "Unable to upload avatar");
  } 

  const user = await User.create({
    fullName,
    avatar : avatar.url,
    coverImage : coverImage?.url || "",
    email,
    password,
    UserName : UserName.toLowerCase()
  })
  const CreatedUser = await User.findbyId(user._id).select("-password -refreshToken")

  if(!CreatedUser){ 
    throw new ApiError(500, "Unable to create user");
  }

  return res.status(201).json(new ApiResponse(200, "User registered successfully", CreatedUser));
})

export { registerUser };