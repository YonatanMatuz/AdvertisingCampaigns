class CampaignModel {

    public id: number;
    public campaignName: string;
    public advertisingPlatformId: number;
    public advertiserUrl: string;
    public bannerImageUrl: string;

    public constructor(campaign: CampaignModel) {
        this.campaignName = campaign.campaignName;
        this.advertisingPlatformId = campaign.advertisingPlatformId;
        this.advertiserUrl = campaign.advertiserUrl;
        this.bannerImageUrl = campaign.bannerImageUrl;
    }

}

export default CampaignModel;