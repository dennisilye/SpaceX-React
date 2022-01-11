import { LandingPreview } from "./LandingPreview";

// export function RobotList({ robots, removeRobot }) {
export function LandingList({ landings,  removeLanding }) {
    return (
        <section className="landing-list simple-cards-grid">
            {landings.map(landing =>
                <LandingPreview removeLanding={removeLanding}  landing={landing} key={landing.id} />
            )}
        </section>
    )
}
