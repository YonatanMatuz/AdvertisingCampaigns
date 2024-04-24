import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import CampaignsList from "../../DataArea/CampaignsList/CampaignsList";
import AddCampaign from "../../DataArea/AddCampaign/AddCampaign";
import UpdateCampaign from "../../DataArea/UpdateCampaign/UpdateCampaign";

function Routing(): JSX.Element {
    return (
		<Routes>

            <Route path="/campaigns" element={<CampaignsList />} />
            <Route path="/campaigns/add" element={<AddCampaign />} />
            <Route path="/campaigns/update/:id" element={<UpdateCampaign />} />

            <Route path="/" element={<Navigate to="/campaigns" />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes>
    );
}

export default Routing;
