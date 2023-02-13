import React from "react";
const Data = [
  {
    title: "SMK N 2 Ciamis",
    description: "Computer and Network Engineering",
    year: "2012 - 2015",
  },
  {
    title2: "Yogyakarta State University",
    description2: "S1 Electrical Engineering Education",
    year2: "2015 - 2021",
  },
  {
    title: "Bootcamp IST Yogyakarta",
    description: "Frontend mobile developer react native",
    year: "2022 - 2023",
  },
];

const Qualification = () => {
  return (
    <>
      <div id="qualification" style={{ height: "100vh" }}>
        <div class="columns">
          <div class="column is-fullhd has-text-centered">
            <h1 class="title is-3">QUALIFICATION</h1>
            <h3 class="subtitle is-6">My personal journey</h3>
          </div>
        </div>
        <br />
        {Data.map((item, index) => (
          <div class="columns" key={index}>
            <div
              class="column is-half has-text-centered"
              style={{
                border: 3,
                borderColor: "black",
                borderStyle: "solid",
                borderTop: 0,
                borderLeft: 0,
                borderBottom: 0,
              }}
            >
              <h3 class="subtitle is-5" style={{ margin: 0 }}>
                <strong>{item.title}</strong>
              </h3>
              <p>{item.description}</p>
              <p>{item.year}</p>
            </div>
            <div
              class="column is-half has-text-centered"
              style={{
                border: 3,
                borderColor: "black",
                borderStyle: "solid",
                borderTop: 0,
                borderRight: 0,
                borderBottom: 0,
              }}
            >
              <h3 class="subtitle is-5" style={{ margin: 0 }}>
                <strong> {item.title2}</strong>
              </h3>
              <p>{item.description2}</p>
              <p>{item.year2}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Qualification;
