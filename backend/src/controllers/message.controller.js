import Message from "../models/message.model.js";
import User from "../models/User.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getAllContancts = async (req,res) => {
    try {
        const loggedInUser = req.user;
        const contacts = await User.find({
            _id: { $ne: loggedInUser._id }
        }).select("-password");
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal server error"})
    }
}

export const getMessagesByUserId = async (req,res) => {
    try {
        const myId = req.user._id;
        const {id:userId} = req.params;
        const messages = await Message.find({
            $or:[
                {senderId:myId,receiverId:userId},
                {senderId:userId,receiverId:myId}
            ]
        })
        
        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getmessage controller:",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export const sendMessage = async (req,res) => {
    try {
        const {id:receiverId} = req.params;
        const {text,image} = req.body;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = await Message({
            senderId,
            receiverId,
            text,
            image:imageUrl,
        });

        await newMessage.save();

        res.status(200).json(newMessage)
    } catch (error) {
        console.log("Error in sendmessage controller:",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export const getChatPartner = async (req,res) => {
    try {
        const loggedinUserId = req.user._id;
        const messages = await Message.find({
            $or:[
                {senderId:loggedinUserId},
                {receiverId:loggedinUserId}
            ]
        });
        const ChatPartnerIds = [...new Set(messages.map((msg)=>{
            return msg.senderId.toString() === loggedinUserId.toString() ? msg.receiverId.toString() : msg.senderId.toString();
        }))];

        const chatPartners = await User.find({
            _id: { $in: ChatPartnerIds }
        }).select("-password");

        res.status(200).json(chatPartners)
    } catch (error) {
        console.log("Error in getchatpartner controller:",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}