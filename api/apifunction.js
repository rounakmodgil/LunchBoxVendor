import AxiosInstance from "./axiosInstance";
import {getAppToken} from "../util/token";

AxiosInstance.addBaseUrlToAxiosInstance();

export const loginVendor = async (userName, password) => {
  return AxiosInstance.instance.post("/lb_vendor_login", {
    username: userName,
    password: password,
  }).then((res)=>{ return res});
  
};

export const updateVendor = async (id, businessname, regno, gstno, foodlicense, name,  phonenumber, email, city, address, landmark, state, pincode, newpassword, newpasswordcp) => {
  return AxiosInstance.instance.post(`/lb_vendor_update_profile/${id}`, {
    lb_vendor_business_name: businessname,
    lb_vendor_reg_no:regno,
    lb_vendor_gst_no:gstno,
    lb_vendor_food_license: foodlicense,
    lb_vendor_contact_name: name,
    lb_vendor_phone: phonenumber,
    lb_vendor_email: email,
    lb_vendor_city:city,
    lb_vendor_address: address,
    lb_vendor_landmark: landmark,
    lb_vendor_state:state,
    lb_vendor_pincode: pincode,
    newpassword: newpassword,
    newpasswordcp:newpasswordcp
  }).then((res)=>{return res});
};

export const vendorRegistration = async (businessname, regno, gstno, foodlicense, name,  phonenumber, email, city, address, landmark, state, pincode, password) => {
  return AxiosInstance.instance.post("/lb_vendor_register", {
    lb_vendor_business_name: businessname,
    lb_vendor_reg_no:regno,
    lb_vendor_gst_no:gstno,
    lb_vendor_food_license: foodlicense,
    lb_vendor_contact_name: name,
    lb_vendor_phone: phonenumber,
    lb_vendor_email: email,
    lb_vendor_city:city,
    lb_vendor_address: address,
    lb_vendor_landmark: landmark,
    lb_vendor_state:state,
    lb_vendor_pincode: pincode,
    password: password
    
  }).then((res)=>{return res});
};

export const getVendor = async (id) => {
  return AxiosInstance.instance.get(`/lb_vendor_get_profile/${id}`)
  .then((res)=>{return res});
};

export const getCategories = async () => {
  return AxiosInstance.instance.get(`/lb_vendor_categories/`)
  .then((res)=>{return res});
};
