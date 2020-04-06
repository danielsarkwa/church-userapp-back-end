// dependencies
const express = require('express');
const router = express.Router();
const helpSupportsModel = require('../../lib/models/help-support.schema');

router.get('/faqs', async (req, res) => {
    const faqs = await helpSupportsModel.find({'type': 'faq'});
    if (faqs.length > 0) {
        return res.status(200).send(faqs);
    } else {
        return res.status(404).send('Faqs not found');
    }
});


router.get('/suggestedFeatures', async (req, res) => {
    const suggestedFeatures = await helpSupportsModel.find({'type':'feature'});
    if (suggestedFeatures.length > 0) {
        return res.status(200).send(suggestedFeatures);
    } else {
        return res.status(404).send('Suggested feature not found');
    }
});


router.post('/suggestedFeatures', async (req, res) => {
//    try {
//        console.log(req.body);
//         // const suggestedFeature = await new helpSupportsModel(req.body);
//         // await suggestedFeature.save();
//         res.status(200).send('suggested feature added successfully');
//     } catch(ex) {
//         return res.status(404).send('Error on adding new suggested feature');
//     }
});


router.post('/feedback', async (req, res) => {
    // try {
    //     const userFeedback = await new helpSupportsModel(req.body);
    //     await userFeedback.save();
    //     res.status(200).send('success');
    // } catch(ex) {
    //         return res.status(404).send('Error on posting feedback');
    // }
});


module.exports = router;