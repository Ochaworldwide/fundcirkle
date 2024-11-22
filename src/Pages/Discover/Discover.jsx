import React from 'react'
import InviteCard from '../../Component/Cirkles/InviteCard';
import Slider from '../../Component/Slider/Slider';

function Discover() {

     const groups = [
       {
         image: "/images/invite-img-1.svg", // Replace with the actual image URL
         name: "The Delhi Friends Club",
         memberName: "Amir Luke",
         currentMembers: 8,
         totalMembers: 10,
         amount: "120K",
       },
       {
         image: "/images/invite-img-2.svg", // Replace with the actual image URL
         name: "The Chennai Connections Group",
         memberName: "Michael Chen",
         currentMembers: 5,
         totalMembers: 11,
         amount: "142K",
       },
       {
         image: "/images/invite-img-3.svg", // Replace with the actual image URL
         name: "The Chennai Connections Group",
         memberName: "Michael Chen",
         currentMembers: 5,
         totalMembers: 11,
         amount: "142K",
       },
       {
         image: "/images/invite-img-4.svg", // Replace with the actual image URL
         name: "The Chennai Connections Group",
         memberName: "Michael Chen",
         currentMembers: 5,
         totalMembers: 11,
         amount: "142K",
       },
       {
         image: "/images/invite-img-5.svg", // Replace with the actual image URL
         name: "The Chennai Connections Group",
         memberName: "Michael Chen",
         currentMembers: 5,
         totalMembers: 11,
         amount: "142K",
       },
     ];

     const buttons = (
      <div className="flex gap-2">
        <button className="bg-[#00943F] text-white px-3 py-1 rounded-md text-xs font-semibold">
          Request to Join
        </button>
        
      </div>
     )



  return (
    <div>
      {/* header */}
      <div className="w-[100%] flex justify-center py-5 shadow sticky top-0 bg-white">
        <p className="text-[22px] font-[600]">Discover</p>
      </div>

      {/* search */}

      <div className="flex w-[90%] mx-auto mt-2 justify-between">
        <div className="flex border py-1 w-[80%] rounded-md px-1 shadow h-fit">
          <img
            src="/images/search-01.svg"
            alt=""
            srcset=""
            className="mr-2 h-7"
          />

          <input
            type="text"
            placeholder="Search for a Cirkle or a User "
            className="outline-none text-[10.5px]"
          />
        </div>

        <div className="p-1 border rounded-md shadow h-fit">
          <img
            src="/images/filter-horizontal.svg"
            alt=""
            srcset=""
            className=""
          />
        </div>
      </div>

      {/* body */}

      <div className="flex p-5 ">
        <p className="text-[18px] mr-5">Recommended Cirkles</p>

        <img src="/images/arrow-down-01.svg" alt="" srcset="" />
      </div>

      <div className="h-[450px] overflow-y-scroll hide-scrollbar::-webkit-scrollbar hide-scrollbar p-2">
        <div className="p-1  min-h-screen">
          {groups.map((group, index) => (
            <InviteCard key={index} group={group} buttons={buttons} />
          ))}
        </div>
      </div>

      {/* New Features */}

      <div className='pl-5 pt-3'>
        <h1 className='text-[18px]'>New Features and Offers</h1>

        {/* <Slider /> */}
      </div>

      


    </div>
  );
}

export default Discover