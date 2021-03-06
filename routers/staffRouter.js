// router methods definitions go here!


const express = require('express');
const router = express.Router();
const eventConnector = require('../connectors/eventConnector');
const rewardsConnector = require('../connectors/rewardsConnector');

// "/staff" handlers

router.get('/',  (request, response) => {
    try {
        response.render('staffEvents.hbs', {errorMessage:"success"
        });
        console.log("/staff");
    }
    catch (err) {
        console.log(err);
        response.render('staffEvents.hbs',{ errorMessage:"error"})
    }
});


router.get('/events',   (request, response) => {
    try {
            //shows the list of events the current staff is assigned with
            // each list shows the participants
                console.log("/staff/events");
                response.render('staffEvents.hbs', {})

    }
    catch (err) {
        console.log(err);
        response.render('staffEvents.hbs', { errorMessage:"error"})
    }
});


router.get('/rewards',   (request, response) => {
    try {
            //shows the list of events the current staff is assigned with
            // each list shows the participants
            console.log("/staff/rewards");
            response.render('staffRewards.hbs', {})

    }
    catch (err) {
        console.log(err);
        response.render('staffEvents.hbs', { errorMessage:"error"})
    }
});


router.get('/challenges',   (request, response) => {
    try {
            //shows the list of events the current staff is assigned with
            // each list shows the participants
            console.log("/staff/challenges");
            response.render('staffChallenges.hbs', {})
    }
    catch (err) {
        console.log(err);
        response.render('staffEvents.hbs', { errorMessage:"error"})
    }
});


// router.get('/:type',   (request, response) => {
//     try {
//         if (request.params.type == 'events') {
//             //shows the list of events the current staff is assigned with
//             // each list shows the participants
//                 console.log("/staff/events");
//                 response.render('staffEvents.hbs', {
//             }); 

//         } else if (request.params.type == 'rewards') {
//                 console.log("/staff/rewards");
//                 response.render('staffRewards.hbs', {
//             });
//         } else if (request.params.type == 'challenges') {
//                 console.log("/staff/challenges");
//                 response.render('staffChallenges.hbs', {
//             });
//         }
//     }
//     catch (err) {
//         console.log(err);
//         response.render('staffEvents.hbs', { errorMessage:"error"})
//     }
// });



module.exports = router;