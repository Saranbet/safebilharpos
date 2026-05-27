window.SAFE_BILHAR_SEED={
  "settings": {
    "companyName": "Safe Bilhar",
    "ownerName": "Sarande Fombe",
    "phone": "875563554",
    "email": "sarandefombe083@gmail.com",
    "address": "Moçambique",
    "currency": "MT",
    "taxRate": 0,
    "receiptFooter": "Obrigado pela preferência!",
    "lowStockAlert": 3,
    "allowNegativeStock": false,
    "payments": [
      "Dinheiro",
      "M-Pesa",
      "e-Mola",
      "Cartão",
      "Transferência"
    ]
  },
  "activeStore": "store-main",
  "currentCash": null,
  "users": [
    {
      "id": "user-admin",
      "username": "admin",
      "password": "1234",
      "name": "Administrador",
      "role": "admin",
      "active": true
    },
    {
      "id": "user-cashier",
      "username": "caixa",
      "password": "1234",
      "name": "Caixa Principal",
      "role": "cashier",
      "active": true
    },
    {
      "id": "user-manager",
      "username": "gestor",
      "password": "1234",
      "name": "Gestor",
      "role": "manager",
      "active": true
    }
  ],
  "roles": {
    "admin": [
      "dashboard",
      "pos",
      "cash",
      "products",
      "stock",
      "transfers",
      "stores",
      "reports",
      "users",
      "settings"
    ],
    "manager": [
      "dashboard",
      "products",
      "stock",
      "transfers",
      "stores",
      "reports"
    ],
    "cashier": [
      "pos",
      "cash",
      "stock"
    ]
  },
  "stores": [
    {
      "id": "store-main",
      "name": "Loja Principal",
      "address": "Beira",
      "phone": "875563554",
      "active": true
    },
    {
      "id": "store-2",
      "name": "Loja 2",
      "address": "Moçambique",
      "phone": "",
      "active": true
    },
    {
      "id": "store-3",
      "name": "Armazém",
      "address": "Moçambique",
      "phone": "",
      "active": true
    }
  ],
  "categories": [
    "Mesas",
    "Tacos",
    "Bolas",
    "Panos",
    "Acessórios",
    "Peças",
    "Serviços"
  ],
  "products": [
    {
      "id": "prod-001",
      "sku": "SB-PAN-0001",
      "barcode": "7890000000001",
      "name": "Panos Safe Bilhar Modelo 1",
      "category": "Panos",
      "unit": "un",
      "price": 4500,
      "cost": 10000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 24,
        "store-2": 17,
        "store-3": 8
      }
    },
    {
      "id": "prod-002",
      "sku": "SB-SER-0002",
      "barcode": "7890000000002",
      "name": "Serviços Safe Bilhar Modelo 2",
      "category": "Serviços",
      "unit": "un",
      "price": 2500,
      "cost": 5500,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 22,
        "store-2": 18,
        "store-3": 22
      }
    },
    {
      "id": "prod-003",
      "sku": "SB-BOL-0003",
      "barcode": "7890000000003",
      "name": "Bolas Safe Bilhar Modelo 3",
      "category": "Bolas",
      "unit": "un",
      "price": 4500,
      "cost": 25000,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 27,
        "store-2": 15,
        "store-3": 18
      }
    },
    {
      "id": "prod-004",
      "sku": "SB-PAN-0004",
      "barcode": "7890000000004",
      "name": "Panos Safe Bilhar Modelo 4",
      "category": "Panos",
      "unit": "un",
      "price": 65000,
      "cost": 5500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 4,
        "store-2": 0,
        "store-3": 10
      }
    },
    {
      "id": "prod-005",
      "sku": "SB-TAC-0005",
      "barcode": "7890000000005",
      "name": "Tacos Safe Bilhar Modelo 5",
      "category": "Tacos",
      "unit": "un",
      "price": 65000,
      "cost": 65000,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 17,
        "store-2": 5,
        "store-3": 15
      }
    },
    {
      "id": "prod-006",
      "sku": "SB-TAC-0006",
      "barcode": "7890000000006",
      "name": "Tacos Safe Bilhar Modelo 6",
      "category": "Tacos",
      "unit": "un",
      "price": 65000,
      "cost": 5500,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 32,
        "store-2": 20,
        "store-3": 5
      }
    },
    {
      "id": "prod-007",
      "sku": "SB-PAN-0007",
      "barcode": "7890000000007",
      "name": "Panos Safe Bilhar Modelo 7",
      "category": "Panos",
      "unit": "un",
      "price": 2500,
      "cost": 3000,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 4,
        "store-2": 15,
        "store-3": 21
      }
    },
    {
      "id": "prod-008",
      "sku": "SB-BOL-0008",
      "barcode": "7890000000008",
      "name": "Bolas Safe Bilhar Modelo 8",
      "category": "Bolas",
      "unit": "un",
      "price": 500,
      "cost": 48000,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 26,
        "store-2": 16,
        "store-3": 2
      }
    },
    {
      "id": "prod-009",
      "sku": "SB-MES-0009",
      "barcode": "7890000000009",
      "name": "Mesas Safe Bilhar Modelo 9",
      "category": "Mesas",
      "unit": "un",
      "price": 1200,
      "cost": 65000,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 27,
        "store-2": 13,
        "store-3": 12
      }
    },
    {
      "id": "prod-010",
      "sku": "SB-TAC-0010",
      "barcode": "7890000000010",
      "name": "Tacos Safe Bilhar Modelo 10",
      "category": "Tacos",
      "unit": "un",
      "price": 35000,
      "cost": 5500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 5,
        "store-2": 20,
        "store-3": 9
      }
    },
    {
      "id": "prod-011",
      "sku": "SB-TAC-0011",
      "barcode": "7890000000011",
      "name": "Tacos Safe Bilhar Modelo 11",
      "category": "Tacos",
      "unit": "un",
      "price": 15000,
      "cost": 25000,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 2,
        "store-2": 13,
        "store-3": 7
      }
    },
    {
      "id": "prod-012",
      "sku": "SB-PAN-0012",
      "barcode": "7890000000012",
      "name": "Panos Safe Bilhar Modelo 12",
      "category": "Panos",
      "unit": "un",
      "price": 85000,
      "cost": 5500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 31,
        "store-2": 4,
        "store-3": 15
      }
    },
    {
      "id": "prod-013",
      "sku": "SB-BOL-0013",
      "barcode": "7890000000013",
      "name": "Bolas Safe Bilhar Modelo 13",
      "category": "Bolas",
      "unit": "un",
      "price": 65000,
      "cost": 1500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 8,
        "store-2": 14,
        "store-3": 8
      }
    },
    {
      "id": "prod-014",
      "sku": "SB-SER-0014",
      "barcode": "7890000000014",
      "name": "Serviços Safe Bilhar Modelo 14",
      "category": "Serviços",
      "unit": "un",
      "price": 85000,
      "cost": 1500,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 21,
        "store-2": 16,
        "store-3": 18
      }
    },
    {
      "id": "prod-015",
      "sku": "SB-SER-0015",
      "barcode": "7890000000015",
      "name": "Serviços Safe Bilhar Modelo 15",
      "category": "Serviços",
      "unit": "un",
      "price": 2500,
      "cost": 48000,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 32,
        "store-2": 6,
        "store-3": 4
      }
    },
    {
      "id": "prod-016",
      "sku": "SB-SER-0016",
      "barcode": "7890000000016",
      "name": "Serviços Safe Bilhar Modelo 16",
      "category": "Serviços",
      "unit": "un",
      "price": 15000,
      "cost": 48000,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 18,
        "store-2": 0,
        "store-3": 1
      }
    },
    {
      "id": "prod-017",
      "sku": "SB-TAC-0017",
      "barcode": "7890000000017",
      "name": "Tacos Safe Bilhar Modelo 17",
      "category": "Tacos",
      "unit": "un",
      "price": 4500,
      "cost": 5500,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 7,
        "store-2": 8,
        "store-3": 21
      }
    },
    {
      "id": "prod-018",
      "sku": "SB-ACE-0018",
      "barcode": "7890000000018",
      "name": "Acessórios Safe Bilhar Modelo 18",
      "category": "Acessórios",
      "unit": "un",
      "price": 85000,
      "cost": 25000,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 10,
        "store-2": 20,
        "store-3": 18
      }
    },
    {
      "id": "prod-019",
      "sku": "SB-PEÇ-0019",
      "barcode": "7890000000019",
      "name": "Peças Safe Bilhar Modelo 19",
      "category": "Peças",
      "unit": "un",
      "price": 15000,
      "cost": 48000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 35,
        "store-2": 3,
        "store-3": 24
      }
    },
    {
      "id": "prod-020",
      "sku": "SB-MES-0020",
      "barcode": "7890000000020",
      "name": "Mesas Safe Bilhar Modelo 20",
      "category": "Mesas",
      "unit": "un",
      "price": 2500,
      "cost": 250,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 11,
        "store-2": 11,
        "store-3": 19
      }
    },
    {
      "id": "prod-021",
      "sku": "SB-MES-0021",
      "barcode": "7890000000021",
      "name": "Mesas Safe Bilhar Modelo 21",
      "category": "Mesas",
      "unit": "un",
      "price": 850,
      "cost": 500,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 32,
        "store-2": 15,
        "store-3": 20
      }
    },
    {
      "id": "prod-022",
      "sku": "SB-SER-0022",
      "barcode": "7890000000022",
      "name": "Serviços Safe Bilhar Modelo 22",
      "category": "Serviços",
      "unit": "un",
      "price": 500,
      "cost": 250,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 20,
        "store-2": 18,
        "store-3": 2
      }
    },
    {
      "id": "prod-023",
      "sku": "SB-SER-0023",
      "barcode": "7890000000023",
      "name": "Serviços Safe Bilhar Modelo 23",
      "category": "Serviços",
      "unit": "un",
      "price": 500,
      "cost": 10000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 7,
        "store-2": 12,
        "store-3": 5
      }
    },
    {
      "id": "prod-024",
      "sku": "SB-SER-0024",
      "barcode": "7890000000024",
      "name": "Serviços Safe Bilhar Modelo 24",
      "category": "Serviços",
      "unit": "un",
      "price": 65000,
      "cost": 48000,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 9,
        "store-2": 3,
        "store-3": 4
      }
    },
    {
      "id": "prod-025",
      "sku": "SB-BOL-0025",
      "barcode": "7890000000025",
      "name": "Bolas Safe Bilhar Modelo 25",
      "category": "Bolas",
      "unit": "un",
      "price": 15000,
      "cost": 48000,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 34,
        "store-2": 20,
        "store-3": 3
      }
    },
    {
      "id": "prod-026",
      "sku": "SB-TAC-0026",
      "barcode": "7890000000026",
      "name": "Tacos Safe Bilhar Modelo 26",
      "category": "Tacos",
      "unit": "un",
      "price": 7500,
      "cost": 500,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 19,
        "store-2": 6,
        "store-3": 15
      }
    },
    {
      "id": "prod-027",
      "sku": "SB-MES-0027",
      "barcode": "7890000000027",
      "name": "Mesas Safe Bilhar Modelo 27",
      "category": "Mesas",
      "unit": "un",
      "price": 65000,
      "cost": 65000,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 32,
        "store-2": 20,
        "store-3": 18
      }
    },
    {
      "id": "prod-028",
      "sku": "SB-ACE-0028",
      "barcode": "7890000000028",
      "name": "Acessórios Safe Bilhar Modelo 28",
      "category": "Acessórios",
      "unit": "un",
      "price": 35000,
      "cost": 3000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 33,
        "store-2": 15,
        "store-3": 4
      }
    },
    {
      "id": "prod-029",
      "sku": "SB-TAC-0029",
      "barcode": "7890000000029",
      "name": "Tacos Safe Bilhar Modelo 29",
      "category": "Tacos",
      "unit": "un",
      "price": 7500,
      "cost": 65000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 15,
        "store-2": 19,
        "store-3": 7
      }
    },
    {
      "id": "prod-030",
      "sku": "SB-PAN-0030",
      "barcode": "7890000000030",
      "name": "Panos Safe Bilhar Modelo 30",
      "category": "Panos",
      "unit": "un",
      "price": 1200,
      "cost": 3000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 14,
        "store-2": 10,
        "store-3": 24
      }
    },
    {
      "id": "prod-031",
      "sku": "SB-PEÇ-0031",
      "barcode": "7890000000031",
      "name": "Peças Safe Bilhar Modelo 31",
      "category": "Peças",
      "unit": "un",
      "price": 35000,
      "cost": 48000,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 6,
        "store-2": 19,
        "store-3": 3
      }
    },
    {
      "id": "prod-032",
      "sku": "SB-PAN-0032",
      "barcode": "7890000000032",
      "name": "Panos Safe Bilhar Modelo 32",
      "category": "Panos",
      "unit": "un",
      "price": 15000,
      "cost": 3000,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 7,
        "store-2": 20,
        "store-3": 21
      }
    },
    {
      "id": "prod-033",
      "sku": "SB-TAC-0033",
      "barcode": "7890000000033",
      "name": "Tacos Safe Bilhar Modelo 33",
      "category": "Tacos",
      "unit": "un",
      "price": 4500,
      "cost": 10000,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 18,
        "store-2": 6,
        "store-3": 14
      }
    },
    {
      "id": "prod-034",
      "sku": "SB-PEÇ-0034",
      "barcode": "7890000000034",
      "name": "Peças Safe Bilhar Modelo 34",
      "category": "Peças",
      "unit": "un",
      "price": 850,
      "cost": 10000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 33,
        "store-2": 2,
        "store-3": 20
      }
    },
    {
      "id": "prod-035",
      "sku": "SB-ACE-0035",
      "barcode": "7890000000035",
      "name": "Acessórios Safe Bilhar Modelo 35",
      "category": "Acessórios",
      "unit": "un",
      "price": 4500,
      "cost": 65000,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 25,
        "store-2": 17,
        "store-3": 12
      }
    },
    {
      "id": "prod-036",
      "sku": "SB-BOL-0036",
      "barcode": "7890000000036",
      "name": "Bolas Safe Bilhar Modelo 36",
      "category": "Bolas",
      "unit": "un",
      "price": 4500,
      "cost": 500,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 3,
        "store-2": 8,
        "store-3": 24
      }
    },
    {
      "id": "prod-037",
      "sku": "SB-SER-0037",
      "barcode": "7890000000037",
      "name": "Serviços Safe Bilhar Modelo 37",
      "category": "Serviços",
      "unit": "un",
      "price": 2500,
      "cost": 500,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 30,
        "store-2": 11,
        "store-3": 24
      }
    },
    {
      "id": "prod-038",
      "sku": "SB-TAC-0038",
      "barcode": "7890000000038",
      "name": "Tacos Safe Bilhar Modelo 38",
      "category": "Tacos",
      "unit": "un",
      "price": 85000,
      "cost": 25000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 16,
        "store-2": 17,
        "store-3": 7
      }
    },
    {
      "id": "prod-039",
      "sku": "SB-SER-0039",
      "barcode": "7890000000039",
      "name": "Serviços Safe Bilhar Modelo 39",
      "category": "Serviços",
      "unit": "un",
      "price": 35000,
      "cost": 48000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 27,
        "store-2": 19,
        "store-3": 17
      }
    },
    {
      "id": "prod-040",
      "sku": "SB-SER-0040",
      "barcode": "7890000000040",
      "name": "Serviços Safe Bilhar Modelo 40",
      "category": "Serviços",
      "unit": "un",
      "price": 850,
      "cost": 3000,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 22,
        "store-2": 20,
        "store-3": 22
      }
    },
    {
      "id": "prod-041",
      "sku": "SB-TAC-0041",
      "barcode": "7890000000041",
      "name": "Tacos Safe Bilhar Modelo 41",
      "category": "Tacos",
      "unit": "un",
      "price": 4500,
      "cost": 900,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 11,
        "store-2": 2,
        "store-3": 9
      }
    },
    {
      "id": "prod-042",
      "sku": "SB-TAC-0042",
      "barcode": "7890000000042",
      "name": "Tacos Safe Bilhar Modelo 42",
      "category": "Tacos",
      "unit": "un",
      "price": 2500,
      "cost": 65000,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 23,
        "store-2": 20,
        "store-3": 20
      }
    },
    {
      "id": "prod-043",
      "sku": "SB-PEÇ-0043",
      "barcode": "7890000000043",
      "name": "Peças Safe Bilhar Modelo 43",
      "category": "Peças",
      "unit": "un",
      "price": 7500,
      "cost": 1500,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 15,
        "store-2": 5,
        "store-3": 25
      }
    },
    {
      "id": "prod-044",
      "sku": "SB-TAC-0044",
      "barcode": "7890000000044",
      "name": "Tacos Safe Bilhar Modelo 44",
      "category": "Tacos",
      "unit": "un",
      "price": 500,
      "cost": 5500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 9,
        "store-2": 5,
        "store-3": 9
      }
    },
    {
      "id": "prod-045",
      "sku": "SB-MES-0045",
      "barcode": "7890000000045",
      "name": "Mesas Safe Bilhar Modelo 45",
      "category": "Mesas",
      "unit": "un",
      "price": 850,
      "cost": 10000,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 6,
        "store-2": 2,
        "store-3": 5
      }
    },
    {
      "id": "prod-046",
      "sku": "SB-ACE-0046",
      "barcode": "7890000000046",
      "name": "Acessórios Safe Bilhar Modelo 46",
      "category": "Acessórios",
      "unit": "un",
      "price": 1200,
      "cost": 48000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 15,
        "store-2": 20,
        "store-3": 16
      }
    },
    {
      "id": "prod-047",
      "sku": "SB-BOL-0047",
      "barcode": "7890000000047",
      "name": "Bolas Safe Bilhar Modelo 47",
      "category": "Bolas",
      "unit": "un",
      "price": 2500,
      "cost": 5500,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 4,
        "store-2": 10,
        "store-3": 4
      }
    },
    {
      "id": "prod-048",
      "sku": "SB-BOL-0048",
      "barcode": "7890000000048",
      "name": "Bolas Safe Bilhar Modelo 48",
      "category": "Bolas",
      "unit": "un",
      "price": 85000,
      "cost": 250,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 13,
        "store-2": 17,
        "store-3": 8
      }
    },
    {
      "id": "prod-049",
      "sku": "SB-MES-0049",
      "barcode": "7890000000049",
      "name": "Mesas Safe Bilhar Modelo 49",
      "category": "Mesas",
      "unit": "un",
      "price": 2500,
      "cost": 3000,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 11,
        "store-2": 18,
        "store-3": 12
      }
    },
    {
      "id": "prod-050",
      "sku": "SB-BOL-0050",
      "barcode": "7890000000050",
      "name": "Bolas Safe Bilhar Modelo 50",
      "category": "Bolas",
      "unit": "un",
      "price": 850,
      "cost": 65000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 35,
        "store-2": 7,
        "store-3": 14
      }
    },
    {
      "id": "prod-051",
      "sku": "SB-PEÇ-0051",
      "barcode": "7890000000051",
      "name": "Peças Safe Bilhar Modelo 51",
      "category": "Peças",
      "unit": "un",
      "price": 4500,
      "cost": 3000,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 30,
        "store-2": 13,
        "store-3": 1
      }
    },
    {
      "id": "prod-052",
      "sku": "SB-PEÇ-0052",
      "barcode": "7890000000052",
      "name": "Peças Safe Bilhar Modelo 52",
      "category": "Peças",
      "unit": "un",
      "price": 4500,
      "cost": 10000,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 8,
        "store-2": 3,
        "store-3": 12
      }
    },
    {
      "id": "prod-053",
      "sku": "SB-PEÇ-0053",
      "barcode": "7890000000053",
      "name": "Peças Safe Bilhar Modelo 53",
      "category": "Peças",
      "unit": "un",
      "price": 2500,
      "cost": 500,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 18,
        "store-2": 4,
        "store-3": 6
      }
    },
    {
      "id": "prod-054",
      "sku": "SB-PEÇ-0054",
      "barcode": "7890000000054",
      "name": "Peças Safe Bilhar Modelo 54",
      "category": "Peças",
      "unit": "un",
      "price": 4500,
      "cost": 1500,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 8,
        "store-2": 7,
        "store-3": 22
      }
    },
    {
      "id": "prod-055",
      "sku": "SB-PAN-0055",
      "barcode": "7890000000055",
      "name": "Panos Safe Bilhar Modelo 55",
      "category": "Panos",
      "unit": "un",
      "price": 15000,
      "cost": 1500,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 21,
        "store-2": 11,
        "store-3": 19
      }
    },
    {
      "id": "prod-056",
      "sku": "SB-PAN-0056",
      "barcode": "7890000000056",
      "name": "Panos Safe Bilhar Modelo 56",
      "category": "Panos",
      "unit": "un",
      "price": 2500,
      "cost": 25000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 22,
        "store-2": 8,
        "store-3": 20
      }
    },
    {
      "id": "prod-057",
      "sku": "SB-BOL-0057",
      "barcode": "7890000000057",
      "name": "Bolas Safe Bilhar Modelo 57",
      "category": "Bolas",
      "unit": "un",
      "price": 65000,
      "cost": 250,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 6,
        "store-2": 7,
        "store-3": 0
      }
    },
    {
      "id": "prod-058",
      "sku": "SB-ACE-0058",
      "barcode": "7890000000058",
      "name": "Acessórios Safe Bilhar Modelo 58",
      "category": "Acessórios",
      "unit": "un",
      "price": 850,
      "cost": 5500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 35,
        "store-2": 14,
        "store-3": 1
      }
    },
    {
      "id": "prod-059",
      "sku": "SB-PAN-0059",
      "barcode": "7890000000059",
      "name": "Panos Safe Bilhar Modelo 59",
      "category": "Panos",
      "unit": "un",
      "price": 2500,
      "cost": 65000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 35,
        "store-2": 11,
        "store-3": 7
      }
    },
    {
      "id": "prod-060",
      "sku": "SB-TAC-0060",
      "barcode": "7890000000060",
      "name": "Tacos Safe Bilhar Modelo 60",
      "category": "Tacos",
      "unit": "un",
      "price": 85000,
      "cost": 48000,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 27,
        "store-2": 3,
        "store-3": 4
      }
    },
    {
      "id": "prod-061",
      "sku": "SB-PAN-0061",
      "barcode": "7890000000061",
      "name": "Panos Safe Bilhar Modelo 61",
      "category": "Panos",
      "unit": "un",
      "price": 35000,
      "cost": 10000,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 18,
        "store-2": 15,
        "store-3": 11
      }
    },
    {
      "id": "prod-062",
      "sku": "SB-SER-0062",
      "barcode": "7890000000062",
      "name": "Serviços Safe Bilhar Modelo 62",
      "category": "Serviços",
      "unit": "un",
      "price": 7500,
      "cost": 5500,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 33,
        "store-2": 18,
        "store-3": 5
      }
    },
    {
      "id": "prod-063",
      "sku": "SB-PEÇ-0063",
      "barcode": "7890000000063",
      "name": "Peças Safe Bilhar Modelo 63",
      "category": "Peças",
      "unit": "un",
      "price": 7500,
      "cost": 65000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 26,
        "store-2": 18,
        "store-3": 14
      }
    },
    {
      "id": "prod-064",
      "sku": "SB-TAC-0064",
      "barcode": "7890000000064",
      "name": "Tacos Safe Bilhar Modelo 64",
      "category": "Tacos",
      "unit": "un",
      "price": 7500,
      "cost": 3000,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 9,
        "store-2": 20,
        "store-3": 24
      }
    },
    {
      "id": "prod-065",
      "sku": "SB-MES-0065",
      "barcode": "7890000000065",
      "name": "Mesas Safe Bilhar Modelo 65",
      "category": "Mesas",
      "unit": "un",
      "price": 85000,
      "cost": 250,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 17,
        "store-2": 16,
        "store-3": 14
      }
    },
    {
      "id": "prod-066",
      "sku": "SB-MES-0066",
      "barcode": "7890000000066",
      "name": "Mesas Safe Bilhar Modelo 66",
      "category": "Mesas",
      "unit": "un",
      "price": 500,
      "cost": 1500,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 8,
        "store-2": 13,
        "store-3": 19
      }
    },
    {
      "id": "prod-067",
      "sku": "SB-TAC-0067",
      "barcode": "7890000000067",
      "name": "Tacos Safe Bilhar Modelo 67",
      "category": "Tacos",
      "unit": "un",
      "price": 1200,
      "cost": 5500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 26,
        "store-2": 18,
        "store-3": 24
      }
    },
    {
      "id": "prod-068",
      "sku": "SB-SER-0068",
      "barcode": "7890000000068",
      "name": "Serviços Safe Bilhar Modelo 68",
      "category": "Serviços",
      "unit": "un",
      "price": 4500,
      "cost": 500,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 35,
        "store-2": 14,
        "store-3": 12
      }
    },
    {
      "id": "prod-069",
      "sku": "SB-BOL-0069",
      "barcode": "7890000000069",
      "name": "Bolas Safe Bilhar Modelo 69",
      "category": "Bolas",
      "unit": "un",
      "price": 15000,
      "cost": 65000,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 6,
        "store-2": 1,
        "store-3": 4
      }
    },
    {
      "id": "prod-070",
      "sku": "SB-PAN-0070",
      "barcode": "7890000000070",
      "name": "Panos Safe Bilhar Modelo 70",
      "category": "Panos",
      "unit": "un",
      "price": 65000,
      "cost": 5500,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 12,
        "store-2": 9,
        "store-3": 3
      }
    },
    {
      "id": "prod-071",
      "sku": "SB-TAC-0071",
      "barcode": "7890000000071",
      "name": "Tacos Safe Bilhar Modelo 71",
      "category": "Tacos",
      "unit": "un",
      "price": 15000,
      "cost": 5500,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 30,
        "store-2": 11,
        "store-3": 7
      }
    },
    {
      "id": "prod-072",
      "sku": "SB-MES-0072",
      "barcode": "7890000000072",
      "name": "Mesas Safe Bilhar Modelo 72",
      "category": "Mesas",
      "unit": "un",
      "price": 7500,
      "cost": 250,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 21,
        "store-2": 8,
        "store-3": 20
      }
    },
    {
      "id": "prod-073",
      "sku": "SB-MES-0073",
      "barcode": "7890000000073",
      "name": "Mesas Safe Bilhar Modelo 73",
      "category": "Mesas",
      "unit": "un",
      "price": 500,
      "cost": 250,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 34,
        "store-2": 15,
        "store-3": 25
      }
    },
    {
      "id": "prod-074",
      "sku": "SB-PEÇ-0074",
      "barcode": "7890000000074",
      "name": "Peças Safe Bilhar Modelo 74",
      "category": "Peças",
      "unit": "un",
      "price": 4500,
      "cost": 1500,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 13,
        "store-2": 3,
        "store-3": 23
      }
    },
    {
      "id": "prod-075",
      "sku": "SB-BOL-0075",
      "barcode": "7890000000075",
      "name": "Bolas Safe Bilhar Modelo 75",
      "category": "Bolas",
      "unit": "un",
      "price": 1200,
      "cost": 5500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 35,
        "store-2": 1,
        "store-3": 0
      }
    },
    {
      "id": "prod-076",
      "sku": "SB-MES-0076",
      "barcode": "7890000000076",
      "name": "Mesas Safe Bilhar Modelo 76",
      "category": "Mesas",
      "unit": "un",
      "price": 500,
      "cost": 10000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 16,
        "store-2": 7,
        "store-3": 11
      }
    },
    {
      "id": "prod-077",
      "sku": "SB-MES-0077",
      "barcode": "7890000000077",
      "name": "Mesas Safe Bilhar Modelo 77",
      "category": "Mesas",
      "unit": "un",
      "price": 4500,
      "cost": 5500,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 24,
        "store-2": 10,
        "store-3": 0
      }
    },
    {
      "id": "prod-078",
      "sku": "SB-ACE-0078",
      "barcode": "7890000000078",
      "name": "Acessórios Safe Bilhar Modelo 78",
      "category": "Acessórios",
      "unit": "un",
      "price": 2500,
      "cost": 1500,
      "image": "",
      "minStock": 6,
      "active": true,
      "stock": {
        "store-main": 11,
        "store-2": 7,
        "store-3": 14
      }
    },
    {
      "id": "prod-079",
      "sku": "SB-SER-0079",
      "barcode": "7890000000079",
      "name": "Serviços Safe Bilhar Modelo 79",
      "category": "Serviços",
      "unit": "un",
      "price": 65000,
      "cost": 3000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 2,
        "store-2": 8,
        "store-3": 11
      }
    },
    {
      "id": "prod-080",
      "sku": "SB-PAN-0080",
      "barcode": "7890000000080",
      "name": "Panos Safe Bilhar Modelo 80",
      "category": "Panos",
      "unit": "un",
      "price": 2500,
      "cost": 500,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 8,
        "store-2": 18,
        "store-3": 6
      }
    },
    {
      "id": "prod-081",
      "sku": "SB-BOL-0081",
      "barcode": "7890000000081",
      "name": "Bolas Safe Bilhar Modelo 81",
      "category": "Bolas",
      "unit": "un",
      "price": 500,
      "cost": 3000,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 27,
        "store-2": 8,
        "store-3": 9
      }
    },
    {
      "id": "prod-082",
      "sku": "SB-PEÇ-0082",
      "barcode": "7890000000082",
      "name": "Peças Safe Bilhar Modelo 82",
      "category": "Peças",
      "unit": "un",
      "price": 4500,
      "cost": 65000,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 12,
        "store-2": 1,
        "store-3": 10
      }
    },
    {
      "id": "prod-083",
      "sku": "SB-TAC-0083",
      "barcode": "7890000000083",
      "name": "Tacos Safe Bilhar Modelo 83",
      "category": "Tacos",
      "unit": "un",
      "price": 4500,
      "cost": 48000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 6,
        "store-2": 9,
        "store-3": 8
      }
    },
    {
      "id": "prod-084",
      "sku": "SB-ACE-0084",
      "barcode": "7890000000084",
      "name": "Acessórios Safe Bilhar Modelo 84",
      "category": "Acessórios",
      "unit": "un",
      "price": 65000,
      "cost": 5500,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 25,
        "store-2": 14,
        "store-3": 22
      }
    },
    {
      "id": "prod-085",
      "sku": "SB-SER-0085",
      "barcode": "7890000000085",
      "name": "Serviços Safe Bilhar Modelo 85",
      "category": "Serviços",
      "unit": "un",
      "price": 1200,
      "cost": 1500,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 5,
        "store-2": 8,
        "store-3": 0
      }
    },
    {
      "id": "prod-086",
      "sku": "SB-TAC-0086",
      "barcode": "7890000000086",
      "name": "Tacos Safe Bilhar Modelo 86",
      "category": "Tacos",
      "unit": "un",
      "price": 65000,
      "cost": 5500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 31,
        "store-2": 1,
        "store-3": 6
      }
    },
    {
      "id": "prod-087",
      "sku": "SB-SER-0087",
      "barcode": "7890000000087",
      "name": "Serviços Safe Bilhar Modelo 87",
      "category": "Serviços",
      "unit": "un",
      "price": 850,
      "cost": 500,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 10,
        "store-2": 8,
        "store-3": 21
      }
    },
    {
      "id": "prod-088",
      "sku": "SB-BOL-0088",
      "barcode": "7890000000088",
      "name": "Bolas Safe Bilhar Modelo 88",
      "category": "Bolas",
      "unit": "un",
      "price": 1200,
      "cost": 500,
      "image": "",
      "minStock": 4,
      "active": true,
      "stock": {
        "store-main": 14,
        "store-2": 1,
        "store-3": 11
      }
    },
    {
      "id": "prod-089",
      "sku": "SB-PEÇ-0089",
      "barcode": "7890000000089",
      "name": "Peças Safe Bilhar Modelo 89",
      "category": "Peças",
      "unit": "un",
      "price": 500,
      "cost": 25000,
      "image": "",
      "minStock": 3,
      "active": true,
      "stock": {
        "store-main": 4,
        "store-2": 10,
        "store-3": 6
      }
    },
    {
      "id": "prod-090",
      "sku": "SB-BOL-0090",
      "barcode": "7890000000090",
      "name": "Bolas Safe Bilhar Modelo 90",
      "category": "Bolas",
      "unit": "un",
      "price": 7500,
      "cost": 3000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 16,
        "store-2": 16,
        "store-3": 10
      }
    },
    {
      "id": "prod-091",
      "sku": "SB-SER-0091",
      "barcode": "7890000000091",
      "name": "Serviços Safe Bilhar Modelo 91",
      "category": "Serviços",
      "unit": "un",
      "price": 15000,
      "cost": 1500,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 7,
        "store-2": 20,
        "store-3": 17
      }
    },
    {
      "id": "prod-092",
      "sku": "SB-SER-0092",
      "barcode": "7890000000092",
      "name": "Serviços Safe Bilhar Modelo 92",
      "category": "Serviços",
      "unit": "un",
      "price": 15000,
      "cost": 48000,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 9,
        "store-2": 2,
        "store-3": 14
      }
    },
    {
      "id": "prod-093",
      "sku": "SB-MES-0093",
      "barcode": "7890000000093",
      "name": "Mesas Safe Bilhar Modelo 93",
      "category": "Mesas",
      "unit": "un",
      "price": 15000,
      "cost": 48000,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 11,
        "store-2": 12,
        "store-3": 15
      }
    },
    {
      "id": "prod-094",
      "sku": "SB-SER-0094",
      "barcode": "7890000000094",
      "name": "Serviços Safe Bilhar Modelo 94",
      "category": "Serviços",
      "unit": "un",
      "price": 4500,
      "cost": 48000,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 31,
        "store-2": 20,
        "store-3": 20
      }
    },
    {
      "id": "prod-095",
      "sku": "SB-MES-0095",
      "barcode": "7890000000095",
      "name": "Mesas Safe Bilhar Modelo 95",
      "category": "Mesas",
      "unit": "un",
      "price": 850,
      "cost": 3000,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 34,
        "store-2": 10,
        "store-3": 9
      }
    },
    {
      "id": "prod-096",
      "sku": "SB-MES-0096",
      "barcode": "7890000000096",
      "name": "Mesas Safe Bilhar Modelo 96",
      "category": "Mesas",
      "unit": "un",
      "price": 2500,
      "cost": 65000,
      "image": "",
      "minStock": 5,
      "active": true,
      "stock": {
        "store-main": 19,
        "store-2": 8,
        "store-3": 15
      }
    },
    {
      "id": "prod-097",
      "sku": "SB-ACE-0097",
      "barcode": "7890000000097",
      "name": "Acessórios Safe Bilhar Modelo 97",
      "category": "Acessórios",
      "unit": "un",
      "price": 2500,
      "cost": 10000,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 26,
        "store-2": 14,
        "store-3": 16
      }
    },
    {
      "id": "prod-098",
      "sku": "SB-SER-0098",
      "barcode": "7890000000098",
      "name": "Serviços Safe Bilhar Modelo 98",
      "category": "Serviços",
      "unit": "un",
      "price": 7500,
      "cost": 250,
      "image": "",
      "minStock": 2,
      "active": true,
      "stock": {
        "store-main": 13,
        "store-2": 18,
        "store-3": 20
      }
    },
    {
      "id": "prod-099",
      "sku": "SB-TAC-0099",
      "barcode": "7890000000099",
      "name": "Tacos Safe Bilhar Modelo 99",
      "category": "Tacos",
      "unit": "un",
      "price": 7500,
      "cost": 10000,
      "image": "",
      "minStock": 7,
      "active": true,
      "stock": {
        "store-main": 28,
        "store-2": 3,
        "store-3": 21
      }
    },
    {
      "id": "prod-100",
      "sku": "SB-BOL-0100",
      "barcode": "7890000000100",
      "name": "Bolas Safe Bilhar Modelo 100",
      "category": "Bolas",
      "unit": "un",
      "price": 15000,
      "cost": 1500,
      "image": "",
      "minStock": 8,
      "active": true,
      "stock": {
        "store-main": 22,
        "store-2": 2,
        "store-3": 25
      }
    }
  ],
  "sales": [],
  "saleItems": [],
  "stockMoves": [],
  "cashSessions": []
};