import React from "react";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sumit",
      lastName: "Joshi",
    };
  }
  render() {
    return (
      <>
        <div className="text-red-800 text-2xl font-extrabold">
          This is all about me and you already know my name is {this.state.name}{" "}
          {this.state.lastName}.
        </div>
        <p className="text-green-800 mb-8 font-bold">
          This is basically to demonstrate usage of a class based component and
          nested routing
        </p>
      </>
    );
  }
}
export default AboutMe;
