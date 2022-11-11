import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://painted-lady-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, [services]);

  useTitle("Services");
  console.log(services);
  return (
    <div>
      {services.length ? (
        <>
          <div className="mt-10 w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center">
            {services.map((service) => (
              <Service service={service}></Service>
            ))}
          </div>
          <div className="text-center p-5">
            <Link
              className="btn btn-outline animate-bounce w-48 h-12"
              to="/addservice"
            >
              Add Service
            </Link>
          </div>{" "}
        </>
      ) : (
        <progress className="progress w-full"></progress>
      )}
    </div>
  );
};

export default Services;
