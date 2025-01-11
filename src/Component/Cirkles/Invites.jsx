import React, { useEffect } from 'react'
import InviteCard from './InviteCard';
import axiosInstance from '../../service';
import { ROUTES } from '../../constants/routes';

function Invites() {

   const fetchData = async () => {
     try {
       const response = await axiosInstance.get(ROUTES.CIRKLE.GET_USER_INVITES);
       if (response.data.success) {
        console.log(response.data)
         // Transform the data to match the required structure
        //  const transformedData = response.data.data.map((item) => ({
        //    header: {
        //      groupName: item.name,
        //      groupImage: "/images/circlepeople.svg", // Use a default image or customize it per item
        //      count: item.member_count,
        //    },
        //    contribution: {
        //      amount: item.contribution_amount,
        //      currencySymbol: item.currency,
        //      paymentStatus: {
        //        completed: 0, // Add real data if available
        //        total: item.max_members,
        //      },
        //    },
        //    dates: {
        //      nextPayment: `Day ${item.contribution_day} of the month`, // Customize as needed
        //    },
        //  }));

        //  setData(transformedData);
        //  console.log("Transformed data:", transformedData);
       }
     } catch (error) {
       console.error("Error fetching data:", error);
       if (error.response?.data?.message) {
         toast.error(error.response.data.message);
       } else {
         toast.error("An error occurred. Please try again.");
       }
     }
   };

   useEffect(() => {
     fetchData();
   }, []);

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
          Accept
        </button>
        <button className="border border-gray-400 text-gray-600 px-3 py-1 rounded-md text-xs font-semibold">
          Decline
        </button>
      </div>
    );

  return (
    <div>
      <div className="p-1  min-h-screen">
        {groups.map((group, index) => (
          <InviteCard key={index} group={group} buttons={buttons} />
        ))}
      </div>
    </div>
  );
}

export default Invites