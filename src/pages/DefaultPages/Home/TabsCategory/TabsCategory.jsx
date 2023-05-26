import React, { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../../../SingleComponents/ToyCard";
import Loading from "../../../Shared/Loading/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TabsCategory = () => {
  const [data, setData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  useEffect(() => {
    fetch(`https://sweet-toys-server1.vercel.app/teddy-data`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    let subCategories = [];
    for (let category of data) {
      if (
        subCategories?.indexOf(category?.sub_category?.toUpperCase()) === -1
      ) {
        const toLowerCase = category.sub_category?.toUpperCase();
        subCategories.push(toLowerCase);
      } else {
      }
    }
    setSubCategory(subCategories);
  }, [data]);
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="max-container my-10 md:my-24 px-3 md:px-0">
      <div className="w-full flex justify-center items-end">
        <h1 className="text-2xl md:text-4xl font-bold">Toys</h1>
        <div className="w-2 h-2 rounded-full bg-secondary mb-1 ml-1"></div>
      </div>
      { data.length <= 0 ? <Loading></Loading> : ''}
      <Tabs className="my-10">
        <TabList className="border-b font-semibold text-sm md:text-base border-secondary">
          {subCategory?.map((category, index) => (
            <Tab key={index}>{category}</Tab>
          ))}
        </TabList>
        {subCategory?.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-5 md:mt-10" data-aos="fade-zoom-in">
              {data?.map((toyPanel) =>
                toyPanel?.sub_category?.toUpperCase() === category ? (
                  <ToyCard key={toyPanel._id} toy={toyPanel}></ToyCard>
                ) : (
                  ""
                )
              )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsCategory;
