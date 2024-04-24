import AdvertisingPlatform from "../2-models/advertising-platform-model";
import CampaignModel from "../2-models/campaign-model";
import { ResourceNotFoundError } from "../2-models/client-errors";
import dal from "../4-utils/dal";
import { OkPacket } from "mysql";


async function getAllCampaigns(): Promise<CampaignModel[]> {

    const sql = `
        SELECT *
        FROM campaigns`;

    const campaigns = await dal.execute(sql);

    return campaigns;
}

async function getAllAdvertisingPlatforms(): Promise<AdvertisingPlatform[]> {

    const sql = `
        SELECT *
        FROM advertisingPlatforms`;

    const advertisingPlatforms = await dal.execute(sql);

    return advertisingPlatforms;

}

async function getSpecificCampaign(id: number): Promise<CampaignModel> {

    const sql = `
        SELECT *
        FROM campaigns
        WHERE id = ?`;

    const result = await dal.execute(sql, [id]);
    
    const campaign = result[0];

    return campaign;

}

async function addCampaign(campaign: CampaignModel): Promise<CampaignModel> {

    const sql = `
        INSERT INTO campaigns
        VALUES(DEFAULT, ?, ?, ?, ?)`;

    const result: OkPacket = await dal.execute(sql,
        [campaign.campaignName, campaign.advertisingPlatformId, campaign.advertiserUrl, campaign.bannerImageUrl]);

    campaign.id = result.insertId;

    return campaign;

}

async function updateCampaign(campaign: CampaignModel): Promise<CampaignModel> {

    const sql = `
        UPDATE campaigns
        SET campaignName = ?, advertisingPlatformId = ?, advertiserUrl = ?, bannerImageUrl = ?
        WHERE id = ?`;

    const result = await dal.execute(sql,
        [campaign.campaignName, campaign.advertisingPlatformId, campaign.advertiserUrl, campaign.bannerImageUrl, campaign.id]);

    if (result.affectedRows === 0) throw new ResourceNotFoundError(campaign.id);

    return campaign;
}

export default {
    getAllCampaigns,
    getAllAdvertisingPlatforms,
    getSpecificCampaign,
    addCampaign,
    updateCampaign
};