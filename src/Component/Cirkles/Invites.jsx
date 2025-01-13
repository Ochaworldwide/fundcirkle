

import React, { useEffect, useState } from "react";
import InviteCard from "./InviteCard";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import NoInvitesCard from "./NoInvitesCard";
import { FadeLoader} from "react-spinners";

function Invites() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(ROUTES.CIRKLE.GET_USER_INVITES);
      if (response.data.success) {
        // Map the response data to the desired structure
        const formattedGroups = response.data.data.map((group, index) => ({
          image: `/images/invite-img-${index + 1}.svg`, // Placeholder image (replace with actual data if available)
          name: group.name,
          id:group.id,
          memberName: group.is_owner,
          currentMembers: group.member_count,
          totalMembers: group.max_members,
          amount: `${group.contribution_amount} `,
        }));

        setGroups(formattedGroups);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="p-1 overflow-y-scroll">
        {loading ? (
          <div className="flex justify-center items-center h-[350px]">
            <FadeLoader color="#36D7B7" />
          </div>
        ) : groups.length > 0 ? (
          groups.map((group, index) => (
            <InviteCard key={index} group={group} buttons={buttons} />
          ))
        ) : (
          <NoInvitesCard />
        )}
      </div>
    </div>
  );
}

export default Invites;
