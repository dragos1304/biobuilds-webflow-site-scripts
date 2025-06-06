<script>
(function() {

    const semiFinisatText = `
        <h3>SEMI-FINISAT</h3>
        
        <p>Casă Certificată de Institutul de Case Pasive - Exterior Complet Finisat și Interior Nefinisat.</p>
        
        <p>Beneficiați de o structură pasivă de înaltă performanță, certificată Passivhaus & EPD, proiectată pentru eficiență energetică, sănătate și confort. Veți primi o locuință cu exterior complet și interior pregătit pentru personalizare, astfel încât să vă puteți alege propriile finisaje și dotări.</p>
        
        <h3>Structură</h3>
        
        <p>Eficiență Energetică Certificată: Izolație și etanșeitate ridicate pentru costuri reduse la încălzire și răcire.</p>
        <p>Sticlă Tripan Securizată și Laminată: Protecție termică și fonică optimă.</p>
        <p>Timberframe: Structură din lemn cu rezistență superioară la greutate și intemperii.</p>
        <p>Etanșeitate Superioară: Anvelopă complet etanșă, cu zero punți termice.</p>
        
        <h3>Exterior Premium</h3>
        
        <p>Fațadă Yakisugi: Lemn japonez carbonizat, cu rezistență îndelungată și aspect modern.</p>
        <p>Acoperiș cu Membrană EPDM: Longevitate și protecție excelentă contra infiltrațiilor.</p>
        <p>Sistem de Colectare a Apei (Opțional): Permite utilizarea apei pluviale în mod ecologic.</p>
        <p>Profile Metalice: Pentru protecție suplimentară și estetică contemporană.</p>
        
        <h3>Esențialul la Interior</h3>
        
        <p>Instalații Pregătite: Conductele și cablurile sunt complet pregătite pe poziție.</p>
        <p>Baie Semi-finisat: Complet hidroizolat, cu instalați pregătite pe poziție. Gata pentru finisare și instalarea obiectelor sanitare.</p>
        
        <h3>Următorii Pași</h3>
        
        <p>Personalizare și mutare: Personalizați interiorul prin finisajele și mobilierul ales!</p>
        `;
    const laCheieText = `
        <h3>LA CHEIE</h3>
        
        <p>Casă Certificată de Institutul de Case Pasive - Complet La Cheie.</p>
        
        <p>Tot ceea ce oferă varianta SEMI-FINISAT (structură eficientă certificată, finisaj exterior, etc.) și, în plus un interior premium complet finisat, gata de locuit din prima zi—ca un upgrade esențial pentru cei ce își doresc confort imediat și o experiență fără compromisuri.</p>
        
        <h3>Structură</h3>
        
        <p>Eficiență Energetică Certificată: Izolație și etanșeitate ridicate pentru costuri reduse la încălzire și răcire.</p>
        <p>Sticlă Tripan Securizată și Laminată: Protecție termică și fonică optimă.</p>
        <p>Timberframe: Structură din lemn cu rezistență superioară la greutate și intemperii.</p>
        <p>Etanșeitate Superioară: Anvelopă complet etanșă, cu zero punți termice.</p>
        
        <h3>Exterior Premium</h3>
        
        <p>Fațadă Yakisugi: Lemn japonez carbonizat, cu rezistență îndelungată și aspect modern.</p>
        <p>Acoperiș cu Membrană EPDM: Longevitate și protecție excelentă contra infiltrațiilor.</p>
        <p>Sistem de Colectare a Apei (Opțional): Permite utilizarea apei pluviale în mod ecologic.</p>
        <p>Profile Metalice: Pentru protecție suplimentară și estetică contemporană.</p>
        
        <h3>Interior Premium</h3>
        
        <p>Pereți & Uși Finisate: Materiale și feronerie premium pentru un aspect armonios.</p>
        <p>Tavan Acustic din Lemn: Design organic care sporește confortul fonic și estetic.</p>
        <p>Parchet din Lemn Natural: Sustenabil, rezistent și elegant.</p>
        <p>Băi Finalizate: Obiecte sanitare de calitate superioară (lavoare, dușuri, WC) instalate și funcționale.</p>
        <p>Bucătărie Gata de Utilizare: Racorduri de apă, instalații și spațiu pregătit pentru electrocasnice și mobilier.</p>
        <p>Sistem Electric Integrat: Prize, întrerupătoare și iluminat funcțional, testate și pregătite.</p>
        
        <h3>Smart Home</h3>
        
        <p>Iluminat Smart: Sistem de iluminare smart complet pre-instalat.</p>
        <p>Ventilație Pasivă Smart + Pompă de Căldură: Asigură un climat sănătos și eficient energetic.</p>
        <p>Jaluzele Exterioare Smart: Protecție solară smart, din materiale ultra-performante pentru case pasive.</p>
        
        <h3>Următorii Pași</h3>
        
        <p>Mutați-vă: Alege mobilierul tău și mută-te în Modular.</p>
        <p><strong>Rețineți:</strong> Mobilierul din baie este inclus complet. Mobilierul din living regăsit în randri este strict pentru design.</p>
        `;
    let blindsImage = "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/c4d35433-ff8c-48dd-8af9-7aa251044f65/Blinds.jpg?content-type=image%2Fjpeg";

    let config = {
        'nomad-24' : {
            "image" : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/911b850e-0acb-4d9d-929a-2db601e46b5a/Nomad.jpg?content-type=image%2Fjpeg",
            "name": "Nomad",
            "energy": 34920,
            "options" : [
                {
                    'slug' : 'semi-turnkey',
                    'name' : 'Semi-finisat',
                    "price" : 39800,
                    'upgrades' : [
                    [
                        {
                            'slug' : "parquet-raw-osb",
                            'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/755cc7b3-b719-4220-a482-4af0a8ccc0e9/Nomad-Semi-OSB.jpeg?content-type=image%2Fjpeg",
                            'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/51154f00-71dc-4e3b-a578-89bdb623e2ff/Raw+OSB%281%29.png?content-type=image%2Fpng",
                            'price': 0,
                            'included': false,
                            'name': "Raw OSB"
                        },
                        {
                            'slug' : "parquet-cashmere",
                            'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/880e0959-245f-4e20-9dc6-7bd7c049209d/Nomad-Semi-Cashmere.jpeg",
                            'price': 1800,
                            'included': false,
                            'name': "Parchet Cashmere",
                            'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/9fc0f54a-46a8-4974-867a-a5bef7028236/Cashmere%281%29.png?content-type=image%2Fpng",
                        },
                        {
                            'slug' : "parquet-hazelnut",
                            'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/bda4af49-a7d1-41ca-8825-c5d889e69644/Nomad-Semi-Hazelnut.jpeg",
                            'price': 1800,
                            'included': false,
                            'name': "Parchet Hazelnut",
                            'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0e486d0a-cb09-4127-8149-7cda0264a631/Hazelnut%281%29.png?content-type=image%2Fpng",
                        },
                    ],
                    [
                        {
                            'slug' : "ventilation-system",
                            'image': "https://imagedelivery.net/RxM-_yk1wsGjVidUVgzK1A/xQtz84NJrQFrDdtPj-1739972598683-LSviDTTpk3zmmyYeT/public",
                            'price': 4800,
                            'included': false,
                            'name': "Sistem de ventilatie"
                        }
                    ],
                    [
                        {
                            'slug' : "blinds",
                            'image': blindsImage,
                            'price': 2000,
                            'included': false,
                            'name': "Jaluzele Smart"
                        }
                    ]
                ],
                    'images': [
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/01a3c325-9314-4a47-a844-7aa3a9eaacb9/Nomad-Semi.jpeg?content-type=image%2Fjpeg',
                            'alt' : 'semi-turnkey-1'
                        },
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/f493cab1-6103-48bf-90ab-6806f7b14557/Nomad-Finish.jpg?content-type=image%2Fjpeg',
                            'alt' : 'semi-turnkey-1'
                        },
                    ]
                },
                {
                    'slug': 'turnkey',
                    'name': 'La Cheie',
                    "price" : 59800,
                    'upgrades' : [
                    [
                        {
                            'slug' : "parquet-raw-osb",
                            'image': "",
                            'price': 0,
                            'included': true,
                            'name': "Raw OSB",
                            'icon' : "",
                        },
                        {
                            'slug' : "parquet-cashmere",
                            'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0c58edd5-aec6-4904-b27d-8f80e15e8dab/Nomad-Turnkey-NOKitchen-Cashmere.jpeg",
                            'price': 0,
                            'included': false,
                            'name': "Parchet Cashmere",
                            'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/9fc0f54a-46a8-4974-867a-a5bef7028236/Cashmere%281%29.png?content-type=image%2Fpng",
                        },
                        {
                            'slug' : "parquet-hazelnut",
                            'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/f98c923d-3cbc-4619-a1d6-5965cecddd3e/Nomad-Turnkey-NOKitchen-Hazelnut.jpeg",
                            'price': 0,
                            'included': false,
                            'name': "Parchet Hazelnut",
                            'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0e486d0a-cb09-4127-8149-7cda0264a631/Hazelnut%281%29.png?content-type=image%2Fpng",
                        },
                    ],
                    [
                        {
                            'slug' : "ventilation-system",
                            'image': "https://imagedelivery.net/RxM-_yk1wsGjVidUVgzK1A/xQtz84NJrQFrDdtPj-1739972598683-LSviDTTpk3zmmyYeT/public",
                            'price': 0,
                            'included': true,
                            'name': "Sistem de ventilatie"
                        }
                    ],
                    [
                        {
                            'slug' : "blinds",
                            'image': blindsImage,
                            'price': 0,
                            'included': true,
                            'name': "Jaluzele Smart"
                        }
                    ]
                ],
                    'images': [
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/e5a52606-eedb-4123-928d-ce4c5ee025e1/Nomad-Turnkey.jpeg?content-type=image%2Fjpeg',
                            'alt' : 'turnkey-1'
                        },
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/f493cab1-6103-48bf-90ab-6806f7b14557/Nomad-Finish.jpg?content-type=image%2Fjpeg',
                            'alt' : 'semi-turnkey-1'
                        },

                    ]
                },
            ],
            "floorplan" : [
                {
                    'slug' : "floorplan-a",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/1370d0ce-fa62-4b45-9460-c360988ca4bd/1.1.png",
                    'price': 0,
                    'name': 'Floorplan A',
                    'modal': "<h3>24m2 - A Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 5.70m x 3.10m x 2.50m</p>\n" +
                        "<p>Exterior: 6.40m x 3.80m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>Bedroom: 14.20m2</p>\n" +
                        "<p>Bathroom: 2.65m2</p>\n" +
                        "<p>Deposit / Kitchen: 0.80m2</p>"
                },
                {
                    'slug' : "floorplan-b",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/d1ea47fe-dba4-4447-bfb3-d6b32e0c3e7a/1.2.png",
                    'price': 0,
                    'name': 'Floorplan B',
                    'modal': "<h3>24m2 - B Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 5.70m x 3.10m x 2.50m</p>\n" +
                        "<p>Exterior: 6.40m x 3.80m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>Bedroom: 14.20m2</p>\n" +
                        "<p>Bathroom: 2.65m2</p>\n" +
                        "<p>Deposit / Kitchen: 0.80m2</p>"
                }
            ],
        },
        'wanderlust-48' : {
            "image" : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/80c8b735-d0ef-45b0-8ca0-ba0f3a6b935e/Wanderlust.jpg?content-type=image%2Fjpeg",
            "name": "Wanderlust",
            "energy": 69840,
            "options" : [
                {
                    'slug' : 'semi-turnkey',
                    'name' : 'Semi-finisat',
                    "price" : 59800,
                    'upgrades' : [
                        [
                            {
                                'slug' : "parquet-raw-osb",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/d55d5b1c-c6bf-4f1f-8264-ec0c3faf15e1/Wanderlust-Semi-OSB.jpeg?content-type=image%2Fjpeg",
                                'price': 0,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/51154f00-71dc-4e3b-a578-89bdb623e2ff/Raw+OSB%281%29.png?content-type=image%2Fpng",
                                'name': "Raw OSB",
                            },
                            {
                                'slug' : "parquet-cashmere",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/9dd80ace-e56c-44b9-92ff-4316dbbeac82/Wanderlust-Semi-Cashmere.jpeg?content-type=image%2Fjpeg",
                                'price': 3800,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/9fc0f54a-46a8-4974-867a-a5bef7028236/Cashmere%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Cashmere"
                            },
                            {
                                'slug' : "parquet-hazelnut",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/78983686-9d80-4fd5-9de7-bc691fd0ebae/Wanderlust-Semi-Hazelnut.jpeg?content-type=image%2Fjpeg",
                                'price': 3800,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0e486d0a-cb09-4127-8149-7cda0264a631/Hazelnut%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Hazelnut"
                            },
                        ],
                        [
                            {
                                'slug' : "ventilation-system",
                                'image': "https://imagedelivery.net/RxM-_yk1wsGjVidUVgzK1A/xQtz84NJrQFrDdtPj-1739972598683-LSviDTTpk3zmmyYeT/public",
                                'price': 7800,
                                'included': false,
                                'name': "Sistem de ventilatie"
                            }
                        ],
                        [
                            {
                                'slug' : "blinds",
                                'image': blindsImage,
                                'price': 4000,
                                'included': false,
                                'name': "Jaluzele Smart"
                            }
                        ]
                    ],
                    'images': [
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/8a2afa68-3c50-49de-918a-e3f7f03231f8/Wanderlust-Semi.jpeg?content-type=image%2Fjpeg',
                            'alt' : 'semi-turnkey-1'
                        },
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0770c4b0-f39b-4e42-b9f8-ff9c7a652eef/Wanderlust-Finish.jpg?content-type=image%2Fjpeg',
                            'alt' : 'semi-turnkey-1'
                        },

                    ]
                },
                {
                    'slug': 'turnkey',
                    'name': 'La Cheie',
                    "price" : 109800,
                    'upgrades' : [
                        [
                            {
                                'slug' : "parquet-raw-osb",
                                'image': "https://image.com",
                                'price': 0,
                                'included': true,
                                'icon' : "https://placehold.co/400",
                                'name': "Raw OSB"
                            },
                            {
                                'slug' : "parquet-cashmere",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/206eab45-42bd-412b-a62d-e1ad37452869/Wanderlust-Turnkey-NOKitchen-Cashmere.jpeg?content-type=image%2Fjpeg",
                                'price': 0,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/9fc0f54a-46a8-4974-867a-a5bef7028236/Cashmere%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Cashmere"
                            },
                            {
                                'slug' : "parquet-hazelnut",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/a1b94853-905e-4392-b701-d41abf714b7d/Wanderlust-Turnkey-NOKitchen-Hazelnut.jpeg?content-type=image%2Fjpeg",
                                'price': 0,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0e486d0a-cb09-4127-8149-7cda0264a631/Hazelnut%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Hazelnut"
                            },
                        ],
                        [
                            {
                                'slug' : "ventilation-system",
                                'image': "https://imagedelivery.net/RxM-_yk1wsGjVidUVgzK1A/xQtz84NJrQFrDdtPj-1739972598683-LSviDTTpk3zmmyYeT/public",
                                'price': 0,
                                'included': true,
                                'name': "Sistem de ventilatie"
                            }
                        ],
                        [
                            {
                                'slug' : "blinds",
                                'image': blindsImage,
                                'price': 0,
                                'included': true,
                                'name': "Jaluzele Smart"
                            }
                        ]
                    ],
                    'images': [
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/45d1ba80-5da0-4c28-bc2a-aebe4061600d/Wanderlust-Turnkey.jpeg?content-type=image%2Fjpeg',
                            'alt' : 'turnkey-1'
                        },
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0770c4b0-f39b-4e42-b9f8-ff9c7a652eef/Wanderlust-Finish.jpg?content-type=image%2Fjpeg',
                            'alt' : 'turnkey-1'
                        },

                    ]
                }
            ],
            "floorplan" : [
                {
                    'slug' : "floorplan-a",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/b430b8e4-d3a6-468f-bce9-de3ef1006e02/2.1.png",
                    'price': 0,
                    'name': 'Floorplan A',
                    'modal': "<h3>48m2 - A Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 11.80m x 3.10m x 2.50m</p>\n" +
                        "<p>Exterior: 12.60m x 3.80m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>Living Room + Kitchen: 19.90m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bedroom: 11.80m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bathroom: 4.50m2</p>"
                },
                {
                    'slug' : "floorplan-b",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/f6987c29-3536-417b-b7f7-4a3e242a9e24/2.2.png",
                    'price': 0,
                    'name': 'Floorplan B',
                    'modal': "<h3>48m2 - B Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 11.80m x 3.10m x 2.50m</p>\n" +
                        "<p>Exterior: 12.60m x 3.80m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>1. Bedroom: 11.80m2</p>\n" +
                        "<p>2. Bedroom: 11.80m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bathroom: 4.50m2</p>\n" +
                        "<p>2. Bathroom: 3.50m2</p>\n" +
                        "<p>Hallway: 3.50m2</p>"
                }
            ],
        },
        'serenity-95' : {
            "image" : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/daa6706a-4990-4ce6-8968-d15ca90f297d/Serenity.jpg?content-type=image%2Fjpeg",
            "name": "Serenity",
            "energy": 138225,
            "options" : [
                {
                    'slug' : 'semi-turnkey',
                    'name' : 'Semi-finisat',
                    "price" : 109800,
                    'upgrades' : [
                        [
                            {
                                'slug' : "parquet-raw-osb",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/958fb6b6-b122-4eb6-9bba-637e4c471c48/Serenity-Semi-OSB.jpeg?content-type=image%2Fjpeg",
                                'price': 0,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/51154f00-71dc-4e3b-a578-89bdb623e2ff/Raw+OSB%281%29.png?content-type=image%2Fpng",
                                'name': "Raw OSB"
                            },
                            {
                                'slug' : "parquet-cashmere",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/6fa5a9fc-ef9d-48b2-9c82-37354f1c68b2/Serenity-Semi-Cashmere.jpeg?content-type=image%2Fjpeg",
                                'price': 7800,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/9fc0f54a-46a8-4974-867a-a5bef7028236/Cashmere%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Cashmere"
                            },
                            {
                                'slug' : "parquet-hazelnut",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/509eea5e-c3f5-427d-895f-5f40dff80298/Serenity-Semi-Hazelnut.jpeg?content-type=image%2Fjpeg",
                                'price': 7800,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0e486d0a-cb09-4127-8149-7cda0264a631/Hazelnut%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Hazelnut"
                            },
                        ],
                        [
                            {
                                'slug' : "ventilation-system",
                                'image': "https://imagedelivery.net/RxM-_yk1wsGjVidUVgzK1A/xQtz84NJrQFrDdtPj-1739972598683-LSviDTTpk3zmmyYeT/public",
                                'price': 9800,
                                'included': false,
                                'name': "Sistem de ventilatie"
                            }
                        ],
                        [
                            {
                                'slug' : "blinds",
                                'image': blindsImage,
                                'price': 7000,
                                'included': false,
                                'name': "Jaluzele Smart"
                            }
                        ]
                    ],
                    'images': [
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/acca789f-496d-44b4-8e99-fc1172929b2b/Serenit-Semi.jpeg?content-type=image%2Fjpeg',
                            'alt' : 'semi-turnkey-1'
                        },
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/8d85e0fe-82dd-4bb0-b060-f83a49514f7e/Serenity-Finish.jpg?content-type=image%2Fjpeg',
                            'alt' : 'semi-turnkey-2'
                        }
                    ]
                },
                {
                    'slug': 'turnkey',
                    'name': 'La Cheie',
                    "price" : 189800,
                    'upgrades' : [
                        [
                            {
                                'slug' : "parquet-raw-osb",
                                'image': "https://image.com",
                                'price': 0,
                                'included': true,
                                'icon' : "https://placehold.co/400",
                                'name': "Raw OSB"
                            },
                            {
                                'slug' : "parquet-cashmere",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/1e28c854-dca0-489a-932f-9161386e4640/Serenity-Turnkey-Kitchen-Cashmere.jpeg?content-type=image%2Fjpeg",
                                'price': 0,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/9fc0f54a-46a8-4974-867a-a5bef7028236/Cashmere%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Cashmere"
                            },
                            {
                                'slug' : "parquet-hazelnut",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/513522d6-bc62-4023-bd56-d823e2b91325/Serenity-Turnkey-Kitchen-Hazelnut.jpeg?content-type=image%2Fjpeg",
                                'price': 0,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0e486d0a-cb09-4127-8149-7cda0264a631/Hazelnut%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Hazelnut"
                            },
                        ],
                        [
                            {
                                'slug' : "ventilation-system",
                                'image': "https://imagedelivery.net/RxM-_yk1wsGjVidUVgzK1A/xQtz84NJrQFrDdtPj-1739972598683-LSviDTTpk3zmmyYeT/public",
                                'price': 0,
                                'included': true,
                                'name': "Sistem de ventilatie"
                            }
                        ],
                        [
                            {
                                'slug' : "blinds",
                                'image': blindsImage,
                                'price': 0,
                                'included': true,
                                'name': "Jaluzele Smart"
                            }
                        ]
                    ],
                    'images': [
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/c7ec77d8-35b4-46b1-8236-fd955c36c0b0/Serenity-Turnkey.jpeg?content-type=image%2Fjpeg',
                            'alt' : 'turnkey-1'
                        },
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/8d85e0fe-82dd-4bb0-b060-f83a49514f7e/Serenity-Finish.jpg?content-type=image%2Fjpeg',
                            'alt' : 'turnkey-2'
                        }
                    ]
                }
            ],
            "floorplan" : [
                {
                    'slug' : "floorplan-a",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/ca6b0515-506a-4f67-a153-665282375bc9/3.1.png",
                    'price': 0,
                    'name': 'Floorplan A',
                    'modal': "<h3>95m2 - A Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 11.80m x 6.80m x 2.50m</p>\n" +
                        "<p>Exterior: 12.60m x 7.60m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>Living Room + Kitchen: 29.10m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bedroom: 12.20m2</p>\n" +
                        "<p>2. Bedroom: 12.40m2</p>\n" +
                        "<p>3. Bedroom: 13.10m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bathroom: 3.75m2</p>\n" +
                        "<p>2. Bathroom: 4.35m2</p>"
                },
                {
                    'slug' : "floorplan-b",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/583a62e3-4f55-4a61-8b50-399a3b37e8bc/3.2.png",
                    'price': 0,
                    'name': 'Floorplan B',
                    'modal': "<h3>95m2 - B Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 11.80m x 6.80m x 2.50m</p>\n" +
                        "<p>Exterior: 12.60m x 7.60m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>Living Room + Kitchen: 41.50m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bedroom: 12.20m2</p>\n" +
                        "<p>2. Bedroom: 13.10m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bathroom: 3.75m2</p>\n" +
                        "<p>2. Bathroom: 4.35m2</p>"
                },
                {
                    'slug' : "floorplan-c",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/663de3ea-f6be-4a65-97ab-50c63409633c/3.3.png",
                    'price': 0,
                    'name': 'Floorplan C',
                    'modal': "<h3>95m2 - C Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 11.80m x 6.80m x 2.50m</p>\n" +
                        "<p>Exterior: 12.60m x 7.60m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>Living Room + Kitchen: 53.70m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bedroom: 13.10m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bathroom: 3.75m2</p>\n" +
                        "<p>2. Bathroom: 4.35m2</p>"
                }
            ],
        },
        'sanctuary-142' : {
            "image" : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/7e5e4a56-fd66-45fe-9a7b-9b059c576401/Sanctuary.jpg?content-type=image%2Fjpeg",
            "name": "Sanctuary",
            "energy": 175285,
            "options" : [
                {
                    'slug' : 'semi-turnkey',
                    'name' : 'Semi-finisat',
                    "price" : 159800,
                    'upgrades' : [
                        [
                            {
                                'slug' : "parquet-raw-osb",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/a8916469-d50e-4bd9-ada4-7f803614cf19/Sanctuary-Semi-OSB.jpeg?content-type=image%2Fjpeg",
                                'price': 0,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/51154f00-71dc-4e3b-a578-89bdb623e2ff/Raw+OSB%281%29.png?content-type=image%2Fpng",
                                'name': "Raw OSB"
                            },
                            {
                                'slug' : "parquet-cashmere",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/6e7c56c9-8972-486d-ab5d-a06f32ba85ea/Sanctuary-Semi-Cashmere.jpeg?content-type=image%2Fjpeg",
                                'price': 11800,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/9fc0f54a-46a8-4974-867a-a5bef7028236/Cashmere%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Cashmere"
                            },
                            {
                                'slug' : "parquet-hazelnut",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/55a57fd5-5aac-43c9-a1ac-1f8861f7e3f8/Sanctuary-Semi-Hazelnut.jpeg?content-type=image%2Fjpeg",
                                'price': 11800,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0e486d0a-cb09-4127-8149-7cda0264a631/Hazelnut%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Hazelnut"
                            },
                        ],
                        [
                            {
                                'slug' : "ventilation-system",
                                'image': "https://imagedelivery.net/RxM-_yk1wsGjVidUVgzK1A/xQtz84NJrQFrDdtPj-1739972598683-LSviDTTpk3zmmyYeT/public",
                                'price': 9800,
                                'included': false,
                                'name': "Sistem de ventilatie"
                            }
                        ],
                        [
                            {
                                'slug' : "blinds",
                                'image': blindsImage,
                                'price': 9000,
                                'included': false,
                                'name': "Jaluzele Smart"
                            }
                        ]
                    ],
                    'images': [
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/1583171d-66df-4689-8eb4-366236027f9c/Sanctuary-Semi.jpeg?content-type=image%2Fjpeg',
                            'alt' : 'semi-turnkey-1'
                        },
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/acdbe767-fd64-47d0-a84e-9d143cc5a7d0/Sanctuary-Finish.jpg?content-type=image%2Fjpeg',
                            'alt' : 'semi-turnkey-2'
                        }
                    ]
                },
                {
                    'slug': 'turnkey',
                    'name': 'La Cheie',
                    "price" : 279800,
                    'upgrades' : [
                        [
                            {
                                'slug' : "parquet-raw-osb",
                                'image': "https://image.com",
                                'price': 0,
                                'included': true,
                                'icon' : "https://placehold.co/400",
                                'name': "Raw OSB"
                            },
                            {
                                'slug' : "parquet-cashmere",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/c3b76c65-28ba-4bbe-9a38-1c8e71611a43/Sanctuary-Turnkey-Kitchen-Cashmere.jpeg?content-type=image%2Fjpeg",
                                'price': 0,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/9fc0f54a-46a8-4974-867a-a5bef7028236/Cashmere%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Cashmere"
                            },
                            {
                                'slug' : "parquet-hazelnut",
                                'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/43fc78bf-c354-4b33-8cf2-4d7af38e188b/Sanctuary-Turnkey-Kitchen-Hazelnut.jpeg?content-type=image%2Fjpeg",
                                'price': 0,
                                'included': false,
                                'icon' : "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/0e486d0a-cb09-4127-8149-7cda0264a631/Hazelnut%281%29.png?content-type=image%2Fpng",
                                'name': "Parchet Hazelnut"
                            },
                        ],
                        [
                            {
                                'slug' : "ventilation-system",
                                'image': "https://imagedelivery.net/RxM-_yk1wsGjVidUVgzK1A/xQtz84NJrQFrDdtPj-1739972598683-LSviDTTpk3zmmyYeT/public",
                                'price': 0,
                                'included': true,
                                'name': "Sistem de ventilatie"
                            }
                        ],
                        [
                            {
                                'slug' : "blinds",
                                'image': blindsImage,
                                'price': 0,
                                'included': true,
                                'name': "Jaluzele Smart"
                            }
                        ]
                    ],
                    'images': [
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/59500d2f-73c1-470a-bb96-ac4a5150071e/Sanctuary-Turnkey.jpeg?content-type=image%2Fjpeg',
                            'alt' : 'turnkey-1'
                        },
                        {
                            'src' : 'https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/acdbe767-fd64-47d0-a84e-9d143cc5a7d0/Sanctuary-Finish.jpg?content-type=image%2Fjpeg',
                            'alt' : 'turnkey-2'
                        }
                    ]
                }
            ],
            "floorplan" : [
                {
                    'slug' : "floorplan-a",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/527f7439-5840-47fe-8ebc-b6218e23d43b/4.1.png",
                    'price': 0,
                    'name': 'Floorplan A',
                    'modal': "<h3>142m2 - A Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 11.80m x 10.60m x 2.50m</p>\n" +
                        "<p>Exterior: 12.60m x 11.30m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>Living Room + Kitchen: 62.90m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bedroom: 12.40m2</p>\n" +
                        "<p>2. Bedroom: 12.20m2</p>\n" +
                        "<p>3. Bedroom: 12.40m2</p>\n" +
                        "<p>4. Bedroom: 13.10m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bathroom: 3.75m2</p>\n" +
                        "<p>2. Bathroom: 4.35m2</p>"
                },
                {
                    'slug' : "floorplan-b",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/312d8b97-79b6-48cb-897e-1d7424cc88bc/4.2.png",
                    'price': 0,
                    'name': 'Floorplan B',
                    'modal': "<h3>142m2 - B Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 11.80m x 10.60m x 2.50m</p>\n" +
                        "<p>Exterior: 12.60m x 11.30m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>Living Room + Kitchen: 75.30m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bedroom: 12.20m2</p>\n" +
                        "<p>2. Bedroom: 12.40m2</p>\n" +
                        "<p>3. Bedroom: 13.10m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bathroom: 3.75m2</p>\n" +
                        "<p>2. Bathroom: 4.35m2</p>"
                },
                {
                    'slug' : "floorplan-c",
                    'image': "https://images.squarespace-cdn.com/content/67cc4c3c461c922cd2dd82ba/a726891d-b66d-4350-9ced-c7e6b29dc490/4.3.png",
                    'price': 0,
                    'name': 'Floorplan C',
                    'modal': "<h3>142m2 - C Dimensions</h3>\n" +
                        "<br>\n" +
                        "<p>Interior: 11.80m x 10.60m x 2.50m</p>\n" +
                        "<p>Exterior: 12.60m x 11.30m x 3.20m</p>\n" +
                        "<h4>Rooms</h4>\n" +
                        "<p>Living Room + Kitchen: 87.50m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bedroom: 12.40m2</p>\n" +
                        "<p>2. Bedroom: 13.10m2</p>\n" +
                        "<br>\n" +
                        "<p>1. Bathroom: 3.75m2</p>\n" +
                        "<p>2. Bathroom: 4.35m2</p>"
                }
            ],
        },
        'modalContent' : {
            'semi-turnkey' : semiFinisatText,
            'turnkey': laCheieText
        }
    }


    let totalPrice = 0;
    let type = getUrlParameter('SQF_TYPE');
    if(type === null || !config[type] || type === 'modalContent')
        // populate the fields with the first type
        type = 'nomad-24';

    let firstLoad = true;

    updateQueryParam("SQF_TYPE", type)

    let queryArgs = {};
    let currentTab = 0;
    const backBtn     = document.querySelector('.go-back-btn');
    const continueBtn = document.querySelector('.continue-button');
    const optionTemplate = (labelClass, inputType, inputName, inputValue, optionName, optionPrice, price ) => `
            <label class="${labelClass}">
                <input 
                    type="${inputType}" 
                    name="${inputName}" 
                    price="${price}" 
                    value="${inputValue}" 
                />
                <span class="option-name">${optionName}</span>
                <span class="option-price">${optionPrice !== "€0" ? optionPrice : ''}</span>
            </label>
        `;
    const optionsWrapper = (content, className, ID) => `
            <div class="${className}" id="${ID}">${content}</div>
        `;
    const parquetOption = (inputType, inputName, price, inputValue, displayName, displayPrice, checkboxImage, counter) => `
        <div class="checkbox-container">
            <input 
                id="${inputValue}"
                class="custom-checkbox"
                type="${inputType}" 
                name="${inputName}" 
                price="${price}" 
                value="${inputValue}"
                data-display-label="${displayName}" 
                data-display-price="${displayPrice}"
                ${!counter ? "checked=\"checked\"" : ""}    
             />
            <label for="${inputValue}" class="checkbox-label">
                <img src="${checkboxImage}" alt="checkbox-image" class="checkbox-image">
            </label>
        </div>  
    `;

    let button = document.getElementById("detailsLink");
    let modalContent = document.querySelector("#modalOverlay .modal-inner");


    document.addEventListener("DOMContentLoaded", function() {
        render_house_type(type)
        render_price(null, true);
        render_economy_price();
        addEventListenerOnInputs();
        loadInitialQueryParams()
        showTab(currentTab);
        render_floorplan();
        setTabTitle('Upgrades', 'step-3');
    });

    function render_upgrades(value){
        let option = config[type].options.find(obj => obj.slug === value)
        let upgrades =  option.upgrades;
        generateParquetOptions(option.upgrades[0], 'step-3', 'SQF_PARQUET' , false);
        generateOptions(option.upgrades[1], 'step-3', 'SQF_VENTILATION', true, 'checkbox');
        generateOptions(option.upgrades[2], 'step-3', 'SQF_BLINDS', true, 'checkbox' );
    }

    function render_floorplan() {
        let options = config[type].floorplan;
        generateOptions(options, 'step-2', "SQF_FLOORPLAN");
        setTabTitle('Floorplan', 'step-2');
    }

    function setTabTitle(tabTitle, tabID) {
        let tab = document.getElementById(tabID);
        let container = tab.querySelector('h2')
        container.innerHTML = tabTitle;
    }

    function render_economy_price(){
        let savings = config[type].energy;
        savings = formatCurrency(savings)
        const economyWrapper = document.querySelectorAll('.price-box .p2')
        // console.log(economyWrapper)
        economyWrapper.forEach(economy => {
            economy.innerHTML = "Economii de energie est. 50 de ani: " + savings
        })
    }

    function render_price(price = null, init = false ){
        if(price === null)
            price = config[type].options[0].price;

        price = formatCurrency(price)

        if(init)
            price = "de la " + price;

        price += " <span class='tva-label'> + TVA</span>";

        const priceWrapper = document.querySelector('.price-box h4')
        priceWrapper.innerHTML = price;
        // console.log("test", price)
    }

    function addEventListenerOnInputs(){
        let form = document.querySelector('.multistep-form');

        if(!form)
            return;

        // Get all input elements within the div
        const inputs = form.querySelectorAll('input');

            form.addEventListener('change', (event) => {
                console.log(`Input with name "${event.target.name}" changed. New value: "${event.target.value}"`);

                changeImages(event.target.value);



                if(event.target.name === 'SQF_FINISH'){
                    render_upgrades(event.target.value);
                    delete queryArgs['SQF_PARQUET'];
                    delete queryArgs['SQF_VENTILATION'];
                    delete queryArgs['SQF_BLINDS'];
                    delete queryArgs['SQF_FLOORPLAN'];
                    uncheckFloorplanInputs();
                    showModalButton(event.target);
                }else if(event.target.name === 'SQF_PARQUET'){
                    updateParquetPriceAndLabel(event.target);
                }else if(event.target.name === 'SQF_FLOORPLAN'){
                    showModalButton(event.target);
                }

                queryArgs['SQF_PRICE'] = sumCheckedPrices();
                render_price(sumCheckedPrices(), false);

                if (event.target.checked) {
                    // If checked, add the input's name and value to queryArgs
                    queryArgs[event.target.name] = event.target.value;
                } else {
                    // If unchecked, remove the input's name from queryArgs
                    delete queryArgs[event.target.name];
                }

                updateURL()

                removeNotification(currentTab)



            });
        // });
    }

    function showModalButtonOnTabChange(){
        let radio = getTheCheckedOrFirst();

        if(!radio)
            return

        showModalButton(radio);

    }

    function showModalButton(target){

        let displayModal = false;
        let content;
        if(target.name === 'SQF_FLOORPLAN'){
            let floorplan = config[type].floorplan.find(obj => obj.slug === target.value);
            if(floorplan && floorplan.modal){
                displayModal = true;
                content = floorplan.modal;
            }
        }else if(target.name === 'SQF_FINISH'){
            content = config.modalContent[target.value]
            displayModal = true;
        }

        console.log("Content is not empty");
        if(displayModal){
            // Assign the content
            modalContent.innerHTML = content;

            // Display the button
            button.style.display = "block";
        }else{
            button.style.display = "none";
        }
    }

    function changeImages(value){
        console.log(value)
        // Access the sanctuary-24 data from the config object
        const house = config[type];

        // Find the selected option based on the optionSlug
        let selectedOption = house.options.find(option => option.slug === value);

        if (!selectedOption)
            selectedOption = house.floorplan.find(option => option.slug === value);

        if (!selectedOption)
            selectedOption = findUpgrade(value)

        console.log(selectedOption)

        // Retrieve images for the selected option
        let images = selectedOption.images;
        if(!images)
            images = selectedOption.image;

        console.log(images)
        let imagesHTML;

        if(Array.isArray(images)){
            // Generate HTML for the images
            imagesHTML = images.map(image => {
                return `
            <img src="${image.src}" alt="${image.alt}" />
        `;
            }).join(''); // Join the HTML strings together
        }else{
            imagesHTML = `
                <img src="${images}" alt="option ${value}" />
            `
        }


        // Get the container element and update its content
        const container = document.querySelector('.left-images');
        if (container) {
            container.innerHTML = imagesHTML; // Replace the content with the generated HTML
        } else {
            console.error('.container element not found.');
        }
    }

    function render_house_type(type){
        let house = config[type];

        // Set main images
        let mainImage = document.querySelector('.left-images img');
        mainImage.src = house.image;
        mainImage.alt = "Base " + house.name + " Image";

        // Set main name
        let mainName = document.querySelector('.top-section h2');
        mainName.innerText = house.name;

        let options = config[type].options;
        generateOptions(options, 'step-1', 'SQF_FINISH')
    }


    /**
     * Function to generate the tab options
     * @param options
     * @param tabID
     * @param inputName
     * @param append
     * @param inputType
     */
    function generateOptions(options, tabID, inputName, append = false, inputType = 'radio'){
        let tab = document.getElementById(tabID);
        let container = tab.querySelector('.options-container')

        let optionString = "";
        options.forEach(option => {
            if(!option.included){
                optionString += optionTemplate("radio-card", inputType, inputName, option.slug, option.name, formatCurrency(option.price), option.price);
            }

        })

        if(!append)
            container.innerHTML  = optionsWrapper(optionString, 'radio-group ' + inputName);
        else
            container.innerHTML  += optionsWrapper(optionString, 'radio-group ' + inputName);
    }

    /**
     * Function to generate the tab options
     * @param options
     * @param tabID
     * @param inputName
     * @param append
     * @param inputType
     */
    function generateParquetOptions(options, tabID, inputName, append = false, inputType = 'radio'){
        let tab = document.getElementById(tabID);
        let container = tab.querySelector('.options-container')

        let optionString = "";
        let counter = 0;
        let firstName = "";
        let firstPrice = "";
        options.forEach(option => {

            if(!option.included){
                let formattedPrice =  formatCurrency(option.price)

                console.log(formattedPrice)
                if(formattedPrice === "€0"){
                    formattedPrice = "Inclus";
                }

                optionString += parquetOption(inputType, inputName, option.price, option.slug, option.name, formattedPrice, option.icon, counter);

                if(counter === 0){
                    firstName = option.name;
                    firstPrice = formattedPrice;
                }

                counter++;
            }




        })

        if(!append)
            container.innerHTML  = optionsWrapper(optionString, 'radio-group parquet-checkboxes');
        else
            container.innerHTML  += optionsWrapper(optionString, 'radio-group');

        container.innerHTML  += `<div class="p-wrapper"><p id="display-label">${firstName}</p><p id="display-price">${firstPrice}</p></div>`;
    }


    /*************************************************
     * 2) Payment Tabs => highlight + set UTM (payment=Cash/Crypto/Finanțare)
     *************************************************/
    const paymentTabs = document.querySelectorAll('.payment-section .tab');
    paymentTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            paymentTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Convert tab text to a suitable param value:
            // e.g. "Cash" => "cash", "Finanțare" => "finantare", "Crypto" => "crypto"
            const label = tab.textContent.trim().toLowerCase();
            let paramVal = label; // "cash", "finanțare", "crypto"
            if (label === 'finanțare') paramVal = 'finantare'; // remove accent if you prefer
            updateQueryParam('SQF_PAYMENT', paramVal);
        });
    });

    /*************************************************
     * 3) Feature Details Modal => hidden by default
     *************************************************/
    const detailsLink  = document.getElementById('detailsLink');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal   = document.getElementById('closeModal');

    detailsLink.addEventListener('click', (evt) => {

        let tabs = document.querySelectorAll('.form-tab');
        let inputs = tabs[currentTab].querySelectorAll('input:checked');
        if(inputs.length === 0){
            showNotification(currentTab, "Nu a fost selectată nicio opțiune.")
            return;
        }

        if(currentTab === 2)
            return;

        evt.preventDefault();
        modalOverlay.style.display = 'flex';
    });
    // closeModal.addEventListener('click', () => {
    //     console.log("test12")
    //     modalOverlay.style.display = 'none';
    // });
    modalOverlay.addEventListener('click', (evt) => {
        if (evt.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });

    // Add event listener to the body for any click event
    document.body.addEventListener('click', function(event) {
        // Check if the event target is the button
        if (event.target && event.target.id === 'closeModal') {
            console.log('Button clicked!');
            modalOverlay.style.display = 'none';
        }
    });

    /*************************************************
     * 4) Bottom Buttons => "<" + "CONTINUA"
     *************************************************/


    // "<" => window.history.back()
    backBtn.addEventListener('click', () => {
        showTab(currentTab - 1);
    });


    continueBtn.addEventListener('click', () => {

        if(!checkRadioSelection(currentTab)){
            showNotification(currentTab)
            return;
        }else{
            removeNotification(currentTab)
        }

        showTab(currentTab + 1);
    })



    /*************************************************
     * Helper: update a query param in the URL
     *************************************************/
    function updateQueryParam(key, val) {
        const url = new URL(window.location.href);
        url.searchParams.set(key, val);
        history.replaceState({}, '', url.toString());
    }

    /**
     * function that retrieves the value of a URL parameter based on its name:
     * @param name
     * @returns
     */
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);

        // Check if the parameter exists and is not empty
        const paramValue = urlParams.get(name);

        if (!paramValue) {
            // This will be true if the parameter is missing or empty
            console.log(`The parameter '${name}' is either missing or empty.`);
            return null; // Or handle it as you need
        }

        return paramValue; // If the parameter exists and is not empty
    }

    /**
     * Format the amount
     * @param amount
     * @returns {string}
     */
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(amount);
    }

    /**
     * Sum checked input prices
     * @returns {string}
     */
    function sumCheckedPrices() {
        // Get all checked input elements within the .multistep-form container
        const checkedInputs = document.querySelectorAll('.multistep-form input:checked');

        // Initialize the sum variable
        let totalPrice = 0;

        // Iterate over the checked inputs and sum the values of their price attributes
        checkedInputs.forEach(input => {
            const price = parseFloat(input.getAttribute('price')); // Get the price attribute and convert it to a float
            if (!isNaN(price)) {
                totalPrice += price; // Add to the total if the price is a valid number
            }
        });

        // Output the total price
        // console.log('Total Price:', totalPrice);

        // You can return the total price if you need it elsewhere
        return totalPrice;
    }

    /**
     * Function to generate a query string and update the browser's URL
     */
    function updateURL() {
        // Create a new URLSearchParams object from the queryArgs object
        const params = new URLSearchParams(queryArgs);

        // Update the browser's URL with the new query string (without reloading the page)
        history.pushState(null, '', '?' + params.toString());
    }


    /**
     * Load initial Query Params
     */
    function loadInitialQueryParams() {
        // Get the query string from the URL
        const urlParams = new URLSearchParams(window.location.search);

        // Loop through each parameter in the URL and add it to queryArgs
        urlParams.forEach((value, key) => {
            queryArgs[key] = value;
        });
    }

    function showTab(n) {
        const tabs = document.querySelectorAll('.form-tab');
        // console.log(tabs.length, n)

        if(tabs.length === n){
            // Obține query string-ul din URL
            const urlParams = new URLSearchParams(window.location.search);

            // Construieste URL-ul de redirecționare cu aceleași parametre
            // Redirecționează către noul URL
            window.location.href = '/design/form/' + (urlParams.toString() ? '?' + urlParams.toString() : '');
        }

        if(n === 1){
            let checked = tabs[n].querySelector('input:checked');
            if(!checked){
                let input = tabs[n].querySelector('input');
                input.checked = true;
                queryArgs['SQF_FLOORPLAN'] = input.value;
                updateURL()
            }
        }

        if(n === 2){
            let checked = tabs[n].querySelector('input[name=SQF_PARQUET]:checked');
            if(checked){
                checked.checked = true;
                queryArgs['SQF_PARQUET'] = checked.value;
                updateURL()
            }
        }

        if(n === -1)
            return;

        tabs.forEach(tab => {tab.style.display = 'none';});

        tabs[n].style.display = 'block';

        // console.log("current tab: " + n)
        currentTab = n;

        if(currentTab === 0) {
            backBtn.style.display = 'none';
            continueBtn.style.width = '100%';
        }else{
            backBtn.style.display = 'flex';
            continueBtn.style.width = 'inherit';
        }

        changeImageOnTabSwitch()
        showModalButtonOnTabChange()
    }

    function changeImageOnTabSwitch(){
        if(firstLoad){
            firstLoad = false;
            return;
        }

        let radio = getTheCheckedOrFirst()

        changeImages(radio.value);

    }


    function getTheCheckedOrFirst(){
        const tabs = document.querySelectorAll('.form-tab');
        console.log(tabs);
        // Select all radio buttons inside the .options-container
        const radioButtons = tabs[currentTab].querySelectorAll('.options-container input[type="radio"]');
        console.log(radioButtons);
        // check for checked radios
        let radio = Array.from(radioButtons).find(radio => radio.checked);
        console.log(radio);

        if(!radio){
            radio = radioButtons[0];
        }

       return radio;
    }


    // Function to find the upgrade object with slug 'parquet-raw-osb'
    function findUpgrade(slug) {
        console.log(type, slug)
        let finish = getUrlParameter('SQF_FINISH');
        // Loop through options
        for (let option of config[type].options) {
            if(option.slug === finish){
                for (let upgradeGroup of option.upgrades) {
                    //     // Use find to get the upgrade with the desired slug
                        const upgrade = upgradeGroup.find(item => item.slug === slug);
                        if (upgrade){
                            return upgrade; // Return the found upgrade
                        }
                }
            }
        }
        return null; // Return null if no match is found
    }

    function checkRadioSelection(currentTab) {
        if(currentTab === 0 || currentTab === 1){
            const tabs = document.querySelectorAll('.form-tab');
            console.log(tabs);
            // Select all radio buttons inside the .options-container
            const radioButtons = tabs[currentTab].querySelectorAll('.options-container input[type="radio"]');
            console.log(radioButtons);
            // Check if at least one radio button is checked
            // Return true if a radio button is selected, otherwise false
            return Array.from(radioButtons).some(radio => radio.checked);
        }else{
            return true;
        }

    }

    function uncheckFloorplanInputs() {
        // Select all inputs with name="floorplan"
        const floorplanInputs = document.querySelectorAll('input[name="SQF_FLOORPLAN"]');

        // Loop through the selected inputs and uncheck them
        floorplanInputs.forEach(input => {
            input.checked = false;
        });
    }

    // Function to show the notification
    function showNotification(currentTab, text = "") {
        const tabs = document.querySelectorAll('.form-tab');

        // Get the .options-container element
        const optionsContainer = tabs[currentTab].querySelector('.options-container');
        let notification = optionsContainer.querySelector('.notification');
        // Check if the notification already exists to avoid duplicating
        if (!notification) {
            // Create the notification div
            const notificationDiv = document.createElement('div');
            notificationDiv.classList.add('notification');
            notificationDiv.textContent = text ? text : '*Alege o optiune pentru estimare de pret';  // Notification text

            // Append the notification to the options container
            optionsContainer.appendChild(notificationDiv);
        }else{
            notification.innerHTML = text ? text : '*Alege o optiune pentru estimare de pret';
        }
    }

    // Function to remove the notification
    function removeNotification(currentTab) {
        // Get the .options-container element
        const tabs = document.querySelectorAll('.form-tab');

        // Get the .options-container element
        const optionsContainer = tabs[currentTab].querySelector('.options-container');

        // Find the notification and remove it
        const notification = optionsContainer.querySelector('.notification');
        if (notification) {
            notification.remove();
        }
    }

    function updateParquetPriceAndLabel(target) {
        const displayLabel = target.getAttribute('data-display-label');
        const displayPrice = target.getAttribute('data-display-price');

        // Populate the paragraphs with the respective attributes
        document.getElementById('display-label').textContent = displayLabel || 'No label provided';
        document.getElementById('display-price').textContent = displayPrice || 'No price available';
    }


    // Get the button and tooltip element
    const tButton = document.getElementById('info-button');
    const tooltip = document.getElementById('tooltip');

// Add event listener for click event on the button
    tButton.addEventListener('click', function() {
        // Check if the tooltip is visible
        if (tooltip.style.display === 'block') {
            tooltip.style.display = 'none'; // Hide the tooltip
        } else {
            tooltip.style.display = 'block'; // Show the tooltip
        }
    });

})();
</script>
