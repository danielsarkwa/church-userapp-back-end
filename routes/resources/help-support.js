// dependencies
const express = require('express');
const router = express.Router();
const helpSupportsModel = require('../../lib/models/help-support.schema');

router.get('/faqs', async (req, res) => {
    const faqs = await helpSupportsModel.find({'type': 'faq'});
    if (faqs.length > 0) {
        return res.status(200).json(faqs);
    } else {
        return res.status(404).json('Faqs not found');
    }
});


router.get('/suggestedFeatures', async (req, res) => {
    const suggestedFeatures = await helpSupportsModel.find({'type':'feature'});
    if (suggestedFeatures.length > 0) {
        return res.status(200).json(suggestedFeatures);
    } else {
        return res.status(404).json('Suggested feature not found');
    }
});

// add a push notification to the dashboard here
router.post('/suggestedFeatures', async (req, res) => {
   try {
        const suggestedFeature = await new helpSupportsModel(req.body);
        await suggestedFeature.save();
        res.status(200).json('suggested feature added successfully');
    } catch(ex) {
        return res.status(404).json('Error on adding new suggested feature');
    }
});

// add a push notification to the dashboard here
router.post('/feedback', async (req, res) => {
    try {
        const userFeedback = await new helpSupportsModel(req.body);
        await userFeedback.save();
        res.status(200).json('feedback sent');
    } catch(ex) {
        return res.status(404).json('Error on posting feedback');
    }
});


module.exports = router;