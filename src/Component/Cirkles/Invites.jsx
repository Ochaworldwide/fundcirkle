import React from 'react'
import InviteCard from './InviteCard';

function Invites() {

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