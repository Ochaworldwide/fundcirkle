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
          id: group.id,
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


    const handleSubmit = () => {
      // Validate required fields
      // if (
      //   !name ||
      //   !description ||
      //   !category ||
      //   !contribution_amount ||
      //   !frequency ||
      //   !privacy
      // ) {
      //   console.log("Some required fields are missing!");
      //   return;
      // }

      // const payload = {
      //   name: name,
      //   members: emails,
      //   max_members: members,
      //   description: description,
      //   category: selectedCategoryId,
      //   contribution_amount: contribution_amount,
      //   contribution_frequency: frequency,
      //   contribution_day: dueDate,
      //   privacy: privacy,
      //   state: state,
      //   currency: "INR",
      // };





      console.log(groups)

      // const payload = {
      //   id: 5,
      //   user_id: 3,
      //   category_id: 2,
      //   name: "Kinsmen",
      //   description: "None for now",
      //   contribution_amount: "5000.00",
      //   contribution_frequency: "monthly",
      //   contribution_week: 1,
      //   contribution_month: 1,
      //   contribution_day: "25",
      //   privacy: "public",
      //   max_members: 10,
      //   state_id: 10,
      //   locations: null,
      //   currency: "INR",
      //   status: "active",
      //   created_at: "2024-12-14T21:56:35.000000Z",
      //   updated_at: "2024-12-14T23:00:17.000000Z",
      //   slug: "kinsmen",
      //   member_count: 0,
      //   is_owner: false,
      // };

      // console.log("Payload:", payload);
      // const cirkleId = 23;

      // axiosInstance
      //   .post(`/cirkles/${cirkleId}/join`, payload)
      //   .then((response) => {
      //     if (response.data.success) {
      //       console.log("Cirkle created successfully!");
      //     } else {
      //       console.error("API responded with failure:", response.data);
      //     }
      //   })
      //   .catch((error) => {
      //     if (error.response) {
      //       console.error("API Error:", error.response.data);
      //     } else if (error.request) {
      //       console.error("Network Error:", error.request);
      //     } else {
      //       console.error("Error:", error.message);
      //     }
      //   });
    };


  const buttons = (
    <div className="flex gap-2">
      <button className="bg-[#00943F] text-white px-3 py-1 rounded-md text-xs font-semibold"
      onClick={() => {
        handleSubmit();
      }}>
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
            <InviteCard group={group} buttons={buttons}  />
          ))
        ) : (
          <NoInvitesCard />
        )}
      </div>
    </div>
  );
}

export default Invites;
