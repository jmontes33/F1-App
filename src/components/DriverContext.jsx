import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const DriverContext = createContext([]);

export const DriverProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDrivers().catch(console.error);
  }, []);

  const getDrivers = async () => {
    let {
      data: supaDrivers,
      error,
      status,
    } = await supabase.from("drivers").select(`*`);

    if (error || status !== 200) {
      console.log(error);
      return <div>Lo sentimos D: {error}</div>;
    }

    setDrivers(supaDrivers)
  };

  return (
    <DriverContext.Provider value={[drivers, setDrivers]}>
      {children}
    </DriverContext.Provider>
  );
};