
const TestMdData = {
    data: [
        {
            desc: "Change Engine Oil and Filter",
            due_mileage: 160000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect All Fluids and Correct Level",
            due_mileage: 160000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Wiper & Washer System",
            due_mileage: 160000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 8.4,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 8.4
            },
            parts: [
                {
                    desc: "Windshield / Headlight Washer Fluid",
                    manufacturer: null,
                    price: 8.4,
                    qty: 1
                }
            ]
        },
        {
            desc: "Rotate Tires, Inspect Tire Wear, & Adjust Tire Pressure",
            due_mileage: 160000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0.4,
                labor_rate_per_hour: 101.44,
                part_cost: 0,
                labor_cost: 40.57,
                misc_cost: 25,
                total_cost: 65.57
            },
            parts: null
        },
        {
            desc: "Replace A/C Filter",
            due_mileage: 160000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0.3,
                labor_rate_per_hour: 101.44,
                part_cost: 20.85,
                labor_cost: 30.43,
                misc_cost: 25,
                total_cost: 76.28
            },
            parts: [
                {
                    desc: "Cabin Air Filter",
                    manufacturer: null,
                    price: 20.85,
                    qty: 1
                }
            ],
        },
        {
            desc: "Change Engine Oil and Filter",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect All Fluids and Correct Level",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Wiper & Washer System",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 8.4,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 8.4
            },
            parts: [
                {
                    desc: "Windshield / Headlight Washer Fluid",
                    manufacturer: null,
                    price: 8.4,
                    qty: 1
                }
            ],
        },
        {
            desc: "Rotate Tires, Inspect Tire Wear, & Adjust Tire Pressure",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0.4,
                labor_rate_per_hour: 101.44,
                part_cost: 0,
                labor_cost: 40.57,
                misc_cost: 25,
                total_cost: 65.57
            },
            parts: null
        },
        {
            desc: "Inspect Ball Joints",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 420.2,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 420.2
            },
            parts: [
                {
                    desc: "Suspension Control Arm and Ball Joint Assembly",
                    manufacturer: null,
                    price: 420.2,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Brake Hoses & Lines",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 59.71,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 59.71
            },
            parts: [
                {
                    desc: "Brake Hydraulic Hose",
                    manufacturer: null,
                    price: 59.71,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Cooling System",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 26.02,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 26.02
            },
            parts: [
                {
                    desc: "Engine Coolant / Antifreeze",
                    manufacturer: null,
                    price: 26.02,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Driveshaft & Related Components",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 57.15,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 57.15
            },
            parts: [
                {
                    desc: "CV Joint Boot",
                    manufacturer: null,
                    price: 57.15,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Exhaust System",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Front Differential Fluid (if Equipped)",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 1,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 1
            },
            parts: [
                {
                    desc: "4WD Switch",
                    manufacturer: null,
                    price: 1,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Rear Differential Fluid Level and Condition (if Equipped)",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Steering Gearbox Assembly and Linkage",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Tie-Rod Ends, Steering Gear & Boots",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 24.84,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 24.84
            },
            parts: [
                {
                    desc: "Steering Tie Rod End Boot",
                    manufacturer: null,
                    price: 24.84,
                    qty: 1
                }
            ],
        },
        {
            desc: "Lube Propeller Shaft",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0.2,
                labor_rate_per_hour: 101.44,
                part_cost: 0,
                labor_cost: 20.28,
                misc_cost: 25,
                total_cost: 45.28
            },
            parts: null
        },
        {
            desc: "Re-torque Propeller Shaft Bolt",
            due_mileage: 165000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0.2,
                labor_rate_per_hour: 101.44,
                part_cost: 0,
                labor_cost: 20.28,
                misc_cost: 25,
                total_cost: 45.28
            },
            parts: null
        },
        {
            desc: "Change Engine Oil and Filter",
            due_mileage: 170000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect All Fluids and Correct Level",
            due_mileage: 170000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Wiper & Washer System",
            due_mileage: 170000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 8.4,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 8.4
            },
            parts: [
                {
                    desc: "Windshield / Headlight Washer Fluid",
                    manufacturer: null,
                    price: 8.4,
                    qty: 1
                }
            ],
        },
        {
            desc: "Rotate Tires, Inspect Tire Wear, & Adjust Tire Pressure",
            due_mileage: 170000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0.4,
                labor_rate_per_hour: 101.44,
                part_cost: 0,
                labor_cost: 40.57,
                misc_cost: 25,
                total_cost: 65.57
            },
            parts: null
        },
        {
            desc: "Change Engine Oil and Filter",
            due_mileage: 175000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect All Fluids and Correct Level",
            due_mileage: 175000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Wiper & Washer System",
            due_mileage: 175000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 8.4,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 8.4
            },
            parts: [
                {
                    desc: "Windshield / Headlight Washer Fluid",
                    manufacturer: null,
                    price: 8.4,
                    qty: 1
                }
            ],
        },
        {
            desc: "Rotate Tires, Inspect Tire Wear, & Adjust Tire Pressure",
            due_mileage: 175000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0.4,
                labor_rate_per_hour: 101.44,
                part_cost: 0,
                labor_cost: 40.57,
                misc_cost: 25,
                total_cost: 65.57
            },
            parts: null
        },
        {
            desc: "Change Engine Oil and Filter",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect All Fluids and Correct Level",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Wiper & Washer System",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 8.4,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 8.4
            },
            parts: [
                {
                    desc: "Windshield / Headlight Washer Fluid",
                    manufacturer: null,
                    price: 8.4,
                    qty: 1
                }
            ],
        },
        {
            desc: "Rotate Tires, Inspect Tire Wear, & Adjust Tire Pressure",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0.4,
                labor_rate_per_hour: 101.44,
                part_cost: 0,
                labor_cost: 40.57,
                misc_cost: 25,
                total_cost: 65.57
            },
            parts: null
        },
        {
            desc: "Inspect Ball Joints",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 420.2,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 420.2
            },
            parts: [
                {
                    desc: "Suspension Control Arm and Ball Joint Assembly",
                    manufacturer: null,
                    price: 420.2,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Brake Hoses & Lines",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 59.71,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 59.71
            },
            parts: [
                {
                    desc: "Brake Hydraulic Hose",
                    manufacturer: null,
                    price: 59.71,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Cooling System",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 26.02,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 26.02
            },
            parts: [
                {
                    desc: "Engine Coolant / Antifreeze",
                    manufacturer: null,
                    price: 26.02,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Driveshaft & Related Components",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 57.15,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 57.15
            },
            parts: [
                {
                    desc: "CV Joint Boot",
                    manufacturer: null,
                    price: 57.15,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Exhaust System",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Front Differential Fluid (if Equipped)",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 1,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 1
            },
            parts: [
                {
                    desc: "4WD Switch",
                    manufacturer: null,
                    price: 1,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Rear Differential Fluid Level and Condition (if Equipped)",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Steering Gearbox Assembly and Linkage",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Tie-Rod Ends, Steering Gear & Boots",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 24.84,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 24.84
            },
            parts: [
                {
                    desc: "Steering Tie Rod End Boot",
                    manufacturer: null,
                    price: 24.84,
                    qty: 1
                }
            ],
        },
        {
            desc: "Lube Propeller Shaft",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0.2,
                labor_rate_per_hour: 101.44,
                part_cost: 0,
                labor_cost: 20.28,
                misc_cost: 25,
                total_cost: 45.28
            },
            parts: null
        },
        {
            desc: "Re-torque Propeller Shaft Bolt",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0.2,
                labor_rate_per_hour: 101.44,
                part_cost: 0,
                labor_cost: 20.28,
                misc_cost: 25,
                total_cost: 45.28
            },
            parts: null
        },
        {
            desc: "Replace A/C Filter",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 1,
                repair_hours: 0.3,
                labor_rate_per_hour: 101.44,
                part_cost: 20.85,
                labor_cost: 30.43,
                misc_cost: 25,
                total_cost: 76.28
            },
            parts: [
                {
                    desc: "Cabin Air Filter",
                    manufacturer: null,
                    price: 20.85,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Automatic Transmission Fluid Level & Condition",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Fuel Cap Gasket",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Fuel System",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Radiator and Condenser",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Transfer Case Fluid Level and Condition (if Equipped)",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 2,
                repair_hours: 0,
                labor_rate_per_hour: 101.44,
                part_cost: 34.6,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 34.6
            },
            parts: [
                {
                    desc: "Gear Oil",
                    manufacturer: null,
                    price: 34.6,
                    qty: 1
                }
            ],
        },
        {
            desc: "Inspect Transmission & Drivetrain for Leaks/Damages",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Replace Engine Air Filter",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        },
        {
            desc: "Inspect Drive/Accessory Belts & Tension",
            due_mileage: 180000,
            is_oem: true,
            repair: {
                repair_difficulty: 0,
                repair_hours: 0,
                labor_rate_per_hour: 0,
                part_cost: 0,
                labor_cost: 0,
                misc_cost: 0,
                total_cost: 0
            },
            parts: null
        }
    ],
}



// const dataList =
// // Call Number two, Maintenance list call

// {
//     message: {
//         code: 0,
//         message: "ok",
//         credentials: "valid",
//         version: "v3.0.0",
//         endpoint: "maintlist",
//         counter: 2
//     },
//     data: [
//         {
//             desc: "Change Engine Oil and Filter",
//             due_mileage: 5000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 5000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect All Fluids and Correct Level",
//             due_mileage: 5000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 5000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Wiper & Washer System",
//             due_mileage: 5000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 5000,
//             repair: {
//                 repair_difficulty: 1,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 8.4,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 8.4
//             },
//             parts: [
//                 {
//                     desc: "Windshield / Headlight Washer Fluid",
//                     manufacturer: null,
//                     price: 8.4,
//                     qty: 1
//                 }
//             ],
//         },
//         {
//             desc: "Rotate Tires, Inspect Tire Wear, & Adjust Tire Pressure",
//             due_mileage: 5000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 5000,
//             repair: {
//                 repair_difficulty: 2,
//                 repair_hours: 0.4,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 0,
//                 labor_cost: 40.57,
//                 misc_cost: 25,
//                 total_cost: 65.57
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Ball Joints",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 2,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 420.2,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 420.2
//             },
//             parts: [
//                 {
//                     desc: "Suspension Control Arm and Ball Joint Assembly",
//                     manufacturer: null,
//                     price: 420.2,
//                     qty: 1
//                 }
//             ],
//         },
//         {
//             desc: "Inspect Brake Hoses & Lines",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 2,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 59.71,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 59.71
//             },
//             parts: [
//                 {
//                     desc: "Brake Hydraulic Hose",
//                     manufacturer: null,
//                     price: 59.71,
//                     qty: 1
//                 }
//             ],
//         },
//         {
//             desc: "Inspect Cooling System",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 1,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 26.02,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 26.02
//             },
//             parts: [
//                 {
//                     desc: "Engine Coolant / Antifreeze",
//                     manufacturer: null,
//                     price: 26.02,
//                     qty: 1
//                 }
//             ],
//         },
//         {
//             desc: "Inspect Driveshaft & Related Components",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 2,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 57.15,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 57.15
//             },
//             parts: [
//                 {
//                     desc: "CV Joint Boot",
//                     manufacturer: null,
//                     price: 57.15,
//                     qty: 1
//                 }
//             ],
//         },
//         {
//             desc: "Inspect Exhaust System",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Front Differential Fluid (if Equipped)",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 2,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 1,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 1
//             },
//             parts: [
//                 {
//                     desc: "4WD Switch",
//                     manufacturer: null,
//                     price: 1,
//                     qty: 1
//                 }
//             ],
//         },
//         {
//             desc: "Inspect Rear Differential Fluid Level and Condition (if Equipped)",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Steering Gearbox Assembly and Linkage",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Tie-Rod Ends, Steering Gear & Boots",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 2,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 24.84,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 24.84
//             },
//             parts: [
//                 {
//                     desc: "Steering Tie Rod End Boot",
//                     manufacturer: null,
//                     price: 24.84,
//                     qty: 1
//                 }
//             ],
//         },
//         {
//             desc: "Lube Propeller Shaft",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 2,
//                 repair_hours: 0.2,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 0,
//                 labor_cost: 20.28,
//                 misc_cost: 25,
//                 total_cost: 45.28
//             },
//             parts: null
//         },
//         {
//             desc: "Re-torque Propeller Shaft Bolt",
//             due_mileage: 15000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 15000,
//             repair: {
//                 repair_difficulty: 1,
//                 repair_hours: 0.2,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 0,
//                 labor_cost: 20.28,
//                 misc_cost: 25,
//                 total_cost: 45.28
//             },
//             parts: null
//         },
//         {
//             desc: "Replace A/C Filter",
//             due_mileage: 20000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 20000,
//             repair: {
//                 repair_difficulty: 1,
//                 repair_hours: 0.3,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 20.85,
//                 labor_cost: 30.43,
//                 misc_cost: 25,
//                 total_cost: 76.28
//             },
//             parts: [
//                 {
//                     desc: "Cabin Air Filter",
//                     manufacturer: null,
//                     price: 20.85,
//                     qty: 1
//                 }
//             ],
//         },
//         {
//             desc: "Inspect Automatic Transmission Fluid Level & Condition",
//             due_mileage: 30000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 30000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Fuel Cap Gasket",
//             due_mileage: 30000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 30000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Fuel System",
//             due_mileage: 30000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 30000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Radiator and Condenser",
//             due_mileage: 30000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 30000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Transfer Case Fluid Level and Condition (if Equipped)",
//             due_mileage: 30000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 30000,
//             repair: {
//                 repair_difficulty: 2,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 101.44,
//                 part_cost: 34.6,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 34.6
//             },
//             parts: [
//                 {
//                     desc: "Gear Oil",
//                     manufacturer: null,
//                     price: 34.6,
//                     qty: 1
//                 }
//             ],
//         },
//         {
//             desc: "Inspect Transmission & Drivetrain for Leaks/Damages",
//             due_mileage: 30000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 30000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Replace Engine Air Filter",
//             due_mileage: 30000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 30000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Inspect Drive/Accessory Belts & Tension",
//             due_mileage: 60000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 60000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Change Engine Coolant",
//             due_mileage: 100000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 100000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         },
//         {
//             desc: "Replace Spark Plugs",
//             due_mileage: 120000,
//             is_oem: true,
//             is_cycle: true,
//             cycle_mileage: 120000,
//             repair: {
//                 repair_difficulty: 0,
//                 repair_hours: 0,
//                 labor_rate_per_hour: 0,
//                 part_cost: 0,
//                 labor_cost: 0,
//                 misc_cost: 0,
//                 total_cost: 0
//             },
//             parts: null
//         }
//     ],
// };

module.exports = TestMdData;