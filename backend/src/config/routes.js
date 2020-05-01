const express = require ('express');

module.exports = server => {

    //Definir URL base para todas as rotas
    const router = express.Router();
    server.use('/api', router);

    //Rotas de ciclo de Pagameto
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles');
}