const Order = require('../../../models/order')

function statusController() {
    return {
        update(req, res) {
            console.log("update request")
            Order.updateOne({_id: req.body.orderId}, { status: req.body.status }, (err, data)=> {
                if(err) {
                    console.log(err,"error in update")
                    return res.redirect('/admin/orders')
                }
                // Emit event 
                const eventEmitter = req.app.get('eventEmitter')
                console.log(eventEmitter,'event emitter')
                eventEmitter.emit('orderUpdated', { id: req.body.orderId, status: req.body.status })
                return res.redirect('/admin/orders')
            })
        }
    }
}

module.exports = statusController