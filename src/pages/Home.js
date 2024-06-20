import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1612563958093-2c3bcfbd8760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3hmb3JkJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "87vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          padding: 50,
          backgroundColor: "rgb(0,0,0,0.5)",
          textAlign: "center",
          fontSize: 32,
          fontWeight: "bold",
          color: "white",
          borderRadius: 10,
        }}
      >
        Institute of Business &<br /> Information Technology
      </h1>
    </div>
  );
};

export default Home;
