import React from "react";
import { Code2Icon, Github, MapPin } from "lucide-react";
import "./About.css";
import AboutShimmer from "../../components/Shimmer/AboutShimmer";
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.github.com/users/krishnash1355"
      );
      const json = await response.json();

      this.setState({
        data: json,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { avatar_url, name, location, bio, login } = this.state.data;

    return this.state.loading ? (
      <AboutShimmer />
    ) : (
      <div className="about">
        <div className="about-me">
          <span className="about-title">About Me</span>
          <div className="about-me-body">
            <div className="about-me-profile-photo">
              <img src={avatar_url} alt="" />
            </div>
            <div className="about-me-details">
              <div className="about-me-sub-details">
                <span className="about-me-name">{name}</span>
                <span className="about-me-username">{login}</span>
                <div className="about-me-location">
                  <MapPin size={"1rem"} />
                  <span>{location}</span>
                </div>
                <span className="about-me-bio">{bio}</span>
              </div>

              <div className="about-me-links">
                <Link
                  to={"https://github.com/krishnash1355"}
                  target="_blank"
                  className="btn"
                >
                  <Github size={"1rem"} />
                  KrishnaSharma
                </Link>
                <Link
                  to={"https://github.com/krishnash1355"}
                  target="_blank"
                  className="btn"
                >
                  <Code2Icon size={"1rem"} />
                  FlavorFly
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-project">
          <span className="about-title">About Project</span>
          <div className="about-project-text">
            <span>
              FlavorFly is a food-ordering site built on the Swiggy API. It
              combines technology and food expertise to offer users an easy and
              enjoyable way to find and order delicious meals from various
              restaurants.
            </span>
            <span>
              The website features a sleek, user-friendly interface that makes
              browsing menus and placing orders simple. Users can easily search
              for favorite restaurants, explore new options, and customize
              orders to their liking. From comfort food to international
              cuisine, FlavorFly offers something for every taste.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
