import { Link } from "react-router-dom";
import Card from "@mui/material/Card";


export function LandingPreview({ landing, removeLanding }) {
  
  return (
    <Card className="landing-preview">
      <Link to={`/landing/${landing.id}`} className="info">
        <div className="flex justify-center">
          <h1>{landing.name}</h1>
        </div>
        <img src={landing.links.patch.small} alt="" />
        <div >
          {landing.success ? (
            <h1>Landing successful</h1>
          ) : (
            <h1>Landing Failed</h1>
          )}
        </div>
      </Link>

    </Card>
  );
}
