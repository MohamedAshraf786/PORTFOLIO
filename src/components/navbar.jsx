function Navbar() {
  return (
    <div
      className="nav"
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "green",
        color: "black",
        padding: "10px",
        position: "sticky",
        top: 0,
      }}
    >
      <a href="#header" style={{ textDecoration: "none" }}>HOME</a>

      <a href="#about" style={{ textDecoration: "none" }}>ABOUT</a>

      <a href="#skills" style={{ textDecoration: "none" }}>SKILLS</a>

      <a href="#project" style={{ textDecoration: "none" }}>PROJECTS</a>

      <a href="#contact" style={{ textDecoration: "none" }}>CONTACT</a>
    </div>
  );
}

export default Navbar;