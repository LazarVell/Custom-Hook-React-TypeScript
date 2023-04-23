import React, { useEffect } from "react";
import users from "./users.json";
import UseFormattedData from "./Components/useFormatted";

type ZipParam = {
  zip: number;
};

type mapParams = {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: string;
};

const App = () => {
  const { formatted, sortBy, filter, search } = UseFormattedData(users);

  /**
   * Unutar ovog useEffect poziva bice proizvoljnim redom pozivane implementirane funkcije za
   * search, filter i sort da bi testirali tvoju implementaciju.
   */
  useEffect(() => {
    search!("anderson");
    filter!(({ zip }) => zip > 486);
    sortBy!("firstName");
  }, []);

  return (
    <div className="info-wrapper">
      {formatted!.map(({ id, firstName, lastName, birthdate }: mapParams) => (
        <div key={id}>
          <div>
            {firstName} {lastName}
          </div>
          <div>{birthdate}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
