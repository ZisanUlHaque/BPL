import React from 'react';
import coinImg from "../../assets/Currency.png";
import NavImg from "../../assets/logo.png"

const Navbar = ({AvailableBalance}) => {
    return (
              <div className="navbar max-w-[1200px] flex justify-between mx-auto">
                <div className="lg:flex-1">
                  <a className=" text-xl">
                    <img className="w-[60px] h-[60px]" src={NavImg} alt="" />
                  </a>
                </div>
                <div className="text-[#131313] hidden lg:flex  mr-8 gap-8">
                  <p>Home</p>
                  <p>Fixture</p>
                  <p>Teams</p>
                  <p>Schedules</p>
                </div>
                <div className="flex items-center">
                  <button className="btn rounded-3xl">
                    <span className="mr-1">{AvailableBalance}</span>
                    <span className="mr-1 font-bold">Coin</span>
                    <img src={coinImg} alt="" />
                  </button>
                </div>
              </div>
    );
};

export default Navbar;