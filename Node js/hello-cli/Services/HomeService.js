// let sellerLogin = async (req, res)=> {
//     const body = req.body

//     let seller_result = Database.seller
//     if(seller_result.some(seller => seller.email === body.email && seller.password === body.password))
//     {
//         res.json({
//             apiStatus:"true",
//             result:"Seller Login Success"
//         })
//     } else {
//         res.json({
//             apiStatus:"false",
//             result:"Seller Login failed"
//         })
//     }
// }

// let registerLogin = async (req, res)=> {
//     const body = req.body

//     let register_result = Database.register
//     if(register_result.some(register => register.email === body.email && register.password === body.password))
//     {
//         res.json({
//             apiStatus:"true",
//             result:"Register successfull"
//         })
//     } else {
//         res.json({
//             apiStatus:"false",
//             result:"Register failed"
//         })
//     }
// }

// let userLogin = async (req, res)=> {
//     const body = req.body

//     let user_result = Database.user
//     if(user_result.some(user => user.email === body.email && user.password === body.password))
//     {
//         res.json({
//             apiStatus:"true",
//             result:"User Login failed"
//         })
//     } else {
//         res.json(400, {
//             apiStatus:"false",
//             result:"User Login failed"
//         })
//     }
// }