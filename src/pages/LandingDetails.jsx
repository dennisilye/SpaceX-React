import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { landingService } from "../services/landingService";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const LandingDetails = (props) => {
  const [landing, setLanding] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    loadLanding();
  }, []);

  const loadLanding = async () => {
    const landing = await landingService.getLandingById(params.id);
    console.log("details", landing);
    setLanding(landing);
  };

  const onGoBack = () => {
    navigate("/");
  };
  if (!landing) return <div>Loading..</div>;

  return (
    <section>
      <Card className="landing-details">
        <h1>{landing.name}</h1>
        <div className="landing-media flex justify-center align-items">
          <img src={landing.links.patch.small} alt="" />
          <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${landing.links.youtube_id}`}
          ></iframe>
        </div>
        <CardContent>
          <div className="flex space-between align-items">
            {landing.success ? (
              <h2>Landing successful</h2>
            ) : (
              <h2>Landing Failed</h2>
            )}
            <h2>{landing.date_local}</h2>
          </div>
          <div>
            {landing.failures.map((failure) => (
              <h2 key={failure.reason}>Failure: {failure.reason}</h2>
            ))}
          </div>
          <p>{landing.details}</p>
          <a href={landing.links.wikipedia} target="_blank">
            Wikipedia Link
          </a>
        </CardContent>
      </Card>
      <div className="details-action flex justify-center">
        <Button variant="contained" onClick={onGoBack}>
          Back
        </Button>
      </div>
    </section>
  );
};
