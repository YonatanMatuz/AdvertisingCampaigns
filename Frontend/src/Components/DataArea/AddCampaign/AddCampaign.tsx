import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import "./AddCampaign.css";
import CampaignModel from "../../../Models/CampaignModel";
import AdvertisingPlatform from "../../../Models/AdvertisingPlatform";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import campaignsService from "../../../Services/CampaignsService";
import notifyService from "../../../Services/NotifyService";

function AddCampaign(): JSX.Element {

    const { register, handleSubmit } = useForm<CampaignModel>();

    const [ advertisingPlatforms, setAdvertiserPlatforms ] = useState<AdvertisingPlatform[]>([]);

    const navigate = useNavigate();

    useEffect(() => {

        campaignsService.getAllAdvertisingPlatforms()
        .then(dbAdvertisingPlatforms => setAdvertiserPlatforms(dbAdvertisingPlatforms))
        .catch();

    }, []);

    async function sendForm(campaign: CampaignModel) {
        try {
            await campaignsService.addCampaign(campaign);
            navigate("/campaigns");
            notifyService.success("New Campaign added successfully!")
        }
        catch (err: any) {
            notifyService.error(err);
        }
    }



    return (

        <div className="AddCampaign FormBox">

            {/* Main form container */}
            <Box component="form" className="FormContents" onSubmit={handleSubmit(sendForm)}>

                {/* Form Title */}
                <Typography variant="h5">Add Campaign</Typography>

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
                    <select defaultValue="" {...register("advertisingPlatformId")}>
                        <option disabled value="">Please Select an Advertising Platform</option>
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

export default AddCampaign;
