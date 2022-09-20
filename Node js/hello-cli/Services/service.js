let Database = require("../Data/Data.json")
let path = require("path")

const loginData = []
var sellerDetail = []

let Login = async (req, res)=>{
    const body = req.body

    let Data = Database

    let loginData = Data.result.filter(typeArray => typeArray.email === body.email && typeArray.password === body.password);
    // console.log('loginData-->>',loginData[0].length)

    if(loginData &&loginData[0] && loginData.length>0){
        res.json({
            apiStatus:"true",
            message: loginData[0].username + " Login Success",
            result: loginData[0]
        })
    } else {
        res.json(400,{
            apiStatus:"False",
            message: "Login Failed ",
        })
}

}

let Dashboard = async (req, res)=> {
    //const body = req.body
    
    let dashboard_result = Database.result

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: dashboard_result
    })
}

let product = async (req, res)=> {
    const body = req.body

    res.json({
        apiStatus:"true",
        message: "Successfull",

    })
}

let waitingProduct = async (req, res)=> {

    sellerDetail = Database.sellerDetail

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: sellerDetail
    })
}

let feeds = async (req, res)=> {

    feeds = Database.feeds

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: feeds
    })
}

let regions = async (req, res)=> {

    image = Database.regions

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: image
    })
}

let General_Status = async (req, res)=> {

    data = Database.General_Status

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}

let Countries = async (req, res)=> {

    data = Database.Countries

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}

let Recent_Users = async (req, res)=> {

    data = Database.Recent_Users

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}

let Recent_Comments = async (req, res)=> {

    data = Database.Recent_Comments

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}

let about = async (req, res)=> {

    data = Database.about

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}

let views = async (req, res)=> {

    data = Database.views

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}

let useradimage = async (req, res)=> {

    data = Database.user_ad

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}

let user_jeans = async (req, res)=> {

    data = Database.user_jeans

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}

let smartPhones = async (req, res)=> {

    data = Database.smartPhones

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}

let userGeneral = async (req, res)=> {

    data = Database.userGeneral

    return res.send({
        StatusCode: 200,
        apiStatus:"true",
        message: "success",
        result: data
    })
}
    // res.json({
    //     apiStatus:"true",
    //     message: loginData[0].username + "Login Success",
    //     result: loginData[0]
    // })

module.exports = {Login, Dashboard, product, waitingProduct, feeds, regions, General_Status, Countries,
                Recent_Users, Recent_Comments, about, views, useradimage, user_jeans, smartPhones, userGeneral}
