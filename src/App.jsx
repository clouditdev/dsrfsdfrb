import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Providers from "./components/Layout/Providers";
import MainRouter from "../src/components/router/MainRouter"
import { Games } from "./components/router/Games";
function App() {
  return (
    <div className="flex flex-col w-full justify-between font-rubik bg-[#242532]">
      <div className="flex absolute md:fixed w-full z-40 invisible -top-80 -left-80 md:top-0 md:left-0 md:visible">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<MainRouter />} />
        <Route path="/slots/infin-queenofthesun" element={<Games title="Queen of the Sun - Booongo" demo="https://api-prod.infingame.com/bm-launch/softswiss/jetcasino/prod?gameName=queen_of_the_sun&key=TEST1000&country=RUS&demo=true&shell=request&language=ru&segment=desktop"/>} />
        <Route path="/slots/relax-moneytrain2" element={<Games title="Money Train 2 - Relax Gaming" demo="https://cf-iomeu-cdn.relaxg.com/casino/launcher.html?channel=web&gameid=moneytrain2&lang=ru_RU&moneymode=fun&partner=roxcasino&partnerid=475&apex=1&fullscreen=false"/>} />
      </Routes>
      <Providers />
      <Footer />
    </div>
  );
}

export default App;
