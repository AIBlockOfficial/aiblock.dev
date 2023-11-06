module.exports = [{
    "type": "doc",
    "id": "mempool-api/mempool-api"
}, {
    "type": "category", "label": "info", "link": {
        "type": "doc",
        "id": "mempool-api/info"
    }, "collapsible": false, "items": [{
        "type": "doc",
        "id": "mempool-api/debug-data", "label": "debug_data", "className": "api-method get"
    }]
}, {
    "type": "category", "label": "transaction", "link": {
        "type": "doc",
        "id": "mempool-api/transaction"
    }, "collapsible": false, "items": [{
        "type": "doc",
        "id": "mempool-api/create-tx", "label": "create_transactions - Incomplete", "className": "api-method post"
    }, {
        "type": "doc",
        "id": "mempool-api/create-receipt-asset", "label": "create_receipt_asset", "className": "api-method post"
    }]
}, {
    "type": "category", "label": "address", "link": {
        "type": "doc",
        "id": "mempool-api/address"
    }, "collapsible": false, "items": [{
        "type": "doc",
        "id": "mempool-api/fetch-balance", "label": "fetch_balance", "className": "api-method post"
    }]
}];