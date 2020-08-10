const app = require("express");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = app.Router();
const db = require("../models");

router.post("/api/maintenance/:id", isAuthenticated, (req, res) => {
  console.log(req.body)
  db.Maintenance.create({
    name: req.body.name,
    description: req.body.description,
    milage: req.body.milage,
    parts: req.body.parts,
    jobDate: req.body.jobDate,
    VehicleId: req.body.VehicleId,
    imageUrl: req.body.imageUrl
  })
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.get("/maintenancefind/:jobid", isAuthenticated, (req, res) => {
  const jobId = req.params.jobid;
  db.Maintenance.findAll({
    where: {
      id: jobId
    }
  }).then(result => res.send(result))
    .catch(() => res.status(401).json(err));
});

router.get("/maintenancefindvehicle/:vehicleid", isAuthenticated, (req, res) => {
  const vehicleId = req.params.vehicleid;
  db.Maintenance.findAll({
    where: {
      VehicleId: vehicleId
    }
  }).then(result => {
    console.log(result)
    res.send(result);
  })
    .catch(() => res.status(401).json(err));
});

// I don't think this one is being used, but it seems like we would. 
// router.get("/api/maintenance", isAuthenticated, (req, res) => {
//   db.Maintenance.findAll()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(() => res.status(401).json(err));
// });


module.exports = router;
