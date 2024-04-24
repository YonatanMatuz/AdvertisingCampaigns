class AppConfig {
    public campaingsApiUrl = "http://localhost:4000/api/campaigns/";
    public advertisingPlatformsUrl = this.campaingsApiUrl + "advertising-platforms/";
    
}

const appConfig = new AppConfig();

export default appConfig;