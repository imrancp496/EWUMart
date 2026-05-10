import {
  PiStudentBold,
  PiGenderMaleBold,
  PiGenderFemaleBold,
  PiBuildingOfficeBold,
  PiFacebookLogoBold,
  PiIdentificationBadgeBold,
} from "react-icons/pi";

export default function PersonalInfo({
  fullName,
  studentID,
  gender,
  department,
  fbLink,
}) {
  const formattedFbLink =
    fbLink && !fbLink.startsWith("http") ? `https://${fbLink}` : fbLink;

  return (
    <div className="text-text2 rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-4 font-bold sm:text-lg">Personal Details</h2>
      <div className="mb-2 flex items-center gap-4">
        <PiIdentificationBadgeBold size={20} />
        <span className="text-sm">{fullName}</span>
      </div>
      <div className="mb-2 flex items-center gap-4">
        <PiStudentBold size={20} />
        <span className="text-sm">{studentID}</span>
      </div>
      <div className="mb-2 flex items-center gap-4">
        <PiBuildingOfficeBold size={20} />
        <span className="text-sm">{department}</span>
      </div>
      <div className="mb-2 flex items-center gap-4">
        {gender === "male" ? (
          <PiGenderMaleBold size={20} />
        ) : (
          <PiGenderFemaleBold size={20} />
        )}
        <span className="text-sm">{gender === "male" ? "Male" : "Female"}</span>
      </div>
      {fbLink && fbLink.trim() && (
        <div className="mb-2 flex items-center gap-4">
          <PiFacebookLogoBold size={20} />
          <a
            href={formattedFbLink}
            className="text-brand-mid text-sm hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Facebook Profile
          </a>
        </div>
      )}
    </div>
  );
}
