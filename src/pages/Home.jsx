import HighlightsCarousel from "../components/HighlightsCarousel";
import FranchisesContainer from "../components/FranchisesContainer";

const Home = () => {
  return (
    <>
      <section>
        <HighlightsCarousel />
      </section>
      <section>
        <FranchisesContainer />
      </section>
    </>
  );
};

export default Home;
