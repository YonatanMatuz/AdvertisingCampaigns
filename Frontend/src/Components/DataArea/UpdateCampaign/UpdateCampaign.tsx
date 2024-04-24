import { useEffect, useState } from "react";
import "./UpdateCampaign.css";
import { useNavigate, useParams } from "react-router-dom";
import campaignsService from "../../../Services/CampaignsService";
import notifyService from "../../../Services/NotifyService";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CampaignModel from "../../../Models/CampaignModel";
import AdvertisingPlatform from "../../../Models/AdvertisingPlatform";

function UpdateCampaign(): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<CampaignModel>();

    const [ advertisingPlatforms, setAdvertiserPlatforms ] = useState<AdvertisingPlatform[]>([]);

    const params = useParams();

    const navigate = useNavigate();

    const id = +params.id;

    useEffect(() => {

        campaignsService.getSpecificCampaign(id)
        .then(dbCampaign => {
            setValue("campaignName", dbCampaign.campaignName);
            setValue("advertisingPlatformId", dbCampaign.advertisingPlatformId) ;
            setValue("advertiserUrl", dbCampaign.advertiserUrl);
            setValue("bannerImageUrl", dbCampaign.bannerImageUrl);
        })
        .catch(err => notifyService.error(err));

        campaignsService.getAllAdvertisingPlatforms()
        .then(dbAdvertisingPlatforms => setAdvertiserPlatforms(dbAdvertisingPlatforms))
        .catch();

    }, []);

    async function sendForm(campaign: CampaignModel) {
        try {
            campaign.id = id;
            await campaignsService.updateCampaign(campaign);
            navigate("/campaigns");
            notifyService.success("Campaign updated successfully!")
        }
        catch (err: any) {
            notifyService.error(err);
        }
    }



    return (

        <div className="UpdateCampaign FormBox">

            {/* Main Form Container */}
            <Box component="form" className="FormContents" onSubmit={handleSubmit(sendForm)}>

                {/* Form Title */}
                <Typography variant="h5">Update Campaign</Typography>

                {/* User Input */}
                <TextField
                variant="standard"
                label="Campaign Name: "
                {...register("campaignName")}
                InputLabelProps={{
                    shrink: true,
                  }}
                required />

                {/* User dropdown selection */}
                <FormLabel>Advertising Platforms</FormLabel>
                
                {advertisingPlatforms.length > 0 && 
                    <select {...register("advertisingPlatformId")}>
                        {advertisingPlatforms.map(ap => (

                            <option key={ap.id} value={ap.id}>
                                {ap.advertisingPlatform}
                            </option>

                        ))}
                    </select>
                }
                
                {/* User Input */}
                <TextField
                variant="standard"
                label="Advertiser Landing Page: "
                {...register("advertiserUrl")}
                InputLabelProps={{
                    shrink: true,
                  }}
                required/>

                {/* User Input */}
                <TextField
                variant="standard"
                rows={2}
                multiline
                label="Banner Image Url: "
                {...register("bannerImageUrl")}
                InputLabelProps={{
                    shrink: true,
                  }}
                required/>

                {/* Submit Button */}
                <Button type="submit" variant="contained" color="success"> Submit </Button>

            </Box>
			
        </div>

    );
}

export default UpdateCampaign;
