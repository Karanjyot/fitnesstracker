const Workout = require("../models/exercise.js")

module.exports = function(app)   {
    // add workout
    app.post("/api/workouts", (req,res) =>{
        Workout.create({}).then(
            data=>res.json(data)
        )
    })

    //add excercise

    app.put("/api/workouts/:id", (req,res)=>{

        Workout.findByIdAndUpdate(req.params.id, {$push: {exercise:req.body}}).then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
    })

    
    // app.put("/api/workouts/:id", (req,res)=>{

    //     Workout.findById(req.params.id) .then(data => data.Create({exercise:req.body}))
    //     .catch(err => {
    //         console.log("err", err)
    //         res.json(err)
    //     })
    // })
}