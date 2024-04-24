import axios from "axios";
import CampaignModel from "../Models/CampaignModel";
import appConfig from "../Utils/AppConfig";
import AdvertisingPlatform from "../Models/AdvertisingPlatform";

class CampaignsService {

    public async getAllCampaigns(): Promise<CampaignModel[]> {

        const response = await axios.get<CampaignModel[]>(appConfig.campaingsApiUrl);

        const campaigns = response.data;

        return campaigns;

    }

    public async getAllAdvertisingPlatforms(): Promise<AdvertisingPlatform[]> {

        const response = await axios.get<AdvertisingPlatform[]>(appConfig.advertisingPlatformsUrl);

        const advertisingPlatforms = response.data;

        return advertisingPlatforms;

    }

    public async getSpecificCampaign(id: number): Promise<CampaignModel> {

        const response = await axios.get<CampaignModel>(appConfig.campaingsApiUrl + id);

        const campaign = response.data;

        return campaign; 

    }

    public async addCampaign(campaign: CampaignModel): Promise<void> {

        const response = await axios.post<CampaignModel>(appConfig.campaingsApiUrl, campaign);

        // This isn't currently needed, but added anyway for future redux storing
        const addedCampaign = response.data;

    }

    public async updateCampaign(campaign: CampaignModel): Promise<void> {

        const response = await axios.put<CampaignModel>(appConfig.campaingsApiUrl + campaign.id, campaign);

        // This isn't currently needed, but added anyway for future redux storing
        const updatedCampaign = response.data;

    }
}

const campaignsService = new CampaignsService();

export default campaignsService;