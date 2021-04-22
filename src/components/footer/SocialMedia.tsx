import Button from "@components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: Fix button component rendering button elements for non-next.js Link components i.e. <a></a> tags
const SocialMedia = () => (
  <section className="flex flex-col">
    <h3 className="font-display font-bold mb-2">Follow us</h3>
    <p className=" mb-4">
      Be sure to follow us on our various social media channels for competitions
      and new product info.
    </p>
    <ul className="flex gap-4 mt-auto">
      <li>
        <a href="https://www.facebook.com/Buildarmybricks">
          <Button
            variant="primary"
            size="lg"
            className="leading-none px-1.5 text-2xl"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook-f"]}
              fixedWidth
              className="block my-0.5 mx-px"
              title="Visit our Facebook page"
            />
          </Button>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/buildarmy/">
          <Button
            variant="primary"
            size="lg"
            className="leading-none px-1.5 text-2xl"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              fixedWidth
              className="block my-0.5 mx-px"
              title="Visit our Instagram page"
            />
          </Button>
        </a>
      </li>
      <li>
        <a href="https://www.flickr.com/people/134176593@N04/">
          <Button
            variant="primary"
            size="lg"
            className="leading-none px-1.5 text-2xl"
          >
            <FontAwesomeIcon
              icon={["fab", "flickr"]}
              fixedWidth
              className="block my-0.5 mx-px"
              title="Visit our Flickr page"
            />
          </Button>
        </a>
      </li>
      <li>
        <a href="https://youtube.com/c/buildarmy">
          <Button
            variant="primary"
            size="lg"
            className="leading-none px-1.5 text-2xl"
          >
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              fixedWidth
              className="block my-0.5 mx-px"
              title="Visit our YouTube channel"
            />
          </Button>
        </a>
      </li>
    </ul>
  </section>
);

export default SocialMedia;
