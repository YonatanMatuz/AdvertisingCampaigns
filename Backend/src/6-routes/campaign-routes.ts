import express, { Request, Response, NextFunction, request } from "express";
import campaignsService from "../5-services/campaigns-service";
import CampaignModel from "../2-models/campaign-model";

const router = express.Router();


// GET - fetches all campaigns
router.get("/campaigns", async( request: Request, response: Response, next: NextFunction ) => {
    try {
        const campaigns = await campaignsService.getAllCampaigns();
        response.json(campaigns);
    }
    catch (err: any) {
        next(err);
    }
});


// GET - fetches all advertising platforms
router.get("/campaigns/advertising-platforms", async( request: Request, response: Response, next: NextFunction ) => {
    try {
        const advertisingPlatforms = await campaignsService.getAllAdvertisingPlatforms();
        response.json(advertisingPlatforms);
    }
    catch (err: any) {
        next(err);
    }
});

// GET - fetches a specific campaign
router.get("/campaigns/:id", async( request: Request, response: Response, next: NextFunction ) => {
    try {
        const id = +request.params.id;
        const campaign = await campaignsService.getSpecificCampaign(id);
        response.json(campaign);
    }
    catch (err: any) {
        next(err);
    }
});

// POST - add a new campaign
router.post("/campaigns", async( request: Request, response: Response, next: NextFunction ) => {
    try {
        const campaign = new CampaignModel(request.body);
        const newCampaign = await campaignsService.addCampaign(campaign);
        response.status(201).json(newCampaign);
    }
    catch (err: any) {
        next(err);
    }
});

// PUT - update an exisiting campaign
router.put("/campaigns/:id", async( request: Request, response: Response, next: NextFunction ) => {
    try {
        let campaign = new CampaignModel(request.body);
        campaign.id = +request.params.id;
        const updatedCampaign = await campaignsService.updateCampaign(campaign);
        response.status(200).json(updatedCampaign);
    }
    catch (err: any) {
        next(err);
    }
});


export default router;