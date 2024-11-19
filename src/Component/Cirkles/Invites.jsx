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
  return (
    <div>
      <div className="p-1  min-h-screen">
        {groups.map((group, index) => (
          <InviteCard key={index} group={group} />
        ))}
      </div>
    </div>
  );
}

export default Invites