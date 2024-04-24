import { useEffect, useState } from "react";
import "./CampaignsList.css";
import CampaignModel from "../../../Models/CampaignModel";
import campaignsService from "../../../Services/CampaignsService";
import notifyService from "../../../Services/NotifyService";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AdvertisingPlatform from "../../../Models/AdvertisingPlatform";
import { NavLink } from "react-router-dom";

function CampaignsList(): JSX.Element {

    const [ campaigns, setCampaigns ] = useState<CampaignModel[]>([]);

    const [ advertiserPlatforms, setAdvertiserPlatforms ] = useState<AdvertisingPlatform[]>([]);

    useEffect(() => {

        campaignsService.getAllCampaigns()
        .then(dbCampaigns => setCampaigns(dbCampaigns))
        .catch(err => notifyService.error(err));

        campaignsService.getAllAdvertisingPlatforms()
        .then(dbAdvertiserPlatforms => setAdvertiserPlatforms(dbAdvertiserPlatforms))
        .catch(err => notifyService.error(err));

    }, []);

    return (

        <div className="CampaignsList">

            <NavLink to="/campaigns/add">
                <Button variant="contained" color="success" className="addCampaignBtn">Add a new campaign</Button>
            </NavLink>

            <TableContainer component={Paper}>

                <Table className="campaignTable">

                    <TableHead>

                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Advertising Platform</TableCell>
                            <TableCell>Advertiser Landing Page</TableCell>
                            <TableCell>Banner Image</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Preview</TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {campaigns.map(c => (
                            <TableRow key={c.id}>

                                <TableCell> {c.campaignName} </TableCell>

                                <TableCell> {advertiserPlatforms.find(p => p.id === c.advertisingPlatformId)?.advertisingPlatform} </TableCell>
                                
                                <TableCell>
                                    <NavLink to={c.advertiserUrl} target="_blank"> {c.advertiserUrl} </NavLink>
                                </TableCell>

                                <TableCell> {c.bannerImageUrl} </TableCell>

                                <TableCell> 
                                    <NavLink to={`/campaigns/update/${c.id}`}>
                                        <Button>Edit</Button>
                                    </NavLink>
                                </TableCell>

                                <TableCell> 
                                    <NavLink to={c.bannerImageUrl} target="_blank">
                                        <Button>Preview</Button>
                                    </NavLink>
                                </TableCell>

                            </TableRow>
                        ))}

                    </TableBody>

                </Table>

            </TableContainer>
			
        </div>
    );
}

export default CampaignsList;
