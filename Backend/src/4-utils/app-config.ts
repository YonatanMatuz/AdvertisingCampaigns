class AppConfig {

    public port = 4000;

    public mySqlHost = "localhost";

    public mySqlUser = "root";

    public mySqlPassword = "";

    public mySqlDatabase = "advertising_campaigns";
}

const appConfig = new AppConfig();

export default appConfig;
