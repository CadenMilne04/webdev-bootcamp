import Carousel from "react-bootstrap/Carousel";
import WorkOutAppCarousel from "../components/WorkoutAppCarousel";

function Projects() {
    return (
        <Carousel>
            <Carousel.Item>
                <WorkOutAppCarousel />
            </Carousel.Item>
            <Carousel.Item>
                <WorkOutAppCarousel />
            </Carousel.Item>
            <Carousel.Item>
                <WorkOutAppCarousel />
            </Carousel.Item>
        </Carousel>
    );
}

export default Projects;
