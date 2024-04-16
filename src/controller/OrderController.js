const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");

class OrderController {
  async createOrder(req, res) {
    const order = req.body;
    try {
      const productIds = order.orderItems.map((item) => item.product);
      const updatePromises = order.orderItems.map(async (item) => {
        const product = await Product.findById(item.product);
        product.countInStock -= item.amount;
        product.selled += item.amount;
        await product.save();
      });
      await Promise.all(updatePromises);
      const orders = new Order(order)
      await orders.save()
      return res.status(200).json({
        status:"thành công",
        data: order
      });
    } catch (error) {
      return res.status(500).json({
        status: "Lỗi khi tạo đơn hàng",
        message: error.message,
      });
    }
  }
  async getAllOrder(req, res) {
  const idOrder =  req.userInfo.id
  if(!idOrder){
    return res.status(400).json({
      status:"error",
      message: "no tokens"
    })
  }
  try {
    const orderAll = await Order.find({
      id: idOrder
    })
    return res.status(200).json({
      status: "succsess",
      data: orderAll
    })

   
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
  
  }
  async getDetailOrder(req, res) {
    const idOrder = req.params.id;
    if (!idOrder) {
      return res.status(400).json({
        status: "error",
        message: "no id",
      });
    }

    try {
      const details = await Order.findById({
        _id: idOrder,
      });
      return res.status(200).json({
        status: "succsess",
        data: details,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}

module.exports = new OrderController();